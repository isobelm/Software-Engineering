import React, { useEffect, useState } from 'react'
import { getRecentChanges, getUserData } from '../Backend/APIWrapper'

function TestFetchData() {
  const [recentChanges, setRecentChanges] = useState([])

  useEffect(() => {
    async function fetchData() {
      const recentChanges = await getRecentChanges()
      const items = recentChanges.items
      const authorNames = []
      items.forEach(item => authorNames.push(item.authors[0].name))
      const userData = await getUserData(authorNames)
      userData.forEach(userObject => {
        items.forEach(item => {
          if (userObject.name === item.authors[0].name) {
            item.authors[0].registration = userObject.registration
          }
        })
      })
      setRecentChanges(items)
    }
    fetchData()
  })

  return (
    <div>
      <ul>
        {recentChanges.map((item, index) => (
          <li
            key={index}
          >{`${item.authors[0].name} (created ${item.authors[0].registration}) edited ${item.title} page at ${item.published}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default TestFetchData
