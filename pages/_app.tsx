import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyle from  '../styles/global';
import PageLayout from '@components/Layout/Page';


function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ThemeProvider>
  )
}

export default MyApp
