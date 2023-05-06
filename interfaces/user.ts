export interface IUser {
    _id?        : string;
    name        : string;
    lastname    : string;
    username    : string;
    email       : string;
    password?   : string;
    role        : string;
    image       : string;
    createdAt?   : string;
    updatedAt?   : string;
}