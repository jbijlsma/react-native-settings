import { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { getTheme } from "../../store/settings";

import { login } from "../../store/auth";

function AppleSigninScreen({ navigation, onSigninSuccess }) {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const isLoginBtnEnabled = email.length > 0 && pwd.length > 0;

  const theme = useSelector(getTheme);

  const dispatch = useDispatch();

  const emailRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      emailRef.current?.focus();
    }, 0);
  }, []);

  function onChangeEmailHandler(text) {
    setEmail(text);
  }

  function onChangePwdHandler(text) {
    setPwd(text);
  }

  function loginHandler() {
    dispatch(login({ email: email }));
    if (onSigninSuccess) onSigninSuccess();

    if (navigation) navigation.goBack();
  }

  return (
    <View
      style={[
        styles.pageContainer,
        { backgroundColor: theme.colors.sectionItemSeperator },
      ]}
    >
      <Text style={[styles.title, { color: theme.colors.text }]}>Apple ID</Text>
      <Text style={[styles.subtitle, { color: theme.colors.text }]}>
        Sign in with your Apple ID to use iCloud the App Store and other Apple
        services
      </Text>

      <View
        style={[
          styles.inputContainer,
          styles.emailContainer,
          { backgroundColor: theme.colors.sectionBackground },
        ]}
      >
        <Text style={[styles.inputName, { color: theme.colors.text }]}>
          Apple ID
        </Text>
        <TextInput
          ref={emailRef}
          style={[styles.email, { color: theme.colors.text }]}
          placeholder="Email"
          value={email}
          onChangeText={onChangeEmailHandler}
        />
      </View>
      <View
        style={[
          styles.inputContainer,
          styles.pwdContainer,
          { backgroundColor: theme.colors.sectionBackground },
          {
            borderTopWidth: 1,
            borderTopColor: theme.colors.settingPressedBackground,
          },
        ]}
      >
        <Text style={[styles.inputName, { color: theme.colors.text }]}>
          Password
        </Text>
        <TextInput
          style={[styles.pwd, { color: theme.colors.text }]}
          placeholder="Password"
          value={pwd}
          onChangeText={onChangePwdHandler}
        />
      </View>

      <Pressable
        onPress={loginHandler}
        disabled={!isLoginBtnEnabled}
        style={({ pressed }) => [
          styles.signInBtn,
          { backgroundColor: theme.colors.sectionBackground },
          pressed && { backgroundColor: theme.colors.settingPressedBackground },
        ]}
      >
        <Text
          style={[
            styles.signInBtnText,
            { color: theme.colors.primary },
            !isLoginBtnEnabled && {
              color: theme.colors.sectionSettingValue,
            },
          ]}
        >
          Sign In
        </Text>
      </Pressable>

      <Button title="Forgot password or don't have an Apple ID?" />
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    padding: 8,
    alignItems: "center",
  },
  title: {
    paddingTop: "30%",
    fontSize: 36,
    fontWeight: "bold",
  },
  subtitle: {
    padding: 16,
    fontSize: 16,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 12,
  },
  emailContainer: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  pwdContainer: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  inputName: {
    width: 90,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  email: {
    fontSize: 16,
    paddingVertical: 4,
    paddingLeft: 16,
    flex: 1,
  },
  pwd: {
    fontSize: 16,
    paddingVertical: 4,
    paddingLeft: 16,
    flex: 1,
  },
  signInBtn: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    marginTop: 16,
    marginBottom: 16,
  },
  signInBtnText: {
    fontSize: 17,
  },
});

export default AppleSigninScreen;
