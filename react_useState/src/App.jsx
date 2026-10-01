import { useState } from "react"

const App = () => {

  const [num, setNum] = useState(0)

  function changeValue(){
    setNum(10)
  }
  
  
  return (
    <div>

          <h1>value a is {num}</h1>
          <button onClick={changeValue}>Click</button>
    </div>
  )
}

export default App
