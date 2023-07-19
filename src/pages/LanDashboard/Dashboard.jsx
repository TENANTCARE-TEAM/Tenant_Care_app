import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/LanDashboardContents/Sidebar'
import Navs from '../../components/LanDashboardContents/Navs'
import Cards from '../../components/LanDashboardContents/Cards'
import RecentItems from '../../components/LanDashboardContents/RecentItems'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useGetUserLandlordQuery } from '../../store/api/UsersSlice'

function Dashboard() {

const {data : user = [], error} = useGetUserLandlordQuery()
  console.log(user);
  
  const navigate = useNavigate()
  
    if(error && error.status === 401){
      Cookies.remove('token')
      navigate('/signIn')   
    }


  useEffect(() => {
    document.title = "Dashboard | TenantCare"
  }, [])

  return (
    <div className='flex bg-[#f6f6f6]'>
        <Sidebar/>
        <Navs/>
        <div className='mt-[72px] md:m-[70px] md:ml-[210px] ml-[0px] h-100vh w-full md:p-11 p-3 flex flex-col gap-2'>
            <div className='flex flex-col'>
                <h3 className='font-bold text-xl text-[#00befe]'>Dashboard</h3>
                <span className="text-[#7E7E7E]">Welcome to TenantCare</span>
            </div>
            {/* Contents */}
            <Cards />
            <RecentItems/>
        </div>
    </div>
  )
}

export default Dashboard