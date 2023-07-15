// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// import BASE_URL from './BASE_URL'
// import Cookies from 'js-cookie'

// const getToken = () => {
//     return Cookies.get('token')
// }

// export const useSlice = createApi({
//     reducerPath: 'userApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: BASE_URL,
//     }),

//     endpoints: builder => ({
//         getUser: builder.query({
//          query: () => {
//             return {
//               url: ''  
//             }
//          } 
//         })
//     })
// })