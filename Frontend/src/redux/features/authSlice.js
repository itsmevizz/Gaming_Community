import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import * as api from "../api"

export const login = createAsyncThunk('auth/login', async ({ email, password, navigation, toast }, { rejectWithValue }) => {
    try {
        const response = await api.signin({ email, password })
        toast.success("Login Successfull")
        navigation('/')
        return response.data
    } catch (err) {
        return rejectWithValue(err.response.data)
    }
})


export const ValidateToken = createAsyncThunk('auth/validateToken', async (token, { rejectWithValue }) => {
    try {
        const response = await api.ValidateToken()
        console.log(response,'fine');
        return response.data
    } catch (err) {
        return rejectWithValue(err.response.data)
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
            state.user = action.payload
            localStorage.setItem("Token", action.payload.token)
        },
        [login.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload.message
        },
        [ValidateToken.pending]:(state, action)=>{
            state.loading= true
        },
        [ValidateToken.fulfilled]:(state, action)=>{
            state.loading = false
            state.user = action.payload
            console.log(state.user,"Hi user");
        },
        [ValidateToken.rejected]:(state, action)=>{
            state.loading = false
            state.user = null
            state.error = action.payload.message
        }
    }
})


export default authSlice.reducer