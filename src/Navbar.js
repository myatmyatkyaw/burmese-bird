import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=''>
  <nav className="navbar">
    <div className="links">
      <Link to="/" className="text-light me-5">Home</Link>
      <Link to="/birds" className="text-light pe-5 me-5">Birds</Link>
    </div>
    <h2 style={{ 
        color: 'white', 
        backgroundColor: 'black',
        borderRadius: '8px',
        width: '180px',
        height: '50px'
      }} >
      Let's fly
    </h2>
  </nav>
</div>

  )
}

export default Navbar
