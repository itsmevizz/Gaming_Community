import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api"

export const unFollowUser = createAsyncThunk("/unfollow", async(data)=>{
    try{
        const response = await api.unfollow(data)
        return response.data
    }catch(err){
        console.log(err);
    }
})

const unFollowSlice = createSlice({
    name:"follow",
    initialState:{
        followStatue:null,
        error:null,
        loading:false
    },
    extraReducers:{
        [unFollowUser.pending]:(state, action)=>{
            state.loading = true
        },
        [unFollowUser.fulfilled]:(state, action)=>{
            state.followStatue =action.payload
            state.loading = false
        },
        [unFollowUser.rejected]:(state, action)=>{
            state.error = true
        }, 
    }
})

export default unFollowSlice.reducer