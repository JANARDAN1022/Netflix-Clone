import React from 'react'
import {BsFillPlayFill} from 'react-icons/bs';
import { useRouter } from 'next/router';

interface PlayButtonProps{
    movieId: string;
}

const PlayButton :React.FC<PlayButtonProps>=({movieId}) => {
  const router = useRouter();
  return (
    <button 
    onClick={()=> router.push(`/watch/${movieId}`)}
    className='flex bg-white w-36 rounded-md h-[53px] justify-center items-center text-xs lg:text-[25px] hover:bg-zinc-200'>
    <BsFillPlayFill size={40} className=''/>
     Play
    </button>
  )
}

export default PlayButton;