
import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import Max from 'pages/Max';
import ShareButtons from '@components/ShareButtons';
import Script from 'next/script';





function DownloadGTF1({ movie }) {
  

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
    "@type": "TVSeries",
    name: movie.name,
    description: movie.synopsis,
    image: movie.poster,
    genre: movie.genre,
    datePublished: movie.yearRelease,
    director: movie.director,
    actor: movie.starring,
    url: movie.link,
    
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: movie.rating,
      bestRating: 10,
      worstRating: 0,
      ratingCount: 1,
    },
    "episode": [
      {
        "@type": "TVEpisode",
        "name": "The Gifted S02 Episode 1",
        "url": "https://moviemxplayer.netlify.app/Hollywood/TheGiftedS02-2023/TheGiftedP1"
      },
      {
        "@type": "TVEpisode",
        "name": "The Gifted S02 Episode 2",
        "url": "https://moviemxplayer.netlify.app/Hollywood/TheGiftedS02-2023/TheGiftedP2"
      },
      {
        "@type": "TVEpisode",
        "name": "The Gifted S02 Episode 3",
        "url": "https://moviemxplayer.netlify.app/Hollywood/TheGiftedS02-2023/TheGiftedP3"
      },
      {
        "@type": "TVEpisode",
        "name": "The Gifted S02 Episode 4",
        "url": "https://moviemxplayer.netlify.app/Hollywood/TheGiftedS02-2023/TheGiftedP4"
      },
      {
        "@type": "TVEpisode",
        "name": "The Gifted S02 Episode 5",
        "url": "https://moviemxplayer.netlify.app/Hollywood/TheGiftedS02-2023/TheGiftedP5"
      },
      {
        "@type": "TVEpisode",
        "name": "The Gifted S02 Episode 6",
        "url": "https://moviemxplayer.netlify.app/Hollywood/TheGiftedS02-2023/TheGiftedP6"
      },
      {
        "@type": "TVEpisode",
        "name": "The Gifted S02 Episode 7",
        "url": "https://moviemxplayer.netlify.app/Hollywood/TheGiftedS02-2023/TheGiftedP7"
      },
      {
        "@type": "TVEpisode",
        "name": "The Gifted S02 Episode 8",
        "url": "https://moviemxplayer.netlify.app/Hollywood/TheGiftedS02-2023/TheGiftedP8"
      },
      {
        "@type": "TVEpisode",
        "name": "The Gifted S02 Episode 9",
        "url": "https://moviemxplayer.netlify.app/Hollywood/TheGiftedS02-2023/TheGiftedP9"
      },
      {
        "@type": "TVEpisode",
        "name": "The Gifted S02 Episode 10",
        "url": "https://moviemxplayer.netlify.app/Hollywood/TheGiftedS02-2023/TheGiftedP10"
      },
      {
        "@type": "TVEpisode",
        "name": "The Gifted S02 Episode 11",
        "url": "https://moviemxplayer.netlify.app/Hollywood/TheGiftedS02-2023/TheGiftedP11"
      },
      {
        "@type": "TVEpisode",
        "name": "The Gifted S02 Episode 12",
        "url": "https://moviemxplayer.netlify.app/Hollywood/TheGiftedS02-2023/TheGiftedP12"
      },
      {
        "@type": "TVEpisode",
        "name": "The Gifted S02 Episode 13",
        "url": "https://moviemxplayer.netlify.app/Hollywood/TheGiftedS02-2023/TheGiftedP13"
      },
      {
        "@type": "TVEpisode",
        "name": "The Gifted S02 Episode 14",
        "url": "https://moviemxplayer.netlify.app/Hollywood/TheGiftedS02-2023/TheGiftedP14"
      },
      {
        "@type": "TVEpisode",
        "name": "The Gifted S02 Episode 15",
        "url": "https://moviemxplayer.netlify.app/Hollywood/TheGiftedS02-2023/TheGiftedP15"
      },
      {
        "@type": "TVEpisode",
        "name": "The Gifted S02 Episode 16",
        "url": "https://moviemxplayer.netlify.app/Hollywood/TheGiftedS02-2023/TheGiftedP16"
      }
    ],
    "author": [{
      "@type": "Person",
      "name": "DrTrailer",
      "url": "https://moviemxplayer.netlify.app/DrTrailer.png"
    }],
  
  "publisher": {
      "@type": "Organization",
      "name": "Movie MX Player",
      "logo": {
        "@type": "ImageObject",
        "url": "https://moviemxplayer.netlify.app/og_image.jpg"
      }
    },
    potentialAction: {
      "@type": "WatchAction",
      "name": "The Gifted S02 (2023)",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://moviemxplayer.netlify.app/Hollywood/TheGiftedS02-2023/TheGiftedP1",
      },
    },
  });


  return (
    <div>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ldJsonData }}
      />
      <Head>
     <title>Watch The Gifted S02 (2019) Full Movie Online Free | Movie MX Player™</title>
