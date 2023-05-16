import { StyleSheet, Pressable, View, Text } from "react-native";

import { useTheme } from "../theme/useTheme";
import FilledIcon from "./FilledIcon";

function Item({
  item,
  index,
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
      <View style={styles.innerBox}>
        <View style={styles.innerBoxLeft}>
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
            styles.innerBoxRight,
            hasPrevSibbling && {
              borderTopWidth: 1,
              borderTopColor: theme.colors.settingPressedBackground,
            },
          ]}
        >
          {children}
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
    flexDirection: "row",
    alignItems: "center",
  },
  innerBox: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
  },
  innerBoxLeft: {
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  innerBoxRight: {
    paddingRight: 8,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Item;
