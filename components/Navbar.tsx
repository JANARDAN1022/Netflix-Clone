import React,{useState,useEffect} from 'react';
import NavbarItem from './NavbarItem';
import {BsChevronDown,BsSearch,BsBell} from 'react-icons/bs';
import MobileMenu from './MobileMenu';
import {AiOutlineCaretDown} from 'react-icons/ai';
import AccountMenu from './AccountMenu';
import Link from 'next/link';
import { useRouter } from 'next/router';




const Navbar = () => {
    const [isHoverd,setisHoverd]=useState(false);
    const[Hoverd,setHoverd]=useState(false);
    const [ShowBackground,setshowBackground]=useState(false);
    const TOP_OFFSET = 66;

    useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY >= TOP_OFFSET){
       setshowBackground(true);
      }else{
        setshowBackground(false);
      }
    }

    window.addEventListener('scroll',handleScroll);

    return()=>{
      window.removeEventListener('scroll',handleScroll)
    }
    },[]);
    const router = useRouter();
    const {Category} = router.query;
    const isActive = router.pathname;
    
    
  

  return (
    <nav className='w-full fixed z-40'>
    
    <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${ShowBackground?'bg-black bg-opacity-90':''}`}>
    
    
     <img className='h-6 lg:h-7 cursor-pointer' src='/images/Netflixlogo.png' alt='Logo'   />
    
    <div className='flex-row ml-8 gap-7 hidden lg:flex'>

     <Link href='/' className={`${isActive==='/'?'text-white':'text-[rgba(255,255,255,0.6)]'} hover:text-white`}><NavbarItem label='Home'/></Link>
    <Link href='/[Category]'as='/TvShow' className={`${Category==='TvShow'?'text-white':'text-[rgba(255,255,255,0.7)]'} hover:text-white`}> <NavbarItem label='TV Shows'/></Link>
    <Link href='/[Category]'as='/Movie'  className={`${Category==='Movie'?'text-white':'text-[rgba(255,255,255,0.7)]'} hover:text-white`}><NavbarItem label='Movies'/></Link> 
    <Link href='/[Category]'as='/New'   className={`${Category==='New'?'text-white':'text-[rgba(255,255,255,0.7)]'} hover:text-white`}> <NavbarItem label='New & Popular'/></Link>
    <Link href='/MyList' className={`${Category==='MyList'?'text-white':'text-[rgba(255,255,255,0.7)]'} hover:text-white`}><NavbarItem label='My List' /></Link>

    </div>
    
    <div onMouseEnter={()=>setisHoverd(true)} onMouseLeave={()=>setisHoverd(false)} className='lg:hidden flex  flex-row items-center gap-2 ml-8 cursor-pointer relative h-20 w-24 '>
       <p className='text-white text-[18px] text-sm'>Browse</p>
<BsChevronDown className={`text-white mt-2 transition ${isHoverd?'rotate-180 transition':''}`}/>
       <MobileMenu visible={isHoverd?true:false}/>
    </div>

     <div className='flex flex-row ml-auto gap-7 items-center'>

     <div className='text-[rgba(255,255,255,0.7)] hover:text-[rgba(255,255,255,0.9)] cursor-pointer transition'>
     <BsSearch className='text-[20px] h-[30px]'/>
       </div>

       <div className='text-[rgba(255,255,255,0.7)] hover:text-[rgba(255,255,255,0.9)] cursor-pointer transition'>
     <BsBell className='text-[20px] h-[30px]'/>
       </div>
     
     <div className='h-[60px] w-[60px] justify-center  flex flex-row  items-center gap-2 cursor-pointer   relative' onMouseEnter={()=>setHoverd(true)} onMouseLeave={()=>setHoverd(false)}>
      
      <div className='w-8 h-8 ;g:w-10 lg:h-10mrounded-md overflow-hidden' >
       <img src='/images/default-blue.png' alt='ProfilePic' />
      </div>
 <AiOutlineCaretDown className={`text-white mt-1 ${Hoverd?'rotate-180 transition':''}`}/>
     <AccountMenu visible={Hoverd?true:false}/>
     </div>

     </div>


    </div>
    </nav>
  )
}

export default Navbar