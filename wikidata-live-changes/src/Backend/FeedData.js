const URL = 'https://stream.wikimedia.org/v2/stream/recentchange'
const MAX_NUM_ITEMS = 50

class FeedData {
  constructor() {
    this.eventSource = new EventSource(URL)
    this.changes = []
    this.eventSource.addEventListener('message', event =>
      this.handleMessage(event)
    )
  }

  async handleMessage(event) {
    const change = JSON.parse(event.data)
    this.changes.unshift(change)
    if (this.changes.length > MAX_NUM_ITEMS) this.changes.pop()
  }
}

export default FeedData
