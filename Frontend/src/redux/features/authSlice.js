import {createSlice, createAsyncThunk} from  '@reduxjs/toolkit'

export const login = createAsyncThunk ('auth/login', async ()=>{
    try{

    }catch (err){
        alert(err)
    }
})

const authSlice = createSlice({
    name : "auth",
    initialState:{
        user:null,
        errot:"",
        loading:false,
    }
})


export default authSlice.reducer