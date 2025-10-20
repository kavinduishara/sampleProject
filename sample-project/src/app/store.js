import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import productReduser from '../features/product/poductSlice'
import postsReduser from '../features/posts/postsSlice'
export const store=configureStore({
    reducer:{
        counter:counterReducer,
        products:productReduser,
        posts:postsReduser,
    }
})