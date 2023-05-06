import { Avatar, Box } from '@mui/material'
import React from 'react'

export const BannerProfile = () => {
    return (
        <Box
            sx={{ 
                backgroundImage:'url(https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg)',
                backgroundPosition:'center center',
                backgroundSize:'cover',
                padding:'3rem',
                position:'relative',
                borderRadius:'1rem',
                minHeight: {xs:'10vh', md:'35vh'},
                mb:10
            }}
        >
            <Avatar
                alt='Perfil'
                src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg'
                sx={{ 
                    border:'5px solid #fff',
                    width:{ xs:100, md:150 }, 
                    height:{ xs:100, md:150 },
                    margin:'0 auto',
                    position:'absolute',
                    bottom:'-4rem',
                    left:'0',
                    right:'0',
                }}
            />
        </Box>
    )
}
