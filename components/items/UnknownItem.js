import { View, Text, StyleSheet } from "react-native";

function UnknownItem(item) {
  return <Text style={styles.text}>{item.title}</Text>;
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
});

export default UnknownItem;
