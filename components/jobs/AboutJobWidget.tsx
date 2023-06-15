import { Requirements } from '@/interfaces';
import { Box, Typography } from '@mui/material';
import React from 'react'
import { FC } from 'react';

interface Props{
    description: string;
    requirements: Requirements;

}

export const AboutJobWidget: FC<Props> = ({ description, requirements }) => {
    return (
        <Box
            sx={{
                padding:'2rem 3rem',
                borderRadius:'1rem',
                border: '1px solid rgba(0,0,0,0.2)'
            }}
        >
            <Box mb={3}>
                <Typography variant='h3' mb={1}>Descripcion del trabajo</Typography>
                <Typography color='text.primary' textAlign='justify'>{ description }</Typography>
            </Box>

            <Box>
                <Typography variant='h3' mb={1}>Requisitos</Typography>
                <Typography mb={ 1 }>
                    Experiencia: <Box component='span' color='text.primary'>{ requirements.experience }</Box>
                </Typography>
                <Typography mb={ 1 }>
                    Educacion: <Box component='span' color='text.primary'>{ requirements.education }</Box>
                </Typography>
                <Typography mb={ 1 }>
                    Habilidades: <Box component='span' color='text.primary'>{ requirements.skills }</Box>
                </Typography>
            </Box>
        </Box>
    )
}
