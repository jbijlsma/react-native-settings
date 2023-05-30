import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import { getI18n, getTheme } from "../../store/settings";

function SettingPageLink({ settingName }) {
  const theme = useSelector(getTheme);
  const i18n = useSelector(getI18n);

  return (
    <>
      <Text style={[styles.settingTitle, { color: theme.colors.text }]}>
        {i18n.t(settingName)}
      </Text>
      <View style={styles.settingValueContainer}>
        <Ionicons
          name="chevron-forward-outline"
          color={theme.colors.background400}
          size={22}
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

export default SettingPageLink;
