import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import { store } from "./store/store";
import SettingsScreen from "./screens/SettingsScreen";
import { useTheme } from "./theme/useTheme";
import { createStackNavigator } from "@react-navigation/stack";
import SettingScreen from "./screens/SettingScreen";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const [theme] = useTheme();
  const Tabs = createBottomTabNavigator();
  const Stack = createStackNavigator();

  function SettingsStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            title: "Settings",
          }}
        />
        <Stack.Screen
          name="SettingScreen"
          component={SettingScreen}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <NavigationContainer theme={theme}>
        <Tabs.Navigator initialRouteName="SettingsStack">
          <Tabs.Screen
            name="Home"
            component={HomeScreen}
            options={{
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
    </Provider>
  );
}
