export interface IVacant{
    title           : string;
    description     : string;
    requirements    : IVacantRequirements;
    location    : string;
    salary      : number;
    type        : 'Remoto'|'Presencial';
    workingHour : 'Tiempo completo'|'Medio tiempo'|'Turno';

    benefits    : string[];
    deadline    : string;
    image       : string;
    views?      : number;
}

export interface IVacantRequirements{
    experience  : string;
    skills      : string;
    education   : string;   
}