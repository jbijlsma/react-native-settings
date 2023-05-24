/* 
  Loosely based on https://github.com/jeanverster/react-native-styled-toast
*/

import { createContext, useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Toast from "./Toast";

export const ToastContext = createContext({
  success: (_) => null,
  position: "TOP",
});

const ToastProvider = ({ children }) => {
  const insets = useSafeAreaInsets();
  const [toasts, setToasts] = useState([]);

  const success = (newToast) => toast({ ...newToast, messageType: "SUCCESS" });
  const info = (newToast) => toast({ ...newToast, messageType: "INFO" });
  const error = (newToast) => toast({ ...newToast, messageType: "ERROR" });

  const toast = useCallback((newToast) => {
    setToasts((prevToasts) => {
      return [{ id: Date.now() + Math.random(), ...newToast }, ...prevToasts];
    });
  }, []);

  // By memoizing this function with useCallback it can still be specified as a dependency
  // in useEffect of the Toast component without causing unnecessary re-renders (and setTimeout issues)
  // Also note that this requires a stable callback reference (i.e. onClose={hideToast}). If you use
  // hideToast.bind(this, id) or an arrow function it will not work!
  const hideToast = useCallback((toastId) => {
    setToasts((prevToasts) =>
      prevToasts.filter((toast) => toast.id !== toastId)
    );
  }, []);
  return (
    <ToastContext.Provider
      value={{ toast: { success: success, info: info, error: error } }}
    >
      {children}
      <View
        style={[
          styles.toastsContainer,
          {
            top: 0,
            paddingTop: insets.top,
            paddingBottom: 0,
          },
        ]}
      >
        {toasts.map((toastConfig) => {
          return (
            <Toast
              key={toastConfig.id}
              id={toastConfig.id}
              messageType={toastConfig.messageType}
              message={toastConfig.message}
              showForMs={toastConfig.showForMs}
              onClose={hideToast}
            />
          );
        })}
      </View>
    </ToastContext.Provider>
  );
};

const styles = StyleSheet.create({
  toastsContainer: {
    paddingHorizontal: 20,
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
  },
});

export default ToastProvider;
