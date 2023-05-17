import React from 'react';
import {BsFillPlayFill} from 'react-icons/bs';
import FavoriteButton from './favoriteButton';
import { useRouter } from 'next/router';
import Image from 'next/image';




interface MovieCardProps{
    data: Record<string, any>;

}

const MovieCard :React.FC<MovieCardProps>=({
    data,
  
}) => {
  const router = useRouter();
  


  
 
  return (
    <div className='group  bg-zinc-900 relative h-[15vw]  ml-[1.5px]'>
    
    <Image
    width={180}  height={50}
    className='
    w-60 h-[60%] object-cover cursor-pointer
    '
    onClick={()=> router.push(`/watch/${data?.id}`)}   
    src={data?.thumbnailUrl} alt='' />


   <div className=' w-[20vmax] 
  opacity-0 absolute top-[-10px]  transition duration-300 
  z-20 invisible sm:visible delay-500
   scale-0 group-hover:scale-110 group-hover:-translate-y-[2vw]
   group-hover:translate-x-[2px] group-hover:opacity-100  
   '>
   
    <video className='
    cursor-pointer object-cover transition duration
    shadow-xl rounded-t-md w-[20vw] h-[8vw]  
    '
    onClick={()=> router.push(`/watch/${data?.id}`)}
    
    
    src={data?.videoUrl} autoPlay muted loop  />
     
   
   <div className='
    bg-zinc-800 p-2 lg:p-4 absolute 
   w-full  transition shadow-md rounded-b-md
    flex flex-col
      '>
     
  <div className='flex flex-row items-center  gap-3 '>

   <div className='
   cursor-pointer w-4 h-4 lg:w-8 lg:h-8
   bg-white rounded-full flex justify-center
   items-center transition hover:bg-neutral-300
   ' onClick={()=> router.push(`/watch/${data?.id}`)}>
       <BsFillPlayFill size={20} className='ml-1'/>
   </div>
   <FavoriteButton movieId={data?.id}/>


  </div>
  
   <div className='flex justify-between '>
   <p className='text-green-400 font-semibold mt-3'>
    New <span className='text-white'>2023</span>
   </p>

   <div className='flex flex-row mt-4 gap-2 items-center' >
    <p className='text-white text-[10px] lg:text-sm'>{data.duration}</p>
   </div>
   </div>

   <div className='flex flex-row mt-4 gap-2 items-center'>
    <p className='text-white text-[10px] lg:text-sm'>{data.genre}</p>
   </div>

   </div>
   
   </div>
   </div>


  )
}

export default MovieCard;