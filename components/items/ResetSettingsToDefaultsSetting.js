import { StyleSheet, Pressable, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { getTheme, purgeSettings } from "../../store/settings";

function ResetSettingsToDefaultsSetting() {
  const theme = useSelector(getTheme);
  const dispatch = useDispatch();

  function resetSettingsHandler() {
    dispatch(purgeSettings());
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
