import React from 'react'

const App = () => {

  const submithandler = (e) => {
      e.preventDefault()
      console.log('form submit hoo raha hai sahi hai bahi')
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
      <div className='flex flex-wrap p-10'>
        <div className='h-32 w-32 rounded-2xl bg-white'></div>
      </div>
    </div>
  )
}

export default App
