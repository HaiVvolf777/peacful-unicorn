import React from "react";
import Home from "./Home";
import Faq from "./Faq";
import Mission from "./Mission";
import Team from "./Team";

const FullLayoutHome = () => {
  return (
    <div>
      <Home />
      <Mission />
      <Team />
      <Faq />
 
    </div>
  );
};

export default FullLayoutHome;
