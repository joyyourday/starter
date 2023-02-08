import Head from 'next/head'

import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
 
    <div >
      
      <Head>
        <title>Mxplayer Movies™</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
  
      <main>
        <div>
      <div className="flex flex-col items-center justify-center space-y-12">
    <section className="text-gray-600 body-font">
    <h1 className="mb-4 font-bold leading-none tracking-tight text-gray-900 my-2 text-center md:text-4xl dark:text-white">Watch Latest Movies</h1>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div className="w-70 h-50 inline-flex items-center justify-center  bg-white-100 text-indigo-500 mb-5 flex-shrink-0">
          <Link href="../../Transfusion-2023/Transfusion" className="flex title-font  items-center md:justify-start justify-center text-gray-900">
         
 <Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer " src='/public../../against-the-ice-2022.webp' alt='Logo' width={400} height={300}  loading="lazy"/></Link>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">Shooting Stars</h2>
            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
          
                4.95 out of 5
          
           
                <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>CRIME, THRILLER</strong>
       </div>
          
       <a href="../../Transfusion-2023/Transfusion" className="flex title-font  items-center md:justify-start justify-center text-gray-900"> <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../babylon-2022.webp' alt='Logo' width={400} height={300}  loading="lazy"/></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">Shooting Stars</h2>
          <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
        
          <h3 className="w-70 h-50 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>  </h3>
      
             4.95 out of 5
         
         
             <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>CRIME, THRILLER</strong>
       </div>
          <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
      <div className="w-70 h-50 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
     <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
   
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer" src='/public../../hunters-2023.webp' alt='Logo' width={400} height={300} loading="lazy"/></Link>
      </div>
      <div className="flex-grow">
        <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">Shooting Stars</h2>
        <h3 className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</h3>
      
        <p className="w-70 h-50 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong>    </p>
 
           4.95 out of 5
       
           <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>CRIME, THRILLER</strong>
       </div>
        <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button>
       
      </div>
    </div>
      </div>
      
  </section>
  </div>
  </div>
      </main>

 
    </div>
    
  )
}
