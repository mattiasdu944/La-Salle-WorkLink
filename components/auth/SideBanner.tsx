import { FC } from 'react'
import Link from 'next/link'

import { Box, Button, Container, Typography } from '@mui/material'


interface Props{
    message     : string;
    textButton  : string;
    link        : string;
}

export const SideBanner: FC<Props> = ({ link, message, textButton }) => {
    return (
        <Box sx={{
            height: '100%',
            width: '100%',
            borderRadius: '1rem',
            background:' linear-gradient(153deg, rgba(80,77,252,1) 0%, rgba(253,19,57,1) 100%)',
        }}>
            <Container sx={{ padding: '2rem', height:'100%', display:'flex', justifyContent:'end', flexDirection:'column' }}>
                <Typography variant='h2' sx={{ color:'info.main', mb:'1rem' }}>
                    Manténgase actualizado en su red
                </Typography>

                <Box sx={{
                    background:'rgba(0,0,0,.3)',
                    padding: '1.5rem',
                    color: 'info.main',
                    borderRadius:'1rem',
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: { xs:'column', md:'row' }
                }}>
                    <Typography>{ message }</Typography>
                    <Link href={ link }>
                        <Button>
                                { textButton }
                        </Button>
                    </Link>
                </Box>
            </Container>
        </Box>
    )
}
