import axios from "axios";
import React,{useCallback,useMemo} from 'react'
import useCurrentUser from "@/hooks/useCurrentuser";
import useFavorites from "@/hooks/useFavorites";
import {AiOutlinePlus,AiOutlineCheck} from 'react-icons/ai';

interface favoriteButtonProps{
   movieId: string   
}


const FavoriteButton : React.FC<favoriteButtonProps>=({
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
    cursor-pointer group/item  w-6 h-6 lg:w-8 lg:h-8 border-white
    border-2 rounded-full flex justify-center items-center transition 
    hover:border-neutral-400 text-white
    " onClick={toggleFavorites}>
    <Icon size={20}/>
    </div>
  )
}

export default FavoriteButton