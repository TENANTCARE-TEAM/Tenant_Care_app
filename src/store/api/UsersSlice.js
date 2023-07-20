import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
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
            if(token) {
                headers.set("Authorization", `Berear ${token}`)
            }
            return headers
        }
    }),
    tagTypes: ["userApi"],

    endpoints: builder => ({
        getUserTenant: builder.query({
         query: () => {
            return {
              url: '/api/tenants/profile',
              method: 'GET'
            }
         },
         providesTags: ["userApi"]
        }),

        editUserTenant : builder.mutation({
            query: (newData) => ({
              url: `/api/tenants/update_profile`,
              method: 'PUT',
              body: newData
              
            }),
            invalidatesTags: ['userApi']
        }),

        
        userTenantDelete: builder.mutation({
            query: () => ({
              url: `/api/tenants/delete_profile`,
              method: 'DELETE',
            }),
            invalidatesTags: ['userApi']
        }),

        SendRequests: builder.mutation({
          query: (property_id) => ({
            url: `/api/properties/${property_id}/request`,
            method: 'POST',
          }),
          invalidatesTags: ['userApi']
        }),

        ApproveRequest: builder.mutation({
          query: (property_id, tenant_id) => ({
            url: `/api/properties/${property_id}/approve`,
            method: "POST",
            body: tenant_id
          }),
          invalidatesTags: ['userApi']

        }),

        getUserLandlord: builder.query({
          query: () => {
             return {
               url: '/api/landlords/profile',
               method: 'GET'
             }
          },
          providesTags: ["userApi"]
      }),

      getRequests: builder.query({
        query: () => {
          return  {
            url: '/api/landlords/requests_to_approve',
            method: "GET"
          }
        },
        providesTags: ["userApi"]
      }),

      editUserLandlord : builder.mutation({
          query: (newData) => ({
            url: `/api/landlords/update_profile`,
            method: 'PUT',
            body: newData
            
          }),
          invalidatesTags: ['userApi']
      }),

      userLandlordDelete : builder.mutation({
          query: () => ({
            url: `/api/landlords/delete_profile`,
            method: 'DELETE',
          }),
          invalidatesTags: ['userApi']
      }),

      getTenants: builder.query({
        query: () => {
          return {
            url: "/api/landlords/approved_requests",
            method: 'GET'
          }
        }
      })
    })
})

export const {
    useGetUserTenantQuery,
    useGetUserLandlordQuery, 
    useEditUserLandlordMutation,
    useEditUserTenantMutation,
    useUserTenantDeleteMutation,
    useUserLandlordDeleteMutation,
    useSendRequestsMutation,
    useGetRequestsQuery,
    useApproveRequestMutation,
    useGetTenantsQuery
} = userSlice

export default userSlice.reducer