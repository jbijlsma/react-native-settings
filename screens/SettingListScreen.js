import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import ItemGroup from "../components/ItemGroup";
import { getI18n, getTheme } from "../store/settings";

function SettingListScreen({ route }) {
  const theme = useSelector(getTheme);
  const i18n = useSelector(getI18n);

  const title = route.params?.title;

  const navigation = useNavigation();

  const rootSettingsPage = useSelector(
    (state) => state.settingsSlice.rootSettingsPage
  );
  const page = route.params?.page ?? rootSettingsPage;
  const pageTitle = i18n.t(page.title) ?? title;

  useLayoutEffect(() => {
    navigation.setOptions(
      {
        title: pageTitle,
        headerBackTitle: i18n.t("back"),
      },
      [pageTitle]
    );
  }, []);

  function settingPressHandler(setting, itemContent) {
    const settingTitle = i18n.t(setting.title);

    switch (setting.type) {
      case "SettingLogin":
        itemContent.onClick();
        break;
      case "SettingPageLink":
        navigation.push("SettingListScreen", {
          page: setting.linkedPage,
          title: settingTitle,
        });
        break;
      default:
        navigation.navigate("SettingOptionsScreen", {
          settingName: setting.name,
          settingTitle: settingTitle,
        });
    }
  }

  const sections = page.sections.map((section) => {
    const header = section.title ? (
      <Text
        style={[
          styles.sectionHeader,
          {
            color: theme.colors.background400,
            marginLeft: section.headerMarginLeft,
          },
        ]}
      >
        {i18n.t(section.title).toUpperCase()}
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

  return (
    <ScrollView>
      <View style={styles.pageContainer}>{sections}</View>
    </ScrollView>
  );
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
