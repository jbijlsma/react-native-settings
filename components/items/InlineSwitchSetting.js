import { StyleSheet, Switch, Text, View } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { getI18n, getTheme, updateSetting } from "../../store/settings";

function InlineSwitchSetting({ settingName }) {
  const theme = useSelector(getTheme);
  const i18n = useSelector(getI18n);

  const settingValue = useSelector(
    (state) => state.settingsSlice.settingValues[settingName]
  );
  const dispatch = useDispatch();

  function toggleHandler() {
    dispatch(
      updateSetting({ settingName: settingName, optionValue: !settingValue })
    );
  }

  return (
    <>
      <Text style={[styles.settingTitle, { color: theme.colors.text }]}>
        {i18n.t(settingName)}
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
