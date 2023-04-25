import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { ThemeProvider } from '@mui/material'
import { SessionProvider } from "next-auth/react"
import { lightTheme } from '../theme/index';
import { AuthProvider } from '@/context/auth';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <SessionProvider>
      <AuthProvider>
        <ThemeProvider theme={ lightTheme }>
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </SessionProvider>
  )
}
