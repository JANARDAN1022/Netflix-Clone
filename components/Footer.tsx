import React from 'react';
import {ImFacebook} from 'react-icons/im';
import {BsInstagram,BsTwitter} from 'react-icons/bs';
import {AiFillYoutube} from 'react-icons/ai';
import {MdCopyright} from 'react-icons/md';


const Footer = () => {
  return (
    <div className='p-5'>
    <div className='text-white ml-[15%] flex gap-5 items-center'>
    <div className='cursor-pointer'>
        <ImFacebook size={25}/>
    </div>
    <div className='cursor-pointer'>
   <BsInstagram size={25}/>
    </div>
    <div className='cursor-pointer'>
    <BsTwitter size={25}/>
    </div>
    <div className='cursor-pointer '>
  <AiFillYoutube size={35}/>
    </div>
   </div>

   <div className='text-[rgba(255,255,255,0.4)]  flex justify-between w-[70%] ml-[15%] mt-5'>
    
    <div className='flex flex-col gap-1 cursor-pointer'>
    <p className='hover:underline'>Audio Description</p>
    <p className='hover:underline'>Investor Relations</p>
    <p className='hover:underline'>Legal Notices</p>
    </div>

    <div  className='flex flex-col gap-1 cursor-pointer'>
    <p className='hover:underline'>Help Centre</p>
    <p className='hover:underline'>Jobs</p>
    <p className='hover:underline'>Cookie Preferences</p>
    </div>

    <div className='flex flex-col gap-1 cursor-pointer'>
    <p className='hover:underline'>Gift Cards</p>
    <p className='hover:underline'>Terms of Use</p>
    <p className='hover:underline'>Corporate information</p>
    </div>

    <div  className='flex flex-col gap-1 cursor-pointer'>
    <p className='hover:underline'>Media Centre</p>
    <p className='hover:underline'>Privacy</p>
    <p className='hover:underline'>Contact Us</p>
    </div>

   </div>
  
  <div className='ml-[15%] mt-4'>
    <button className='text-[rgba(255,255,255,0.4)] border-opacity-5 border p-2 cursor-pointer hover:text-white transition'>Service Code</button>
  </div>

  <div className='text-[rgba(255,255,255,0.4)] flex items-center ml-[14%] mt-3 mb-10'>
    <div className=''>
  <MdCopyright />
  </div>
  <p className='text-sm'>1997-2023 Netflix-Clone, Inc.</p>
  </div>


<div>

</div>

    </div>
  )
}

export default Footer