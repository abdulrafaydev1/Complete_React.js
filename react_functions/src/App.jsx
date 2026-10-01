import React from 'react'

const App = () => {

  function btnClicked() {
    console.log('btn clicked')
  }

  // function mouseEnter() {
  //   console.log('mouse entered')
  // }

  // function doubleClick(){
  //   console.log('double Clicked')
  // }

  return (
    <div>
      <h1>Hello guyss</h1>

      <button onDoubleClick={btnClicked} onMouseEnter={btnClicked} onClick={btnClicked}>Click me</button>
    </div>
  )
}

export default App
