import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/database';
import { User } from '@/models';


import bcrypt from 'bcrypt';
import { generarJWT } from '@/helpers/generar-jwt';



type Data = 
| { message: string }
| {
    token: string;
    user: {
        _id : string,
        username: string,
        email: string;
        name: string;
        role: string;
        image: string;
    }
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    switch( req.method ) {
        case 'POST':
            return loginUser(req, res)

        default:
            res.status(400).json({
                message: 'Bad request'
            })
    }
}

const loginUser = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

    // console.log( req.body );
    const { token = '' } = req.body as { token: string };    
    
    await db.connect();
    const user = await User.findOne({ token });
    await db.disconnect();

    if ( !user ) {
        return res.status(404).json({
            message:'Invalid token'
        })
    }

    const { role, name, _id, username, image, email } = user;


    return res.status(200).json({
        user: {
            _id,
            username,
            email, 
            role, 
            name,
            image
        },
        token
    })
}