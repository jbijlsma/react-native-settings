import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../theme/useTheme";

function LoginSetting() {
  const [theme] = useTheme();

  return {
    left: (
      <View style={styles.container}>
        <Ionicons
          name="ios-person"
          color="black"
          size={62}
        ></Ionicons>
      </View>
    ),
    right: (
      <View>
        <Text style={[styles.title, { color: theme.colors.primary }]}>
          Sign in to your iPhone
        </Text>
        <Text style={[styles.subTitle, { color: theme.colors.text }]}>
          Set up iCloud, the App Store, and more.
        </Text>
      </View>
    ),
  };
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    width: 60,
    height: 60,
    backgroundColor: "rgb(90,90,90)",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    margin: 6,
  },
  title: {
    fontSize: 18,
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 14,
  },
});

export default LoginSetting;
