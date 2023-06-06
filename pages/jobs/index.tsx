
import { GetServerSideProps, NextPage } from 'next'
import { ICompany, IVacant } from '@/interfaces'
import { dbCompanies, dbJobs } from '@/database'

import { MainLayout } from '@/layouts'
import { BannerJob, JobsList, ContactsWidget } from '@/components'
import { Grid, Typography } from '@mui/material';

interface Props{
    vacants: IVacant[];
    companies: ICompany[];
}

const JobsPage: NextPage<Props> = ({ vacants, companies }) => {
    return (
        <MainLayout title={'Worklink | Empleos'} description={'Encuentras las mejores oportunidades laborales en WorkLink La Salle'}>
            <BannerJob vacant={ vacants[0] }/>
            
            <Typography variant='h3'>Ultimas vacantes publicadas</Typography>

            <Grid container sx={{ position:'relative' }} spacing={3}>

                <Grid item xs={ 12 } md={ 8 }>
                    <JobsList vacants={ vacants }/>
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
                    <ContactsWidget companies={ companies }/>
                </Grid>
            
            </Grid>
        </MainLayout>   
    )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const vacants = await  dbJobs.getLastJobs();
    const companies = await dbCompanies.getAllCompanies();

    return {
        props: {
            vacants,
            companies
        }
    }
}

export default JobsPage;