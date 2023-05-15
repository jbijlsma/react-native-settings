import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useTheme } from "../../theme/useTheme";

function SingleSelectSetting({ setting }) {
  const [theme] = useTheme();

  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  function getSelectedOptionTitle() {
    var title = setting.options.find(
      (option) => option.value === setting.value
    ).title;

    return capitalizeFirstLetter(title);
  }

  const selectedOptionTitle = getSelectedOptionTitle();

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
        <Text style={{ color: theme.colors.sectionSettingValue }}>
          {selectedOptionTitle}
        </Text>
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

export default SingleSelectSetting;
