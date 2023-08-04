import React from 'react'
import img404 from '../../assets/images/404.png'
import { Link } from 'react-router-dom'

function Content() {
  return (
    <div className='md:px-[9%] flex flex-col items-center justify-center gap-3 p-8 pb-10'>
        <img src={img404} alt="TenantCare" className="w-80" />
        <h2 className="text-center text-xl font-medium">The page you are looking for can’t be found.</h2>
        <Link to='/'>
        <button 
        className='bg-[#00befe] mt-4 p-3 px-4 rounded-lg font-medium text-sm text-white cursor-pointer transition-all hover:bg-sky-500 
        shadow-[0px_4px_0px_0px_#03a4da] hover:shadow-[0px_4px_0px_0px_#0387b3]'>
          GO HOME
          </button>
      </Link>
    </div>
  )
}

export default Content