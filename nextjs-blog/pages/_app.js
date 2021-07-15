import '../styles/global.css' // global css can only be imported here, we don't want to unintentionally affect other pages

export default function App ({Component, pageProps}) {
  return <Component {...pageProps} />
}