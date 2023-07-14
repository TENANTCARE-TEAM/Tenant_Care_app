import React from "react";
import key from "../../assets/images/key.png";

function Middle() {
  return (
    <div className="flex flex-col gap-4 w-full ">
      <div className='w-full bg-[#ECF1F8] h-[200px]'>
         <h1 className='text-center pt-[60px] text-5xl text-[#00BEFE] font-bold'>About</h1>
      </div>
      <div className="px-[10%] py-6 pb-8 flex w-full">
      <div className="p-2 w-[55%] h-[430px]">
        <img src={key} className="w-full h-full" alt="" />
      </div>
      <div className="pl-4 flex flex-col w-[100%]">
        <h3 className="font-bold text-2xl text-[#00befe]">About Us</h3>
        <p className="text-gray-500 text-base break-words pr-6">
          Introducing TenantCare, the ultimate property management solution
          designed to streamline and simplify every aspect of managing
          properties, tenants, and work orders . With TenantCare, property
          managers can effortlessly oversee their entire portfolio from a
          single, intuitive dashboard. Stay organized and in control as you
          efficiently manage tenant information, lease agreements, rent
          payments, and maintenance requests. Our comprehensive platform
          empowers property managers to effectively communicate with tenants,
          track rental performance, and generate insightful reports.
          TenantCare's user-friendly interface and powerful features ensure a
          seamless and hassle-free experience, allowing property managers to
          focus on providing exceptional care and service to their tenants.
          Experience the convenience and efficiency of TenantCare and elevate
          your property management process to new heights.
        </p>
        <button className='w-[20%] bg-[#00befe] mt-4 p-3 px-4 rounded-lg font-medium text-sm text-white cursor-pointer transition-all hover:bg-sky-500'>
          See More
        </button>
      </div>
      </div>
    </div>
  );
}

export default Middle;
