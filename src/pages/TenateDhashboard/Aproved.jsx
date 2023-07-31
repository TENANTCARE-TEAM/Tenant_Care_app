import React from "react";
import Side from "../../components/TenDhashContent/Side";
import Nav from "../../components/TenDhashContent/Nav";
import ApprContent from "../../components/TenDhashContent/ApprContent";

function Aproved() {
  return (
    <div className="flex bg-[#f6f6f6]">
      <Side/>
      <Nav />
      <div className="mt-[72px] md:m-[70px] md:ml-[210px] ml-[0px] h-100vh w-full md:p-11 p-3 flex flex-col gap-2">
        <div className="flex flex-col">
          <h3 className="font-bold text-xl text-[#00befe]">Approved</h3>
          <span className="text-[#7E7E7E]">Welcome to TenantCare</span>
      
        </div>
      
        {/* content */}
        <ApprContent />
      </div>
    </div>
  );
}

export default Aproved;