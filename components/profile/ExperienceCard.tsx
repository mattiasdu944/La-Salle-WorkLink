import { FC } from 'react'
import { IUserProfileExperience } from '@/interfaces'

import { ExperienceItem } from './'
import { Box, Grid, Typography } from '@mui/material'

interface Props{
    experience: IUserProfileExperience[]
}

export const ExperienceCard: FC<Props> = ({ experience }) => {
    return (
        <Grid 
            item 
            xs={ 12 } 
            md={ 6 } 
        >
            <Box 
                sx={{
                    border:'1px rgba(0,0,0, 0.1) solid',
                    borderRadius:'1rem',
                    padding:'2rem',
                }}
            >
                <Typography variant='h3' mb={ 3 }>Experiencia</Typography>
                
            {
                experience.length == 0
                ? (
                    <Typography>No se encontraron registros</Typography>
                )
                :(
                    experience.map((item, index) => (
                        
                        <ExperienceItem 
                            key={ index }
                            company={ item.company }
                            endingtDate={ item.endingtDate }
                            position={ item.position }
                            startDate={ item.startDate }
                        />
                    ))
                )
            }
            </Box>

        </Grid>
    )
}
