import React from 'react'

const App = () => {
    const getData = () => {
      console.log('data aa gaya')
    }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App
