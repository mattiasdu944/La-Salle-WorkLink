import mongoose, { Model, Schema, model } from "mongoose";
import { IUserProfile } from "@/interfaces";


const userProfileSchema = new Schema({
    user            : { type : Schema.Types.ObjectId , ref: 'User' },
    description     : { type: String, trim:true, default:'' },
    phone           : { type: String, trim:true, default:'' },
    birthday        : { type: String, trim:true, default:'' },
    years           : { type: Number, trim:true, default:'' },
    career          : { type: String, trim:true, default:'' },
    semester        : { type: String, trim:true, default:'1', enum: { values: ['1','2','3','4','5','6','7','8', '9', '10'] }, message: '{VALUE} invalid', },
    banner          : { type: String, default:'https://images.pexels.com/photos/7135037/pexels-photo-7135037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
    certificates    : [{ 
        type: { 
            name: String,
            dateOfIssue: String,
            company: String,
            hours: Number,
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

const Profile:Model<IUserProfile> = mongoose.models.Profile  || model('Profile', userProfileSchema);

export default Profile;