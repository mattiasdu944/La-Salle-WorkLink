import { Company } from "@/models"
import { db } from "."
import { ICompany } from "@/interfaces";

export const getAllCompanies = async (): Promise<ICompany[]>  => {
    await db.connect()
    const companies = await Company.find().lean();
    await db.disconnect()

    return  JSON.parse( JSON.stringify(companies) )

}