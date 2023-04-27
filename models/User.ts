import mongoose, { Model, Schema, model } from "mongoose";
import { IUser } from "@/interfaces";

const userSchema = new Schema({
    email   : { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name    : { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    role    : { 
        type: String, 
        enum: {
            values: ['company','student','admin'],
            message: '{VALUE} invalid',
            default: 'student',
            required: true
        }
    }
},{ timestamps: true });

const User:Model<IUser> = mongoose.models.User  || model('User', userSchema);

export default User;