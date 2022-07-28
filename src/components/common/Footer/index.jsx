import React from 'react'
import './footer.scss'
import {FaInstagram,FaWhatsapp,FaPhoneAlt} from 'react-icons/fa'
import {GiChefToque} from 'react-icons/gi'

function Footer() {
  return (
    <footer>
    
      <div className='footer-text-start'>
        <h3>Precisando de Orientação?</h3>
        <span>Temos a parceria de um nutricionista! Que tal dar uma olhada?</span>
        <span>Carlos Victor | Nutricionista</span>
        <div className="footer-icons">
          <span>
            <FaPhoneAlt size={10} color='#fff' />
            (99) 9 9999-9999
          </span>
          <a href='https://www.instagram.com/carlosvictornutri/' target="blank">
            <FaInstagram size={25} color='#fff'/>
          </a>
          <a href='https://api.whatsapp.com/send?phone=5598992270000' target="blank">
            <FaWhatsapp size={25} color='#fff' />
          </a>
        </div>
      </div>

      <div className="linha"></div>

      <div className="footer-text-end">
        <h2>Caseiros Gourmet <GiChefToque size={30}/></h2>
        <span>Rua Plutão, Cond. Park Vinhais</span>
        <span>65070-400, Recanto dos Vinhais</span>
        <div className="footer-icons">
          <span>
            <FaPhoneAlt size={10} color='#fff' />
            (99) 9 9999-9999
          </span>
          <a href='https://www.instagram.com/caseirosgourmetmarmitaria/' target="blank">
            <FaInstagram size={25} color='#fff'/>
          </a>
          <a href='https://api.whatsapp.com/send?phone=5561996045544&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.' target="blank">
            <FaWhatsapp size={25} color='#fff' />
          </a>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer