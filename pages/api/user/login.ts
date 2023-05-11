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
    const { email = '', password = '' } = req.body as { email: string, password: string };

    
    if ( email.trim().length == 0 || !email.includes('@') || !email.includes('.') ) {
        return res.status(400).json({
            message: 'El correo no tiene formato de correo'
        });
    }
    
    
    await db.connect();
    const user = await User.findOne({ email });
    await db.disconnect();



    if ( !user ) {
        return res.status(400).json({
            message:'Credenciales incorrectas'
        })
    }

    // Verificar la contraseña
    const validPassword = bcrypt.compareSync( password, user.password! );
    if ( !validPassword ) {
        return res.status(500).json({
            message: 'Credenciales incorrectas'
        })
    }

    const token = await generarJWT(user._id)
    
    await db.connect();
    user.token = token;
    await user.save();
    await db.disconnect();

    const { role, name, _id, username, image } = user;


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