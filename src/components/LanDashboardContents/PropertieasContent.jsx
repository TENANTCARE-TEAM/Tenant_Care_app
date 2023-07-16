import React from 'react'
import house from '../../assets/images/house-2.jpg'
import {FaTrash, FaEdit} from 'react-icons/fa'
import { useGetItemQuery } from '../../store/api/ItemsSlice'

function PropertieasContent() {
  
   const {data: items = []} = useGetItemQuery()

   console.log(items)

  return (
    <div className='mt-5 bg-white p-6 w-full flex flex-col shadow rounded'>
      {/* title */}
      <div className='flex items-center justify-between'>
            <h3 className='font-bold text-2xl'>My Properties</h3>
        </div>
        {/* Properties */}
         <div className='mt-4 flex flex-wrap gap-5 p-4 pb-5'>
          {items.map(item => (
            <div key={item.id} className='flex flex-col md:flex-row  gap-8 overflow-hidden w-full md:h-[200px] h-auto bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] transition-all'>
            <img src={item.image} alt="" className='w-full md:w-[160px] h-full rounded-xl bg-auto bg-no-repeat bg-center'/>
            <div className='flex flex-col gap-5 w-full h-full'>
                <div className='flex justify-between'>
                    <h3 className='font-bold text-2xl'>{item.address}, <br/>{item.title}</h3>
                    <FaTrash className='text-[#FF6746] text-xl cursor-pointer'/>
                </div>
                <div>
                  <span className='text-sm text-[#acacac]'>{item.availability} bedroom</span>
                </div>
                <div className='mt-3 flex items-center justify-between'>
                    <span className='text-sm text-[#acacac]'>Landlord Name</span>
                    <FaEdit className='text-xl text-[#00befe] cursor-pointer'/>
                </div>
            </div>
            </div> 
          ))}
            
           {/* <div className='flex flex-col md:flex-row  gap-8 overflow-hidden w-full md:h-[200px] h-auto bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] transition-all'>
                <img src={house} alt="" className='w-full md:w-[160px] h-full rounded-xl bg-auto bg-no-repeat bg-center'/>
                <div className='flex flex-col gap-5 w-full h-full'>
                    <div className='flex justify-between'>
                        <h3 className='font-bold text-2xl'>103/143 West Street, <br/>Crows Nest</h3>
                        <FaTrash className='text-[#FF6746] text-xl cursor-pointer'/>
                    </div>
                    <div>
                      <span className='text-sm text-[#acacac]'>10 bedroom</span>
                    </div>
                    <div className='mt-3 flex items-center justify-between'>
                        <span className='text-sm text-[#acacac]'>Landlord Name</span>
                        <FaEdit className='text-xl text-[#00befe] cursor-pointer'/>
                    </div>
                </div>
            </div> */}

            {/* <div className='flex flex-col md:flex-row gap-8 overflow-hidden w-full md:h-[200px] h-auto bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] transition-all'>
                <img src={house} alt="" className='w-full md:w-[160px] h-full rounded-xl bg-auto bg-no-repeat bg-center'/>
                <div className='flex flex-col gap-5 w-full h-full'>
                    <div className='flex justify-between'>
                        <h3 className='font-bold text-2xl'>103/143 West Street, <br/>Crows Nest</h3>
                        <FaTrash className='text-[#FF6746] text-xl cursor-pointer'/>
                    </div>
                    <div>
                      <span className='text-sm text-[#acacac]'>10 bedroom</span>
                    </div>
                    <div className='mt-3 flex items-center justify-between'>
                        <span className='text-sm text-[#acacac]'>Landlord Name</span>
                        <FaEdit className='text-xl text-[#00befe] cursor-pointer'/>
                    </div>
                </div>
            </div> */}
            
        </div>
    </div>
  )
}

export default PropertieasContent