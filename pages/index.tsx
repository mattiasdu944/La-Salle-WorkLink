import { NextPage } from 'next';

import { AuthContext } from '../context/auth/AuthContext';
import { useContext } from 'react';
import { MainLayout } from '@/layouts';

const HomePage:NextPage = () => {

    const { user, isLoggedIn } = useContext(AuthContext);


    return (
        <MainLayout 
            title={'Worklink | Inicio'} 
            description={'Worklink - Conoce todas las oportunidades laborales que puedes tener solo con la Universidad de La Salle Bolivia'}
        >
            
            

        </MainLayout>
    )
}

export default HomePage;