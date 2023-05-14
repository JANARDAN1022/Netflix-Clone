import Navbar from '@/components/Navbar';
import FavoriteCard from '@/components/FavoriteCard';
import useFavorites from '@/hooks/useFavorites';
import React from 'react';
import { NextPageContext } from "next";
import { getSession} from "next-auth/react";



export async function getServerSideProps(context: NextPageContext){
  const session = await getSession(context);

  if(!session){
      return {
          redirect:{
              destination:'/Login',
              permanent: false,
          }
      }
  }
  return {
      props:{}
  }
}


const MyList = () => {
    const {data:Favorites=[]}=useFavorites();
    
  return (
    <>
    <Navbar />
    <div className='absolute top-32 left-16 flex flex-col'>
        <div>
        <h2 className='text-white text-3xl  font-serif'>My List</h2>
       </div>
       <div className='flex flex-wrap gap-1'>
        {Favorites && Favorites.map((Favorites:any)=>(
        <FavoriteCard data={Favorites}/>
       ))
}
       </div>
    </div>
    </>
  )
}

export default MyList