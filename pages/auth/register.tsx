import React from 'react'
import Head from 'next/head'

import { Container, Grid } from '@mui/material'
import { FormRegister, SideBanner } from '@/components'

const RegisterPage = () => {
    return (
        <>
            <Head>
                <title>WorkLink - Registro</title>
            </Head>

            <Grid container component='main' sx={{  
                minHeight:'100vh', 
                flexDirection:{ xs:'column-reverse', md:'row' },
                padding: { xs: '2rem 0' } 
            }}>
                <Grid item xs={ 12 } md={ 6 }>
                    <Container sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        height: '100%',
                        padding: '2rem 0'
                    }}>
                        <SideBanner 
                            message={'¿Ya tienes una cuenta?'} 
                            textButton={'Inicia Sesion'} 
                            link={'/auth/login'}
                        />
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
                        <FormRegister/>
                    </Container>
                </Grid>
            </Grid>
        </>
    )
}

export default RegisterPage