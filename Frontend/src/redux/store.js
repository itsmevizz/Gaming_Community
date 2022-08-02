import { configureStore } from "@reduxjs/toolkit"
import AuthReducer from "./features/authSlice"
import darkModeReducer from "./features/darkMode";
import communityReducer from './features/CommunitySlice'
import membersReducer from "./features/MembersSlice"
import groupChatReducer from "./features/GroupMessage"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

// export default configureStore({
//     reducer:{
//         auth :AuthReducer   
//     }
// })

 const store = configureStore({
    reducer: {
        auth: AuthReducer,
        dark: darkModeReducer,
        communities:communityReducer,
        members: membersReducer,
        groupChat:groupChatReducer,
    }
})


export default store;