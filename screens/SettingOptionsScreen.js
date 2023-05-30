import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView, StyleSheet, View } from "react-native";

import ItemGroup from "../components/ItemGroup";
import { getI18n, updateSetting } from "../store/settings";

function SettingOptionsScreen({ navigation, route }) {
  const { settingName, settingTitle } = route.params;
  const i18n = useSelector(getI18n);

  const settingOptions = useSelector(
    (state) => state.settingsSlice.settingOptions[settingName]
  );

  const settingValue = useSelector(
    (state) => state.settingsSlice.settingValues[settingName]
  );

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: i18n.t(settingName),
      headerBackTitle: i18n.t("back"),
    });
  }, [settingTitle, i18n]);

  function onPressHandler(option) {
    dispatch(
      updateSetting({
        settingName: settingName,
        optionValue: option.value,
      })
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <ItemGroup
            items={settingOptions}
            itemKeyExtractor={(item) => item.value}
            isOptionSelected={(option) => option.value === settingValue}
            onPress={onPressHandler}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default SettingOptionsScreen;
