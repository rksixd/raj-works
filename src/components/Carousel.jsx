"use client"
import React, {useRef} from 'react'
import { images } from '@/utils/images'
import CarouselItem from './CarouselItem'


const Carousel = () => {

    const carousel = useRef(null)

    const incrementCarousel = delta => {
        if(carousel?.current){
            const width = carousel.current.offsetWidth;

            carousel.current.scrollTo(
            carousel.current.scrollLeft + width * delta, 0)
        }
    }

  return (
    <div className='text-white  w-full '>
        <div ref={carousel} className='flex w-full overflow-x-auto scroll snap-x scroll-smooth'>
            {
                images.map((img)=>{
                    return (
                        <CarouselItem key={img.id} img={img} >
                            
                        </CarouselItem>
                    )
                })
            }
        </div>
        <div>
            {
                images.map((img)=>{
                    return (
                        <button className='mr-[10px]' key={img.id} onClick={()=>{incrementCarousel(-1)}} >+</button>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Carousel