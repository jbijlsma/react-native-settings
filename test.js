import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.settingsContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.outerBox1,
            pressed && { backgroundColor: "#bababa", zIndex: 1000 },
          ]}
        >
          <View style={styles.innerBox1} />
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.outerBox2,
            pressed && { backgroundColor: "#ababab", zIndex: 1000 },
          ]}
        >
          <View style={styles.innerBox2} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe4e4",
    alignItems: "stretch",
    justifyContent: "center",
  },
  settingsContainer: {
    flex: 1,
    backgroundColor: "#f48484",
    position: "relative",
    // width: "80%",
    // padding: 16,
    // borderRadius: 12,
    margin: 64,
  },
  outerBox1: {
    position: "absolute",
    width: "100%",
    height: 50,
    top: 1,
    left: 0,
    right: 0,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    backgroundColor: "#ededed",
    overflow: "hidden",
  },
  innerBox1: {
    marginLeft: 12,
    width: "100%",
    height: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#bababa",
  },
  outerBox2: {
    position: "absolute",
    width: "100%",
    height: 50,
    top: 49,
    left: 0,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: "#ededed",
    overflow: "hidden",
  },
  innerBox2: {
    marginLeft: 12,
    width: "100%",
    height: "100%",
    borderTopWidth: 1,
    borderTopColor: "#bababa",
  },
});
