import mongoose, { Model, Schema, model } from "mongoose";
import { IUser } from "@/interfaces";

const userSchema = new Schema({
    email   : { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name    : { type: String, required: true },
    lastname: { type: String, required: true },
    token   : { type: String },
    username: { type: String, required: true, unique: true },
    image   : { type: String, default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' },
},{ timestamps: true });

const User:Model<IUser> = mongoose.models.User  || model('User', userSchema);

export default User;