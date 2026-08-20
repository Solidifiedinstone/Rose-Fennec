/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * A Map of themes built in to the browser. Params for the objects contained
 * within the map:
 *
 * @param {string} id
 *   The unique identifier for the theme. The map's key.
 * @param {string} version
 *   The theme add-on's semantic version, as defined in its manifest.
 * @param {string} path
 *   Path to the add-on files.
 * @param {boolean} inApp
 *   Optional, whether the theme uses the app's CSS, just forcing it to a
 *   particular color scheme or variant.
 * @param {boolean} nonNative
 *   Whether this inApp theme should force the native theme, but with
 *   non-native appearance. See Document.forceNonNativeTheme and the
 *   (-moz-native-theme) media query.
 */
export const BuiltInThemeConfig = new Map([
  [
    "firefox-compact-light@mozilla.org",
    {
      version: "1.3.4",
      path: "resource://builtin-themes/light/",
      inApp: true,
      nonNative: true,
    },
  ],
  [
    "firefox-compact-dark@mozilla.org",
    {
      version: "1.3.4",
      path: "resource://builtin-themes/dark/",
      inApp: true,
      nonNative: true,
    },
  ],
  [
    "firefox-alpenglow@mozilla.org",
    {
      version: "1.5.3",
      path: "resource://builtin-themes/alpenglow/",
    },
  ],
  [
    "rose-dark@fennec",
    {
      version: "1.0.0",
      path: "resource://builtin-themes/rose-dark/",
    },
  ],
  [
    "rose-oled@fennec",
    {
      version: "1.0.0",
      path: "resource://builtin-themes/rose-oled/",
    },
  ],
  [
    "rose-tokyo-night@fennec",
    {
      version: "1.0.0",
      path: "resource://builtin-themes/rose-tokyo-night/",
    },
  ],
  [
    "rose-catppuccin-mocha@fennec",
    {
      version: "1.0.0",
      path: "resource://builtin-themes/rose-catppuccin-mocha/",
    },
  ],
  [
    "rose-gruvbox@fennec",
    {
      version: "1.0.0",
      path: "resource://builtin-themes/rose-gruvbox/",
    },
  ],
  [
    "rose-nord@fennec",
    {
      version: "1.0.0",
      path: "resource://builtin-themes/rose-nord/",
    },
  ],
  [
    "rose-pine@fennec",
    {
      version: "1.0.0",
      path: "resource://builtin-themes/rose-pine/",
    },
  ],
  [
    "rose-everforest@fennec",
    {
      version: "1.0.0",
      path: "resource://builtin-themes/rose-everforest/",
    },
  ],
  [
    "rose-dracula@fennec",
    {
      version: "1.0.0",
      path: "resource://builtin-themes/rose-dracula/",
    },
  ],
  [
    "rose-light@fennec",
    {
      version: "1.0.0",
      path: "resource://builtin-themes/rose-light/",
    },
  ],
  [
    "rose-catppuccin-macchiato@fennec",
    {
      version: "1.0.0",
      path: "resource://builtin-themes/rose-catppuccin-macchiato/",
    },
  ],
  [
    "rose-kanagawa@fennec",
    {
      version: "1.0.0",
      path: "resource://builtin-themes/rose-kanagawa/",
    },
  ],
  [
    "rose-nightfox@fennec",
    {
      version: "1.0.0",
      path: "resource://builtin-themes/rose-nightfox/",
    },
  ],
  [
    "rose-solarized-dark@fennec",
    {
      version: "1.0.0",
      path: "resource://builtin-themes/rose-solarized-dark/",
    },
  ],
  [
    "rose-oxocarbon@fennec",
    {
      version: "1.0.0",
      path: "resource://builtin-themes/rose-oxocarbon/",
    },
  ],
  [
    "rose-monokai@fennec",
    {
      version: "1.0.0",
      path: "resource://builtin-themes/rose-monokai/",
    },
  ],
  [
    "rose-synthwave@fennec",
    {
      version: "1.0.0",
      path: "resource://builtin-themes/rose-synthwave/",
    },
  ],
  [
    "rose-matrix@fennec",
    {
      version: "1.0.0",
      path: "resource://builtin-themes/rose-matrix/",
    },
  ],
  [
    "rose-nord-light@fennec",
    {
      version: "1.0.0",
      path: "resource://builtin-themes/rose-nord-light/",
    },
  ],
  [
    "rose-catppuccin-latte@fennec",
    {
      version: "1.0.0",
      path: "resource://builtin-themes/rose-catppuccin-latte/",
    },
  ],
  [
    "rose-solarized-light@fennec",
    {
      version: "1.0.0",
      path: "resource://builtin-themes/rose-solarized-light/",
    },
  ],
  [
    "rose-gruvbox-light@fennec",
    {
      version: "1.0.0",
      path: "resource://builtin-themes/rose-gruvbox-light/",
    },
  ],
  [
    "rose-pine-dawn@fennec",
    {
      version: "1.0.0",
      path: "resource://builtin-themes/rose-pine-dawn/",
    },
  ],
  [
    "rose-high-contrast@fennec",
    {
      version: "1.0.0",
      path: "resource://builtin-themes/rose-high-contrast/",
    },
  ],
  [
    "rose-high-contrast-light@fennec",
    {
      version: "1.0.0",
      path: "resource://builtin-themes/rose-high-contrast-light/",
    },
  ],
]);
