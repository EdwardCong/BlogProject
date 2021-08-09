import "../styles/global.css"
import { AppProps } from "next/app"

// This page is used to import global css to avoid unintentionally affecting css of other pages 
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App