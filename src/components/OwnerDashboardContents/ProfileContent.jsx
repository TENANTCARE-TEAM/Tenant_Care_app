import React from 'react'

import { useGetUserLandlordQuery, useUserLandlordDeleteMutation, } from '../../store/api/UsersSlice'

import { PiUserCircleGearFill } from 'react-icons/pi'
import { TbEdit } from 'react-icons/tb'
import { MdOutlineDeleteSweep } from 'react-icons/md'

import { Link, useNavigate } from 'react-router-dom'
function ProfileContent() {
  const navigate = useNavigate()

  const { data: user = [] } = useGetUserLandlordQuery()
  const [deleteUser] = useUserLandlordDeleteMutation()

  const handleDelete = () => {
    deleteUser().unwrap().then(() => {
      navigate('/signIn')
    })
  }
  return (
    <div className='mt-4 bg-[#fff] p-6 w-[360px] mx-auto flex flex-col shadow-xl rounded'>
    <div className='flex flex-col gap-6 mt-6 items-center '>
        <div className="flex flex-col gap-3 items-center">
            <PiUserCircleGearFill className='text-[#00befe] text-9xl'/>
            <h1 className="text-2xl font-bold">{user.first_name} {user.last_name}</h1>
        </div>
        <div className='flex flex-col items-center'>
            <h2 className="text-xl font-medium text-[#00befe]"><span className='text-gray-400'>First Name:</span> {user.first_name}</h2>
            <h2 className="text-xl font-medium text-[#00befe]"> <span className='text-gray-400'>Last Name: </span>{user.last_name}</h2>
            <h2 className="text-xl font-medium text-[#00befe]"> <span className='text-gray-400'> E-mail: </span>{user.email}</h2>
        </div>
        <div className="flex gap-4">
            <Link to='/owner/Profile/Edit'>
            <button 
            className='bg-[#00befe] mt-4 p-3 px-4 rounded-lg shadow-[0px_4px_0px_0px_#03a4da] hover:shadow-[0px_4px_0px_0px_#0387b3] font-medium text-sm text-white cursor-pointer transition-all hover:bg-sky-500 flex  gap-2 items-center'>
               <span>
              <TbEdit size={24}/>
              </span>
          Edit Profile
          </button>
            </Link>
            <button onClick={handleDelete}
            className='bg-[#d81b1b] mt-4 p-3 px-4 rounded-lg font-medium text-sm text-white cursor-pointer transition-al flex  gap-2 items-center'>
            <span>
              <MdOutlineDeleteSweep size={24}/>
              </span>
              Delete
              </button>

        </div>
    </div>
    </div>
  )
}

export default ProfileContent