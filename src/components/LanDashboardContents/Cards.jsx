import React, { useEffect, useState } from 'react'
import { MdDoNotDisturbOnTotalSilence, MdOutlineHomeWork} from 'react-icons/md'
import { FaUsers, FaUser } from 'react-icons/fa'
import { useGetItemQuery } from '../../store/api/ItemsSlice'

function Cards() {
    const [total, setTotal] = useState()
    const { data: items = []} = useGetItemQuery()

    useEffect(() => {
        setTotal(items.length)
    }, [setTotal, items])

    return (
        <div className='py-8 md:py-6 flex flex-col md:flex-row items-center gap-6'>
            <div className='w-full md:w-[380px] h-[160px] p-6 bg-[#FF6746] rounded-lg flex items-center justify-between shadow-md'>
                <div>
                    <div className='flex gap-2 items-center'>
                      <MdOutlineHomeWork className='text-7xl text-white'/>
                        <div className='flex flex-col gap-2'>
                           <h3 className='text-xl font-bold text-white'>Total Properties</h3> 
                            <p className='text-sm text-[#f6f6f6]'>431 more to break last month record</p>
                        </div>
                    </div>
                    
                </div>
                <h1 className='text-6xl text-white font-bold pr-6'>{total}</h1>
            </div>
            <div className="p-6 flex items-center justify-between w-full md:w-[320px] h-[160px] rounded-lg bg-white shadow-md">
                <div>
                    <h3 className='text-4xl text-[#222] font-bold'>89</h3>
                    <p className='text-lg text-gray-500'>Current Tenants</p>
                </div>
                <FaUsers className='text-8xl text-[#00befe] pr-4'/>
            </div>

            <div className="p-6 flex items-center justify-between w-full md:w-[320px] h-[160px] rounded-lg bg-white shadow-md">
                <div>
                    <h3 className='text-4xl text-[#222] font-bold'>15</h3>
                    <p className='text-lg text-gray-500'>Pending Tenants</p>
                </div>
                <FaUser className='text-6xl text-[#00befe] pr-4'/>
            </div>
        </div>
    )
}

export default Cards