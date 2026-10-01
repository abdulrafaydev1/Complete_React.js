import React, { useMemo, useState } from 'react'

const App = () => {

  const [num, setNum] = useState(10);


  const abcd = () => {
    console.log(num)
    setNum(20)
    console.log(num)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={abcd}>click</button>
    </div>
  )
}

export default App
