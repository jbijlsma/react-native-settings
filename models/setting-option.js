export function SettingOption(name, value) {
  return {
    isPressable: true,
    type: "SingleSelectOptionItem",
    name: name,
    value: value,
  };
}
