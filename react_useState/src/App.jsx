import { useState } from "react"

const App = () => {

  const [num, setNum] = useState(0)
  
  
  return (
    <div>

          <h1>value a is {num}</h1>
          <button>Click</button>
    </div>
  )
}

export default App
