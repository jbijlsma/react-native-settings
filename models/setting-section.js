export function SettingSection(title, headerMarginLeft, settings) {
  return {
    id: Math.random() * 10000,
    title: title,
    headerMarginLeft: headerMarginLeft,
    settings: settings,
  };
}
