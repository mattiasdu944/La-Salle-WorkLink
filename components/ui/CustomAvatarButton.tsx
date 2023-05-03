import { FC, useContext, useState } from 'react'
import Link from 'next/link';

import { AuthContext } from '@/context/auth'
import { Avatar, Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'

export const CustomAvatarButton: FC = () => {

    const { logout, user } = useContext(AuthContext);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={ handleClick }>
                <Avatar alt="Remy Sharp" src="/static/images/user_icon.png" />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onMouseLeave={ handleClose }
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <Link href={`/profile/${ user?.username.trim() }`}>
                        <Typography textAlign="center">Perfil</Typography>
                    </Link>
                </MenuItem>
                <MenuItem onClick={() => logout()}>
                    <Typography textAlign="center">Cerrar Sesion</Typography>
                </MenuItem>

            </Menu>
        </Box>
    )
}
