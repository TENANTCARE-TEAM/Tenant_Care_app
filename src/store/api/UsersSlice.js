import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import BASE_URL from './BASE_URL'
import Cookies from 'js-cookie'

const getToken = () => {
  return Cookies.get('token')
}

export const userSlice = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = getToken()
      if (token) {
        headers.set("Authorization", `Berear ${token}`)
      }
      return headers
    }
  }),
  tagTypes: ["userApi"],

  endpoints: builder => ({

    // Get User Renter profile
    getUserTenant: builder.query({
      query: () => {
        return {
          url: '/api/tenants/profile',
          method: 'GET'
        }
      },
      providesTags: ["userApi"]
    }),

    // Update User Renter profile
    editUserTenant: builder.mutation({
      query: (newData) => ({
        url: `/api/tenants/update_profile`,
        method: 'PUT',
        body: newData
      }),
      invalidatesTags: ['userApi']
    }),

    // Delete User Renter
    userTenantDelete: builder.mutation({
      query: () => ({
        url: `/api/tenants/delete_profile`,
        method: 'DELETE',
      }),
      invalidatesTags: ['userApi']
    }),

    // Get User Owner Profile
    getUserLandlord: builder.query({
      query: () => {
        return {
          url: '/api/landlords/profile',
          method: 'GET'
        }
      },
      providesTags: ["userApi"]
    }),

    // Update User Owner Profile
    editUserLandlord: builder.mutation({
      query: (newData) => ({
        url: `/api/landlords/update_profile`,
        method: 'PUT',
        body: newData

      }),
      invalidatesTags: ['userApi']
    }),

    // Delete User Owner
    userLandlordDelete: builder.mutation({
      query: () => ({
        url: `/api/landlords/delete_profile`,
        method: 'DELETE',
      }),
      invalidatesTags: ['userApi']
    }),
  })
})

export const {
  useGetUserTenantQuery,
  useGetUserLandlordQuery,
  useEditUserLandlordMutation,
  useEditUserTenantMutation,
  useUserTenantDeleteMutation,
  useUserLandlordDeleteMutation,
} = userSlice

export default userSlice.reducer