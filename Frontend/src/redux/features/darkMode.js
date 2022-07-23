import { createSlice } from '@reduxjs/toolkit'



const DarkModeSlice = createSlice({
    name:"dark",
    initialState:{
        value:""
    },
    reducers: {
        dark: (state) => {
          state.value = 'dark'
        },
        light:(state)=>{
            state.value=""
        },
    }
})

export const  {dark, light} =DarkModeSlice.actions

export default DarkModeSlice.reducer