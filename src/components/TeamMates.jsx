import React from 'react';
import one  from '../assets/Ray.png';
import two from '../assets/weana.png';
import three from '../assets/cadrian.png';

const TeamMates = () => {
  return (
    <div className="relative pt-20 pb-48 bg-zinc-200">
    <div
       className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
       style={{ height: "80px" }}
     >
       <svg
         className="absolute bottom-0 overflow-hidden"
         xmlns="http://www.w3.org/2000/svg"
         preserveAspectRatio="none"
         version="1.1"
         viewBox="0 0 2560 100"
         x="0"
         y="0"
       >
         <polygon
           className="text-zinc-200 fill-current"
           points="2560 0 2560 100 0 100"
         ></polygon>
       </svg>
     </div>
       <div className="container mx-auto px-4">
           <div className="flex flex-wrap justify-center text-center mb-24">
               <div className="w-full lg:w-6/12 px-4">
                   <h2 className="text-4xl font-semibold font-Belmont text-black">
                       Here are our heroes
                   </h2>
                   <p className="text-lg leading-relaxed m-4 text-black">
                       The project is the brainchild of three CMU graduates who believed that NFTs and blockchain technology could be the tools to help create a better world.
                   </p>
               </div>
           </div>
           <div className="flex flex-wrap">
               <div className="w-full md:w-4/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                   <div className="px-6">
                       <img
                           alt="..."
                           src={one}
                           className="shadow-lg rounded-full  shadow-blue-800 max-w-full mx-auto lg:hover:scale-125 ease-in duration-500 "
                           style={{ maxWidth: "120px" }}
                       />
                       <div className="pt-6 text-center">
                           <h5 className="text-xl font-bold text-purple-800">
                              Ray Wong
                           </h5>
                           <p className="mt-1 text-sm text-black uppercase font-semibold">
                               Co-Founder, Marketing & Strategy Lead
                           </p>
                           <div className="mt-6 text-black">
                               <ul>
                                     <li> - Prominent investor and speaker in blockchain space following a career in major financial institutions.</li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>

               <div className="w-full md:w-4/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                   <div className="px-6">
                       <img
                           alt="..."
                           src={three}
                           className="shadow-lg rounded-full max-w-full shadow-blue-500 mx-auto lg:hover:scale-125 ease-in duration-500 "
                           style={{ maxWidth: "120px" }}
                       />
                       <div className="pt-6 text-center">
                           <h5 className="text-xl font-bold text-purple-800">
                              Cadrian
                           </h5>
                           <p className="mt-1 text-sm text-black uppercase font-semibold">
                               Co-Founder, Technical Lead
                           </p>
                           <div className="mt-6 text-black">
                               <ul>
                                   <li> - Technical wizard who co-founded and sold companies in data analytics, software agency and ecommerce.</li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>

               <div className="w-full md:w-4/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                   <div className="px-6">
                       <img
                           alt="..."
                           src={two}
                           className="shadow-lg rounded-full max-w-full shadow-gray-400 mx-auto lg:hover:scale-125 ease-in duration-500"
                           style={{ maxWidth: "120px" }}
                       />
                       <div className="pt-6 text-center">
                           <h5 className="text-xl font-bold text-purple-800">
                           Anna
                           </h5>
                           <p className="mt-1 text-sm text-black uppercase font-semibold">
                               Co-Founder, Creative Lead
                           </p>
                           <div className="mt-6 text-black">
                               <ul>
                                    <li> - Creative soul with award-winning boutique creative agency in lifestyle and social gaming sector.</li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>

             </div>
       </div>
   </div>
  )
}

export default TeamMates