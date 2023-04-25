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
            username:' 104924121',
            email: 'duartemattias4@gmail.com',
            password:'+Mduarte2023',
            role: 'student'
        }
    ]
}