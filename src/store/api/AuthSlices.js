import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import BASE_URL from './BASE_URL'
import Cookies from 'js-cookie'

const setToken = (token) => {
  Cookies.set('token', token, { expires: 10 })
}

export const authSlice = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagsTypes: ["User"],

  endpoints: builder => ({
    // sign up Owner
    signUpOwner: builder.mutation({
      query: (newUser) => ({
        url: '/api/landlords/signup',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['User']
    }),

    // Sign in Owner
    signInOwner: builder.mutation({
      query: (user) => ({
        url: '/api/landlords/login',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],

      onQueryStarted: async (arg, { queryFulfilled }) => {
        try {
          const result = await queryFulfilled;
          setToken(result.data.token)
        } catch (error) {
          console.log(error);
        }

      }

    }),

    // Sign up Renter

    signUp: builder.mutation({
      query: (newUser) => ({
        url: '/api/tenants/signup',
        method: 'POST',
        body: newUser,
      })
    }),

    // Sign in Renter
    signIn: builder.mutation({
      query: (user) => ({
        url: '/api/tenants/login',
        method: 'POST',
        body: user,
      }),

      onQueryStarted: async (arg, { queryFulfilled }) => {
        try {
          const result = await queryFulfilled;
          setToken(result.data.token)
        } catch (error) {
          console.log(error);
        }

      }

    })

  })
})

export const { useSignInOwnerMutation, useSignUpOwnerMutation, useSignInMutation, useSignUpMutation } = authSlice
export default authSlice.reducer