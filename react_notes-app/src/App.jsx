import React from 'react'

const App = () => {

  const submithandler = (e) => {
      e.preventDefault()
  }
  
  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e)=>{
        submithandler(e)
      }} className='flex items-center '>
        <input type="text" placeholder='Enter task heading'/>
        <textarea placeholder='enter details'></textarea>
        <button className='bg-amber-500'>Add Task</button>
      </form>
    </div>
  )
}

export default App
