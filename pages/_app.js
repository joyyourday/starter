import '@styles/globals.css';
import Footer from '../components/Footer';
import Hamburger from '../components/Hamburger';
import { PageTransition } from "../components/PageTransition";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";
import Script from 'next/script';
import Maintenance from './maintenance';

function Application({ Component, pageProps, isMaintenanceMode }) {
  if (isMaintenanceMode) {
    return <Maintenance />;
  }

  return ( 
    <>
     <Layout>
     <div className="center">
        <GoogleAnalytics measurementId="G-ZJENMJCGDP" />
        <Script async data-id="101405651" src="//static.getclicky.com/js"></Script>
        <PageTransition>  
          <Hamburger />
          <Component {...pageProps} />
          <Footer />
        </PageTransition>

     </div>
     </Layout>
     
   </>
  );
}



Application.getInitialProps = async (appContext) => {
  const isMaintenanceMode = process.env.REACT_APP_MAINTENANCE_MODE === "true";
  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext);
  }
  return { pageProps, isMaintenanceMode };
};



export default Application;
