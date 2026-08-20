/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import { Preferences } from "chrome://global/content/preferences/Preferences.mjs";
import { SettingGroupManager } from "chrome://browser/content/preferences/config/SettingGroupManager.mjs";
import { ROSE_PALETTES } from "chrome://browser/content/preferences/config/rose-palettes.mjs";

// Read by chrome://browser/skin/rose/*.css through @media -moz-pref(), so
// writing one restyles every open window with no JavaScript involved.
const PREFS = [
  { id: "rose.appearance.palette", type: "string" },
  { id: "rose.appearance.density", type: "string" },
  { id: "rose.appearance.font", type: "string" },
  { id: "rose.appearance.radius", type: "int" },
  { id: "rose.appearance.padding", type: "int" },
  { id: "rose.appearance.border-width", type: "int" },
  { id: "rose.appearance.font-size", type: "int" },
  { id: "rose.appearance.tab-height", type: "int" },
  { id: "rose.appearance.glass", type: "bool" },
  { id: "rose.appearance.glass-blur", type: "int" },
  { id: "rose.appearance.glass-opacity", type: "int" },
  { id: "rose.appearance.gradient", type: "bool" },
  { id: "rose.appearance.gradient-angle", type: "int" },
  { id: "rose.appearance.gradient-strength", type: "int" },
];

Preferences.addAll(PREFS);

const FONTS = [
  ["system", "System default"],
  ["adwaita", "Adwaita Sans"],
  ["inter", "Inter"],
  ["rubik", "Rubik"],
  ["space-grotesk", "Space Grotesk"],
  ["readex", "Readex Pro"],
  ["liberation", "Liberation Sans"],
  ["serif", "FreeSerif"],
  ["hack", "Hack"],
  ["jetbrains", "JetBrains Mono"],
];

/** Options labelled directly, for values that are not words to translate. */
function labelled(pairs) {
  return pairs.map(([value, label]) => ({
    value,
    key: value,
    controlAttrs: { label },
  }));
}

/** Options built from Fluent ids, for values that are. */
function translated(pairs) {
  return pairs.map(([value, l10nId]) => ({
    value,
    key: String(value),
    l10nId,
  }));
}

/** A plain numeric option list, for the axes whose values are self-describing. */
function numeric(values, unit = "px") {
  return values.map(value => ({
    value,
    key: String(value),
    controlAttrs: { label: `${value}${unit}` },
  }));
}

for (const { id } of PREFS) {
  Preferences.addSetting({ id, pref: id });
}

Preferences.addSetting({
  id: "rose-appearance-reset",
  onUserClick: () => {
    for (const { id } of PREFS) {
      Services.prefs.clearUserPref(id);
    }
  },
});

export function registerRoseGroups() {
  SettingGroupManager.registerGroups({
    roseTheme: {
      l10nId: "rose-appearance-theme-heading",
      iconSrc: "chrome://browser/skin/rose/rose-appearance.svg",
      headingLevel: 2,
      items: [
        {
          id: "rose.appearance.palette",
          l10nId: "rose-appearance-palette",
          control: "moz-select",
          options: labelled(ROSE_PALETTES),
        },
        {
          id: "rose.appearance.density",
          l10nId: "rose-appearance-density",
          control: "moz-select",
          options: translated([
            ["compact", "rose-appearance-density-compact"],
            ["cosy", "rose-appearance-density-cosy"],
            ["spacious", "rose-appearance-density-spacious"],
          ]),
        },
      ],
    },

    roseShape: {
      l10nId: "rose-appearance-shape-heading",
      headingLevel: 2,
      items: [
        {
          id: "rose.appearance.radius",
          l10nId: "rose-appearance-radius",
          control: "moz-select",
          options: translated([
            [0, "rose-appearance-radius-square"],
            [2, "rose-appearance-radius-slight"],
            [4, "rose-appearance-radius-soft"],
            [8, "rose-appearance-radius-rounded"],
            [12, "rose-appearance-radius-round"],
            [22, "rose-appearance-radius-pill"],
          ]),
        },
        {
          id: "rose.appearance.padding",
          l10nId: "rose-appearance-padding",
          control: "moz-select",
          options: translated([
            [0, "rose-appearance-padding-none"],
            [2, "rose-appearance-padding-tight"],
            [6, "rose-appearance-padding-normal"],
            [12, "rose-appearance-padding-generous"],
          ]),
        },
        {
          id: "rose.appearance.border-width",
          l10nId: "rose-appearance-border-width",
          control: "moz-select",
          options: translated([
            [0, "rose-appearance-border-none"],
            [1, "rose-appearance-border-hairline"],
            [2, "rose-appearance-border-strong"],
          ]),
        },
        {
          id: "rose.appearance.font",
          l10nId: "rose-appearance-font",
          control: "moz-select",
          options: labelled(FONTS),
        },
        {
          id: "rose.appearance.font-size",
          l10nId: "rose-appearance-font-size",
          control: "moz-select",
          options: numeric([11, 12, 13, 14, 15, 16, 17, 18, 20]),
        },
        {
          id: "rose.appearance.tab-height",
          l10nId: "rose-appearance-tab-height",
          control: "moz-select",
          options: numeric([28, 32, 36, 40, 44]),
        },
      ],
    },

    roseEffects: {
      l10nId: "rose-appearance-effects-heading",
      headingLevel: 2,
      items: [
        {
          id: "rose.appearance.glass",
          l10nId: "rose-appearance-glass",
          control: "moz-toggle",
          items: [
            {
              id: "rose.appearance.glass-blur",
              l10nId: "rose-appearance-glass-blur",
              control: "moz-select",
              options: numeric([0, 6, 12, 20, 32]),
            },
            {
              id: "rose.appearance.glass-opacity",
              l10nId: "rose-appearance-glass-opacity",
              control: "moz-select",
              options: numeric([60, 70, 80, 90, 100], "%"),
            },
          ],
        },
        {
          id: "rose.appearance.gradient",
          l10nId: "rose-appearance-gradient",
          control: "moz-toggle",
          items: [
            {
              id: "rose.appearance.gradient-angle",
              l10nId: "rose-appearance-gradient-angle",
              control: "moz-select",
              options: numeric([0, 45, 90, 135, 160, 180, 225, 270], "°"),
            },
            {
              id: "rose.appearance.gradient-strength",
              l10nId: "rose-appearance-gradient-strength",
              control: "moz-select",
              options: numeric([0, 4, 8, 12, 20, 30], "%"),
            },
          ],
        },
        {
          id: "rose-appearance-reset",
          l10nId: "rose-appearance-reset",
          control: "moz-box-button",
          controlAttrs: { "l10n-id": "rose-appearance-reset-button" },
        },
      ],
    },
  });
}
