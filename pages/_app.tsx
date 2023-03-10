import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactNode } from 'react'
import { Provider, createClient } from 'urql'
import enviorments from "../config/enviorments"

const base = enviorments.baseUrl

const client = createClient({
  url: base
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )

}
