import { StyleSheet, Pressable, View, Text } from "react-native";

import { useTheme } from "../theme/useTheme";
import FilledIcon from "./FilledIcon";

function Item({
  item,
  hasPrevSibbling,
  hasNextSibbling,
  isPressable,
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

  const pressableBorderRadius = getPressableBorderRadiusStyle(
    hasPrevSibbling,
    hasNextSibbling
  );

  function onPressHandler() {
    if (item.isPressable) {
      onPress(item);
    }
  }

  return (
    <Pressable
      onPress={onPressHandler}
      style={({ pressed }) => [
        styles.outerBox,
        hasPrevSibbling && { marginTop: -1 },
        pressableBorderRadius,
        {
          backgroundColor: theme.colors.sectionBackground,
        },
        isPressable &&
          pressed && {
            backgroundColor: theme.colors.settingPressedBackground,
            zIndex: 100,
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
    width: "100%",
    flexDirection: "row",
  },
  innerBox: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  innerBoxLeft: {
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  innerBoxRight: {
    flex: 1,
    paddingRight: 4,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Item;
