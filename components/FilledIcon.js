import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function FilledIcon({ backgroundColor, iconName, iconColor, iconSize }) {
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Ionicons
        name={iconName}
        color={iconColor}
        size={iconSize}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    borderRadius: 6,
  },
});

export default FilledIcon;
