import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useGetUserTenantQuery, useUserTenantDeleteMutation } from '../../store/api/UsersSlice'
import { Link, useNavigate } from 'react-router-dom'

function ProfileContent() {
  const navigate = useNavigate()
  
  const {data: user = []} = useGetUserTenantQuery()
  const [deleteUser] = useUserTenantDeleteMutation()

  const handleDelete = () => {
    deleteUser().unwrap().then(() => {
        navigate('/signIn')
    })
  }
  return (
    <div className='mt-4 bg-white p-6 w-full flex flex-col shadow rounded'>
    {/* title */}
    <div className='flex items-center justify-between'>
        <h3 className='font-bold text-2xl'>My Profile</h3>
    </div>
    {/* content */}
    <div className='flex flex-col gap-6 mt-6'>
        <div className="flex gap-3 items-center">
            <FaUserCircle className='text-[#00befe] text-6xl'/>
            <h1 className="text-2xl font-bold">{user.first_name} {user.last_name}</h1>
        </div>
        <div className='flex flex-col'>
            <h2 className="text-xl font-medium">First Name: {user.first_name}</h2>
            <h2 className="text-xl font-medium">Last Name: {user.last_name}</h2>
            <h2 className="text-xl font-medium">E-mail: {user.email}</h2>
        </div>
        <div className="flex gap-4">
            <Link to='/tenant/Profile/Edit'>
            <button 
            className='bg-[#00befe] mt-4 p-3 px-4 rounded-lg font-medium text-sm text-white cursor-pointer transition-all hover:bg-sky-500'>Edit Profile</button>
            </Link>
            <button onClick={handleDelete}
            className='bg-[#d81b1b] mt-4 p-3 px-4 rounded-lg font-medium text-sm text-white cursor-pointer transition-al'>Delete</button>
        </div>
    </div>
    </div>
  )
}

export default ProfileContent