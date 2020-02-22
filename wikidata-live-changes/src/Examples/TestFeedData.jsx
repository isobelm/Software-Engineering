import React, { useState, useEffect } from 'react'
import FeedData from '../Backend/FeedData'

function TestFeedData() {
  const [feedData] = useState(new FeedData())
  const [recentChanges, setRecentChanges] = useState({
    items: feedData.changes,
  })

  useEffect(() => {
    setInterval(() => setRecentChanges({ items: feedData.changes }), 1000)
  }, [feedData.changes])

  return (
    <div>
      <ul style={{ listStyleType: 'none' }}>
        {recentChanges.items.map((item, index) => (
          <li key={index}>
            {`User ${item.user} did action ${item.type} ${
              item.title
            } ${getTimeDifference(item.timestamp)} seconds ago`}
          </li>
        ))}
      </ul>
    </div>
  )
}

const getTimeDifference = (toCompare) =>
  Math.round(Math.abs(new Date().getTime() / 1000 - toCompare))

export default TestFeedData
