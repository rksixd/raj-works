"use client"
import { reviews } from '@/utils/reviews'
import Image from 'next/image'
import React, { useState } from 'react'
import speaker from '../../public/speaker.svg'
import { motion } from 'framer-motion'
import Review from './Review'
import useMultiAudio from '@/utils/useMultiAudio'
import { audios } from '@/utils/audios'

const FourthSection = () => {

  const [players, toggle] = useMultiAudio(audios)

  const click = (idx)=>{
    console.log("lll");
    toggle(idx)
  }

  return (
    <section className='bg-[#1A1A1E] px-[24px] min-w-[280px] pt-[20px] max-w-[1300px]  mx-auto' >

      <h3 className='text-white text-center font-fontspring font-[700] text-[28px] leading-[40px] min-[360px]:text-[38px]  min-[360px]:leading-[46px] uppercase md:text-[69px] md:leading-[90px] '> what people says about </h3>
      <h3 className='  bg-gradient-to-r from-[#EC742F]  to-[#EA4B27] text-center font-fontspring font-[700] text-[28px] leading-[40px] min-[360px]:text-[38px]  min-[360px]:leading-[46px] block text-transparent bg-clip-text uppercase md:text-[69px] md:leading-[90px] ' >six dreams</h3>

      <div className='mt-[30px] max-w-[637px] mx-auto lg:grid lg:grid-cols-5 lg:max-w-[1300px] lg:gap-10'>
        {
          reviews.map((review, idx)=>{
            return (
             
              <Review key={review.id} review={review} player={players[idx]} click={()=>click(idx)} idx={idx} ></Review>
              
            )
          })
        }
      </div>

    </section>
  )
}

export default FourthSection