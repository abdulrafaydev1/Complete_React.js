import React from 'react'
import { useState } from 'react'

const App = () => {

  const submitHandler = (e, elem) => {
    e.preventDefault()
    console.log('form submited')
  }

  return (
    <div>

      <form onSubmit={(e, elem) => {
        submitHandler(e, elem.target.value)
      }}>
        <input type="text" placeholder='Enter your name' />
        <button >Submit</button>
        <h1>this is value {num}</h1>
      </form>
    </div>
  )
}

export default App
