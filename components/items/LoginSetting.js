import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import { getI18n, getTheme } from "../../store/settings";
import { useNavigation } from "@react-navigation/native";
import Avatar from "../Avatar";

function LoginSetting() {
  const theme = useSelector(getTheme);
  const i18n = useSelector(getI18n);

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
      <View style={styles.rightTitleContainer}>
        <Text style={[styles.title, { color: theme.colors.primary }]}>
          {user.fullName}
        </Text>
        <Text style={[styles.subTitle, { color: theme.colors.text }]}>
          {i18n.t("appleSignInTitle")}
        </Text>
      </View>
    ) : (
      <View style={styles.rightTitleContainer}>
        <Text style={[styles.title, { color: theme.colors.primary }]}>
          {i18n.t("appleSignInMessage")}
        </Text>
        <Text style={[styles.subTitle, { color: theme.colors.text }]}>
          {i18n.t("appleSetupIcloud")}
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
    alignItems: "center",
  },
  rightTitleContainer: {
    flex: 1,
    flexShrink: 1,
    justifyContent: "center",
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
