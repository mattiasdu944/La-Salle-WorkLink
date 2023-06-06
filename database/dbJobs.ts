import { Vacant } from "@/models";
import { db } from ".";

export const getLastJobs = async (): Promise<any | null> => {
    await db.connect();
    const vacants = await Vacant.find({}).select('-__v -updatedAt ').populate("company",'-__v -updatedAt -createdAt -password -_id');
    await db.disconnect();    


    console.log(vacants[0].company);


    return JSON.parse( JSON.stringify( vacants ) );
}
