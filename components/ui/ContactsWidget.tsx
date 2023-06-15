import { FC } from 'react';

import { Box, Avatar, Typography } from '@mui/material';
import { IUser } from '@/interfaces';


interface Props{
    users: IUser[]
}

export const ContactsWidget: FC<Props> = ({ users }) => {
    return (
        <Box
            sx={{
                border:'1px solid rgba(0,0,0,0.1)',
                borderRadius: '.75rem',
                padding:'2rem',
            }}
        >
            <Typography variant='subtitle1' mb={2}>Personas que quiza conozcas</Typography>

            {
                users.map( user => 
                    <Box mb={ 3 } sx={{ display:'flex', alignItems:'center', gap:'1rem' }}>
                        <Box>
                            <Avatar src={ user.image }/>
                        </Box>
                        <Box>
                            <Typography>{ user.name }</Typography>
                            <Typography color='text.primary'>{ user.username }</Typography>
                        </Box>
                    </Box>
                )
            }
        </Box>
    )
}
