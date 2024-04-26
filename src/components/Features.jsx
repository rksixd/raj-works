"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import feature1 from "../../public/feature1.png"
import feature2 from "../../public/feature2.png"
import feature3 from "../../public/feature3.png"
import feature4 from "../../public/feature4.png"
import featurea1 from "../../public/featurea1.png"
import featurea2 from "../../public/featurea2.png"
import featurea3 from "../../public/featurea3.png"
import featurea4 from "../../public/featurea4.png"

import { AnimatePresence, motion } from 'framer-motion'
import Feature from './Feature'


const Features = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    const [showFeature1, setShowFeature1] = useState(false)


    const handleActiveImg = (idx)=> {
        setActiveIndex(idx)
    }

    const removeActiveImg = ()=>{
        setActiveIndex(0)
    }

  return (
    <article className='min-w-[280px]     w-full px-[24px] mb-[50px]'>

        <div  style={{    backgroundImage: 'linear-gradient(92.33deg, rgba(255, 255, 255, 0.08) -0.39%, rgba(255, 255, 255, 0.02) 102.66%)',
          backdropFilter: 'blur(20px)',

}} className=' rounded-[30px] mx-auto flex items-center w-full     justify-center gap-3 max-w-[500px]  md:max-w-[600px] lg:max-w-[1000px]  '>

<Feature feature={feature1} featurea={featurea1} key={1} ></Feature>

<Feature feature={feature2} featurea={featurea2} key={3}></Feature>

<Feature feature={feature3} featurea={featurea3} key={5}></Feature>
<Feature feature={feature4} featurea={featurea4} key={7}></Feature>



            


        </div>
        

    </article>
  )
}

export default Features