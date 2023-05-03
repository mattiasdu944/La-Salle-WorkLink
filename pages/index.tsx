import { NextPage } from 'next';

import { Typography } from '@mui/material';
import { AuthContext } from '../context/auth/AuthContext';
import { useContext } from 'react';
import { useSession } from 'next-auth/react';
import { MainLayout } from '@/layouts';

const HomePage:NextPage = () => {

    const authContext = useContext(AuthContext);
    const  { user, isLoggedIn } = authContext;
    console.log({user, isLoggedIn});
    return (
        <MainLayout 
            title={'Worklink | Inicio'} 
            description={'Worklink - Conoce todas las oportunidades laborales que puedes tener solo con la Universidad de La Salle Bolivia'}
        >
            <Typography>index</Typography>

        </MainLayout>
    )
}

export default HomePage;