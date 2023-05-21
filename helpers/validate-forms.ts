export interface ValidateRegisterStudent {
    name: string, 
    email: string, 
    password: string, 
    lastname: string, 
    username: string, 
    passwordConfirmation:string
}

export const validateRegisterStudent: (registerForm: ValidateRegisterStudent, setError: any, setIsLoading: any) => void = ( registerForm, setError, setIsLoading ) => {
    const { email, lastname, name, password, passwordConfirmation, username } = registerForm;
    
    if( name.trim() == '' || name.trim().length < 4){
        setError('Ingrese un nombre valido');
        setIsLoading(false);
        return;
    }

    if( lastname.trim() === '' || lastname.trim().length < 4){
        setError('Ingrese un apellido valido')
        setIsLoading(false);
        return;
    }

    if( email.trim() === '' || email.trim().length < 4 || !email.includes('est.ulasalle.edu.bo') ){
        setError('Ingrese una direccion de correo valido')
        setIsLoading(false);
        return;
    }

    if( username.trim().length < 4){
        setError('Nombre de usuario muy corto')
        setIsLoading(false);
        return;
    }
    
    if( password.length < 8 ){
        setError('La contraseña debe tener minimo 8 caracteres')
        setIsLoading(false);
        return;
    }

    if( password.trim() !== passwordConfirmation.trim() ){
        setError('Las contraseñas no coinciden')
        setIsLoading(false);
        return;
    }

    setError(undefined)
};

export interface ValidateRegisterCompany {
    name: string, 
    email: string, 
    password: string, 
    username: string, 
    passwordConfirmation:string
}

export const validateRegisterCompany : (registerForm: ValidateRegisterCompany, setError: any, setIsLoading: any) => void = ( registerForm, setError, setIsLoading ) => {

    const { email, name, password, passwordConfirmation, username } = registerForm;
    
    if( name.trim() == '' || name.trim().length < 4){
        setError('Ingrese un nombre valido');
        setIsLoading(false);
        return;
    }


    if( email.trim() === '' || email.trim().length < 4 ){
        setError('Ingrese una direccion de correo valido')
        setIsLoading(false);
        return;
    }

    if( username.trim().length < 4){
        setError('Nombre de usuario muy corto')
        setIsLoading(false);
        return;
    }
    
    if( password.length < 8 ){
        setError('La contraseña debe tener minimo 8 caracteres')
        setIsLoading(false);
        return;
    }

    if( password.trim() !== passwordConfirmation.trim() ){
        setError('Las contraseñas no coinciden')
        setIsLoading(false);
        return;
    }

    setError(undefined)
}; 


export interface ValidateLogin {
    email: string, 
    password: string, 
}
export const validateLogin: (loginForm: ValidateLogin, setError: any, setIsLoading: any ) => void = (loginForm, setError, setIsLoading) => {
    const { email, password } = loginForm;
    
    if( email.trim() === '' ){
        setError('Ingrese un correo valido')
        setIsLoading(false);
        return;
    }
    if( password.length < 8 ){
        setError('La contraseña debe tener minimo 8 caracteres')
        setIsLoading(false);
        return;
    }
    setError( undefined );
}; 