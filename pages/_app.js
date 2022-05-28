import Head from "next/head";
import Nav from "../components/Nav";
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head />
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
