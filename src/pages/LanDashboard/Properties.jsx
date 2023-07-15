import React, { useEffect } from 'react'
import Sidebar from '../../components/LanDashboardContents/Sidebar'
import Navs from '../../components/LanDashboardContents/Navs'
import PropertieasContent from '../../components/LanDashboardContents/PropertieasContent'

function Properties() {
  useEffect(() => {
    document.title = "Dashboard > Properties | TenantCare"
  }, [])

  return (
    <div className='flex bg-[#f6f6f6]'>
        <Sidebar/>
        <Navs/>
        <div className='mt-[72px] md:m-[70px] md:ml-[210px] ml-[0px] h-100vh w-full md:p-11 p-3 flex flex-col gap-2'>
            <div className='flex flex-col'>
                <h3 className='font-bold text-xl text-[#00befe]'>Properties</h3>
                <span className="text-[#7E7E7E]">Welcome to TenantCare</span>
            </div>
            {/* content */}
            <PropertieasContent/>
        </div>
    </div>
  )
}

export default Properties