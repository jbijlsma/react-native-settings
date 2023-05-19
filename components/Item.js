import { StyleSheet, Pressable, View } from "react-native";

import FilledIcon from "./FilledIcon";
import { useSelector } from "react-redux";
import { getTheme } from "../store/settings";

function Item({
  item,
  hasPrevSibbling,
  hasNextSibbling,
  isPressable,
  onPress,
  itemContent,
}) {
  const theme = useSelector(getTheme);

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

  let innerBoxContent = (
    <>
      <View style={styles.innerBoxLeft}>
        {item.icon && <FilledIcon icon={{ ...item.icon, size: 24 }} />}
        {itemContent?.left}
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
        {itemContent.right}
      </View>
    </>
  );

  if (itemContent.content) {
    innerBoxContent = itemContent.content;
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
      <View style={styles.innerBox}>{innerBoxContent}</View>
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
    minHeight: 50,
  },
});

export default Item;
