import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";

import OptionGroup from "../components/OptionGroup";
import { useTheme } from "../theme/useTheme";

function HomeScreen() {
  const [theme] = useTheme();
  const section = useSelector((state) => state.settingsSlice.section);

  return (
    <View style={styles.container}>
      <Text
        style={[styles.sectionHeader, { color: theme.colors.sectionHeader }]}
      >
        {section.title.toUpperCase()}
      </Text>

      <View>
        <OptionGroup settings={section.settings} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionHeader: {
    marginLeft: 20,
    fontSize: 14,
    marginBottom: 8,
  },
});

export default HomeScreen;
