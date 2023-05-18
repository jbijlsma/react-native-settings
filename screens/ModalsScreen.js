import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";

import CustomModal from "../components/CustomModal";
import AppleUserScreen from "./login/AppleUserScreen";
import { useSelector } from "react-redux";
import { getTheme } from "../store/settings";

function ModalsScreen({ navigation }) {
  const theme = useSelector(getTheme);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function onCloseModalHandler() {
    setIsModalVisible(false);
  }

  function onShowModalHandler() {
    setIsModalVisible(true);
  }

  function onShowModalNavHandler() {
    navigation.navigate("AppleSigninScreen");
  }

  return (
    <>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button
            title="Show Modal"
            onPress={onShowModalHandler}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Show Modal (using navigation)"
            onPress={onShowModalNavHandler}
          />
        </View>
      </View>

      <CustomModal
        backgroundColor={theme.colors.sectionItemSeperator}
        isVisible={isModalVisible}
        onClose={onCloseModalHandler}
      >
        <AppleUserScreen />
      </CustomModal>
    </>
  );
}

const styles = StyleSheet.create({
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
