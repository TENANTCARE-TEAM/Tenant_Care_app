import React from "react";
import notFound from '../../assets/images/NotFound.png'
import { FaUserCircle } from "react-icons/fa";
import { useGetAprrovedRequestQuery, useGetItemQuery } from "../../store/api/ItemsSlice";

function ApprContent() {

  const { data: items = [] } = useGetItemQuery()
  const { data: Approved = [], error, isLoading } = useGetAprrovedRequestQuery()


  let ApprovedItem = []

  ApprovedItem = items.filter(item => {
    return Approved.find((ApprovItem) => {
      return ApprovItem.property_id === item.id
    })
  })

  return (
    <div className="mt-5 bg-white p-6 w-full flex flex-col shadow rounded">
      {/* title */}
      <div className="flex">
        <h3 className="font-bold text-2xl">Approved Properties</h3>
      </div>
      {/* Content  */}
      <div className="mt-4 flex justify-center flex-wrap gap-5 p-4 pb-5">
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-3xl font-bold flex items-center justify-center uppercase">
              <span className="animate-spin h-8 w-8 mr-3 rounded-full border-2 border-[#00befe] border-t-gray-100 "></span>
              loading...
            </div>
          </div>
        ) : (
          <>
            {Approved.length === 0 ? (
              <div className="flex flex-col w-full !h-[60vh] items-center justify-center">
                <img src={notFound} alt="" className="w-50 h-80" />
                <h1 className="font-medium text-xl text-gray-400">Tenants not found</h1>
              </div>
            ) : (
              <>
                {Approved.map((approve) => {
                  const myApproved = ApprovedItem.filter((MyItem) => MyItem.id === approve.property_id)

                  return (
                    <>
                      {myApproved.map((myApprove) => (
                        <div key={approve.id} className="flex flex-col md:gap-4  overflow-hidden md:w-[300px] h-auto w-full bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] cursor-pointer transition-all">
                          <img
                            src={myApprove.image}
                            alt=""
                            className="w-full h-[180px]  rounded-xl bg-auto bg-no-repeat bg-center"
                          />
                          <div className="flex flex-col gap-4 md:gap-4 w-full">
                            <div className="flex flex-col gap-2">
                              <h3 className="font-bold text-2xl">
                                {approve.property_title}
                              </h3>
                              <span className="text-sm text-[#acacac]"> {approve.property_address.slice(0, 20) + [approve.property_address.length >= 20 ? '...' : '']}</span>
                            </div>
                            <div className="flex flex-col gap-2 pb-2">
                              <span className="text-sm text-[#acacac]">Landlord info</span>
                              <div className="flex flex-col gap-2">
                                <div className="flex gap-2">
                                  <FaUserCircle className="text-2xl text-[#00befe]" />
                                  <h3 className="text-1xl text-gray-600">{approve.landlord_first_name} {approve.landlord_last_name}</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )
                })}
              </>
            )}
          </>
        )}
      </div>

    </div>
  );
}

export default ApprContent;
