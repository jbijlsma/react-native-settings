import { useContext } from "react";
import { StyleSheet, Pressable, Text, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { getI18n, getTheme, purgeSettings } from "../../store/settings";
import { ToastContext } from "../Toast/ToastProvider";

function ResetSettingsToDefaultsSetting() {
  const theme = useSelector(getTheme);
  const i18n = useSelector(getI18n);

  const dispatch = useDispatch();
  const { toast } = useContext(ToastContext);

  function resetSettingsHandler() {
    Alert.alert(
      i18n.t("confirm"),
      i18n.t("confirmPurgeSettings"),
      [
        {
          text: i18n.t("yes"),
          onPress: () => {
            dispatch(purgeSettings());
            toast.success({
              message: i18n.t("notifyPurgeSettings"),
              showForMs: 2000,
            });
          },
          style: "destructive",
        },
        {
          text: i18n.t("no"),
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
          {i18n.t("purgeSettings")}
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
