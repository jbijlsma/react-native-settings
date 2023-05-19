import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    user: {
      isAuthenticated: true,
      fullName: "John Doe",
      email: "john@doe.com",
      avatarUri:
        "https://secure.gravatar.com/avatar/dad0b79139b72a32fafc32e123558b01?s=256",
    },
  },
  reducers: {
    login(state) {
      state.user = {
        isAuthenticated: true,
        fullName: "John Doe",
        email: "john@doe.com",
        avatarUri:
          "https://secure.gravatar.com/avatar/dad0b79139b72a32fafc32e123558b01?s=256",
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
