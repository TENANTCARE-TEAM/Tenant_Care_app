import React from 'react'
import { Link } from 'react-router-dom'
import House from "../../assets/images/House.png"

function Hero() {
  return (
    <div className='p-10'>

    
    <div className="home-page flex items-center p-12 rounded-3xl bg-blue-50 flex-col-reverse md:flex-row justify-between" >
    {/* left-side */}
    <div className="md:w-1/2 space-y-5 p-8 mt-14 md:mt-0">
    <h1 className="text-6xl">Easy way to manage</h1>

      <h2 className="text-4xl">your property</h2>
      <p className="text-lg text-gray-500">
        We take the guess out of managing <br />
        your property
      </p>
      <button
        className="bg-blue-500 px-5 text-white rounded-xl hover:bg-blue-400 py-2 shadow transition-all
    duration-500"
      >
        <Link to="/getStarted">Get Started</Link>
      </button>
    </div>
    <div className='house1'>
      <img className='	 ' src={House} alt="" width={700} height={800}/>
    </div>
  </div>
  </div>
  )
    
}

export default Hero