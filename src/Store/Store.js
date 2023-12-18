import { configureStore } from "@reduxjs/toolkit";
import signupUser from './Slices/registerSlice'; 
import loginUser  from "./Slices/loginSlice";
import productReducer from './Slices/productslice'
import cartReducer from './Slices/cartslice'
import profileReducer from './Slices/profileSlice'

const store = configureStore({
    reducer: {
        register: signupUser, 
        login : loginUser,
        product : productReducer,
        cart : cartReducer,
        profile : profileReducer
    },
});

export default store;
