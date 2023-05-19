import { Pressable, StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import { getTheme } from "../../store/settings";
import { logout } from "../../store/auth";

function AppleUserScreen({ navigation, onSignoutSuccess }) {
  const theme = useSelector(getTheme);
  const user = useSelector((state) => state.authSlice.user);
  const dispatch = useDispatch();

  function signoutHandler() {
    dispatch(logout());
    if (onSignoutSuccess) onSignoutSuccess();
    if (navigation) navigation.goBack();
  }

  return (
    <View style={styles.pageContainer}>
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: theme.colors.settingPressedBackground },
        ]}
      >
        <Ionicons
          name="ios-person"
          color="black"
          size={207}
        ></Ionicons>
        <Pressable
          style={({ pressed }) => [
            styles.editIconBtn,
            pressed && styles.pressed,
          ]}
        >
          <Text
            style={[
              styles.editIconBtnText,
              { color: theme.colors.sectionSettingValue },
            ]}
          >
            EDIT
          </Text>
        </Pressable>
      </View>
      <Text style={[styles.userName, { color: theme.colors.text }]}>
        {user.fullName}
      </Text>
      <Text style={[styles.email, { color: theme.colors.sectionSettingValue }]}>
        {user.email}
      </Text>
      <Pressable
        onPress={signoutHandler}
        style={({ pressed }) => [
          styles.signOutBtn,
          { backgroundColor: theme.colors.sectionBackground },
          pressed && { backgroundColor: theme.colors.settingPressedBackground },
        ]}
      >
        <Text style={styles.signOutBtnText}>Sign Out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  editIconBtn: {
    position: "absolute",
    bottom: 24,
    margin: 8,
  },
  pressed: {
    opacity: 0.5,
  },
  editIconBtnText: {
    color: "white",
  },
  userName: {
    textAlign: "center",
    fontSize: 28,
  },
  email: {
    textAlign: "center",
    fontSize: 14,
  },
  signOutBtn: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 12,
    marginTop: 16,
  },
  signOutBtnText: {
    fontSize: 17,
    color: "#ff5151",
  },
});

export default AppleUserScreen;
