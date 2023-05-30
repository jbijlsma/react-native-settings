export function SettingPageLinkSetting(name, linkedPage, icon) {
  return {
    isPressable: true,
    type: "SettingPageLink",
    name: name,
    linkedPage: linkedPage,
    icon,
  };
}
