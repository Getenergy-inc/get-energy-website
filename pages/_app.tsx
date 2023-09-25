import type { AppProps } from 'next/app';
import Layout from '@/components/_layout';
import localFont from 'next/font/local';
import Head from 'next/head';
import { assets } from '@/constants';
import '@/styles/globals.css';

const satoshi = localFont({
  src: [
    {
      path: '../assets/fonts/Satoshi-Light.otf',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Satoshi-Medium.otf',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Satoshi-Regular.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Satoshi-Bold.otf',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Satoshi-Black.otf',
      weight: '900',
      style: 'normal'
    }
  ]
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>GetEnergy - Energy Products & Services</title>
        <meta name="description" content="Discover sustainable energy solutions and products at your convenience which includes energy equipments, commodities and services" />
        <meta name="keywords" content="get energy, getEnergy, energy products, renewable energy, solar power, wind power, energy efficiency, sustainability, energy consulting, clean energy, Energy Management." /> 
        <link
          rel="canonical"
          href="https://getenergy.ng"
          key="canonical"
        />

        <meta property="og:title" content="GetEnergy - Energy Products & Services" />
        <meta property="og:description" content="Discover sustainable energy solutions and products at your convenience which includes energy equipments, commodities and services" />
        <meta property="og:url" content="https://getenergy.ng" />
        <meta property="og:type" content="website" />
      </Head>
      <div className={satoshi.className}>
        <Component {...pageProps} />
      </div>
    </Layout>
  )
}
