import { configureStore } from "@reduxjs/toolkit";
import  {authSlice}  from "./api/AuthSlices";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { itemsSlice } from "./api/ItemsSlice";

export const store = configureStore({
   reducer: {
    [authSlice.reducerPath]: authSlice.reducer,
    [itemsSlice.reducerPath]: itemsSlice.reducer
   },
   
   middleware: (getDefaultMiddleware) => 
   getDefaultMiddleware()
   .concat(authSlice.middleware)
   .concat(itemsSlice.middleware)
   
})

setupListeners(store.dispatch)