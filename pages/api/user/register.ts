import type { NextApiRequest, NextApiResponse } from 'next';

import { db } from '@/database';
import { User } from '@/models';
import bcrypt from 'bcrypt';



type Data = 
| { message: string }
| {
    // token: string;
    user: {
        email: string;
        name: string;
        role: string;
    }
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    switch( req.method ) {
        case 'POST':
            return registerUser(req, res)

        default:
            res.status(400).json({
                message: 'Bad request'
            })
    }
}

const registerUser = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    
    const { email = '', password = '', name = '', lastname= '', username= '' } = req.body as { email: string, password: string, name: string, lastname: string, username: string };

    console.log(req.body);

    if ( password.length < 6 ) {
        return res.status(400).json({
            message: 'La contraseña debe de ser de 6 caracteres'
        });
    }

    if ( name.length < 2 ) {
        return res.status(400).json({
            message: 'El nombre debe de ser de 2 caracteres'
        });
    }
    
    if ( email.trim().length == 0 || !email.includes('@') || !email.includes('.') ) {
        return res.status(400).json({
            message: 'El correo no tiene formato de correo'
        });
    }
    
    
    await db.connect();
    const user = await User.findOne({ email });

    if ( user ) {
        return res.status(400).json({
            message:'No puede usar ese correo'
        })
    }

    const checkUsername = await User.findOne({ username });

    if ( checkUsername ) {
        return res.status(400).json({
            message:'No puede usar ese nombre de usuario'
        })
    }

    const newUser = new User({
        name,
        password: bcrypt.hashSync( password, 10 ),
        email: email.toLocaleLowerCase(),
        lastname: lastname.toLocaleLowerCase(),
        username: username.toLocaleLowerCase(),
        role: 'student',
    });

    try {
        await newUser.save({ validateBeforeSave: true });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Revisar logs del servidor'
        })
    }
   
    const { role } = newUser;


    return res.status(200).json({
        user: {
            email, 
            role, 
            name,
        }
    })


}