import React, { useState } from "react";
import key from "../../assets/images/key.png";

function Middle() {

  const [ShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!ShowMore);
  };

  return (
    <div className="flex flex-col gap-4 w-full ">
      <div className='w-full bg-[#ECF1F8] h-[200px]'>
         <h1 className='text-center pt-[60px] text-5xl text-[#00BEFE] font-bold'>About</h1>
      </div>
      <div className="md:px-[10%] px-6 py-6 pb-8 mb-12 flex flex-col md:flex-row w-full">
      <div className="p-2 mw-full md:w-[60%] h-[450px]">
        <img src={key} className="w-full h-full" alt="" />
      </div>
      <div className="pl-4 mt-5 flex flex-col w-[100%]">
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quod cumque molestias sunt dolore explicabo, quis fuga repellendus autem placeat vitae veritatis, in quas ut eos dicta maiores reprehenderit fugit animi facere sit commodi doloremque repellat. Minima in dolores eveniet.
        </p>
        {ShowMore && (
           <span className="text-gray-500 text-base break-words pr-6 transition ease-in-aut">
           TenantCare's user-friendly interface and powerful features ensure a
           seamless and hassle-free experience, allowing property managers to
           focus on providing exceptional care and service to their tenants.
           Experience the convenience and efficiency of TenantCare and elevate
           your property management process to new heights.
           </span>
        )}
        <button className='md:w-[20%] w-[40%] bg-[#00befe] mt-4 p-3 px-4 rounded-lg font-medium text-sm text-white cursor-pointer transition-all hover:bg-sky-500'
        onClick={toggleReadMoreLess}>
          See More
        </button>
      </div>
      </div>
    </div>
  );
}

export default Middle;
