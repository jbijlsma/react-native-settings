import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import { getI18n, getTheme } from "../../store/settings";

function SingleSelectSetting({ settingName }) {
  const theme = useSelector(getTheme);
  const i18n = useSelector(getI18n);

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
    var selectedOption = settingOptions.find(
      (option) => option.value === settingValue
    );

    const title = i18n.t(selectedOption.name);

    return capitalizeFirstLetter(title);
  }

  const selectedOptionTitle = getSelectedOptionTitle();
  const settingTitle = i18n.t(settingName);

  return (
    <>
      <Text style={[styles.settingTitle, { color: theme.colors.text }]}>
        {settingTitle}
      </Text>
      <View style={styles.settingValueContainer}>
        <Text style={{ color: theme.colors.background400 }}>
          {selectedOptionTitle}
        </Text>
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

export default SingleSelectSetting;
