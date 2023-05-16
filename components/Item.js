import { StyleSheet, Pressable, View, Text } from "react-native";

import { useTheme } from "../theme/useTheme";
import FilledIcon from "./FilledIcon";

function Item({
  item,
  index,
  marginLeft,
  hasPrevSibbling,
  hasNextSibbling,
  onPress,
  children,
}) {
  const [theme] = useTheme();

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
  const outerBoxHeight = 48;
  const pressableBorderRadius = getPressableBorderRadiusStyle(
    hasPrevSibbling,
    hasNextSibbling
  );
  const top = index * outerBoxHeight - index;

  return (
    <Pressable
      onPress={onPress.bind(this, item)}
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
      <View style={styles.leadingIcon}>
        {item.iconName && (
          <FilledIcon
            backgroundColor={item.iconBackgroundColor}
            iconName={item.iconName}
            iconColor={item.iconColor}
            iconSize={24}
          />
        )}
      </View>
      <View
        style={[
          styles.innerBox,
          { marginLeft: marginLeft },
          !isFirstSetting &&
            hasPrevSibbling && {
              borderTopWidth: 1,
              borderTopColor: theme.colors.settingPressedBackground,
            },
        ]}
      >
        <View style={styles.settingContainer}>{children}</View>
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
    flexDirection: "row",
    alignItems: "center",
  },
  innerBox: {
    width: "100%",
    height: "100%",
  },
  leadingIcon: {
    position: "absolute",
    left: 8,
  },
  settingContainer: {
    flex: 1,
    paddingRight: 55,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Item;
