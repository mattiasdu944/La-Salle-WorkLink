import { db, initialCompanies, seedDatabase } from '@/database';
import { initialVacancies } from '@/database/vacancies';
import { Company, Vacant, User } from '@/models';
import { NextApiRequest, NextApiResponse } from 'next';

type Data = { message: string }


export default async function handler( req: NextApiRequest, res: NextApiResponse<Data> ){


    if( process.env.NODE_ENV === 'production' ){
        return res.status(401).json({ message: 'No tiene acceso a este API' })
    }

    await db.connect();
    // await User.deleteMany();
    // await User.insertMany( seedDatabase.initialData.users );
    
    await Company.deleteMany();
    await Company.insertMany( initialCompanies.companies );

    // await Vacant.deleteMany();
    // await Vacant.insertMany( initialVacancies.vacancies );
    await db.disconnect();


    return res.status(200).json({ message: 'Proceso finalizado' })



}