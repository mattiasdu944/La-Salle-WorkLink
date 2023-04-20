import React, { FC } from 'react'

import { Typography } from '@mui/material'

interface Props{
    children: string;
}
export const ErrorMessage: FC<Props> = ({ children }) => {
    return (
        <Typography sx={{ textAlign:'center', mb:'1rem', color:'red' }}>
            { children }
        </Typography>
    )
}
