import { NextPage } from 'next';

import { AuthContext } from '../context/auth/AuthContext';
import { useContext } from 'react';
import { MainLayout } from '@/layouts';
import { Box, Grid } from '@mui/material';
import { JobPost, NewJobWidgets } from '@/components';

const HomePage:NextPage = () => {

    const { user, isLoggedIn } = useContext(AuthContext);


    return (
        <MainLayout 
            title={'Worklink | Inicio'} 
            description={'Worklink - Conoce todas las oportunidades laborales que puedes tener solo con la Universidad de La Salle Bolivia'}
        >
            <Grid container sx={{ position:'relative' }} spacing={3}>
                <Grid item xs={ 12 } md={ 8 }>
                    {
                        [0,1,2,3,4].map(() => 
                            <JobPost/>
                        )
                    }
                </Grid>
                
                <Grid 
                    item 
                    xs={ 12 } 
                    md={ 4 }
                    sx={{
                        position:'sticky',
                        top:'1rem'
                    }}    
                >
                    <NewJobWidgets/>
                </Grid>
            </Grid>

        </MainLayout>
    )
}

export default HomePage;