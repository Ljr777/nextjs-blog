import "../styles/global.css";
//only styles imported here will be available globally
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
