// LoginSLice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userRole: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.userRole = action.payload;
      // Set other user-related data here
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userRole = "";
      // Clear other user-related data here
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
