import React, { useEffect, useState } from 'react'

const URL = 'https://stream.wikimedia.org/v2/stream/recentchange'

function TestFetchData() {
  const [recentChanges, setRecentChanges] = useState([])
  const [eventSource] = useState(new EventSource(URL))

  useEffect(
    () =>
      (eventSource.onmessage = event => {
        const change = JSON.parse(event.data)
        setRecentChanges(prevChanges => {
          const newChanges = [...prevChanges]
          newChanges.push(change)
          if (newChanges.length > 10) newChanges.shift()
          return newChanges
        })
      }),
    []
  )

  return (
    <div>
      <ul>
        {recentChanges.map((item, index) => (
          <li key={index}>
            {item.title} {item.user} {item.timestamp} {item.bot}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TestFetchData
