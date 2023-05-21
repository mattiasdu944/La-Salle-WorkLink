import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/database';
import { User, Profile } from '@/models';

import { IUser, IUserProfile } from '@/interfaces';



type Data = 
| { message: string }
| {
    email       : string, 
    name        : string, 
    lastname    : string, 
    image       : string, 
    role        : string,
    username    : string,
    profile     : IUserProfile
}

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
    const profile = await Profile.findOne<IUserProfile>({ user:user!._id }).select('-_id -user -createdAt -updatedAt -__v').lean();
    await db.disconnect();

    const { email, name, lastname, image, role } = user!;


    return res.status(200).json(
        {
            email, 
            name, 
            lastname, 
            image, 
            role,
            username,
            profile: profile!
        }
    )

}