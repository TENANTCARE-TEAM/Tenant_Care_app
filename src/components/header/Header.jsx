import React, { useState } from 'react'
import {Link, useLocation} from 'react-router-dom'

function Header() {
 
  const location = useLocation()

  return (
    <>
      <header className='w-full h-[70px] bg-white shadow flex justify-between items-center px-[12%] '>
      <h1 className='text-xl font-bold text-slate-900 cursor-pointer'>TENANT<span className='text-[#00befe]'>CARE</span></h1>
      <ul className='flex items-center'>
        <Link to='/'>
        <li className={'text-[#353535] font-[600] p-3 '  }>HOME</li>
        </Link>
        <Link to='/about'>
        <li className='text-[#353535] font-[600] p-3'>ABOUT</li>
        </Link>
        <Link to='/signIn'>
        <li className='text-[#353535] font-[600] p-3'>SIGN IN</li>
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