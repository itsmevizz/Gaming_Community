import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as api from "../api"

export const login = createAsyncThunk('auth/login', async ({ email, password, navigation, toast }, {rejectWithValue}) => {
    try {
        const response = await api.signin({ email, password })
        toast.success("Login Successfull")
        navigation('/')
        return response.data
    } catch (err) {
        rejectWithValue(err.response.data)
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        error: "",
        loading: false,
    },
    extraReducers: {
        [login.pending]: (state, action) => {
            state.loading = true
        },
        [login.fulfilled]: (state, action) => {
            state.loading = false
            localStorage.setItem("user", JSON.stringify({ ...action.payload }))
            state.user = action.payload
        },
        [login.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload.message
        }
    }
})


export default authSlice.reducer