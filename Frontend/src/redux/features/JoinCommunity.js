import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api"

export const joinToCommunity = createAsyncThunk('/joinCommunity',async (data)=>{
    try{
        const response = await api.joinCommunity(data)
        return response.data
    }catch(err){

    }
})

const joinCommunitySlice = createSlice({
    name:'joinToCommunity',
    initialState:{
        status:false,
        error:null,
        loading:false
    },
    extraReducers:{
        [joinToCommunity.pending]: (state, action) => {
            state.status = false
            state.loading = true
        },
        [joinToCommunity.fulfilled]: (state, action) => {
            state.loading = false
            state.status = true
        },
        [joinToCommunity.rejected]: (state, action) => {
            state.error = 'Somthing wrong'
        },
    }
})

export default joinCommunitySlice.reducer