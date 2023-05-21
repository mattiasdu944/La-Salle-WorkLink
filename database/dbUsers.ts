import { db } from "."
import bcrypt from "bcrypt";
import User from "@/models/User";
import { IUser } from "@/interfaces";
import { Company, Profile } from "@/models";

export const checkUserEmailPasswordUser =async (email:string, password: string) => {
    await db.connect();
    const user = await User.findOne({ email });
    await db.disconnect();

    if( !user ){
        return null;
    }

    if( !bcrypt.compareSync( password, user.password! ) ){
        return null
    }

    const { name, _id, username, image } = user;
    return {
        _id,
        email: email.toLocaleLowerCase(),
        role:'student',
        name,
        image,
        username
    };
}

export const checkUserEmailPasswordCompany =async (email:string, password: string) => {
    await db.connect();
    const company = await Company.findOne({ email });
    await db.disconnect();

    if( !company ){
        return null;
    }

    if( !bcrypt.compareSync( password, company.password! ) ){
        return null
    }

    const {  name, _id, username, image } = company;
    return {
        _id,
        email: email.toLocaleLowerCase(),
        name,
        role:'company',
        image,
        username
    };
}

export const oAuthToDbUser =async (oAuthEmail: string, oAuthName: string ) => {
    await db.connect();
    const user = await User.findOne({ email: oAuthEmail });

    if( user ){
        await db.disconnect();

        const { _id, name, email } = user;
        return { _id, name, email }
    }

    const newUser = new User({ email: oAuthEmail, name: oAuthName, password: '@', role:'student' });
    await newUser.save();
    await db.disconnect();
    
    const { _id, name, email } = newUser;

    return { _id, name, email };
}


export const getUserProfile =async ( username: string ): Promise<any | null> => {
    await db.connect();
    const user = await User.findOne<IUser>({ username });
    
    if( !user ){
        await db.disconnect();
        return null;
    }

    const profile = await Profile.findOne({ user:user!._id }).select('-_id -user -createdAt -updatedAt -__v').lean();
    await db.disconnect();

    const { email, name, lastname, image } = user!;

    return {
        email, 
        name, 
        lastname, 
        image, 
        username,
        ...profile 
    }
}

export const getCompanyProfile =async ( username: string ): Promise<any | null> => {
    await db.connect();
    // const company = await Company.findOne<IUser>({ username });
    const company = await Company.findOne({ username }).select('-_id');
    console.log({company});
    
    if( !company ){
        await db.disconnect();
        return null;
    }
    
    return JSON.parse( JSON.stringify( company ) );
}