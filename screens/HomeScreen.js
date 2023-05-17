import { StyleSheet, View } from "react-native";

import { useTheme } from "../theme/useTheme";

function HomeScreen({ navigation }) {
  const [theme] = useTheme();

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
