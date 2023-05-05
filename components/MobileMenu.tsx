import React from 'react'
interface MobileMenuprops{
    visible: boolean;
}

const MobileMenu : React.FC<MobileMenuprops>=({
    visible
}) => {
    if(!visible){
        return null;
    }
  return (
    <div className='bg-black w-56 absolute top-[70px] left-[-10vmax] py-5 flex-col border-2 border-gray-800 flex'>
    
    <div className=' flex flex-col gap-4'>
    
    <div className='border-b-[1px] border-b-[rgba(255,255,255,0.2)]  p-1 text-center text-white hover:underline'>
        <span className='mb-2'>Home</span>
    </div>
     
    <div className='border-b-[1px]  border-b-[rgba(255,255,255,0.2)] flex justify-center p-1 text-center text-white hover:underline'>
    <span className='mb-2'>TV Shows</span>
    
    </div>

    <div className='border-b-[1px] border-b-[rgba(255,255,255,0.2)]  flex justify-center  p-1  text-center text-white hover:underline'>
    <span className='mb-2'>Movies</span>
    
    </div>

    <div className='border-b-[1px] border-b-[rgba(255,255,255,0.2)] flex justify-center  p-1  text-center text-white hover:underline'>
    <span className='mb-2'> New & Popular</span>
    
    </div>

    <div className='border-b-[1px] border-b-[rgba(255,255,255,0.2)] flex justify-center  p-1  text-center text-white hover:underline'>
    <span className='mb-2'> My List</span>
        </div>

        <div className='flex justify-center  text-center text-white hover:underline'>
    <span >Browse by Languages</span>
        </div>





    </div>

    </div>
  )
}

export default MobileMenu