
import React, { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

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
    navigate("/owner/signIn");
  };

  return (
    <div className="fixed z-10 top-0 right-0 w-[100%] bg-white h-[70px] shadow-lg ">
      <div className="h-[70px] flex items-center text-center justify-between md:px-[15%] ">
        <Link>
          <h1 className="flex max-[768px]:ml-6 max-[1291px]:ml-[6rem] md:mr-0 text-xl font-bold text-slate-900 cursor-pointer">
            TENANT<span className="text-[#00befe]">CARE</span>
          </h1>
        </Link>

        <div
          onClick={handleLogout}
          className="ml-10 hidden md:flex items-center justify-center text-xl text-[#ff6746] gap-3 cursor-pointer"
        >
          <FiLogOut />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}

export default Navs;
