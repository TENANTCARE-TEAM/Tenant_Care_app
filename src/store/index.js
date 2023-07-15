import { configureStore } from "@reduxjs/toolkit";
import  {authSlice}  from "./api/AuthSlices";
import { setupListeners } from "@reduxjs/toolkit/dist/query";


export const store = configureStore({
   reducer: {
    [authSlice.reducerPath]: authSlice.reducer
   },
   
   middleware: (getDefaultMiddleware) => 
   getDefaultMiddleware()
   .concat(authSlice.middleware)
   
})

setupListeners(store.dispatch)