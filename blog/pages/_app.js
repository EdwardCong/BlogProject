import "../styles/global.css"
// This page is used to import global css to avoid unintentionally affecting css of other pages 
const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}


// Note: context refers to React context, allows data to pass between components instead of manually passing data through props at every level
// https://reactjs.org/docs/context.html
App.getInitialProps = async ({Component, ctx}) => {
  // return empty object when no initialProps, so that pageProps can use getStaticProps instead
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return Object.keys(pageProps).length > 0 ? {pageProps } : {};
};

export default App