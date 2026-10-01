import React from 'react'

const App = () => {

  function scoling(val){
    console.log(val)
  }

  return (
    <div onWheel={(elem)=>{
        scoling(elem.deltaY)
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App
