import Head from 'next/head'
import { NextPage } from 'next';
import { GetServerSideProps } from 'next'

import { FormLogin, SideBanner } from '@/components';
import { Container, Grid } from '@mui/material'
import { getSession } from 'next-auth/react';

const LoginPage: NextPage = () => {



    return (
        <>
            <Head>
                <title>WorkLink - Inicia Sesion</title>
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
                            message={'¿No tienes una cuenta?'} 
                            textButton={'Registrate'} 
                            link={'/auth/register'}
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
                        <FormLogin/>
                    </Container>
                </Grid>
            </Grid>
        </>
    )
}




export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
    const session = await getSession({ req });

    const { p = '/' } = query;

    if( session ){
        return {
            redirect: {
                destination: p.toString(),
                permanent: false 
            }
        }
    } 

    console.log(session); 

    return {
        props: {
            
        }
    }
}



export default LoginPage