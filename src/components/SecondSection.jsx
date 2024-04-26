import React from 'react'
import Carousel from './Carousel'
import SlickSlider from './SlickSlider'
import CustomCarousel from './CustomCarousel'
import bg from "../../public/Background.png"
import Features from './Features'

const SecondSection = () => {
  return (
    <section  className="relative   bg-no-repeat bg-cover bg-center  bg-[#1A1A1E]  min-w-[280px] bg-[url('../../public/Background.png')] pt-[50px] lg:pt-[100px] mb-[40px] md:mb-[60px]">
      <Features></Features>
        <p id="HTP" className='font-fontspring text-[25px] min-[360px]:text-[35px] sm:text-[45px] leading-[36px] sm:leading-[50px] md:text-[55px] md:leading-[70px] lg:text-[69px] lg:leading-[81px] text-white text-center uppercase mb-[20px]'>Begin Your Game with Ease <br/> on <span className='bg-gradient-to-r from-[#EC742F]  to-[#EA4B27] inline-block text-transparent bg-clip-text'>Six Dreams</span></p>

        <p className='flex lg:hidden text-center text-[8.5px] min-[400px]:text-[13px] leading-[12px] min-[350px]:leading-[18px] font-poppins text-white max-w-[500px]  md:max-w-[600px] lg:max-w-[800px] mx-auto mb-[10px] opacity-70'>Craft your team to accumulate points based on the real-time performance of each player during the live game.</p>

        <p className='hidden lg:flex text-center text-[8.5px] min-[400px]:text-[13px] leading-[12px] min-[350px]:leading-[18px] font-poppins text-white max-w-[500px]  md:max-w-[600px] lg:max-w-[800px] mx-auto mb-[50px] justify-center opacity-70'>Craft your team to accumulate points based on the real-time performance of each player during the live game.</p>

      {/* <Carousel></Carousel> */}
    {/* <SlickSlider></SlickSlider> */}
    <CustomCarousel></CustomCarousel>

    <div 
        style={{    background: 'linear-gradient(180deg, #101015 0%, rgba(16, 16, 21, 0) 105.67%)',

}} 
className='left-0 h-[100px]  absolute top-[00px] w-full bg-red-500'></div>

    </section>
  )
}

export default SecondSection