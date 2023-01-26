import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

import Head from "next/head";
import Menu from "../components/Navbar";

import themesScheme from "../styles/themes/themes";

import GlobalStyles from "src/styles/globals";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(themesScheme["home"]);

  const toggleTheme = (themeName: string) => {
    let selected = (themesScheme as any)[themeName];

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
        <Menu toggleTheme={toggleTheme} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
