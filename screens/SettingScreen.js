import { useLayoutEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import SettingGroupItem from "../components/SettingGroupItem";
import { useTheme } from "../theme/useTheme";
import { useDispatch } from "react-redux";
import { updateSetting } from "../store/settings";

function SettingScreen({ navigation, route }) {
  const { setting } = route.params;
  const [theme] = useTheme();

  const [selectedOption, setSelectedOption] = useState(setting.value);
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

  function selectOptionHandler(option) {
    setSelectedOption(option.value);
    dispatch(
      updateSetting({
        settingName: setting.name,
        optionValue: option.value,
      })
    );
  }

  const numberOfOptions = setting.options.length;
  const lastOptionIndex = numberOfOptions - 1;

  return (
    <View style={styles.container}>
      {setting.options.map((option, index) => {
        return (
          <SettingGroupItem
            key={option.value}
            title={option.title}
            value={option.value}
            backgroundColor={theme.colors.sectionBackground}
            pressedBackgroundColor={theme.colors.settingPressedBackground}
            textColor={theme.colors.sectionSettingText}
            valueColor={theme.colors.sectionSettingValue}
            icon={(optionValue) =>
              optionValue === selectedOption ? (
                <Ionicons
                  name="checkmark-outline"
                  color={theme.colors.primary}
                  size={18}
                />
              ) : null
            }
            hasPrevSibbling={numberOfOptions > 0 && index > 0}
            hasNextSibbling={numberOfOptions > 0 && index < lastOptionIndex}
            onPress={selectOptionHandler.bind(this, option)}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default SettingScreen;
