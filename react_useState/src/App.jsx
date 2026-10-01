import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  function increaseNum() {
    setNum(num + 1)
  }

  function dcreaseNum() {
    setNum(num - 1)
  }
  function JumpBy5() {
    setNum(num + 5)
  }
  function JumpBy5DcreaseNum() {
    setNum(num - 5)
  }
  function reset() {
    setNum(0)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={dcreaseNum}>decrease</button>
      <button onClick={JumpBy5}>Jump by 5</button>
      <button onClick={JumpBy5DcreaseNum}>Jump by 5 dcreaseNum</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
