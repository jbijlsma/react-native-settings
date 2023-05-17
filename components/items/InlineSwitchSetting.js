import { StyleSheet, Switch, Text, View } from "react-native";

import { useTheme } from "../../theme/useTheme";
import { useDispatch, useSelector } from "react-redux";
import { updateSetting } from "../../store/settings";

function InlineSwitchSetting({ setting }) {
  const [theme] = useTheme();
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
      <Text
        style={[
          styles.settingTitle,
          { color: theme.colors.sectionSettingText },
        ]}
      >
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
