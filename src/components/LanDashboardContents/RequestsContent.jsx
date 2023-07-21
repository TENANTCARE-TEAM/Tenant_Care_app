import React from "react";
import { FaUserCircle } from "react-icons/fa";
import notFound from '../../assets/images/NotFound.png'
import { useApproveRequestMutation, useGetRequestsQuery } from "../../store/api/ItemsSlice";

function RequestsContent() {

  const {data: requests = [], isLoading} = useGetRequestsQuery();
  const [ApproveRequest] = useApproveRequestMutation()


  const handleApprove = (property_id, tenant_id) => {
    ApproveRequest(property_id,tenant_id).unwrap().then(() => {
      console.log("success")
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="mt-5 bg-white p-6 w-full flex flex-col shadow rounded">
      {/* title */}
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-2xl">Requests</h3>
      </div>
      {/* Content  */}
      <div className="mt-4 flex justify-center flex-wrap gap-4 p-2 md:p-4 pb-5">

      {isLoading ? (
         <div className="w-full h-full flex items-center justify-center">
         <div className="text-3xl font-bold flex items-center justify-center uppercase">
            <span className="animate-spin h-8 w-8 mr-3 rounded-full border-2 border-[#00befe] border-t-gray-100 "></span> 
             loading...
           </div>
         </div>
      ): (
        <>
         {requests.length === 0 ? (
          <div className="flex flex-col w-full !h-[60vh] items-center justify-center">
            <img src={notFound} alt="" className="w-50 h-80"/>
            <h1 className="font-medium text-xl text-gray-400">Requests not found</h1>
          </div>
         ) : (
           <>
            {requests.map((request) => (
              <div key={request.id} className="flex  flex-col gap-4  overflow-hidden md:w-[300px] h-auto w-full bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] cursor-pointer transition-all">
              <img
                src={request.image}
                alt=""
                className="w-full h-[180px] rounded-xl bg-auto bg-no-repeat bg-center"
              />
              <div className="flex flex-col gap-2 md:gap-7 w-full md:-full">
                <div className="flex flex-col gap-3">
                  <h3 className="font-bold text-2xl">{request.title}</h3>
                  <span className="text-sm text-[#acacac]">{request.address}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-[#acacac]">Tenant info</span>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <FaUserCircle className="text-2xl text-[#00befe]" />
                      <h3 className="text-1xl text-gray-600">{request.tenant_first_name} {request.tenant_last_name}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={() => handleApprove(request.property_id, request.tenant_id)}
              className=" bg-[#00befe] p-3 px-4 rounded-lg font-medium text-sm text-white cursor-pointer transition-all hover:bg-sky-500">
                  Approve
              </button>
            </div>
            ))}
           </>
         )}
        </>
      )}

      </div>
    </div>
  );
}

export default RequestsContent;
