import { Text, StyleSheet } from "react-native";

function UnknownItem({ settingName }) {
  return <Text style={styles.text}>{itemName}</Text>;
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});

export default UnknownItem;
