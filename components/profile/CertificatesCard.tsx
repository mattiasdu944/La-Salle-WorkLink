import { FC } from 'react'
import { IUserProfileCertificates } from '@/interfaces'

import { CertificateItem } from './CertificateItem'
import { Box, Grid, Typography } from '@mui/material'

interface Props{
    certificates: IUserProfileCertificates[]
}

export const CertificatesCard: FC<Props> = ({ certificates }) => (
    <Grid
        item
        xs={12}
        md={6}
    >
        <Box
            sx={{
                border:'1px rgba(0,0,0, 0.1) solid',
                borderRadius:'1rem',
                padding:'2rem',
            }}
        >

            <Typography variant='h3' mb={3}>Certificados</Typography>

            {
                certificates.length == 0
                ? (
                    <Typography>No se encontraron certificados</Typography>
                )
                :(
                    certificates.map((certificate, index) => (
                        
                        <CertificateItem 
                            key={ index } 
                            name={ certificate.name } 
                            dateOfIssue={ certificate.dateOfIssue } 
                            company={ certificate.company } 
                            hours={ certificate.hours }
                        />
                        
                    ))
                )
            }
            

        </Box>


    </Grid>
)
