const API_ENDPOINT = 'https://www.wikidata.org/w/api.php';
const SCORING_ENDPOINT = 'https://ores.wikimedia.org/v3/scores/wikidatawiki/';
const MAX_QUERY_SIZE = 50;
const NUM_RETRIES = 5;

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
 * @returns {Promise.<User[]>} - A Promise which resolves to an array of User
 *          objects
 */
export const getMostEditsUsers = async () => {
  const compare = (a, b) => b.editcount - a.editcount;
  const params = {
    action: 'query',
    format: 'json',
    list: 'allusers',
    auprop: 'editcount|groups',
    aulimit: 'max',
    auwitheditsonly: '1',
    auactiveusers: '1',
  };
  const users = query(API_ENDPOINT, params, NUM_RETRIES)
    .then(data => data.query.allusers)
    .then(users => users.sort(compare));
  return users;
};
/**
 * Returns a list of 500 users who were recently active within 30 days which is
 * sorted by the most recent actions in descending order
 *
 * @returns {Promise.<User[]>} - A Promise which resolves to an array of User
 *          objects
 */
export const getMostActiveUsers = async () => {
  const compare = (a, b) => b.recentactions - a.recentactions;
  const params = {
    action: 'query',
    format: 'json',
    list: 'allusers',
    auprop: 'editcount|groups',
    aulimit: 'max',
    auwitheditsonly: '1',
    auactiveusers: '1',
  };
  const users = query(API_ENDPOINT, params, NUM_RETRIES)
    .then(data => data.query.allusers)
    .then(users => users.sort(compare));
  return users;
};

export const getRecentEditsWithSize = async () => {
  const params = {
    action: 'query',
    format: 'json',
    list: 'recentchanges',
    rcprop: 'title|ids|sizes|timestamp',
    rclimit: '500',
  };
  const edits = query(API_ENDPOINT, params, NUM_RETRIES).then(
    result => result.query.recentchanges
  );
  return await edits;
};

export const getRecentEditsWithFlags = async () => {
  const params = {
    action: 'query',
    format: 'json',
    list: 'recentchanges',
    rcprop: 'ids',
    rclimit: '50',
  };
  const edits = query(API_ENDPOINT, params, NUM_RETRIES).then(
    result => result.query.recentchanges
  );

  let revids = await edits;
  revids = revids.map(recentChange => recentChange.revid);
  let scores = await getScore(revids);

  const data = [
    { id: 'damaging', label: 'damaging', value: 0, color: '#F25543' },
    { id: 'unsure', label: 'unsure', value: 0, color: '#FFF047' },
    { id: 'good faith', label: 'good faith', value: 0, color: '#92E16F' },
  ];

  scores = await scores;

  Object.values(scores).forEach(score => {
    if (
      score.damaging.score !== undefined &&
      score.damaging.score.prediction === true
    ) {
      data[0].value += 1;
    } else if (
      score.damaging.score !== undefined &&
      score.damaging.score.prediction === false
    ) {
      data[2].value += 1;
    } else {
      data[1].value += 1;
    }
  });

  return data;
};

/**
 * Returns recent 500 recent edits sorted by size of changes made in absolute value
 * So large additions and large deletions are included
 */
export const getRecentLargestEdits = async () => {
  const editList = await getRecentEditsWithSize();

  editList.forEach(item => {
    item.value = Math.abs(item.newlen - item.oldlen);
    item.id = item.revid.toString();
    item.label = item.title;
  });

  editList.sort((a, b) => b.value - a.value);

  return editList;
};

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
 * @returns {(Promise.<PageInfo[]> | string)[]}
 */
export const getMostActivePages = async prevTimestamp => {
  const [recentChanges, newTimestamp] = queryRecentChanges(prevTimestamp);
  const activePages = recentChanges.then(recentChanges =>
    countPageOccurances(recentChanges)
  );
  return [await activePages, newTimestamp];
};

/**
 * Returns an array of most users pages from recent changes feed
 *
 * @param {string} prevTimestamp - Previous timestamp when the function was
 *        last called
 * @returns {(Promise.<User[]> | string)[]}
 */
export const getRecentActiveUsers = async prevTimestamp => {
  const [recentChanges, newTimestamp] = queryRecentChanges(prevTimestamp);
  const activeUsers = recentChanges.then(activeUsers =>
    countUsers(activeUsers)
  );
  return [await activeUsers, newTimestamp];
};

/**
 * Batches a query to cirumvent the 50 items query limit
 *
 * @param {string} itemsKey the query key
 * @param {Array} items the items to add to the query
 * @param {string} endpoint the endpoint url
 * @param {Object} params the parameters of the query
 */
export const batchQuery = async (itemsKey, items, endpoint, params) => {
  const result = [];
  let batches = null;
  if (items instanceof Array) {
    batches = createBatch(items, MAX_QUERY_SIZE);
  } else {
    batches = [[items]];
  }
  const results = batches.map(async batch => {
    params[itemsKey] = batch.join('|');
    return query(endpoint, params, NUM_RETRIES)
      .then(data => result.push(data))
      .catch(err => null);
  });
  await Promise.all(results);
  return result;
};

