import { StyleSheet, Text, View } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import ItemGroup from "../components/ItemGroup";
import { getTheme } from "../store/settings";

function SettingListScreen({ route }) {
  const theme = useSelector(getTheme);

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

  function settingPressHandler(setting, itemContent) {
    switch (setting.type) {
      case "SettingLogin":
        itemContent.onClick();
        break;
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

  const sections = page.sections.map((section) => {
    const header = section.title ? (
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
    ) : null;

    return (
      <View key={section.id}>
        <View class={styles.sectionHeader}>{header}</View>
        <View style={styles.section}>
          <ItemGroup
            items={section.settings}
            itemKeyExtractor={(setting) => setting.name}
            onPress={settingPressHandler}
          />
        </View>
      </View>
    );
  });

  return <View style={styles.pageContainer}>{sections}</View>;
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionHeader: {
    marginLeft: 20,
    fontSize: 14,
    marginBottom: 8,
  },
});

export default SettingListScreen;
