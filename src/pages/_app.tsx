import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

import Head from "next/head";
import Menu from "../components/Navbar";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

import GlobalStyles from "src/styles/globals";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    console.log(theme);
    setTheme(theme.title === "dark" ? light : dark);
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
