/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const FENNEC_THEME_VARIABLES = [
  ["--color-accent-primary", "fennec_accent_primary"],
  ["--color-accent-primary-hover", "fennec_accent_primary_hover"],
  ["--color-accent-primary-active", "fennec_accent_primary_active"],
  ["--background-color-information", "fennec_background_color_information"],
  ["--icon-color-information", "fennec_icon_color_information"],
];

function themeColorToCSS(value) {
  if (!value || typeof value !== "object") {
    return value;
  }
  const { r, g, b, a } = value;
  return a === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${a})`;
}

export const FennecContentTheme = {
  apply(document, data) {
    const root = document.documentElement;
    for (const [variableName, propertyName] of FENNEC_THEME_VARIABLES) {
      const value = themeColorToCSS(data?.[propertyName]);
      if (value) {
        root.style.setProperty(variableName, value);
      } else {
        root.style.removeProperty(variableName);
      }
    }
  },
};
