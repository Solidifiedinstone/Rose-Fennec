/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { SettingPaneManager } from "chrome://browser/content/preferences/config/SettingPaneManager.mjs";

/**
 * Fennec setting panes. Top level panes also need a moz-page-nav-button
 * element in preferences.xhtml.
 */
const FENNEC_CONFIG_PANES = Object.freeze({
  adBlocking: {
    l10nId: "fennec-blocker-pane-header",
    iconSrc: "chrome://browser/content/blocker/fennecShield.svg",
    groupIds: [
      "fennecBlocker",
      "fennecBlockerLists",
      "fennecBlockerExceptions",
    ],
    module: "chrome://browser/content/fennec/settings/fennecAdBlocking.mjs",
    visible: () =>
      Services.prefs.getBoolPref("fennec.blocker.ui.enabled", false),
  },
});

SettingPaneManager.registerPanes(FENNEC_CONFIG_PANES);

if (Services.prefs.getBoolPref("browser.settings-redesign.enabled", false)) {
  const aboutPane = SettingPaneManager.get("about");
  aboutPane.module =
    "chrome://browser/content/fennec/settings/fennecUpdates.mjs";

  // Amend Mozilla's DoH controls without changing the frozen CONFIG_PANES table.
  // dnsOverHttps carries no module of its own; its other settings load through
  // the privacy parent chain.
  const dohPane = SettingPaneManager.get("dnsOverHttps");
  dohPane.module = "chrome://browser/content/fennec/settings/fennecDns.mjs";
  ChromeUtils.importESModule(
    "chrome://browser/content/fennec/settings/fennecDns.mjs",
    { global: "current" }
  );

  // The appearance and tabs panes already have Mozilla modules in their
  // slots, so the Fennec group modules load here instead.
  const appearancePane = SettingPaneManager.get("appearance");
  appearancePane.groupIds = [
    "fennecBrowserStyle",
    "fennecAppearanceDetails",
    "fennecThemeColors",
    "fennecStatusBar",
    ...appearancePane.groupIds,
  ];
  ChromeUtils.importESModule(
    "chrome://browser/content/fennec/settings/fennecAppearance.mjs",
    { global: "current" }
  );

  const tabsPane = SettingPaneManager.get("tabsBrowsing");
  tabsPane.groupIds = ["fennecTabs", ...tabsPane.groupIds];
  ChromeUtils.importESModule(
    "chrome://browser/content/fennec/settings/fennecTabs.mjs",
    { global: "current" }
  );

  // The Home pane's groups are registered by AboutPreferences.observe(); the
  // custom new tab URL control attaches to them at runtime, so this module only
  // needs to load before the home pane registers.
  ChromeUtils.importESModule(
    "chrome://browser/content/fennec/settings/fennecHome.mjs",
    { global: "current" }
  );

  // The search pane keeps its Mozilla module; fennecSearch amends its
  // firefoxSuggest group at runtime, so it only needs to load before that pane.
  ChromeUtils.importESModule(
    "chrome://browser/content/fennec/settings/fennecSearch.mjs",
    { global: "current" }
  );

  // The privacy pane keeps its Mozilla module; fennecPrivacy adjusts its Safe
  // Browsing status warning at runtime, so it only needs to load before that pane.
  ChromeUtils.importESModule(
    "chrome://browser/content/fennec/settings/fennecPrivacy.mjs",
    { global: "current" }
  );

  // The Fennec notice renders where Mozilla's data collection group sits;
  // that group stays empty in builds without data reporting.
  const permissionsPane = SettingPaneManager.get("permissionsData");
  permissionsPane.groupIds = [
    "fennecDataCollection",
    ...permissionsPane.groupIds,
  ];
  ChromeUtils.importESModule(
    "chrome://browser/content/fennec/settings/fennecDataCollection.mjs",
    { global: "current" }
  );
}
