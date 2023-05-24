import { StyleSheet, Pressable, Text, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { getTheme, purgeSettings } from "../../store/settings";

function ResetSettingsToDefaultsSetting() {
  const theme = useSelector(getTheme);
  const dispatch = useDispatch();

  function resetSettingsHandler() {
    Alert.alert(
      "Confirm",
      "Are you sure you want to set all settings back to their defaults?",
      [
        {
          text: "Yes",
          onPress: () => {
            dispatch(purgeSettings());
            Toast.show("Settings were reset!", {
              duration: 5000,
              backgroundColor: "#47de47",
            });
          },
          style: "destructive",
        },
        {
          text: "No",
          onPress: () => console.log("No Pressed"),
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
          { backgroundColor: theme.colors.sectionBackground },
          pressed && { backgroundColor: theme.colors.settingPressedBackground },
        ]}
      >
        <Text style={styles.btnText}>Reset Settings to Defaults</Text>
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
    color: "#ff5151",
  },
});

export default ResetSettingsToDefaultsSetting;
