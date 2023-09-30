// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-semibold">My App</Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-blue-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-blue-300">About</Link>
          </li>
          <li>
            <Link to="/services" className="text-white hover:text-blue-300">Services</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-blue-300">Contact</Link>
          </li>
        </ul>
        <ul className="flex space-x-4">
        <li>
            <Link to="/signin" className="text-white hover:text-blue-300">Sign in</Link>
          </li>
          <li>
            <Link to="/signup" className="text-white hover:text-blue-300">Sign up</Link>
          </li> 
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;