import React from 'react'
import Heading from './Heading'
import NormalLine from './NormalLine'
import FairPlayItem from './FairPlayItem'
import play1 from "../../public/play1.png"
import play2 from "../../public/play2.png"
import play3 from "../../public/play3.png"
import Image from 'next/image'

const PlayPolicy = () => {
  return (
    <div>
        <Heading text={"Fair play policy"}></Heading>

        <NormalLine className="opacity-70" text={"Welcome to Six Dreams, where fairness and integrity are at the core of our gaming community. Our Fair Play Policy is designed to ensure a level playing field for all users, promoting an enjoyable and ethical gaming experience. Please read the following principles that govern your participation on our platform:"}></NormalLine>

        <div className='w-[100%] flex flex-col  lg:flex-row justify-between items- mb-[20px] '>
            <div className=''>
                <h3 className='fair-play-head font-fontspringNormal text-[34px] leading-[41px] tracking-[0.5px] text-white mb-[30px]' >{"Principle of fair play"}</h3>

                <ul className='fair-play-list'>
                    <li>
                        <FairPlayItem  title={"Equal Opportunity"} content={"Ensuring fairness for all users, irrespective of skill level or experience."} ></FairPlayItem>
                    </li>
                    
                    <li>
                        <FairPlayItem  title={"Anti Cheating Measures"} content={"Strict prohibition of cheating, hacking, or using unauthorized software."} ></FairPlayItem>
                    </li>
                    <li>
                        <FairPlayItem  title={"Multi-Accounting Policy"} content={"Users must have only one account to maintain fairness."} ></FairPlayItem>
                    </li>
                    <li>
                        <FairPlayItem  title={"Data Security"} content={"Protecting personal account information to prevent unauthorized access."} ></FairPlayItem>
                    </li>
                </ul>
            </div>
            <div className=' w-full  lg:w-[50%]    flex justify-center items-center' >
                <Image alt="play1" className='max-w-[95%] lg:max-w-[80%] ' src={play1} />
            </div>
        </div>

        
        <div className='w-[100%] flex flex-col  lg:flex-row justify-between items-center '>
            <div className='order-2'>
                <h3 className='fair-play-head font-fontspringNormal text-[34px] leading-[41px] tracking-[0.5px] text-white mb-[30px]' >{"User Conduct Guidelines"}</h3>

                <ul className='fair-play-list'>
                    <li>
                        <FairPlayItem  title={"Respectful Conduct"} content={"Emphasizing a sportsmanlike attitude and discouraging harassment or abuse."} ></FairPlayItem>
                    </li>
                    
                    <li>
                        <FairPlayItem  title={"Transparent Communication"} content={"Keeping users informed about rule updates and changes."} ></FairPlayItem>
                    </li>
                    <li>
                        <FairPlayItem  title={"Reporting Violations"} content={"Encouraging users to report any observed violations promptly."} ></FairPlayItem>
                    </li>
                    
                </ul>
            </div>
            <div className=' w-full  lg:w-[50%]  lg:order-1  flex justify-center items-center mb-[20px]' >
                <Image alt="play2" className='max-w-[95%] lg:max-w-[80%] ' src={play2} />
            </div>
        </div>

        
        <div className='w-[100%] flex flex-col  lg:flex-row justify-between items-center mb-[20px] '>
            <div className=''>
                <h3 className='fair-play-head font-fontspringNormal text-[34px] leading-[41px] tracking-[0.5px] text-white mb-[30px]' >{"Enforcement and Consequences"}</h3>

                <ul className='fair-play-list'>
                    <li>
                        <FairPlayItem  title={"Consequences for Violations"} content={"Detailing the penalties for violating the Fair Play Policy."} ></FairPlayItem>
                    </li>
                    
                    <li>
                        <FairPlayItem  title={"Fair Play Team"} content={"Providing information on how users can contact the Fair Play team."} ></FairPlayItem>
                    </li>
                    <li>
                        <FairPlayItem  title={"Community Contribution"} content={"Highlighting how adherence to fair play principles contributes to a positive community experience."} ></FairPlayItem>
                    </li>
                    
                </ul>
            </div>
            <div className=' w-full  lg:w-[50%]    flex justify-center items-center' >
                <Image alt="play1" className='max-w-[95%] lg:max-w-[80%] ' src={play3} />
            </div>
        </div>

        <div style={{  background: 'linear-gradient(92.33deg, rgba(255, 255, 255, 0.08) -0.39%, rgba(255, 255, 255, 0.02) 102.66%)'
}} className='opacity-70 rounded-[17px] font-poppins text-[16px] leading-[24px] font-[400px] mx-auto max-w-[1300px] text-white py-[50px] px-[80px]'>
            <p className='text-center mb-[25px]'>At Six Dreams, we believe in fostering a community where every user can enjoy a fair, competitive, and respectful gaming environment. Your adherence to these principles contributes to a positive experience for all. Thank you for being a part of the Six Dreams community!
</p>

            <p className='text-center' >For any concerns or reports related to fair play, please contact our Fair Play team at fairplay@sixdreams.com</p>
        </div>


    </div>
  )
}

export default PlayPolicy