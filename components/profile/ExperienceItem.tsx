import { FC } from 'react'

import { Box, Divider, Typography } from '@mui/material'
import { BiAward } from 'react-icons/bi'

interface Props{
    company         : string,
    endingtDate     : string,
    position        : string,
    startDate       : string,
}

export const ExperienceItem: FC<Props> = ({ company, endingtDate, position, startDate }) => {
    return (
        <>
            <Divider sx={{ my: 3 }} />
        
            <Box>
                <Typography variant='subtitle2' >{ position }</Typography>
                <Box
                    sx={{
                        display:'flex',
                        gap:'.5rem',
                        alignItems:'center'
                    }}
                    >
                    <Box sx={{ color:'secondary.main', fontSize:'1.75rem' }}>
                        <BiAward/>
                    </Box>
                    <Typography color='text.primary'>{ company } º { startDate } º { endingtDate } Horas</Typography>
                </Box>

            </Box>
        </>

    )
}