<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
<meta name="keywords" content="Movie MX Player,watch free movies,full movie online free,hd movies,movie 2023,latest movie,dubbed movies,free movie download,watch the watchful eye movie,index of the watchful eye movie,the watchful eye movie 2023,the watchful eye movie online,watch the watchful eye movie online free,the watchful eye tv series,the watchful eye movie download,the watchful eye movie free download,the watchful eye movie download" />
<meta property="og:locale" content="en_US" />   

<meta name="robots" content="index, follow" />  
<meta name="revisit-after" content="1 days" />
<meta property="og:site_name" content="Movie MX Player™ | Watch Movies, TV-Series & Sports Live Online Free" />
<meta property="og:type" content="movie" />
<meta property="og:title" content="Watch The Gifted S02 (2019) | Movie MX Player™" />
<meta property="og:url" content="https://moviemxplayer.netlify.app/Hollywood/TheGiftedS02-2023/TheGiftedP1" />
<meta property="og:image" content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681682712/the-gifted-s02_ynhaoq.webp" />
<meta property="og:image:secure_url" content="https://moviemxplayer.netlify.app/" />
<meta property="og:image:width" content="1280" />
<meta property="og:image:height" content="720" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="Watch The Gifted S02 (2019) | Movie MX Player™" />
<meta name="twitter:image" content="https://res.cloudinary.com/dezf3wemk/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1681682712/the-gifted-s02_ynhaoq.webp" />
<meta name="description" content="Watch The Gifted S02 Full Movie Online on Movie MX Player™, You can also download The Gifted S02 (2019) in full HD quality to watch later offline." />

<link rel="canonical" href="https://moviemxplayer.netlify.app/Hollywood/TheGiftedS02-2023/" />
       </Head>
<Script src="../../propler/ads.js" defer />

       <div className="bg-gray-600 shadow ">



     
       <div className="flex flex-col items-center  justify-center space-y-12">
<ShareButtons url="https://moviemxplayer.netlify.app" title="Watch Movies, TV-Series & Sports Live Online Free" image="https://moviemxplayer.netlify.app/og_image.jpg" />
<img src={movie.poster} alt={`Poster for ${movie.title}`} loading="lazy" className="scale-100 hover:scale-110 ease-in duration-500 cursor-pointer rounded-3xl " />
  <h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
     DOWNLOAD {movie.title} (2023) </h2>
  
  
    
    <h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
    {movie.name} Episode 1 (2023) </h2>
<a href={movie.down1link1} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name} Episode 2 (2023) </h2>
<a href={movie.down1link2} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name} Episode 3 (2023) </h2>
<a href={movie.down1link3} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 4 (2023) </h2>
<a href={movie.down1link4} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 5 (2023) </h2>
<a href={movie.down1link5} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 6 (2023) </h2>
<a href={movie.down1link6} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 7 (2023) </h2>
<a href={movie.down1link7} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 8 (2023) </h2>
<a href={movie.down1link8} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 9 (2023) </h2>
<a href={movie.down1link9} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 10 (2023) </h2>
<a href={movie.down1link10} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 11 (2023) </h2>
<a href={movie.down1link11} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 12 (2023) </h2>
<a href={movie.down1link12} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 13 (2023) </h2>
<a href={movie.down1link13} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 14 (2023) </h2>
<a href={movie.down1link14} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 15 (2023) </h2>
<a href={movie.down1link15} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>
<h2 className="text-blue-500  title-font mb-3 my-5 font-bold text-2xl ">
{movie.name}  Episode 16 (2023) </h2>
<a href={movie.down1link16} target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Download Now
 
</button></a>

<h2 className="text-blue-500 text-lg title-font  mb-3 font-bold md:text-lg ">
Thank you for Dowloading and Enjoy. </h2>
<h2 className="text-blue-500 text-lg title-font  mb-3 font-bold md:text-lg ">
Please Share the Link.</h2>
<Max />



<a href="../../Hollywood/TheGiftedS02-2023/TheGiftedP1" >
<button className="relative inline-flex items-center rounded-3xl my-5 justify-center p-0.5 mb-5 mr-2 overflow-hidden text-xl font-bold text-gray-900 group bg-gradient-to-br from-red-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dGTF:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dGTF:focus:ring-blue-800 scale-100 hover:scale-110  cursor-pointer px-5 py-2.5 transition-all ease-in duration-75 bg-white dGTF:bg-gray-900 group-hover:bg-opacity-0  ">
  Back

</button></a>
 




 </div> 
    </div> </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://moviemxplayer.netlify.app/movies.json');

  const data = await res.json();
  const selectedMovie = data.find(movie => movie.id === 'GTF');
  return {
    props: {
      movie: selectedMovie
    }
  };
}
 
export default DownloadGTF1;
