import { useEffect } from "react"
import { useState } from "react"

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging() {
    console.log("A ki value change ho gaii")
  }
  function bChanging() {
    console.log("B ki value change ho gaii")
  }

  useEffect(function () {
    bChanging()
  }, [b])

  return (
    <div>
      <h1>A is {a} b is {b}</h1>
      <button onClick={() => {
        setA(a + 1)
      }}>Change A</button>
      <button onClick={() => {
        setB(b - 1)
      }}>Change b</button>
    </div>
  )
}

export default App
