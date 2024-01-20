import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getExerciseByLanguage } from "../../sevices/userSevice";

// Async thunk for fetching user data
export const fetchExerciseDetails=createAsyncThunk( "exerciseDetails",async(language)=>{
     try{
       const data=await getExerciseByLanguage(language);
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
        
    })
    .addCase(fetchExerciseDetails.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.payload
    })
}
})


export const exerciseDetailsReducer=exerciseSlice.reducer;
export const exerciseDetailSelector=(state)=>state.exerciseDetailsReducer   ;
