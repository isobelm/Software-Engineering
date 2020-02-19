<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { getRecentChanges, getUserData } from './Backend/APIWrapper'

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
=======
import React, { useEffect } from 'react'
import { getRecentChanges } from './Backend/APIWrapper'

function TestFetchData() {
	useEffect(() => {
		async function fetchData() {
			const result = await getRecentChanges()
			console.log(result)
		}
		fetchData()
	}, [])

	return <div></div>
>>>>>>> Add test fetch recent changes
}

export default TestFetchData
