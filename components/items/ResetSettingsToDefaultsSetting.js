import { useContext } from "react";
import { StyleSheet, Pressable, Text, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { getTheme, purgeSettings } from "../../store/settings";
import { ToastContext } from "../Toast/ToastProvider";

function ResetSettingsToDefaultsSetting() {
  const theme = useSelector(getTheme);
  const dispatch = useDispatch();
  const { toast } = useContext(ToastContext);

  function resetSettingsHandler() {
    Alert.alert(
      "Confirm",
      "Are you sure you want to set all settings back to their defaults?",
      [
        {
          text: "Yes",
          onPress: () => {
            dispatch(purgeSettings());
            toast.success({ message: "Settings were reset!", showForMs: 2000 });
          },
          style: "destructive",
        },
        {
          text: "No",
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  }

  function createContent() {
    return (
      <Pressable
        onPress={resetSettingsHandler}
        style={({ pressed }) => [
          styles.btn,
          { backgroundColor: theme.colors.background900 },
          pressed && { backgroundColor: theme.colors.background700 },
        ]}
      >
        <Text style={[styles.btnText, { color: theme.colors.notification }]}>
          Reset Settings to Defaults
        </Text>
      </Pressable>
    );
  }

  return {
    content: createContent(),
  };
}

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
  },
  btnText: {
    fontSize: 17,
  },
});

export default ResetSettingsToDefaultsSetting;
