import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api"

export const getMyCommuniries = createAsyncThunk('/myCommunities', async (id)=>{

    try{
        const response = await api.myCommunities (id)
        return response.data
    }catch (err){

    }
})

const myCommunitySlice = createSlice({
    name:'myCommunities',
    initialState:{
        myCommunities :null,
        error : null,
        loading : false
    },
    extraReducers:{
        [getMyCommuniries.pending]:(state, action)=>{
            state.loading = true
        },
        [getMyCommuniries.fulfilled]:(state, action)=>{
            state.myCommunities =action.payload
            state.loading = false
        },
        [getMyCommuniries.rejected]:(state, action)=>{
            state.error = true
        },

    }
})