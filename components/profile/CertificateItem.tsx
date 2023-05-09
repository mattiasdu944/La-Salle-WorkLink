import { FC } from 'react'

import { Box, Divider, Typography } from '@mui/material'
import { BiAward } from 'react-icons/bi'

interface Props{
    name        : string,
    dateOfIssue : string,
    company     : string,
    hours       : number,
}

export const CertificateItem: FC<Props> = ({ company, dateOfIssue, hours, name }) => {
    return (
        <>
            <Divider sx={{ my: 3 }} />
        
            <Box>
                <Typography variant='subtitle2' >{ name }</Typography>
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
                    <Typography color='text.primary'>{ company } º { dateOfIssue } º { hours } Horas</Typography>
                </Box>

            </Box>
        </>

    )
}
