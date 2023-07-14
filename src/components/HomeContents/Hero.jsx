import React from 'react'
import { Link } from 'react-router-dom'
import House from "../../assets/images/House.png"

function Hero() {
  return (
    <div className="flex items-center p-12 md:px-[10%] bg-[#ECF1F8] flex-col-reverse md:flex-row justify-between" >
     <div className="md:w-1/2 space-y-5 p-8 mt-14 md:mt-0">
      <h1 className="text-6xl">Easy way to manage</h1>
      <h2 className="text-4xl">your property</h2>
      <p className="text-lg text-gray-500">
        We take the guess out of managing <br />
        your property
      </p>
      <Link to='/GetStarted'>
        <button 
        className='bg-[#00befe] mt-4 p-3 px-4 rounded-lg font-medium text-sm text-white cursor-pointer transition-all hover:bg-sky-500'>GET STARTED</button>
      </Link>
    </div>
    <div className='house1'>
      <img className='rounded-xl' src={House} alt="" width={600} height={700}/>
    </div>
  </div>
  )
    
}

export default Hero