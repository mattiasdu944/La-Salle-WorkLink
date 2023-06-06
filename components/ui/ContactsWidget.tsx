import { FC } from 'react';

import { Box, Avatar, Typography } from '@mui/material';
import { ICompany } from '@/interfaces';


interface Props{
    companies: ICompany[]
}

export const ContactsWidget: FC<Props> = ({ companies }) => {
    return (
        <Box
            sx={{
                border:'1px solid rgba(0,0,0,0.1)',
                borderRadius: '.75rem',
                padding:'2rem',
                position:'sticky',
                top:'5rem'
            }}
        >
            <Typography variant='subtitle1' mb={2}>Empresas registradas</Typography>

            {
                companies.map( company => 
                    <Box mb={ 3 } sx={{ display:'flex', alignItems:'center', gap:'1rem' }}>
                        <Box>
                            <Avatar src={ company.image }/>
                        </Box>
                        <Box>
                            <Typography>{ company.name }</Typography>
                            <Typography color='text.primary'>{ company.username }</Typography>
                        </Box>
                    </Box>
                )
            }
        </Box>
    )
}
