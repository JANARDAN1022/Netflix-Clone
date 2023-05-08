import React,{useState} from 'react';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import useBillboard from '@/hooks/useBillboard';
import PlayButton from './PlayButton';
import { useRouter } from 'next/router';
import useCategory from '@/hooks/useCategory';
import {BsFillPlayFill} from 'react-icons/bs';
import BillboardFavoriteButton from './BillBoardFavButton';
import {MdOutlineCancel} from 'react-icons/md';



const Billboard = () => {

  const [showInfo,setshowInfo]=useState(false);
  const {data}=useBillboard();
  const path = useRouter().pathname;
  const router = useRouter();
  const {Category} = useRouter().query;
  
  const category = Category as string | undefined;
  console.log('category query:',category);
    const {data:Categories=[]} = useCategory(category);
    console.log('category:',Categories);
    const Random = Math.floor(Math.random() * Categories.length);
     const categories = Categories[Random];
     console.log(categories);
    
    
  return (
    <>
    <div className="relative h-[56.25vw]  ">
 <video
 className='w-full h-[56.25vw] object-cover brightness-[60%]' 
 autoPlay
 loop
 muted
  poster={path==='/'?data.thumbnailUrl:categories?.thumbnailUrl}
  src={path==='/'?data.videoUrl:categories?.videoUrl}></video>
  
   
   <div className='absolute top-[30%] md:top-[35%] ml-4 md:ml-16'>
   <p className='text-white text-3xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl'>
    {path==='/'?data?.title:categories?.title}
   </p>
   <p className='text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl'>
    {path==='/'?data?.description:categories?.description}
   </p>
   <div className='flex flex-row mt-3 md:mt-10 gap-3 '>
  
   <PlayButton movieId={path==='/'?data?.id:categories?.id}/>

    <button onClick={()=>setshowInfo(true)}  className='flex bg-zinc-400 text-white bg-opacity-30 w-44 h-[50px] rounded-[3px] justify-center items-center gap-2 p-2 text-xs lg:text-[20px] hover:bg-opacity-20'>
       <AiOutlineInfoCircle size={30} className='mr-1'/>
        More Info</button>
   </div>
   </div>
   
   <div  className={`${showInfo?'visible':'hidden'} absolute top-36 left-[25%] w-[50vmax] h-[45vmax] z-[1000px] `}>

   
    <video  className='
    cursor-pointer object-cover transition duration
    shadow-xl rounded-t-md w-[50vw] h-[21vw] 
    '
    onClick={()=> router.push(`/watch/${path==='/'?data?.id:categories?.id}`)}
    
    
    src={path==='/'?data?.videoUrl:categories?.videoUrl} autoPlay  muted loop  />
    <MdOutlineCancel size={50} className='cursor-pointer text-white absolute z-20 top-0 right-3' onClick={()=>setshowInfo(false)}/> 
   
   <div className='
    bg-zinc-800 p-2 lg:p-4 absolute 
   w-full  transition  shadow-md rounded-b-md
    flex flex-col h-max z-50
      '>
     
  <div className='flex flex-row items-center absolute top-[-70px] left-5  gap-5 '>

   <div className='
   cursor-pointer w-4 h-4 lg:w-14 lg:h-14 
   bg-white rounded-full flex justify-center
   items-center transition hover:bg-neutral-300 
   ' onClick={()=> router.push(`/watch/${path==='/'?data?.id:categories?.id}`)}>
       <BsFillPlayFill size={35} className='ml-1'/>
   </div>
   <BillboardFavoriteButton movieId={path==='/'?data?.id:categories?.id}/>
  </div>
  
   <div className='flex justify-between '>
   <p className='text-green-400 font-semibold mt-3 text-[20px]'>
    New <span className='text-white text-[20px]'>2023</span>
   </p>

   <div className='flex flex-row mt-4 gap-2 items-center' >
    <p className='text-white text-[10px] lg:text-[20px]'>{path==='/'?data?.duration:categories?.duration}</p>
   </div>
   </div>

   <div className='flex flex-row mt-4 gap-2 items-center'>
    <p className='text-white text-[15px] lg:text-2xl'>{path==='/'?data?.genre:categories?.genre}</p>
   </div>

   <div className='text-white mt-4 '>
    <p className='text-2xl'>Description:</p>
    <p className='mt-3 text-[22px] font-serif'>{path==='/'?data?.description:categories?.description}</p>
   </div>
    
   <div className='text-white mt-4 flex items-center gap-3'>
    <p className='text-2xl'>Category:</p>
    <p className='mt-2 text-[22px] font-serif text-red-400'>{path==='/'?data?.category:categories?.category}</p>
   </div>

   </div>
   
   </div>
   
    </div>
    </>
  )
}

export default Billboard;