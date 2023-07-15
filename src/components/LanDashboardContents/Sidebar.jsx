import React, { useEffect, useState } from 'react'
import {FaBars, FaTimes, FaUserCircle} from 'react-icons/fa'
import {RxDashboard} from 'react-icons/rx'
import { Link, useLocation } from 'react-router-dom'
import { MdOutlineHomeWork, MdOutlineAddHomeWork, MdOutlineMarkEmailUnread} from 'react-icons/md'
import {HiOutlineUserGroup} from 'react-icons/hi'
import { FiLogOut } from 'react-icons/fi'

function Sidebar() {
  const location = useLocation()
  const [menu , setMenu] = useState(true);

  return (
    <>
    <div onClick={() => setMenu(!menu)} className="z-10 fixed top-[2%] right-[4%] hidden max-[768px]:flex items-center justify-center w-[40px] h-[40px] bg-[#00befe] text-white text-xl rounded cursor-pointer">
        {menu ? <FaBars/> : <FaTimes/> }
    </div>

    <div className={`${menu ? "max-[768px]:hidden" : 'max-[768px]:block max-[768px]:w-full'} fixed left-0 md:top-0 top-[70px] z-10 w-[200px] h-[100vh] bg-white shadow-2xl p-6 flex items-center flex-col gap-4`}>
        <div className='flex items-center justify-center flex-col gap-2'>
            <FaUserCircle className='text-[#00befe] text-6xl'/>
            <span className='font-bold text-xl'>Henry Jr</span>
        </div>
        <ul className='flex flex-col gap-4 mt-4'>
            <Link to="/landlord/Dashboard" className={`w-[140px] max-[768px]:w-full p-2 py-4 flex flex-col items-center gap-2 justify-center cursor-pointer  rounded-lg bg-[#F6F6F6]
             ${location.pathname === '/landlord/Dashboard' ? 'before:block before:absolute before:left-1 before: before:w-[6px] before:h-[58px] before:rounded-lg transition-all before:bg-[#00befe] text-[#00befe]': 'text-[#acacac]'}`}>
                <RxDashboard className="text-2xl "/>
                <span className='text-sm  font-medium'>Dashboard</span>
            </Link>
            <Link to="/landlord/Properties" className={`w-[140px] max-[768px]:w-full p-2 py-4 flex flex-col items-center gap-2 justify-center cursor-pointer  bg-[#F6F6F6] rounded-lg
             ${location.pathname === '/landlord/Properties' ? 'before:block before:absolute before:left-1 before: before:w-[6px] before:h-[58px] before:rounded-lg transition-all before:bg-[#00befe] text-[#00befe]': 'text-[#acacac]'}
             `}>
                <MdOutlineHomeWork className="text-2xl "/>
                <span className='text-sm  font-medium'>Properties</span>
            </Link>
            <Link to="/landlord/Tenants" className={`w-[140px] max-[768px]:w-full p-2 py-4 flex flex-col items-center gap-2 justify-center cursor-pointer  bg-[#F6F6F6] rounded-lg
             ${location.pathname === '/landlord/Tenants' ? 'before:block before:absolute before:left-1 before: before:w-[6px] before:h-[58px] before:rounded-lg transition-all before:bg-[#00befe] text-[#00befe]': 'text-[#acacac]'}`}>
                <HiOutlineUserGroup className="text-2xl "/>
                <span className='text-sm  font-medium'>Tenants</span>
            </Link>
            <Link to="/landlord/AddProperty" className={`w-[140px] max-[768px]:w-full p-2 py-4 flex flex-col items-center gap-2 justify-center cursor-pointer  bg-[#F6F6F6] rounded-lg 
             ${location.pathname === '/landlord/AddProperty' ? 'before:block before:absolute before:left-1 before: before:w-[6px] before:h-[58px] before:rounded-lg transition-all before:bg-[#00befe] text-[#00befe]': 'text-[#acacac]'}`}
             >
                <MdOutlineAddHomeWork className="text-2xl "/>
                <span className='text-sm  font-medium'>Add Property</span>
            </Link>
            <Link to="/landlord/Requests" className={`w-[140px] max-[768px]:w-full p-2 py-4 flex flex-col items-center gap-2 justify-center cursor-pointer  bg-[#F6F6F6] rounded-lg 
             ${location.pathname === '/landlord/Requests' ? 'before:block before:absolute before:left-1 before: before:w-[6px] before:h-[58px] before:rounded-lg transition-all before:bg-[#00befe] text-[#00befe]': 'text-[#acacac]'}`}>
                <MdOutlineMarkEmailUnread className="text-2xl "/>
                <span className='text-sm  font-medium'>Requests</span>
            </Link>
            <Link to="/" className={`md:hidden w-[140px] max-[768px]:w-full p-2 py-4 flex flex-col items-center gap-2 justify-center cursor-pointer  bg-[#F6F6F6] rounded-lg 
             ${location.pathname === '/landlord/Requests' ? 'before:block before:absolute before:left-1 before: before:w-[6px] before:h-[58px] before:rounded-lg transition-all before:bg-[#00befe] text-[#00befe]': 'text-[#acacac]'}`}>
                <FiLogOut className="text-2xl "/>
                <span className='text-sm  font-medium'>Logout</span>
            </Link>
        </ul>
    </div>
  </>
  )
}

export default Sidebar