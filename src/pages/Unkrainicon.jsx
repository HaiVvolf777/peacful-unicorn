import React from 'react'
import Typed from 'react-typed'
import heroVid from '../assets/unicorn.mp4'
import one from '../assets/9.png'

const Unkrainicon = () => {
    return (
        <div className='py-8'>
         <div className="w-full h-[70vh] top-[90px]">
      <video
        className="object-cover h-[60vh] w-full absolute -z-10"
        src={heroVid}
        autoPlay
        loop
        muted
      />
         <div className="w-full h-[90%] flex flex-col justify-center items-center text-zinc-200 px-4 text-center">
        
        <Typed
          className=" font-bold  text-2xl py-2 font-Belmont"
          strings={['" Peaceful Unicorn"']}
          typeSpeed={120}
          backSpeed={140}
          loop
        />

      </div>
    </div>
            <div className="text-yellow-600 body-font overflow-hidden">
                <div className="container px-5 py-2 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-md font-Belmont font-bold title-font text-blue-500 tracking-widest">Peaceful Unicorn</h2>
                            <h1 className="text-blue-500 text-3xl title-font font-medium mb-4">Unkrainicon</h1>
                            <div className="flex mb-4">
                                <a
                                    className="flex-grow text-zinc-200 border-b-2 border-zinc-200 py-2 text-lg px-1 hover:border-blue-500 hover:text-blue-500">Stats</a>

                            </div>
                            <div className='font-bold'>
                            <div className="flex py-2">
                                <span className="text-yellow-300">Hp</span>
                                <span className="ml-auto text-zinc-200">29</span>
                            </div>
                            <div className="flex border-t border-yellow-600 py-2">
                                <span className="text-yellow-300">Strength</span>
                                <span className="ml-auto text-zinc-200">93</span>
                            </div>
                            <div className="flex border-t border-yellow-600 py-2">
                                <span className="text-yellow-300">Defence</span>
                                <span className="ml-auto text-zinc-200">48</span>
                            </div>
                            <div className="flex border-t border-yellow-600 py-2">
                                <span className="text-yellow-300">Heal</span>
                                <span className="ml-auto text-zinc-200">81</span>
                            </div>
                            <div className="flex border-t border-yellow-600 py-2">
                                <span className="text-yellow-300">Attack</span>
                                <span className="ml-auto text-zinc-200">31</span>
                            </div>
                            <div className="flex border-t border-yellow-600 py-2">
                                <span className="text-yellow-300">Acceleration</span>
                                <span className="ml-auto text-zinc-200">14</span>
                            </div>
                            <div className="flex border-t border-yellow-600 py-2">
                                <span className="text-yellow-300">Pace</span>
                                <span className="ml-auto text-zinc-200">32</span>
                            </div>
                            </div>




                            <div className="flex pt-6">
                                <span className="title-font font-medium text-2xl text-zinc-200">0.5 ETH</span>
                                <a href="/loading" alt=""
                                    className="flex ml-auto text-zinc-200 bg-transparent border-2 border-zinc-200 py-2 px-6 focus:outline-none hover:bg-zinc-200 hover:text-black rounded font-bold">Add
                                    To Stable</a>
                                <a href="/loading"
                                    className="flex text-zinc-200 bg-transparent border-2 border-zinc-200 py-2 px-6 focus:outline-none hover:bg-zinc-200 hover:text-black rounded font-bold ml-4">Add
                                    To Wishlist</a>
                            </div>
                        </div>
                        <img alt="" className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded"
                            src={one} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Unkrainicon