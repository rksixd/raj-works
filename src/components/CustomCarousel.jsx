"use client"
import { images } from '@/utils/images'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useSwipeable } from 'react-swipeable'
import { motion, useInView, stagger } from 'framer-motion'

const CustomCarousel = () => {

    const [activeInd, setActiveInd] = useState(0)
    const ref = useRef(null, {
        amount: 1
    })

    // const isInView = useInView(ref)

    // const staggerList = stagger(0.1, { startDelay: 0.25 })

    useEffect(()=>{
        // console.log("qazxsw", isInView);
    }, [])

    const updateIndex = (newIndex)=>{

        if(newIndex < 0){
            newIndex = 0
        }else if(newIndex >= images.length){
            newIndex = images.length - 1
        }

        console.log("newIndex", newIndex);

        setActiveInd(newIndex)

    }

    const handlers = useSwipeable({
        onSwipedLeft : ()=>{updateIndex(activeInd + 1); console.log("leftSwipe");},
        onSwipedRight : ()=>{updateIndex(activeInd - 1);console.log("rightSwipe");},

    })

  return (
    <div  className=' overflow-hidden  w-[100%] shrink-0 lg:mx-auto lg:max-w-[1300px] '>
        
        <div ref={ref}  {...handlers} style={{transform: `translateX(-${activeInd * 100}%)`}} className={`flex   justify-around items-start lg:flex-row  w-full mx-auto mb-[10px] `}>

            {
                images.map((img,idx)=>{
                    return (
                        <motion.div  key={img.id} className=' shrink-0 w-[100%] lg:w-auto z-0  '>
                            <div className='w-full h-full relative  flex justify-center'>
            <Image src={img.src} className='w-[90%] lg:w-auto max-w-[255px] mx-auto ' alt={img.alt}  />
            <motion.div initial={{scale: 0.7, opacity:0 }} whileInView={{ opacity:1.1, scale: 1, }} viewport={{
                
                root: ref,
                margin :img.margin,
                once: true}} 
                animate={{}}
                transition={{ type: "spring", stiffness: 250, damping: 25, delay:img.del, duration:0.5 }} style={{top: `${img.top}%`}} className={`absolute  w-full  flex justify-center`}>
            <Image src={img.subImg} className='  w-[95%] max-w-[300px] lg:w-auto  mx-auto ' alt="wer"   /></motion.div> 
            </div>
            
        <div className='w-[90%] max-w-[255px] mx-auto'>
            <p className='text-center text-white font-fontspring font-[700] text-[35px] md:text-[40px] leading-[46px] md:leading-[50px] mb-[7px]'>{img.title}</p>
            <p className='text-center font-poppins opacity-70 text-white text-[14px] md:text-[14px] leading-[20px] md:leading-[24px]' >{img.description}</p>
        </div> 
        </motion.div>
        
                    )
                })
            }
        {/* <div className=' shrink-0 w-[100%] z-0  '>
            <Image src={images[0].src} className='w-[90%] max-w-[255px] mx-auto' alt={images[0].alt}  />
            
        <div className='w-[90%] max-w-[255px] mx-auto'>
            <p className='text-center text-white fontf\ font-[700]text-[35px] leading-[46px]'>Select a Match</p>
            <p className='text-center text-white text-[14px] leading-[20px]' >Choose an upcoming match that you want to play</p>
        </div> 
        </div>
        
        <div className='shrink-0 w-[100%] z-0 '>
            <Image className='w-[90%] border-red-200   max-w-[255px] mx-auto' src={images[1].src} alt={images[1].alt}  />
            
        <div className='w-[90%] max-w-[255px] mx-auto'>
            <p className='text-center text-white'>Create Team</p>
            <p className='text-center text-white' >Use your skills to pick the right players</p>
        </div> 
        </div>

        
        <div className='shrink-0  w-[100%]  '>
            <Image className='w-[90%] max-w-[255px] mx-auto ' src={images[2].src} alt={images[2].alt}  />
            
        <div className='w-[90%] max-w-[255px] mx-auto'>
            <p className='text-center text-white'>Join Contest</p>
            <p className='text-center text-white' >Choose between different contests and compete</p>
        </div> 
        </div> */}


        </div>

        {/* {
            images.map((img)=>{
                return (
                    <div className='w-[100%] overflow-auto'>
                        <Image className='w-[100%] h-auto' src={img.src} alt={img.src} />
                        <p>image</p>
                    </div>

                )
            })
        } */}

        <div >

                  
             <div className='lg:hidden flex  justify-center gap-3 mb-[8px]'>

            {
                images.map((img)=>{
                    return (             
            <button key={img.id} className={`w-[12px] h-[12px] rounded-full bg-gray-400 ${activeInd === img.id ? "bg-gradient-to-r from-[#EC742F] to-[#EA4B27]" : "bg-[#E7E7E7] bg-opacity-25"}`} onClick={()=>updateIndex(img.id)} ></button>
                    )
                })
            }


            {/* <button className="w-[12px] h-[12px] rounded-full bg-gray-400 bg-gradient-to-r from-[#EC742F] to-[#EA4B27]" onClick={()=>updateIndex(0)} ></button>
            <button className="w-[12px] h-[12px] rounded-full bg-[#E7E7E7] bg-opacity-25" onClick={()=>updateIndex(1)} ></button>
            <button className="w-[12px] h-[12px] rounded-full bg-[#E7E7E7] bg-opacity-25" onClick={()=>updateIndex(2)} ></button> */}

        </div>
        


        <p className='lg:hidden text-center text-[#FFFFFF] font-poppins font-[400] text-[12px] leading-[18px]'>{activeInd+1}/3</p>
        </div>


    </div>
  )
}

export default CustomCarousel