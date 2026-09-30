import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='nav'>
                <h1>Rafay</h1>
                <div className='nav-links'>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
                <button className='nav-btn'>Login</button>
            </div>
        </>
    )
}

export default Navbar
