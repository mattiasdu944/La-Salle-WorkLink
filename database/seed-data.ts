import bcrypt from 'bcrypt';
interface SeedUser {
    name    : string;
    lastname: string;
    username: string;
    email   : string;
    password: string;
    role    : 'admin'|'student'|'company';
}

interface SeedData {
    users: SeedUser[];
}

export const initialData: SeedData = {
    users: [
        {
            name: 'Mattias Alexandre',
            lastname: 'Duarte Aparicio',
            username:   'mattias',
            email: 'maduarte@est.ulasalle.edu.bo',
            password: bcrypt.hashSync( '+Mduarte2023', 10),
            role: 'student'
        }
    ]
}