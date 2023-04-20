import { FC, FormEvent, useState } from 'react'

import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx'
import { ErrorMessage } from './';

export const FormRegister: FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loginForm, setLoginForm] = useState({ name:'', lastname:'', username:'', email:'', password:'', passwordConfirmation:'' });
    const [error, setError] = useState<string>()

    const handleSubmit = ( e: FormEvent ) => {
        e.preventDefault();

        if( loginForm.name.trim() == '' || loginForm.name.trim().length < 4){
            setError('Ingrese un nombre valido');
            return;
        }

        if( loginForm.lastname.trim() === '' || loginForm.lastname.trim().length < 4){
            setError('Ingrese un apellido valido')
            return;
        }

        if( loginForm.email.trim() === '' || loginForm.lastname.trim().length < 4){
            setError('Ingrese una direccion de correo valido')
            return;
        }

        if( loginForm.username.trim().length < 4){
            setError('Nombre de usuario muy corto')
            return;
        }
        
        if( loginForm.password.length < 8 ){
            setError('La contraseña debe tener minimo 8 caracteres')
            return;
        }

        if( loginForm.password.trim() !== loginForm.passwordConfirmation.trim() ){
            setError('Las contraseñas no coinciden')
            return;
        }
        setError( undefined );

    }


    return (
        <>
            <Typography variant='h1' textAlign='center'>Registrate</Typography>
            <Typography textAlign='center' mb='2rem'>Toma el siguiente paso y empieza en un nuevo mundo</Typography>

            <Box component='form' onSubmit={ handleSubmit } sx={{ width:'90%' }}>
                { error && <ErrorMessage>{ error }</ErrorMessage> }
                <TextField 
                    type='text'
                    label="Nombres"
                    name='name'
                    variant="outlined" 
                    sx={{ width:'100%', mb:'1rem' }}
                    value={ loginForm.name }
                    onChange={ (e) => setLoginForm({...loginForm, [e.target.name]:e.target.value }) }
                />
                <TextField 
                    type='text'
                    label="Apellidos" 
                    name='lastname'
                    variant="outlined" 
                    sx={{ width:'100%', mb:'1rem' }}
                    value={ loginForm.lastname }
                    onChange={ (e) => setLoginForm({...loginForm, [e.target.name]:e.target.value }) }
                />
                <TextField 
                    type='text' 
                    label="Nombre de usuario" 
                    name='username'
                    variant="outlined" 
                    sx={{ width:'100%', mb:'1rem' }}
                    value={ loginForm.username }
                    onChange={ (e) => setLoginForm({...loginForm, [e.target.name]:e.target.value }) }
                />
                <TextField 
                    type='email'
                    label="Correo Electronico" 
                    name='email'
                    variant="outlined" 
                    sx={{ width:'100%', mb:'1rem' }}
                    value={ loginForm.email }
                    onChange={ (e) => setLoginForm({...loginForm, [e.target.name]:e.target.value }) }
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
                        name='password'
                        value={ loginForm.password }
                        onChange={ (e) => setLoginForm({...loginForm, [e.target.name]:e.target.value }) }
                    />
                </FormControl>

                <FormControl sx={{ width: '100%', mb:'1rem' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                        Confirmar contraseña
                    </InputLabel>
                    <OutlinedInput
                        type={showPassword ? 'text' : 'password'}
                        label="Password"
                        name='passwordConfirmation'
                        value={ loginForm.passwordConfirmation }
                        onChange={ (e) => setLoginForm({...loginForm, [e.target.name]:e.target.value }) }
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
