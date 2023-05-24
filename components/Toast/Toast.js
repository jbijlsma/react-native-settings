/* 
  Loosely based on https://github.com/jeanverster/react-native-styled-toast
*/

import { View, StyleSheet, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getTheme } from "../../store/settings";

function Toast({ id, messageType, message, showForMs, onClose }) {
  const theme = useSelector(getTheme);

  const hideAfterMs = showForMs || 5000;
  const bgColor = theme.colors.background800;
  const messageTypeColor =
    messageType === "SUCCESS"
      ? theme.colors.success
      : messageType === "INFO"
      ? theme.colors.info
      : theme.colors.error;
  const messageTypeIcon =
    messageType === "SUCCESS"
      ? "check-circle"
      : messageType === "INFO"
      ? "alert-circle"
      : "x-circle";
  const btnBackgroundColor = theme.colors.background900;
  const textColor = theme.colors.text;

  useEffect(() => {
    const timer = setTimeout(() => {
      id && onClose && onClose(id);
    }, hideAfterMs);
    return () => {
      clearTimeout(timer);
    };
  }, [id, onClose, hideAfterMs]);

  return (
    <View
      style={[
        styles.toastContainer,
        { backgroundColor: bgColor, borderLeftColor: messageTypeColor },
      ]}
    >
      <View style={styles.toastLeftContainer}>
        <Feather
          name={messageTypeIcon}
          size={28}
          color={messageTypeColor}
        />
        <Text style={[styles.toastTitle, { color: textColor }]}>{message}</Text>
      </View>
      <Pressable
        onPress={onClose.bind(this, id)}
        style={({ pressed }) => [
          styles.closeBtnContainer,
          { backgroundColor: btnBackgroundColor },
          pressed && styles.pressed,
        ]}
      >
        <Feather
          name="x"
          size={24}
          color={textColor}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  toastContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 6,
    borderLeftWidth: 4,
    padding: 8,
    marginBottom: 4,
  },
  toastLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  toastTitle: {
    marginLeft: 12,
    paddingRight: 6,
    fontSize: 18,
    flexWrap: "wrap",
    flex: 1,
  },
  closeBtnContainer: {
    borderRadius: 6,
    padding: 4,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default Toast;
