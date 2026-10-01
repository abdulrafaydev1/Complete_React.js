import React from 'react'

const App = () => {

  const submithandler = (e) =>{
    e.preventDefault()
      console.log('form submited')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }}>
        <input type="text" placeholder='enter your name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
