import { React, useState, useEffect  } from "react";
import { CgMenuGridO, CgCloseR } from 'react-icons/cg';
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#E4E4E7');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#E4E4E7');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div style={{ backgroundColor: `${color}` }} className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
      <NavLink to="/">
        <h1  style={{ color: `${textColor}` }} className="text-3xl font-bold mr-4 sm:text-4xl flex items-center text-black font-Belmont cursor-pointer lg:pl-28">
          Peaceful Unicorn
        </h1> </NavLink>
        <ul style={{ color: `${textColor}` }} className="hidden md:flex items-end pr-28 text-black cursor-pointer">
          <li>
            <NavLink to="/" >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" >
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/play" >
              How to play
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" >
              Products
            </NavLink>
          </li>
        </ul>

        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? (
            <CgMenuGridO  size={50} style={{ color: `${textColor}` }}/>
          ) : (
            <CgCloseR   size={50} style={{ color: `${textColor}` }}/>
          )}
        </div>
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute bg-zinc-200 w-full px-8 md:hidden lg:hidden"
        }
      >
        <li className="border-b-2 border-zinc-300 w-full">
          <NavLink onClick={handleClose} to="/" >
            Home
          </NavLink>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <NavLink
            onClick={handleClose}
            to="/about"
           
          >
            About
          </NavLink>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <NavLink
            onClick={handleClose}
            to="/play"
           
          >
           How to play
          </NavLink>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <NavLink
            onClick={handleClose}
            to="/product"
            
          >
            Product
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
