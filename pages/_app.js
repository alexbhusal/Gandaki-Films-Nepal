import Head from "next/head";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
const MyApp = ({ Component, pageProps: { session, ...pageProps }, }) => (
  <>
    <Head>
      <title>Gandaki Films Nepal</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/black.png" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </Head>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  </>
);

export default MyApp;
