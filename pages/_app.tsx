import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyle from  '../styles/global';
import PageLayout from '@components/Layout/Page';
import { AuthProvider } from '@contexts/AuthContext';


function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
