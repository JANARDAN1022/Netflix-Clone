import React, { useCallback, useState, } from "react";
import Link from "next/link";
import axios from "axios";
import {IoIosArrowBack} from 'react-icons/io';
//import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
//import Input from "@/components/input";




const Register = () => {
   //const Navigate = useRouter();
    const [email,setemail]=useState("");
    const [Password,setPassword]=useState('');
    const [ShowInput,setShowInput]=useState(false);
    const[ShowButton,setShowButton]=useState(false);
    const [BorderColor,setBorderColor]=useState(Boolean);
    const [isLoading,setisLoading]=useState(false);
    const [Error,setError]=useState(false);

  

    const register = useCallback(async ()=>{  
      if(Password===""){
      setError(true);
      }else{
    try {
          setisLoading(true);
          await axios.post('/api/Register',{
            email,
            Password
          });
          setPassword('');
          await signIn('credentials',{
            email:email,
            password:Password,
            callbackUrl:'/profiles'
          });
         
        } catch (error) {
          console.log(error);
        }finally{
          setisLoading(false);
        }
      }
},[email,Password]);



const HandleGetStartedClick = ()=>{
  if(email===""){
     setError(true);
  }else{
    setError(false);
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (isValidEmail) {
        setShowInput(true);
        setShowButton(true);
      }else{
        setBorderColor(false);
      }
    }
}




    const HandleOnEmailChange = (e:any)=>{
      setemail(e.target.value);
      
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (isValidEmail) {
        setBorderColor(true);
      }else{
        setBorderColor(false);
      }
    }

  return (
    <div className="relative h-full w-full bg-[url('/images/LoginImage.jpg')]  bg-no-repeat bg-center bg-fixed bg-cover">
          <div className="bg-black w-full h-full bg-opacity-50">
            <nav className="p-5">
                <img src="/images/Netflixlogo.png " alt="BGImg" className="h-11 left-44 absolute"/>
                <button className="absolute text-white bg-red-600 p-2 right-56 w-28 rounded-md hover:bg-red-700 transition font-semibold"><Link href='/Login' >Sign In</Link></button>
            </nav>

    <div className="absolute m-auto top-72 left-72 flex flex-col " >
<h1 className="text-white font-bold  text-5xl">Unlimited movies, TV shows and more.</h1>
<span className="text-gray-50 text-2xl mt-5 self-center">Watch anywhere. Cancel anytime.</span>
<span className="text-gray-50 text-2xl mt-5 self-center">Ready to watch? Enter your email to create or restart your membership.</span>
       
<div className=" flex mt-8 ml-28 gap-2 2-96  h-16">
      <div className="opacity-80">
        <input placeholder={`${Error?'Field Cannot Be  Empty*':'Email address'}`} className={`${Error?'placeholder-red-700 font-semibold  text-lg ':''}    p-5 text-white bg-zinc-800  w-[32rem] h-[4.5rem] rounded-md ${ShowInput?'hidden':'visible'} ${BorderColor?'outline-green-400 focus:outline':'outline-rose-600 '}`} name="email" onChange={HandleOnEmailChange} id="email" type="email" value={email}  />
        <IoIosArrowBack onClick={()=>{setShowInput(false); setShowButton(false); }} className={`bg-transparent absolute left-10 top-44  h-[6vmax]   cursor-pointer text-zinc-300  w-20 hover:text-zinc-50 transition ${ShowInput?'visible':'hidden'}`} />
        <input placeholder={`${!Error?'Create New Password':'Field Cannot Be Empty *'}`} className={`p-5 relative  text-white bg-zinc-800  w-[31.5rem] h-[4.5rem]  ${Error?'placeholder-red-700 font-semibold text-lg ':''} w-full rounded-md ${ShowInput?'visible':'hidden'}`} name="PASSWORD" onChange={(e:any)=>setPassword(e.target.value)} id="password" type="password" value={Password} />
        
<div className={` absolute right-[16.5vmax] mr-5 mt-4 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current text-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"role="status ${isLoading?'visible':'hidden'}`}>
  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span >
</div>




        </div>
       <div className="bg-red-600 rounded-md  cursor-pointer transition font-semibold hover:bg-red-700 text-white  p-1 w-56 h-[4.5rem]  ">
       <button onClick={HandleGetStartedClick} className={`ml-8 p-2 text-[27px] ${ShowButton?'hidden':'visible'}`}>Get Started</button> 
       <button onClick={register} className={` p-2 ml-12 text-[27px] ${ShowButton?'visible':'hidden'} `}>Sign Up</button>
       </div>
        </div>


        </div>
        
    
        
       </div>
    </div>
  )
}

export default Register;