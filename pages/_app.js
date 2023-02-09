import '@styles/globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShareThis from '../components/ShareThis';


function Application() {
  return  (
       <div>
       
  <Header />
  <Component {...pageProps} />
  <Footer />
  <ShareThis/>
  
  </div>
  )
}

export default Application;
