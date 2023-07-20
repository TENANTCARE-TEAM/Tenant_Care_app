import React from 'react'
import {FaFacebook, FaYoutube, FaTwitter, FaInstagram} from 'react-icons/fa'
function Footer() {
  return (
    
        <footer className='w-full py-10 px-[4%] bg-[#ECF1F8]'>
            <div className='flex flex-col-reverse md:grid md:grid-cols-4 gap-4'>
                <div className='flexflex-col gap-2'>
                    <h1 className='text-xl font-bold text-slate-900 cursor-pointer'>TENANT<span className='text-[#00befe]'>CARE</span></h1>
                    <p className='text-gray-400 break-words'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className='flex gap-3 mt-4 text-[#00befe]'>
                       <FaFacebook/>
                       <FaYoutube/>
                       <FaTwitter/>
                       <FaInstagram/>
                    </div>
                    <p className='md:mt-2 mt-5 text-gray-500 text-sm max-[768px]:text-center '>© 2023 . All rights reserved.</p>
                </div>
                <div className='hidden md:flex flex-col gap-2'>
                    <span className='text-[#222] font-medium'>Take a tour</span>
                    <a className='text-gray-400'>Features</a>
                    <a className='text-gray-400'>Partners</a>
                    <a className='text-gray-400'>Pricing</a>
                    <a className='text-gray-400'>Product</a>
                    <a className='text-gray-400'>Support</a>
                </div>
                <div className='hidden md:flex flex-col gap-2'>
                    <span className='text-[#222] font-medium'>Our Company</span>
                    <a className='text-gray-400'>About Us</a>
                    <a className='text-gray-400'>Agents</a>
                    <a className='text-gray-400'>Blog</a>
                    <a className='text-gray-400'>Media</a>
                    <a className='text-gray-400'>Contact Us</a>
                </div>
                <div className='flex flex-col gap-4'>
                    <span className='text-[#222] font-medium'>Subscribe</span>
                    <p className='mt-2 text-gray-500 text-sm'>Subscribe to get latest property, blog news from us</p>
                    <div className='flex flex-col gap-4'>
                        <input type="text" placeholder='Email address ' className='outline-none p-3 bg-white rounded-lg'/>
                        <div className='w-full text-center bg-[#00befe] p-3 px-4 rounded-lg font-medium text-sm text-white cursor-pointer transition-all hover:bg-sky-500'>Subscribe</div>
                    </div>
                </div>
            </div>
        </footer>
      
  )
}

export default Footer