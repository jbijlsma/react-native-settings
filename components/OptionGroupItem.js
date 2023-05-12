import { StyleSheet, Pressable, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useTheme } from "../theme/useTheme";

function OptionGroupItem({
  setting,
  index,
  hasPrevSibbling,
  hasNextSibbling,
  icon,
}) {
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

  function getPressableBorderRadiusStyle(hasPrevSibbling, hasNextSibbling) {
    const borderRadius = 12;
    let borderRadiusStyle = {
      borderRadius: borderRadius,
    };

    if (hasPrevSibbling && hasNextSibbling) {
      borderRadiusStyle = {};
    } else if (hasPrevSibbling) {
      borderRadiusStyle = {
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
      };
    } else if (hasNextSibbling) {
      borderRadiusStyle = {
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
      };
    }

    return borderRadiusStyle;
  }

  const isFirstSetting = index === 0;
  const outerBoxHeight = 50;
  const pressableBorderRadius = getPressableBorderRadiusStyle(
    hasPrevSibbling,
    hasNextSibbling
  );
  const top = index * outerBoxHeight - index;
  const displayValue = getSelectedOptionTitle(setting);
  const value = setting.value;
  const iconName = "chevron-forward-outline";

  return (
    <Pressable
      key={setting.name}
      style={({ pressed }) => [
        styles.outerBox,
        pressableBorderRadius,
        {
          top: top,
          height: outerBoxHeight,
          backgroundColor: theme.colors.sectionBackground,
        },
        pressed && {
          backgroundColor: theme.colors.settingPressedBackground,
          zIndex: 1000,
        },
      ]}
    >
      <View
        style={[
          styles.innerBox,
          !isFirstSetting &&
            hasPrevSibbling && {
              borderTopWidth: 1,
              borderTopColor: theme.colors.settingPressedBackground,
            },
        ]}
      >
        <View style={styles.settingContainer}>
          <Text
            style={[
              styles.settingTitle,
              { color: theme.colors.sectionSettingText },
            ]}
          >
            {setting.title}
          </Text>
          <View style={styles.settingValueContainer}>
            {displayValue && (
              <Text style={{ color: theme.colors.sectionSettingValue }}>
                {displayValue}
              </Text>
            )}
            {icon
              ? icon(value)
              : iconName && (
                  <Ionicons
                    name={iconName}
                    color={theme.colors.sectionSettingValue}
                    size={22}
                  />
                )}
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  outerBox: {
    position: "absolute",
    width: "100%",
    left: 0,
    right: 0,
    overflow: "hidden",
  },
  innerBox: {
    marginLeft: 20,
    width: "100%",
    height: "100%",
  },
  settingContainer: {
    flex: 1,
    paddingRight: 30,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  settingTitle: {
    fontSize: 16,
  },
  settingValueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default OptionGroupItem;
