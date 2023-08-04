import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { useGetItemQuery } from "../../store/api/ItemsSlice";
import { useGetUserLandlordQuery } from "../../store/api/UsersSlice";
import notFound from "../../assets/images/NotFound.png";


function RecentItems() {
  const { data: items = [] , isLoading} = useGetItemQuery();

  const { data: user = [] } = useGetUserLandlordQuery();

  const filteredItems = items.filter((item) => user.id === item.landlord_id);
  const startIndex = Math.max(filteredItems.length - 3, 0);
  const endIndex = Math.max(filteredItems.length - 1, 0);
  const extractedItems = filteredItems.splice(
    startIndex,
    endIndex - startIndex + 1
  );

  return (
    <div className="bg-white p-6 w-full flex flex-col shadow rounded">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-2xl">Recently Added</h3>

        <Link to="/landlord/Properties">
          <span className="text-[#00befe]">See all</span>
        </Link>
      </div>
      {/* Recent items */}
      <div className="mt-4 flex justify-center flex-wrap gap-5 p-4 pb-5">
        {/* item */}
        <>
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-3xl font-bold flex items-center justify-center uppercase">
              <span className="animate-spin h-8 w-8 mr-3 rounded-full border-2 border-[#00befe] border-t-gray-100 "></span>
              loading...
            </div>
          </div>
        ) : (
          <>
           {extractedItems.length === 0 ? (
             <div className="flex flex-col w-full !h-[60vh] items-center justify-center">
              <img src={notFound} alt="" className="w-[20rem] h-[14rem] md:w-[28rem] md:h-80" />
              <h1 className="font-medium text-xl text-gray-400">Propertyies is Empty</h1>
            </div>
           ) : (
            <>
          {extractedItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-6  overflow-hidden w-[300px] bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] transition-all"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-[180px]  rounded-xl bg-auto bg-no-repeat bg-center"
              />
              <div className="flex flex-col gap-4 md:gap-4 w-full ">
                <div className="flex flex-col gap-2">
                  <h3 className=" text-2xl">
                    {" "}
                    {item.address.slice(0, 20) +
                      [item.address.length >= 20 ? "..." : ""]}
                  </h3>
                  <span className="text-sm text-[#00befe]">{item.title}</span>
                  <span className="text-[#222]">$ {item.rent_fee}</span>
                </div>

                <div className="flex">
                  <Link
                    to={`/Owner/Properties/Edit/${item.id}`}
                    className="w-full py-2 cursor-pointer px-3 text-center bg-[#00befe] shadow-[0px_4px_0px_0px_#03a4da] hover:shadow-[0px_4px_0px_0px_#0387b3] text-white rounded-lg"
                  >
                    Edit Property
                  </Link>
                </div>
              </div>
            </div>
          ))}
            </>
           )}
          </>
          )}
        </>
      </div>
    </div>
  );
}

export default RecentItems;
