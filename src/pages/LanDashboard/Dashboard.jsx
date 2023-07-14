import React from 'react'
import Sidebar from '../../components/LanDashboardContents/Sidebar'
import Navs from '../../components/LanDashboardContents/Navs'
import Cards from '../../components/LanDashboardContents/Cards'
import RecentItems from '../../components/LanDashboardContents/RecentItems'

function Dashboard() {
  return (
    <div className='flex bg-[#f6f6f6]'>
        <Sidebar/>
        <Navs/>
        <div className='m-[70px] ml-[210px] h-100vh w-full p-11 flex flex-col gap-5'>
            <div className='flex flex-col'>
                <h3 className='font-bold text-xl text-[#00befe]'>Dashboard</h3>
                <span className="text-[#7E7E7E]">Welcome to TenantCare</span>
            </div>
            {/* Contents */}
            <Cards/>
            <RecentItems/>
        </div>
    </div>
  )
}

export default Dashboard