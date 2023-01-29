import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FullLayoutHome from "./components/FullLayoutHome"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullLayoutAbout from "./components/FullLayoutAbout";
import FullLayoutPlay from "./components/FullLayoutPlay";
import FullLayoutProduct from "./components/FullLayoutProduct";
import Oliva from "./pages/Oliva";
import Unkrainicon from "./pages/Unkrainicon";
import SereneDark from "./pages/SereneDark";
import Mustafa from "./pages/Mustafa"
import Johna from "./pages/Johna";
import Valentine from "./pages/Valentine";
import Devil from "./pages/Devil";
import Baris from "./pages/Baris";
import UnkrainiconDark from "./pages/UnkrainiconDark";
import Irene from "./pages/Irene";







import WorkInProgress from "./pages/WorkInProgress";

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<FullLayoutHome />} />
        <Route path="/about" element={<FullLayoutAbout />} />
        <Route path="/play" element={<FullLayoutPlay />} />
        <Route path="/product" element={<FullLayoutProduct />} />
        <Route path="/oliva" element={<Oliva/>}/>
        <Route path="/unkrainicon" element={<Unkrainicon/>}/>
        <Route path="/serene-dark" element={<SereneDark/>}/>
        <Route path="/valentine" element={<Valentine/>}/>
        <Route path="/devil" element={<Devil/>}/>
        <Route path="/mustafa" element={<Mustafa/>}/>
        <Route path="/johna" element={<Johna/>}/>
        <Route path="/baris" element={<Baris/>}/>
        <Route path="/unkrainicon-dark" element={<UnkrainiconDark/>}/>
        <Route path="/irene" element={<Irene/>}/>
        <Route path="/oliva" element={<Oliva/>}/>

        <Route path="/loading" element={<WorkInProgress/>}/>
       
      </Routes>
      <Footer />
    
    </BrowserRouter>


  );
}

export default App;
