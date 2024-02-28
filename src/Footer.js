import React from 'react'
import { LuBird } from "react-icons/lu";

const Footer = () => {
  return (
    <div className='footer'>
        <LuBird style={{ width:50, height:50, color: 'whitesmoke' }}/>
      <p className='text-light d-flex justify-content-center footer pt-0'>&copy; All rights reserved by MMK</p>
    </div>
  )
}

export default Footer
