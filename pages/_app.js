/* eslint-disable @next/next/no-page-custom-font */
import { ThemeProvider } from "styled-components";
import  {GlobalStyle, theme } from "../styles/global";
import { Helmet } from "react-helmet";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <meta name="facebook-domain-verification" content="8zs585g7z8634upvdctyplyk3g5w5l" />
      </Helmet>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
