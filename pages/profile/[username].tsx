import { dbUsers } from '@/database'
import { IProfile } from '@/interfaces'
import { GetServerSideProps, NextPage } from 'next'

import { MainLayout } from '@/layouts'
import { Grid } from '@mui/material'
import { AboutCard, BannerProfile, CertificatesCard, ExperienceCard } from '@/components';


interface Props{
    profile: IProfile;
}

const UserProfile: NextPage<Props> = ({ profile }) => (
    <MainLayout
        title={`Worklink | @${profile?.username}`}
        description={'Worklink - Conoce todas las oportunidades laborales que puedes tener solo con la Universidad de La Salle Bolivia'}
    >
        <BannerProfile 
            profile={profile}
        />



        <AboutCard 
            description={ profile.description } 
            socialNetworks={ profile.socialNetworks }
        />


        <Grid container spacing={5}>

            <CertificatesCard certificates={ profile.certificates }/>
            <ExperienceCard experience={ profile.experience }/>
        </Grid>


    </MainLayout>

)



export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    const { username } = query as { username: string }

    const profile = await  dbUsers.getUserProfile(username);
    return {
        props: {
            profile
        }
    }
}


export default UserProfile