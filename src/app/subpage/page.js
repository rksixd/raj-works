import About from '@/components/About'
import Footer from '@/components/Footer'
import PlayPolicy from '@/components/PlayPolicy'
import Pricing from '@/components/Pricing'
import PrivacyUI from '@/components/PrivacyUI'
import RefundUI from '@/components/RefundUI'
import React from 'react'

const page = () => {
  return (
    <main className=' bg-[#1A1A1E] min-w-[280px] px-[24px] lg:px-[106px] pt-[70px]'>
{/* <RefundUI></RefundUI> */}
{/* <Pricing></Pricing> */}

{/* <PrivacyUI></PrivacyUI> */}

{/* <About></About> */}

<PlayPolicy></PlayPolicy>
    </main>
  )
}

export default page