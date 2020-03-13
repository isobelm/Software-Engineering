import React, { useState, useEffect } from 'react'
import FeedData from '../Backend/FeedData'
// eslint-disable-next-line
import style from '../style.css'

function TestFeedData() {
  const [feedData] = useState(new FeedData(30))
  const [recentChanges, setRecentChanges] = useState({
    items: feedData.changes,
  })

  useEffect(() => {
    setInterval(() => setRecentChanges({ items: feedData.changes }), 1000)
  }, [feedData.changes])

  return (
    <div>
      <h3 class="text-blue text-left">Most Recent Activity</h3>
      <ul class="list-group">
        {recentChanges.items.map((item, index) => (
          <li class="list-group-item text-left" key={index}>
            {`User ${item.user} did action ${item.type} ${
              item.title
            } ${getTimeDifference(item.timestamp)} seconds ago`}
          </li>
        ))}
      </ul>
    </div>
  )
}

const getTimeDifference = toCompare =>
  Math.round(Math.abs(new Date().getTime() / 1000 - toCompare))

export default TestFeedData
