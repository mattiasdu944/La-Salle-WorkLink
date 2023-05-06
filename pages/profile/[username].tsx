import { dbUsers } from '@/database'
import { IUser } from '@/interfaces'
import { GetServerSideProps, NextPage } from 'next'

import { MainLayout } from '@/layouts'
import { Box, Grid, Typography } from '@mui/material'
import { AboutCard, BannerProfile, CertificatesCard, ExperienceCard } from '@/components';


interface Props{
    user: IUser;
}

const UserProfile: NextPage<Props> = ({ user }) => {
    
    return (
        <MainLayout 
            title={`Worklink | @${ user.username }`} 
            description={'Worklink - Conoce todas las oportunidades laborales que puedes tener solo con la Universidad de La Salle Bolivia'}
        >
            <BannerProfile/>
            <Box textAlign='center' mb='5rem'>
                <Typography variant='h1'>Mattias Alexandre Duarte Aparicio</Typography>
                <Typography >maduarte@est.ulasalle.edu.bo</Typography>
                <Typography color='text.primary'>5to semestre - Ingenieria de sistemas</Typography>
            </Box>

            <AboutCard/>


            <Grid container>
                <CertificatesCard/>
                <ExperienceCard/>
            </Grid>


        </MainLayout>
    
    )
}



export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const user = await  dbUsers.getUserData('mattias');

    return {
        props: {
            user
        }
    }
}


export default UserProfile