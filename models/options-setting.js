export function OptionsSetting(name, title, icon) {
  return {
    type: "SingleSelectSetting",
    isPressable: true,
    name: name,
    title: title,
    icon: icon,
  };
}
