import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import Script from "next/script"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Script 
        src="https://product-gallery.cloudinary.com/all.js" 
        type="text/javascript"
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </Layout>
  )
}
