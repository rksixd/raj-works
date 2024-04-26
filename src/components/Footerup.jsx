import { socialLinks } from '@/utils/socialLinks'
import sixdLogo from "../../public/sixdlargelogo.png"
import Image from 'next/image'

import Link from 'next/link'
import React from 'react'
import { impLinks, navlinks } from '@/utils/navlinks'

const Footerup = () => {
  return (
    <footer  className='lg:mt-[50px] mt-[30px] min-w-[280px] bg-[#1A1A1E] '>

<div className='flex flex-col mx-auto lg:flex-row w-full justify-center items-start max-w-[1300px]'>

    <div className='w-[80%] mx-auto  lg:w-[40%]'>
<div className='mb-[10px]'>
        <Image src={sixdLogo} className='w-[180px]  sm:w-[215px] mx-auto' alt="sixD_logo" />
        </div>

        <p className='uppercase font-fontspring text-[40px] leading-[48px] text-center text-white mb-[30px]'>six dreams</p>
        </div>
        
        <div className=' w-[90%] md:w-[70%] justify-between mx-auto lg:w-[60%]  flex  lg:justify-between items-start flex-wrap'>
            
            {/* <div className='shrink-0'>
            <ul className='flex flex-col justify-between items-start max-w-[350px] mx-auto gap-5 mb-[30px] px-[10px]'>
            {
                navlinks.map((link)=>{

                    return (
                    <Link key={link.id} className='font-poppins font-[400px] text-[11px] leading-[22px] md:text-[13px] md:leading-[27px] text-white normal-case  opacity-80' id={link.id} href="#">{link.name}</Link>)

                })
            }
        </ul>
            </div> */}

            <div className='shrink-0 flex-1'>
            <ul className='flex flex-col justify-between items-start max-w-[350px] mx-auto gap-5 mb-[30px] px-[10px]'>
            <p className='font-poppins  font-[400px] text-[11px] leading-[22px] md:text-[13px] md:leading-[27px] text-white normal-case  opacity-80'>Quick Link</p>
            {
                navlinks.map((link)=>{

                    return (
                    <Link key={link.id} className='font-poppins font-[400px] text-[11px] leading-[22px] md:text-[13px] md:leading-[27px] text-white normal-case  opacity-80' id={link.id} href={link.path}>{link.name}</Link>)

                })
            }
        </ul>
            </div>
            <div className='shrink-0 flex-1'> 
            <ul className='flex flex-col justify-center items-start max-w-[350px] mx-auto gap-5 mb-[30px] px-[10px]'>

            <p className='font-poppins  font-[400px] text-[11px] leading-[22px] md:text-[13px] md:leading-[27px] text-white normal-case  opacity-80'>Important Links</p>
            {
                impLinks.map((link)=>{

                    return (
                    <Link key={link.id} className='font-poppins  font-[400px] text-[11px] leading-[22px] md:text-[13px] md:leading-[27px] text-white normal-case  opacity-80' id={link.id} href={link.path}>{link.name}</Link>)

                })
            }
        </ul>
            </div>
        </div>
        </div>


<ul style={{
            backgroundImage: 'linear-gradient(92.33deg, rgba(255, 255, 255, 0.08) -0.39%, rgba(255, 255, 255, 0.02) 102.66%)'
          }} className='flex max-w-[350px] mx-auto justify-between items-center p-[15px] md:p-[20px] rounded-[11px]' >
            {
                socialLinks.map((link)=>{
                    return (
                        <Link  className='w-[25px]' href="#" key={link.id} >
                        <Image src={link.icon} className='w-[25px]' alt={link.name} />
                        </Link>
                    )
                })
            }
        </ul>

<div style={{
            background: 'linear-gradient(101.18deg, rgba(255, 255, 255, 0.08) 7.12%, rgba(255, 255, 255, 0.02) 94.06%)'

        }} className='mt-[50px] p-5 font-poppins font-[400] text-[18px] leading-[27px] text-white'>
            <p className='text-center uppercase'>copyright @2024 six dreams</p>
        </div>

    </footer>
)
}

export default Footerup