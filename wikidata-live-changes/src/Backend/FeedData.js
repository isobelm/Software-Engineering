import { getUserData } from './APIWrapper'

const URL = 'https://stream.wikimedia.org/v2/stream/recentchange'

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
    const userNames = [change.user]
    const registration = (await getUserData(userNames))[0].registration
    change.user = { name: change.user, registration: registration }
    this.changes.unshift(change)
    if (this.changes.length > 50) this.changes.pop()
  }
}

export default FeedData
