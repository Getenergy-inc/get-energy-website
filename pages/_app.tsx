import type { AppProps } from "next/app";
import Layout from "@/components/_layout";
import localFont from "next/font/local";
import Head from "next/head";
import { assets } from "@/constants";
import "@/styles/globals.css";

export const satoshi = localFont({
  src: "../assets/fonts/Satoshi-Variable.ttf",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>GetEnergy - Energy Products & Services</title>
        <meta
          name="description"
          content="Discover sustainable energy solutions and products at your convenience which includes energy equipments, commodities and services"
        />
        <meta
          name="keywords"
          content="get energy, getEnergy, energy products, renewable energy, solar power, wind power, energy efficiency, sustainability, energy consulting, clean energy, Energy Management."
        />
        <link rel="canonical" href="https://getenergy.ng" key="canonical" />

        <meta property="og:title" content="GetEnergy - Energy Products & Services" />
        <meta
          property="og:description"
          content="Discover sustainable energy solutions and products at your convenience which includes energy equipments, commodities and services"
        />
        <meta property="og:url" content="https://getenergy.ng" />
        <meta property="og:type" content="website" />

        <meta property="og:image" content="opengraph-image.jpeg" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className={satoshi.className}>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}
