import { queryRecentChanges } from './APIWrapper'

/** Class which wraps the Wikidata API recent changes feed */
class FeedData {
  /**
   * Create a new feed data object
   *
   * @param {number} maxItems - the maximum number of items to keep in the
   *        feed.
   */
  constructor(maxItems) {
    this.changes = []
    this.maxItems = maxItems
    this.prevTimestamp = new Date().toISOString()
  }

  refresh() {
    const [recentChanges, newTimeStamp] = queryRecentChanges(this.prevTimestamp)
    recentChanges.then(changes =>
      changes.forEach(change => {
        this.changes.unshift(change)
        if (this.changes.length > this.maxItems) this.changes.pop()
      })
    )
    this.prevTimestamp = newTimeStamp
  }
}

export default FeedData
