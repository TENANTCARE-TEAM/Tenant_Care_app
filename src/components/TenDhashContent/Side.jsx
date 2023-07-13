import React from 'react'

import {FaUserCircle} from 'react-icons/fa'
import {RxDashboard} from 'react-icons/rx'
import { Link, useLocation } from 'react-router-dom'
import { MdOutlineHomeWork} from 'react-icons/md'


function Side() {

  const location = useLocation()

  return (
    <div className='fixed left-0 top-0 z-10 w-[200px] h-screen bg-white shadow-2xl p-6 flex items-center flex-col gap-4'>
    <div className='flex items-center justify-center flex-col gap-2'>
        <FaUserCircle className='text-[#00befe] text-6xl'/>
        <span className='font-bold text-xl'>Henry Jr</span>
    </div>
    <ul className='flex flex-col gap-4 mt-4'>
        <Link to="/tenant/dashboard" className={`w-[140px] p-2 py-4 flex flex-col items-center gap-2 justify-center cursor-pointer  rounded-lg bg-[#F6F6F6]
         ${location.pathname === '/tenant/dashboard' ? 'before:block before:absolute before:left-1 before: before:w-[6px] before:h-[58px] before:rounded-lg transition-all before:bg-[#00befe] text-[#00befe]': 'text-[#acacac]'}`}>
            <RxDashboard className="text-2xl "/>
            <span className='text-sm  font-medium'>Dashboard</span>
        </Link>
        <Link to="/tenant/Properties" className={`w-[140px] p-2 py-4 flex flex-col items-center gap-2 justify-center cursor-pointer  bg-[#F6F6F6] rounded-lg
         ${location.pathname === '/tenant/Properties' ? 'before:block before:absolute before:left-1 before: before:w-[6px] before:h-[58px] before:rounded-lg transition-all before:bg-[#00befe] text-[#00befe]': 'text-[#acacac]'}
         `}>
            <MdOutlineHomeWork className="text-2xl "/>
            <span className='text-sm  font-medium'>Properties</span>
        </Link>
    </ul>
</div>
  )
}

export default Side