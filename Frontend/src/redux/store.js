import { configureStore } from "@reduxjs/toolkit"
import AuthReducer from "./features/authSlice"
import darkModeReducer from "./features/darkMode";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import CommunityChat from "./features/CommunityChat";

// export default configureStore({
//     reducer:{
//         auth :AuthReducer   
//     }
// })

 const store = configureStore({
    reducer: {
        auth: AuthReducer,
        dark: darkModeReducer,
        groupChat : CommunityChat,
    }
})


export default store;