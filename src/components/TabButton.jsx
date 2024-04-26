import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TabButton = ({item}) => {
  return (
    <Link style={{
        background: "linear-gradient(92.33deg, rgba(255, 255, 255, 0.08) -0.39%, rgba(255, 255, 255, 0.08) 102.66%)"

}} className='flex items-center gap-2 p-4 rounded-lg text-white flex-1 shrink-0 lg:h-[85px] justify-center' href={`questions/${item.href}`}>
    <Image className="w-[20px] h-[20px]" src={item.icon} />
    <p className='font-poppins text-nowrap text-[24px] leading-[36px] font-[400] '>{item.label}</p>
    </Link>
  )
}

export default TabButton