import Input from "@/components/input";
import React,{ useCallback, useState } from "react";
import Link from "next/link";
import {signIn} from 'next-auth/react';


const auth = () => {
    const[email,setemail]=useState("");
    const[password,setPassword]=useState("");
   
    const [isLoading,setisLoading]=useState(false);
    const [error,seterror]=useState(false);
    const[Perror,setPerror]=useState(false);

   const Login = useCallback(async()=>{
    if(email===""){
     seterror(true);
    } 
    if(password===""){
     setPerror(true);
    }
     if(email==="" && password===""){
      setPerror(true);
      seterror(true);
    } 
    else{
    try {
      setisLoading(true);
      await signIn('credentials',{
        email,
        password,
        callbackUrl:'/profiles'
      });
     
    } catch (error) {
      console.log(error);
    }finally{
      setisLoading(false);
    }
  }
   },[email,password]);



  return (
    <div className="relative h-full w-full bg-[url('/images/LoginImage.jpg')]  bg-no-repeat bg-center bg-fixed bg-cover">
    <div className="bg-black w-full h-full bg-opacity-50">
      <nav className="px-12 py-5">
        <img src="/images/Netflixlogo.png" alt="logo" className="h-12"/>
      </nav>

    <div className="flex justify-center">
      
      <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:max-w-md rounded-md w-full">
     
      <h2 className="text-white text-4xl mb-8 font-semibold">Sign In</h2>
     
      <div className="flex flex-col gap-4">
      <Input  label={`${error?"Email is Required*":"Email"}`} onChange={(e:any)=>setemail(e.target.value)} id="email" type="email" value={email} />
     
      <Input label={`${Perror?"Password is Required*":"Password"}`}  onChange={(e:any)=>setPassword(e.target.value)} id="password" type="password" value={password} />
      </div>
     
      <button onClick={Login} className="bg-red-600 text-2xl py-3 text-white w-full rounded-md mt-10 hover:bg-red-700 transition cursor-pointer">
        Sign In
      </button>

      <div className={`text-white absolute right-[44vmax] top-[24.3rem] mr-5 mt-[22.5px] inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"role="status ${isLoading?'visible':'hidden'}`}>
  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span >
</div>

      
      <div className="mt-3 text-zinc-400 flex  " >
        <div className="flex w-52   gap-2 " >
      <input  type="checkbox" name="Checkbox" className="cursor-pointer w-4 h-4 self-center accent-zinc-400 "/>
      <label htmlFor="Checkbox"  className="self-center cursor-pointer hover:text-zinc-200 transition">Remember Me</label>
      </div>
      <div className="w-56 flex justify-end ">
      <span className="cursor-pointer hover:underline transition" >Need help?</span>
       </div>
       </div>
       <p className="text-zinc-500 mt-16  ">
        New to Netflix?
        <Link href='/Register' className="text-white ml-1 hover:underline cursor-pointer">Sign up now.</Link>
       </p>


      </div>
    
    </div>

    </div>
        </div>
  )
}

export default auth;