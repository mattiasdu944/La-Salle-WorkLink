import { AiOutlineEdit } from 'react-icons/ai'
import { Avatar, Box, Button, Typography } from '@mui/material'
import { FC } from 'react';
import { ICompany } from '@/interfaces'


interface Props{
    profile: ICompany;
}

export const CompanyBanner: FC<Props> = ({ profile }) => {
    return (
        <>
            <Box
                sx={{ 
                    backgroundImage:`url(${ profile.banner })`,
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

            <Box textAlign='center'>
                <Typography variant='h1'>{`${ profile.name }`}</Typography>
                <Typography >{ profile.email }</Typography>
            </Box>
{/* 
            <Box mb={ '3rem' } mt={'1rem'} textAlign='center'>
                {
                    user?.username === query.username
                    ?(
                        <Button>
                            <Typography sx={{ alignItems:'center', display:'flex', justifyContent:'center' }}>
                                Editar perfil
                                <AiOutlineEdit/>
                            </Typography>
                        </Button>
                    )
                    :(
                        <Button color='secondary' variant='outlined'>
                            <Typography>Seguir</Typography>
                        </Button>
                    )
                }



            </Box> */}
        </>
    )
}
