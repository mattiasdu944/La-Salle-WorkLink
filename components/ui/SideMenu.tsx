import { useState, FC, Dispatch, useContext } from 'react';
import { useRouter } from 'next/router';

import { FormSearchBar } from './FormSearchBar';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { BiBriefcase, BiGroup, BiHomeAlt, BiLogOut } from "react-icons/bi";
import { AuthContext } from '@/context/auth';


interface Props{
    isMenuOpen: boolean;
    setIsMenuOpen: Dispatch<React.SetStateAction<any>>
}

export const SideMenu: FC<Props> = ({ isMenuOpen, setIsMenuOpen }) => {
    const router = useRouter();
    const { logout } = useContext(AuthContext);


    const [searchTerm, setSearchTerm] = useState('');

    const onSearchTerm = () => {
        if( searchTerm.trim().length === 0 ) return;

        navigateTo(`/search/${ searchTerm }`);
    } 


    const navigateTo = ( url : string ) => {
        router.push( url );
    }

    return (
        <Drawer
            open={ isMenuOpen }
            anchor='right'
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
            onClose={ () => setIsMenuOpen( false ) }
        >
            <Box sx={{ width: 250, paddingTop: 5 }}>

                <List>

                    <ListItem>
                    <Box
                        sx={{
                            display:'flex',
                            background:'rgba(0,0,0,0.05)',
                            borderRadius:'3rem',
                            padding:'.25rem 1rem'
                        }}
                    >
                        <FormSearchBar/>
                    </Box>
                    </ListItem>

                    <ListItemButton 
                        onClick={ () => navigateTo('/category/men') }
                    >
                        <ListItemIcon>
                            <BiHomeAlt />
                        </ListItemIcon>
                        <ListItemText primary={'Inicio'} />
                    </ListItemButton>

                    <ListItemButton
                        onClick={ () => navigateTo('/category/women') }
                    >
                        <ListItemIcon>
                            <BiGroup/>
                        </ListItemIcon>
                        <ListItemText primary={'Contactos'} />
                    </ListItemButton>

                    <ListItemButton
                        onClick={ () => navigateTo('/category/kid') }
                    >
                        <ListItemIcon>
                            <BiBriefcase/>
                        </ListItemIcon>
                        <ListItemText primary={'Empleos'} />
                    </ListItemButton>

                    <ListItemButton 
                        onClick={ () => logout() }
                    >
                        <ListItemIcon>
                            <BiLogOut/>
                        </ListItemIcon>
                        <ListItemText primary={'Cerrar Sesion'} />
                    </ListItemButton>
                </List>
            </Box>
        </Drawer>
    )
}
