import { useEffect, useState } from "react";
import { Appearance } from "react-native";

import DarkTheme from "./DarkTheme";
import LightTheme from "./LightTheme";

export function useTheme() {
  const [mode, setMode] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const listener = () => {
      setMode(Appearance.getColorScheme());
    };
    Appearance.addChangeListener(listener);
  }, []);

  const theme = mode === "dark" ? DarkTheme : LightTheme;

  return [theme, mode, setMode];
}
