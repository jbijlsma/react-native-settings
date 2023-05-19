import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import settingsReducer from "./settings";
import authReducer from "./auth";

const settingsPersistConfig = {
  key: "settings",
  storage: AsyncStorage,
  whitelist: ["settingValues"],
};

const authPersistConfig = {
  key: "auth",
  storage: AsyncStorage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  settingsSlice: persistReducer(settingsPersistConfig, settingsReducer),
  authSlice: persistReducer(authPersistConfig, authReducer),
});

const rootPersistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["authSlice", "settingsSlice"],
};

const persistedRootReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const storePersistor = persistStore(store);
