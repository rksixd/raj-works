"use client"

import React, { useState } from 'react'
import qrCode from "../../public/qrcode.png"
import close from "../../public/close.svg"
import Image from 'next/image'

const QRcode = () => {

    const [showQR, setShowQR] = useState(true)

  return (
    
    
        showQR &&  <div style={{background: `linear-gradient(145deg, #EC742F -5.27%, #EA4B27 104.69%)`}} className="lg:flex flex-col fixed hidden  w-[262px] justify-around items-center rounded-tl-[20px] h-[320px] bg-orange-400  right-0 bottom-0 z-50" >
            <div className='w-full  flex justify-end p-[10px] '>
                <button onClick={()=>setShowQR(false)} >
                <Image className='w-[15px] h-[15px]  object-cover' src={close} /></button>
            </div>
            <div>
                <Image className='max-w-[216px]' src={qrCode} />
            </div>
    
            <p className='font-fontspring font-[700] text-[20px] leading-[24px] text-white tracking-[0.5px] uppercase text-center' >Scan QR Code to <br/> Download the app</p>
        </div>
    
  )
}

export default QRcode