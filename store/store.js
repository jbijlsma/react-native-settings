import { configureStore } from "@reduxjs/toolkit";

import settingsReducer from "./settings";
import authReducer from "./auth";

export const store = configureStore({
  reducer: {
    settingsSlice: settingsReducer,
    authSlice: authReducer,
  },
});
