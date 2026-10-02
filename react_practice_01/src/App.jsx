import { useState } from "react"
import Parent from "./components/Parent"

const App = () => {
  const [message, setMessage] = useState('')

  function handleMessage(message) {
    setMessage(message)
  }
  return (
    <div>
      <Parent message={handleMessage} />
      <h1>{message}</h1>
    </div>
  )
}

export default App