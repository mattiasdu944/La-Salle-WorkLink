import { Box, Typography } from '@mui/material';
import React from 'react'
import { FC } from 'react';

interface Props {
    description: string;
}

export const AboutCardCompany: FC<Props> = ({ description }) => {
    return (
        <Box 
            sx={{
                border:'1px rgba(0,0,0, 0.1) solid',
                borderRadius:'1rem',
                padding:'2rem',
                mb:'2rem'
            }}
        >

            <Typography textAlign='start' variant='h3'>Acerca de</Typography>
            <Typography textAlign='start' color='text.primary'>
                { description.length > 1 ? description : 'Aun no se agrego una descripcion' }
            </Typography>
                
        </Box>
    )
}
