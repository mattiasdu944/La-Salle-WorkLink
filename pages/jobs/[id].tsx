import { GetServerSideProps, NextPage } from 'next';
import { dbJobs } from '@/database';
import { IVacant } from '@/interfaces';

import { MainLayout } from '@/layouts';
import { BannerDetailsJob } from '@/components';
import { Box, Typography } from '@mui/material';

interface Props{
    vacant: IVacant;
}

const JobsPage: NextPage<Props> = ({ vacant }) => {
    return (
        <MainLayout title={`${ vacant.title }`} description={''}>
            <BannerDetailsJob 
                company={ vacant.company! } 
                requirements={ vacant.requirements } 
                image={ vacant.image } 
                createdAt={ vacant.createdAt! } 
                title={ vacant.title } 
                type={ vacant.type } 
                workingHour={ vacant.workingHour } 
                salary={ vacant.salary }
                location={ vacant.location }
            />
            <Typography variant='h2'>Descripcion del trabajo</Typography>
            <Typography color='text.primary'>{ vacant.description }</Typography>

            <Typography variant='h2'>Requisitos</Typography>
            <Typography>
                Experiencia: <Box component='span' color='text.primary'>{ vacant.requirements.experience }</Box>
            </Typography>
            <Typography>
                Educacion: <Box component='span' color='text.primary'>{ vacant.requirements.education }</Box>
            </Typography>
            <Typography>
                Habilidades: <Box component='span' color='text.primary'>{ vacant.requirements.skills }</Box>
            </Typography>

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