import {createSlice} from "@reduxjs/toolkit";
import { fetchUserThunk } from "./userThunk";

const userSlice = createSlice({
  name: "user",
  initialState : {
    isAuthenticated: false,
  },
  reducers: {
    Login: (state, action) => {
        console.log("Login action called with payload:", action.payload);
        state.isAuthenticated = true;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserThunk.pending, (state, action) => {
      state.user = null;
    });
    builder.addCase(fetchUserThunk.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(fetchUserThunk.rejected, (state, action) => {
      state.user = null;
    });
  }
});

export const { Login
 } = userSlice.actions;
export default userSlice.reducer;