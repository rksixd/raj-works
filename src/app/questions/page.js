"use client"

import Heading from '@/components/Heading'
import React, { useState } from 'react'
import searchIcon from "../../../public/searchIcon.svg"
import Image from 'next/image'
import TabButton from '@/components/TabButton'
import { payment } from '@/utils/searchOptions'




const Questions = () => {

    const [searchValue, setSearchValue] = useState("")

    const [payments, setPayments] = useState(payment)

    const handleSearch = ()=>{

        if(!searchValue){
            setPayments(payment)
        } ;

        const search = searchValue.toLowerCase()

     const filterItems =    payment.filter((pay)=>{

            if(pay.label.toLowerCase().includes(search)){
            return pay}

        })

console.log(filterItems , "pp");


        setPayments(filterItems)

    }

  return (
    <div className='px-[24px] lg:px-[100px]'>
        <div className='w-full flex justify-center mt50 items-center'>
        <Heading text={"what can we help you with"}></Heading>        
        </div>

        <div style={{background: 'linear-gradient(92.33deg, rgba(255, 255, 255, 0.08) -0.39%, rgba(255, 255, 255, 0.02) 102.66%)'}} className='relative w-full flex justify-center items-center px-[10px] py-[10px] mx-auto max-w-[600px] rounded-[13px] min-w-[280px] mb-[100px]' >
            {
                !searchValue &&   <div className='opacity-70 absolute left-0 mx-[20px] -z-10 flex justify-start gap-2 items-center'>
                    <Image className='w-[20px] h-[20px]' alt="searchIcon" src={searchIcon} />
                    <p className='text-white'>Search</p>
                </div>
            }
            <input  value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} autoFocus className='bg-transparent w-full h-[40px] border-none border-[1px] max-h-[80px] border-red-500 text-white px-[10px] ' ></input>
            <button onClick={handleSearch} className='bg-gradient-to-r from-[#EC742F] to-[#EA4B27] rounded-[5px] text-[16px] font-bungee leading-[19px] px-4  py-2 text-white'>search</button>
        </div> 

        <div className='flex justify-center items-center w-full gap-5 lg:px-[105px] px-[24px] flex-wrap'>

            {
             payments.length > 0 ?   payments.map((item)=>{
                    return (

                        <TabButton item={item} ></TabButton>
                    )

                }) : <p className='text-white opacity-70 text-[16px]'>Not Found...</p>
            }

        </div>
    </div>
  )
}

export default Questions