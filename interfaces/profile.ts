import { IUserProfileCertificates, IUserProfileExperience, IUserProfileSocialNetworks } from "./userProfile";

export interface IProfile{
    email       : string,
    name        : string,
    lastname    : string,
    image       : string,
    banner      : string;
    role        : string,
    username    : string,
    description : string,
    phone       : string,
    birthday    : string,
    years       : string | null,
    career      : string,
    semester    : string,
    certificates    : IUserProfileCertificates[],
    experience      : IUserProfileExperience[],
    socialNetworks  : IUserProfileSocialNetworks[]

}