/**
 * @typedef {Object} RecentChanges
 * @property {number} newlen - the number of bytes the page uses after the change
 * @property {number} ns
 * @property {number} old_revid - The old revision id
 * @property {number} oldlen - the number of bytes the page uses before the change
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
 * @returns {(Promise.<RecentChanges[]> | string)[]}
 */
export const queryRecentChanges = prevTimestamp => {
  let tmpTimestamp = new Date();
  const newTimestamp = tmpTimestamp.toISOString();
  tmpTimestamp = tmpTimestamp - 1000;
  tmpTimestamp = new Date(tmpTimestamp).toISOString();
  const params = {
    action: 'query',
    format: 'json',
    list: 'recentchanges',
    rcprop: 'title|ids|timestamp|user|sizes',
    rclimit: 'max',
    rcstart: tmpTimestamp,
    rcend: prevTimestamp,
  };
  const recentChanges = query(API_ENDPOINT, params, NUM_RETRIES)
    .then(data => data.query.recentchanges)
    .then(recentChanges => {
      const revisionIds = recentChanges.map(recentChange => recentChange.revid);
      return getScore(revisionIds).then(scores =>
        recentChanges.map(recentChange => {
          recentChange.scores = scores[recentChange.revid];
          return recentChange;
        })
      );
    });
  return [recentChanges, newTimestamp];
};

/**
 * Returns the groups of each username in the input array
 *
 * @param {string[]} userNames - an array of usernames to fetch the group of
 * @returns {Map.<string, string[]>} - map of username to an array of groups
 *         they belong to
 */
export const getUserGroups = userNames => {
  const key = 'ususers';
  const params = {
    action: 'query',
    format: 'json',
    list: 'users',
    usprop: 'groups',
  };
  const groups = batchQuery(key, userNames, API_ENDPOINT, params).then(data => {
    const groups = {};
    data.forEach(queryResult => {
      const users = queryResult.query.users;
      users.forEach(userObj => {
        if (userObj.groups) {
          groups[userObj.name] = userObj.groups;
        }
      });
    });
    return groups;
  });
  return groups;
};

// ~ Helper Functions ---------------------------------------------------------

/**
 * Returns a the response of a query to the Wikidata API endpoint
 *
 * @param {Object} params - Object of parameters to use when querying
 * @param {number} n - Number of times to retry if failure occurs
 * @returns {Promise.<Object>}
 */
const query = async (endpoint, params, n) => {
  try {
    const paramsString = new URLSearchParams(params).toString();
    const url = endpoint + '?' + paramsString + '&origin=*';
    return await fetch(url).then(response => response.json());
  } catch (err) {
    if (n === 1) {
      throw err;
    }
    return await setTimeout(query(endpoint, params, n - 1), 500);
  }
};

/**
 * Retruns the score of the revision id to find out if the edit was harmful or not
 *
 * @param {number[]} revisionIds - Revision ids to obtain the score of
 * @returns {Promise.<Object>}
 */
const getScore = async revisionIds => {
  if (revisionIds.length === 0) {
    return;
  }
  const key = 'revids';
  const params = {};
  let scores = {};
  return batchQuery(key, revisionIds, SCORING_ENDPOINT, params).then(
    resultBatch => {
      resultBatch.forEach(
        result => (scores = { ...scores, ...result.wikidatawiki?.scores })
      );
      return scores;
    }
  );
};

/**
 * Returns the number of times a page appeared on the recent changes feed sorted by
 * number of actions done on the page
 *
 * @param {RecentChanges[]} recentChanges - The array of recent changes from a query
 */
const countPageOccurances = recentChanges => {
  const compare = (a, b) => b.actions - a.actions;
  const titleCounts = {};
  recentChanges.forEach(change => {
    const actions = titleCounts[change.title] || 0;
    titleCounts[change.title] = actions + 1;
  });
  const titles = Object.entries(titleCounts).map(([id, actions]) => ({
    id,
    actions,
  }));
  titles.sort(compare);
  return titles;
};

/**
 * Returns the number of times a user appeared on the recent changes feed sorted by
 * number of actions done by that user
 *
 * @param {RecentChanges[]} recentChanges - The array of recent changes from a query
 */
const countUsers = recentChanges => {
  const compare = (a, b) => b.actions - a.actions;
  const userCounts = {};
  recentChanges.forEach(change => {
    const user = change.user;
    const numActions = userCounts[user] || 0;
    userCounts[user] = numActions + 1;
  });
  const users = Object.entries(userCounts).map(([username, actions]) => ({
    username,
    actions,
  }));
  const userNames = users.map(({ username }) => username);
  getUserGroups(userNames).then(groups => {
    users.forEach(userObj => (userObj.groups = groups[userObj.username]));
    users.sort(compare);
  });
  return users;
};

/**
 * Splits up an array into smaller arrays
 *
 * @param {Array} array - Array to create batches from
 * @param {number} size - Batch size
 * @returns {Array} batches - An array containing the batches which are of
 *         length size
 */
const createBatch = (array, size) => {
  const batches = [];
  while (array.length > 0) {
    batches.push(array.splice(0, size));
  }
  return batches;
};
