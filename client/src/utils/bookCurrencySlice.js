import {createSlice} from "@reduxjs/toolkit"

const initialState={
    step:1,
    currency:null,
    paymentLoading:false
}

const bookCurrencySlice=createSlice({
    name:"currency",
    initialState,
    reducers:{
    setStep:(state,action)=>{
        state.step=action.payload;
    },
    setCurrency:(state,action)=>{
        state.currency=action.payload;
    },
    setPaymentLoading:(state,action)=>{
        state.paymentLoading=action.payload;
    },
    resetCurrencyState:(state)=>{
        state.step=1;
        state.currency=null;
        state.paymentLoading=false
    }
}
})

export const { setStep, setCurrency, setPaymentLoading, resetCurrencyState } =
  bookCurrencySlice.actions;

export default bookCurrencySlice.reducer;