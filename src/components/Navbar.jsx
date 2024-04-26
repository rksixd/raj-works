"use client"
import React, { useState, useEffect } from 'react'
import sidebar from "../../public/sidebarIcon.svg"
import Image from 'next/image'
import sixdSmall from "../../public/sixdSmallIcon.svg"
import sixD from "../../public/sixdIcon.svg"
import Link from 'next/link'
import { navlinks } from '@/utils/navlinks'
import {  } from 'framer-motion'
import {  motion ,AnimatePresence  } from "framer-motion";
import close from "../../public/close.svg"
// import { delay } from 'framer-motion/dist'
// import { AnimatePresence } from 'framer-motion/dist'
// import { delay } from 'framer-motion/dist'



const Navbar = ({handleDownloadApp}) => {

    const [open, setOpen] = useState(false)

    // console.log();

    // const [scope, animate] = useAnimate();
    const items = ["Home", "Contact", "About"];

    // const staggerList = stagger(0.1, { startDelay: 0.25 });

    const openSidebar = ()=>{
        setOpen(!open)
    }

    
//   useEffect(() => {
//     animate(
//         "button",{
//             width : open ? 150 : 0,
//             scale: open ? 1 : 0,
//             // opacity: open ? 1 : 0

//         }
//     );
//     animate(
//       "ul",
//       {
//         width: open ? "80vw" : 0,
//         height: open ? "100vh" : 0,
//         opacity: open ? 1 : 0
//       },
//       {
//         type: "spring",
//         bounce: 0,
//         duration: 0.4
//       }
//     );
//     animate(
//       "li",
//       open
//         ? { opacity: 1, scale: 1, x: 0 }
//         : { opacity: 0, scale: 0.3, x: -50 },
//       {
//         duration: 0.2,
//         delay: open ? staggerList : 0
//       }
//     );
//   }, [open]);


  return (
    <>
    
        <AnimatePresence mode="wait">
       { open && 
        <motion.div initial={{opacity: 0, width:"0vw", height:"0vh"}} animate={{opacity: 1, width:"100vw", height:"100vh"}} transition={{type: "spring",
        bounce: 0,
        duration: 0.5}} exit={{opacity: 0, width:"0vw", height:"0vh"}} style={{background: 'rgba(0, 0, 0, 0.74)'
    }}   className={` top-[0px] fixed z-[100] w-[100vw]   mx-auto  place-items-center text-white`} >
        
        
        <motion.ul initial={{opacity: 0, width:"0vw", height:"0vh"}} animate={{opacity: 1, width:"80vw", height:"100vh"}} exit={{opacity: 0, width:"0vw", height:"0vh"}}transition={{duration:0.3, }}  style={{  background: 'rgba(16, 16, 21, 1)',
    }} className=' flex text-white relative justify-center gap-5 items-center flex-col w-[80vw] h-[100vh]'>

        
<motion.button  initial={{opacity: 1, }} animate={{opacity: 1, }} exit={{opacity: 0}} className='absolute  right-0 m-[10px] font-nunito leading-[25px] h-[30px] text-[18px] font-[500] flex justify-center items-center gap-2 top-[2%]  ' onClick={()=>setOpen(false)} >
            <p>close</p>
        <div className=' '>
            <Image className='w-[15px] h-[15px]' src={close} alt="close" />
        </div>
        </motion.button>
                {items.map((item, index) => (
                  <motion.li animate={{opacity: 1, scale: 1, x: 0}} initial={{opacity: 0, scale: 0.3, x: -70}} transition={{ duration: 0.3, delay:index/9}} key={index}>{item}</motion.li>
                ))}
              </motion.ul>
              
            </motion.div>}
            </AnimatePresence>
    
    <nav className='min-h-[76px] md:min-h-[100px] lg:min-h-[12%] bg-[#282828] flex items-center justify-between px-[24px] md:px-[60px] lg:px-[106px] py-2 gap-2 w-full min-w-[280px]' >


    
    

        
        <div className='flex lg:hidden items-center gap-5 md:gap-7'>
            <div className=''>
            <button onClick={openSidebar}>
            <Image alt='sidebar_icon' className='w-[30px] max-w-[47px] md:w-[36px]' src={sidebar}/>
            </button>
            </div>
            
            <div className=''>
            <Image alt="small_logo" className='min-w-[47px] md:min-w-[55px]' src={sixdSmall}/>
            </div>
        </div>

        <div className='hidden lg:flex flex-1'>
            <Image alt='logo' src={sixD}></Image>
        </div>

        <div className='hidden lg:flex flex-2'>
            <ul className='desktop-menu flex items-center gap-5 text-white font-nunito text-[16px] leadin-[25px]'>
                {
                   navlinks.length > 0 &&  navlinks.map((link)=>{
                    return (
                        <li className={`${link.id !== 1 &&  'opacity-70'}`} key={link.id}>
                            <Link  href={link.path}>
                            {link.name}
                            </Link>
                        </li>
                            )
                   })
                }

            </ul>
        </div>

        <div className=' flex  justify-end lg:flex-1'>
            <motion.button onClick={handleDownloadApp} whileTap={{scale:0.95}} className=' font-bungee px-[30px] py-[15px]  bg-gradient-to-r from-[#EC742F] to-[#EA4B27]  text-white rounded-[5px] text-wrap text-[13px] sm:text-[16px] max-h-[49px] max-w-[178px] flex justify-center items-center cursor-default' >Download</motion.button>
        </div>

    </nav>   
    </> 
)
}

export default Navbar