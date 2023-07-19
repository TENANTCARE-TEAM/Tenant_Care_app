import React from 'react'
import house from '../../assets/images/house-2.jpg'
import house2 from '../../assets/images/house-3.jpg'
import { Link } from 'react-router-dom';

import {useGetItemQuery} from '../../store/api/ItemsSlice'

function ItemCard() {

const {data: items = [], isLoading} = useGetItemQuery()

  return (
    <div className='px[6%] md:px-[9%] bg-white p-6 w-full flex flex-col shadow rounded'>
        <div className='flex items-center justify-between md:mx-16 mx-6'>
            <h3 className='font-bold md:text-2xl text-xl ml-[-9px]'>Recently Added</h3>
            <Link to = '/signIn'>
            <span className='text-[#00befe] text-sm'>See all</span>
            </Link>
        </div>
        {/* Recent items */}
        <div className='mt-4 flex items-center justify-center flex-wrap gap-5 p-4 pb-5 '>
            {/* item */}
            {isLoading ? (
                <div className="w-full h-full flex items-center justify-center">
                <div className="text-3xl font-bold flex items-center justify-center uppercase">
                <span class="animate-spin h-8 w-8 mr-3 rounded-full border-2 border-[#00befe] border-t-gray-100 "></span> 
                    loading...
                </div>
                </div>
            ) : (
                <>
                {items.slice(-7, -1).map(item =>           
               <div key={item.id} className='flex flex-col md:flex-row gap-6  overflow-hidden w-[480px] md:h- h-auto bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] cursor-pointer transition-all'>
                    <img src={item.image} alt="" className='w-full h-[200px] md:w-[160px] md:h-full rounded-xl bg-auto bg-no-repeat bg-center'/>
                    <div className='flex flex-col gap-4 md:gap-7 w-full '>
                        <div className='flex flex-col gap-3'>
                            <h3 className=' text-2xl'> {item.address}</h3>
                            <span className='text-sm text-[#00befe]'> <b>{item.title}</b></span>
                        </div>
                        <div className='flex items-center justify-between'>
                        <span className='text-sm text-[#222] '><b className="text-[#b7b6b6]">{item.description}</b></span>
                            <button className='py-2 px-3 bg-slate-500 text-white rounded-lg'>{item.rent_fee} $</button>
                        </div>
                    </div>
                </div>
                )}
                </>
            )}

        </div>
  
    </div>
    
    )
}

export default ItemCard