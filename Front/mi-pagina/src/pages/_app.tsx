import Layout from "@/components/layout";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CristianRM</title>
        <meta
          name="description"
          content="Portafolio personal de desarrollo web de CristianRM"
        />
        <link rel="icon" href="/static/logo.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
