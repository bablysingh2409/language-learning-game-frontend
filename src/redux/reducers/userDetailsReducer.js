import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../sevices/auth";


// Async thunk for fetching user data
export const fetchUserDetails=createAsyncThunk( "userDetails",async(userData)=>{
     try{
       const data=await login(userData);
       return data;
     }
     catch(err){
        return err;
     }
}   )


const userDetailsSlice=createSlice({
name:'userDetails',
initialState:{
    user:[],
    isLogin:false,
    loading:false,
    error:null
},
reducers: {
    logout: (state) => {
      state.isLogin = false;
      state.user = [];
    },
    updatedScore:(state,action)=>{
        state.user.scores=action.payload.scores;
    },
    
   
},
extraReducers:(builder)=>{
    builder
    .addCase(fetchUserDetails.pending,(state)=>{
        state.loading=true;
        state.error=null;
    })
    .addCase(fetchUserDetails.fulfilled,(state,action)=>{
        state.loading=false;
        state.user=action.payload;
        state.isLogin=true;
    })
    .addCase(fetchUserDetails.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.payload
    })
}
})


export const userDetailsReducer=userDetailsSlice.reducer;
export const userDetailSelector=(state)=>state.userDetailsReducer;
export const actions=userDetailsSlice.actions;