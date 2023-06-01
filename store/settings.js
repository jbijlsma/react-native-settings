import { createSelector, createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
import { Appearance } from "react-native";
import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

import { OptionsSetting } from "../models/options-setting";
import { SettingSection } from "../models/setting-section";
import { SettingOption } from "../models/setting-option";
import { SettingPageLinkSetting } from "../models/setting-page-link-setting";
import { SettingPage } from "../models/setting-page";
import { SettingInlineSwitch } from "../models/setting-inline-switch";
import { SettingLogin } from "../models/setting-login";

import DarkTheme from "../theme/DarkTheme";
import LightTheme from "../theme/LightTheme";
import { SettingResetSettings } from "../models/setting-reset-settings";
import { supportedLanguages } from "../i18n/supportedLanguages";

const createCalendarSetting = () => new OptionsSetting("calendar");

const createMeasurementSystemSetting = () =>
  new OptionsSetting("measurement_system");

const initialState = new SettingPage("settings", [
  new SettingSection(null, 40, [new SettingLogin("login")]),
  new SettingSection(null, 40, [
    new OptionsSetting("display_mode", {
      name: "ios-moon",
      color: "white",
      backgroundColor: "rgb(3, 6, 10)",
    }),
  ]),
  new SettingSection(null, 40, [
    new OptionsSetting("language", {
      name: "ios-language",
      color: "white",
      backgroundColor: "rgb(142, 142, 147)",
    }),
  ]),
  new SettingSection(null, 40, [
    new SettingInlineSwitch("airplane_mode", {
      name: "ios-airplane",
      color: "white",
      backgroundColor: "rgb(241,154,56)",
    }),
  ]),
  new SettingSection(null, 40, [
    new SettingPageLinkSetting(
      "general",
      new SettingPage("general", [
        new SettingSection("one_level_deeper", 16, [
          createCalendarSetting(),
          createMeasurementSystemSetting(),
        ]),
      ]),
      {
        name: "ios-cog-outline",
        color: "white",
        backgroundColor: "rgb(142, 142, 147)",
      }
    ),
    new SettingPageLinkSetting(
      "display_and_brightness",
      new SettingPage("display_and_brightness", [
        new SettingSection("", 16, [
          createCalendarSetting(),
          createMeasurementSystemSetting(),
        ]),
      ]),
      {
        name: "ios-sunny-outline",
        color: "white",
        backgroundColor: "rgb(52, 120, 247)",
      }
    ),
    new SettingPageLinkSetting(
      "privacy_and_security",
      new SettingPage("privacy_and_security", [
        new SettingSection("one_level_deeper", 16, [
          createCalendarSetting(),
          createMeasurementSystemSetting(),
        ]),
      ]),
      {
        name: "ios-hand-left-sharp",
        color: "white",
        backgroundColor: "rgb(87, 86, 206)",
      }
    ),
  ]),
  new SettingSection(null, 40, [new SettingResetSettings("reset_settings")]),
]);

const defaultSettingValues = {
  display_mode: "auto",
  language: getLocales()[0].languageCode,
  dark_mode: true,
  airplane_mode: false,
  calendar: "g",
  measurement_system: "m",
};

const settingsSlice = createSlice({
  name: "settingsSlice",
  initialState: {
    settingValues: defaultSettingValues,
    settingOptions: {
      display_mode: [
        new SettingOption("display_auto", "auto"),
        new SettingOption("display_dark", "dark"),
        new SettingOption("display_light", "light"),
      ],
      language: [
        new SettingOption("language_en", "en"),
        new SettingOption("language_nl", "nl"),
        new SettingOption("language_de", "de"),
      ],
      calendar: [
        new SettingOption("cal_gregorian", "g"),
        new SettingOption("cal_japanese", "j"),
        new SettingOption("cal_buddhist", "b"),
      ],
      measurement_system: [
        new SettingOption("ms_metric", "m"),
        new SettingOption("ms_us", "us"),
        new SettingOption("ms_uk", "uk"),
      ],
    },
    rootSettingsPage: initialState,
  },
  reducers: {
    updateSetting: (state, action) => {
      const { settingName, optionValue } = action.payload;
      state.settingValues[settingName] = optionValue;
    },
    purgeSettings: (state, action) => {
      state.settingValues = defaultSettingValues;
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

export const getI18n = createSelector(
  (state) => state.settingsSlice.settingValues["language"],
  (language) => {
    let selectedLanguageCode = language;
    const supportedLanguageCodes = Object.keys(supportedLanguages);

    if (supportedLanguageCodes.indexOf(selectedLanguageCode) < 0) {
      selectedLanguageCode = getLocales()[0].languageCode;
      if (supportedLanguageCodes.indexOf(selectedLanguageCode) < 0) {
        selectedLanguageCode = supportedLanguageCodes[0];
      }
    }

    const i18n = new I18n(supportedLanguages);

    i18n.locale = selectedLanguageCode;
    i18n.enableFallback = true;

    return i18n;
  }
);

export const { updateSetting, purgeSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
