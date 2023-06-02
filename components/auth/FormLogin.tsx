import { FC, useState, FormEvent, useEffect } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

import { ErrorMessage } from './';
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx'
import { 
    Box, Button, CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography 
} from '@mui/material'
import { validateLogin } from '@/helpers/validate-forms';

export const FormLogin:FC = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [loginForm, setLoginForm] = useState({ email:'', password:'' });
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string>()
    const { query }  = useRouter();

    const handleSubmit = async ( e: FormEvent ) => {
        e.preventDefault();
        setIsLoading(true);
        
        validateLogin(loginForm, setError, setIsLoading);
        
        if( error != undefined ){
            return;
        }
        
        await signIn('credentials', { email: loginForm.email, password: loginForm.password });
        setIsLoading(false);
    }

    useEffect(() => {
        if( query.error ){
            setError('Error en las credenciales')
            return;
        }
    }, [])
    


    return (
        <>
            <Box 
                component='form' 
                onSubmit={ handleSubmit }
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    background:'#fff',
                    maxWidth: '500px',
                    border:'1px solid rgba(0,0,0,0.08)',
                    boxShadow:'0px 10px 15px rgba(0,0,0,.05)',
                    padding: { xs:'4rem 2rem', md:'5rem' },
                    borderRadius: '.5rem'
                }}
            >
                { error && <ErrorMessage>{ error }</ErrorMessage> }
                <Typography variant='h1' textAlign='center'>Inicia Sesion</Typography>
                <Typography textAlign='center' mb='4rem'>Toma el siguiente paso y empieza en un nuevo mundo</Typography>
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

                <Button type='submit' sx={{ mb:'1rem', width:'100%' }} variant="contained">
                {
                    isLoading
                    ?(
                        <CircularProgress sx={{ color:'#fff' }} size={20} thickness={2}/>
                    )
                    :(
                        <Typography>
                            Iniciar Sesion
                        </Typography>
                    )
                }
                </Button>

                <Link href='/auth/register'>
                    <Typography>
                        No tienes cuenta? Registrate.
                    </Typography>
                </Link>
            </Box>      
        </>
    )
}
