import { FC } from 'react'

import { Box, Typography } from '@mui/material'
import { IoConstructOutline } from "react-icons/io5";

export const Maintenance: FC = () => {
    return (
        <>
            <Box sx={{ height:'100%', color:'secondary.main', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
                <Typography variant='h1'>Página en construcción</Typography>
                <IoConstructOutline fontSize='5rem'/>
            </Box>
        
        </>
    )
}
