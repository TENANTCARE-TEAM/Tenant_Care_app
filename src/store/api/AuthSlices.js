import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import BASE_URL from './BASE_URL'
import Cookies from 'js-cookie'

const setToken = (token) => {
  Cookies.set('token', token , {expires: 3})  
} 

export const authSlice = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
      baseUrl : BASE_URL ,
    }),

    endpoints: builder => ({
        // sign up Busines
        signUpBu : builder.mutation({
          query : (newUser) => ({
            url : '/api/landlords/signup',
            method: 'POST',
            body: newUser,
          })   
        }),

        // Sign IN Business 
       signInBu: builder.mutation({
        query : (user) => ({
        url: '/api/landlords/login',
        method: 'POST',
        body: user,
        }),
     
        onQueryStarted: async ({queryFulfilled}) => {
            try {
              const result = await queryFulfilled;
              console.log(result);
              setToken(result.data.token)
            } catch (error) {
                console.log(error);
            }

        }

       }),

  // Sign Up Personal

       signUpPe : builder.mutation({
        query : (newUser) => ({
          url : '/api/tenants/signup',
          method: 'POST',
          body: newUser,
        })   
      }),

      // Sign IN Personal
     signInPe: builder.mutation({
      query : (user) => ({
      url: '/api/tenants/login',
      method: 'POST',
      body: user,
      }),
   
      onQueryStarted: async ({queryFulfilled}) => {
          try {
            const result = await queryFulfilled;
            console.log(result);
            setToken(result.data.token)
          } catch (error) {
              console.log(error);
          }

      }

     })

    })
})

export const {useSignInBuMutation, useSignUpBuMutation, useSignInPeMutation, useSignUpPeMutation} = authSlice
export default authSlice.reducer