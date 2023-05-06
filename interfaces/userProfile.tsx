export interface IUserProfile {
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

interface IUserProfileCertificates {
    name        : string;
    dateOfIssue : string;
    company     : string;
}

interface IUserProfileExperience {
    position    : string;
    company     : string;
    startDate   : string;
    endingtDate : string;
}

interface IUserProfileSocialNetworks {
    name        : string;
    url         : string;
}

export type Semester = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';