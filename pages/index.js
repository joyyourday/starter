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
         
 <Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer " src='/public../../transfusion-2023.webp' alt='Logo' width={400} height={300}  loading="lazy"/></Link>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font  mb-3 font-bold md:text-lg ">Shooting Stars</h2>
            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          
            <h3 className="w-70 h-50 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0" > <strong>IMDb RATING:</strong> </h3>
          
                4.95 out of 5
          
           
                <div className="p-4 mx-5 py-1flex flex-row text-center items-center">
       <strong>GENRE :</strong> <strong>CRIME, THRILLER</strong>
       </div>
          
       <a href="../../Modal1" className="flex title-font  items-center md:justify-start justify-center text-gray-900"> <button className="flex mx-auto mt-10 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">Watch Now</button></a>
           
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-70 h-50 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <Link href="/" className="flex title-font  items-center justify-center text-gray-900">
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../mission-maju-2023.webp' alt='Logo' width={400} height={300}  loading="lazy"/></Link>
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
     
<Image class="scale-100 hover:scale-125 ease-in duration-500 cursor-pointer "  src='/public../../pathan-2023.webp' alt='Logo' width={400} height={300}  loading="lazy"/></Link>
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
