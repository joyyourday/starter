
import Link from 'next/link'
import Rating from 'pages/Rating';
import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import styles from '@styles/video-player.module.css';
import Max from 'pages/Max';
import ShareButtons from '@components/ShareButtons';
import Script from 'next/script';





function ANurseToDieFor({ movie }) {
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowAd(true);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleAdClose = () => {
    setShowAd(false);
  };

  if (!movie) {
    return <div className="text-3xl text-red-600 text-center">Loading...</div>;
  }
  useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [ ])
  const scrollSearch = myKey => {
    window.scrollTo(0, 0);
    frontMatter.handleSearch(myKey)
  };
  const [showPopup, setShowPopup] = useState(false);
  
  function togglePopup() {
    setShowPopup(!showPopup);
  }
  const ldJsonData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Movie",
    "name": movie.name,
    "description": movie.synopsis,
    "image": movie.poster,
    "genre": movie.genre,
    "datePublished": movie.yearRelease,
    "director": movie.director,
    "actor": movie.starring,
    "url": movie.link,
    "potentialAction": {
      "@type": "WatchAction",
      "target": [
        {
          "@type": "EntryPoint",
          "name": "A Nurse To Die For (2023)",
          "urlTemplate": "https://moviemxplayer.netlify.app/Hollywood/ANurseToDieFor-2023/ANurseToDieFor"
        },
        {
          "@type": "EntryPoint",
          "name": "A Nurse To Die For (2023)",
          "urlTemplate": "https://moviemxplayer.netlify.app/Hollywood/ANurseToDieFor-2023/NTDSR1"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": movie.rating,
      "bestRating": 10,
      "worstRating": 0,
      "ratingCount": 1
    },
    "author": [
      {
        "@type": "Person",
        "name": "DrTrailer",
        "url": "https://moviemxplayer.netlify.app/DrTrailer.png"
      }
    ],
    "publisher": {
      "@type": "Organization",
      "name": "Movie MX Player",
      "logo": {
        "@type": "ImageObject",
        "url": "https://moviemxplayer.netlify.app/og_image.jpg"
      }
    },
    "additionalProperty": {
      "@type": "PropertyValue",
      "name": "Action Platform",
      "value": [
        "Desktop Web Platform",
        "iOS Platform",
        "Android Platform"
      ]
    }
  });
    
  return (
    <div>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ldJsonData }}
      />
    <Head>
     <title>Watch A Nurse To Die For (2023) Full Movie Online Free | Movie MX Player™</title>
<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<meta name="keywords" content="Movie MX Player,watch free movies,full movie online free,hd movies,movie 2023,latest movie,dubbed movies,free movie download,watch a nurse to die for movie,index of a nurse to die for movie,a nurse to die for movie 2023,a nurse to die for movie online,watch a nurse to die for movie online free,a nurse to die for tv series,a nurse to die for movie download,a nurse to die for movie free download,a nurse to die for movie download" />
<meta property="og:locale" content="en_US" />   

<meta name="robots" content="index, follow" />  
<meta name="revisit-after" content="1 days" />
<meta property="og:site_name" content="Movie MX Player™ | Watch Movies, TV-Series & Sports Live Online Free" />
<meta property="og:type" content="movie" />
<meta property="og:title" content="Watch A Nurse To Die For (2023) | Movie MX Player™" />
<meta property="og:url" content="https://moviemxplayer.netlify.app/Hollywood/ANurseToDieFor-2023/ANurseToDieFor" />
<meta property="og:image" content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681682710/a-nurse-to-die-for-2023_o2lbgk.webp" />
<meta property="og:image:secure_url" content="https://moviemxplayer.netlify.app/" />
<meta property="og:image:width" content="1280" />
<meta property="og:image:height" content="720" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Watch A Nurse To Die For (2023) | Movie MX Player™" />
<meta name="twitter:image" content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681682710/a-nurse-to-die-for-2023_o2lbgk.webp" />
<meta name="description" content="Watch a nurse to die for Full Movie Online on Movie MX Player™, You can also download A Nurse To Die For (2023) in full HD quality to watch later offline." />

