import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api"

export const joinToCommunity = createAsyncThunk('/joinCommunity',async (data)=>{
    // console.log(data);
    try{
        const response = await api.joinCommunity(data)
        return response.data
    }catch(err){

    }
})

const joinCommunitySlice = createSlice({
    name:'joinToCommunity',
    initialState:{
        error:null,
        loading:false
    },
    extraReducers:{
        [joinToCommunity.pending]: (state, action) => {
            state.loading = true
            // state.groupChat = null
        },
        [joinToCommunity.fulfilled]: (state, action) => {
            state.loading = false
            alert("Success")
        },
        [joinToCommunity.rejected]: (state, action) => {
            state.error = 'Somthing went wrong'
        },
    }
})

export default joinCommunitySlice.reducer