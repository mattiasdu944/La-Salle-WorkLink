import mongoose, { Model, Schema, model } from "mongoose";
import { IUserProfile } from "@/interfaces";

const userProfileSchema = new Schema({
    description     : { type: String, trim:true, },
    phone           : { type: String, trim:true, },
    birthday        : { type: String, trim:true, required: true },
    years           : { type: String, trim:true, required: true },
    career          : { type: String, trim:true, required: true },
    semester        : { type: String, trim:true, required: true, enum: { values: ['1','2','3','4','5','6','7','8', '9', '10'] }, message: '{VALUE} invalid', },
    certificates    : [{ 
        type: { 
            name: String,
            dateOfIssue: String,
            company: String,
        } 
    }],
    experience: [{ 
        type: {
            position: String,
            company: String,
            startDate: String,
            endingDate: String,
        }
    }],
    socialNetworks:[{
        type: {
            name: String,
            url: String,
        }
    }],
},{ timestamps: true });

const UserProfile:Model<IUserProfile> = mongoose.models.UserProfile  || model('UserProfile', userProfileSchema);

export default UserProfile;