/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* global gSubDialog */

import { Preferences } from "chrome://global/content/preferences/Preferences.mjs";
import { SettingGroupManager } from "chrome://browser/content/preferences/config/SettingGroupManager.mjs";

const lazy = {};
ChromeUtils.defineESModuleGetters(lazy, {
  AddonManager: "resource://gre/modules/AddonManager.sys.mjs",
  addonDisplayName: "resource:///modules/FennecBlockerUtils.sys.mjs",
  isEnabledAdblockAddon: "resource:///modules/FennecBlockerUtils.sys.mjs",
});

Preferences.addAll([
  { id: "fennec.blocker.enabled", type: "bool" },
  { id: "fennec.blocker.allowSearchPartnerAds", type: "bool" },
  { id: "fennec.blocker.showBadge", type: "bool" },
]);

Preferences.addSetting({
  id: "fennec-blocker-enabled",
  pref: "fennec.blocker.enabled",
});

Preferences.addSetting({
  id: "fennec-blocker-extension-notice",
  deps: ["fennec-blocker-enabled"],
  _extensionName: "",
  setup(emitChange, deps) {
    const refresh = () => {
      lazy.AddonManager.getAddonsByTypes(["extension"]).then(
        addons => {
          const detected = addons.find(addon =>
            lazy.isEnabledAdblockAddon(addon)
          );
          const detectedName = detected
            ? lazy.addonDisplayName(detected) || ""
            : "";
          if (detectedName !== this._extensionName) {
            this._extensionName = detectedName;
            emitChange();
          }
        },
        () => {}
      );
    };
    refresh();
    deps["fennec-blocker-enabled"].on("change", refresh);
    return () => deps["fennec-blocker-enabled"].off("change", refresh);
  },
  visible(deps) {
    return !deps["fennec-blocker-enabled"].value && !!this._extensionName;
  },
  getControlConfig(config) {
    return {
      ...config,
      l10nArgs: { extensionName: this._extensionName },
    };
  },
});

Preferences.addSetting({
  id: "fennec-blocker-partner-ads",
  pref: "fennec.blocker.allowSearchPartnerAds",
  deps: ["fennec-blocker-enabled"],
  get: val => (val ? "allow" : "block"),
  set: val => val == "allow",
  disabled: deps => !deps["fennec-blocker-enabled"].value,
});

Preferences.addSetting({
  id: "fennec-blocker-show-badge",
  pref: "fennec.blocker.showBadge",
  deps: ["fennec-blocker-enabled"],
  disabled: deps => !deps["fennec-blocker-enabled"].value,
});

Preferences.addSetting({ id: "fennecBlockerListsBoxGroup" });

Preferences.addSetting({
  id: "fennec-blocker-manage-lists",
  onUserClick(e) {
    e.preventDefault();
    gSubDialog.open(
      "chrome://browser/content/preferences/dialogs/fennecBlockerFilterLists.xhtml"
    );
  },
});

Preferences.addSetting({
  id: "fennec-blocker-custom-lists",
  onUserClick(e) {
    e.preventDefault();
    gSubDialog.open(
      "chrome://browser/content/preferences/dialogs/fennecBlockerCustomFilterLists.xhtml"
    );
  },
});

Preferences.addSetting({
  id: "fennec-blocker-my-filters",
  onUserClick(e) {
    e.preventDefault();
    gSubDialog.open(
      "chrome://browser/content/preferences/dialogs/fennecBlockerCustomFilters.xhtml"
    );
  },
});

Preferences.addSetting({
  id: "fennec-blocker-exceptions",
  onUserClick(e) {
    e.preventDefault();
    gSubDialog.open(
      "chrome://browser/content/preferences/dialogs/permissions.xhtml",
      undefined,
      {
        permissionType: "fennec-blocker",
        disableETPVisible: true,
        prefilledHost: "",
        hideStatusColumn: true,
      }
    );
  },
});

SettingGroupManager.registerGroups({
  fennecBlocker: {
    l10nId: "fennec-blocker-group",
    headingLevel: 2,
    controlAttrs: { badge: "fennec-exclusive" },
    items: [
      {
        id: "fennec-blocker-enabled",
        l10nId: "fennec-blocker-enabled-toggle",
        control: "moz-toggle",
        controlAttrs: {
          searchkeywords: "adblock adblocker ublock filter",
        },
      },
      {
        id: "fennec-blocker-extension-notice",
        l10nId: "fennec-blocker-extension-notice",
        control: "moz-message-bar",
        controlAttrs: {
          role: "status",
        },
      },
      {
        id: "fennec-blocker-partner-ads",
        l10nId: "fennec-blocker-partner-select",
        control: "moz-select",
        options: [
          {
            value: "allow",
            l10nId: "fennec-blocker-dropdown-option-partner-exception",
          },
          {
            value: "block",
            l10nId: "fennec-blocker-dropdown-option-block-everything",
          },
        ],
      },
      {
        id: "fennec-blocker-show-badge",
        l10nId: "fennec-blocker-show-badge-pref",
        control: "moz-checkbox",
      },
    ],
  },
  fennecBlockerLists: {
    l10nId: "fennec-blocker-lists-group",
    headingLevel: 2,
    items: [
      {
        id: "fennecBlockerListsBoxGroup",
        control: "moz-box-group",
        items: [
          {
            id: "fennec-blocker-manage-lists",
            l10nId: "fennec-blocker-manage-lists-button",
            control: "moz-box-button",
            controlAttrs: {
              "search-l10n-ids":
                "fennec-blocker-filter-lists-window.title,fennec-blocker-filter-lists-description.value",
            },
          },
          {
            id: "fennec-blocker-custom-lists",
            l10nId: "fennec-blocker-custom-lists-button",
            control: "moz-box-button",
            controlAttrs: {
              "search-l10n-ids":
                "fennec-blocker-custom-filter-lists-window.title,fennec-blocker-custom-filter-lists-description",
            },
          },
          {
            id: "fennec-blocker-my-filters",
            l10nId: "fennec-blocker-my-filters-button",
            control: "moz-box-button",
            controlAttrs: {
              "search-l10n-ids":
                "fennec-blocker-custom-filters-window.title,fennec-blocker-custom-filters-description",
            },
          },
        ],
      },
    ],
  },
  fennecBlockerExceptions: {
    l10nId: "fennec-blocker-exceptions-group",
    headingLevel: 2,
    items: [
      {
        id: "fennec-blocker-exceptions",
        l10nId: "fennec-blocker-exceptions-button",
        control: "moz-box-button",
        controlAttrs: {
          "search-l10n-ids":
            "permissions-exceptions-fennec-blocker-window2.title,permissions-exceptions-manage-fennec-blocker-desc",
        },
      },
    ],
  },
});
