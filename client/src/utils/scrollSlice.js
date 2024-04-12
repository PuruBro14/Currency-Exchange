import {createSlice} from "@reduxjs/toolkit";

const scrollSlice=createSlice({
    name:'scroll',
    initialState:{
        scrollToComponentB:false
    },
    reducers:{
        setScrollToComponentB:(state,action)=>{
            state.scrollToComponentB=action.payload;
        }
    }
})

export const { setScrollToComponentB } = scrollSlice.actions;
export default scrollSlice.reducer;