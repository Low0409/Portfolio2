import 'tailwindcss/tailwind.css'

import Head from 'next/head'
import Header from '../components/header'
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

      <main className="py-14">
        <Component {...pageProps} />

      </main>
    </Auth0Provider>
    <h1>最終更新2022/01/10</h1>
    </>
  )
}
