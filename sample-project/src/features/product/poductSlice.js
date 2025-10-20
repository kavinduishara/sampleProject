import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [{ name: 'car', price: 900 }],
}


export const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        productAdded(state,actions){
            state.products.push(actions.payload)
        }
    }
})

export const {productAdded}=productSlice.actions

export default productSlice.reducer