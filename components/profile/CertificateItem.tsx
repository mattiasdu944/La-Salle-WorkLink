import { FC } from 'react'

import { Box, Divider, Typography } from '@mui/material'
import { BiAward } from 'react-icons/bi'

interface Props{
    name?        : string,
    dateOfIssue? : string,
    company?     : string,
    hours?       : number,
}

export const CertificateItem: FC<Props> = ({ company, dateOfIssue, hours, name }) => {
    return (
        <>
            <Box>
                <Typography variant='subtitle2' >Nombre del certificado</Typography>
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
                    <Typography color='text.primary'>Compañia º Emitido º 21Horas</Typography>
                </Box>

            </Box>

            <Divider sx={{ my: 3 }} />
        </>

    )
}
