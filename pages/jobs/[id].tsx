import { GetServerSideProps, NextPage } from 'next';
import { dbJobs } from '@/database';
import { IVacant } from '@/interfaces';

import { MainLayout } from '@/layouts';
import { BannerDetailsJob, MoreInfoJobWidget } from '@/components';
import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import { AboutJobWidget } from '../../components/jobs/AboutJobWidget';

interface Props{
    vacant: IVacant;
}

const JobsPage: NextPage<Props> = ({ vacant }) => {
    return (
        <MainLayout title={`${ vacant.title }`} description={''}>
            <BannerDetailsJob 
                company={ vacant.company! } 
                image={ vacant.image } 
                createdAt={ vacant.createdAt! } 
                title={ vacant.title } 
                location={ vacant.location }
            />

            <Grid container spacing={4}>
                <Grid item xs={ 12 } md={ 7 }>
                    <AboutJobWidget 
                        description={ vacant.description } 
                        requirements={ vacant.requirements }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 5 }>
                    <MoreInfoJobWidget 
                        salary={ vacant.salary } 
                        benefits={ vacant.benefits } 
                        type={ vacant.type } 
                        workingHour={ vacant.workingHour }
                        deadline={ vacant.deadline }
                    />
                </Grid>

            </Grid>

        </MainLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    const { id } = query as { id: string }
    
    const vacant  = await dbJobs.getJobById(id) 
    
    return {    
        props: {
            vacant
        }
    }
}


export default JobsPage;