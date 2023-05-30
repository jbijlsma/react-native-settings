import { View, Button, StyleSheet } from "react-native";

import Avatar from "../components/Avatar";
import { storePersistor } from "../store/store";
import { useContext } from "react";
import { ToastContext } from "../components/Toast/ToastProvider";
import { useSelector } from "react-redux";
import { getI18n } from "../store/settings";

function HomeScreen() {
  const { toast } = useContext(ToastContext);
  const i18n = useSelector(getI18n);

  function purgeAuthInfo() {
    storePersistor.purge();
    toast.success({
      message: i18n.t("settingsPurged"),
      showForMs: 1000,
    });
  }

  function showSuccessToast() {
    toast.success({
      message: i18n.t("successToast"),
    });
  }

  function showInfoToast() {
    toast.info({
      message: i18n.t("infoToast"),
    });
  }

  function showErrorToast() {
    toast.error({
      message: i18n.t("errorToast"),
    });
  }

  return (
    <>
      <View style={styles.pageContainer}>
        <Avatar
          size={200}
          imageUri="https://secure.gravatar.com/avatar/dad0b79139b72a32fafc32e123558b01?s=256"
        />
        <Button
          title={i18n.t("purgeSettings")}
          onPress={purgeAuthInfo}
        />
        <Button
          title={i18n.t("showSuccessToast")}
          onPress={showSuccessToast}
        />
        <Button
          title={i18n.t("showInfoToast")}
          onPress={showInfoToast}
        />
        <Button
          title={i18n.t("showErrorToast")}
          onPress={showErrorToast}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  toastsContainer: {
    paddingHorizontal: 20,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    alignItems: "center",
  },
});

export default HomeScreen;
