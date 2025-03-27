import Head from "next/head";
import "../styles/globals.css";
const MyApp = ({ Component, pageProps: { session, ...pageProps }, }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/black.png" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css"/>
      <title>Gnadaki Films Nepal | Professional Film Production Services in Nepal</title>
      <meta name="description" content="Gnadaki Films Nepal is a leading film production company based in Nepal, offering professional video production, cinematography, and filmmaking services. Specializing in Nepali movies, documentaries, and commercials.">
      <meta name="keywords" content="Gnadaki Films Nepal, film production Nepal, Nepali movie production, Kathmandu film industry, filmmaking services Nepal, professional video production, Nepali cinematography">
      <meta name="robots" content="index, follow">
      <link rel="canonical" href="https://www.gnadakifilmsnepal.com">
    </Head>
      <Component {...pageProps} />
  </>
);

export default MyApp;
