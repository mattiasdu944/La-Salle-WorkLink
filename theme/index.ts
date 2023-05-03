import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    typography: {
        fontFamily: [
            'Poppins',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },

    palette: {
        mode: 'light',
        primary: {
            main: '#FD1339'
        },
        secondary: {
            main: '#504DFC'
        },
        info: {
            main: '#fff'
        }
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
                // position: 'fixed',
            },
            styleOverrides: {
                root: {
                    color:'#000',
                    backgroundColor: 'white',
                    boxShadow: '0px 0px 5px rgba(0,0,0,0.3)',

                    // height: 60
                },
            }
        },

        MuiTypography: {
            styleOverrides: {
                root:{
                    lineHeight: 1.4
                },
                h1: {
                    fontSize: 40,
                    fontWeight: 700,
                    
                },
                h2: {
                    fontSize: 30,
                    fontWeight: 700,
                    '@media(min-width: 780px)' : {
                        fontSize: 36,
                    }
                },
                subtitle1: {
                    fontSize: 20,
                    fontWeight: 600
                }
            }
        },


        MuiButton: {
            defaultProps: {
                variant: 'contained',
                size: 'medium',
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: 15,
                    padding: '.75rem 2rem'
                }
            }
        },


        MuiCard: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
                    borderRadius: '10px',
                }
            }
        },

        MuiContainer:{
            
            styleOverrides:{
                root:{
                    width: '95%',
                    '@media(min-width: 780px)' : {
                        width: '90%'
                    }
                }
            }
        }

    }
});