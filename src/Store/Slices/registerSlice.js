import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState = {
    loading : false,
    Registeruser : [],
    error : ""


}
export const registerUser = createAsyncThunk("signupuser", async (body) => {
    try {
      const res = await fetch("https://backend-social-media-ni8l.onrender.com/api/v1/auth/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
     
     return await res.json();
    } catch (error) {
      throw error;
    }
  });
  

const registerSlice = createSlice({
    name : "Registeruser",
    initialState,
    reducers:{},
    extraReducers : (builder) =>{
        builder
        .addCase(registerUser.pending, (state) =>{
            state.loading = true;
        })
        .addCase(registerUser.fulfilled, (state,action) => {
            state.loading = false,
            state.Registeruser = action.payload;
        })
        .addCase(registerUser.rejected, (state,action) =>{
            state.loading = false,
            state.error = action.error.message
        })
    }
})

export default registerSlice.reducer;
