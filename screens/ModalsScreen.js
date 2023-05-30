import { useState } from "react";
import { Button, StyleSheet, View, Text } from "react-native";

import CustomModal from "../components/CustomModal";
import { useSelector } from "react-redux";
import { getI18n, getTheme } from "../store/settings";
import AppleSigninScreen from "./login/AppleSigninScreen";
import AppleUserScreen from "./login/AppleUserScreen";

function ModalsScreen({ navigation }) {
  const theme = useSelector(getTheme);
  const i18n = useSelector(getI18n);
  const user = useSelector((state) => state.authSlice.user);

  const [isModalVisible, setIsModalVisible] = useState(false);

  function onCloseModalHandler() {
    hideModal(false);
  }

  function onShowModalHandler() {
    setIsModalVisible(true);
  }

  function onShowModalNavHandler() {
    user.isAuthenticated
      ? navigation.navigate("AppleUserScreen")
      : navigation.navigate("AppleSigninScreen");
  }

  function hideModal() {
    setIsModalVisible(false);
  }

  const currentScreen = user.isAuthenticated ? (
    <AppleUserScreen onSignoutSuccess={hideModal} />
  ) : (
    <AppleSigninScreen onSigninSuccess={hideModal} />
  );

  return (
    <>
      <Text style={[styles.isAuthenticatedText, { color: theme.colors.text }]}>
        IsAuthenticated: {user.isAuthenticated ? i18n.t("yes") : i18n.t("no")}
      </Text>
      <Text style={[styles.email, { color: theme.colors.text }]}>
        Email: {user.email}
      </Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button
            title={i18n.t("showModal")}
            onPress={onShowModalHandler}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={i18n.t("showModalNav")}
            onPress={onShowModalNavHandler}
          />
        </View>
      </View>

      <CustomModal
        backgroundColor={theme.colors.background800}
        isVisible={isModalVisible}
        onClose={onCloseModalHandler}
      >
        {currentScreen}
      </CustomModal>
    </>
  );
}

const styles = StyleSheet.create({
  isAuthenticatedText: {
    textAlign: "center",
    marginTop: 16,
  },
  email: {
    textAlign: "center",
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginBottom: 8,
  },
});

export default ModalsScreen;
