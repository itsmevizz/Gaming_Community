import { configureStore } from "@reduxjs/toolkit"
import AuthReducer from "./features/authSlice"
import darkModeReducer from "./features/darkMode";
import communityReducer from './features/CommunitySlice'
import membersReducer from "./features/MembersSlice"
import groupChatReducer from "./features/GroupMessage"
import sendNewMessage from "./features/SendGroupMessageSlice"
import JoinCommunityReducer from "./features/JoinCommunity";


const store = configureStore({
    reducer: {
        auth: AuthReducer,
        dark: darkModeReducer,
        communities: communityReducer,
        members: membersReducer,
        groupChat: groupChatReducer,
        newMessage: sendNewMessage,
        joinCommunity: JoinCommunityReducer,
    }
})


export default store;