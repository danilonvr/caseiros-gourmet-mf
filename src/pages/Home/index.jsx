import React from 'react'
import './home.scss'
import {SwiperSlide} from "swiper/react"
import { Link } from 'react-router-dom'
import {MdOutlineDeliveryDining} from 'react-icons/md'
import {FaMoneyCheckAlt,FaShoppingBasket} from 'react-icons/fa'
import logo from '../../assets/logo-caseiros.png'
import Slider from '../../components/common/Slider/Slider'



function Home() {

  const settings = {
    slidesPerView: 1,
  }


  return (
    <div className='home'>
    <section className='first-section'>
      <div className="first-section-text">
      <h1>Caseiros Gourmet</h1>
      <p>Alimentação Saudável</p>
      <button type='button' className='btn'>Conheça nosso Cardápio</button>
      </div>
    </section>

    <section className="second-section">
    
      <Link to='/'>
        <div className="second-section-menu-card">
          <img src={logo} alt="logo-menu" className='card-logo'/>
        </div>
      </Link>

      <Link to='/'>
        <div className="second-section-menu-card">
          <img src={logo} alt="logo-menu" className='card-logo'/>
        </div>
      </Link>

      <Link to='/'>
        <div className="second-section-menu-card">
          <img src={logo} alt="logo-menu" className='card-logo'/>
        </div>
      </Link>

      <Link to='/'>
        <div className="second-section-menu-card">
          <img src={logo} alt="logo-menu" className='card-logo'/>
        </div>
      </Link>

      <Link to='/'>
        <div className="second-section-menu-card">
          <img src={logo} alt="logo-menu" className='card-logo'/>
        </div>
      </Link>
    </section>

    <section className='third-section' >

          <Slider settings = {settings} >
            <SwiperSlide>
            <div className="third-home-section-info">
            <MdOutlineDeliveryDining size={50} color= '#000'/>
            <div className="third-home-section-text">
              <h2>Entrega</h2>
                <p>Entregamos em toda a grande São Luís, sob agendamento de horário. Consulte taxa de entrega para o seu bairro. </p>
            </div>
      </div> 
            </SwiperSlide>
            <SwiperSlide>
            <div className="third-home-section-info">
            <FaMoneyCheckAlt size={40} color= '#000'/>
            <div className="third-home-section-text">
              <h2>Pagamento</h2>
                <ul>
                      <li>Dinheiro</li>
                      <li>PIX</li>
                      <li>Cartões de débito e crédito</li>
                      </ul>
            </div>
          </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="third-home-section-info">
            <FaShoppingBasket size={40} color= '#000'/>
            <div className="third-home-section-text">
              <h2>Encomendas</h2>
                <p>Sob encomenda, com entrega programada de 5 a 7 dias, conforme a produção.
                Produzimos cardápios personalizados de acordo com seu gosto e necessidade.</p>
                <span>(Peso das marmitas de 350g a 400g)</span>
            </div>
            <button className="btn">
              SAIBA MAIS
            </button>
          </div> 
            </SwiperSlide>

          </Slider>
      </section>
    </div>
  )
}

export default Home