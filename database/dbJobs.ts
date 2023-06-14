import { Vacant } from "@/models";
import { db } from ".";
import { IVacant } from "@/interfaces";

export const getLastJobs = async (): Promise<any | null> => {
    await db.connect();
    const vacants = await Vacant.find({}).select('-__v -updatedAt ').populate("company",'-__v -updatedAt -createdAt -password -_id');
    await db.disconnect();    


    console.log(vacants[0].company);


    return JSON.parse( JSON.stringify( vacants ) );
}


export const getJobById = async (  id: string ): Promise<any | null> => {
    await db.connect();
    const vacant = await Vacant.findOne<IVacant>({ _id: id }).select('-__v -updatedAt ').populate("company",'-__v -updatedAt -createdAt -password -_id');
    await db.disconnect();   
     
    if( !vacant ){
        return null;
    } 

    return JSON.parse( JSON.stringify( vacant ) );
}
