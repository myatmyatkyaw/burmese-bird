import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>Let's fly</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/birds">Birds</Link>
        </div>
      </nav>
  )
}

export default Navbar
