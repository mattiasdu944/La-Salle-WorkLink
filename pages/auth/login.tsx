import Head from 'next/head'

import { Box, Container, Grid } from '@mui/material'
import { FormLogin } from '../../components/auth/FormLogin';

const LoginPage = () => {
    return (
        <>
            <Head>
                <title>WorkLink - Inicia Sesion</title>
            </Head>

            <Grid container component='main' sx={{  minHeight:'100vh' }}>
                <Grid item xs={ 12 } md={ 6 }>
                    <Container>
                        imagen
                    </Container>
                </Grid>

                <Grid item xs={ 12 } md={ 6 }>
                    <Container sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        height: '100%',
                    }}>
                        <FormLogin/>
                    </Container>
                </Grid>
            </Grid>
        </>
    )
}

export default LoginPage