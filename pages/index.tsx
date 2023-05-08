import { NextPageContext } from "next";
import { getSession} from "next-auth/react";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";
import Footer from "@/components/Footer";



export async function getServerSideProps(context: NextPageContext){
  const session = await getSession(context);
  if(!session){
    return{
      redirect:{
        destination:'/profiles',
        permanent: false,
      }
    }
  }
  return {
    props: {}
  }
}

export default function Home() {


  const {data:movies=[]}=useMovieList();
  const {data:favorites=[]}=useFavorites();
  

  const filterdMovieData = movies?.filter((M:any)=>M.category==='Movie');
  const filterdTvshowData = movies?.filter((M:any)=>M.category==='TvShow');
  const filterdNewData = movies?.filter((M:any)=>M.category==='New');
  
  
  
  
  return (
   <>
  <Navbar />
  <Billboard />
  <div className="absolute top-[48vmax] flex flex-col">
  <MovieList title="Movies" data={filterdMovieData} />
  <MovieList title="TvShows" data={filterdTvshowData}/>
  <MovieList title="New && Popular" data={filterdNewData}/>
  <MovieList title="My List" data={favorites}/>
  </div>
  <div className="absolute bottom-[-103vmax] mt-20  w-full   ">
  <Footer />
  </div>
   </>
  )
}
