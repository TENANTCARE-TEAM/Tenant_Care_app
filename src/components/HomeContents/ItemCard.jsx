import React from 'react'

import { Link } from 'react-router-dom';
import notFound from '../../assets/images/NotFound.png'

import {useGetItemQuery} from '../../store/api/ItemsSlice'

function ItemCard() {

const {data: items = [], isLoading} = useGetItemQuery()

  return (
    <div className="px[6%] md:px-[9%] bg-white p-6 w-full flex flex-col shadow rounded">
      <div className="flex items-center justify-between md:mx-16 mx-6">
        <h3 className="font-bold md:text-2xl text-xl ml-[-9px]">
          Recently Added
        </h3>
        <Link to="/signIn">
          <span className="text-[#00befe] text-sm">See all</span>
        </Link>
      </div>
      {/* Recent items */}
      <div className="mt-4 flex justifye-center flex-wrap gap-7 p-4 pb-5 ">
        {/* item */}
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-3xl font-bold flex items-center justify-center uppercase">
              <span className="animate-spin h-8 w-8 mr-3 rounded-full border-2 border-[#00befe] border-t-gray-100 "></span>
              loading...
            </div>
          </div>
        ) : (
          <>
           {items.length === 0 ? (
             <div className="flex flex-col w-full !h-[60vh] items-center justify-center">
             <img src={notFound} alt="" className="w-full h-60 md:w-[28rem] md:h-80" />
             <h1 className="font-medium text-xl text-gray-400">Propertyies is Empty</h1>
           </div>
           ) : (
            <>
            {items.slice(-6).map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-6  overflow-hidden w-[300px] bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] transition-all"
              >
                <img
                  src={item.image}
                  alt=""
                  className=" cursor-pointer w-full h-[180px] rounded-xl bg-auto bg-no-repeat bg-center"
                />
                <div className="flex flex-col gap-4 md:gap-4 w-full ">
                  <div className="flex flex-col gap-2">
                    <h3 className=" text-2xl"> {item.address.slice(0, 20) + [item.address.length >= 20 ? '...' : '']}</h3>
                    <span className="text-sm text-[#00befe]">{item.title}</span>
                    <span className="text-[#222]">$ {item.rent_fee}</span>
                  </div>
                  <div className="flex">
                    <Link to="/signIn" className="cursor-pointer w-full py-2 px-3 text-center bg-[#00befe] text-white rounded-lg">
                      Send Request
                    </Link>
                  </div>
                </div>
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

export default ItemCard