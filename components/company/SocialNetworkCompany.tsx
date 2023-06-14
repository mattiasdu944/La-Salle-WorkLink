import { FC } from 'react'

import { Box, Typography } from '@mui/material';

interface Props{
    email: string;
    phone: string;
}
export const SocialNetworkCompany: FC<Props> = ({ email, phone }) => {
    return (
        <Box 
            sx={{
                border:'1px rgba(0,0,0, 0.1) solid',
                borderRadius:'1rem',
                padding:'2rem',
                mb:'2rem'
            }}
        >
            <Typography textAlign='start' variant='h3'>Redes Sociales</Typography>
            
        </Box>
    )
}
