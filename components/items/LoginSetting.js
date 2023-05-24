import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import { getTheme } from "../../store/settings";
import { useNavigation } from "@react-navigation/native";
import Avatar from "../Avatar";

function LoginSetting() {
  const theme = useSelector(getTheme);
  const user = useSelector((state) => state.authSlice.user);
  const navigation = useNavigation();

  function createLeftContent() {
    return (
      <View style={styles.leftContainer}>
        {user.isAuthenticated ? (
          <Avatar
            size={64}
            imageUri={user.avatarUri}
          />
        ) : (
          <Ionicons
            name="ios-person"
            color="black"
            size={62}
          ></Ionicons>
        )}
      </View>
    );
  }

  function createRightContent() {
    const content = user.isAuthenticated ? (
      <View>
        <Text style={[styles.title, { color: theme.colors.primary }]}>
          {user.fullName}
        </Text>
        <Text style={[styles.subTitle, { color: theme.colors.text }]}>
          Apple ID, iCloud+, Media & Purchases
        </Text>
      </View>
    ) : (
      <View>
        <Text style={[styles.title, { color: theme.colors.primary }]}>
          Sign in to your iPhone
        </Text>
        <Text style={[styles.subTitle, { color: theme.colors.text }]}>
          Set up iCloud, the App Store, and more.
        </Text>
      </View>
    );

    return (
      <View style={styles.rightContainer}>
        {content}
        <Ionicons
          name="chevron-forward-outline"
          color={theme.colors.background400}
          size={22}
        />
      </View>
    );
  }

  return {
    onClick: () => {
      user.isAuthenticated
        ? navigation.navigate("AppleUserScreen")
        : navigation.navigate("AppleSigninScreen");
    },
    left: createLeftContent(),
    right: createRightContent(),
  };
}

const styles = StyleSheet.create({
  leftContainer: {
    borderRadius: 30,
    width: 60,
    height: 60,
    backgroundColor: "rgb(90,90,90)",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    margin: 6,
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
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
