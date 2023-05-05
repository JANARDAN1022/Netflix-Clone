import useCategory from '@/hooks/useCategory';
import React from 'react';
import { useRouter } from 'next/router';
import MovieList from '@/components/MovieList';
import Billboard from '@/components/Billboard';
import Navbar from '@/components/Navbar';



const Category = () => {
    const router = useRouter();
    const {Category} = router.query;
    const category = Category as string | undefined;
    const {data=[]}=useCategory(category);
    const categories = {
      "Movie":["New && Popular","Action & Adventure"],
      "TvShow":["TV Comedies","New && Popular"],
      "New":["Coming Next Week","Coming This Week"],
    }
    //const title=["TV Comedies","New && Popular","Coming Next Week","Action & Adventure","Coming This Week"]
    
    
      const subMovieCategoryData1 = data.filter((movie:any) => movie.subCategory === categories.Movie[0]);
      const subMovieCategoryData2 = data.filter((movie:any) => movie.subCategory === categories.Movie[1]);
   
      const subTvCategoryData1 = data.filter((movie:any) => movie.subCategory === categories.TvShow[0]);
      const subTvCategoryData2 = data.filter((movie:any) => movie.subCategory === categories.TvShow[1]);

      const subNewCategoryData1 = data.filter((movie:any) => movie.subCategory === categories.New[0]);
      const subNewCategoryData2 = data.filter((movie:any) => movie.subCategory === categories.New[1]);
    
   
    

    return (
        <>
    <Navbar />
    <Billboard />
    <div className='absolute top-[48vmax] flex flex-col '>  
        <MovieList 
        title={category==='Movie'?categories.Movie[0]:category==='TvShow'?categories.TvShow[0]:category==='New'?categories.New[0]:''}
        data={category==='Movie'?subMovieCategoryData1:category==='tvShow'?subTvCategoryData1:category==='New'?subNewCategoryData1:data}

        />

<MovieList 
        title={category==='Movie'?categories.Movie[1]:category==='TvShow'?categories.TvShow[1]:category==='New'?categories.New[1]:''}
        data={category==='Movie'?subMovieCategoryData2:category==='tvShow'?subTvCategoryData2:category==='New'?subNewCategoryData2:data}

        />


        
    </div>
    </>
  )}
  export default Category