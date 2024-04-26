"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import bgImg from "../../public/mainImg.svg"
import androidIcon from "../../public/androidIcon.svg"
import { motion, useInView  } from 'framer-motion'
import appleIcon from "../../public/appleIcon.svg"
import dividerIcon from "../../public/dividerIcon.svg"
import shieldIcon from "../../public/shieldIcon.svg"
import close from "../../public/close.svg"
import qrCode from "../../public/qrcode.png"
import coin1 from "../../public/coin1.png"
import coin2 from "../../public/coin2.png"
import coin3 from "../../public/coin3.png"

import useMeasure from 'react-use-measure'
import Tilt from 'react-parallax-tilt'
// import { delay } from 'framer-motion/dist'


const variants = {
    hidden : {

        opacity : 0,
        y: 100,

    },
    show : {
        opacity : 1,
        y: 0,
    },
    transition : {
        type : "linear",
        // staggerChildren: 1,
        stagger:1,
        duration: 1.2
    }
}

const FirstSection = ({os, handleDownloadApp}) => {

    console.log("useInView", );

    // const [open, setOpen] = useState(false)

    // const [scope, animate] = useAnimate();
    const scope = null

    // const [showQR, setShowQR] = useState(true)

    // const staggerList = stagger(0.5, { startDelay: 100 });


    // useEffect(()=>{

    //     animate(
    //         "p",
    //         {x:[-800, 0]},
    //         {scale : [0,1]},
    //         // {type: "spring"},
            
    //         {delay: stagger(1, { startDelay: 1 }) },
    //         // {duration: 5},
    //     )

    // }, [])

    // bg-[url('../../public/Background.svg')]
  return (
    <section style={{ }} className="min-w-[280px] relative max-h-[89%]  lg:max-h-[88%] bg-[#1A1A1E] bg-[url('../../public/bg.webp')]   bg-no-repeat bg-cover bg-center   px-[24px] lg:flex lg:justify-between lg:items-center md:px-[60px] lg:px-[106px] " >


<div className='hidden lg:flex absolute top-[10vh] left-0 max-w-[90px]  '>
            <Image src={coin1} />
            </div>

            

            

        <div className="lg:w-[50%] order-2 lg:mt-[20px]  flex justify-center lg:justify-end relative"  >
            
<div className='absolute top-0 right-[8%]   '>
            <Image className="max-w-[50px] min-[300px]:max-w-[60px] md:max-w-[70px] min-[1350px]:max-w-[90px]" src={coin3} />
            </div>

            
        <div className='absolute  lg:hidden left-0 bottom-0  '>
            <Image className='max-w-[50px] min-[300px]:max-w-[60px] md:max-w-[70px] min-[1350px]:max-w-[90px] m-[10px]' src={coin2} />
            </div>
            <div   className="lg:w-[86%]  border-red-200">
            <Tilt style={{
        transformStyle: "preserve-3d",
        // transform,
      }} >
            <Image  className='lg:w-full inset-4' src={bgImg}/>
            </Tilt>
            </div>
            
        </div>

        <motion.div ref={scope}  className='flex relative lg:w-[50%] flex-col order-1 items-center lg:items-start'>


        <div className='absolute hidden lg:flex lg:bottom-0 lg:right-0 max-w-[90px]  '>
            <Image className='max-w-[50px] min-[300px]:max-w-[60px] md:max-w-[70px] min-[1350px]:max-w-[90px]' src={coin2} />
            </div>
            <motion.p variants={variants}  className='text-[13px] min-[320px]:text-[16px] leading-[24px] md:text-[18px] font-poppins text-center font-[300] text-white opacity-70 cursor-default'>Create Your Fantasy Team Now</motion.p>
            {/* bg-gradient-to-r from-[#EC742F]  to-[#EA4B27] inline-block text-transparent bg-clip-text */}
    <motion.p variants={variants} style={{
//   backgroundImage: 'linear-gradient(90deg, #EC742F -1.23%, #EA4B27 100%)',
//   textShadow: ' -4px 2px 0px # '
filter: 'drop-shadow(-4px 3px rgba(234, 75, 39, 0.2))'

}} className='font-fontspring bg-gradient-to-r from-[#EC742F]  to-[#EA4B27] inline-block text-transparent bg-clip-text  text-[45px] min-[337px]:text-[55px] min-[500px]:text-[70px] md:text-[73px] leading-[80px] lg:leading-[110px]  uppercase  mb-[20px] text-center lg:text-start lg:text-[75px] min-[1260px]:text-[102px] min-[1192px]:leading-[110px] min-[1400px]:text-[115px] min-[1350px]:leading-[125px] tracking-wide ' >On six Dreams</motion.p>
    <motion.p variants={variants} className='text-nowrap  font-poppins text-[13px] min-[320px]:text-[16px] md:text-[24px] min-[1350px]:text-[28px] md:leading-[46px] leading-[36px] text-center lg:text-start text-white font-[500] z-40 lg:mb-0'>Download Official Six Dreams App & <br/> Get ₹100 Signup Bonus </motion.p>


    <motion.div variants={variants} initial="hidden" animate="show" className='text-white hidden lg:block py-[20px] fixed lg:relative bottom-0 w-full bg-[#1A1A1E] lg:bg-transparent px-[24px] lg:px-[0px] '>
        <motion.button variants={variants} whileTap={{ scale: 0.95 }} onClick={handleDownloadApp} className=' w-full lg:w-auto  bg-gradient-to-r from-[#EC742F] to-[#EA4B27] px-[30px]  py-[15px] rounded-[5px] font-bungee text-[16px] mb-[20px] lg:max-h-[54px]  flex justify-center items-center max-h-[49px]' >Download now</motion.button>
        <motion.div variants={variants} className='flex items-center justify-center lg:justify-start w-full   font-poppins text-[12px] sm:text-[14px]'>
        <div className='flex items-center justify-center font-poppins gap-2 '>
        <p className='font-poppins font-[200] opacity-70 tracking-[0.5px]'>Available on</p>

        <div className=''> 
            <Image src={androidIcon} />
        </div>
        <div>
        <Image src={appleIcon} />
        </div>
        </div>
        <div className='mx-[15px] min-w-[5px]'>
        <Image src={dividerIcon} />
        </div>
        
        <div className='flex items-center  font-poppins justify-center gap-2'>
        <div>
        <Image src={shieldIcon} />
        </div>
        <p className='font-poppins font-[200] opacity-70 tracking-[0.5px]'>100% Safe & Secure</p>

        </div>
        </motion.div>        
    </motion.div>

        </motion.div>

        {/* {
            showQR && 
            <div style={{background: `linear-gradient(145deg, #EC742F -5.27%, #EA4B27 104.69%)`}} className="lg:flex flex-col fixed hidden  w-[262px] justify-around items-center rounded-tl-[20px] h-[320px] bg-orange-400  right-0 bottom-0 z-50" >
                <div className='w-full  flex justify-end p-[10px] '>
                    <button onClick={()=>setShowQR(false)} >
                    <Image className='w-[15px] h-[15px]  object-cover' src={close} /></button>
                </div>
                <div>
                    <Image className='max-w-[216px]' src={qrCode} />
                </div>
        
                <p className='font-fontspring font-[700] text-[20px] leading-[24px] text-white tracking-[0.5px] uppercase text-center' >Scan QR Code to <br/> Download the app</p>
            </div>
        } */}

        
    <div 
        style={{    
        background: 'linear-gradient(rgb(16, 16, 21, 0) 0%, rgba(16, 16, 21) 105.67%)',

}} 
className='left-0   h-[100px] absolute bottom-[00px] w-full bg-red-500'></div>

        {/* <div 
        style={{  background: 'linear-gradient(180deg, rgba(16, 16, 21, 0) 0%, #101015 105.67%)',
}} 
className='w-full h-[100px] bg-red-500'></div> */}


    </section>
)
}

export default FirstSection