import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-transparent py-2.5 px-8 shadow-lg'>
            <Link to={"/"}>
                <h1 className='text-white font-bold text-lg max-w-max'>CryptoTracker</h1>
            </Link>
        </nav>
    )
}

export default Navbar
