import React from "react";
import Typed from "react-typed";
import { NavLink } from "react-router-dom";

import heroVid from '../assets/unicorn.mp4';

const Home = () => {
  return (
    <div name="home" className="w-full h-[100vh] top-[90px]">
      <video
        className="object-cover h-full w-full absolute -z-10  "
        src={heroVid}
        autoPlay
        loop
        muted
      />





      <div className="w-full h-[90%] flex flex-col justify-center items-center text-zinc-200 px-4 text-center">
        <h1>Peaceful Unicorn</h1>
        <Typed
          className=" font-bold  text-2xl py-2 font-Belmont"
          strings={['" The Metaverse of charitable causes "']}
          typeSpeed={120}
          backSpeed={140}
          loop
        />

        <div className="pt-6">
          <NavLink
            className=" m-2 px-6 bg-purple-600 rounded-xl font-bold py-4  hover:bg-purple-700 hover:text-zinc-200  "
            to="/product"
          >
            Adopt Unicorn
          </NavLink>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
