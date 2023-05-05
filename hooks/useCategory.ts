import useSwr from 'swr';
import fetcher from '@/lib/fetcher';

const useCategory = (category?:string)=>{
 const {data, error, isLoading}= useSwr(category? `/api/${category}`:null,fetcher,{
    revalidateIfStale:false,
    revalidateOnFocus:false,
    revalidateOnReconnect:false,
 });

 return{
    data,error,isLoading
 }
}

export default useCategory