import { NextApiRequest,NextApiResponse} from "next";
import { getServerSession  } from "next-auth";
import prismadb from '@/lib/prismadb';
import { authOptions  } from "@/pages/api/auth/[...nextauth]";

const serverauth = async (req:NextApiRequest,res:NextApiResponse) => {
    const session = await getServerSession (req,res,authOptions);
    if (!session) {
        return {
          redirect: {
            destination: '/Login',
            permanent: false,
          },
        }
      }

    if(!session?.user?.email){
      throw new Error("Sign In Required");
    }

    const currentUser = await prismadb.user.findUnique({
        where: {
            email: session.user.email,
        }
    });

    if (!currentUser) {
        return {
          redirect: {
            destination: '/Login',
            permanent: false,
          },
        }
      }

    return {currentUser};
};

export default serverauth;