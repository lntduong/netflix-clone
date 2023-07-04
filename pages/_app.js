import { AuthProvider } from '@/hooks/useAuth';
import '@/styles/globals.css'
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecoilRoot>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </RecoilRoot>
    </>
  )
}