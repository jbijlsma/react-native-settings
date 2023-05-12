import { Pressable, Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function SettingGroupItem({
  title,
  value,
  displayValue,
  backgroundColor,
  pressedBackgroundColor,
  textColor,
  valueColor,
  icon,
  iconName,
  hasPrevSibbling,
  hasNextSibbling,
  onPress,
}) {
  function getPressableBorderRadiusStyle() {
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

  const borderRadiusStyle = getPressableBorderRadiusStyle();

  return (
    <View>
      <Pressable
        onPress={onPress.bind(this, value)}
        style={({ pressed }) => [
          styles.settingContainer,
          borderRadiusStyle,
          { backgroundColor: backgroundColor },
          pressed && { backgroundColor: pressedBackgroundColor },
          hasNextSibbling && {
            borderBottomWidth: 1,
            borderBottomColor: pressedBackgroundColor,
          },
        ]}
      >
        <Text style={[styles.settingTitle, { color: textColor }]}>{title}</Text>
        <View style={styles.settingValueContainer}>
          {displayValue && (
            <Text style={{ color: valueColor }}>{displayValue}</Text>
          )}
          {icon
            ? icon(value)
            : iconName && (
                <Ionicons
                  name={iconName}
                  color={valueColor}
                  size={22}
                />
              )}
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  settingContainer: {
    padding: 12,
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

export default SettingGroupItem;
