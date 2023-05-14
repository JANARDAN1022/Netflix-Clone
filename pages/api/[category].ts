import { NextApiRequest,NextApiResponse } from "next";
import prismadb from '@/lib/prismadb';
import serverauth from "@/lib/ServerAuth";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
if(req.method !== 'GET'){
    return res.status(405).end();
}

try{
    await serverauth(req,res);   
    

    


const {category}=req.query;

if(typeof category !== 'string'){
    throw new Error('Invalid Id');
 }

 if(!category){
    throw new Error('Invalid Id');
 }

 const movies = await prismadb.movie.findMany({
    where:{
        category: category,
    }
 })
   return res.status(200).json(movies);

}catch(error){
    console.log(error);
    return res.status(400).end();
 }
}