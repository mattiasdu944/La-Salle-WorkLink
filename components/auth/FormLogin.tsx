import { FC, useState } from 'react'

import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx'

export const FormLogin:FC = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <Typography variant='h1' textAlign='center'>Inicia Sesion</Typography>
            <Typography textAlign='center' mb='4rem'>Toma el siguiente paso y empieza en un nuevo mundo</Typography>

            <Box component='form' sx={{ width:'100%' }}>
                <TextField 
                    type='email'
                    id="outlined-basic" 
                    label="Ingresa tu correo" 
                    variant="outlined" 
                    sx={{ width:'100%', mb:'1.5rem' }}
                />


                <FormControl sx={{ width: '100%', mb:'1.5rem' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={ () => setShowPassword(!showPassword) }
                            edge="end"
                        >
                            {showPassword ? <RxEyeClosed /> : <RxEyeOpen />}
                        </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                    />
                </FormControl>

                <Button type='submit' sx={{ mb:'1rem' }} variant="contained">Contained</Button>
                <Typography mb='1rem' textAlign='center'>o</Typography>

                <Button type='submit' variant="outlined">
                    Iniciar con Google
                </Button>
            </Box>      
        </>
    )
}
