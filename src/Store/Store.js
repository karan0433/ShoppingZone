import { configureStore } from "@reduxjs/toolkit";
import registerUsers from './Slices/registerSlice'; 

const store = configureStore({
    reducer: {
        register: registerUsers, 
    },
});

export default store;
