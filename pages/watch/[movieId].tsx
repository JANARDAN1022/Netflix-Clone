import React from 'react';
import { useRouter } from 'next/router';
import useMovie from '@/hooks/useMovie';
import {BiArrowBack} from 'react-icons/bi';

const Watch = ()=>{
    const router = useRouter();
    const {movieId} = router.query;
    const {data} = useMovie(movieId as string);
  
    return(
        <div className='h-screen w-screen bg-black'>
    
       <nav className='fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70'>
        <BiArrowBack className='text-white cursor-pointer' size={40} onClick={()=>router.push('/')}/>
      <div className='flex items-center'>
       <span className='font-light mr-2 text-[20px] text-white'>
         watching :
         </span>
         <p className=' text-white text-[25px] font-bold'>
         {data?.title}
       </p>
          </div>

       </nav>
       <video src={data?.videoUrl}
       className='h-full w-full'
       autoPlay controls
       ></video>

        </div>
    )
}

export default Watch