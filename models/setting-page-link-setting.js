export function SettingPageLinkSetting(type, name, title, linkedPage, icon) {
  return {
    isPressable: true,
    type: type,
    name: name,
    title: title,
    linkedPage: linkedPage,
    icon,
  };
}
