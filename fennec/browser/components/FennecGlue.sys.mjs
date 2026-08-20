/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { AppConstants } from "resource://gre/modules/AppConstants.sys.mjs";

const lazy = {};

ChromeUtils.defineESModuleGetters(lazy, {
  ExperimentAPI: "resource://nimbus/ExperimentAPI.sys.mjs",
  PrivateTab: "resource:///modules/PrivateTab.sys.mjs",
  StatusBar: "resource:///modules/StatusBar.sys.mjs",
  StyleSheetUtils: "resource:///modules/StyleSheetUtils.sys.mjs",
  TabFeatures: "resource:///modules/TabFeatures.sys.mjs",
  TabGrouping: "resource:///modules/TabGrouping.sys.mjs",
  TreeTabsStore: "resource:///modules/TreeTabsStore.sys.mjs",
  TreeTabsUI: "resource:///modules/TreeTabsUI.sys.mjs",
  UICustomizations: "resource:///modules/UICustomizations.sys.mjs",
  FennecBlockerExtensionDetector:
    "resource:///modules/FennecBlockerExtensionDetector.sys.mjs",
  FennecBlockerPanel: "resource:///modules/FennecBlockerPanel.sys.mjs",
  FennecBlockerService: "resource:///modules/FennecBlockerService.sys.mjs",
  FennecSearchExtensionPolicy:
    "resource:///modules/FennecSearchExtensionPolicy.sys.mjs",
  FennecBrowserStyle: "resource:///modules/FennecBrowserStyle.sys.mjs",
  RoseAppearance: "resource:///modules/RoseAppearance.sys.mjs",
  FennecTheme: "resource:///modules/FennecTheme.sys.mjs",
  FennecThemeColors: "resource:///modules/FennecThemeColors.sys.mjs",
});

const MIGRATION_PREF = "browser.migration.fennec_version";
const MIGRATION_VERSION = 3;

const REMOVED_LEPTON_CONTENT_PREFS = [
  "userContent.player.ui",
  "userContent.player.icon",
  "userContent.player.noaudio",
  "userContent.player.size",
  "userContent.player.click_to_play",
  "userContent.player.animate",
  "userContent.newTab.hidden_logo",
  "userContent.newTab.full_icon",
  "userContent.newTab.animate",
  "userContent.newTab.searchbar",
  "userContent.page.field_border",
  "userContent.page.illustration",
  "userContent.page.proton_color",
  "userContent.page.dark_mode",
  "userContent.page.proton",
];

function setBoolPrefIfUnset(pref, value) {
  if (!Services.prefs.prefHasUserValue(pref)) {
    Services.prefs.setBoolPref(pref, value);
  }
}

function clearUserPrefs(prefs) {
  for (let pref of prefs) {
    if (Services.prefs.prefHasUserValue(pref)) {
      Services.prefs.clearUserPref(pref);
    }
  }
}

