import React, { useState, useEffect } from 'react'
import FeedData from '../Backend/FeedData'
// eslint-disable-next-line
import style from '../style.css'

function TestFeedData() {
  const [feedData, setFeedData] = useState(new FeedData(30))
  const [recentChanges, setRecentChanges] = useState({
    items: [],
  })

  useEffect(() => {
    const refresh = setInterval(() => {
      feedData.refresh()
      setRecentChanges({ items: feedData.changes })
    }, 1000)
    return () => {
      setRecentChanges({ items: [] })
      clearInterval(refresh)
      setFeedData(null)
    }
  }, [feedData])

  return (
    <div>
      <h3 className="text-blue text-left">Most Recent Activity</h3>
      <ul className="list-group">
        {recentChanges.items.map((item, index) => (
          <li className="list-group-item text-left" key={index}>
            {`User ${item.user} did action ${item.type} on ${
              item.title
            } ${getTimeDifference(item.timestamp)} seconds ago`}
          </li>
        ))}
      </ul>
    </div>
  )
}

const getTimeDifference = toCompare =>
  Math.round(
    Math.abs(new Date().getTime() - new Date(toCompare).getTime()) / 1000
  )

export default TestFeedData
