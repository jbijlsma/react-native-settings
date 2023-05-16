import { createSlice } from "@reduxjs/toolkit";

import { OptionsSetting } from "../models/options-setting";
import { SettingSection } from "../models/setting-section";
import { SettingOption } from "../models/setting-option";
import { SettingPageLinkSetting } from "../models/setting-page-link-setting";

const createCalendarSetting = (id) =>
  new OptionsSetting("SingleSelectSetting", id, "Calendar", "g", [
    new SettingOption("Gregorian", "g"),
    new SettingOption("Japanese", "j"),
    new SettingOption("Buddhist", "b"),
  ]);

const createMeasurementSystemSetting = (id) =>
  new OptionsSetting("SingleSelectSetting", id, "Measurement System", "us", [
    new SettingOption("Metric", "m"),
    new SettingOption("US", "us"),
    new SettingOption("UK", "uk"),
  ]);

const initialState = new SettingSection("PREFERRED LANGUAGES", [
  new SettingPageLinkSetting(
    "SettingPageLink",
    "general",
    "General",
    new SettingSection("ONE LEVEL DEEPER", [
      createCalendarSetting("cal1"),
      createMeasurementSystemSetting("ms1"),
    ]),
    "rgb(142, 142, 147)",
    "ios-cog-outline",
    "white"
  ),
  new SettingPageLinkSetting(
    "SettingPageLink",
    "display_and_brightness",
    "Display and Brightness",
    new SettingSection("ONE LEVEL DEEPER", [
      createCalendarSetting("cal2"),
      createMeasurementSystemSetting("ms2"),
    ]),
    "rgb(52, 120, 247)",
    "ios-sunny-outline",
    "white"
  ),
]);

const settingsSlice = createSlice({
  name: "settingsSlice",
  initialState: {
    section: initialState,
  },
  reducers: {
    updateSetting: (state, action) => {
      const { settingName, optionValue } = action.payload;

      const setting = state.section.settings.find(
        (setting) => setting.name === settingName
      );
      setting.value = optionValue;
    },
  },
});

export const { updateSetting } = settingsSlice.actions;

export default settingsSlice.reducer;
