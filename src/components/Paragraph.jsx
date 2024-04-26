import React from 'react'

const Paragraph = ({title, content}) => {
  return (
    <div className='text-white opacity-70 text-[16px] leading-[24px] tracking-[0.2px] mt-[20px]' >
        <p >{title}</p>

        <p>{content}</p>
    </div>
  )
}

export default Paragraph