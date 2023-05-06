import { Box } from '@mui/material'
import React from 'react'
import { FC } from 'react';

interface Props{
    children: JSX.Element;
}

export const RedSocialButtonOutlined: FC<Props> = ({ children }) => {
    return (
        <Box sx={{
            border:'2px #777 solid',
            color:'#777',
            borderRadius:'50%',
            padding:'.25rem',
            fontSize:'1.25rem',
            display:'flex',
            justifyContent:'center',
            alignContent:'center',
            ':hover':{
                color:'primary.main',
                borderColor:'primary.main',
                transition:'all .3s'
            }
        }}>
            { children }
        </Box>   
    )
}
