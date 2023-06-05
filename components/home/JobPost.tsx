import { FC } from 'react';

import { Avatar, Box, Typography } from '@mui/material';
import { GoCommentDiscussion } from 'react-icons/go';
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';

export const JobPost:FC = () => {
    return (
        <Box
            sx={{
                padding:'2rem',
                border:'1px solid rgba(0,0,0,0.1)',
                borderRadius:'1rem',
                mb:'3rem'
            }}
        >
            <Box 
                sx={{
                    display:'flex',
                    alignItems:'center',
                    gap:'1rem',
                    mb:3 
                }}
            >
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <Box>
                    <Typography variant='subtitle1' mb={ 0 }>
                        Nombre del usuario
                    </Typography>
                    <Typography>Carrera de usuario</Typography>
                </Box>

            </Box>
            <Box>
                <Typography mb={ 2 }>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt doloribus fuga, facere veritatis nesciunt, iste provident sed iusto eaque nulla, eum quasi! Dolore, neque. Eos, soluta! Aspernatur vero autem non?
                </Typography>
                <Box
                    component='img'
                    width='100%'
                    sx={{ borderRadius:'1rem' }}
                    src='https://images.pexels.com/photos/5711267/pexels-photo-5711267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                />
            </Box>
            <Box
                sx={{
                    display:'flex',
                    alignItems:'center',
                    gap:'2rem',
                    mt:'1rem'
                }}
            >
                <Box
                    sx={{
                        display:'flex',
                        alignItems:'center',
                        color:'text.primary',
                        gap:'.5rem'

                    }}
                >
                    <GoCommentDiscussion size='1.5rem'/>
                    <Typography>23</Typography>
                </Box>
                <Box
                    sx={{
                        display:'flex',
                        alignItems:'center',
                        color:'text.primary',
                        gap:'.5rem'
                        
                    }}
                >
                    <AiOutlineHeart size='1.5rem'/>
                    <Typography>23</Typography>
                </Box>
                <Box
                    sx={{
                        display:'flex',
                        alignItems:'center',
                        color:'text.primary',
                        gap:'.5rem'
                    }}
                >
                    <AiOutlineShareAlt size='1.5rem'/>
                    <Typography>23</Typography>
                </Box>
            </Box>
        </Box>
    )
}
