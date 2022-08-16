import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api"

export const getGroupChat = createAsyncThunk('/groupChat', async (id) => {
    try {
        const response = await api.groupChat(id)
        return response.data
    } catch (err) {

    }
})



const groupChatSlice = createSlice({
    name: 'groupChat',
    initialState: {
        groupChat: null,
        error: false,
        loading: false
    },
    extraReducers: {
        [getGroupChat.pending]: (state, action) => {
            state.loading = true
            // state.groupChat = null
        },
        [getGroupChat.fulfilled]: (state, action) => {
            state.groupChat = action.payload
            state.loading = false
        },
        [getGroupChat.rejected]: (state, action) => {
            state.error = true
            state.groupChat = null
        },
    }
})


export default groupChatSlice.reducer