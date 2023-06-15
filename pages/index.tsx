import { NextPage } from 'next';
import { GetServerSideProps } from 'next'
import { MainLayout } from '@/layouts';
import { ICompany, IUser, IVacant } from '@/interfaces';
import { dbCompanies, dbJobs, dbUsers } from '@/database';

import { JobPost, CompaniesWidget, ContactsWidget } from '@/components';
import { Box, Grid, Typography } from '@mui/material';

interface Props{
    vacants: IVacant[];
    companies: ICompany[];
    users: IUser[];
}

const HomePage:NextPage<Props> = ({ vacants, companies, users }) => {



    return (
        <MainLayout 
            title={'Worklink | Inicio'} 
            description={'Worklink - Conoce todas las oportunidades laborales que puedes tener solo con la Universidad de La Salle Bolivia'}
        >
            <Grid container sx={{ position:'relative' }} spacing={3}>
                <Grid item xs={ 12 } md={ 8 }>
                    <Typography variant='h2'>Encuentra nuevas oportunidades</Typography>
                    {
                        vacants.map(( vacant ) => 
                            <JobPost vacant={ vacant }/>
                        )
                    }
                </Grid>
                
                <Grid 
                    item 
                    xs={ 12 } 
                    md={ 4 }
                >  
                    <Box 
                        sx={{
                            position:'sticky',
                            top:'5rem',
                            display:'grid',
                            gap:'1rem'
                        }}
                    >
                        <CompaniesWidget companies={companies}/>
                        <ContactsWidget users={ users }/>
                    </Box>
                </Grid>
            </Grid>

        </MainLayout>
    )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const vacants = await dbJobs.getLastJobs();
    const companies = await dbCompanies.getAllCompanies(); 
    const users = await dbUsers.getAllUsers();
    return {
        props: {
            vacants,
            companies,
            users
        }
    }
}

export default HomePage;