import type { NextApiRequest, NextApiResponse } from 'next'

import { Vacant } from '@/models';
import { db } from '@/database';
import { IVacant } from '@/interfaces';

type Data = { message: string } | IVacant[]

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
    
    switch( req.method ) {
        case 'GET':
            return searchProducts( req, res );

        default:
            return res.status(400).json({
                message: 'Invalid API method'
            })
    }  

}

const searchProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    
    let { query = '' } = req.query
    console.log(query);

    if( query.length === 0 ){
        res.status(400).json({ 
            message: 'No vacants found'
        });

    }

    await db.connect();
    
    query = query.toString().toLowerCase().trim();
    const vacants = await Vacant.find({ title: { $regex: query, $options:'i' }})
    .select('-__v -updatedAt ')
    .populate("company",'-__v -updatedAt -createdAt -password -_id');

    await db.disconnect(); 

    res.status(200).json( vacants );
}