<link rel="canonical" href="https://moviemxplayer.netlify.app/Hollywood/ANurseToDieFor-2023/" />

       </Head>
<Script src="../../propler/ads.js" defer />

       <div className="bg-gray-600 shadow ">

     

       <h1 className="flex flex-col text-center py-5 font-bold text-3xl items-center justify-center" style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}>{movie.title} - 2023</h1>
       <div className={styles['iframe-container']}>
      <iframe className="  rounded-3xl  mr-8 flex  border-1 border-blue-600 bg-gray-600 p-2 "
        src={movie['movie.watchP1']}
        width="100%"
        height="500px"
        allowFullScreen
      ></iframe>
           </div>  
           <h3 className="mb-9 text-bg  text-black-500 text-red-600 text-center xl:px-4 ">*Note: Pls Select the in the Player to Change your Language of your Choice and Setting  to Change the Quality of Video.</h3>
<ShareButtons url="https://moviemxplayer.netlify.app" title="Watch Movies, TV-Series & Sports Live Online Free" image="https://moviemxplayer.netlify.app/og_image.jpg" />


       
           <button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
           <a href="../ANurseToDieFor-2023/NTDSR1" >  
      <h2 > Watch {movie.name} (2023) Server 2</h2></a></button>
      <Rating />
      <a href={movie.link} className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 " target="_blank">IMDb Rating: {movie.rating}</a>  
      
      <ul className="flex container flex-col items-center justify-center space-y-3 text-xl font-bold text-center text-white"style={{ textShadow: "0px 0px 2px #000" }}>
        <li>Starring: {movie.starring.join(', ')}</li>
        <li>Year of release: {movie.yearRelease}</li>
        <li>Director: {movie.director}</li>
        <li>Country: {movie.country}</li>
        <li>Genre: {movie.genre}</li>
        <p className="flex container flex-col items-center justify-center space-y-3 text-xl font-bold text-center text-text-white"style={{ textShadow: "0px 0px 2px #000" }}>Synopsis:{movie.synopsis}</p>
      </ul>
     
           <img  src={movie.poster} alt={`Poster for ${movie.title}`} className="mx-auto my-10 rounded-3xl  " />
       
   
      <div className="flex flex-col py-10  text-blue-600 text-center items-center justify-center">

<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 "  onClick={togglePopup} >

        <h2 >Watch Offical Trailer</h2></button>
        </div>
   
        {showPopup && (
        <div className="popup-overlay">
         
         <div className="popup ">
               <button className="close-button" onClick={togglePopup}>
               <h2 className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 " >  Close</h2>  
          </button>
          <h2 className="text-2xl font-bold" >Offical Trailer {movie.name} (2023) </h2>
           <div className={styles['iframe-container']}>
 <iframe className="  rounded-3xl  mr-8 flex  border-1 border-blue-600 bg-gray-600 p-2 " webkitallowFullScreen mozallowFullScreen allowFullScreen  src={movie['movie.trailer']} />
                   
             </div></div>
          </div>
       
      )}

      <style jsx>{`
        .popup-overlay {
          position: relative;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

             .popup {
          width: 800px;
          background-color: gray;
          padding: 10px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          animation: slide-down 0.5s ease;
        }

       
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
  <div className="flex flex-col py-10  text-blue-600 text-center items-center justify-center">
 
 <h3  className="text-2xl font-bold leading-normal mt-0 mb-2 text-blue-600 ">{movie.name} (2023) </h3>
 <a href={movie.download1} >
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
Download 

</button></a>

<h3 className="text-2xl font-bold leading-normal mt-0 mb-2 text-blue-600 ">{movie.name} (2023)</h3>
<a href={movie.download2} >
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
Download 

</button></a>


<Max />

<Link href="../../HollywoodAds"><buton className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0 ">
 
  Back To Hollywood Section

</buton></Link>
 




 </div> 
    </div> </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://moviemxplayer.netlify.app/movies.json');
  const data = await res.json();
  const selectedMovie = data.find(movie => movie.id === 'NTD');
  return {
    props: {
      movie: selectedMovie
    }
  };
}
 
export default ANurseToDieFor;
