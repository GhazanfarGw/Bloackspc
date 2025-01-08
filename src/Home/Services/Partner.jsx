import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Tooltip } from '@mui/material'

function Partners() {
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: true,

        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: true,
            }
          }
        ]
      };
   return (
    <>
    <div className='mx-0 px-5 items-center md:mt-40 mt-16 border py-2'>
      <div data-aos="zoom-in-up" data-aos-delay="300" className='max-w-screen-lg items-center mx-auto overflow-hidden'>
        <Slider {...settings} className='flex mx-auto items-center gap-4 pt-5 '>
            
            <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
              <img src='./binance_logo.svg.png' alt='Image'/>
            </Tooltip>

            <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
              <img src='./Bitstamp-vector-logo.svg.png' alt='Image'/>
            </Tooltip>

            <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
              <img src='./coinbase_logo.svg.png' alt='Image'/>
            </Tooltip>

            <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
              <img src='./Crypto.Com-Logo.jpg' alt='Image'/>
            </Tooltip>

            <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
              <img src='./gemini.png' alt='Image'/>
            </Tooltip>

            <Tooltip placement='bottom' className='py-5 justify-center items-center px-3'>
              <img src='./kraken_logo.svg.png' alt='Image'/>
            </Tooltip>
            <Tooltip title="Elemis London" placement='bottom' className='py-5 justify-center items-center px-3'>
            <img src='./kucoin_logo.svg.png' alt='Image'/>
            </Tooltip>
        </Slider>
      </div>
    </div>
    </>
  )
}

export default Partners;