import React from 'react';
import {BsFillPlayFill} from 'react-icons/bs';
import FavoriteButton from './favoriteButton';
import { useRouter } from 'next/router';





interface FavoriteCardProps{
    data: Record<string, any>;

}

const FavoriteCard :React.FC<FavoriteCardProps>=({
    data,
  
}) => {
  const router = useRouter();
  


  
 
  return (
    <div className='group bg-zinc-900 relative h-[10vw] mt-2  ml-1 '>
    
    <img 
    className='
     cursor-pointer object-cover transition
    duration shadow--xl rounded-[3px]
    group-hover:opacity-90 sm:group-hover:opacity-0
   delay-300 w-[15.3vw] h-[8.5vw] 
    '
    onClick={()=> router.push(`/watch/${data?.id}`)}   
    src={data.thumbnailUrl} alt='' />


   <div className='w-[20vmax]
  opacity-0 absolute top-[-10px]  transition duration-300 
  z-20 invisible sm:visible delay-500
   scale-0 group-hover:scale-110 group-hover:-translate-y-[1vw]
   group-hover:translate-x-[2px] group-hover:opacity-100  
   '>
   
    <video className='
    cursor-pointer object-cover transition duration
    shadow-xl rounded-t-md w-[20vw] h-[8vw] 
    '
    onClick={()=> router.push(`/watch/${data?.id}`)}
    
    
    src={data.videoUrl} autoPlay muted loop  />
     
   
   <div className='
   zindex bg-zinc-800 p-2 lg:p-4 absolute 
   w-full  transition shadow-md rounded-b-md
    flex flex-col
      '>
     
  <div className='flex flex-row items-center gap-3 '>

   <div className='
   cursor-pointer w-4 h-4 lg:w-8 lg:h-8
   bg-white rounded-full flex justify-center
   items-center transition hover:bg-neutral-300
   ' onClick={()=> router.push(`/watch/${data?.id}`)}>
       <BsFillPlayFill size={20} className='ml-1'/>
   </div>
   <FavoriteButton movieId={data?.id}/>


  </div>
  
   <div className='flex justify-between'>
   <p className='text-green-400 font-semibold mt-3'>
    New <span className='text-white'>2023</span>
   </p>

   <div className='flex flex-row mt-4 gap-2 items-center' >
    <p className='text-white text-[10px] lg:text-sm'>{data?.duration}</p>
   </div>
   </div>

   <div className='flex flex-row mt-4 gap-2 items-center'>
    <p className='text-white text-[10px] lg:text-sm'>{data?.genre}</p>
   </div>

   </div>
   
   </div>
   </div>


  )
}

export default FavoriteCard;