import React from 'react'
import key from "../../assets/images/key.png"

function Middle() {
  return (
       
     <>
      <div className='w-full bg-[#ECF1F8] h-[200px] mt-3'>
         <h1 className='text-center pt-[60px] text-5xl text-[#00BEFE]
         font-bold'>About</h1>
      </div>

    <div className='grid grid-cols-1 grid-rows-1 mx-16 p-16 gap-6'>
       <div className='text-3xl text-bold p-2'>
        <h1 className='mt-5'>About TenantCare</h1>
       </div>
       <div>
        <p>Introducing TenantCare, 
          the ultimate property management solution designed to streamline 
          and simplify every aspect of managing properties, tenants, and work orders
          . With TenantCare, property managers can effortlessly oversee their entire 
          portfolio from a single, intuitive dashboard. Stay organized and in 
          control as you efficiently manage tenant information, lease agreements, rent payments, and maintenance requests. Our comprehensive platform empowers property managers to effectively communicate with tenants, track rental performance, and generate insightful reports. TenantCare's user-friendly interface and powerful features ensure a seamless and hassle-free experience, allowing property managers to focus on providing exceptional care and service to their tenants. Experience the convenience and efficiency of TenantCare and elevate your property management process to new heights.</p>
       </div>
       <div className='p-50 mx-40 items-center'>
        <img src={key} width={500} height={600}/>
       </div>

    </div>
    </>
  )
}

export default Middle