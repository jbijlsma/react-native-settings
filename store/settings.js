import { createSelector, createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
import { Appearance } from "react-native";

import { OptionsSetting } from "../models/options-setting";
import { SettingSection } from "../models/setting-section";
import { SettingOption } from "../models/setting-option";
import { SettingPageLinkSetting } from "../models/setting-page-link-setting";
import { SettingPage } from "../models/setting-page";
import { SettingInlineSwitch } from "../models/setting-inline-switch";
import { SettingLogin } from "../models/setting-login";

import DarkTheme from "../theme/DarkTheme";
import LightTheme from "../theme/LightTheme";

const createCalendarSetting = (id) => new OptionsSetting(id, "Calendar");

const createMeasurementSystemSetting = (id) =>
  new OptionsSetting(id, "Measurement System");

const initialState = new SettingPage("Settings", [
  new SettingSection(null, 40, [new SettingLogin("login")]),
  new SettingSection(null, 40, [
    new OptionsSetting("display_mode", "Display Mode", {
      name: "ios-moon",
      color: "white",
      backgroundColor: "rgb(52, 120, 247)",
    }),
  ]),
  new SettingSection(null, 40, [
    new SettingInlineSwitch("airplane_mode", "Airplane Mode", {
      name: "ios-airplane",
      color: "white",
      backgroundColor: "rgb(241,154,56)",
    }),
  ]),
  new SettingSection(null, 40, [
    new SettingPageLinkSetting(
      "SettingPageLink",
      "general",
      "General",
      new SettingPage(null, [
        new SettingSection("ONE LEVEL DEEPER", 16, [
          createCalendarSetting("cal1"),
          createMeasurementSystemSetting("ms1"),
        ]),
      ]),
      {
        name: "ios-cog-outline",
        color: "white",
        backgroundColor: "rgb(142, 142, 147)",
      }
    ),
    new SettingPageLinkSetting(
      "SettingPageLink",
      "display_and_brightness",
      "Display and Brightness",
      new SettingPage(null, [
        new SettingSection("ONE LEVEL DEEPER", 16, [
          createCalendarSetting("cal2"),
          createMeasurementSystemSetting("ms2"),
        ]),
      ]),
      {
        name: "ios-sunny-outline",
        color: "white",
        backgroundColor: "rgb(52, 120, 247)",
      }
    ),
    new SettingPageLinkSetting(
      "SettingPageLink",
      "privacy_and_security",
      "Privacy & Security",
      new SettingPage(null, [
        new SettingSection("ONE LEVEL DEEPER", 16, [
          createCalendarSetting("cal3"),
          createMeasurementSystemSetting("ms3"),
        ]),
      ]),
      {
        name: "ios-hand-left-sharp",
        color: "white",
        backgroundColor: "rgb(87, 86, 206)",
      }
    ),
  ]),
]);

const defaultSettingValues = {
  display_mode: "auto",
  dark_mode: true,
  airplane_mode: false,
  cal1: "g",
  cal2: "j",
  cal3: "g",
  ms1: "m",
  ms2: "uk",
  ms3: "uk",
};

const settingsSlice = createSlice({
  name: "settingsSlice",
  initialState: {
    settingValues: defaultSettingValues,
    settingOptions: {
      display_mode: [
        new SettingOption("Automatic", "auto"),
        new SettingOption("Dark", "dark"),
        new SettingOption("Light", "light"),
      ],
      cal1: [
        new SettingOption("Gregorian", "g"),
        new SettingOption("Japanese", "j"),
        new SettingOption("Buddhist", "b"),
      ],
      cal2: [
        new SettingOption("Gregorian", "g"),
        new SettingOption("Japanese", "j"),
        new SettingOption("Buddhist", "b"),
      ],
      cal3: [
        new SettingOption("Gregorian", "g"),
        new SettingOption("Japanese", "j"),
        new SettingOption("Buddhist", "b"),
      ],
      ms1: [
        new SettingOption("Metric", "m"),
        new SettingOption("US", "us"),
        new SettingOption("UK", "uk"),
      ],
      ms2: [
        new SettingOption("Metric", "m"),
        new SettingOption("US", "us"),
        new SettingOption("UK", "uk"),
      ],
      ms3: [
        new SettingOption("Metric", "m"),
        new SettingOption("US", "us"),
        new SettingOption("UK", "uk"),
      ],
    },
    rootSettingsPage: initialState,
  },
  reducers: {
    updateSetting: (state, action) => {
      const { settingName, optionValue } = action.payload;
      state.settingValues[settingName] = optionValue;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      state.settingValues = defaultSettingValues;
    });
  },
});

export const getTheme = createSelector(
  (state) => state.settingsSlice.settingValues["display_mode"],
  (state) => state.settingsSlice.settingValues["device_color_scheme"],
  (displayMode, deviceColorScheme) => {
    switch (displayMode) {
      case "dark":
        return DarkTheme;
      case "light":
        return LightTheme;
      default:
        const colorScheme = deviceColorScheme ?? Appearance.getColorScheme();
        return colorScheme === "dark" ? DarkTheme : LightTheme;
    }
  }
);

export const { updateSetting } = settingsSlice.actions;

export default settingsSlice.reducer;
