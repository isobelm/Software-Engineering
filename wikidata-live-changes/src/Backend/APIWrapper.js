const API_ENDPOINT = 'https://www.wikidata.org/w/api.php'

/**
 * @typedef {Object} User
 * @property {number} userid - The user's id
 * @property {number} name - The user's name
 * @property {number} editcount - The number of edits the user did
 * @property {number} recentactions - The number of actions a user did within
 *           30 days 
 * /

/**
 * Returns a list of 500 users who were recently active within 30 days which is
 * sorted by the most edits
 * @returns {User[]} - An array of user objects
 */
export const getMostEdits = async () => {
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
  const data = await query(params)
  const users = data.query.allusers
  users.sort(compare)
  console.log(users)
}

/**
 * Returns a list of 500 users who were recently active within 30 days which is
 * sorted by the most recent actions
 * @returns {User[]} - An array of user objects
 */
export const getMostActive = async () => {
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
  const data = await query(params)
  const users = data.query.allusers
  users.sort(compare)
  console.log(users)
}

const query = async params => {
  const paramsString = new URLSearchParams(params).toString()
  const url = API_ENDPOINT + '?' + paramsString + '&origin=*'
  const data = await fetch(url).then(response => response.json())
  return data
}
