import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa'

function Header() {
  const location = useLocation();

  const [menu, setMenu] = useState(true);

  return (
    <header className="fixed top-0 left-0 z-10 w-full h-[70px] bg-white shadow flex justify-between items-center px-[12%] max-[768px]:px-[7%]">
      <h1 className="text-xl font-bold text-slate-900 cursor-pointer">
        TENANT<span className="text-[#00befe]">CARE</span>
      </h1>
      <div onClick={() => setMenu(!menu)} className="hidden max-[768px]:flex items-center justify-center w-[40px] h-[40px] bg-[#00befe] text-white text-xl rounded cursor-pointer">
        {menu ? <FaBars/> : <FaTimes/> }
      </div>
      <ul className={` ${menu ? "max-[768px]:hidden" : "transition-all ease-in duration-300 max-[768px]:flex"} max-[768px]:absolute top-[70px] max-[768px]:border-t-2 left-0 max-[768px]:bg-white max-[768px]:shadow max-[768px]:w-full flex max-[768px]:flex-col items-center max-[768px]:items-start max-[768px]:px-[7%] max-[768px]:py-4`}>
        <Link to="/">
          <li
            className={`font-[600] relative p-3 ${
              location.pathname === "/"
                ? "text-[#00befe] max-[768px]:after:hidden after:block after:absolute after:bottom-[-10.9px] max-[768px]:after:bottom-[8px] after:left-0 after:w-[100%] after:h-[2px] after:bg-[#00befe] "
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
                ? "text-[rgb(0,190,254)] max-[768px]:after:hidden after:block after:absolute after:bottom-[-10.9px] max-[768px]:after:bottom-[8px] after:left-0 after:w-[100%] after:h-[2px] after:bg-[#00befe]"
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
                ? "text-[#00befe] max-[768px]:after:hidden after:block after:absolute after:bottom-[-10.9px] max-[768px]:after:bottom-[8px] after:left-0 after:w-[100%] after:h-[2px] after:bg-[#00befe]"
                : "text-[#353535]"
            } `}
          >
            SIGN IN
          </li>
        </Link>

        <Link to="/GetStarted">
          <li className="max-[768px]:my-3 ml-2 bg-[#00befe] p-3 px-4 rounded-lg font-medium text-sm text-white cursor-pointer transition-all hover:bg-sky-500">
            GET STARTED
          </li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
