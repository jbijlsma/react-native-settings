import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../theme/useTheme";

import { SettingsGroup } from "../components/SettingsGroup";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

function SettingsScreen() {
  const [theme] = useTheme();
  const navigation = useNavigation();

  function settingPressHandler(setting) {
    navigation.navigate("SettingScreen", {
      setting: setting,
    });
  }

  const section = useSelector((state) => state.settingsSlice.section);

  return (
    <View style={styles.container}>
      <Text
        style={[styles.sectionHeader, { color: theme.colors.sectionHeader }]}
      >
        {section.title.toUpperCase()}
      </Text>

      <SettingsGroup
        group={section}
        onPress={settingPressHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionHeader: {
    marginLeft: 12,
    fontSize: 13,
    marginBottom: 8,
  },
  sectionContainer: {
    borderRadius: 12,
    marginTop: 8,
    padding: 12,
  },
});

export default SettingsScreen;
