import React from "react";
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
    </div>
  );
}

export default ApprContent;
