// LoginSLice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userRole: "",
  id: "",
  name: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.userRole = action.payload.role;
      state.id = action.payload.id;
      state.name = action.payload.name;
      // Set other user-related data here
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userRole = "";
      state.id = "";
      state.name = "";
      // Clear other user-related data here
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
