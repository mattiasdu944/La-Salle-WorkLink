import { FC, useState, FormEvent, useEffect } from 'react';
import { signIn } from 'next-auth/react';

import { ErrorMessage } from './';
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx'
import { 
    Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography 
} from '@mui/material'
import { useRouter } from 'next/router';

export const FormLogin:FC = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [loginForm, setLoginForm] = useState({ email:'', password:'' });
    const [error, setError] = useState<string>()
    const { query }  = useRouter();

    const handleSubmit = async ( e: FormEvent ) => {
        e.preventDefault();
        
        if( loginForm.email.trim() === '' ){
            setError('Ingrese un correo valido')
            return;
        }
        if( loginForm.password.length < 8 ){
            setError('La contraseña debe tener minimo 8 caracteres')
            return;
        }
        setError( undefined );

        await signIn('credentials', { email: loginForm.email, password: loginForm.password });
    }

    useEffect(() => {
        if( query.error ){
            setError('Error en las credenciales')
            return;
        }
    }, [])
    


    return (
        <>
            <Typography variant='h1' textAlign='center'>Inicia Sesion</Typography>
            <Typography textAlign='center' mb='4rem'>Toma el siguiente paso y empieza en un nuevo mundo</Typography>

            <Box component='form' onSubmit={ handleSubmit } sx={{ width:'100%' }}>
                { error && <ErrorMessage>{ error }</ErrorMessage> }
                
                <TextField 
                    type='email'
                    name='email'
                    label="Ingresa tu correo" 
                    variant="outlined" 
                    sx={{ width:'100%', mb:'1.5rem' }}
                    value={ loginForm.email }
                    onChange={ (e) => setLoginForm({...loginForm, [e.target.name]:e.target.value }) }
                />

                <FormControl sx={{ width: '100%', mb:'1.5rem' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        type={showPassword ? 'text' : 'password'}
                        name='password'
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
                        value={ loginForm.password }
                        onChange={ (e) => setLoginForm({...loginForm, [e.target.name]:e.target.value }) }
                    />
                </FormControl>

                <Button type='submit' sx={{ mb:'1rem' }} variant="contained">
                    Iniciar sesion
                </Button>
                <Typography mb='1rem' textAlign='center'>o</Typography>

                <Button type='submit' variant="outlined">
                    Iniciar con Google
                </Button>
            </Box>      
        </>
    )
}
