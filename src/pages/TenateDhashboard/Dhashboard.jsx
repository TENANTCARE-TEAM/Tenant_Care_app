import React from 'react'
import Nav from '../../components/TenDhashContent/Nav'
import Side from '../../components/TenDhashContent/Side'

function Dhashboard() {
  return (
    <div className='flex bg-[#f6f6f6]'>
    <Side/>
    <Nav/>
    <div className='m-[70px] ml-[210px] h-100vh w-full p-11'>
        <div className='flex flex-col'>
            <h3 className='font-bold text-xl text-[#00befe]'>Dashboard</h3>
            <span className="text-[#7E7E7E]">Welcome to TenantCare</span>
        </div>
        {/* content */}
    </div>
</div>
  )
}

export default Dhashboard