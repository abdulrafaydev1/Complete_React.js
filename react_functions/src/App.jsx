import React from 'react'

const App = () => {

  function btnClicked(){
    console.log('btn clicked')
  }
  
  return (
    <div>
      <h1>Hello guyss</h1>

      <button onClick={()=>btnClicked()}>Click me</button>
    </div>
  )
}

export default App
