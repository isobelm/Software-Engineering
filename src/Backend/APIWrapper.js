const API_ENDPOINT = 'https://www.wikidata.org/w/api.php'
const MAX_QUERY_SIZE = 50
const NUM_RETRIES = 5

/**
 * @typedef {Object} User
 * @property {number} userid - The user's id
 * @property {number} name - The user's name
 * @property {number} editcount - The number of edits the user did
 * @property {number} recentactions - The number of actions a user did within
 *           30 days
 * @property {Array} groups - An array of strings which contains the groups
 *           the user belongs in. For example if the user contains "bot", it is
 *           a non human user
 */

/**
 * Returns a list of 500 users who were recently active within 30 days which is
 * sorted by the most edits in descending order
 *
 * @returns {Promise<User[]>} - A Promise which resolves to an array of User
 *          objects
 */
export const getMostEditsUsers = async () => {
  const compare = (a, b) => b.editcount - a.editcount
  const params = {
    action: 'query',
    format: 'json',
    list: 'allusers',
    auprop: 'editcount|groups',
    aulimit: 'max',
    auwitheditsonly: '1',
    auactiveusers: '1',
  }
  const users = query(params, NUM_RETRIES)
    .then(data => data.query.allusers)
    .then(users => users.sort(compare))
  return users
}
/**
 * Returns a list of 500 users who were recently active within 30 days which is
 * sorted by the most recent actions in descending order
 *
 * @returns {Promise<User[]>} - A Promise which resolves to an array of User
 *          objects
 */
export const getMostActiveUsers = async () => {
  const compare = (a, b) => b.recentactions - a.recentactions
  const params = {
    action: 'query',
    format: 'json',
    list: 'allusers',
    auprop: 'editcount|groups',
    aulimit: 'max',
    auwitheditsonly: '1',
    auactiveusers: '1',
  }
  const users = query(params, NUM_RETRIES)
    .then(data => data.query.allusers)
    .then(users => users.sort(compare))
  return users
}

export const getRecentEditsWithSize = async () => {
  const params = {
    action: 'query',
    format: 'json',
    list: 'recentchanges',
    rcprop: 'title|ids|sizes|timestamp',
    rclimit: '500',
  }
  const edits = query(params, NUM_RETRIES).then(
    result => result.query.recentchanges
  )
  return edits
}
/**
 * Returns recent 500 recent edits sorted by size of changes made in absolute value
 * So large additions and large deletions are included
 */
export const getRecentLargestEdits = async () => {
  const editList = await getRecentEditsWithSize()
  editList.sort(
    (a, b) => Math.abs(b.newlen - b.oldlen) - Math.abs(a.newlen - a.oldlen)
  )
  return editList
}

/**
 * @typedef {Object} PageInfo
 * @property {string} id - The id of the page
 * @property {actions} actions - Number of actions which has been performed on
 *           that page
 * @property {string} title - The title of the page
 */

/**
 * Returns an array of most active pages from recent changes feed
 *
 * @param {string} prevTimestamp - Previous timestamp when the function was
 *        last called
 * @return {Promise<PageInfo[] | string>}
 */
export const getMostActivePages = async prevTimestamp => {
  const [recentChanges, newTimestamp] = queryRecentChanges(prevTimestamp)
  const activePages = recentChanges.then(recentChanges =>
    countPageOccurances(recentChanges)
  )
  return [await activePages, newTimestamp]
}

/**
 * Returns an array of most users pages from recent changes feed
 *
 * @param {string} prevTimestamp - Previous timestamp when the function was
 *        last called
 * @return {Promise<User[] | string>}
 */
export const getRecentActiveUsers = async prevTimestamp => {
  const [recentChanges, newTimestamp] = queryRecentChanges(prevTimestamp)
  const activeUsers = recentChanges.then(activeUsers => countUsers(activeUsers))
  return [await activeUsers, newTimestamp]
}

/**
 * Batches a query to cirumvent the 50 items query limit
 *
 * @param {string} itemsKey the query key
 * @param {Array} items the items to add to the query
 * @param {Object} params the parameters of the query
 */
