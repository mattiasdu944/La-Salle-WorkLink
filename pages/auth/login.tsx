import Head from 'next/head'
import { NextPage } from 'next';
import { GetServerSideProps } from 'next'

import { FormLogin, SideBanner } from '@/components';
import { Box, Container, Grid, Typography } from '@mui/material'
import { getSession } from 'next-auth/react';

const LoginPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>WorkLink - Inicia Sesion</title>
            </Head>

            <Box 
                component='main' 
                sx={{  
                    minHeight:'100vh',
                    display: 'flex',
                    alignItems:'center',
                    background:'#f9f6fc'
                }}
            >

                <Container sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <FormLogin/>
                </Container>
            </Box>
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


    return {
        props: {
            
        }
    }
}



export default LoginPage