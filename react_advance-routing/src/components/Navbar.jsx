import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 justify-between items-center p-5 bg-gray-800 text-white'>
        <h2 className='text-lg font-bold'>The Making Factory</h2>
        <div className='flex gap-7'>
          <Link className='text-lg font-bold' to="/">Home</Link>
          <Link className='text-lg font-bold' to="/about">About</Link>
          <Link className='text-lg font-bold' to="/product">Product</Link>
          <Link className='text-lg font-bold' to="/contact">Contact</Link>
        </div>
    </div>
  )

}

export default Navbar
