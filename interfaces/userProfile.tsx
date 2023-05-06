
export interface IUserProfile {
    user            : string;
    description     : string;
    phone           : string;
    birthday        : string;
    years           : string;
    career          : string;
    semester        : Semester,
    certificates    : IUserProfileCertificates[],
    experience      : IUserProfileExperience[],
    socialNetworks  : IUserProfileSocialNetworks[],
}

export interface IUserProfileCertificates {
    name        : string;
    dateOfIssue : string;
    company     : string;
}

export interface IUserProfileExperience {
    position    : string;
    company     : string;
    startDate   : string;
    endingtDate : string;
}

export interface IUserProfileSocialNetworks {
    name        : string;
    url         : string;
}

export type Semester = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';