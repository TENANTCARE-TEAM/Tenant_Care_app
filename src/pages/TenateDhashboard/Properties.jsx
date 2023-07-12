import React from 'react'
import Side from '../../components/TenDhashContent/Side'
import Nav from '../../components/TenDhashContent/Nav'

function Properties() {
  return (
    <div className='flex bg-[#f6f6f6]'>
    <Side/>
    <Nav/>
    <div className='mt-[70px] h-100vh w-full p-11'>
        <div className='flex flex-col'>
            <h3 className='font-bold text-xl text-[#00befe]'>Properties</h3>
            <span className="text-[#7E7E7E]">Welcome to TenantCare</span>
        </div>
        {/* content */}
    </div>
</div>
  )
}

export default Properties