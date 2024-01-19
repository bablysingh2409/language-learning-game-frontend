import { configureStore } from "@reduxjs/toolkit";
import { userDetailsReducer } from "./reducers/userDetailsReducer";

export const store=configureStore({
    reducer:{
        userDetailsReducer
    }
})