"use client"
import Features from "@/components/Features";
import FifthSection from "@/components/FifthSection";
import FirstSection from "@/components/FirstSection";
import Footer from "@/components/Footer";
import FourthSection from "@/components/FourthSection";
import Navbar from "@/components/Navbar";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";

import appleIcon from "../../public/appleIcon.svg"
import dividerIcon from "../../public/dividerIcon.svg"
import shieldIcon from "../../public/shieldIcon.svg"

import androidIcon from "../../public/androidIcon.svg"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion'


export default function Home() {

  const [os, setOS] = useState(null)

  const ref = useRef(null)

  
  const handleDownloadApp = ()=>{

    console.log("lll",os);

    // if device is android download apk and for ios redirect to app store
    if(os === "Mac OS" || os === "iOS" ){

        window.location.assign("https://apps.apple.com/in/app/six-dreams-fantasy-sports-app/id6477154031")

    }else if(os === "Linus" || os === "Android" || os === "Windows"){
      const element = document.getElementById("download")
    element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  
      
        //  ref.current.scrollIntoView({ behavior: 'smooth'}) 
      
      // ref?.current.scroollIntoView({behavior: 'smooth'})
      // window.location.assign("https://sixdream-media.s3.ap-south-1.amazonaws.com/Android-APK/Six_Dreams.apk")

    }else if(os === "NA"){
      ref?.current.scroollIntoView({behavior: 'smooth'})

    }


}

  function getOS() {
    const userAgent = window.navigator.userAgent,
        platform = window.navigator?.userAgentData?.platform || window?.navigator?.platform,
        macosPlatforms = ['macOS', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    let os = null;
  
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (/Linux/.test(platform)) {
      os = 'Linux';
    }else {
      os = "NA"
    }
    console.log(os);
  
    return os;
  }

  useEffect(()=>{

    setOS(getOS())

  }, [])

  return (
    <main className="  cursor-default min-h-screen relative pb-[150px]  lg:pb-[50px] bg-[#1A1A1E] min-w-[280px]"    >
      
      {/* <Navbar os={os} handleDownloadApp={handleDownloadApp} classNameh=""></Navbar> */}
<FirstSection os={os} handleDownloadApp={handleDownloadApp} ></FirstSection>
{/* <Features></Features> */}

      <SecondSection></SecondSection>
      <ThirdSection ref={ref}></ThirdSection>
      <FourthSection ></FourthSection>
      <FifthSection></FifthSection>
      {/* <Footer></Footer> */}
      
    <div className='mt-[20px] text-white h-min-screen lg:hidden py-[20px] fixed lg:relative bottom-0 w-full bg-[#1A1A1E] lg:bg-transparent px-[24px] lg:px-[0px] z-50'>
        <motion.button whileTap={{scale:0.95}} onClick={handleDownloadApp} className=' w-full lg:w-auto  bg-gradient-to-r from-[#EC742F] to-[#EA4B27] px-[30px]  py-[15px] rounded-[5px] font-bungee text-[16px] mb-[10px] lg:max-h-[54px]  flex justify-center items-center' >Download now</motion.button>
        <div className='flex items-center justify-center lg:justify-start w-full   font-poppins text-[12px] sm:text-[14px]'>
        <div className='flex items-center justify-center gap-2 '>
        <p className="text-nowrap">Available on</p>
        <div className="shrink-0" > 
            <Image src={androidIcon} />
        </div>
        <div className="shrink-0">
        <Image src={appleIcon} />
        </div>
        </div>
        <div className='flex  items-center justify-center mx-2 shrink-0'>
        <Image src={dividerIcon} />
        </div>
        
        <div className='flex items-center justify-center gap-2'>
        <div className="shrink-0">
        <Image src={shieldIcon} />
        </div>
        <p className="text-nowrap " >100% Safe & Secure</p>
        </div>
        </div>        
    </div>


    </main>
  );
}
