import { Box, Button, Typography, Divider } from '@mui/material';
import React, { FC } from 'react'

export const BannerJob: FC = () => {
    return (
        <Box
            sx={{
                backgroundImage:`url(https://static.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq)`,
                backgroundPosition:'center center',
                backgroundSize:'cover',
                padding:'3rem',
                position:'relative',    
                borderRadius:'1rem',
                minHeight: {xs:'13vh', md:'35vh'},
                mb:10
            }}
        >
            <Box
                sx={{
                    backgroundColor:'rgba(255,255,255,0.85)',
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
                    <Typography color='#000' variant='h3'>Ultima vacante publicada</Typography>
                    <Button>Ver vacante</Button>
                </Box>
                <Divider sx={{ my:3 }}/>
                <Box display='flex' justifyContent='space-between'>
                    <Box>
                        <Typography color='text.primary'>Location</Typography>
                        <Typography variant='subtitle1'>Algun lugar</Typography>
                    </Box>
                    <Box>
                        <Typography color='text.primary'>Publicado</Typography>
                        <Typography variant='subtitle1'>12 de Enero</Typography>
                    </Box>
                    <Box>
                        <Typography color='text.primary'>Experience</Typography>
                        <Typography variant='subtitle1'>Any</Typography>
                    </Box>
                    <Box>
                        <Typography color='text.primary'>Salario</Typography>
                        <Typography variant='subtitle1'>3k a 5k</Typography>
                    </Box>
                    <Box>
                        <Typography color='text.primary'>Tipo</Typography>
                        <Typography variant='subtitle1'>Remoto</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
