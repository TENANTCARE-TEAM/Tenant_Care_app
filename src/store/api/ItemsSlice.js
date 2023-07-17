import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import BASE_URL from './BASE_URL'
import Cookies from 'js-cookie'

const getToken = () => {
    return   Cookies.get('token')
        
}

export const itemsSlice = createApi({
    reducerPath: 'itemApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
            const token = getToken()
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }

            return headers
        }

    }),
    tagTypes: ['item'],

    endpoints: builder => ({
        getItem: builder.query({
            query: () => ({
                url: '/api/properties',
                method: 'GET'
            }),
            providesTags: ['item']
        }),

        addItem : builder.mutation({
            query: (newItem) => ({
              url: '/api/properties',
              method: 'POST',
              body: newItem
              
            }),
            invalidatesTags: ['item']
        }),

        editItem : builder.mutation({
            query: ({id, update}) => ({
              url: `/api/properties/${id}`,
              method: 'PUT',
              body: update
              
            }),
            invalidatesTags: ['item']
        }),

        
        delateItem : builder.mutation({
            query: (property_id) => ({
              url: `/api/properties/${property_id}`,
              method: 'DELETE',
            }),
            invalidatesTags: ['item']
        }),


    })


})


export const {useGetItemQuery, useAddItemMutation, useEditItemMutation, useDelateItemMutation} = itemsSlice
export default itemsSlice.reducer