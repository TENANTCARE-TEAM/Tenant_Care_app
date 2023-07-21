import React, { useEffect, useState } from "react";
import house from "../../assets/images/house-2.jpg";
import { useGetItemQuery, useSendRequestsMutation } from "../../store/api/ItemsSlice";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function ViewpropertyContent() {

  const params = useParams()

  const {data: items = [], isLoading} = useGetItemQuery();
  
  const Item = items.find((item) => item.id === Number(params.property_id));

  const [SendRequest] = useSendRequestsMutation()

  const handleRequest = (property_id) => {
    SendRequest(property_id).unwrap().then(() => {
      toast.success("Request sent successfully")
    }).catch((error) => {
      console.log(error)
      if(error.status === 400) {
       toast.error("Request already sent for this property")
      }
    })
  }

  return (
    <div className="mt-5 bg-white p-6 w-full flex flex-col shadow rounded">
      {/* title */}
      <ToastContainer/>
      <div className="flex">
        <h3 className="font-bold text-2xl">View Property</h3>
      </div>
      {/* content */}

      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
         <div className="text-3xl font-bold flex items-center justify-center uppercase">
            <span class="animate-spin h-8 w-8 mr-3 rounded-full border-2 border-[#00befe] border-t-gray-100 "></span> 
             loading...
           </div>
       </div>
      ) : (
        <>
        <div className="flex flex-col md:flex-row bg-white w-full md:w-4/5 md:ml-10 rounded-lg p-10 mb-12">
          <img
            src={Item.image}
            alt="viewpropertyi-image"
            className="md:w-[50%] w-full rounded-lg bg-auto bg-no-repeat bg-center"
          />
        <div className="md:mt-0 mt-3 flex flex-col gap-2 md:ml-10 w-full md:w-3/5">
          <h1 className=" text-2xl font-bold text-[#110229]">
            {Item.title}
          </h1>
          <p className="leading-[30px] font-semibold ">
            {Item.description}
          </p>
          <p className="text-xl text-[#222] font-semibold ">
            Price : $ {Item.rent_fee}
          </p>
          <div className="w-full mt-8 flex">
            <button onClick={() => handleRequest(Item.id)}
            className="py-[8px] px-[20px] rounded-[10px] bg-[#00befe] text-xl text-white">
              Sende Request
            </button>
          </div>
        </div>
      </div>
        </>
      )}
    </div>
  );
}

export default ViewpropertyContent;
