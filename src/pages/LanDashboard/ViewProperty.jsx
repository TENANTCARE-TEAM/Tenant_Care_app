import React from 'react'
import { Link } from 'react-router-dom'
import ViewpropertyContent from '../../components/LanDashboardContents/ViewpropertyContent'
import Sidebar from '../../components/LanDashboardContents/Sidebar'
import Navs from '../../components/LanDashboardContents/Navs'

function ViewProperty() {
  return (
    <div className='flex bg-[#f6f6f6]'>
    <Sidebar/>
    <Navs/>
    <div className='m-[70px] ml-[210px] h-100vh w-full p-11'>
        <div className='flex flex-col'>
            <Link to="/landlord/Dashboard" className='font-bold text-xl text-[#00befe]'> › Back to Dashboard</Link>
            <span className="text-[#7E7E7E]">Welcome to TenantCare</span>
        </div>
        {/* content */}
        <ViewpropertyContent/>
    </div>
  </div>
  )
}

export default ViewProperty