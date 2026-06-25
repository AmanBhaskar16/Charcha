import { createSlice } from "@reduxjs/toolkit";
import {signup,login,logout,} from "./authThunk";

const initialState = {
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isCheckingAuth: true,
  error: null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
//  ───────────── SIGNUP ────────────────────────
        .addCase(signup.pending, (state) => {
        state.isSigningUp = true;
        state.error = null;
      })

      .addCase(signup.fulfilled, (state, action) => {
        state.isSigningUp = false;
        state.authUser = action.payload;
      })

      .addCase(signup.rejected, (state, action) => {
        state.isSigningUp = false;
        state.error = action.payload;
      })

//   ─────────────────LOGIN────────────────────

      .addCase(login.pending, (state) => {
        state.isLoggingIn = true;
        state.error = null;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.isLoggingIn = false;
        state.authUser = action.payload;
      })

      .addCase(login.rejected, (state, action) => {
        state.isLoggingIn = false;
        state.error = action.payload;
      })

//  ───────────────Logout ──────────────────────
    
      .addCase(logout.fulfilled, (state) => {
        state.authUser = null;
      })
  },
});

export default authSlice.reducer;