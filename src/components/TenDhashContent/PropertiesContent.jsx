import React from 'react'
import house from '../../assets/images/house-2.jpg'
import house2 from '../../assets/images/house-3.jpg'
import { Link } from 'react-router-dom'
import { useGetItemQuery } from '../../store/api/ItemsSlice'


function PropertiesContent() {
  const {data: items = [], isLoading} = useGetItemQuery();

  return (
    <div className='mt-4 bg-white p-6 w-full flex flex-col shadow rounded'>
        {/* title */}
        <div className='flex items-center justify-between'>
            <h3 className='font-bold text-2xl'>All Properties</h3>
        </div>
        {/* properties */}
        <div className="mt-4 flex flex-wrap gap-5 p-4 pb-5">
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center">
            <div className="text-3xl font-bold flex items-center justify-center uppercase">
               <span class="animate-spin h-8 w-8 mr-3 rounded-full border-2 border-[#00befe] border-t-gray-100 "></span> 
                loading...
              </div>
          </div>
          ) : (
            <>
            {items.map(item =>   
            <Link to={`/Tenant/dashboard/ViewProperty/${item.id}`}>       
           <div key={item.id} className='flex flex-col md:flex-row gap-6  overflow-hidden w-[480px] md:h-[200px] h-auto bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] cursor-pointer transition-all'>
                <img src={item.image} alt="" className='w-full h-[200px] md:w-[160px] md:h-full rounded-xl bg-auto bg-no-repeat bg-center'/>
                <div className='flex flex-col gap-4 md:gap-7 w-full '>
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-bold text-2xl'> {item.address}, <br/>{item.title}</h3>
                        <span className='text-sm text-[#acacac]'>{item.availability} availability</span>
                    </div>
                    <div className='flex items-center justify-between'>
                    <span className='text-sm text-[#4aa347] '>APARTMENT_NAME: <b className="text-[#ff6347]">{item.title}</b></span>
                        <button className='py-2 px-3 bg-slate-500 text-white rounded-lg'>{item.rent_fee}$</button>
                    </div>
                </div>
            </div>
            </Link> 
            )}
            </>
          )}
        </div>
    </div>
  )
}

export default PropertiesContent