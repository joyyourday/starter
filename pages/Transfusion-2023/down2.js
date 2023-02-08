import Image from "next/image";

const Download2 = () => {
  return (
    <div>
  
  <div className="flex flex-col items-center my-5 justify-center space-y-12">
  <h2 className="text-blue-500  title-font mb-3 font-bold text-2xl ">
    CLICK TO DOWNLOAD NOW LINK BELOW </h2>
  

<a href="https://sblongvu.com/dl?op=download_orig&id=snbs47eau794&mode=n&hash=20988657-207-244-1670978031-af2429016048a1f9cd3892f5d2262d13" target={"_blamk"} id="download_link" > 
<button className="relative inline-flex items-center   justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">  
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
  Download Now
  </span>
</button></a>
<h2 className="text-blue-500 text-lg title-font  mb-3 font-bold md:text-lg ">
Thank you for Dowloading and Enjoy. </h2>
<h2 className="text-blue-500 text-lg title-font  mb-3 font-bold md:text-lg ">
Please Share the Link.</h2>
<Image class="scale-100 hover:scale-125 md-4 ease-in duration-500 cursor-pointer " src='/public../../against-the-ice-2022.webp' alt='Logo' width={800} height={400}  loading="lazy"/>

<a href="../../Transfusion-2023/Transfusion" > 
<button className="relative inline-flex items-center   justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 scale-100 hover:scale-125 ease-in duration-500 cursor-pointer">  
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
  Back
  </span>
</button></a>
</div>
    </div> 
  )
}

export default Download2;
