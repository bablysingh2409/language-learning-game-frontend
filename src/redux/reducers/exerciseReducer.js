import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../sevices/auth";


// Async thunk for fetching user data
export const fetchExerciseDetails=createAsyncThunk( "exerciseDetails",async(userData)=>{
     try{
       const data=await login(userData);
       console.log(data)
       return data;
     }
     catch(err){
        return err;
     }
}   )



const exerciseSlice=createSlice({
name:'userDetails',
initialState:{
    exercises:[],
    isLogin:false,
    loading:false,
    error:null
},
reducers: {
},
extraReducers:(builder)=>{
    builder
    .addCase(fetchExerciseDetails.pending,(state)=>{
        state.loading=true;
        state.error=null;
    })
    .addCase(fetchExerciseDetails.fulfilled,(state,action)=>{
        state.loading=false;
        state.exercises=action.payload;
        state.isLogin=true;
    })
    .addCase(fetchExerciseDetails.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.payload
    })
}
})


export const userDetailsReducer=userDetailsSlice.reducer;
export const userDetailSelector=(state)=>state.userDetailsReducer;
export const actions=userDetailsSlice.actions;