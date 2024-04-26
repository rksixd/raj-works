import React from 'react'
import Image from "next/image"

const CarouselItem = ({img}) => {
  return (
    <div className='min-w-[100%] mr-[24px] snap-center shrink-0' key={img.id}>
      <Image alt={img?.alt} className='h-[400px] object-contain max-w-[320px]' src={img?.src} />
    </div>
  )
}

export default CarouselItem