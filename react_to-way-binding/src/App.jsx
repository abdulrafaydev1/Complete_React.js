import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('form submited', title)
  }

  return (
    <div>

      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          type="text"
          value={title}
          placeholder='Enter your name'
        />
        <button >Submit</button>
        <h1>this is value  </h1>
      </form>
    </div>
  )
}

export default App