export const FennecGlue = {
  init() {
    // Bring the tree tabs store up before any window restores, so its session
    // restore handling and the one time pref migration run first.
    lazy.TreeTabsStore.init();

    this.migrateUI();
    lazy.FennecBrowserStyle.ensureCurrentStyle();

    // With Normandy compiled out nothing else starts Nimbus, leaving every
    // NimbusFeatures.ready() caller waiting forever. Initialise it here so
    // the local store settles; without recipe data each feature only ever
    // uses its fallback prefs.
    if (!AppConstants.MOZ_NORMANDY) {
      lazy.ExperimentAPI.init().catch(error =>
        console.error("ExperimentAPI startup init failed", error)
      );
    }

    lazy.StyleSheetUtils.registerStylesheet(
      "chrome://browser/skin/fennec/general.css"
    );

    // The Rose interface. A user sheet, so it applies to every chrome
    // document without each one importing it, and so it wins over the
    // built-in theme's author sheets. Everything in it is driven by
    // rose.appearance.* prefs, which means the appearance settings take
    // effect the moment they are changed, with no window to re-open.
    lazy.StyleSheetUtils.registerStylesheet("chrome://browser/skin/rose/rose.css");
    lazy.FennecTheme.init();
    lazy.FennecThemeColors.init();
    lazy.RoseAppearance.init();

    lazy.FennecSearchExtensionPolicy.init();

    // Register the blocker window actors early so cosmetic filtering and
    // scriptlet hooks run for the first pages.
    ChromeUtils.registerWindowActor("FennecBlocker", {
      parent: {
        esModuleURI: "resource:///modules/FennecBlockerParent.sys.mjs",
      },
      child: {
        esModuleURI: "resource:///modules/FennecBlockerChild.sys.mjs",
        events: {
          DOMWindowCreated: {},
          DOMDocElementInserted: {},
        },
      },
      allFrames: true,
      messageManagerGroups: ["browsers"],
      // DOMWindowCreated can happen before URL match patterns settle.
      // Keep protocol matching broad and gate to http and https inside
      // the child.
      remoteTypes: ["web"],
    });

    // The blocked page actor handles the "Load anyway" click so the parent
    // can record a session permission before the navigation happens.
    ChromeUtils.registerWindowActor("FennecBlockedPage", {
      parent: {
        esModuleURI: "resource:///modules/FennecBlockedPageParent.sys.mjs",
      },
      child: {
        esModuleURI: "resource:///modules/FennecBlockedPageChild.sys.mjs",
        events: {
          click: {},
        },
      },
      matches: ["about:contentblocked?*"],
      allFrames: true,
    });

    lazy.FennecBlockerPanel.init();
    lazy.FennecBlockerExtensionDetector.init();
    lazy.FennecBlockerService.init().catch(error =>
      console.error("FennecBlockerService startup init failed", error)
    );

    lazy.PrivateTab.init();
    lazy.StatusBar.init();
    lazy.TabFeatures.init();
    lazy.TabGrouping.init();
    lazy.UICustomizations.init();
    Services.obs.addObserver(this, "browser-delayed-startup-finished");
  },

  observe(subject, topic) {
    switch (topic) {
      case "browser-delayed-startup-finished":
        lazy.PrivateTab.onWindowOpened(subject);
        lazy.StatusBar.onWindowOpened(subject);
        lazy.TabFeatures.onWindowOpened(subject);
        lazy.TabGrouping.onWindowOpened(subject);
        lazy.UICustomizations.onWindowOpened(subject);
        lazy.TreeTabsUI.onWindowOpened(subject);
        break;
    }
  },

  // Runs once per profile upgrade. Migrations for profiles coming from
  // earlier Fennec versions go here, keyed on the version they left
  // off at. Version 2 is where Fennec 140 profiles ended up.
  migrateUI() {
    const version = Services.prefs.getIntPref(MIGRATION_PREF, 0);
    if (version >= MIGRATION_VERSION) {
      return;
    }

    // Version 3 makes Nova the default appearance for new profiles. Fennec
    // 140 (version 2) shipped Photon with Lepton on, so pin those values for an
    // upgrading profile that never chose an appearance, otherwise the upgrade
    // silently switches it to Nova (D1). Nova keeps Lepton chrome styling but
    // defaults tab styling to stock, so version-2 upgrades also pin the legacy
    // Photon tab style when the user did not customise those prefs.
    if (version == 2) {
      if (
        !Services.prefs.prefHasUserValue(
          "browser.theme.enableFennecCustomizations"
        )
      ) {
        Services.prefs.setIntPref(
          "browser.theme.enableFennecCustomizations",
          1
        );
      }
      if (!Services.prefs.prefHasUserValue("browser.nova.enabled")) {
        Services.prefs.setBoolPref("browser.nova.enabled", false);
      }
      for (let [pref, value] of Object.entries(
        lazy.FennecBrowserStyle.PHOTON_TAB_STYLE
      )) {
        setBoolPrefIfUnset(pref, value);
      }
    }

    clearUserPrefs(REMOVED_LEPTON_CONTENT_PREFS);

    Services.prefs.setIntPref(MIGRATION_PREF, MIGRATION_VERSION);
  },
};
