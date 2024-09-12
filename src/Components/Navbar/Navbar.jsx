import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return <>
     <nav className="bg-gray-800 w-screen py-8"> {/* Use the dark blue background color */}
      <div className="container mx-auto px-4 max-w-screen-lg">
        <div className="flex justify-between items-center py-2">
          
          <div className="text-3xl">
            <Link to="" className="text-white font-bold uppercase">Home</Link>
          </div>
          
          <ul className="flex space-x-6 text-xl uppercase">
            <li><Link to="about" className="text-white">About</Link></li>
            <li><Link to="contact" className="text-white">Contact</Link></li>
            <li><Link to="porto" className="text-white">Portfolio</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  
}