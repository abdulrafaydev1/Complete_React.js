import React from 'react'
import Card from './components/Card'
import User from './components/User'

const App = () => {

  const arr = [
    {
      name: "Rafay",

    },
    {
      name: "Osama"

    },
    { name: "Rehman" }
  ]

  arr.map(function (el) {
    console.log(el)
  })

  return (
    <>

    </>
  )
}

export default App

