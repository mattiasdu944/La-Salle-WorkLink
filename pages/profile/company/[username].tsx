import { GetServerSideProps, NextPage } from 'next'
import { dbUsers } from '@/database'
import { ICompany } from '@/interfaces'

import { MainLayout } from '@/layouts'
import { AboutCardCompany, CompanyBanner, SocialNetworkCompany,  } from '@/components';
import { Grid } from '@mui/material';


interface Props{
    profile: ICompany;
}

const UserProfile: NextPage<Props> = ({ profile }) => {
    console.log(profile);
    return (
        <MainLayout
            title={`Worklink | @${profile?.username}`}
            description={'Worklink - Conoce todas las oportunidades laborales que puedes tener solo con la Universidad de La Salle Bolivia'}
        >
            {/* <BannerProfile 
                profile={profile}
            /> */}

            <CompanyBanner profile={ profile }/>
            <Grid container spacing={ 3 }>
                <Grid item xs={ 12 } lg={ 8 }>
                    <AboutCardCompany
                        description={ profile.description }
                    />
                </Grid>
                <Grid item xs={ 12 } lg={ 4 }>
                    <SocialNetworkCompany 
                        email={ profile.email }
                        phone={ profile.phone }
                    />
                </Grid>
            </Grid>
            {/* <AboutCard 
                description={ profile.description } 
                socialNetworks={ profile.socialNetworks }
            /> */}


        {/* 


            <Grid container spacing={5}>

                <CertificatesCard certificates={ profile.certificates }/>
                <ExperienceCard experience={ profile.experience }/>
            </Grid> */}


        </MainLayout>

    )
}


export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    const { username } = query as { username: string }

    const profile = await  dbUsers.getCompanyProfile(username);

    const { p = '/' } = query;
    
    if( !profile ){
        return {
            redirect: {
                destination: p.toString(),
                permanent: false 
            }
        }
    } 


    return {
        props: {
            profile
        }
    }
}


export default UserProfile