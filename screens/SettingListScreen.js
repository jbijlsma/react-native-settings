import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../theme/useTheme";

import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import ItemGroup from "../components/ItemGroup";
import { useLayoutEffect } from "react";

function SettingListScreen({ route }) {
  const [theme] = useTheme();

  const title = route.params?.title;
  const backTitle = route.params?.backTitle;

  const navigation = useNavigation();

  const rootSettingsPage = useSelector(
    (state) => state.settingsSlice.rootSettingsPage
  );
  const page = route.params?.page ?? rootSettingsPage;
  const pageTitle = page.title ?? title;

  useLayoutEffect(() => {
    navigation.setOptions(
      {
        title: pageTitle,
        headerBackTitle: backTitle,
      },
      [pageTitle, backTitle]
    );
  }, []);

  function settingPressHandler(setting) {
    switch (setting.type) {
      case "SettingPageLink":
        navigation.push("SettingListScreen", {
          page: setting.linkedPage,
          title: setting.title,
          backTitle: pageTitle,
        });
        break;
      default:
        navigation.navigate("SettingOptionsScreen", {
          settingName: setting.name,
          settingTitle: setting.title,
          backTitle: pageTitle,
        });
    }
  }

  return page.sections.map((section) => (
    <View
      key={section.title}
      style={styles.container}
    >
      <Text
        style={[
          styles.sectionHeader,
          {
            color: theme.colors.sectionHeader,
            marginLeft: section.headerMarginLeft,
          },
        ]}
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
  ));
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
