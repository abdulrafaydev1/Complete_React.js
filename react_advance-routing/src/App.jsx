import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />

      <Routes>
        <Route path=''/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
