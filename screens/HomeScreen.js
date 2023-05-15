import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";

import ItemGroup from "../components/ItemGroup";
import { useTheme } from "../theme/useTheme";

function HomeScreen({ navigation }) {
  const [theme] = useTheme();
  const section = useSelector((state) => state.settingsSlice.section);

  function onPressHandler(item) {
    navigation.navigate("ItemScreen", { itemName: item.name });
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Home</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
