"use client"
import { images } from '@/utils/images'
import React from 'react'

import Image from 'next/image'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const SlickSlider = () => {

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
}

  return (
    // <div>slick</div>
    <div className='border-2 border-red-500 '>
    <Slider style={{}} className='lg:hidden z-0  relative' {...settings}>

        {
            images.map((img)=>{
                return (
                    <div className='w-full flex justify-center items-center ' key={img.id}>
                        <Image alt={img.alt} className='w-[80%] mx-auto z-0' src={img.src} />
                    </div>
                )
            })
        }

    </Slider>
    </div>
)
}

export default SlickSlider