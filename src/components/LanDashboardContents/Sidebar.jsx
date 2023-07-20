import React, { useEffect, useState } from 'react'
import {FaBars, FaTimes, FaUserCircle} from 'react-icons/fa'
import {RxDashboard} from 'react-icons/rx'
import { Link, useLocation } from 'react-router-dom'
import { MdOutlineHomeWork, MdOutlineAddHomeWork, MdOutlineMarkEmailUnread} from 'react-icons/md'
import {HiOutlineUserGroup} from 'react-icons/hi'
import { FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useGetUserLandlordQuery } from '../../store/api/UsersSlice'
import {CgProfile} from 'react-icons/cg'

function Sidebar() {
  const location = useLocation()
  const [menu , setMenu] = useState(true);

  const {data: user = []} = useGetUserLandlordQuery();
  

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
    navigate("/signIn");
  };

  return (
    <>
    <div onClick={() => setMenu(!menu)} className="z-30 fixed top-[2%] right-[4%] md:hidden flex items-center justify-center w-[40px] h-[40px] bg-[#00befe] text-white text-xl rounded cursor-pointer">
        {menu ? <FaBars/> : <FaTimes/> }
    </div>

    <div className={`${menu ? "hidden md:flex" : 'w-full md:w-[200px]'} fixed left-0 top-0 z-20 w-[200px] h-[100vh] bg-white shadow-2xl p-6 flex items-center flex-col gap-4 `}>
        <div className='flex items-center justify-center flex-col gap-2'>
            <Link to="/landlord/Profile"><FaUserCircle className='text-[#00befe] text-6xl'/></Link>
            <span className='font-bold text-xl text-center'>{user.first_name} {user.last_name}</span>
        </div>
        <ul className='flex w-full flex-col gap-4 mt-4'>
            <Link to="/landlord/Dashboard" className={`md:w-[140px] w-full p-2 py-4 flex flex-col items-center gap-2 justify-center cursor-pointer  rounded-lg bg-[#F6F6F6]
             ${location.pathname === '/landlord/Dashboard' ? 'before:block before:absolute before:left-1 before: before:w-[6px] before:h-[58px] before:rounded-lg transition-all before:bg-[#00befe] text-[#00befe]': 'text-[#acacac]'}`}>
                <RxDashboard className="text-2xl "/>
                <span className='text-sm  font-medium'>Dashboard</span>
            </Link>
            <Link to="/landlord/Properties" className={`md:w-[140px] w-full p-2 py-4 flex flex-col items-center gap-2 justify-center cursor-pointer  bg-[#F6F6F6] rounded-lg
             ${location.pathname === '/landlord/Properties' ? 'before:block before:absolute before:left-1 before: before:w-[6px] before:h-[58px] before:rounded-lg transition-all before:bg-[#00befe] text-[#00befe]': 'text-[#acacac]'}
             `}>
                <MdOutlineHomeWork className="text-2xl "/>
                <span className='text-sm  font-medium'>Properties</span>
            </Link>
            <Link to="/landlord/Tenants" className={`md:w-[140px] w-full p-2 py-4 flex flex-col items-center gap-2 justify-center cursor-pointer  bg-[#F6F6F6] rounded-lg
             ${location.pathname === '/landlord/Tenants' ? 'before:block before:absolute before:left-1 before: before:w-[6px] before:h-[58px] before:rounded-lg transition-all before:bg-[#00befe] text-[#00befe]': 'text-[#acacac]'}`}>
                <HiOutlineUserGroup className="text-2xl "/>
                <span className='text-sm  font-medium'>Tenants</span>
            </Link>
            <Link to="/landlord/AddProperty" className={`md:w-[140px] w-full p-2 py-4 flex flex-col items-center gap-2 justify-center cursor-pointer  bg-[#F6F6F6] rounded-lg 
             ${location.pathname === '/landlord/AddProperty' ? 'before:block before:absolute before:left-1 before: before:w-[6px] before:h-[58px] before:rounded-lg transition-all before:bg-[#00befe] text-[#00befe]': 'text-[#acacac]'}`}
             >
                <MdOutlineAddHomeWork className="text-2xl "/>
                <span className='text-sm  font-medium'>Add Property</span>
            </Link>
            <Link to="/landlord/Requests" className={`md:w-[140px] w-full p-2 py-4 flex flex-col items-center gap-2 justify-center cursor-pointer  bg-[#F6F6F6] rounded-lg 
             ${location.pathname === '/landlord/Requests' ? 'before:block before:absolute before:left-1 before: before:w-[6px] before:h-[58px] before:rounded-lg transition-all before:bg-[#00befe] text-[#00befe]': 'text-[#acacac]'}`}>
                <MdOutlineMarkEmailUnread className="text-2xl "/>
                <span className='text-sm  font-medium'>Requests</span>
            </Link>
            {/* <Link to="/landlord/Profile" className={`md:w-[140px] w-full p-2 py-4 hidden md:flex flex-col items-center gap-2 justify-center cursor-pointer  bg-[#F6F6F6] rounded-lg
            ${location.pathname === '/landlord/Profile' ? 'before:block before:absolute before:left-1 before: before:w-[6px] before:h-[58px] before:rounded-lg transition-all before:bg-[#00befe] text-[#00befe]': 'text-[#acacac]'}
            `}>
                <CgProfile className="text-2xl "/>
                <span className='text-sm  font-medium'>Profile</span>
            </Link> */}
            <div onClick={handleLogout}
             className={`md:hidden md:w-[140px] w-full p-2 py-4 flex flex-col items-center gap-2 justify-center cursor-pointer  bg-[#F6F6F6] rounded-lg 
             ${location.pathname === '/landlord/Requests' ? 'before:block before:absolute before:left-1 before: before:w-[6px] before:h-[58px] before:rounded-lg transition-all before:bg-[#00befe] text-[#00befe]': 'text-[#acacac]'}`}>
                <FiLogOut className="text-2xl "/>
                <span className='text-sm  font-medium'>Logout</span>
            </div>
        </ul>
    </div>
  </>
  )
}

export default Sidebar