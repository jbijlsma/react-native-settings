import { View, StyleSheet } from "react-native";
import Avatar from "../components/Avatar";

function HomeScreen() {
  return (
    <View style={styles.pageContainer}>
      <Avatar
        size={200}
        imageUri="https://secure.gravatar.com/avatar/dad0b79139b72a32fafc32e123558b01?s=256"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
