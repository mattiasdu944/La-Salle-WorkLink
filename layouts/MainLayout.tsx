import { FC, useState } from 'react'
import Head from 'next/head'

import { AppBarMenu, SideMenu } from '@/components';
import { Box, Container } from '@mui/material';


interface Props{
    title: string;
    description: string;
    children: JSX.Element[] | JSX.Element;
}

export const MainLayout: FC<Props> = ({ children, description, title }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <Head>
                <meta name="description" content={ description } />
                <title>{ title }</title>
            </Head>

            <AppBarMenu isMenuOpen={isMenuOpen} setIsMenuOpen={ setIsMenuOpen }/>

            <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={ setIsMenuOpen }/>
            
            <Box
                sx={{
                    padding:'5rem 0',
                    minHeight:'100vh',
                }}
            >
                <Container>
                    { children }
                </Container>
            </Box>
        
        </>
    )
}
