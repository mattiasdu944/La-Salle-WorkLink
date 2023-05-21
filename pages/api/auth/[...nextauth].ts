import { dbUsers } from "@/database";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import { checkUserEmailPasswordCompany } from '../../../database/dbUsers';


export default NextAuth({
    providers: [
        Credentials({
            name: 'Custom Login',
            credentials: {
                email: { label: 'Correo:', type: 'email', placeholder: 'correo@google.com' },
                password: { label: 'Contraseña:', type: 'password', placeholder: 'Contraseña' },
            },
            async authorize(credentials) {

                const user = await dbUsers.checkUserEmailPasswordUser(credentials!.email, credentials!.password) as any;
                const company = await dbUsers.checkUserEmailPasswordCompany(credentials!.email, credentials!.password) as any;

                if( user ){
                    return user;
                }
                if( company ){
                    return company;
                }
                return null
            }
        }),

    ],



    pages:{
        signIn: '/auth/login',
        newUser: '/auth/register'
    },

    // Callbacks
    session: {
        maxAge: 2592000, /// 30d
        strategy: 'jwt',
        updateAge: 86400, // cada día
    },
    callbacks: {
        async jwt({ token, account, user }) {

            if (account) {
                token.accessToken = account.access_token;

                switch (account.type) {
                    case 'oauth':
                        token.user = await dbUsers.oAuthToDbUser(user?.email || '', user?.name || '');
                        break;

                    case 'credentials':
                        token.user = user;
                        break;

                    default:
                        break;
                }
            }

            return token;
        },

        async session({ session, token }) {
            session.user = token.user as any;

            return {...session, accessToken: token.accessToken};
        }
    }
});