'use client'
import { faqs } from '@/utils/faq'
import React, { useState } from 'react'
import ExpandableQues from './ExpandableQues'

const FifthSection = () => {


    const [showId, setShowId] = useState(1)

  return (
    <section className='px-[24px] min-w-[280px] max-w-[1300px]  mx-auto' >
    
    <h3 className='text-white font-fontspring text-[38px] leading-[45px] md:text-[69px] md:leading-[82px] text-center mb-[30px]'>FAQs</h3>
    
    <div className='text-white mx-auto max-w-[860px] '>
    {
        faqs.map((faq, )=>{
            return (
            <ExpandableQues  key={faq.id} showId={showId} setShowId={setShowId} faq={faq}></ExpandableQues>)

        })
    }
    </div>

    </section>
)
}

export default FifthSection