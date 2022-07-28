import { createSlice } from '@reduxjs/toolkit'

const CommunityChat = createSlice({
    name:"Chat",
    initialState:{
        value:false
    },
    reducers: {
        show: (state) => {
          state.value = true
        },
        hide:(state)=>{
            state.value=false
        },
    }
})

export const  {show, hide} =CommunityChat.actions

export default CommunityChat.reducer