import { StyleSheet, View } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.outerContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    padding: 16,
  },
});

export default HomeScreen;
