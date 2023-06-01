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
        <View style={styles.btn}>
          <Button
            title={i18n.t("purgeSettings")}
            onPress={purgeAuthInfo}
          />
        </View>
        <View style={styles.btn}>
          <Button
            style={styles.btn}
            title={i18n.t("showSuccessToast")}
            onPress={showSuccessToast}
          />
        </View>
        <View style={styles.btn}>
          <Button
            style={styles.btn}
            title={i18n.t("showInfoToast")}
            onPress={showInfoToast}
          />
        </View>
        <View style={styles.btn}>
          <Button
            style={styles.btn}
            title={i18n.t("showErrorToast")}
            onPress={showErrorToast}
          />
        </View>
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
  btn: {
    marginVertical: 4,
    backgroundColor: "black",
  },
});

export default HomeScreen;
