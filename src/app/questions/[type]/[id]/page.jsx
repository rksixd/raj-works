import { set } from '@/utils/topicwiseQuestion';
import Link from 'next/link';
import React from 'react'
import { answers } from '@/utils/answers';

const Answer = ({params}) => {

    console.log("route", params);

    const random = set.get("gst-tds")

    const item = answers.find((answer)=>answer.id === parseInt(params.id))

    // console.log(item);

  return ( 
    <div className='px-[24px] w-full flex flex-col lg:flex-row justify-center items-start lg:px-[100px]'>

        <div className='w-[50%] text-white mt-[30px]'>
            <p className='answers-heading text-[34px] uppercase opacity-90  text-white leading-[65px] font-fontspringNormal tracking-[0.2px] '>{item?.question}</p>

            <div>
                {
                    item?.answer.map((a)=>{

                        return (
                            <p className='answers-para font-poppins font-[400] text-[16px] leading-[34px] tracking-[0.2px]'>{a}</p>
                        )

                    })
                }
            </div>
        </div>
         

        <div  className='flex justify-center items-center  mt-[30px] w-[95%] lg:w-[50%]'>

            <ul style={{
            background: "linear-gradient(92.33deg, rgba(255, 255, 255, 0.08) -0.39%, rgba(255, 255, 255, 0.02) 102.66%)"
        }} className='max-w-[640px] rounded-[13px] p-[20px] max-h-[550px]'>

            <p className='text-[24px] text-white font-[700] leading-[29px] tracking-[0.2px] font-fontspringNormal uppercase mb-[20px]'>You may alos like it</p>
            
                {
                    random.map((ques)=>{

                        return (
                            <li className='text-white'>
                    <Link href={`/questions/${params.type}/${ques.id}`} className=' mb-[20px]  font-poppins text-white text-[16px] leading-[33px] tracking-[0.2px]  gap-2'>
                        <p className='inline-block'>  {ques.question}</p>
                            </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default Answer