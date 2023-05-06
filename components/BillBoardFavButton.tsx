import axios from "axios";
import React,{useCallback,useMemo} from 'react'
import useCurrentUser from "@/hooks/useCurrentuser";
import useFavorites from "@/hooks/useFavorites";
import {AiOutlinePlus,AiOutlineCheck} from 'react-icons/ai';

interface BillboardFavoriteButtonProps{
   movieId: string   
}


const BillboardFavoriteButton : React.FC<BillboardFavoriteButtonProps>=({
    movieId,
}) => {
    const {mutate: mutateFavorites} = useFavorites();
    const {data: currentUser, mutate} = useCurrentUser();



    const isFavorite = useMemo(()=>{
         const list = currentUser?.favoriteIds || [];
     
         return list.includes(movieId);
    },[currentUser,movieId]);

   

  
    const toggleFavorites = useCallback(async ()=>{
     let response;
     if(isFavorite){
      // '/api/favorite',{data:{movieId}}
        response = await axios.delete(`/api/favorite?movieId=${movieId}`);
     }else{
        response = await axios.post('/api/favorite',{movieId});
     }
     const updatedFavoriteIds = response?.data?.favoriteIds;

     mutate({
        ...currentUser,
        favoriteIds: updatedFavoriteIds
     });

     mutateFavorites();
    },[movieId,isFavorite,currentUser,mutate,mutateFavorites])

   const Icon = isFavorite? AiOutlineCheck:AiOutlinePlus;

  return (
    <div className="
    cursor-pointer group/item  w-6 h-6 lg:w-14 lg:h-14 border-white
    border-2 rounded-full flex justify-center items-center transition 
    hover:border-neutral-400 text-white
    " onClick={toggleFavorites}>
    <Icon size={35}/>
    </div>
  )
}

export default BillboardFavoriteButton