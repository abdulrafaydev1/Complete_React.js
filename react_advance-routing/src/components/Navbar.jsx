import React from 'react'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 justify-between items-center p-5 bg-gray-800 text-white'>
        <h2 className='text-lg font-bold'>The Making Factory</h2>
        <div className='flex gap-7'>
          <a className='text-lg font-bold' href="/">Home</a>
          <a className='text-lg font-bold' href="/about">About</a>
          <a className='text-lg font-bold' href="/contact">Contact</a>
        </div>
    </div>
  )

}

export default Navbar
