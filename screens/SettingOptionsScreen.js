import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";

import ItemGroup from "../components/ItemGroup";
import { updateSetting } from "../store/settings";

function SettingOptionsScreen({ navigation, route }) {
  const { settingName } = route.params;

  const headerMarginleft = 35;

  // Pass only basic info through routeParams and look up the stats in the store to trigger changes if the state is updated
  const setting = useSelector((state) =>
    state.settingsSlice.section.settings.find((s) => s.name === settingName)
  );

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions(
      {
        title: setting.title,
        headerBackTitle: "Back",
      },
      [navigation, setting]
    );
  }, []);

  function onPressHandler(option) {
    dispatch(
      updateSetting({
        settingName: setting.name,
        optionValue: option.value,
      })
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <ItemGroup
          items={setting.options}
          itemKeyExtractor={(item) => item.value}
          isOptionSelected={(option) => option.value === setting.value}
          marginLeft={headerMarginleft}
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
