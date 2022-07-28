import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import {FaWhatsapp,FaInstagram} from 'react-icons/fa'
function Header() {

const [active,setActive] = useState(false)

function isActive(){
  setActive(!active)
}

  return (

    <header className='bg-header'>
      <div className="header">
        <Link to='/' className='logo'>
          <img src='/icon.svg' alt="logo-caseiros" />
        </Link>
      <nav> 
      <div className={active ? 'menu-header active' : 'menu-header'}>

          <ul className='menu-list'>
            <li>Home</li>
            <li>Cardápio</li>
            <li>Encomendas</li>
          </ul>
          <div className="social-media">
            <a href='https://api.whatsapp.com/send?phone=5561996045544&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.' target="blank" className='whats-btn'>
              <FaWhatsapp  color='#fff' className='whats'/>
            </a> 
            <a href="https://www.instagram.com/caseirosgourmetmarmitaria/" target='blank' className='insta-btn'>
              <FaInstagram color='#fff' className='insta'/>
            </a>
          </div>
      </div>
      </nav>
      
      <div className={active ? 'mobile-menu active' : 'mobile-menu'} onClick={isActive}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
      </div>
      
    </header>
  )
}

export default Header



              