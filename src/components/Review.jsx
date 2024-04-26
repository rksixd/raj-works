import React, {useState} from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import speaker from '../../public/speaker.svg'


const Review = ({review, idx, click}) => {

    const [showShadow, setShowShadow] = useState(false)



  return (
<motion.article className={`mb-[20px] max-h-[350px] flex flex-col justify-between ${parseInt(idx/2) %2 === 0 && idx%2 === 0 && 'col-span-2' } ${parseInt(idx/2) %2 === 0 && idx%2 === 1 && 'col-span-3' } ${parseInt(idx/2) %2 !== 0 && idx%2 === 0 && 'col-span-3' } ${parseInt(idx/2) %2 !== 0 && idx%2 !== 0 && 'col-span-2 ' }     `}   key={review.id}  >
                
                <motion.div onHoverStart={()=>setShowShadow(true)} onHoverEnd={()=>setShowShadow(false)} whileHover={{scale:1.02, 
                    // padding: '5px'
                   }} animate={{border: showShadow ?   '1px solid rgba(255,40,40,0.27)' : '0px solid rgba(255,40,40,0.27)' }}  transition={{duration:0.2}}   style={{  
                    
                  background: 'linear-gradient(92.33deg, rgba(255, 255, 255, 0.08) -0.39%, rgba(255, 255, 255, 0.02) 102.66%)',
                //   border: '1px solid #ff4800',
                  borderRadius: 30,
                                  }}  
                                   className='p-[25px] rounded  min-h-[180px] max-h-[230px] relative flex flex-col justify-around items-center pb-[70px]  '>
                  <p className='text-white font-poppins font-[400] text-[14px] leading-[25px]  text-center opacity-80' >{review.text}</p>
                  <button onClick={()=>click()} className='absolute right-0 bottom-0 m-[15px]'>
                    <Image className='w-[24px] ' src={speaker} alt='speaker' />
                  </button>
                  <motion.div 
                    style={{
                    borderRadius: "50%",}} 
                    className='absolute bottom-[-54px]  mx-auto flex flex-col justify-center items-center '>
                    <Image  src={review.img} className='z-10  max-w-[104px]' alt={`review${review.id}`} />
                    <motion.div initial={{opacity:0}} animate={{opacity: showShadow ? 1 : 0 }} transition={{duration: 0.2}} style={{
                        boxShadow: "0px 0px 50px 20px rgba(255, 72, 0, 0.5)"
                        }} className='absolute z-0  rounded-[50%]    w-[50px] h-[50px] bg-[#ff4800]' ></motion.div>
                  </motion.div>
                </motion.div>
                
                <div className='mt-[70px]'>
                    <p className='text-white text-center uppercase font-fontspring text-[20px] leading-[24px] tracking-wider' >{review.name}</p>
                    <p className='text-white text-center uppercase font-poppins text-[14px] leading-[21px] font-[400] opacity-80'>{review.state}</p>
                    </div>
                    
              </motion.article>
                )
}

export default Review