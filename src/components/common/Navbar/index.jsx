import React from 'react'
import './navbar.scss'
import {IoRestaurantOutline,IoCartOutline,IoMdContact,ImWhatsapp} from 'react-icons/all'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className="wrapper">
      <nav className="navbar">
        <Link to="/" className='link-navbar'>
        <IoRestaurantOutline size={30} color="#fff"/>
        </Link>
        <Link to="/" className='link-navbar'>
        <IoCartOutline size={30} color="#fff"/>
        </Link>
        <Link to="/" className='link-navbar'>
        <IoMdContact size={30} color="#fff"/>
        </Link>

      </nav>
    </div>
  )
}

export default Navbar