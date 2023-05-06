import { FC } from 'react'

import { Grid, Typography } from '@mui/material'

export const ExperienceCard: FC = () => {
    return (
        <Grid 
            item 
            xs={ 12 } 
            md={ 6 } 
            sx={{
                border:'1px rgba(0,0,0, 0.1) solid',
                borderRadius:'1rem',
                padding:'2rem',
            }}
        >
            <Typography variant='h3'>Experiencia</Typography>

        </Grid>
    )
}
