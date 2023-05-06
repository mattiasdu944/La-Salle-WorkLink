import { FC } from 'react'

import { CertificateItem } from './CertificateItem'
import { Grid, Typography } from '@mui/material'

export const CertificatesCard: FC = () => (
    <Grid
        item
        xs={12}
        md={6}
        sx={{
            border: '1px rgba(0,0,0, 0.1) solid',
            borderRadius: '1rem',
            padding: '2rem',
        }}
    >
        <Typography variant='h3' mb={3}>Certificados</Typography>

        {
            [1,2,3,4,5,6].map((item, index) => (

                <CertificateItem key={ index }/>

            ))

        }


    </Grid>
)
