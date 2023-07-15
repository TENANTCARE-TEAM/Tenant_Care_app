import React from 'react'
import house from '../../assets/images/house-2.jpg'
import house2 from '../../assets/images/house-3.jpg'
import { Link } from 'react-router-dom'


function RecentItems() {
  return (
    <div className='bg-white p-6 w-full flex flex-col shadow rounded'>
        <div className='flex items-center justify-between'>
            <h3 className='font-bold text-2xl'>Recently Added</h3>
            <span className='text-[#00befe]'>See all</span>
        </div>
        {/* Recent items */}
        <div className='mt-4 flex flex-wrap gap-5 p-4 pb-5'>
            {/* item */}
            <div className='flex max-[768px]:flex-col gap-6  overflow-hidden w-[480px] h-[200px] max-[768px]:h-auto bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] cursor-pointer transition-all'>
                <img src={house2} alt="" className='max-[768px]:w-full max-[768px]:h-[200px] w-[160px] h-full rounded-xl bg-auto bg-no-repeat bg-center'/>
                <div className='flex flex-col max-[768px]:gap-4 gap-7 w-full h-full'>
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-bold text-2xl'>103/143 West Street, <br/>Crows Nest</h3>
                        <span className='text-sm text-[#acacac]'>10 bedroom</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <span className='text-sm text-[#acacac]'>Landlord Name</span>
                        <button className='py-2 px-3 bg-slate-500 text-white rounded-lg'>$220.09</button>
                    </div>
                </div>
            </div>

            <div className='flex max-[768px]:flex-col gap-6  overflow-hidden w-[480px] h-[200px] max-[768px]:h-auto bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] cursor-pointer transition-all'>
                <img src={house2} alt="" className='max-[768px]:w-full max-[768px]:h-[200px] w-[160px] h-full rounded-xl bg-auto bg-no-repeat bg-center'/>
                <div className='flex flex-col max-[768px]:gap-4 gap-7 w-full h-full'>
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-bold text-2xl'>103/143 West Street, <br/>Crows Nest</h3>
                        <span className='text-sm text-[#acacac]'>10 bedroom</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <span className='text-sm text-[#acacac]'>Landlord Name</span>
                        <button className='py-2 px-3 bg-slate-500 text-white rounded-lg'>$220.09</button>
                    </div>
                </div>
            </div>

            <div className='flex max-[768px]:flex-col gap-6  overflow-hidden w-[480px] h-[200px] max-[768px]:h-auto bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] cursor-pointer transition-all'>
                <img src={house} alt="" className='max-[768px]:w-full max-[768px]:h-[200px] w-[160px] h-full rounded-xl bg-auto bg-no-repeat bg-center'/>
                <div className='flex flex-col max-[768px]:gap-4 gap-7 w-full h-full'>
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-bold text-2xl'>103/143 West Street, <br/>Crows Nest</h3>
                        <span className='text-sm text-[#acacac]'>10 bedroom</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <span className='text-sm text-[#acacac]'>Landlord Name</span>
                        <button className='py-2 px-3 bg-slate-500 text-white rounded-lg'>$220.09</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default RecentItems