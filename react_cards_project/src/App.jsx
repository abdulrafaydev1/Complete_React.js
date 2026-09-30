import React from 'react'
import Card from './components/Card'
import User from './components/User'

const App = () => {

      const arr = [10, 20, 30, 40, 50]
  
  return (
    <>
      <User name={arr[0]} />
      <User name={arr[1]} />
      <User name={arr[2]} />
    </>
  )
}

export default App

