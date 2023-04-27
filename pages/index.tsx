import { useContext } from 'react';
import { NextPage } from 'next';

import { Typography } from '@mui/material';
import { AuthContext } from '../context/auth/AuthContext';

const HomePage:NextPage = () => {

    const authContext = useContext(AuthContext);
    const  { user, isLoggedIn } = authContext;
    console.log({user, isLoggedIn});
    return (
        <Typography>La Salle Worklink</Typography>
    )
}

export default HomePage;