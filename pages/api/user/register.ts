import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/database';
import { User, Profile, Company } from '@/models';


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
            return registerUser(req, res)

        default:
            res.status(400).json({
                message: 'Bad request'
            })
    }
}

const registerUser = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { email = '', password = '', name = '', lastname= '', username= '', role= '' } = req.body as { email: string, password: string, name: string, lastname: string, username: string, role: string };

    console.log(req.body);

    // Validaciones
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
    
    
    switch (role) {
        case 'student':           
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
                lastname: lastname.trim(),
                password: bcrypt.hashSync( password.trim(), 10 ),
                email: email.toLocaleLowerCase().trim(),
                username: username.toLocaleLowerCase().trim(),
            });
        
            
            newUser.token = await generarJWT( newUser._id )
            const newProfile = new Profile({
                user: newUser._id
            })
        
            try {
                await newUser.save();
                await newProfile.save();
        
            } catch (error) {
                return res.status(500).json({
                    message: 'Revisar logs del servidor'
                })
            }
            await db.disconnect();

            const { image, token , _id} = newUser;

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
            });

        case 'company':
            await db.connect();
            const company = await Company.findOne({ email });
            
            if ( company ) {
                return res.status(400).json({
                    message:'No puede usar ese correo'
                })
            }
        
            const companyUsername = await Company.findOne({ username });
        
            if ( companyUsername ) {
                return res.status(400).json({
                    message:'No puede usar ese nombre de usuario'
                })
            }
        
            
            
            const newCompany = new Company({
                name: name.trim(),
                password: bcrypt.hashSync( password.trim(), 10 ),
                email: email.toLocaleLowerCase().trim(),
                username: username.toLocaleLowerCase().trim(),
            });
            
            console.log(newCompany);
            
            newCompany.token = await generarJWT( newCompany._id )
            
            try {
                await newCompany.save();
            } catch (error) {
                return res.status(500).json({
                    message: 'Revisar logs del servidor'
                })
            }

            await db.disconnect();

            return res.status(200).json({
                user: {
                    _id: newCompany._id,
                    username,
                    email, 
                    role: 'company', 
                    name,
                    image: newCompany.image
                },
                token: newCompany.token
            });       
    
        default:
            break;
    }

}