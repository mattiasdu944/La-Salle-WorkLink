import { FC } from 'react'
import { IProfile } from '@/interfaces'

import { Avatar, Box, Typography } from '@mui/material'

interface Props{
    profile: IProfile
}

export const BannerProfile: FC<Props> = ({ profile }) => {
    return (
        <>
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
                    src={ profile.image }
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

            <Box textAlign='center' mb='5rem'>
                <Typography variant='h1'>{`${ profile.name } ${ profile.lastname }`}</Typography>
                <Typography >{ profile.email }</Typography>
                <Typography color='text.primary'>
                    Semestre: { profile.semester }
                    { 
                        profile.career.length > 1
                        ? (
                           `- Carrera: ${ profile.career }`
                        )
                        : (
                            ''
                        )
                    }
                     
                </Typography>
            </Box>
        </>
    
    )
}
