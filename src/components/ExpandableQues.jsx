import React from 'react'
import down from "../../public/CaretUp.svg"
import up from "../../public/CaretDown.svg"
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'


const variance = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };


const ExpandableQues = ({faq, setShowId, showId}) => {

    const handleClick = ()=>{

        if(showId !== faq.id){
            
            setShowId(faq.id)
        }else if(showId === faq.id){
            setShowId(0)
        }
    }

  return (

        <div className='rounded-[17px] mb-[15px]' style={{
            backgroundImage: 'linear-gradient(92.33deg, rgba(255, 255, 255, 0.08) -0.39%, rgba(255, 255, 255, 0.02) 102.66%)'
          }}>
            <div className='flex items-center justify-between py-[30px] px-[20px] gap-3'>
            <p className='text-start font-poppins font-[500] text-[14px] leading-[24px]  md:text-[15px] md:leading-[27px]'>{faq.question}</p>
            <button className='w-[25px]' onClick={handleClick}>
                {
                    showId === faq.id ? <Image alt="up" className='min-w-[25px]' src={up} /> : <Image className='min-w-[25px]' alt="down" src={down} />

                }
            </button>
            </div>
            
        
    <AnimatePresence>
            
            {
                showId === faq.id && <motion.div     initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                        key={faq.id}
                 className='py-[30px] px-[20px] border-t-[1px]'>
                    {
        
        faq.answers.map((ques, idx)=>{
        return <p key={idx} className='md:leading-[24px] font-[400] font-poppins md:text-[14px] leading-[20px] text-[12px] mb-[10px] opacity-80'>{ques}</p> 
        })
                    }
                </motion.div>
                
                 
            }
            </AnimatePresence>


    </div>
    
    
  )
}

export default ExpandableQues