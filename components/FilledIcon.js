import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function FilledIcon({ icon }) {
  return (
    <View style={[styles.container, { backgroundColor: icon.backgroundColor }]}>
      <Ionicons
        name={icon.name}
        color={icon.color}
        size={icon.size}
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
