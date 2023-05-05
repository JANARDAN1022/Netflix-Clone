import React,{useState} from 'react';
import {isEmpty} from 'lodash';
import MovieCard from './movieCard';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";






interface MovieListProps{
    data: Record<string, any>[];
    title: string;
}

const MovieList : React.FC<MovieListProps>=({data, title}) => {
    if(isEmpty(data)){
        return null;
    }
    const [showLeftArrow,setshowLeftArrow]=useState(false);
 
  
    
    
    const PrevArrow = (props:any) => (
        <button {...props} className="slick-arrow slick-prev ">
          <AiOutlineArrowLeft className={`text-white cursor-pointer p-1 top-[40px] left-[5px] absolute z-10 w-10 bg-[rgba(0,0,0,0.7)] h-[8.5vmax] ${showLeftArrow?'visible':'hidden'} `} onClick={()=>setshowLeftArrow(!showLeftArrow)} />
        </button>
      );
      
      const NextArrow = (props:any) => (
        <button {...props} className="slick-arrow slick-next">
          <AiOutlineArrowRight className={`text-white cursor-pointer  absolute z-10 p-1 w-10 bg-[rgba(0,0,0,0.7)] h-[8.5vmax] right-[0px] top-[40px] ${showLeftArrow?'hidden':'visible'}`} onClick={()=>setshowLeftArrow(!showLeftArrow)}/>
        </button>
      );

      
    

  

   

  return (
    <div className='px-4 md:px-12  relative transition ' >
     
    <div >
        <p className='text-white text-md md:text-xl  lg:text-3xl font-semibold '>
            {title}
        </p>
        <Slider
        
        className='w-[95vmax]  '
  infinite={false}
  slidesToShow={6}
  slidesToScroll={5}
  
  prevArrow={<PrevArrow />}
  nextArrow={<NextArrow />}
>
            {data.map((movie)=>(
                 <MovieCard key={movie.id} data={movie} />
            ))}
            </Slider>
        
       
    </div>

    </div>
  )
}

export default MovieList



/* 

"title":"Big Buck Bunny2",
"description":"Three rodents amuse themselves by harassing creatures of the forest. However, when they mess with a bunny, he decides to teach them a lesson.",
"videoUrl":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
"thumbnailUrl":"https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png",
"genre":"Comedy",
"duration":"10 minutes",
"category":"Movie"
"subCategory":"New && Popular"

*/

/*
"title":"Sintel",
"description":"A lonely young woman, Sintel, helps and befriends a dragon, whom she calls Scales. But when he is kidnapped by an adult dragon, Sintel decides to embark on a dangerous quest to find her lost friend Scales.",
"videoUrl":"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
"thumbnailUrl":"http://uhdtv.io/wp-content/uploads/2020/10/Sintel-3.jpg",
"genre":"Adventure",
"duration":"15 minutes",
"category":"Movie",
"subCategory":"New && Popular"

  

*/