import React from 'react'
// import Loading from '../../assets/images/spinner.jpg'
import {FaTrash, FaEdit} from 'react-icons/fa'
import { useGetItemQuery } from '../../store/api/ItemsSlice'
import {useDelateItemMutation} from '../../store/api/ItemsSlice'
import { Link } from 'react-router-dom'
import { useGetUserLandlordQuery } from '../../store/api/UsersSlice'


function PropertieasContent() {
  
  const {data: user = []} = useGetUserLandlordQuery();

  const {data: items = [], isLoading} = useGetItemQuery()
 
  const [delateItem] = useDelateItemMutation()

  const handleDelate = (property_id) =>{
    delateItem(property_id)
  }

  return (
    <div className='mt-5 bg-white p-6 w-full flex flex-col shadow rounded'>
      {/* title */}
      <div className='flex items-center justify-between'>
            <h3 className='font-bold text-2xl'>My Properties</h3>
        </div>
        {/* Properties */}
         <div className='mt-4 flex justify-center flex-wrap gap-5 p-4 pb-5'>
         {isLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-3xl font-bold flex items-center justify-center uppercase">
               <span class="animate-spin h-8 w-8 mr-3 rounded-full border-2 border-[#00befe] border-t-gray-100 "></span> 
                loading...
              </div>
          </div>
         ) : (
          <>
           {items.map(item => (
            user.id === item.landlord_id && (
              <div key={item.id} className='flex flex-col gap-8 overflow-hidden w-full md:w-[300px] h-auto bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] transition-all'>
            <img src={item.image} alt="" className='w-full h-full rounded-xl bg-auto bg-no-repeat bg-center'/>
            <div className='flex flex-col gap-5 md:gap-6 w-full h-full'>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-2xl'>{item.address}</h3>
                    <span className='text-sm  text-[#00befe]'>{item.title}</span>
                    <span className="text-[#222]">$ {item.rent_fee}</span>
                </div>
                <div className='mt-3 pb-2 flex items-center justify-between'>
                  <FaTrash onClick={() => handleDelate(item.id)}
                  className='text-[#FF6746] text-xl cursor-pointer'/>
                  <Link to={`/landlord/Properties/Edit/${item.id}`}>  
                    <FaEdit className='text-xl text-[#00befe] cursor-pointer'/>
                  </Link>
                </div>
            </div>
            </div> 
            )
          ))}
          </>
         )}            
        </div>
    </div>
  )
}

export default PropertieasContent