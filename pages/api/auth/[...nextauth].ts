import NextAuth,{AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prismadb from "@/lib/prismadb";
import {compare} from 'bcrypt';


export const authOptions: AuthOptions={
    providers: [
        Credentials({
            id: 'credentials',
            name: 'credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type:'text',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                },
               
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials?.password){
                    throw new Error('Email and password required');
                }
                const User = await prismadb.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if(!User || !User.hashedPassword){
                    throw new Error('Email does Not Exist');
                }

                const isCorrectPassword = await compare(
                    credentials.password,
                    User.hashedPassword
                );
                if(!isCorrectPassword){
                    throw new Error('Incorrect Email or Password');
                }
               

                return User;
            }
        })
    ],
    pages: {
        signIn: '/Login',
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt',
    },
    jwt:{
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET || process.env.NEXTAUTH_P_SECRET
};

export default NextAuth(authOptions);