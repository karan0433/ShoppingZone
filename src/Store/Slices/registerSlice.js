import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  signupUser: [],
  Errors: null,
};

export const signupUser = createAsyncThunk("signupuser", async (body) => {
  try {
    const res = await fetch(
      "https://backend-social-media-ni8l.onrender.com/api/v1/auth/signup",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    console.log(res, "ressss");

    var data = await res.json();
    console.log("dataaaa", data);
    return data;
  } catch (error) {
    throw error;
  }
});

const registerSlice = createSlice({
  name: "Registeruser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.Errors = null; 
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
         state.signupUser = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
         state.Errors = action.error.message;
      });
  },
});

export default registerSlice.reducer;
