import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'src/context/ThemeContext'
import Menu from '../components/navbar'

import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>dot</title>
        <meta name="description" content="My personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <section>
          <Menu/>
          <Component {...pageProps} />
        </section>
      </ThemeProvider>

    </>
  )
}
