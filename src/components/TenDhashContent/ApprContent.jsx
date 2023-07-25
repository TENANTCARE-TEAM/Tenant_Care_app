import React from "react";

import { FaUserCircle } from "react-icons/fa";

import { useGetAprrovedRequestQuery } from "../../store/api/ItemsSlice";


function ApprContent() {
  
  const {data: Approved = [], error} = useGetAprrovedRequestQuery()

  console.log("API Tenant approved properties: ", Approved)
  console.log("API Tenant approved properties Error:", error)
  
  return (
    <div className="mt-5 bg-white p-6 w-full flex flex-col shadow rounded">
      {/* title */}
      <div className="flex">
        <h3 className="font-bold text-2xl">Approved Properties</h3>
      </div>
      {/* Content  */}


      <div>
        <div className="mt-5 bg-white p-6 w-full flex flex-wrap shadow rounded">
          <div className="mt-4 flex flex-wrap gap-5 p-4 pb-5">
            <div className="flex flex-col md:gap-4  overflow-hidden md:w-[300px] h-auto w-full bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] cursor-pointer transition-all">
              <img
                src="https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=967&q=80"
                alt=""
                className="w-full h-[180px]  rounded-xl bg-auto bg-no-repeat bg-center"
              />
              <div className="flex flex-col gap-4 md:gap-4 w-full">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-2xl">Crows Nest</h3>
                  <span className="text-sm text-[#acacac]">
                    {" "}
                    103/143 West Street,{" "}
                  </span>
                </div>
                <div className="flex flex-col gap-2 pb-2">
                  <span className="text-sm text-[#acacac]">Tenant info</span>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <FaUserCircle className="text-2xl text-[#00befe]" />
                      <h3 className="text-1xl text-gray-600"> Yaaska </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-4  overflow-hidden md:w-[300px] h-auto w-full bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] cursor-pointer transition-all">
              <img
                src="https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=967&q=80"
                alt=""
                className="w-full h-[180px]  rounded-xl bg-auto bg-no-repeat bg-center"
              />
              <div className="flex flex-col gap-4 md:gap-4 w-full">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-2xl">Crows Nest</h3>
                  <span className="text-sm text-[#acacac]">
                    {" "}
                    103/143 West Street,{" "}
                  </span>
                </div>
                <div className="flex flex-col gap-2 pb-2">
                  <span className="text-sm text-[#acacac]">Tenant info</span>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <FaUserCircle className="text-2xl text-[#00befe]" />
                      <h3 className="text-1xl text-gray-600"> Yaaska </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  );
}

export default ApprContent;
