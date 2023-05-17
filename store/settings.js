import { createSlice } from "@reduxjs/toolkit";

import { OptionsSetting } from "../models/options-setting";
import { SettingSection } from "../models/setting-section";
import { SettingOption } from "../models/setting-option";
import { SettingPageLinkSetting } from "../models/setting-page-link-setting";
import { SettingPage } from "../models/setting-page";
import { SettingInlineSwitch } from "../models/setting-inline-switch";

const createCalendarSetting = (id) =>
  new OptionsSetting("SingleSelectSetting", id, "Calendar");

const createMeasurementSystemSetting = (id) =>
  new OptionsSetting("SingleSelectSetting", id, "Measurement System");

const initialState = new SettingPage("Settings", [
  new SettingSection(null, 40, [
    new SettingInlineSwitch(
      "airplane_mode",
      "Airplane Mode",
      "rgb(241,154,56)",
      "ios-airplane",
      "white"
    ),
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
      "rgb(142, 142, 147)",
      "ios-cog-outline",
      "white"
    ),
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
      "rgb(142, 142, 147)",
      "ios-cog-outline",
      "white"
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
      "rgb(52, 120, 247)",
      "ios-sunny-outline",
      "white"
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
      "rgb(87, 86, 206)",
      "ios-hand-left-sharp",
      "white"
    ),
  ]),
]);

const settingsSlice = createSlice({
  name: "settingsSlice",
  initialState: {
    settingValues: {
      airplane_mode: false,
      cal1: "g",
      cal2: "j",
      cal3: "g",
      ms1: "m",
      ms2: "uk",
      ms3: "uk",
    },
    settingOptions: {
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
});

export const { updateSetting } = settingsSlice.actions;

export default settingsSlice.reducer;
