import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import { store } from "./store/store";
import SettingListScreen from "./screens/SettingListScreen";
import { useTheme } from "./theme/useTheme";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import SettingOptionsScreen from "./screens/SettingOptionsScreen";

export default function App() {
  const [theme] = useTheme();
  const Tabs = createBottomTabNavigator();
  const Stack = createStackNavigator();

  function SettingsStack() {
    return (
      <Stack.Navigator>
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
    <Provider store={store}>
      <StatusBar style="auto" />
      <NavigationContainer theme={theme}>
        <Tabs.Navigator initialRouteName="Home">
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
    </Provider>
  );
}
