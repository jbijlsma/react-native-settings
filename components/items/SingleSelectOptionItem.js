import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { getI18n, getTheme } from "../../store/settings";

function SingleSelectOptionItem({ settingName, isSelected }) {
  const theme = useSelector(getTheme);
  const i18n = useSelector(getI18n);

  return (
    <>
      <Text style={[styles.settingTitle, { color: theme.colors.text }]}>
        {i18n.t(settingName)}
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
