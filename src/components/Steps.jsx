import React from 'react'

const Steps = ({data}) => {
  return (
    <div className='mb-[50px]'>
        {
            data.map((item)=>{
                return (
                    <div className='text-white font-poppins text-[16px] leading-[24px] tracking-[0.2px] font-[400px] mb-[20px]' key={item.id}>
                        <p>{item.heading}</p>
                        <div>
                            {
                                item.texts.map((text)=>{
                                    return (<ListItem text={text}></ListItem>)
                                })
                            }
                        </div>
                        </div>
                )
            })
        }
    </div>
  )
}

export const ListItem = ({text})=>{
    return (
        <p className='mb-[10px]'>{text}</p> 
    )
}

export default Steps