import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
// import feature1 from "../../public/feature1.png"
// import featurea1 from "../../public/featurea1.png"


const Feature = ( {feature, featurea, key} ) => {


    const [show, setShow] = useState(false)

useEffect(()=>{

    console.log(show);

}, [show])

  return (
    
<motion.div    className='relative w-[25%] min-h-[100px] lg:min-h-[200px] flex justify-center items-center'>
        {/* <p className='text-white'> text</p> */}
        <AnimatePresence mode='wait'>

                {/* { */}
                    {/* show  ?  */}
                    <motion.div onMouseLeave={()=>{setShow(false)}} onMouseOver={()=>{console.log("ddd"); setShow(true)}} className='absolute w-full h-full flex justify-center items-center ' 
                    // whileHover={{scale:1.1}}
                    key={key}
                    initial={{ opacity: 0.8, scale:1 }}
                    animate={{ opacity: 1, scale:1.07 , }}
                    exit={{ opacity: 0.5, scale:1 }}
                    transition={{ease: "easeIn"}}
                    ><Image  alt="fa1" className='min-w-[50px] featureImg  w-[80%]  object-contain' src={featurea} /></motion.div>   
                   
                   
                </AnimatePresence>

            </motion.div>

  )
}

export default Feature