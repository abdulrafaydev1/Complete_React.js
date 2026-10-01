import React from 'react'

const App = () => {

  return (
    <div>
      <h1>Hello guyss</h1>

      <div onMouseMove={(elem)=>{
        console.log(elem.clientY)
      }} className='box'></div>

    </div>
  )
}

export default App
