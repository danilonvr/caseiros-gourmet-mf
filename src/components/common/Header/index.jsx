import React from 'react'
import './header.scss'
import {ImWhatsapp} from 'react-icons/all'
import logo from "../../../assets/logo-caseiros.png"

function Header() {
  return (
    <>
    <div className="header-blur"></div>
    <header className='header'>
        <img src={logo} alt="logo"/>
        <div className="header-text">
        <span>Bem-Vindo</span>
        </div>
        <a target="blank" href='https://api.whatsapp.com/send?phone=5561996045544&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido!'>
        <ImWhatsapp size={30} color="rgba(0, 173, 111, 1)"/>
        </a>
    </header>
    </>
    )
}

 


export default Header



              