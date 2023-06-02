import Head from 'next/head'
import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react'

import { FormRegister } from '@/components'
import { Grid } from '@mui/material';

const RegisterPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>WorkLink - Registro</title>
            </Head>
            <Grid
                container 
                columnSpacing={4}
                component='main' 
                sx={{  
                    minHeight:'100vh',
                    alignItems:'center',
                }}  
            >
                <Grid
                    item xs={ 12 } md={ 6 }
                    sx={{
                        backgroundImage:"url('https://ulasalle.edu.bo/lp/wp-content/uploads/2021/11/BANNER-2021_LA-SALLE-BOLIVIA.png')",
                        backgroundRepeat:'no-repeat',
                        backgroundSize:'cover',
                        backgroundBlendMode:'color',
                        backgroundColor:'rgba(0,0,0,0.5)',
                        backgroundPosition:'center',
                        minHeight:'100vh',
                        padding:'2rem',
                        display:{ xs:'none', md:'block' }

                    }}
                >

                </Grid>
                <Grid item xs={ 12 } md={ 6 } sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <FormRegister/>
                </Grid>
            </Grid>
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
    const session = await getSession({ req });
    console.log(session);

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