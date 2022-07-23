import { configureStore } from "@reduxjs/toolkit"
import AuthReducer from "./features/authSlice"
import darkModeReducer from "./features/darkMode";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

// export default configureStore({
//     reducer:{
//         auth :AuthReducer   
//     }
// })


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['error','loading']
}
const darkpersistConfig = {
    key:"theam",
    storage,
}

const persistedReducer = persistReducer(persistConfig, AuthReducer)
const persisteDarkModeReducer = persistReducer(darkpersistConfig, darkModeReducer)

export const store = configureStore({
    reducer: {
        auth: persistedReducer,
        dark: persisteDarkModeReducer,
        middleware: [thunk],
    }
})


export const persistor = persistStore(store)