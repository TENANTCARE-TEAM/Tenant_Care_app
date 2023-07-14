import React from 'react'
import Rectangle from '../../assets/images/Rectangle 7.png';

function ViewpropertyContent() {
  return (
    <div className='mt-5 bg-white p-6 w-full flex flex-col shadow rounded'>
      {/* title */}
      <div className='flex'>
          <h3 className='font-bold text-2xl'>Tenants</h3>
      </div>
      {/* content */}
       
      <div className='bg-white w-4/5 ml-10 rounded-lg p-10 
        mb-12'>
          
          <div className='flex'>
           <img src={ Rectangle } alt='viewpropertyi-image'
           className='w-[50%]'/>
            
            <div className='ml-10 w-3/5'>
               <h1 className=' text-[25px] font font-bold text-[#110229]'>Oak Pointe Apartment</h1>
               <p className='leading-[30px] font-semibold '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
              <input type='text' placeholder='10 Bedroom' 
              className='w-full bg-[#BDDFF3] p-3 rounded-[10px] 
              mt-5 text-xl placeholder:text-[#636477] outline-none'/>

               <div className='mt-8'>
                 <button className='py-[8px] px-[20px] rounded-[10px] bg-[#62B7DA] text-xl text-white'>Sende Request</button>
                 <button className='ml-10 bg-[#8f90A6] py-[10px] px-8
                 text-[18px] text-white rounded-[10px]'>$2,932.00</button>
               </div>
              
            </div>
          </div>
        </div>

    </div>
  )
}

export default ViewpropertyContent