const API_ENDPOINT = 'https://www.wikidata.org/w/api.php'

export const getUserData = async userNames => {
  const namesString = userNames.join('|')

  const params = {
    action: 'query',
    list: 'users',
    ususers: namesString,
    usprop: 'registration',
    format: 'json',
  }
  const paramsString = new URLSearchParams(params).toString()
  const url = API_ENDPOINT + '?' + paramsString + '&origin=*'
  const userData = await fetch(url).then(response => response.json())
  return userData.query.users
}
