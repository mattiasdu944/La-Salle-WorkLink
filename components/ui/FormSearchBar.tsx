import React from 'react'

import { Box, IconButton, InputBase } from '@mui/material'
import { BsSearch } from "react-icons/bs";

export const FormSearchBar = () => {
    return (
        <>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Buscar empleo"
                inputProps={{ 'aria-label': 'search job' }}
            />
            
            <IconButton type="button" aria-label="search">
                <BsSearch size={20}/>
            </IconButton>

        </>
    )
}
