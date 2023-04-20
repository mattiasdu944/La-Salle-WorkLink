import { FC, useState } from 'react'

import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx'

export const FormRegister = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <Typography variant='h1' textAlign='center'>Registrate</Typography>
            <Typography textAlign='center' mb='2rem'>Toma el siguiente paso y empieza en un nuevo mundo</Typography>

            <Box component='form' sx={{ width:'90%' }}>

                <TextField 
                    type='text'
                    label="Nombres" 
                    variant="outlined" 
                    sx={{ width:'100%', mb:'1rem' }}
                />
                <TextField 
                    type='text'
                    label="Apellidos" 
                    variant="outlined" 
                    sx={{ width:'100%', mb:'1rem' }}
                />
                <TextField 
                    type='text' 
                    label="Nombre de usuario" 
                    variant="outlined" 
                    sx={{ width:'100%', mb:'1rem' }}
                />
                <TextField 
                    type='email'
                    label="Correo Electronico" 
                    variant="outlined" 
                    sx={{ width:'100%', mb:'1rem' }}
                />

                <FormControl sx={{ width: '100%', mb:'1rem' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                        Contraseña
                    </InputLabel>
                    <OutlinedInput
                   
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

                <FormControl sx={{ width: '100%', mb:'1rem' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                        Confirmar contraseña
                    </InputLabel>
                    <OutlinedInput
                        type={showPassword ? 'text' : 'password'}
                
                        label="Password"
                    />
                </FormControl>

                <Button type='submit' sx={{ mb:'1rem' }} variant="contained">
                    Crear cuenta
                </Button>
                <Typography mb='1rem' textAlign='center'>o</Typography>

                <Button type='submit' variant="outlined">
                    Registrarse con Google
                </Button>
            </Box>      
        </>
    )
}
