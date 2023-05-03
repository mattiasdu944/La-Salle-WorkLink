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

    if ( password.trim().length < 6 ) {
        return res.status(400).json({
            message: 'La contraseña debe de ser de 6 caracteres'
        });
    }

    if ( name.trim().length < 2 ) {
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
        name: name.trim(),
        password: bcrypt.hashSync( password.trim(), 10 ),
        email: email.toLocaleLowerCase().trim(),
        lastname: lastname.toLocaleLowerCase().trim(),
        username: username.toLocaleLowerCase().trim(),
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