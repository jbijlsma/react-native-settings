import { StyleSheet, Switch, Text, View } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { getTheme, updateSetting } from "../../store/settings";

function InlineSwitchSetting({ setting }) {
  const theme = useSelector(getTheme);

  const settingValue = useSelector(
    (state) => state.settingsSlice.settingValues[setting.name]
  );
  const dispatch = useDispatch();

  function toggleHandler() {
    dispatch(
      updateSetting({ settingName: setting.name, optionValue: !settingValue })
    );
  }

  return (
    <>
      <Text style={[styles.settingTitle, { color: theme.colors.text }]}>
        {setting?.title}
      </Text>
      <View style={styles.settingValueContainer}>
        <Switch
          style={{ transform: [{ scaleX: 1 }, { scaleY: 1 }] }}
          value={settingValue}
          onValueChange={toggleHandler}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  settingTitle: {
    fontSize: 16,
  },
  settingValueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default InlineSwitchSetting;
