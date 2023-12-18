import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: {}, 
  error: null,
};


export const profileuser = createAsyncThunk("profile", async () => {
    try {
        const token = localStorage.getItem("Token")
        const response = await fetch(
            "https://backend-social-media-ni8l.onrender.com/api/v1/auth/profile",
            {
              method: "get",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`, 
              },
            }
          );
          
          if (!token) {
            console.error("Token is missing");
            
            throw new Error("Failed to fetch profile data");
          }
          
          const data = await response.json();
          return data;
          
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

const profileSlice = createSlice({
  name: "profileuser",
  initialState, 
  extraReducers: (builder) => {
    builder
      .addCase(profileuser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(profileuser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; 
      })
      .addCase(profileuser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});




export default profileSlice.reducer;
