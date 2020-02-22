const API_ENDPOINT = 'https://www.wikidata.org/w/api.php'

/**
 * @typedef {Object} User
 * @property {number} userid - The user's id
 * @property {number} name - The user's name
 * @property {number} editcount - The number of edits the user did
 * @property {number} recentactions - The number of actions a user did within
 *           30 days
 */

/**
 * Returns a list of 500 users who were recently active within 30 days which is
 * sorted by the most edits in descending order
 * @returns {Promise<User[]>} - A Promise which resolves to an array of User
 *          objects
 */
export const getMostEditsUsers = async () => {
  const compare = (a, b) => b.editcount - a.editcount
  const params = {
    action: 'query',
    format: 'json',
    list: 'allusers',
    auprop: 'editcount',
    aulimit: 'max',
    auwitheditsonly: '1',
    auactiveusers: '1',
  }
  const users = query(params)
    .then((data) => data.query.allusers)
    .then((users) => users.sort(compare))
  return users
}

/**
 * Returns a list of 500 users who were recently active within 30 days which is
 * sorted by the most recent actions in descending order
 * @returns {Promise<User[]>} - A Promise which resolves to an array of User
 *          objects
 */
export const getMostActiveUsers = async () => {
  const compare = (a, b) => b.recentactions - a.recentactions
  const params = {
    action: 'query',
    format: 'json',
    list: 'allusers',
    auprop: 'editcount',
    aulimit: 'max',
    auwitheditsonly: '1',
    auactiveusers: '1',
  }
  const users = query(params)
    .then((data) => data.query.allusers)
    .then((users) => users.sort(compare))
  return await users
}

const query = async (params) => {
  const paramsString = new URLSearchParams(params).toString()
  const url = API_ENDPOINT + '?' + paramsString + '&origin=*'
  return await fetch(url).then((response) => response.json())
}
