import { View, Button, StyleSheet } from "react-native";

import Avatar from "../components/Avatar";
import { storePersistor } from "../store/store";
import { useContext } from "react";
import { ToastContext } from "../components/Toast/ToastProvider";

function HomeScreen() {
  const { toast } = useContext(ToastContext);

  function purgeAuthInfo() {
    storePersistor.purge();
    toast.success({
      message: "All settings were reset to their defaults!",
      showForMs: 1000,
    });
  }

  function showSuccessToast() {
    toast.success({
      message: "Congrats! This is a success toast.",
    });
  }

  function showInfoToast() {
    toast.info({
      message: "This is an info toast.",
    });
  }

  function showErrorToast() {
    toast.error({
      message: "Sorry! This is an error toast.",
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
          title="Purge All Saved Redux Store State"
          onPress={purgeAuthInfo}
        />
        <Button
          title="Show Success Toast"
          onPress={showSuccessToast}
        />
        <Button
          title="Show Error Toast"
          onPress={showErrorToast}
        />
        <Button
          title="Show Info Toast"
          onPress={showInfoToast}
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
