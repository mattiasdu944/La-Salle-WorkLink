import { db } from "."
import bcrypt from "bcrypt";
import User from "@/models/User";
import { IUser } from "@/interfaces";

export const checkUserEmailPassword =async (email:string, password: string) => {
    await db.connect();
    const user = await User.findOne({ email });
    await db.disconnect();

    if( !user ){
        return null;
    }

    if( !bcrypt.compareSync( password, user.password! ) ){
        return null
    }

    const { role, name, _id, username } = user;
    return {
        _id,
        email: email.toLocaleLowerCase(),
        role,
        name,
        username
    };
}

export const oAuthToDbUser =async (oAuthEmail: string, oAuthName: string ) => {
    await db.connect();
    const user = await User.findOne({ email: oAuthEmail });

    if( user ){
        await db.disconnect();

        const { _id, name, email, role } = user;
        return { _id, name, email, role }
    }

    const newUser = new User({ email: oAuthEmail, name: oAuthName, password: '@', role:'student' });
    await newUser.save();
    await db.disconnect();
    
    const { _id, name, email, role } = newUser;

    return { _id, name, email, role };
}


export const getUserData =async ( username: string ): Promise<any | null> => {
    await db.connect();
    const user = await User.findOne<any>({ username }).select('-_id -password -createdAt -updatedAt -__v');

    return JSON.parse( JSON.stringify( user ) );;
}