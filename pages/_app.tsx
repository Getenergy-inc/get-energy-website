import type { AppProps } from 'next/app';
import Layout from '@/components/_layout';
import '@/styles/globals.css';
import localFont from 'next/font/local';

const satoshi = localFont({ src: '../assets/fonts/Satoshi-Regular.otf' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className={satoshi.className}>
        <Component {...pageProps} />
      </div>
    </Layout>
  )
}
