import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./utils/authSlice";
import profileSlice from "./utils/profileSlice";
import scrollSlice from "./utils/scrollSlice";

const store=configureStore({
    reducer:{
        auth:authSlice,
        profile:profileSlice,
        scroll1:scrollSlice
    }
})

export default store;