export function SettingInlineSwitch(
  name,
  title,
  iconBackgroundColor,
  iconName,
  iconColor
) {
  return {
    type: "SettingInlineSwitch",
    isPressable: false,
    name: name,
    title: title,
    iconBackgroundColor,
    iconName,
    iconColor,
  };
}
