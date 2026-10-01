/*
import React, { useMemo, useState } from 'react'

const App = () => {

  const [num, setNum] = useState({name: 'sachin', age: 24});

  function abcd(){
    const newNum = {...num}
    newNum.name = 'The Making Factory';
    newNum.age = 30
    setNum(newNum)
  }

  return (
    <div>
      <h1>{num.name} {num.age}</h1>
      <button onClick={abcd}>click</button>
    </div>
  )
}

export default App
*/

import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState([10, 20, 30])
  console.log("num", num)

  function abcd() {
    const newNum = [...num]
    newNum.push(40, 50)
    console.log(newNum);
    setNum(newNum)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={abcd}>click</button>
    </div>
  )
}

export default App

