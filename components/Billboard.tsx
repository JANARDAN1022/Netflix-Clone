import React from 'react';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import useBillboard from '@/hooks/useBillboard';
import PlayButton from './PlayButton';
import { useRouter } from 'next/router';
import useCategory from '@/hooks/useCategory';



const Billboard = () => {
  const {data}=useBillboard();
  const path = useRouter().pathname;
  const {Category} = useRouter().query;
  
  const category = Category as string | undefined;
  console.log('category query:',category);
    const {data:Categories=[]} = useCategory(category);
    console.log('category:',Categories);
    const Random = Math.floor(Math.random() * Categories.length);
     const categories = Categories[Random];
    
    
  return (
    <div className="relative h-[56.25vw]  ">
 <video
 className='w-full h-[56.25vw] object-cover brightness-[60%]' 
 autoPlay
 loop
 muted
  poster={path==='/'?data?.thumbnailUrl:categories?.thumbnailUrl}
  src={path==='/'?data?.videoUrl:categories?.videoUrl}></video>
   
   <div className='absolute top-[30%] md:top-[35%] ml-4 md:ml-16'>
   <p className='text-white text-3xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl'>
    {path==='/'?data?.title:categories?.title}
   </p>
   <p className='text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl'>
    {path==='/'?data?.description:categories?.description}
   </p>
   <div className='flex flex-row mt-3 md:mt-10 gap-3'>
  
   <PlayButton movieId={path==='/'?data?.id:categories?.id}/>

    <button className='flex bg-zinc-400 text-white bg-opacity-30 w-44 h-[50px] rounded-[3px] justify-center items-center gap-2 p-2 text-xs lg:text-[20px] hover:bg-opacity-20'>
       <AiOutlineInfoCircle size={30} className='mr-1'/>
        More Info</button>
   </div>
   </div>
   
   
    </div>
  )
}

export default Billboard;