import { configureStore } from "@reduxjs/toolkit";
import { userDetailsReducer } from "./reducers/userDetailsReducer";
import { exerciseDetailsReducer } from "./reducers/exerciseReducer";

export const store=configureStore({
    reducer:{
        userDetailsReducer,
        exerciseDetailsReducer
    }
})