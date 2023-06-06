import React, { FC } from 'react'

import { Box, Button, Typography, Divider } from '@mui/material';
import { IVacant } from '@/interfaces';

interface Props{
    vacant: IVacant;
}

export const BannerJob: FC<Props> = ({ vacant }) => {
    return (
        <Box
            sx={{
                backgroundImage:`url(https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
                backgroundPosition:'center bottom',
                backgroundSize:'cover',
                padding:'3rem',
                position:'relative',    
                borderRadius:'1rem',
                minHeight: {xs:'13vh', md:'35vh'},
                mb:'10rem'
            }}
        >
            <Box
                sx={{
                    backgroundColor:'rgba(255,255,255,0.55)',
                    borderRadius:'1rem',
                    maxWidth:{ xs:'70%', md:'80%' }, 
                    backdropFilter:'blur(10px)',
                    margin:'0 auto',
                    position:'absolute',
                    bottom:{ xs:'-10rem', sm:'-7rem' },
                    left:'0',
                    right:'0',
                    boxShadow:'0px 10px 25px rgba(0,0,0, 0.1)',
                    padding:'2rem'
                }}
            >
                <Box  display='flex' justifyContent='space-between' alignItems='center'>
                    <Typography color='#000' variant='h3'>{ vacant.title }</Typography>
                    <Button>Ver vacante</Button>
                </Box>
                <Divider sx={{ my:3 }}/>
                <Box display='flex' justifyContent='space-between'>
                    <Box>
                        <Typography color='text.primary'>Location</Typography>
                        <Typography variant='subtitle1'>{ vacant.location }</Typography>
                    </Box>
                    <Box>
                        <Typography color='text.primary'>Publicado</Typography>
                        <Typography variant='subtitle1'>{ vacant.createdAt }</Typography>
                    </Box>
                    <Box>
                        <Typography color='text.primary'>Experience</Typography>
                        <Typography variant='subtitle1'>{ vacant.requirements.experience }</Typography>
                    </Box>
                    <Box>
                        <Typography color='text.primary'>Salario</Typography>
                        <Typography variant='subtitle1'>{ vacant.salary }</Typography>
                    </Box>
                    <Box>
                        <Typography color='text.primary'>Tipo</Typography>
                        <Typography variant='subtitle1'>{ vacant.type }</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
