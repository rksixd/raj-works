import Head from 'next/head'
import React from 'react'
import Line from './Line'
import Heading from './Heading'

const RefundUI = () => {
  return (
    <div className='w-full h-full'>
        <Heading text={"Return, Refund and Cancellation Policy"}></Heading>

        <Line text={"If there is an error in the Services we provide (at our discretion), we may issue a refund if genuine reasons are proven after investigation."}></Line>
        
        <Line text={"Please carefully read the rules of each Fantasy Sports Contests before participating."}></Line>
        <Line text={"Registrations cannot be canceled once entered, but in exceptional circumstances where the fault lies with us, we will cancel your participation upon request and refund the in-app virtual currency entry fee within a reasonable timeframe."}></Line>
        <Line text={"If we cancel your participation in a Game or Contest, we will return your in-app virtual currency entry fee amount to your relevant wallet (Deposit/Bonus) within a reasonable timeframe for you to use it in other Contests."}></Line>
        <Line text={"Refunds will be made to the same account used for the initial payment.All amounts credited to the Winnings Wallet or deposited in the Deposit Wallet must be utilized within 365 days. Unutilized amounts after 365 days will no longer be usable, and we are not liable to provide compensation."}></Line>
      
    </div>
  )
}




export default RefundUI