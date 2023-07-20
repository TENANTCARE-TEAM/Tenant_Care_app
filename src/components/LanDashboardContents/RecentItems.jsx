import React from "react";
import house from "../../assets/images/house-2.jpg";
import house2 from "../../assets/images/house-3.jpg";
import { Link } from "react-router-dom";
import { useGetItemQuery } from "../../store/api/ItemsSlice";
import { useGetUserLandlordQuery } from "../../store/api/UsersSlice";

function RecentItems() {
  const { data: items = [] } = useGetItemQuery();

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
          {extractedItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-6  overflow-hidden w-[300px] bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] transition-all"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-[160px] md:h-full rounded-xl bg-auto bg-no-repeat bg-center"
              />
              <div className="flex flex-col gap-4 md:gap-4 w-full ">
                <div className="flex flex-col gap-2">
                  <h3 className=" text-2xl"> {item.address}</h3>
                  <span className="text-sm text-[#00befe]">{item.title}</span>
                  <span className="text-sm text-[#ccc]">
                    {item.description}
                  </span>
                  <span className="text-[#222]">$ {item.rent_fee}</span>
                </div>
                <div className="flex">
                  <Link to={`/landlord/Properties/Edit/${item.id}`} className="w-full py-2 cursor-pointer px-3 text-center bg-[#00befe] text-white rounded-lg">
                    Edit Property
                  </Link>
                </div>
              </div>
            </div>
          ))}
          ;
        </>
      </div>
    </div>
  );
}

export default RecentItems;
