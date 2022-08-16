import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../api"

export const createCommunity = createAsyncThunk("/createCommunity",async(data)=>{
    try{
        const response = await api.createCommunity(data)
        return response.data
    }catch(err){

    }
})


const NewCommunitySlice = createSlice({
    name:"newCommunity",
    initialState :{
        NewCommunity:null,
        loaging:false
    },
    extraReducers:{
        
    }
})