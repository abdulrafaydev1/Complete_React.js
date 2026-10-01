import React from 'react'

const App = () => {

  function inputChange() {
    console.log('User is typing')
    a.value
  }

  return (
    <div>
      <h1>Hello guyss</h1>

      <input onChange={inputChange} type="text" placeholder='Enter your name' />

    </div>
  )
}

export default App
