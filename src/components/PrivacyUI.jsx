import React from 'react'
import Heading from './Heading'
import NormalLine from './NormalLine'
import SentenceUI from './SentenceUI'
import Paragraph from './Paragraph'

const PrivacyUI = () => {
    
  return (
    <div>
        <Heading text={"Privacy policy"}></Heading>
        <SentenceUI text={"Six Dreams Technologies Private Limited"}></SentenceUI>
        <SentenceUI text={"Brand Name: Six Dreams"}></SentenceUI>
        <SentenceUI text={"Website: sixdreams.com"}></SentenceUI>

        <Paragraph title={"Introduction:"} content={"Six Dreams Technologies Private Limited, operating under the brand name Six Dreams and accessible at sixdreams.com, values your privacy and is committed to safeguarding it. This privacy policy outlines how we collect, use, and protect your information. By using our services, you agree to the terms outlined in this privacy policy"}></Paragraph>


        <div className='mt-[20px] font-poppins text-[16px] opacity-70 text-white'>
            <p>Information Collection:</p>
            <p>To access certain services on our portal, users may need to provide information during the registration process. This may include:</p>
            <ul>
<li>1. Username</li>
<li>2. Email address</li>
<li>3. Date of birth</li>
<li>4. State</li>
<li>5. Government ID (e.g., Aadhaar card, driving license, voter ID)</li>
            </ul>

            <p className='mt-[20px]'>Additionally, to enhance user experience and verify identity, users may grant permission for the collection of device-related information, operating system details, network information, and location information. Users may also be required to provide additional information, such as a Permanent Account Number (PAN).
        </p>

        </div>


        <Paragraph title={"Use of Information"} content={"We collect and use personal information to operate, provide, develop, and improve our services. This includes keeping users informed about our offerings and those of our affiliates and group entities. Information may be used to reach out to users for marketing and promotional purposes. Users may also be invited to participate in games through social media platforms."} >

        </Paragraph>
        <Paragraph title={"Sharing of Information:"} content={"Six Dreams may share user information with affiliates, group entities, and third-party service providers for data analytics, storage, and service improvement purposes. Users expressly grant consent for the collection and sharing of information. In the event of a business transfer, user information may be shared as part of the transaction."}></Paragraph>

        <Paragraph title={"Use of Cookies:"}  content={"We use cookies to enhance the effectiveness and usability of our portal. Cookies are used to assign a unique random number (User ID) to understand individual interests. Six Dreams’s web servers collect limited information about users’ device connections to the internet, such as IP addresses, for various purposes."} ></Paragraph>

        <Paragraph title={"Links"} content={"Our portal may include links to other websites, and users are advised to review the privacy policies of these external sites. Six Dreams is not responsible for the privacy practices or content of such websites."} ></Paragraph>

        
        <Paragraph title={"Security Procedures:"} content={"User information is securely stored on Six Dreams-controlled databases, protected by firewalls and password access. While we implement robust security measures, no system is entirely impenetrable, and we cannot guarantee the security of our database"}></Paragraph>

        <Paragraph title={"Advertising"} content={"Aggregated and anonymized data may be shared with online advertisers to help them understand our audience. Users may be contacted from time to time about updating content for their benefit."}></Paragraph>

        

        <Paragraph title={"Disclaimer"} content={"Six Dreams disclaims liability for any damages arising from the use of the portal. Users are cautioned against responding to deceptive communications falsely associated with Six Dreams."} ></Paragraph>
        <Paragraph title={"Retention of Data:"} content={"User information may be retained until the purposes for its use are no longer applicable, and there is no legal requirement for its retention."}></Paragraph>
        
        <Paragraph title={"User Account and Data Deletion:"} content={"Users may request deletion of their accounts and personal information by contacting helpdesk@sixdreams.com. Deletion requests are subject to certain conditions and timelines."} ></Paragraph>

        

        <Paragraph title={"Applicable Law and Jurisdiction:"} content={"This privacy policy is governed by the laws of the Republic of India, and any disputes are subject to the dispute resolution process outlined in the Terms and Conditions."}></Paragraph>


        <Paragraph title={"Updating Information:"} content={"Users are responsible for notifying Six Dreams promptly of any changes to their personal information. Users can review, update, or modify their personal information and preferences by logging into their profile page on the portal"} ></Paragraph>

    <Paragraph title={"Contact Us"} content={"Users are responsible for notifying Six Dreams promptly of any changes to their personal information. Users can review, update, or modify their personal information and preferences by logging into their profile page on the portal."} ></Paragraph>

    <div className='my-[20px]'>
    <SentenceUI text={"Attn: Team Six Dreams"}></SentenceUI>
    </div>
    <div className=''>
        <SentenceUI text={"Six Dreams Technologies Private Limited,"}></SentenceUI>
        <SentenceUI text={"8-2-269/1&2a,b,cd, Road No 2,"}></SentenceUI>
        <SentenceUI text={"8-2-269/1&2a,b,cd, Road No 2,"}></SentenceUI>
        <SentenceUI text={"Hyderabad, Telangana,"}></SentenceUI>
        <SentenceUI text={"India, 500034"}></SentenceUI>

    </div>

    </div>
  )
}

export default PrivacyUI