import React, { useState, useEffect } from 'react'
import FeedData from '../Backend/FeedData'
// eslint-disable-next-line
import style from '../style.css'

function Feed() {
  const [feedData] = useState(new FeedData(30))
  const [paused, setPaused] = useState(false)
  const [recentChanges, setRecentChanges] = useState({
    items: [],
  })

  useEffect(() => {
    const refresh = setInterval(() => {
      if (!paused) feedData.refresh()
      setRecentChanges({ items: feedData.changes })
    }, 1000)
    return () => clearInterval(refresh)
  }, [feedData, paused])

  function togglePause() {
    setPaused(prevPause => !prevPause)
  }

  return (
    <div>
      <h3 className="text-blue text-left">Most Recent Activity</h3>
      <form className="text-left" onChange={togglePause}>
        <label>
          <input type="checkbox" /> Paused
        </label>
      </form>
      <ul className="list-group">
        {recentChanges.items.map((item, index) => (
          <li className="list-group-item text-left" key={index}>
            {`User ${item.user} action ${item.type} on ${
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

export default Feed
