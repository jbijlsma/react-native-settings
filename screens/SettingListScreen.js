import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../theme/useTheme";

import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import ItemGroup from "../components/ItemGroup";

function SettingListScreen({ route }) {
  const [theme] = useTheme();
  const navigation = useNavigation();

  const topLevelSection = useSelector((state) => state.settingsSlice.section);

  function settingPressHandler(setting) {
    console.log(setting.type);
    switch (setting.type) {
      case "SettingPageLink":
        navigation.push("SettingListScreen", {
          section: setting.linkedSection,
        });
        break;
      default:
        console.log("Default");
        navigation.navigate("SettingOptionsScreen", {
          settingName: setting.name,
        });
    }
  }

  const section = route.params?.section ?? topLevelSection;
  const headerMarginleft = 50;

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.sectionHeader,
          { color: theme.colors.sectionHeader, marginLeft: headerMarginleft },
        ]}
      >
        {section.title.toUpperCase()}
      </Text>

      <View>
        <ItemGroup
          items={section.settings}
          itemKeyExtractor={(setting) => setting.name}
          marginLeft={headerMarginleft}
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
});

export default SettingListScreen;
