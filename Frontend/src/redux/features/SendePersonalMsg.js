import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import * as api from "../api"


export const newPersonalMessage = createAsyncThunk("/newPersonalMessage", async (data)=>{
    try{
        const response = await api.newPersonalMessage(data)
        return response.data
    }catch(err){

    }
})


const newPersonalMessageSlice = createSlice({
    name:'personalChat',
    initialState:{
        personalChat : null,
        error:false,
        loading:false
    },
    extraReducers:{
        [newPersonalMessage.pending]:(state, action)=>{
            state.loading = true
        },
        [newPersonalMessage.fulfilled]:(state, action)=>{
            state.personalChat = action.payload
            state.loading = false
        },
        [newPersonalMessage.rejected]:(state, action)=>{
            state.error = true
        },
    }
})

export default newPersonalMessageSlice.reducer