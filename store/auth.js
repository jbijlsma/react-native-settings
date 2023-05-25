import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const defaultState = {
  user: {
    isAuthenticated: false,
  },
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: defaultState,
  reducers: {
    login(state) {
      state.user = {
        isAuthenticated: true,
        fullName: "Jeroen Bijlsma",
        email: "jeroen@bijlsma.com",
        avatarUri:
          "https://secure.gravatar.com/avatar/dad0b79139b72a32fafc32e123558b01?s=256",
      };
    },
    logout(state) {
      state.user = {
        isAuthenticated: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      state.user = defaultState;
    });
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
