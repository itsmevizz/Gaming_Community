import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import * as api from "../api"


export const newCommunityMessage = createAsyncThunk("/newCommunityMessage", async (data)=>{
    try{
        const response = await api.newCommunityMessage(data)
        return response.data
    }catch(err){

    }
})


const newCommunityChatSlice = createSlice({
    name:'communityChat',
    initialState:{
        communityChat : null,
        error:false,
        loading:false
    },
    extraReducers:{
        [newCommunityMessage.pending]:(state, action)=>{
            state.loading = true
        },
        [newCommunityMessage.fulfilled]:(state, action)=>{
            state.communityChat =action.payload
            state.loading = false
        },
        [newCommunityMessage.rejected]:(state, action)=>{
            state.error = true
        },
    }
})

export default newCommunityChatSlice.reducer