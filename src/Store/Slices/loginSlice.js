import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  loginUser: [],
  isAuthenticated: false,
  error: null,
};

export const loginUser = createAsyncThunk("login", async (body) => {
  try {
    const response = await fetch(
      "https://backend-social-media-ni8l.onrender.com/api/v1/auth/login",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    var Data = await response.json();
    console.log(Data, "daata");
    return Data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const loginSlice = createSlice({
  name: "LoginUser",
  initialState,
  reducers: {
    //// make a logout reducer here and export it and import it in loginnav.jsx
      logout: (state,action) => {
        state.isAuthenticated = action.payload;
       
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.loginUser = action.payload;
        state.isAuthenticated = true; 
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isAuthenticated = false; 
      });
  },
});

export const {logout} = loginSlice.actions

export default loginSlice.reducer;
