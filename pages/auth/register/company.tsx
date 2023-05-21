import { FormRegisterCompany } from '@/components'
import { Box, Container, Grid } from '@mui/material'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const RegisteCompany: NextPage = () => {
    return (
        <>
            <Head>
                <title>WorkLink - Empresas</title>
            </Head>

            <Grid
                container 
                columnSpacing={4}
                component='main' 
                sx={{  
                    minHeight:'100vh',
                    alignItems:'center',
                    background:'#f9f6fc',
                }}  
            >
                <Grid
                    item xs={ 12 } md={ 6 }
                    sx={{
                        backgroundImage:"url('https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
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
                    <FormRegisterCompany/>
                </Grid>
            </Grid>
        </>
    )
}

export default RegisteCompany