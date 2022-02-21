import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="app">
      <Head>
        <title>Qian Wan</title>
      </Head>
      <Header />
      <main className="content fade-in">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
