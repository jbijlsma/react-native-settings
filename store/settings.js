import { createSlice } from "@reduxjs/toolkit";

import { Setting } from "../models/setting";
import { SettingSection } from "../models/setting-section";
import { SettingOption } from "../models/setting-option";

const initialState = new SettingSection("PREFERRED LANGUAGES", [
  new Setting("SingleSelectSetting", "calendar", "Calendar", "g", [
    new SettingOption("Gregorian", "g"),
    new SettingOption("Japanese", "j"),
    new SettingOption("Buddhist", "b"),
  ]),
  new Setting("SingleSelectSetting", "ms", "Measurement System", "us", [
    new SettingOption("Metric", "m"),
    new SettingOption("US", "us"),
    new SettingOption("UK", "uk"),
  ]),
  new Setting("SingleSelectSetting", "ms2", "Measurement System 2", "us", [
    new SettingOption("Metric", "m"),
    new SettingOption("US", "us"),
    new SettingOption("UK", "uk"),
  ]),
  new Setting("SingleSelectSetting", "ms3", "Measurement System 3", "us", [
    new SettingOption("Metric", "m"),
    new SettingOption("US", "us"),
    new SettingOption("UK", "uk"),
  ]),
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
