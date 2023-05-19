import "react-native-gesture-handler";

import { Text } from "react-native";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";

import { store, storePersistor } from "./store/store";

import Main from "./Main";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Text>Loading...</Text>}
        persistor={storePersistor}
      >
        <Main />
      </PersistGate>
    </Provider>
  );
}
