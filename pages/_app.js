import '@styles/globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

function Application({ Component, pageProps }) {
  return  (
       <div>
  <Header />
  <Component {...pageProps} />
  <Footer />
  </div>
  )
}

export default Application;
