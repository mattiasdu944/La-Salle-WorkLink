import { FC, FormEvent, useState, useContext } from 'react';
import { AuthContext } from '@/context/auth';
import { validateRegisterCompany } from '@/helpers/validate-forms';

import Link from 'next/link';
import { ErrorMessage } from './';
import { signIn } from 'next-auth/react';

import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx'
import {
    Box, Button, CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Radio, RadioGroup, TextField, Typography
} from '@mui/material'

export const FormRegisterCompany: FC = () => {
    const { registerCompany } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [registerForm, setRegisterForm] = useState(
        {
            name: '',
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            role: 'company'
        }
    );
    const [error, setError] = useState<string>();


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        
        validateRegisterCompany(registerForm, setError, setIsLoading);


        if (error != undefined) {
            return;
        }


        const { email, name, password, username, role } = registerForm;
        const { hasError, message } = await registerCompany(email, password, name, username, role);

        if (hasError) {
            setError(message);
            setIsLoading(false);
            return;
        }

        await signIn('credentials', { email, password });
        setIsLoading(false);
    }


    return (
        <>
            <Box
                component='form'
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    background: '#fff',
                    maxWidth: '500px',
                    boxShadow: '0px 10px 15px rgba(0,0,0,.05)',
                    padding: { xs: '2rem', md: '3rem 5rem' },
                    borderRadius: '.5rem'
                }}
            >
                <Typography variant='h1' textAlign='center'>Registra tu empresa</Typography>
                <Typography textAlign='center' mb='2rem'>Toma el siguiente paso y empieza en un nuevo mundo</Typography>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <TextField
                    type='text'
                    label="Nombre de tu empresa"
                    name='name'
                    variant="outlined"
                    sx={{ width: '100%', mb: '1rem' }}
                    value={registerForm.name}
                    onChange={(e) => setRegisterForm({ ...registerForm, [e.target.name]: e.target.value })}
                />
                <TextField
                    type='email'
                    label="Correo Electronico"
                    name='email'
                    variant="outlined"
                    sx={{ width: '100%', mb: '1rem' }}
                    value={registerForm.email}
                    onChange={(e) => setRegisterForm({ ...registerForm, [e.target.name]: e.target.value })}
                />
                <TextField
                    type='text'
                    label="Nombre de usuario"
                    name='username'
                    variant="outlined"
                    sx={{ width: '100%', mb: '1rem' }}
                    value={registerForm.username}
                    onChange={(e) => setRegisterForm({ ...registerForm, [e.target.name]: e.target.value })}
                />

                <FormControl sx={{ width: '100%', mb: '1rem' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                        Contraseña
                    </InputLabel>
                    <OutlinedInput
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                    edge="end"
                                >
                                    {showPassword ? <RxEyeClosed /> : <RxEyeOpen />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                        name='password'
                        value={registerForm.password}
                        onChange={(e) => setRegisterForm({ ...registerForm, [e.target.name]: e.target.value })}
                    />
                </FormControl>

                <FormControl sx={{ width: '100%', mb: '1rem' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                        Confirmar contraseña
                    </InputLabel>
                    <OutlinedInput
                        type={showPassword ? 'text' : 'password'}
                        label="Password"
                        name='passwordConfirmation'
                        value={registerForm.passwordConfirmation}
                        onChange={(e) => setRegisterForm({ ...registerForm, [e.target.name]: e.target.value })}
                    />
                </FormControl>

                <Button type='submit' sx={{ mb: '1rem', width: '100%' }} variant="contained">
                    {
                        isLoading
                            ? (
                                <CircularProgress sx={{ color: '#fff' }} size={20} thickness={2} />
                            )
                            : (
                                <Typography>
                                    Crear cuenta
                                </Typography>
                            )
                    }
                </Button>

                <Link href='/auth/login'>
                    <Typography>
                        Ya tienes cuenta? Inicia Sesion.
                    </Typography>
                </Link>
            </Box>
        </>
    )
}
