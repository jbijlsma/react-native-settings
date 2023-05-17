import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import { Appearance } from "react-native";

import SettingListScreen from "./screens/SettingListScreen";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import SettingOptionsScreen from "./screens/SettingOptionsScreen";
import { useDispatch, useSelector } from "react-redux";
import { getTheme } from "./store/settings";
import { updateSetting } from "./store/settings";

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
              headerShown: false,
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
            name="SettingsStack"
            component={SettingsStack}
            options={{
              headerShown: false,
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
