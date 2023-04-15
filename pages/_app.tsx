import '@/styles/globals.css'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { lightTheme } from '../theme/index';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ThemeProvider theme={ lightTheme }>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
