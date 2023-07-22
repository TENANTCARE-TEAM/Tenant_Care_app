import React, { useEffect, useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'




function Navs() {


  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(false);

  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      setUserInfo(token);
    }
  }, [userInfo]);

  const handleLogout = () => {
    Cookies.remove("token");
    setUserInfo(true);
    navigate("/business/signIn");
  };

  return (
    <div className='fixed z-10 top-0 right-0 w-[100%] bg-white h-[70px] shadow-lg '>
        <div className="h-[70px] flex items-center text-center justify-around ">
          <div>
          <h1 className="md:hidden flex mr-40 md:mr-0 text-xl font-bold text-slate-900 cursor-pointer">
            TENANT<span className="text-[#00befe]">CARE</span>
          </h1>
          </div>
            <div onMouseDown={() => console.log("hey")}
            className="hidden md:flex justify-between items-center rounded-lg bg-[#f6f6f6] px-3 py-2 w-[400px]  ">
                <input 
                type="text"
                placeholder="Search" 
                className='w-full bg-[#f6f6f6] outline-none'
                />
                <FaSearch className='text-[#acacac] mr-2 cursor-pointer '/>
            </div>
            <div 
              onClick={handleLogout} 
            className="ml-10 hidden md:flex items-center justify-center text-xl text-[#ff6746] gap-3 cursor-pointer">
              <FiLogOut />
              <span  
              >Logout</span>
            </div>
        </div>
    </div>
  )
}

export default Navs