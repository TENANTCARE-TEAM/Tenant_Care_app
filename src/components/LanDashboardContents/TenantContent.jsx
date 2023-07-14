import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import house from "../../assets/images/house-2.jpg";

function TenantContent() {
  return (
    <div className="mt-5 bg-white p-6 w-full flex flex-col shadow rounded">
      {/* title */}
      <div className="flex">
        <h3 className="font-bold text-2xl">Tenants</h3>
      </div>
      {/* content */}
      <div className='mt-5 bg-white p-6 w-full flex flex-col shadow rounded'>
    <div className='mt-4 flex flex-wrap gap-5 p-4 pb-5'>
      <div className='flex max-[768px]:flex-col gap-6  overflow-hidden w-[480px] h-auto max-[768px]:h-auto bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] cursor-pointer transition-all'>
                <img src={house} alt="" className='max-[768px]:w-full max-[768px]:h-[160px] w-[160px] h-full rounded-xl bg-auto bg-no-repeat bg-center'/>
                <div className='flex flex-col max-[768px]:gap-4 gap-7 w-full h-full'>
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-bold text-2xl'>103/143 West Street, <br/>Crows Nest</h3>
                        <span className='text-sm text-[#acacac]'>10 bedroom</span>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <span className='text-sm text-[#acacac]'>Tenant info</span>
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-2">
                            <FaUserCircle className="text-2xl text-[#00befe]"/>
                            <h3 className='text-1xl text-gray-600'>Masud Ahmed</h3>
                          </div>
                          <div className="flex gap-2">
                            <MdEmail className="text-2xl text-[#00befe]"/>

                            <h3 className="text-1xl text-gray-600">masud@gmail.com</h3>
                          </div>
                        </div>
                    </div>
                </div>
             </div>
             <div className='flex max-[768px]:flex-col gap-6  overflow-hidden w-[480px] h-auto max-[768px]:h-auto bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] cursor-pointer transition-all'>
                <img src={house} alt="" className='max-[768px]:w-full max-[768px]:h-[200px] w-[160px] h-full rounded-xl bg-auto bg-no-repeat bg-center'/>
                <div className='flex flex-col max-[768px]:gap-4 gap-7 w-full h-full'>
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-bold text-2xl'>103/143 West Street, <br/>Crows Nest</h3>
                        <span className='text-sm text-[#acacac]'>10 bedroom</span>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <span className='text-sm text-[#acacac]'>Tenant info</span>
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-2">
                            <FaUserCircle className="text-2xl text-[#00befe]"/>
                            <h3 className='text-1xl text-gray-600'>Masud Ahmed</h3>
                          </div>
                          <div className="flex gap-2">
                            <MdEmail className="text-2xl text-[#00befe]"/>

                            <h3 className="text-1xl text-gray-600">masud@gmail.com</h3>
                          </div>
                        </div>
                    </div>
                </div>
             </div>
             <div className='flex max-[768px]:flex-col gap-6  overflow-hidden w-[480px] h-auto max-[768px]:h-auto bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] cursor-pointer transition-all'>
                <img src={house} alt="" className='max-[768px]:w-full max-[768px]:h-[200px] w-[160px] h-full rounded-xl bg-auto bg-no-repeat bg-center'/>
                <div className='flex flex-col max-[768px]:gap-4 gap-7 w-full h-full'>
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-bold text-2xl'>103/143 West Street, <br/>Crows Nest</h3>
                        <span className='text-sm text-[#acacac]'>10 bedroom</span>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <span className='text-sm text-[#acacac]'>Tenant info</span>
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-2">
                            <FaUserCircle className="text-2xl text-[#00befe]"/>
                            <h3 className='text-1xl text-gray-600'>Masud Ahmed</h3>
                          </div>
                          <div className="flex gap-2">
                            <MdEmail className="text-2xl text-[#00befe]"/>

                            <h3 className="text-1xl text-gray-600">masud@gmail.com</h3>
                          </div>
                        </div>
                    </div>
                </div>
             </div>
   </div>
   </div>
   </div>
  );
}


export default TenantContent;
