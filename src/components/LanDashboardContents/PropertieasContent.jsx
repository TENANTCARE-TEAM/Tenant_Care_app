import React, { useState, useEffect } from 'react'
// import Loading from '../../assets/images/spinner.jpg'
import {FaTrash, FaEdit} from 'react-icons/fa'
import { useGetItemQuery } from '../../store/api/ItemsSlice'
import {useDelateItemMutation} from '../../store/api/ItemsSlice'
import { Link } from 'react-router-dom'
import { useGetUserLandlordQuery } from '../../store/api/UsersSlice'
import notFound from '../../assets/images/NotFound.png'
import {ToastContainer, toast} from 'react-toastify'
import Search from './Search'



function PropertieasContent() {
  
  const [ search, setSearch ] = useState("");
  const [filteredItems, setFilteredItems ] = useState([]);

  
 
  const {data: user = []} = useGetUserLandlordQuery();

  const {data: items = [], isLoading} = useGetItemQuery()
 
  const [delateItem] = useDelateItemMutation()

  const MyItem = items.filter(item => item.landlord_id === user.id)
  console.log(MyItem)

  const handleDelate = (property_id) =>{
    if(confirm("Are you sure ?")){
      delateItem(property_id).then(() => {
        toast.success("Property deleted successfully")
      })
    }
  }

  useEffect(()=> {
    setFilteredItems(
     MyItem.filter((item) => item.title.toLowerCase()
      .includes(search.toLowerCase()))
    )
  }, [search, items]);

  const handleSearch = (e) => {
    setSearch(e.target.value)
   }

  return (
    <div className='mt-5 bg-white p-6 w-full flex flex-col shadow rounded'>
      {/* title */}
      <ToastContainer/>
      <div className='flex items-center justify-between'>
            <h3 className='font-bold text-2xl'>My Properties</h3>
           
            <Search inputValue={search} onInputChange={handleSearch }
            />
        </div>
        {/* Properties */}
         <div className='mt-4 flex justify-center flex-wrap gap-5 p-4 pb-5'>
         {isLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-3xl font-bold flex items-center justify-center uppercase">
               <span className="animate-spin h-8 w-8 mr-3 rounded-full border-2 border-[#00befe] border-t-gray-100 "></span> 
                loading...
              </div>
          </div>
         ) : (
          <>
           {MyItem.length === 0 ? (
            <div className="flex flex-col w-full !h-[60vh] items-center justify-center">
              <img src={notFound} alt="" className="w-50 h-80"/>
              <h1 className="font-medium text-xl text-gray-400">Properties not found</h1>
            </div>
           ) : (
            <>
            {filteredItems.map(item => (
               <div key={item.id} className='flex flex-col gap-6  overflow-hidden w-[300px] bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] transition-all'>
             <img src={item.image} alt="" 
             className='w-full h-[180px]  rounded-xl bg-auto bg-no-repeat bg-center'/>
             <div className='flex flex-col gap-4 md:gap-4 w-full'>
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
           ))}
           </>
           )}
          </>
         )}            
        </div>
    </div>
  )
}

export default PropertieasContent