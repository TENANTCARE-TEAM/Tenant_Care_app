import React from 'react'
import {FaSearch} from 'react-icons/fa'

function Search({inputValue, onInputChange}) {
  return (
    <div>
         <div
            className="hidden md:flex justify-between items-center rounded-lg bg-[#f6f6f6] px-3 py-2 w-[400px] ">
                <input 
                type="text"
                placeholder="Search Property" 
                className='w-full bg-[#f6f6f6] outline-none'
                value={inputValue} onChange={onInputChange}/>
                <FaSearch className='text-[#acacac] mr-2 cursor-pointer text-xl'/>
            </div>
    </div>
  )
}

export default Search