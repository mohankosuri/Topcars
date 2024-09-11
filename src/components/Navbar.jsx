import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <header className="flex justify-between items-center p-6">
        <div className="text-red-600 text-xl font-bold">TOPCAR</div>
        <nav className="flex space-x-6">
          <NavLink to={'/'} className="text-gray-700 hover:text-black">Home</NavLink>
          <NavLink  to={'/Rentedcars'} className="text-gray-700 hover:text-black">Rent Car</NavLink>
          <NavLink to={'/Buycars'} className="text-gray-700 hover:text-black">Buy Car</NavLink>
          <NavLink to={'/News'} className="text-gray-700 hover:text-black">News</NavLink>
        </nav>
        <button className="bg-red-600 text-white px-4 py-2 rounded">Sign in</button>
      </header>
    </div>
  )
}

export default Navbar