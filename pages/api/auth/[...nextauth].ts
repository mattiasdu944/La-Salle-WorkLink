import { dbUsers } from "@/database";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";


export default NextAuth({
    providers: [
        Credentials({
            name: 'Custom Login',
            credentials: {
                email: { label: 'Correo:', type: 'email', placeholder: 'correo@google.com' },
                password: { label: 'Contraseña:', type: 'password', placeholder: 'Contraseña' },
            },
            async authorize(credentials) {

                return await dbUsers.checkUserEmailPassword(credentials!.email, credentials!.password) as any;

            }
        }),

    ],

    
    pages:{
        signIn: '/auth/login',
        // newUser: '/auth/register'
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
                    // case 'oauth':
                    //     token.user = await dbUsers.oAuthToDbUser(user?.email || '', user?.name || '');
                    //     break;

                    case 'credentials':
                        token.user = user;
                        break;

                    // default:
                    //     break;
                }
            }

            return token;
        },

        async session({ session, token, user }) {
            // session.accessToken = token.accessToken;
            session.user = token.user as any;   
            // console.log({...session, accessToken: token.accessToken});
            return {...session, accessToken: token.accessToken };
        }
    },
    secret: process.env.NEXT_PUBLIC_SECRET,
});
