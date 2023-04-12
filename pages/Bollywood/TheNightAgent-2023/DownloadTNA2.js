
import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import Max from 'pages/Max';
import ShareButtons from '@components/ShareButtons';





function DownloadTNA2({ movie }) {
  

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
  const schemaData   = {
    "@context": "https://schema.org",
    
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://moviemxplayer.netlify.app/Bollywood/TheNightAgent-2023/TheNightAgent"
      
    },
    "headline": "The Night Agent (2023) Full Movie Online Free | Movie Mx Player™",
    "image": "https://moviemxplayer.netlify.app/the-night-agent-2023.webp",
  
    "datePublished": '2023-01-01T09:00:00.000Z',
    "dateModified": '2023-01-01T09:00:00.000Z',
    "author": [{
        "@type": "Person",
        "name": "DrTrailer",
        "url": "https://moviemxplayer.netlify.app/DrTrailer.webp"
      }],
    
    "publisher": {
        "@type": "Organization",
        "name": "Movie Mx Player",
        "logo": {
          "@type": "ImageObject",
          "url": "https://moviemxplayer.netlify.app/og_image.jpg"
        }
      },
    "description": "Movie Mx Player™ The Night Agent (2023) Full Movie Online Free | Watch Movies, TV-Series & Sports Live Online Free"
  
  };
  return (
    <div>
        <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
  />
    <Head>
     <title>Watch {movie.name} (2023) Full Movie Online Free | Movie Mx Player™</title>
<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<meta name="keywords" content="Movie Mx Player,watch free movies,full movie online free,hd movies,movie 2023,latest movie,dubbed movies,free movie download,watch the night agent movie,index of the night agent movie,the night agent movie 2023,the night agent movie online,watch the night agent movie online free,the night agent tv series,the night agent movie download,the night agent movie free download,the night agent movie download" />
<meta property="og:locale" content="en_US" />   

<meta name="robots" content="index, follow" />  
<meta name="revisit-after" content="1 days" />
<meta property="og:site_name" content="Movie Mx Player™ | Watch Movies, TV-Series & Sports Live Online Free" />
<meta property="og:type" content="movie" />
<meta property="og:title" content="Watch The Night Agent (2023) | Movie Mx Player™" />
<meta property="og:url" content="https://moviemxplayer.netlify.app/Bollywood/TheNightAgent-2023/TheNightAgent" />
<meta property="og:image" content="https://moviemxplayer.netlify.app/the-night-agent-2023.webp" />
<meta property="og:image:secure_url" content="https://moviemxplayer.netlify.app/" />
<meta property="og:image:width" content="1280" />
<meta property="og:image:height" content="720" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Watch The Night Agent (2023) | Movie Mx Player™" />
<meta name="twitter:image" content="https://moviemxplayer.netlify.app/the-night-agent-2023.webp" />
<meta name="description" content="Watch The Night Agent Full Movie Online on Movie Mx Player™, You can also download The Night Agent (2023) in full HD quality to watch later offline." />
<script src="../../propler/ads.js" defer></script> 
<link rel="canonical" href="https://moviemxplayer.netlify.app/Bollywood/TheNightAgent-2023/" />
       </Head>

       <div className="bg-gray-600 shadow ">



     
  <div className="flex flex-col items-center  justify-center space-y-12">
<ShareButtons url="https://moviemxplayer.netlify.app" title="Watch Movies, TV-Series & Sports Live Online Free" image="https://moviemxplayer.netlify.app/og_image.jpg" />
  <img src={movie.poster} alt={`Poster for ${movie.title}`} loading="lazy" className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl blur-invert drop-shadowrounded-3xl" />
  <h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
     DOWNLOAD {movie.title} (2023) </h2>
  
  
    
 
<a href={movie.down2link1} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>

<h2 className="text-blue-500 text-3xl title-font  mb-3 font-bold md:text-3xl">
Thank you for Dowloading and Enjoy. </h2>
<h2 className="text-blue-500 text-3xl title-font  mb-3 font-bold md:text-3xl ">
Please Share the Link.</h2>
<Max />



<a href="../../Bollywood/TheNightAgent-2023/TNASR1" >
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0  ">
  Back

</button></a>
 




 </div> 
    </div> </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://moviemxplayer.netlify.app/movies.json');

  const data = await res.json();
  const selectedMovie = data.find(movie => movie.id === 'TNA');
  return {
    props: {
      movie: selectedMovie
    }
  };
}
 
export default DownloadTNA2;
