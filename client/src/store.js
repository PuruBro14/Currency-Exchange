import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./utils/authSlice";
import profileSlice from "./utils/profileSlice";
import scrollSlice from "./utils/scrollSlice";
import bookCurrencySlice from "./utils/bookCurrencySlice";

const store=configureStore({
    reducer:{
        auth:authSlice,
        profile:profileSlice,
        scroll1:scrollSlice,
        bookCurrency:bookCurrencySlice
    }
})

export default store;