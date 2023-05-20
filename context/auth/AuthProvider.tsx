import { FC, useReducer, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { AuthContext, authReducer } from './';


import { worklinkApi } from '../../client';
import { IUser } from '../../interfaces';

export interface AuthState {
    isLoggedIn: boolean;
    user?: IUser;
}


const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined,
}


export const AuthProvider:FC<any> = ({ children }) => {

    const [state, dispatch] = useReducer( authReducer, AUTH_INITIAL_STATE );
    const { data, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        
        if ( status === 'authenticated' ) {
            console.log({user: data?.user});
            dispatch({ type: '[Auth] - Login', payload: data?.user as IUser })
        }
    
    }, [ status, data ])
    



    const registerUser = async(email: string, password: string, name: string, lastname: string, username: string, role: string): Promise<{hasError: boolean; message?: string}> => {
        try {
            const { data } = await worklinkApi.post('/user/register', { name, email, password, lastname, username, role });
            const { user } = data;
            
            dispatch({ type: '[Auth] - Login', payload: user });
            return {
                hasError: false
            }

        } catch (error) {
            if ( axios.isAxiosError(error) ) {
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            }

            return {
                hasError: true,
                message: 'No se pudo crear el usuario - intente de nuevo'
            }
        }
    }


    const logout = () => {
        signOut();
    }



    return (
        <AuthContext.Provider value={{
            ...state,

            // Methods
            // loginUser,
            registerUser,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
};