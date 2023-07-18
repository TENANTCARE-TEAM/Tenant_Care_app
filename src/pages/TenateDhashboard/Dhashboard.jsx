import React, { useEffect, useState } from 'react'
import Nav from '../../components/TenDhashContent/Nav'
import Side from '../../components/TenDhashContent/Side'
import CardItem from '../../components/TenDhashContent/CardItem'
import ResentItem from '../../components/TenDhashContent/ResentItem'

function Dhashboard() {
  useEffect(() => {
    document.title = "Dashboard | TenantCare"
  }, [])

  return (
    <div className='flex bg-[#f6f6f6]'>
    <Side/>
    <Nav/>
    <div className='mt-[72px] md:m-[70px] md:ml-[210px] ml-[0px] h-100vh w-full md:p-11 p-3 flex flex-col gap-2'>
        <div className='flex flex-col'>
            <h3 className='font-bold text-xl text-[#00befe]'>Dashboard</h3>
            <span className="text-[#7E7E7E]">Welcome to TenantCare</span>
        </div>
        {/* content */}
        <CardItem/>
       <ResentItem/>

    </div>
</div>
  )
}

export default Dhashboard