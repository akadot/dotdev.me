import type { AppProps } from 'next/app'
import {useContext} from 'react'
import { ThemeProvider, ThemeContext } from 'src/context/ThemeContext'
import Head from 'next/head'
import Menu from '../components/navbar'

import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  const {theme, setTheme} = useContext(ThemeContext);

  function handleTheme(){
    console.log(theme)
    if(theme === 'dark'){
        setTheme('light')
    }else if(theme === 'light'){
        setTheme('dark')
    }
  }

  return (
    <>
      <Head>
        <title>dot</title>
        <meta name="description" content="My personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <section className={`${theme} background`} id="wrapper">
          <Menu handleTheme={handleTheme}/>
          <Component {...pageProps} />
        </section>
      </ThemeProvider>

    </>
  )
}
