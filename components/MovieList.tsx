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
  const [showLeftArrow,setshowLeftArrow]=useState(false);
   
  if(isEmpty(data)){
        return null;
    }
   
 
  const handleShowLeft = ()=>{
    setshowLeftArrow(!showLeftArrow);
  }
    
    
    const PrevArrow = (props:any) => (
        <button {...props} className="slick-arrow slick-prev ">
          <AiOutlineArrowLeft className={`text-white cursor-pointer p-1 top-[42px] left-[0px] absolute z-[1] w-10 bg-[rgba(0,0,0,0.7)] h-[9vmax] ${showLeftArrow?'visible':'hidden'} `} onClick={handleShowLeft} />
        </button>
      );
      
      const NextArrow = (props:any) => (
        <button {...props} className="slick-arrow slick-next">
          <AiOutlineArrowRight className={`text-white cursor-pointer  absolute z-[1] p-1 w-10 bg-[rgba(0,0,0,0.7)] h-[9vmax] right-[0px] top-[42px] ${showLeftArrow?'hidden':'visible'}`} onClick={handleShowLeft}/>
        </button>
      );

      
    

  

   

  return (
    <div className='h-[20.3vmax] px-4 md:px-12  relative transition ' >
     
    <div className=''>
        <p className='text-white  text-md md:text-xl mb-2  lg:text-3xl font-semibold '>
            {title}
        </p>
        <Slider
        
        className='w-[95vmax] '
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


