import NextThemeProvider from '../ThemeProvider';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <NextThemeProvider>
      <Component {...pageProps} />
      </NextThemeProvider>
    </>
  );
}

export default MyApp;
