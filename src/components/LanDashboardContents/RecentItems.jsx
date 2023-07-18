import React from 'react'
import house from '../../assets/images/house-2.jpg'
import house2 from '../../assets/images/house-3.jpg'
import { Link } from 'react-router-dom'
import { useGetItemQuery } from '../../store/api/ItemsSlice'

function RecentItems() {

    const {data : items = []} = useGetItemQuery()

  return (
    <div className='bg-white p-6 w-full flex flex-col shadow rounded'>
        <div className='flex items-center justify-between'>
            <h3 className='font-bold text-2xl'>Recently Added</h3>
            <span className='text-[#00befe]'>See all</span>
        </div>
        {/* Recent items */}
        <div className='mt-4 flex flex-wrap gap-5 p-4 pb-5'>
            {/* item */} 
           <>
            {items.slice(6).map(item =>           
           <div key={item.id} className='flex flex-col md:flex-row gap-6  overflow-hidden w-[480px] md:h-[200px] h-auto bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] cursor-pointer transition-all'>
                <img src={item.image} alt="" className='w-full h-[200px] md:w-[160px] md:h-full rounded-xl bg-auto bg-no-repeat bg-center'/>
                <div className='flex flex-col gap-4 md:gap-7 w-full '>
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-bold text-2xl'> {item.address}, <br/>{item.title}</h3>
                        <span className='text-sm text-[#acacac]'>{item.availability} availability</span>
                    </div>
                    <div className='flex items-center justify-between'>
                    <span className='text-sm text-[#222] '>Aparment Name: <b className="text-[#555]">{item.title}</b></span>
                        <button className='py-2 px-3 bg-slate-500 text-white rounded-lg'>{item.rent_fee} $</button>
                    </div>
                </div>
            </div>
            )}
            </>
           

        </div>
    </div>
  )
}

export default RecentItems