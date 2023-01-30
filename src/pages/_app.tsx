import type { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "styled-components";
import { useState } from "react";

import Header from "../components/Navbar";

import themesScheme from "../styles/themes/themes";

import GlobalStyles from "src/styles/globals";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(themesScheme["home"]);

  const handleTheme = (theme_name: string) => {
    let selected = (themesScheme as any)[theme_name];
    setTheme(selected);
  };

  return (
    <>
      <Head>
        <title>dot</title>
        <meta name="description" content="My personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header handleTheme={handleTheme} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
