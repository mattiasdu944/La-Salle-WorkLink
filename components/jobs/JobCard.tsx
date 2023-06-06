import React, { FC } from 'react'
import { IVacant } from '@/interfaces'

import { Box, CardActionArea, Typography, Avatar } from '@mui/material';

interface Props{
    vacant: IVacant;
}

export const JobCard: FC<Props> = ({ vacant }) => {
    return (
        <CardActionArea
            sx={{
                border:'1px solid rgba(0,0,0,0.1)',
                borderRadius:'1rem',
                padding:'2rem',
                mb:'1.5rem',
                transitionProperty:'transform',
                transitionDuration:'.3s',
                display:'flex',
                justifyContent:'start',
                gap:'1rem',
                ':hover':{
                    transform:'scale(1.05)',
                }
            }}
        >
            <Box>
                <Avatar src={ vacant.company!.image } sx={{ border:'1px solid rgba(0,0,0,0.1)' }} />
            </Box>
            <Box>
                <Typography variant='subtitle1'>{ vacant.title }</Typography>
                <Typography variant='subtitle2' color='text.primary'>
                    { vacant.location } - { vacant.workingHour } - { vacant.type }
                </Typography>
            </Box>
        </CardActionArea>
    )
}
