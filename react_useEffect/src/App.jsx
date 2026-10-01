import { useState } from "react"

const App = () => {

  const [a, setA] = useState(0)
  const [b, setb] = useState(0)

  function aChanging() {
    console.log("A ki value change ho gaii")
  }
  function aChanging() {
    console.log("B ki value change ho gaii")
  }

  return (
    <div>
      App
    </div>
  )
}

export default App
