import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useTheme } from "../../theme/useTheme";

function SettingPageLink({ setting }) {
  const [theme] = useTheme();

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
        <Ionicons
          name="chevron-forward-outline"
          color={theme.colors.sectionSettingValue}
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
