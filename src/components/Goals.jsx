import React from 'react'
import a from '../assets/E1.png'
import b from '../assets/E2.png'
import c from '../assets/E3.png'
import d from '../assets/E4.png'
import e from '../assets/E5.png'
import f from '../assets/E6.png'
import g from '../assets/E7.png'
import h from '../assets/E8.png'
import i from '../assets/E9.png'
import j from '../assets/E10.png'
import k from '../assets/E11.png'
import l from '../assets/E12.png'
import m from '../assets/E13.png'
import n from '../assets/E14.png'
import o from '../assets/E15.png'
import p from '../assets/E16.png'
// import q from '../assets/E17.png'
import Goal from '../assets/Goals.png'





const Goals = () => {
  return (
    <div className="relative py-20 bg-black">
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
                className="text-black fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
      <h1 className='py-8 font-Belmont flex flex-col justify-center items-center text-zinc-200 '>We Believe In</h1>

      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4 pt-36">

            <img
              alt="..."
              className="max-w-full rounded-lg shadow-lg shadow-sky-600"
              src={Goal}
            />

          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">

              <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-36'>

                <img className='rounded-xl shadow-lg shadow-red-500 lg:hover:scale-150 ease-in duration-500' src={a} alt='' />
                <img className='rounded-xl shadow-lg shadow-yellow-300 lg:hover:scale-150 ease-in duration-500' src={b} alt='' />
                <img className='rounded-xl shadow-lg shadow-green-600 lg:hover:scale-150 ease-in duration-500' src={c} alt='' />
                <img className='rounded-xl shadow-lg shadow-red-600 lg:hover:scale-150 ease-in duration-500' src={d} alt='' />
                <img className='rounded-xl shadow-lg shadow-red-400 lg:hover:scale-150 ease-in duration-500' src={e} alt='' />
                <img className='rounded-xl shadow-lg shadow-cyan-600 lg:hover:scale-150 ease-in duration-500' src={f} alt='' />
                <img className='rounded-xl shadow-lg shadow-yellow-400 lg:hover:scale-150 ease-in duration-500' src={g} alt='' />
                <img className='rounded-xl shadow-lg shadow-pink-700 lg:hover:scale-150 ease-in duration-500' src={h} alt='' />
                <img className='rounded-xl shadow-lg shadow-yellow-700 lg:hover:scale-150 ease-in duration-500' src={i} alt='' />
                <img className='rounded-xl shadow-lg shadow-pink-500 lg:hover:scale-150 ease-in duration-500' src={j} alt='' />
                <img className='rounded-xl shadow-lg shadow-yellow-500 lg:hover:scale-150 ease-in duration-500' src={k} alt='' />
                <img className='rounded-xl shadow-lg shadow-yellow-600 lg:hover:scale-150 ease-in duration-500' src={l} alt='' />
                <img className='rounded-xl shadow-lg shadow-green-800 lg:hover:scale-150 ease-in duration-500' src={m} alt='' />
                <img className='rounded-xl shadow-lg shadow-cyan-700 lg:hover:scale-150 ease-in duration-500' src={n} alt='' />
                <img className='rounded-xl shadow-lg shadow-green-400 lg:hover:scale-150 ease-in duration-500' src={o} alt='' />
                <img className='rounded-xl shadow-lg shadow-blue-700 lg:hover:scale-150 ease-in duration-500' src={p} alt='' />
                {/* <img className='rounded-xl shadow-lg shadow-blue-900' src={q} alt='' /> */}


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Goals




