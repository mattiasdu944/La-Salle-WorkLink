import { Dispatch, FC, useContext } from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { AuthContext } from '@/context/auth';
import { CustomAvatarButton, FormSearchBar } from './';
import { GrNotification } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material';

interface Props{
    isMenuOpen: boolean;
    setIsMenuOpen: Dispatch<React.SetStateAction<any>>
}

export const AppBarMenu: FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {


    const { user } = useContext(AuthContext);

    return (
        <AppBar>
            <Toolbar>
                <Link href={`/profile/${ user?.username }`} style={{ display:'flex', alignItems:'center', gap:4 }} passHref>
                    <Image alt='Worklink Logo' src='/static/images/worklink_logo.png' width='30' height='30'/>
                    <Typography variant='h6'>Worklink</Typography>
                </Link>

                <Box flex={.1} />

                <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap:'1rem' }}>
                    <Link href='/' passHref>
                        <Typography>Inicio</Typography>
                    </Link>
                    <Link href='/contacts' passHref>
                        <Typography>Contactos</Typography>
                    </Link>
                    <Link href='/jobs' passHref>
                        <Typography>Empleos</Typography>
                    </Link>
                </Box>

                <Box flex={1} />
                
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        background:'rgba(0,0,0,0.05)',
                        borderRadius:'3rem',
                        padding:'0 0 0 1rem'
                    }}
                >
                    <FormSearchBar/>
                </Box>
                <Box flex={.1} />

                <Link href="/notifications" passHref>
                    <IconButton>
                        <Badge badgeContent={2} color="primary">
                            <GrNotification/>
                        </Badge>
                    </IconButton>
                </Link>

                <CustomAvatarButton/>
                
                <IconButton sx={{ display: { xs: 'block', sm: 'none' } }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <AiOutlineMenu/>
                </IconButton>

            </Toolbar>
        </AppBar>
    )
}
