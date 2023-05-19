import { useEffect, useRef } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import { getTheme } from "../../store/settings";
import { useNavigation } from "@react-navigation/native";

function LoginSetting() {
  const theme = useSelector(getTheme);
  const user = useSelector((state) => state.authSlice.user);
  const navigation = useNavigation();

  return {
    onClick: () => {
      user.isAuthenticated
        ? navigation.navigate("AppleUserScreen")
        : navigation.navigate("AppleSigninScreen");
    },
    left: (
      <View style={styles.leftContainer}>
        <Ionicons
          name="ios-person"
          color="black"
          size={62}
        ></Ionicons>
      </View>
    ),
    right: (
      <View style={styles.rightContainer}>
        <View>
          <Text style={[styles.title, { color: theme.colors.primary }]}>
            Sign in to your iPhone
          </Text>
          <Text style={[styles.subTitle, { color: theme.colors.text }]}>
            Set up iCloud, the App Store, and more.
          </Text>
        </View>
        <Ionicons
          name="chevron-forward-outline"
          color={theme.colors.sectionSettingValue}
          size={22}
        />
      </View>
    ),
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
