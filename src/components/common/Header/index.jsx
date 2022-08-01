import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import logo from "../../../assets/logo-caseiros.png"
import {IoRestaurantOutline,IoCartOutline,IoMdContact} from 'react-icons/all'

function Header() {
  return (
    <>
    <div className="wrapper">
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
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
    </>
    )
}

 


export default Header



              