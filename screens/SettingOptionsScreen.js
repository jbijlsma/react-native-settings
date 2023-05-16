import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";

import ItemGroup from "../components/ItemGroup";
import { updateSetting } from "../store/settings";

function SettingOptionsScreen({ navigation, route }) {
  const { settingName, settingTitle, backTitle } = route.params;

  const settingOptions = useSelector(
    (state) => state.settingsSlice.settingOptions[settingName]
  );

  const settingValue = useSelector(
    (state) => state.settingsSlice.settingValues[settingName]
  );

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions(
      {
        title: settingTitle,
        headerBackTitle: backTitle ?? "Back",
      },
      [backTitle, settingTitle]
    );
  }, []);

  function onPressHandler(option) {
    dispatch(
      updateSetting({
        settingName: settingName,
        optionValue: option.value,
      })
    );
  }

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default SettingOptionsScreen;
