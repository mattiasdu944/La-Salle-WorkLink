import { FC } from 'react';

import { Avatar, Box, Typography } from '@mui/material';
import { GoCommentDiscussion } from 'react-icons/go';
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';
import { IVacant } from '@/interfaces';

interface Props{
    vacant: IVacant
}

export const JobPost:FC<Props> = ({ vacant }) => {
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
                    mb:2
                }}
            >
                <Avatar alt={ vacant.company!.name } src={ vacant.company!.image } />
                <Box>
                    <Typography variant='subtitle1' mb={ 0 }>
                        { vacant.title }
                    </Typography>
                    <Typography>{ vacant.company!.username }</Typography>
                </Box>

            </Box>
            <Box>
                <Typography 
                    sx={{
                        textAlign:'justify',
                        display: '-webkit-box',
                        WebkitLineClamp:3,
                        '-webkit-box-orient': 'vertical',
                        overflow:'hidden',
                        textOverflow:'ellipsis',
                        mb:3
                    }}
                >
                    { vacant.description }
                </Typography>
                <Box
                    component='img'
                    width='100%'
                    sx={{ borderRadius:'1rem' }}
                    src={ vacant.image }
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
