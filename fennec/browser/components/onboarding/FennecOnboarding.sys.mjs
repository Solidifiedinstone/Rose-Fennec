/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { FennecThemeColors } from "resource:///modules/FennecThemeColors.sys.mjs";

const SPLIT_BACKGROUND =
  "var(--fennec-onboarding-split-background, linear-gradient(135deg, color-mix(in srgb, var(--button-background-color-primary) 14%, var(--background-color-canvas)), var(--background-color-canvas)))";

function splitContent(content) {
  return {
    fullscreen: true,
    position: "split",
    progress_bar: true,
    background: SPLIT_BACKGROUND,
    split_content_justify_content: "center",
    ...content,
  };
}

function fennecAction(action, value, navigate = false) {
  return {
    type: "FENNEC_ONBOARDING",
    navigate,
    data: {
      action,
      value,
    },
  };
}

function customizeSettingsAction(args) {
  return {
    type: "MULTI_ACTION",
    navigate: true,
    data: {
      orderedExecution: true,
      actions: [
        {
          type: "OPEN_ABOUT_PAGE",
          data: {
            args,
            where: "tabshifted",
          },
        },
      ],
    },
  };
}

function themeModeTile(mode, stringId) {
  return {
    id: `fennec-theme-mode-${mode}`,
    type: "fennec-theme-mode-option",
    label: {
      string_id: stringId,
    },
    icon: {},
    action: fennecAction("theme-mode", mode),
  };
}

function themeColorTile({ id, labelId, swatch }) {
  return {
    id: `fennec-color-${id}`,
    type: "fennec-color-option",
    label: {
      string_id: labelId,
    },
    icon: {
      background: swatch,
    },
    action: fennecAction("theme-color", id),
  };
}

function styleTile(style) {
  return {
    id: `fennec-style-${style}`,
    label: {
      string_id: `fennec-onboarding-style-${style}-label`,
    },
    body: {
      string_id: `fennec-onboarding-style-${style}-body`,
    },
    icon: {
      background: `center / contain no-repeat url('chrome://browser/content/fennec/style/fennec-style-${style}.svg')`,
    },
    action: fennecAction("style", style),
  };
}

function densityTile(density, stringId) {
  return {
    id: `fennec-density-${density}`,
    type: "fennec-density-option",
    label: {
      string_id: stringId,
    },
    icon: {},
    action: fennecAction("density", density),
  };
}

function layoutTile({ id, labelId, bodyId, icon }) {
  return {
    id: `fennec-layout-${id}`,
    label: {
      string_id: labelId,
    },
    body: {
      string_id: bodyId,
    },
    icon: {
      background: `center / contain no-repeat url('${icon}')`,
    },
    action: fennecAction("layout", id),
  };
}

function tabLocationTile(location, stringId) {
  return {
    id: `fennec-location-${location}`,
    type: "fennec-location-option",
    label: {
      string_id: stringId,
    },
    icon: {},
    action: fennecAction("tab-location", location),
  };
}

