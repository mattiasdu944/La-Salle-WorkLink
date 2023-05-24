import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/database';
import { User, Profile, Company } from '@/models';

import { ICompany, IUser, IUserProfile } from '@/interfaces';
import { IProfile } from '../../../interfaces/profile';



type Data = 
| { message: string }
| IProfile
| ICompany 

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    switch( req.method ) {
        case 'GET':
            return getUserProfile(req, res)

        default:
            res.status(400).json({
                message: 'Bad request'
            })
    }
}

const getUserProfile = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { username = '' } = req.query as { username: string };

    await db.connect();
    const user = await User.findOne<IUser>({ username });
    await db.disconnect();

    if( user ){
        await db.connect();
        const profile = await Profile.findOne({ user:user!._id }).select('-_id -user -createdAt -updatedAt -__v').lean();
        await db.disconnect();
    
        const { email, name, lastname, image } = user!;
    
    
        return res.status(200).json({ email, name, lastname, image, ...profile } as IProfile )
    
    
    }
    

    
    await db.connect();
    const company = await Company.findOne<ICompany>({ username }).select('-_id -token -createdAt -updatedAt -__v');
    await db.disconnect();

    if( company ){
        return res.status(200).json( company );
    }


    
    return res.status(404).json({ message:'User not found' });
}