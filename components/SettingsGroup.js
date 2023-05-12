import { useTheme } from "../theme/useTheme";
import SettingGroupItem from "./SettingGroupItem";

export function SettingsGroup({ group, onPress }) {
  const [theme] = useTheme();

  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  function getSelectedOptionTitle(setting) {
    var title = setting.options.find(
      (option) => option.value === setting.value
    ).title;

    return capitalizeFirstLetter(title);
  }

  const numberOfSettings = group.settings.length;
  const lastSettingIndex = group.settings.length - 1;

  return (
    <>
      {group.settings.map((setting, index) => (
        <SettingGroupItem
          key={setting.name}
          title={setting.title}
          value={setting.value}
          displayValue={getSelectedOptionTitle(setting)}
          backgroundColor={theme.colors.sectionBackground}
          pressedBackgroundColor={theme.colors.settingPressedBackground}
          textColor={theme.colors.sectionSettingText}
          valueColor={theme.colors.sectionSettingValue}
          iconName="chevron-forward-outline"
          hasPrevSibbling={numberOfSettings > 0 && index > 0}
          hasNextSibbling={numberOfSettings > 0 && index < lastSettingIndex}
          onPress={(selectedOptionValue) => {
            onPress(setting, selectedOptionValue);
          }}
        />
      ))}
    </>
  );
}
