import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useTheme } from "../../theme/useTheme";
import { useSelector } from "react-redux";

function SingleSelectSetting({ settingName, settingTitle }) {
  const [theme] = useTheme();
  const settingOptions = useSelector(
    (state) => state.settingsSlice.settingOptions[settingName]
  );
  const settingValue = useSelector(
    (state) => state.settingsSlice.settingValues[settingName]
  );

  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  function getSelectedOptionTitle() {
    var title = settingOptions.find(
      (option) => option.value === settingValue
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
        {settingTitle}
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
