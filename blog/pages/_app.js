import "../styles/global.css"
// This page is used to import global css to avoid unintentionally affecting css of other pages 
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}