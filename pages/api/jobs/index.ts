import { db } from "@/database";
import { IVacant } from "@/interfaces";
import { Vacant } from "@/models";
import { NextApiRequest, NextApiResponse } from "next";

type Data = 
| { vacants: any }
| { message: string }

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    switch( req.method ) {
        case 'GET':
            return getAllVacants(req, res)

        default:
            res.status(400).json({
                message: 'Bad request'
            })
    }
}

const  getAllVacants = async (req: NextApiRequest, res: NextApiResponse) => {
    await db.connect();
    const vacants: IVacant[] = await Vacant.find({}).select('-__v -updatedAt ').populate("company",'-__v -updatedAt -createdAt -password -_id');
    await db.disconnect();    


    // return JSON.parse( JSON.stringify( vacants ) );
    return res.status(200).json( vacants )

}
