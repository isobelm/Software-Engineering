const URL = 'https://stream.wikimedia.org/v2/stream/recentchange'

/** Class which wraps the Wikidata API recent changes feed */
class FeedData {
  /**
   * Create a new feed data object
   *
   * @param {number} maxItems - the maximum number of items to keep in the
   *        feed.
   */
  constructor(maxItems) {
    this.eventSource = new EventSource(URL)
    this.changes = []
    this.maxItems = maxItems
    this.eventSource.addEventListener('message', (event) =>
      this.handleMessage(event),
    )
  }

  async handleMessage(event) {
    const change = JSON.parse(event.data)
    this.changes.unshift(change)
    if (this.changes.length > this.maxItems) this.changes.pop()
  }
}

export default FeedData
