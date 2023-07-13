import React, { useState } from 'react'
import {Link, useLocation} from 'react-router-dom'

function Header() {
 
  const location = useLocation()


  return (
    <>
      <header className='w-full h-[70px] bg-white shadow flex justify-between items-center px-[12%] '>
      <h1 className='text-xl font-bold text-slate-900 cursor-pointer'>TENANT<span className='text-[#00befe]'>CARE</span></h1>
      <ul className='flex items-center '>
        
        <Link to='/'>
        <li className={`font-[600] relative p-3 ${location.pathname === "/" 
      ? "text-[#00befe]  after:block after:absolute after:bottom-[-10.9px] after:left-0 after:w-[100%] after:h-[2px] after:bg-[#00befe] ": "text-[#353535]"} `}>HOME</li>
        </Link>
       
        <Link to='/about'>
        <li className={`font-[600] relative p-3 ${location.pathname === "/about" 
      ? "text-[#00befe] after:block after:absolute after:bottom-[-10.9px] after:left-0 after:w-[100%] after:h-[2px] after:bg-[#00befe]": "text-[#353535]"} `}>ABOUT</li>
        </Link>
       
        <Link to='/signIn'>
        <li className={`font-[600] relative p-3 ${location.pathname === "/signIn" 
      ? "text-[#00befe] after:block after:absolute after:bottom-[-10.9px] after:left-0 after:w-[100%] after:h-[2px] after:bg-[#00befe]": "text-[#353535]"} `}>SIGN IN</li>
        </Link>
       
        <Link to='/getStarted'>
        <li 
        className='ml-2 bg-[#00befe] p-3 px-4 rounded-lg font-medium text-sm text-white cursor-pointer transition-all hover:bg-sky-500'>GET STARTED</li>
        </Link>
      </ul>
    </header>
    </>
  )
}

export default Header