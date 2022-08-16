import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api"

export const FollowUser = createAsyncThunk("/follow", async(data)=>{
    console.log(data);
    try{
        const response = await api.follow(data)
        return response.data
    }catch(err){
        console.log(err);
    }
})

const followSlice = createSlice({
    name:"follow",
    initialState:{
        followStatue:null,
        error:null,
        loading:false
    },
    extraReducers:{
        [FollowUser.pending]:(state, action)=>{
            state.loading = true
        },
        [FollowUser.fulfilled]:(state, action)=>{
            state.followStatue =action.payload
            state.loading = false
        },
        [FollowUser.rejected]:(state, action)=>{
            state.error = true
        }, 
    }
})

export default followSlice.reducer