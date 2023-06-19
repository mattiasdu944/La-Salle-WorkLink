import type { NextApiRequest, NextApiResponse } from 'next'

import { db } from '../../../database'
import { IVacant } from '@/interfaces';
import { Vacant } from '@/models';

type Data = { message: string } | IVacant

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
    
    switch( req.method ) {
        case 'GET':
            return getVacantById( req, res );

        default:
            return res.status(400).json({
                message: 'Invalid API method'
            })
    }  

}

const getVacantById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    
    let { id = '' } = req.query
    
    if( id.length === 0 ){
        res.status(400).json({ 
            message: 'No products found'
        });

    }

    await db.connect();
    
    id = id.toString().toLowerCase().trim();
    const vacant = await Vacant.findById<IVacant>( id )
        .select('-__v -updatedAt ')
        .populate("company",'-__v -updatedAt -createdAt -password -_id');

    await db.disconnect(); 

    if( !vacant ){
        res.status(404).json({ message: 'Vacant not found' });
    } 

    res.status(200).json( vacant! );
}