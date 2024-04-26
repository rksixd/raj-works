import { set } from '@/utils/topicwiseQuestion';
import Link from 'next/link';
import React from 'react'

const Question = ({params}) => {

    console.log( "fff", params);


    const questions = set.get(params.type)

    const random = set.get("gst-tds")

    if(!questions){
        return (

            <p className='opacity-70 text-center mt-[100px] text-white'>Page not found </p>
        )
    }

  return (
    <div className='px-[24px] lg:px-[106px] flex flex-col lg:flex-row justify-between items-center'> 
        <div className=' w-[95%] lg:w-[50%] mt-[30px] flex justify-center items-center'>
            <ul className='max-w-[645px] Questions-list'>
            {
                questions.length >  0 && questions.map((question)=>{

                    return (
                        <li className='text-white'>
                            {/* <p>hii</p> */}
                        <Link className='mb-[55px]' href={`/questions/${params.type}/${question.id}`} >
                            <p className='text-[18px] inline-block  opacity-90  text-white leading-[65px] font-poppins normal-case tracking-[0.2px] '>{question.question}</p>
                        </Link>
                        </li>
                    )

                })
            }
            </ul>
        </div>
        <div  className='flex justify-center items-center  mt-[30px] w-[95%] lg:w-[50%]'>

            <ul style={{
            background: "linear-gradient(92.33deg, rgba(255, 255, 255, 0.08) -0.39%, rgba(255, 255, 255, 0.02) 102.66%)"
        }} className='max-w-[550px] rounded-[13px] p-[20px] max-h-[550px] side-questions'>

            {/* <p className='text-[24px] text-white font-[700] leading-[29px] tracking-[0.2px] font-fontspringNormal uppercase mb-[40px]'>You may alos like it</p> */}
            
                {
                    random.map((ques)=>{

                        return (
                    <li className='text-white'>
                    <Link href={`/questions/${params.type}/${ques.id}`} className=' mb-[20px]   font-poppins text-white text-[16px] leading-[33px] tracking-[0.2px]  gap-2'>
                        {/* <p className='w-[3px] h-[3px] inline-block my-auto rounded-[50%] bg-white'></p> */}
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

export default Question