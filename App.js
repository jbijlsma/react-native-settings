import "react-native-gesture-handler";

import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { store, storePersistor } from "./store/store";

import Main from "./Main";
import ToastProvider from "./components/Toast/ToastProvider";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ToastProvider>
          <PersistGate
            loading={<Text>Loading...</Text>}
            persistor={storePersistor}
          >
            <Main />
          </PersistGate>
        </ToastProvider>
      </SafeAreaProvider>
    </Provider>
  );
}
