import React from 'react'

const FairPlayItem = ({title, content}) => {
  return (
    <div className='mb-[20px]'>
        <div className='flex items-center gap-5 mb-[15px]' >
        <div style={{background: 'linear-gradient(90deg, rgba(236, 116, 47, 1), rgba(234, 75, 39, 1))'
}} className='w-[24px] h-[24px] rounded-[5px] bg-gradient-to-r from-[#EC742F] to-[#EA4B27]  '></div>
        <p className="opacity-100 font-fontspringNormal text-[24px] leading-[29ppx] tracking-[0.2px] text-white ">{title}</p>
        </div>
        <p className="opacity-70 ml-[44px] text-white font-poppins text-[16px] leading-[24px]">{content}</p>
    </div>
  )
}

export default FairPlayItem