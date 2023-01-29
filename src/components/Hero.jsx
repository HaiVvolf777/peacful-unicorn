import React from "react";
import heroVid from '../assets/unicorn.mp4';
import Typed from 'react-typed'

const Hero = () => {
  return (
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
  );
};

export default Hero;
