import type { AppProps } from 'next/app'
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
