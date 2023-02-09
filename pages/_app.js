import '@styles/globals.css'

import Footer from '../components/Footer';
import Header from '../components/Header';
import ShareThis from '../components/ShareThis';

function Application({ Component, pageProps }) {
  return ( 
  <div>
  <Header />
  <Component {...pageProps} />
  <Footer />
  <ShareThis />
  </div>
  );
}

export default Application
