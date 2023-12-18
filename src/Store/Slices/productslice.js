import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading : false,
  products : [],
  error : null
}

export const fetchproduct = createAsyncThunk ('fetchproduct' , async () =>{
  try {
    const response = await axios.get("https://dummyjson.com/products")
    const data = response.data
    console.log(data, "products data")
    return data
  } catch (error) {
    throw error
    
  }
})

const ProductSlice = createSlice({
  name : "product",
  initialState,
  reducers : {},
  extraReducers : (builder) => {
    builder
           .addCase(fetchproduct.pending, (state) => {
            state.loading = true;
            state.error = null;
           } )
           .addCase (fetchproduct.fulfilled, (state,action) => {
            state.loading = false;
            state.products = action.payload;
           })
           .addCase (fetchproduct.rejected, (state, action) =>{
            state.loading = false;
            state.error = action.error.message
           })
  }

})

const selectProducts = (state) => state.product.products;
const selectLoading = (state) => state.product.loading;
const selectError = (state) => state.product.error;

export { selectProducts, selectLoading, selectError };

export default ProductSlice.reducer