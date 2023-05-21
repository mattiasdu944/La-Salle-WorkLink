import { GetServerSideProps, NextPage } from 'next'
import { dbUsers } from '@/database'
import { ICompany } from '@/interfaces'

import { MainLayout } from '@/layouts'
import { CompanyBanner } from '@/components';


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


        {/* 
            <AboutCard 
                description={ profile.description } 
                socialNetworks={ profile.socialNetworks }
            />


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