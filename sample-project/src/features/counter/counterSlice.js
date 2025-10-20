import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count:0
}

export const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        incriment:(state)=>{
            state.count+=1
        },
        decriment:(state)=>{
            state.count-=1
        }
    }
})

export const {incriment,decriment}=counterSlice.actions

export default counterSlice.reducer