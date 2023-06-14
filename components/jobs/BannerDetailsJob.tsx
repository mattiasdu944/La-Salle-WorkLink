import React from 'react'
import { Avatar, Box, Typography, Button } from '@mui/material';
import { FC } from 'react';
import { Company, Requirements } from '@/interfaces';

interface Props{
    company: Company;
    requirements: Requirements;

    image:      string;
    createdAt:  string;
    title:      string;
    type:       string;
    workingHour:string;
    location    :string;
    salary:     number;

}

export const BannerDetailsJob: FC<Props> = ({ company, createdAt, image, requirements, title, type, salary, workingHour, location }) => {
    return (
        <Box
            sx={{
                backgroundImage:`url(${ image })`,
                backgroundPosition:'center bottom',
                backgroundSize:'cover',
                backgroundColor:'rgba(0,0,0,0.5)',
                backgroundBlendMode:'color',
                backdropFilter:'blur(10px)',
                padding:{ xs:'3rem', md:'3rem 8rem' },
                position:'relative',    
                borderRadius:'1rem',
                minHeight: {xs:'13vh', md:'35vh'},
                mb:'2rem',
                color:'#fff'
            }}
        >
            <Box sx={{ display:'flex', alignItems:'center', gap:2, mb:3 }}>
                <Avatar src={ company?.image } />
                <Box>
                    <Typography>{ company!.name }</Typography>
                    <Typography>{ createdAt }</Typography>
                </Box>
            </Box>
            <Typography variant='h1'>{ title }</Typography>
            <Typography>
                { type } | { requirements.experience } | { workingHour } | { location }
            </Typography>
            <Typography>Sueldo Bruto: { salary }bs</Typography>
            <Button sx={{ mt:3 }}>Postular</Button>
            
        </Box>
    )
}