export const batchQuery = async (itemsKey, items, params) => {
  let result = []
  let batches = null
  if (items instanceof Array) batches = createBatch(items, MAX_QUERY_SIZE)
  else batches = [[items]]
  const results = batches.map(async batch => {
    const batchString = batch.join('|')
    params[itemsKey] = batchString
    return query(params, NUM_RETRIES)
      .then(data => result.push(data))
      .catch(err => null)
  })
  await Promise.all(results)
  return result
}

// ~ Helper Functions ---------------------------------------------------------

/**
 * Returns a the response of a query to the Wikidata API endpoint
 *
 * @param {Object} params - Object of parameters to use when querying
 * @param {number} n - Number of times to retry if failure occurs
 * @return {Promise<Object>}
 */
const query = async (params, n) => {
  try {
    const paramsString = new URLSearchParams(params).toString()
    const url = API_ENDPOINT + '?' + paramsString + '&origin=*'
    return await fetch(url).then(response => response.json())
  } catch (err) {
    if (n === 1) throw err
    return await query(params, n - 1)
  }
}

/**
 * @typedef {Object} recentChanges
 * @property {number} ns
 * @property {number} old_revid - The old revision id
 * @property {number} pageid - The page id
 * @property {number} rcid - The recent change id
 * @property {number} revid - The current revision id
 * @property {string} timestamp - Timestamp of change
 * @property {string} title - Title of the page changed
 * @property {string} type - Type of action e.g. "new", "edit"
 * @property {string} user - The username of the editor
 */

/**
 * Queries the API for the most recent changes
 *
 * @param {string} prevTimestamp - Previous timestamp when the function was
 *        last called
 * @return {Array<Promise<recentChanges[]> | string>}
 */
const queryRecentChanges = prevTimestamp => {
  let tmpTimestamp = new Date()
  const newTimestamp = tmpTimestamp.toISOString()
  tmpTimestamp = tmpTimestamp - 1000
  tmpTimestamp = new Date(tmpTimestamp).toISOString()
  const params = {
    action: 'query',
    format: 'json',
    list: 'recentchanges',
    rcprop: 'title|ids|timestamp|user',
    rclimit: 'max',
    rcstart: tmpTimestamp,
    rcend: prevTimestamp,
  }
  const recentChanges = query(params, NUM_RETRIES).then(
    data => data.query.recentchanges
  )
  return [recentChanges, newTimestamp]
}

/**
 * Returns the number of times a page appeared on the recent changes feed sorted by
 * number of actions done on the page
 *
 * @param {recentChanges[]} recentChanges - The array of recent changes from a query
 */
const countPageOccurances = recentChanges => {
  const compare = (a, b) => b.actions - a.actions
  const titleCounts = {}
  recentChanges.forEach(change => {
    const actions = titleCounts[change.title] || 0
    titleCounts[change.title] = actions + 1
  })
  const titles = Object.entries(titleCounts).map(([id, actions]) => ({
    id,
    actions,
  }))
  titles.sort(compare)
  return titles
}

/**
 * Returns the number of times a user appeared on the recent changes feed sorted by
 * number of actions done by that user
 *
 * @param {recentChanges[]} recentChanges - The array of recent changes from a query
 */
const countUsers = recentChanges => {
  const compare = (a, b) => b.actions - a.actions
  const userCounts = {}
  recentChanges.forEach(change => {
    const user = change.user
    const numActions = userCounts[user] || 0
    userCounts[user] = numActions + 1
  })
  const users = Object.entries(userCounts).map(([name, recentactions]) => ({
    name,
    recentactions,
  }))
  const userNames = users.map(({ name }) => name)
  const key = 'ususers'
  const params = {
    action: 'query',
    format: 'json',
    list: 'users',
    usprop: 'groups',
  }
  const groups = {}
  batchQuery(key, userNames, params)
    .then(data =>
      data.forEach(queryResult => {
        const users = queryResult.query.users
        users.forEach(userObj => {
          if (userObj.groups) groups[userObj.name] = userObj.groups
        })
      })
    )
    .then(() => {
      users.forEach(userObj => (userObj.groups = groups[userObj.name]))
      users.sort(compare)
    })
  return users
}

/**
 * Splits up an array into smaller arrays
 *
 * @param {Array} array - Array to create batches from
 * @param {number} size - Batch size
 * @return {Array} batches - An array containing the batches which are of
 *         length size
 */
const createBatch = (array, size) => {
  const batches = []
  while (array.length > 0) {
    batches.push(array.splice(0, size))
  }
  return batches
}
