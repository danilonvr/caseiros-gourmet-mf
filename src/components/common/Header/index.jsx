import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import logo from "../../../assets/logo-caseiros.png"
import {IoRestaurantOutline,IoCartOutline,IoMdContact,ImWhatsapp} from 'react-icons/all'

function Header() {
  return (
    <>
    <header className='header'>
        <img src={logo} alt="logo"/>
        <span>Bem-Vindo</span>
        <a target="blank" href='https://api.whatsapp.com/send?phone=5561996045544&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido!'>
        <ImWhatsapp size={30} color="#fff"/>
        </a>
    </header>
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
    </>
    )
}

 


export default Header



              