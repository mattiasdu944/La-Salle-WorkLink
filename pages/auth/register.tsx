import Head from 'next/head'
import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react'

import { FormRegister } from '@/components'
import { Box, Container } from '@mui/material'

const RegisterPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>WorkLink - Registro</title>
            </Head>

            <Box 
                component='main' 
                sx={{  
                    minHeight:'100vh',
                    display: 'flex',
                    alignItems:'center',
                    background:'#f9f6fc',
                    padding:'3rem 0'
                }}
            >
                <Container sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <FormRegister/>
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


export default RegisterPage