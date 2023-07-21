import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
function Nav() {
  
  const token = Cookies.get('token')
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState(false)
  
  useEffect(() => {
    if(token) {
      setUserInfo(token)
    }
  }, [userInfo])
  
  const handleLogout = () => {
     Cookies.remove('token')
      setUserInfo(true)
       navigate('/signIn')
  }

  return (
    <div className='fixed z-[6] top-0 right-0 w-[100%] bg-white h-[70px] shadow-lg '>
    <div className="h-[70px] flex items-center text-center justify-around ">
      <div>
      <h1 className="md:hidden flex mr-40 md:mr-0 text-xl font-bold text-slate-900 cursor-pointer">
        TENANT<span className="text-[#00befe]">CARE</span>
      </h1>
      </div>
        <div className="hidden md:flex justify-between items-center rounded-lg bg-[#f6f6f6] px-3 py-2 w-[400px]  ">
            <input 
            type="text"
            placeholder="Search" 
            className='w-full bg-[#f6f6f6] outline-none'
            />
            <FaSearch className='text-[#acacac] mr-2 cursor-pointer '/>
        </div>

        <div
        onClick={handleLogout}
        className="hidden ml-10 md:flex items-center justify-center text-xl text-[#FF6746] gap-3 cursor-pointer">
          <FiLogOut/>
          <span >Logout</span>
        </div>
    </div>
</div>
  )
}

export default Nav