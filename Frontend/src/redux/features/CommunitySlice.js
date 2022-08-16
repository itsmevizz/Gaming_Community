import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import * as api from "../api"

export const getCommunities = createAsyncThunk("/communities", async()=>{
    try{
        const response = await api.communities()
        return response.data
    }catch(err){

    }
})

export const refreshCommunities = createAsyncThunk("/communities", async()=>{
    try{
        const response = await api.communities()
        return response.data
    }catch(err){

    }
})

const communitySlice = createSlice({
    name:'communities',
    initialState:{
        communities : null,
        error:false,
        loading:false
    },
    extraReducers:{
        [getCommunities.pending]:(state, action)=>{
            state.loading = true
        },
        [getCommunities.fulfilled]:(state, action)=>{
            state.communities =action.payload
            state.loading = false
        },
        [getCommunities.rejected]:(state, action)=>{
            state.error = true
        },
        [refreshCommunities.pending]:(state, action)=>{
            state.loading = false
        },
        [refreshCommunities.fulfilled]:(state, action)=>{
            state.communities =action.payload
        },
        [refreshCommunities.rejected]:(state, action)=>{
            state.error = true
        },
    }
})

export default communitySlice.reducer