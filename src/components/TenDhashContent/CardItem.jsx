import React from 'react'
import {FaUsers, FaUser} from 'react-icons/fa'
import {MdOutlineHomeWork} from 'react-icons/md'

import {RiFolderSharedLine} from 'react-icons/ri'
import {BsFolderCheck, BsFolderSymlink} from 'react-icons/bs'

function CardItem() {
  return (
<div className='py-6 flex items-center gap-4'>
            <div className='w-[380px] h-[160px] p-6 bg-[#FF6746] rounded-lg flex items-center justify-between shadow-md'>
                <div>
                    <div className='flex gap-2 items-center'>
                      <MdOutlineHomeWork className='text-7xl text-white'/>
                        <div className='flex flex-col gap-3'>
                           <h3 className='text-xl font-bold text-white'>Total Properties</h3> 
                            <p className='text-sm text-[#f6f6f6]'>431 more to break last month record</p>
                        </div>
                    </div>
                </div>
                <h1 className='text-6xl text-white font-bold pr-6 '>28</h1>
            </div>
            <div className="p-6 flex items-center justify-between w-[320px] h-[160px] rounded-lg bg-white shadow-md">
                <div>
                    <h3 className='text-4xl text-[#222] font-bold'>3</h3>
                    <p className='text-lg text-gray-500'>Requests Sent</p>
                </div>
                <BsFolderSymlink className='text-8xl text-[#00befe] pr-4'/>
            </div>

            <div className="p-6 flex items-center justify-between w-[320px] h-[160px] rounded-lg bg-white shadow-md">
                <div>
                    <h3 className='text-4xl text-[#222] font-bold'>3</h3>
                    <p className='text-lg text-gray-500'>Approved Requests</p>
                </div>
                <BsFolderCheck className='text-8xl text-[#00befe] pr-4'/>
            </div>
        </div>
  )
}

export default CardItem