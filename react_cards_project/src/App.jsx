import React from 'react'
import Card from './components/Card'
import User from './components/User'

const App = () => {

  const arr = [{}, {}, {}]

  return (
    <>
      { arr.map(function(el){
        console.log(el)
        return <h1>{el}</h1>
      })}
    </>
  )
}

export default App

