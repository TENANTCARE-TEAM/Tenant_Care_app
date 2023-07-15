import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import house from "../../assets/images/house-2.jpg";

function RequestsContent() {
  return (
    <div className="mt-5 bg-white p-6 w-full flex flex-col shadow rounded">
      {/* title */}
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-2xl">Requests</h3>
      </div>
      {/* Content  */}
      <div className="mt-4 flex flex-wrap gap-4 p-2 md:p-4 pb-5">

        <div className="flex flex-col gap-4  overflow-hidden w-[480px] h-auto max-[768px]:w-full bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] cursor-pointer transition-all">
          <div className="flex max-[768px]:flex-col gap-4  ">
          <img
            src={house}
            alt=""
            className="max-[768px]:w-full max-[768px]:h-[200px] w-[250px] h-auto rounded-xl bg-auto bg-no-repeat bg-center"
          />
          <div className="flex flex-col max-[768px]:gap-4 gap-7 w-full md:-full">
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-2xl">
                103/143 West Street, <br />
                Crows Nest
              </h3>
              <span className="text-sm text-[#acacac]">10 bedroom</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-[#acacac]">Tenant info</span>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <FaUserCircle className="text-2xl text-[#00befe]" />
                  <h3 className="text-1xl text-gray-600">Masud Ahmed</h3>
                </div>
                <div className="flex gap-2">
                  <MdEmail className="text-2xl text-[#00befe]" />
                  <h3 className="text-1xl text-gray-600">masud@gmail.com</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
          <button className=" bg-[#00befe] p-3 px-4 rounded-lg font-medium text-sm text-white cursor-pointer transition-all hover:bg-sky-500">
              Approve
          </button>
        </div>

        <div className="flex flex-col gap-4  overflow-hidden w-[480px] h-auto max-[768px]:w-full bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] cursor-pointer transition-all">
          <div className="flex max-[768px]:flex-col gap-4  ">
          <img
            src={house}
            alt=""
            className="max-[768px]:w-full max-[768px]:h-[200px] w-[250px] h-auto rounded-xl bg-auto bg-no-repeat bg-center"
          />
          <div className="flex flex-col max-[768px]:gap-4 gap-7 w-full md:h-full">
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-2xl">
                103/143 West Street, <br />
                Crows Nest
              </h3>
              <span className="text-sm text-[#acacac]">10 bedroom</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-[#acacac]">Tenant info</span>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <FaUserCircle className="text-2xl text-[#00befe]" />
                  <h3 className="text-1xl text-gray-600">Masud Ahmed</h3>
                </div>
                <div className="flex gap-2">
                  <MdEmail className="text-2xl text-[#00befe]" />
                  <h3 className="text-1xl text-gray-600">masud@gmail.com</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
          <button className=" bg-[#00befe] p-3 px-4 rounded-lg font-medium text-sm text-white cursor-pointer transition-all hover:bg-sky-500">
              Approve
          </button>
        </div>

        <div className="flex flex-col gap-4  overflow-hidden w-[480px] h-auto max-[768px]:full bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] cursor-pointer transition-all">
          <div className="flex max-[768px]:flex-col gap-4  ">
          <img
            src={house}
            alt=""
            className="max-[768px]:w-full max-[768px]:h-[200px] w-[250px] h-auto rounded-xl bg-auto bg-no-repeat bg-center"
          />
          <div className="flex flex-col max-[768px]:gap-4 gap-7 w-full md:h-full">
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-2xl">
                103/143 West Street, <br />
                Crows Nest
              </h3>
              <span className="text-sm text-[#acacac]">10 bedroom</span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-sm text-[#acacac]">Tenant info</span>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <FaUserCircle className="text-2xl text-[#00befe]" />
                  <h3 className="text-1xl text-gray-600">Masud Ahmed</h3>
                </div>
                <div className="flex gap-2">
                  <MdEmail className="text-2xl text-[#00befe]" />
                  <h3 className="text-1xl text-gray-600">masud@gmail.com</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
          <button className=" bg-[#00befe] p-3 px-4 rounded-lg font-medium text-sm text-white cursor-pointer transition-all hover:bg-sky-500">
              Approve
          </button>
        </div>

        
      </div>
    </div>
  );
}

export default RequestsContent;
