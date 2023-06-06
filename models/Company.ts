import { ICompany } from "@/interfaces";
import mongoose, { Model, Schema, model } from "mongoose";

const companySchema = new Schema({
    name        : { type: String, trim: true, required: true },
    email       : { type: String, trim: true, required: true },
    description : { type: String, trim: true, default:'' },
    location    : { type: String, trim: true, default:'' },
    phone       : { type: String, trim: true, default:'' },
    
    website     : { type: String, trim: true, default:'' }, 
    password    : { type: String, required: true },
    token       : { type: String },

    username    : { type: String, required: true, unique: true },    
    // vacancies   : [{ type : mongoose.Schema.Types.ObjectId , ref: 'Vacant' }],
    image       : { type: String, trim: true, default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' },
    banner      : { type: String, trim: true, default:'https://images.pexels.com/photos/7135037/pexels-photo-7135037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
},{ timestamps: true });

const Company:Model<ICompany> = mongoose.models.Company  || model('Company', companySchema);

export default Company;