import React from 'react'
import {Swiper,SwiperSlide} from "swiper/react"
import {Pagination,A11y,Autoplay} from "swiper"
import 'swiper/scss';
import "./slider.scss"



function Slider({settings,children}) {
  return (
    <Swiper modules={[]}{...settings}>
      {children}
    </Swiper>
  )
}

export default Slider;