export function SettingPageLinkSetting(
  type,
  name,
  title,
  linkedPage,
  iconBackgroundColor,
  iconName,
  iconColor
) {
  return {
    isPressable: true,
    type: type,
    name: name,
    title: title,
    linkedPage: linkedPage,
    iconBackgroundColor: iconBackgroundColor,
    iconName: iconName,
    iconColor: iconColor,
  };
}
