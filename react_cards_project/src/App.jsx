import React from 'react'
import Card from './components/Card'
import User from './components/User'

const App = () => {
  const arr = [
    {
      name: "Rafay",
      age: 18
    },
    {
      name: "Osama",
      age: 21
    },
    {
      name: "Rehman"

    }
  ]

  return (
    <>
      {arr.map(function (del) {
        return <h1>{del}</h1>
      })}
    </>
  )
}

export default App

