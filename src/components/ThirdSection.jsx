import { whyData } from '@/utils/whyData'
import Image from 'next/image'
import React from 'react'
import playstore from "../../public/playstore.png"
import appstore from "../../public/appstore.png"
import section3Img from "../../public/section3Img.webp"

const ThirdSection = ({ref}) => {
  return (
    <section className=' bg-[#1A1A1E] px-[24px] min-w-[280px] pt-[20px] max-w-[1300px] lg:flex lg:justify-between lg:items-center mx-auto '>


    <div ref={ref} id="download" className='lg:order-2  lg:w-[50%] lg:flex lg:justify-between lg:flex-col lg:min-h-full '>
    
    <div className='w-full mx-auto  max-w-[637px] mb-[20px] '>
    <h3 className=' lg:text-start lg:text-[69px] lg:leading-[82px] text-center font-fontspring text-[38px] leading-[46px] text-white uppercase'>Why <span className='bg-gradient-to-r from-[#EC742F]  to-[#EA4B27] inline-block text-transparent bg-clip-text mb-[30px] md:mb-[30px]'>six dreams</span></h3>

    <ul className='mx-auto '>
        {
            whyData.map((why)=>{

                return (
                    <li key={why.id} className='flex justify-start gap-5 items-start mb-[25px]'> 
                        <div className='w-[20%] max-w-[72px]'>
                            <Image className="w-full" src={why.img} alt={why.alt} />
                        </div>
                        <div className='w-[78%] text-white'>
                            <p className='font-poppins font-[600] text-[18px] md:text-[24px] md:leading-[36px] leading-[27px] mb-[10px]'>{why?.title}</p>
                            <p className='opacity-70 font-poppins font-[300] leading-[21px] text-[12px] md:text-[14px] md:leading-[21px]'>{why?.description}</p>
                        </div>
                    </li>
                )

                
            })
        }
    </ul>

    </div>


    <div style={{    backgroundImage: 'linear-gradient(92.33deg, rgba(255, 255, 255, 0.08) -0.39%, rgba(255, 255, 255, 0.02) 102.66%)'
}} className='playstore-btn w-full rounded-[20px] mx-auto  max-w-[637px] mb-[20px] p-[10px] lg:min-h-[116px]  bg-gradient-to-b from-opacity-10 via-opacity-5 to-transparent md:flex md:justify-center md:items-center md:gap-7'>
        <h3 className='text-center text-white font-poppins font-[700] leading-[30px] uppercase italic mb-[15px] md:mb-[0px]' >Download Now <span className='md:hidden'>👇🏻</span><span className='hidden md:inline'>👉🏻</span></h3>
        <div className='flex justify-center  items-center gap-5'>
            <div className='max-w-[175px]'>  
            <Image src={playstore} className='  ' alt='playstore' /></div>
            <div className='max-w-[175px]'>
            <Image  src={appstore} className=' ' alt='appstore' /></div>
        </div>
    </div>
    </div>

    <div className='w-full  mx-auto lg:w-[50%] lg:order-1'>
            <Image className='w-full mx-auto lg:mx-0 max-w-[561px]' src={section3Img} />
    </div>
    
    </section>




  )
}

export default ThirdSection