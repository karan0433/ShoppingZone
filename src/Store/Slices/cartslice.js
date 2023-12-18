import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const Cartslice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    setCart(state, action) {
      return action.payload;
    },
    //       initializeCart(state, action) {
    //         return action.payload;
    //       },
  },
});

export const { add, remove, setCart } = Cartslice.actions;
export default Cartslice.reducer;
