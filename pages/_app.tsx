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
        <title>GetEnergy</title>
      </Head>
      <div className={satoshi.className}>
        <Component {...pageProps} />
      </div>
    </Layout>
  )
}
