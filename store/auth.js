import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    user: {
      isAuthenticated: false,
      fullName: "",
      email: "",
    },
  },
  reducers: {
    login(state) {
      state.user = {
        isAuthenticated: true,
        fullName: "John Doe",
        email: "john@doe.com",
      };
    },
    logout(state) {
      console.log("logout");
      state.user = {
        isAuthenticated: false,
      };
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
