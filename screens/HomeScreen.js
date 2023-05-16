import { StyleSheet, View, Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useTheme } from "../theme/useTheme";
import FilledIcon from "../components/FilledIcon";

function HomeScreen({ navigation }) {
  const [theme] = useTheme();

  const createPressables = () => {
    return (
      <>
        <Pressable
          style={({ pressed }) => [
            styles.outerBox,
            { borderTopLeftRadius: 12, borderTopRightRadius: 12 },
            {
              top: 0,
              height: 50,
              backgroundColor: theme.colors.sectionBackground,
            },
            pressed && {
              backgroundColor: theme.colors.settingPressedBackground,
              zIndex: 1000,
            },
          ]}
        >
          <View style={styles.innerBox}>
            <View style={styles.innerBoxLeft}>
              <FilledIcon
                backgroundColor="rgb(142, 142, 147)"
                iconName="ios-cog-outline"
                iconColor="white"
                iconSize={22}
              />
            </View>
            <View style={styles.innerBoxRight}>
              <Text
                style={[
                  styles.settingTitle,
                  { color: theme.colors.sectionSettingText },
                ]}
              >
                Settings
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                color="white"
                size={22}
              />
            </View>
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.outerBox,
            {
              top: 49,
              height: 50,
              backgroundColor: theme.colors.sectionBackground,
            },
            pressed && {
              backgroundColor: theme.colors.settingPressedBackground,
              zIndex: 1000,
            },
          ]}
        >
          <View style={styles.innerBox}>
            <View style={styles.innerBoxLeft}>
              <FilledIcon
                backgroundColor="rgb(142, 142, 147)"
                iconName="ios-cog-outline"
                iconColor="white"
                iconSize={22}
              />
            </View>
            <View
              style={[
                styles.innerBoxRight,
                {
                  borderTopWidth: 1,
                  borderTopColor: theme.colors.settingPressedBackground,
                },
              ]}
            >
              <Text
                style={[
                  styles.settingTitle,
                  { color: theme.colors.sectionSettingText },
                ]}
              >
                Settings
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                color="white"
                size={22}
              />
            </View>
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.outerBox,
            {
              top: 98,
              height: 50,
              backgroundColor: theme.colors.sectionBackground,
            },
            pressed && {
              backgroundColor: theme.colors.settingPressedBackground,
              zIndex: 1000,
            },
          ]}
        >
          <View style={styles.innerBox}>
            <View style={styles.innerBoxLeft}></View>
            <View
              style={[
                styles.innerBoxRight,
                {
                  borderTopWidth: 1,
                  borderTopColor: theme.colors.settingPressedBackground,
                },
              ]}
            >
              <Text
                style={[
                  styles.settingTitle,
                  { color: theme.colors.sectionSettingText },
                ]}
              >
                Settings
              </Text>
              <Ionicons
                name="chevron-forward-outline"
                color="white"
                size={22}
              />
            </View>
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.outerBox,
            { borderBottomLeftRadius: 12, borderBottomRightRadius: 12 },
            {
              top: 147,
              height: 50,
              backgroundColor: theme.colors.sectionBackground,
            },
            pressed && {
              backgroundColor: theme.colors.settingPressedBackground,
              zIndex: 1000,
            },
          ]}
        >
          <View
            style={[
              styles.innerBox,
              {
                borderTopWidth: 1,
                borderTopColor: theme.colors.settingPressedBackground,
              },
            ]}
          ></View>
        </Pressable>
      </>
    );
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.outerContainer}>{createPressables()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 64,
  },
  outerContainer: {
    // position: "relative",
    flex: 1,
  },
  outerBox: {
    position: "absolute",
    width: "100%",
    left: 0,
    right: 0,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
  innerBox: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
  },
  innerBoxLeft: {
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  innerBoxRight: {
    paddingRight: 8,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  settingTitle: {
    fontSize: 16,
  },
});

export default HomeScreen;
