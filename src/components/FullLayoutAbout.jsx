import React from "react";
import Home from "./Home";
import About from "./About";
import Goals from "./Goals";
import TeamMates from './TeamMates'

const FullLayoutAbout = () => {
  return (
    <div>
      <Home />
      <About />
      <TeamMates/>
      <Goals/>
     
    </div>
  );
};

export default FullLayoutAbout;