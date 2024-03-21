import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./utils/authSlice";
import profileSlice from "./utils/profileSlice";

const store=configureStore({
    reducer:{
        auth:authSlice,
        profile:profileSlice
    }
})

export default store;