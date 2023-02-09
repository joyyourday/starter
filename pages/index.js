import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [ ])

  return (
  
    <div >
      
      <Head>
        <title>Mxplayer Movies™</title>
      
	<meta name="description" content="Watch Watch now the Best TV shows and Movies " />
	<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<meta name="keywords" content="mxplayermovies,streaming,latest movies,online tv,latest free movies,watch latest movies online,latest full movies online" />
	<meta name="revisit-after" content="1 days" />
	<meta property="og:locale" content="en_US" />
  <meta name="robots" content="index, follow" />
	<meta name="robots" content="index, follow, archive" />
	<link rel="icon" type="image/x-icon" href="favicon.ico" />
	<meta property="og:site_name" content="Mxplayer Movies™ | Watch now the Best TV shows and Movies " />
	<meta property="og:type" content="website" />
	<meta property="og:image:height" content="1280"/>
	<meta property="og:image:width" content="720"/>
	<meta property="og:title" content="Mxplayer Movies™ | Watch now the Best TV shows and Movies " />
	<meta property="og:description" content="Watch now the Best TV shows and Movies " />
	<meta property="og:url" content="https://mxplayermovies.netlify.app/" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image" content="https://mxplayermovies.netlify.app/og_image.jpg" />
	<meta property="og:image:secure_url" content="https://mxplayermovies.netlify.app/og_image.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Mxplayer Movies™ " />
	<meta name="twitter:description" content=" Watch now the Best TV shows and Movies " />
	<meta name="twitter:image" content="https://mxplayermovies.netlify.app/og_image.jpg" />

      </Head>
       
      <main>
        <div>
      <div className="flex flex-col items-center justify-center space-y-12">
    <section className="text-gray-600 body-font">
    <h1 className="mb-4 font-bold leading-none tracking-tight text-gray-900 my-2 text-center md:text-4xl dark:text-white">Watch Latest Movies</h1>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center   text-indigo-500 mb-5 flex-shrink-0">
          <Link href="../../Transfusion-2023/Transfusion" className="flex title-font  items-center md:justify-start justify-center text-gray-900">
         
 <Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer " src='/public../../transfusion-2023.webp' alt='TRANSFUSION - 2023' width={400} height={300}  loading="lazy"/></Link>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">TRANSFUSION - 2023</h2>
            <p className="leading-relaxed text-base">A former Special Forces operative thrust into the criminal underworld to keep his only son from being taken from him.Sam Worthington is a good actor.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
            <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.3 out of 10</h3>
          
           
                <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>CRIME, THRILLER</strong>
       </div>
          
       <a href="../../Transfusion-2023/TranAds" className="flex title-font  items-center md:justify-start justify-center text-gray-900"> <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../mission-maju-2023.webp' alt='MASSION MAJNU - 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">MASSION MAJNU - 2023</h2>
          <h3 className="leading-relaxed text-base">In the 1970s, an undercover Indian spy takes on a deadly mission to expose a covert nuclear weapons program in the heart of Pakistan.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.9 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, DRAMA</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../pathan-2023.webp' alt='PATHAAN - 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">PATHAAN - 2023</h2>
          <h3 className="leading-relaxed text-base"> Pathaan is an Indian spy Story. An Indian spy takes on the leader of a group of mercenaries who have nefarious plans to target his homeland.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
          <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.1 out of 10</h3>
            
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, THRILLER</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../plane-2023.webp' alt='PLANE - 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">PLANE - 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.9 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, THRILLER</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../the-y-2023.webp' alt='THE Y - 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">THE Y - 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.6 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>HORROR, THRILLER</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../taaza-khabar-2023.webp' alt='TAAZA KHABAR - 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">TAAZA KHABAR - 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.3 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, DRAMA</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../pamasahe-2022.webp' alt='PAMASAHE - 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">PAMASAHE - 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../i-love-you-P2-2023.webp' alt='I LOVE YOU PART 2 - 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">I LOVE YOU PART 2 - 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../plan-b-2023.webp' alt='PLAN B 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">PLAN B 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../thunivu-2023.webp' alt='THUNIVU - 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">THUNIVU - 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.9 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, THRILLER</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../varisu-2023.webp' alt='VARISU - 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">VARISU - 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.8 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, DRAMA</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../trial-by-fire-2023.webp' alt='TRAIL BY FIRE - 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">TRAIL BY FIRE - 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.3 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>CRIME, DRAMA</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../mumbai-mafia-2022.webp' alt='MUMBAI MAFIA... - 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">MUMBAI MAFIA... - 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.4 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>CRIME, DRAMA</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../chhatriwali-2023.webp' alt='CHHATRIWALI - 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">CHHATRIWALI - 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.9 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>COMEDY, DRAMA</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../narvik-2022.webp' alt='NARVIK 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">NARVIK 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.8 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>DARAM, WAR</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../operation-fortune-ruse-de-uerre-2023.webp' alt='OPERATION FORTUNE... - 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">OPERATION FORTUNE... - 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.7 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>CRIME, THRILLER</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../babylon-2022.webp' alt='BABYLON - 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">BABYLON - 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.6 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>COMEDY, DRAMA</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../devotion-2023.webp' alt='DEVOTION - 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">DEVOTION - 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                6.7 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, WAR</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../shahmaran-2023.webp' alt='SHAHMARAN - 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">SHAHMARAN - 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.1 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ADVENTURE, DRAMA</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../jung-e-2023.webp' alt='JUNG-E - 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">JUNG-E - 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.4 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, ADVENTURE</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../the-old-way-2023.webp' alt='THE OLD WAY - 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">THE OLD WAY - 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                5.4 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, WESTERN</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../vikings-valhalla-2023.webp' alt='VIKINGS VALHALLA - 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">VIKINGS VALHALLA - 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.2 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, ADVENTURE</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../lust-diaries-pehla-pyar-2023.webp' alt='LUST DARIES... - 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">LUST DARIES... - 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../Imli-P2-2023.webp' alt='IMLI - 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">IMLI - 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../teekhi-chutney-part2-2022.webp' alt='TEEKHI CHUTENY PART 2 - 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">TEEKHI CHUTENY PART 2 - 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../darji-2022.webp' alt='DARJI - 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">DARJI - 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.5 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ADULT, HOT +18</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../hunters-2023.webp' alt='HUNTERS - 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">HUNTERS - 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.2 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>CRIME, DRAMA</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../ginny-georgia-2023.webp' alt='GINNY & GEORGIA - 2023' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">GINNY & GEORGIA - 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                7.4 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>COMEDY, DRAMA</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../the-last-of-us-2023.webp' alt='THE LAST OF US - 2023<' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">THE LAST OF US - 2023</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
           <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                9.4 out of 10</h3>
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>ACTION, DRAMA</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
      <div className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
     <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
   
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer" src='/public../../vaalvi-2023.webp' alt='VAALVI 2023' width={400} height={300} loading="lazy"/></Link>
      </div>
      <div className="flex-grow">
        <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">VAALVI 2023</h2>
        <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
      
        <p className="w-70 h-50 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>    </p>
 
         <h3 className="w-70 h-50 inline-flex items-center font-bold py-2 justify-center  text-yellow-500 mb-5 flex-shrink-0" >  <div className="flex items-center   justify-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></div>
                8.7 out of 10</h3>
       
           <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>COMEDY, DARAMA</strong>
       </div>
        <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
       
      </div>
    </div>
      </div>
      
  </section>
  </div>
  </div>
  <div className="container px-5 py-24 mx-auto items-center justify-center  flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <nav aria-label="Page navigation example">
  <ul class="inline-flex -space-x-px">
    <li>
      <a href="/" tabindex="-1" class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Home</a>
    </li>
    <li>
      <a href="../../Page1" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="../../Page2" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="../../Page3" aria-current="page" class="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="../../Page4" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="../../Page5" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="../../Page5" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Last</a>
    </li>
  </ul>
</nav>
</div>
      </main>

 
    </div>
    
  )
}
