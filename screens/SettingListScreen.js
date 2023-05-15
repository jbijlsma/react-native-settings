import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../theme/useTheme";

import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import ItemGroup from "../components/ItemGroup";

function SettingListScreen() {
  const [theme] = useTheme();
  const navigation = useNavigation();

  function settingPressHandler(setting) {
    navigation.navigate("SettingOptionsScreen", { settingName: setting.name });
  }

  const section = useSelector((state) => state.settingsSlice.section);

  return (
    <View style={styles.container}>
      <Text
        style={[styles.sectionHeader, { color: theme.colors.sectionHeader }]}
      >
        {section.title.toUpperCase()}
      </Text>

      <View>
        <ItemGroup
          items={section.settings}
          itemKeyExtractor={(setting) => setting.name}
          onPress={settingPressHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionHeader: {
    marginLeft: 20,
    fontSize: 14,
    marginBottom: 8,
  },
  sectionContainer: {
    borderRadius: 12,
    marginTop: 8,
    padding: 12,
  },
});

export default SettingListScreen;
