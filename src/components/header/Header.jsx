import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa'

function Header() {
  const location = useLocation();

  const [menu, setMenu] = useState(true);

  return (
    <header className="fixed top-0 left-0 z-10 w-full h-[70px] bg-white shadow flex justify-between items-center md:px-[12%] px-[7%]">
      <h1 className="text-xl font-bold text-slate-900 cursor-pointer">
        TENANT<span className="text-[#00befe]">CARE</span>
      </h1>
      <div onClick={() => setMenu(!menu)} className="md:hidden flex items-center justify-center w-[40px] h-[40px] bg-[#00befe] text-white text-xl rounded cursor-pointer">
        {menu ? <FaBars/> : <FaTimes/> }
      </div>
      <ul className={` ${menu ? "hidden md:flex" : "transition-all ease-in duration-300 flex"} absolute md:static md:top-0 top-[70px] border-t-2 md:border-none left-0 bg-white md:bg-none shadow md:shadow-none w-full md:w-auto flex flex-col md:flex-row md:items-center items-start md:px-0 px-[7%] md:py-0 py-4`}>
        <Link to="/">
          <li
            className={`font-[600] relative p-3 ${
              location.pathname === "/"
                ? "text-[#00befe] after:hidden md:after:block after:absolute md:only:after:bottom-[-10.9px] after:bottom-[8px] after:left-0 after:w-[100%] after:h-[2px] after:bg-[#00befe] "
                : "text-[#353535]"
            } `}
          >
            HOME
          </li>
        </Link>

        <Link to="/about">
          <li
            className={`font-[600] relative p-3 ${
              location.pathname === "/about"
                ? "text-[rgb(0,190,254)] after:hidden md:after:block after:absolute md:after:bottom-[-10.9px] after:bottom-[8px] after:left-0 after:w-[100%] after:h-[2px] after:bg-[#00befe]"
                : "text-[#353535]"
            } `}
          >
            ABOUT US
          </li>
        </Link>

        <Link to="/signIn">
          <li
            className={`font-[600] relative p-3 ${
              location.pathname === "/signIn"
                ? "text-[#00befe] after:hidden md:after:block after:absolute md:after:bottom-[-10.9px] after:bottom-[8px] after:left-0 after:w-[100%] after:h-[2px] after:bg-[#00befe]"
                : "text-[#353535]"
            } `}
          >
            SING IN
          </li>
        </Link>

        <Link to="/GetStarted">
          <li className="my-3 md:y-0 ml-2 bg-[#00befe] p-3 px-4 rounded-lg font-medium text-sm text-white cursor-pointer transition-all hover:bg-sky-500">
            GET STARTED
          </li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
