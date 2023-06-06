import React, { useState } from 'react'
import { MainLayout } from '@/layouts'

import { Typography } from '@mui/material';
import { FormNewJob } from '../../components';
import { IVacant, Requirements } from '@/interfaces';

const NewJob = () => {
    
    const [requirements, setRequirements] = useState<Requirements>({ 
        experience  : '',
        skills      : '',
        education   : '',
    })

    const [benefits, setBenefits] = useState<string[]>([]);

    const [newJob, setNewJob] = useState<IVacant>({
        title           : '',
        description     : '',
        requirements,
        location    : '',
        salary      : 0,
        type        : 'Remoto',
        workingHour : 'Turno',
    
        benefits,
        deadline    : '',
        image       : ''
    })



    return (
        <MainLayout 
            title={'Worklink | Nueva vacante'} 
            description={'Agrega una nueva vacante para que nuestros talentos puedan aplicar a ella y encontrar soluciones mejorando el ambito en tu empresa'}
        >
            <Typography variant='h1' mb={ 3 }>Agrega una nueva vacante</Typography>
            <FormNewJob
                newJob={ newJob }
                setNewJob={ setNewJob }
                requirements={ requirements }
                setRequirements={ setRequirements }
                benefits={ benefits }
                setBenefits={ setBenefits }
                
            />
        </MainLayout>
    )
}

export default NewJob