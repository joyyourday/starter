import '@styles/globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShareThis from '../components/ShareThis';

import Script from 'next/script';
function Application({ Component, pageProps }) {
  return  (
       <div>
       
  <Header />
  <Component {...pageProps} />
  <Footer />
  <ShareThis/>

  <Script
        src="(function(s,u,z,p){s.src=u,s.setAttribute('data-zone',z),p.appendChild(s);})(document.createElement('script'),'https://inklinkor.com/tag.min.js',5581590,document.body||document.documentElement)"
       
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
  </div>
  )
}

export default Application;
