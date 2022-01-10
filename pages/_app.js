import 'tailwindcss/tailwind.css'

import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/Footer'
import { Auth0Provider } from '@auth0/auth0-react'

export default function MyApp({ Component, pageProps }) {

  return (
    <>
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Portfolio</title>
      </Head>

      <Header />

      <main className="pt-14">
        <Component {...pageProps} />
      </main>
      <Footer/>
    </Auth0Provider>
    </>
  )
}
