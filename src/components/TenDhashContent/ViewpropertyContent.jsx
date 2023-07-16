import React from "react";
import house from "../../assets/images/house-2.jpg";

function ViewpropertyContent() {
  return (
    <div className="mt-5 bg-white p-6 w-full flex flex-col shadow rounded">
      {/* title */}
      <div className="flex">
        <h3 className="font-bold text-2xl">View Property</h3>
      </div>
      {/* content */}

      <div className="flex flex-col md:flex-row bg-white w-full md:w-4/5 md:ml-10 rounded-lg p-10 mb-12">
        <img
          src={house}
          alt="viewpropertyi-image"
          className="md:w-[50%] w-full rounded-lg bg-auto bg-no-repeat bg-center"
        />

        <div className="md:mt-0 mt-3 flex flex-col md:ml-10 w-full md:w-3/5">
          <h1 className=" text-2xl font-bold text-[#110229]">
            Oak Pointe Apartment
          </h1>
          <p className="leading-[30px] font-semibold ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make
          </p>
          <span className="w-full bg-[#BDDFF3] p-3 rounded-[10px] mt-5 text-xl placeholder:text-[#636477]">
            10 Bedroom
          </span>

          <div className="w-full mt-8 flex flex-col md:flex-row gap-5">
            <button className="py-[8px] px-[20px] rounded-[10px] bg-[#62B7DA] text-xl text-white">
              Sende Request
            </button>
            <button
              className="bg-[#8f90A6] py-[10px] px-8
                 text-[18px] text-white rounded-[10px]"
            >
              $2,932.00
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewpropertyContent;
