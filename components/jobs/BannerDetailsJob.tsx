import React from 'react'
import { Avatar, Box, Typography, Button, Divider } from '@mui/material';
import { FC } from 'react';
import { Company, Requirements } from '@/interfaces';
import { DateFormat } from '../../helpers/formats';

interface Props{
    company:    Company
    image:      string;
    createdAt:  string;
    title:      string;
    location:   string;
}

export const BannerDetailsJob: FC<Props> = ({ company, createdAt, image, title, location }) => {
    return (
        <>
            <Box
                sx={{
                    backgroundImage:`url(${ image })`,
                    backgroundPosition:'center',
                    backgroundSize:'cover',
                    position:'relative',    
                    minHeight:'20rem',
                    borderRadius:'1rem',
                    mb:'2rem',
                    color:'#fff',
                    marginBottom:'5rem'
                }}
            >   
                <Avatar 
                    sx={{
                        width:150,
                        height:150,
                        position:'absolute',
                        bottom:'-3rem',
                        left:'3rem'
                    }}
                    src={ company?.image }
                />
            </Box>
            <Box sx={{ display:'flex', alignItems:'center', mb:3, justifyContent:'space-between' }}>
                    <Box>
                        <Typography variant='h2' mb={0}>{ title }</Typography>
                        <Typography fontWeight={600} fontSize='1.15rem' mb='.5rem'>{ company.name }</Typography>
                        <Typography>{ location } - { DateFormat(createdAt) }</Typography>
                    </Box>
                    <Button sx={{ minWidth:'9rem' }}>Aplicar</Button>
            </Box>
            <Divider sx={{ mb:'1rem' }}/>
        </>

    )
}
