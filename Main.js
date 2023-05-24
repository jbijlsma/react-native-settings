import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { Appearance } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import SettingListScreen from "./screens/SettingListScreen";
import HomeScreen from "./screens/HomeScreen";
import SettingOptionsScreen from "./screens/SettingOptionsScreen";
import { useDispatch, useSelector } from "react-redux";
import { getTheme } from "./store/settings";
import { updateSetting } from "./store/settings";
import AppleSigninScreen from "./screens/login/AppleSigninScreen";
import ModalsScreen from "./screens/ModalsScreen";
import AppleUserScreen from "./screens/login/AppleUserScreen";

function Main() {
  const Tabs = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const theme = useSelector(getTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = Appearance.addChangeListener(() => {
      dispatch(
        updateSetting({
          settingName: "device_color_scheme",
          optionValue: Appearance.getColorScheme(),
        })
      );
    });

    return () => listener.remove();
  }, []);

  function SettingsStack() {
    return (
      <Stack.Navigator initialRouteName="SettingListScreen">
        <Stack.Group>
          <Stack.Screen
            name="SettingListScreen"
            component={SettingListScreen}
            options={{
              title: "Settings",
            }}
          />
          <Stack.Screen
            name="SettingOptionsScreen"
            component={SettingOptionsScreen}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name="AppleSigninScreen"
            component={AppleSigninScreen}
            options={{
              title: "Apple ID",
              presentation: "modal",
            }}
          />
          <Stack.Screen
            name="AppleUserScreen"
            component={AppleUserScreen}
            options={{
              title: "Apple ID",
              presentation: "modal",
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    );
  }

  function ModalsStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="ModalsScreen"
          component={ModalsScreen}
          options={{
            title: "Modals",
          }}
        />
        <Stack.Screen
          name="AppleSigninScreen"
          component={AppleSigninScreen}
          options={{
            title: "Apple ID",
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="AppleUserScreen"
          component={AppleUserScreen}
          options={{
            title: "Apple ID",
            presentation: "modal",
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer theme={theme}>
        <Tabs.Navigator initialRouteName="SettingsStack">
          <Tabs.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: true,
              tabBarIcon: ({ color, size }) => (
                <Ionicons
                  name="home-outline"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="ModalsStack"
            component={ModalsStack}
            options={{
              headerShown: false,
              title: "Modals",
              tabBarIcon: ({ color, size }) => (
                <Ionicons
                  name="ios-copy"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="SettingsStack"
            component={SettingsStack}
            options={{
              headerShown: false,
              title: "Settings", // Not for header, but for tab bar
              tabBarIcon: ({ color, size }) => (
                <Ionicons
                  name="settings-outline"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Main;
