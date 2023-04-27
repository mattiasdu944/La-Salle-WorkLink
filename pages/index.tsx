import { NextPage } from 'next';

import { Typography } from '@mui/material';
import { AuthContext } from '../context/auth/AuthContext';
import { useContext } from 'react';
import { useSession } from 'next-auth/react';

const HomePage:NextPage = () => {

    const authContext = useContext(AuthContext);
    const  { user, isLoggedIn } = authContext;
    console.log({user, isLoggedIn});
    return (
        <Typography>index</Typography>
    )
}

export default HomePage;