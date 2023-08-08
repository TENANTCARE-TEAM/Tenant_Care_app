import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter,  } from "react-icons/fa";
import { Link } from "react-router-dom";
import Yaasiin_Ahmed from '../../assets/images/Yaasiinahmed.jpg'
import Abdicasiis_halane from '../../assets/images/Abdicasiis-halane.png'
import ibrahim_ali from '../../assets/images/ibrahim_ali.png'
import Masud_ahmed from '../../assets/images/Masud-ahmed.jpeg'
import Hiba_ali from '../../assets/images/hiba-ali.jfif'
import Xabiib_ali from '../../assets/images/Xabiib-Ali.jfif'


function Teams() {
  return (
    <div className='md:px-[10%] px-6 py-2 pb-12 flex flex-col gap-4'>
        <h1 className='text-center font-bold text-3xl'>Our <span className='text-[#00befe]'>Team</span></h1>
        <div className='flex flex-wrap items-center justify-center mt-2 gap-8 md:px-[12%] px-[6%]'>
            <div className='p-8 bg-white rounded-lg shadow-lg border flex flex-col items-center justify-center gap-2'>
                <div className='w-[180px] rounded-full overflow-hidden p-[3px] border-2 border-[#00befe]'>
                    <img src={Abdicasiis_halane} alt="Yaasiin Ahmed" className='w-full h-full rounded-full'/>
                </div>
                <h3 className='font-bold text-xl'>Abdiasiis Halane</h3>
                <span className='text-gray-500'>Team Leader</span>
                <div className="flex gap-3 mt-4 text-[#00befe]">
                    <Link to='https://www.facebook.com/AmesaSolutions'><FaFacebook /></Link>
                    <Link to='https://twitter.com/abdiasishasen'><FaTwitter /></Link>
                    <Link to='https://github.com/abdiasiis78'><FaGithub /></Link>
                </div>
            </div>

            <div className='p-8 bg-white rounded-lg shadow-lg border flex flex-col items-center justify-center gap-2'>
                <div className='w-[180px] rounded-full overflow-hidden p-[3px] border-2 border-[#00befe]'>
                    <img src={Yaasiin_Ahmed} alt="Yaasiin Ahmed" className='w-full h-full rounded-full'/>
                </div>
                <h3 className='font-bold text-xl'>Yaasiin Ahmed</h3>
                <span className='text-gray-500'>Member</span>
                <div className="flex gap-3 mt-4 text-[#00befe]">
                    <Link to='https://www.linkedin.com/in/yaasiin-ahmed-92126725b/'><FaLinkedinIn /></Link>
                    <Link to='https://twitter.com/yaasiin__ahmed'><FaTwitter /></Link>
                    <Link to='https://github.com/yaasiinaxmed'><FaGithub /></Link>
                </div>
            </div>

            <div className='p-8 bg-white rounded-lg shadow-lg border flex flex-col items-center justify-center gap-2'>
                <div className='w-[180px] rounded-full overflow-hidden p-[3px] border-2 border-[#00befe]'>
                    <img src={ibrahim_ali} alt="Yaasiin Ahmed" className='w-full h-full rounded-full'/>
                </div>
                <h3 className='font-bold text-2xl'>Ibraahim Ali</h3>
                <span className='text-gray-500'>Member</span>
                <div className="flex gap-3 mt-4 text-[#00befe]">
                    <Link to='https://twitter.com/Ibrahim26592495'><FaTwitter /></Link>
                    <Link to='https://www.instagram.com/ibrahim_ah25/'><FaInstagram /></Link>
                    <Link to='https://github.com/Ibr-Ab455'><FaGithub /></Link>
                </div>
            </div>

            <div className='p-8 bg-white rounded-lg shadow-lg border flex flex-col items-center justify-center gap-2'>
                <div className='w-[180px] rounded-full overflow-hidden p-[3px] border-2 border-[#00befe]'>
                    <img src={Masud_ahmed} alt="Yaasiin Ahmed" className='w-full h-full rounded-full'/>
                </div>
                <h3 className='font-bold text-xl'>Masud Ahmed</h3>
                <span className='text-gray-500'>Member</span>
                <div className="flex gap-3 mt-4 text-[#00befe]">
                    <Link to='https://www.instagram.com/masudahmed__/'><FaInstagram /></Link>
                    <Link to='https://twitter.com/azamyrj'><FaTwitter /></Link>
                    <Link to='https://github.com/masuud-ahmed'><FaGithub /></Link>
                </div>
            </div>

            <div className='p-8 bg-white rounded-lg shadow-lg border flex flex-col items-center justify-center gap-2'>
                <div className='w-[180px] rounded-full overflow-hidden p-[3px] border-2 border-[#00befe]'>
                    <img src={Hiba_ali} alt="Yaasiin Ahmed" className='w-full h-full rounded-full'/>
                </div>
                <h3 className='font-bold text-xl'>Hiba Ali</h3>
                <span className='text-gray-500'>Member</span>
                <div className="flex gap-3 mt-4 text-[#00befe]">
                    <Link to='https://www.facebook.com/AmesaSolutions'><FaFacebook /></Link>
                    <Link to='https://twitter.com/AmesaSolutions'><FaTwitter /></Link>
                    <Link to='https://github.com/HCC-Smart'><FaGithub /></Link>
                </div>
            </div>

            <div className='p-8 bg-white rounded-lg shadow-lg border flex flex-col items-center justify-center gap-2'>
                <div className='w-[180px] rounded-full overflow-hidden p-[3px] border-2 border-[#00befe]'>
                    <img src={Xabiib_ali} alt="Yaasiin Ahmed" className='w-full h-full rounded-full'/>
                </div>
                <h3 className='font-bold text-xl'>Xabiib Ali</h3>
                <span className='text-gray-500'>Member</span>
                <div className="flex gap-3 mt-4 text-[#00befe]">
                    <Link to='https://www.facebook.com/AmesaSolutions'><FaFacebook /></Link>
                    <Link to='https://twitter.com/AmesaSolutions'><FaTwitter /></Link>
                    <Link to='https://github.com/xabiibali'><FaGithub /></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Teams