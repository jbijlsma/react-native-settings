import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { getTheme } from "../../store/settings";

function SingleSelectOptionItem({ setting, isSelected }) {
  const theme = useSelector(getTheme);

  return (
    <>
      <Text style={[styles.settingTitle, { color: theme.colors.text }]}>
        {setting.title}
      </Text>
      <View style={styles.settingValueContainer}>
        {isSelected && (
          <Ionicons
            name="checkmark-outline"
            color={theme.colors.primary}
            size={18}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  settingTitle: {
    fontSize: 16,
  },
  settingValueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SingleSelectOptionItem;
