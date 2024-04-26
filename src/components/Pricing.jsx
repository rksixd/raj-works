import React from 'react'
import Heading from './Heading'
import NormalLine from './NormalLine'
import { addFunds, checkOutFlow, needHelp } from '@/utils/steps'
import Steps, { ListItem } from './Steps'
const Pricing = () => {
  return (
    <div >
        <Heading text={"Pricing and Checkout Flow"}></Heading>

        <NormalLine className='opacity-70' text={"Add Funds to Your Six Dreams Wallet"} ></NormalLine>

        <NormalLine className='opacity-70' text={"(Only Accessible from the Six Dreams Mobile Application)"}></NormalLine>

        <Steps className='opacity-70' data={addFunds} ></Steps>

        <NormalLine className='opacity-70' text={"Checkout Flow"}></NormalLine>
        
        <Steps className='opacity-70' data={checkOutFlow} ></Steps>

        <Steps className="opacity-70" data={needHelp} ></Steps>

    </div>
  )
}

export default Pricing