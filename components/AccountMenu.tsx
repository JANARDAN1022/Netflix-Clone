import React from 'react';
import { signOut } from 'next-auth/react';
import useCurrentUser from '@/hooks/useCurrentuser';
import Image from 'next/image';

interface AccountMenuProps {
    visible: boolean;
}

const AccountMenu : React.FC<AccountMenuProps>=({
    visible
})=> {
  const {data:user}=useCurrentUser();
  
  if(!visible){
        return null;
    }
  
  return (
    <div className='bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray border-gray-800 flex'>

    <div className='flex flex-col gap-3'>

     <div className='p-3 group/item flex flex-row  gap-5 items-center w-full border-b-[1px] border-[rgba(255,255,255,0.2)]'>
     <Image className='w-8 rounded-md' src='/images/default-blue.png' alt='ProfilePic' width={40}  height={50}/>
     <p className='text-white hover:underline'>{user?.email}</p>
     </div>
       
     <div className='p-1 group/item flex flex-row gap-3 justify-center items-center w-full'>
     <p onClick={()=>signOut()} className='text-white hover:underline'>Sign out of Netflix</p>
     </div>


    </div>

    </div>
  )
}

export default AccountMenu;