const FENNEC_ONBOARDING = {
  id: "FENNEC_ONBOARDING",
  template: "multistage",
  transitions: Services.prefs.getBoolPref(
    "browser.aboutwelcome.transitions",
    true
  ),
  backdrop:
    "var(--mr-welcome-background-color) var(--mr-welcome-background-gradient)",
  screens: [
    {
      id: "AW_FENNEC_WELCOME",
      content: splitContent({
        logo: {
          imageURL: "chrome://branding/content/about-logo.svg",
          height: "80px",
          width: "80px",
        },
        title: {
          string_id: "fennec-onboarding-welcome-title",
        },
        subtitle: {
          string_id: "fennec-onboarding-welcome-subtitle",
        },
        primary_button: {
          label: {
            string_id: "fennec-onboarding-start-button",
          },
          action: {
            navigate: true,
          },
        },
      }),
    },
    {
      id: "AW_FENNEC_IMPORT",
      content: splitContent({
        hide_secondary_section: "responsive",
        logo: {},
        tiles: {
          type: "migration-wizard",
          migration_wizard_options: {
            migrator_key: "firefox-import",
            force_show_import_all: true,
            selection_header_string: "",
            hide_option_expander_subtitle: true,
            checkbox_margin_block: "4px",
            header_font_size: "1em",
            header_font_weight: "var(--font-weight-heading)",
            header_margin_block: "0 var(--space-medium)",
            subheader_font_size: "0.9em",
            subheader_margin_block: "0 var(--space-medium)",
          },
        },
        title: {
          string_id: "fennec-onboarding-import-title",
        },
        subtitle: {
          string_id: "fennec-onboarding-import-subtitle",
        },
        migrate_start: {
          action: {},
        },
        migrate_close: {
          action: {
            navigate: true,
          },
        },
        secondary_button: {
          label: {
            string_id: "fennec-onboarding-skip-button",
          },
          action: {
            navigate: true,
          },
        },
      }),
    },
    {
      id: "AW_FENNEC_STYLE",
      content: splitContent({
        logo: {},
        title: {
          string_id: "fennec-onboarding-style-title",
        },
        subtitle: {
          string_id: "fennec-onboarding-style-subtitle",
        },
        tiles: [
          {
            type: "single-select",
            class_name: "fennec-style",
            selected: "fennec-style-nova",
            action: {
              picker: "<event>",
            },
            data: [styleTile("nova"), styleTile("proton"), styleTile("photon")],
          },
          {
            type: "single-select",
            class_name: "fennec-density",
            selected: "fennec-density-compact",
            action: {
              picker: "<event>",
            },
            data: [
              densityTile(
                "compact",
                "fennec-onboarding-density-compact-label"
              ),
              densityTile("normal", "fennec-onboarding-density-normal-label"),
            ],
          },
        ],
        primary_button: {
          label: {
            string_id: "fennec-onboarding-continue-button",
          },
          action: {
            navigate: true,
          },
        },
        secondary_button: {
          label: {
            string_id: "fennec-onboarding-customize-appearance-button",
          },
          action: customizeSettingsAction("preferences#appearance"),
        },
      }),
    },
    {
      id: "AW_FENNEC_THEME_COLOR",
      content: splitContent({
        title: {
          string_id: "fennec-onboarding-theme-color-title",
        },
        subtitle: {
          string_id: "fennec-onboarding-theme-color-subtitle",
        },
        tiles: [
          {
            type: "single-select",
            class_name: "fennec-theme-mode",
            selected: "fennec-theme-mode-system",
            action: {
              picker: "<event>",
            },
            data: [
              themeModeTile(
                "system",
                "fennec-onboarding-theme-mode-system-label"
              ),
              themeModeTile(
                "light",
                "fennec-onboarding-theme-mode-light-label"
              ),
              themeModeTile(
                "dark",
                "fennec-onboarding-theme-mode-dark-label"
              ),
            ],
          },
          {
            type: "single-select",
            class_name: "fennec-color-grid",
            selected: "fennec-color-default",
            action: {
              picker: "<event>",
            },
            data: FennecThemeColors.colors.map(themeColorTile),
          },
        ],
        primary_button: {
          label: {
            string_id: "fennec-onboarding-save-continue-button",
          },
          action: {
            navigate: true,
          },
        },
        secondary_button: {
          label: {
            string_id: "fennec-onboarding-skip-step-button",
          },
          has_arrow_icon: true,
          action: {
            navigate: true,
          },
        },
      }),
    },
    {
      id: "AW_FENNEC_TABS",
      content: splitContent({
        logo: {},
        title: {
          string_id: "fennec-onboarding-tabs-title",
        },
        subtitle: {
          string_id: "fennec-onboarding-tabs-subtitle",
        },
        tiles: [
          {
            type: "single-select",
            selected: "fennec-layout-horizontal",
            action: {
              picker: "<event>",
            },
            data: [
              layoutTile({
                id: "horizontal",
                labelId: "fennec-onboarding-tabs-horizontal-label",
                bodyId: "fennec-onboarding-tabs-horizontal-body",
                icon: "chrome://browser/content/fennec/onboarding/browser-layout-horizontal.svg",
              }),
              layoutTile({
                id: "vertical",
                labelId: "fennec-onboarding-tabs-vertical-label",
                bodyId: "fennec-onboarding-tabs-vertical-body",
                icon: "chrome://browser/content/fennec/onboarding/browser-layout-vertical.svg",
              }),
              layoutTile({
                id: "tree",
                labelId: "fennec-onboarding-tabs-tree-label",
                bodyId: "fennec-onboarding-tabs-tree-body",
                icon: "chrome://browser/content/fennec/onboarding/browser-layout-tree.svg",
              }),
            ],
          },
          {
            type: "single-select",
            class_name: "fennec-tab-location",
            selected: "fennec-location-topabove",
            action: {
              picker: "<event>",
            },
            data: [
              tabLocationTile(
                "topabove",
                "fennec-onboarding-location-top-above-label"
              ),
              tabLocationTile(
                "topbelow",
                "fennec-onboarding-location-top-below-label"
              ),
              tabLocationTile(
                "bottomabove",
                "fennec-onboarding-location-bottom-above-label"
              ),
              tabLocationTile(
                "bottombelow",
                "fennec-onboarding-location-bottom-below-label"
              ),
            ],
          },
        ],
        primary_button: {
          label: {
            string_id: "fennec-onboarding-continue-button",
          },
          action: {
            navigate: true,
          },
        },
        secondary_button: {
          label: {
            string_id: "fennec-onboarding-customize-tabs-button",
          },
          action: customizeSettingsAction("preferences#tabsBrowsing"),
        },
      }),
    },
    {
      id: "AW_FENNEC_PRIVACY",
      content: splitContent({
        logo: {},
        title: {
          string_id: "fennec-onboarding-privacy-title",
        },
        subtitle: {
          string_id: "fennec-onboarding-privacy-subtitle",
        },
        primary_button: {
          label: {
            string_id: "fennec-onboarding-privacy-primary-button",
          },
          action: fennecAction("privacy-defaults", true, true),
        },
        secondary_button: {
          label: {
            string_id: "fennec-onboarding-customize-privacy-button",
          },
          action: customizeSettingsAction("preferences#adBlocking"),
        },
      }),
    },
    {
      id: "AW_FENNEC_DEFAULT_BROWSER",
      targeting: "needDefault",
      content: splitContent({
        logo: {},
        title: {
          string_id: "fennec-onboarding-default-title",
        },
        subtitle: {
          string_id: "fennec-onboarding-default-subtitle",
        },
        primary_button: {
          label: {
            string_id: "fennec-onboarding-default-primary-button",
          },
          action: {
            type: "SET_DEFAULT_BROWSER",
            navigate: true,
          },
        },
        secondary_button: {
          label: {
            string_id: "fennec-onboarding-skip-button",
          },
          action: {
            navigate: true,
          },
        },
      }),
    },
    {
      id: "AW_FENNEC_FINISH",
      content: splitContent({
        logo: {
          imageURL: "chrome://branding/content/about-logo.svg",
          height: "80px",
          width: "80px",
        },
        title: {
          string_id: "fennec-onboarding-finish-title",
        },
        subtitle: {
          string_id: "fennec-onboarding-finish-subtitle",
        },
        primary_button: {
          label: {
            string_id: "fennec-onboarding-finish-primary-button",
          },
          action: {
            type: "OPEN_ABOUT_PAGE",
            navigate: true,
            data: {
              args: "home",
              where: "current",
            },
          },
        },
      }),
    },
  ],
};

export const FennecOnboarding = {
  getDefaults() {
    return Cu.cloneInto(FENNEC_ONBOARDING, {});
  },
};
