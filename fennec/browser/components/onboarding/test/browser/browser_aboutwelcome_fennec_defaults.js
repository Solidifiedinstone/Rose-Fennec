/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

const { AboutWelcomeDefaults } = ChromeUtils.importESModule(
  "resource:///modules/aboutwelcome/AboutWelcomeDefaults.sys.mjs"
);
const { SpecialMessageActions } = ChromeUtils.importESModule(
  "resource://messaging-system/lib/SpecialMessageActions.sys.mjs"
);
const { LightweightThemeManager } = ChromeUtils.importESModule(
  "resource://gre/modules/LightweightThemeManager.sys.mjs"
);
const {
  FennecThemeColors,
  FENNEC_THEME_COLOR_PREF,
  FENNEC_THEME_ID,
  FENNEC_THEME_MODE_PREF,
} = ChromeUtils.importESModule(
  "resource:///modules/FennecThemeColors.sys.mjs"
);

const NOVA_PREF = "browser.nova.enabled";
const STYLE_PREF = "browser.theme.enableFennecCustomizations";
const TREE_TABS_PREF = "browser.tabs.verticalTabs.tree.enabled";
const VERTICAL_TABS_PREF = "sidebar.verticalTabs";
const TABBAR_POSITION_PREF = "browser.tabs.toolbarposition";
const UIDENSITY_PREF = "browser.uidensity";
const PRIVACY_PREF = "fennec.blocker.enabled";
const SUPERNOVA_PREF = "userChrome.tab.supernova_like_contextline";

const STYLE_PRESET_PREFS = [
  "userChrome.tab.connect_to_window",
  "userChrome.tab.color_like_toolbar",
  "userChrome.tab.lepton_like_padding",
  "userChrome.tab.photon_like_padding",
  "userChrome.tab.dynamic_separator",
  "userChrome.tab.static_separator",
  "userChrome.tab.static_separator.selected_accent",
  "userChrome.tab.bar_separator",
  "userChrome.tab.newtab_button_like_tab",
  "userChrome.tab.newtab_button_smaller",
  "userChrome.tab.newtab_button_proton",
  "userChrome.icon.panel_full",
  "userChrome.icon.panel_photon",
  "userChrome.tab.box_shadow",
  "userChrome.tab.bottom_rounded_corner",
  "userChrome.tab.photon_like_contextline",
  "userChrome.rounding.square_tab",
];

const ACTION_PREFS = [
  NOVA_PREF,
  STYLE_PREF,
  TREE_TABS_PREF,
  VERTICAL_TABS_PREF,
  TABBAR_POSITION_PREF,
  UIDENSITY_PREF,
  PRIVACY_PREF,
  SUPERNOVA_PREF,
  FENNEC_THEME_MODE_PREF,
  FENNEC_THEME_COLOR_PREF,
  ...STYLE_PRESET_PREFS,
];

const FENNEC_SCREEN_IDS = [
  "AW_FENNEC_WELCOME",
  "AW_FENNEC_IMPORT",
  "AW_FENNEC_STYLE",
  "AW_FENNEC_THEME_COLOR",
  "AW_FENNEC_TABS",
  "AW_FENNEC_PRIVACY",
  "AW_FENNEC_DEFAULT_BROWSER",
  "AW_FENNEC_FINISH",
];

const FENNEC_COLOR_IDS = [
  "default",
  "smoke",
  "ash",
  "sun",
  "spark",
  "flame",
  "flare",
  "lavender",
  "dusk",
  "lagoon",
  "tide",
  "pine",
];

function getFennecDefaults() {
  const defaults = AboutWelcomeDefaults.getDefaults();
  Assert.equal(defaults.id, "FENNEC_ONBOARDING", "Uses Fennec defaults");
  return defaults;
}

function getScreen(defaults, id) {
  const screen = defaults.screens.find(candidate => candidate.id === id);
  Assert.ok(screen, `Found ${id}`);
  return screen;
}

function assertSettingsAction(action, args) {
  Assert.equal(action.type, "MULTI_ACTION", "Uses a multi action");
  Assert.equal(action.navigate, true, "Continues the onboarding flow");
  Assert.equal(action.data.orderedExecution, true, "Runs actions in order");
  Assert.equal(action.data.actions.length, 1, "Opens one Settings tab");

  const [openSettings] = action.data.actions;
  Assert.equal(openSettings.type, "OPEN_ABOUT_PAGE", "Opens an about page");
  Assert.equal(
    openSettings.data.args,
    args,
    "Opens the expected Settings pane"
  );
  Assert.equal(
    openSettings.data.where,
    "tabshifted",
    "Opens Settings in a background tab"
  );
}

function assertFennecAction(action, expectedAction, expectedValue) {
  Assert.equal(action.type, "FENNEC_ONBOARDING", "Uses the Fennec action");
  Assert.equal(action.data.action, expectedAction, "Uses the expected action");
  if (arguments.length === 3) {
    Assert.equal(action.data.value, expectedValue, "Passes the expected value");
  }
}

function clearUserPrefs(prefNames) {
  for (const prefName of prefNames) {
    if (Services.prefs.prefHasUserValue(prefName)) {
      Services.prefs.clearUserPref(prefName);
    }
  }
}

async function openMRAboutWelcome() {
  await SpecialPowers.pushPrefEnv({
    set: [["browser.aboutwelcome.enabled", true]],
  });
  const tab = await BrowserTestUtils.openNewForegroundTab(
    gBrowser,
    "about:welcome",
    true
  );
  await SpecialPowers.spawn(gBrowser.selectedBrowser, [], async function () {
    content.document.notifyUserGestureActivation();
  });

  return {
    browser: tab.linkedBrowser,
    cleanup: async () => {
      BrowserTestUtils.removeTab(tab);
      await SpecialPowers.popPrefEnv();
    },
  };
}

async function test_screen_content(
  browser,
  experiment,
  expectedSelectors = [],
  unexpectedSelectors = []
) {
  await SpecialPowers.spawn(
    browser,
    [{ expectedSelectors, experiment, unexpectedSelectors }],
    async ({
      expectedSelectors: expected,
      experiment: experimentName,
      unexpectedSelectors: unexpected,
    }) => {
      for (const selector of expected) {
        await ContentTaskUtils.waitForCondition(
          () => content.document.querySelector(selector),
          `Should render ${selector} in ${experimentName}`
        );
      }
      for (const selector of unexpected) {
        ok(
          !content.document.querySelector(selector),
          `Should not render ${selector} in ${experimentName}`
        );
      }

      Assert.equal(
        content.document.location.href,
        "about:welcome",
        "Navigated to a welcome screen"
      );
    }
  );
}

async function runFennecAction(action, value) {
  await SpecialMessageActions.handleAction(
    {
      type: "FENNEC_ONBOARDING",
      data: { action, value },
    },
    gBrowser.selectedBrowser
  );
}

registerCleanupFunction(() => {
  clearUserPrefs(ACTION_PREFS);
  FennecThemeColors.clear();
});

add_task(async function test_fennec_defaults_shape() {
  const defaults = getFennecDefaults();

  Assert.equal(defaults.template, "multistage", "Uses multistage onboarding");
  Assert.deepEqual(
    defaults.screens.map(screen => screen.id),
    FENNEC_SCREEN_IDS,
    "Uses the Fennec screen order"
  );

  for (const screen of defaults.screens) {
    Assert.equal(
      screen.content.position,
      "split",
      `${screen.id} uses the split layout`
    );
    Assert.equal(screen.content.fullscreen, true, `${screen.id} is fullscreen`);
    Assert.equal(
      screen.content.progress_bar,
      true,
      `${screen.id} shows progress`
    );
    Assert.ok(screen.content.background, `${screen.id} has a split background`);
  }

  const importScreen = getScreen(defaults, "AW_FENNEC_IMPORT");
  Assert.equal(
    importScreen.content.tiles.type,
    "migration-wizard",
    "Import screen embeds the migration wizard"
  );
  Assert.equal(
    importScreen.content.tiles.migration_wizard_options.migrator_key,
    "firefox-import",
    "Import screen defaults to the Firefox import migrator"
  );
  Assert.equal(
    importScreen.content.tiles.migration_wizard_options.force_show_import_all,
    true,
    "Import screen keeps the import all option available"
  );
  Assert.equal(
    importScreen.content.tiles.migration_wizard_options.selection_header_string,
    "",
    "Import screen uses the about:welcome title instead of a second wizard title"
  );
  Assert.ok(
    !importScreen.content.primary_button,
    "Import screen uses the embedded wizard controls"
  );

  const styleScreen = getScreen(defaults, "AW_FENNEC_STYLE");
  const [styleTiles, densityTiles] = styleScreen.content.tiles;
  Assert.equal(styleTiles.type, "single-select", "Style screen has a picker");
  Assert.equal(
    styleTiles.selected,
    "fennec-style-nova",
    "Preselects the Nova style"
  );
  Assert.deepEqual(
    styleTiles.data.map(tile => tile.id),
    ["fennec-style-photon", "fennec-style-proton", "fennec-style-nova"],
    "Offers Photon, Proton, and Nova styles"
  );
  for (const tile of styleTiles.data) {
    assertFennecAction(
      tile.action,
      "style",
      tile.id.replace("fennec-style-", "")
    );
  }
  Assert.equal(
    densityTiles.class_name,
    "fennec-density",
    "Density picker has its styling hook"
  );
  Assert.equal(
    densityTiles.selected,
    "fennec-density-compact",
    "Preselects the compact density"
  );
  Assert.deepEqual(
    densityTiles.data.map(tile => tile.id),
    [
      "fennec-density-normal",
      "fennec-density-compact",
      "fennec-density-touch",
    ],
    "Offers normal, compact, and touch density"
  );
  for (const tile of densityTiles.data) {
    assertFennecAction(
      tile.action,
      "density",
      tile.id.replace("fennec-density-", "")
    );
  }
  Assert.equal(
    styleScreen.content.primary_button.action.navigate,
    true,
    "Style primary button continues"
  );
  assertSettingsAction(
    styleScreen.content.secondary_button.action,
    "preferences#appearance"
  );

  const colorScreen = getScreen(defaults, "AW_FENNEC_THEME_COLOR");
  const [themeModeTiles, colorTiles] = colorScreen.content.tiles;
  Assert.ok(!colorScreen.content.logo, "Theme color screen has no inline logo");
  Assert.equal(
    colorScreen.content.title.string_id,
    "fennec-onboarding-theme-color-title",
    "Theme color screen uses the Fennec color title"
  );
  Assert.equal(
    themeModeTiles.class_name,
    "fennec-theme-mode",
    "Theme mode picker has compact styling hook"
  );
  Assert.deepEqual(
    themeModeTiles.data.map(tile => tile.id),
    [
      "fennec-theme-mode-system",
      "fennec-theme-mode-light",
      "fennec-theme-mode-dark",
    ],
    "Offers system, light, and dark mode"
  );
  Assert.deepEqual(
    themeModeTiles.data.map(tile => tile.label.string_id),
    [
      "fennec-onboarding-theme-mode-system-label",
      "fennec-onboarding-theme-mode-light-label",
      "fennec-onboarding-theme-mode-dark-label",
    ],
    "Uses compact Fennec theme mode labels"
  );
  for (const tile of themeModeTiles.data) {
    assertFennecAction(
      tile.action,
      "theme-mode",
      tile.id.replace("fennec-theme-mode-", "")
    );
  }
  Assert.equal(
    colorTiles.class_name,
    "fennec-color-grid",
    "Theme color picker has swatch grid styling hook"
  );
  Assert.equal(
    colorTiles.selected,
    "fennec-color-default",
    "Default is selected by default"
  );
  Assert.deepEqual(
    colorTiles.data.map(tile => tile.id.replace("fennec-color-", "")),
    FENNEC_COLOR_IDS,
    "Offers the expected Fennec colors"
  );
  for (const tile of colorTiles.data) {
    const color = tile.id.replace("fennec-color-", "");
    assertFennecAction(tile.action, "theme-color", color);
  }
  Assert.equal(
    colorScreen.content.primary_button.action.navigate,
    true,
    "Theme color primary button continues"
  );
  Assert.equal(
    colorScreen.content.secondary_button.label.string_id,
    "fennec-onboarding-skip-step-button",
    "Theme color skip button uses the requested label"
  );
  Assert.equal(
    colorScreen.content.secondary_button.has_arrow_icon,
    true,
    "Theme color skip button shows the arrow affordance"
  );
  Assert.equal(
    colorScreen.content.secondary_button.action.navigate,
    true,
    "Theme color skip button continues"
  );

  const tabsScreen = getScreen(defaults, "AW_FENNEC_TABS");
  const [layoutTiles, locationTiles] = tabsScreen.content.tiles;
  Assert.equal(
    layoutTiles.type,
    "single-select",
    "Layout picker is a single select"
  );
  Assert.equal(
    layoutTiles.selected,
    "fennec-layout-horizontal",
    "Keeps horizontal tabs selected by default"
  );
  Assert.equal(
    layoutTiles.action.picker,
    "<event>",
    "Layout tiles run their own action"
  );
  Assert.deepEqual(
    layoutTiles.data.map(tile => tile.id),
    [
      "fennec-layout-horizontal",
      "fennec-layout-vertical",
      "fennec-layout-tree",
    ],
    "Offers horizontal, vertical, and tree layouts"
  );
  for (const tile of layoutTiles.data) {
    assertFennecAction(
      tile.action,
      "layout",
      tile.id.replace("fennec-layout-", "")
    );
  }
  Assert.equal(
    locationTiles.class_name,
    "fennec-tab-location",
    "Tab location picker has its styling hook"
  );
  Assert.equal(
    locationTiles.selected,
    "fennec-location-topabove",
    "Defaults to the top above position"
  );
  Assert.deepEqual(
    locationTiles.data.map(tile => tile.id),
    [
      "fennec-location-topabove",
      "fennec-location-topbelow",
      "fennec-location-bottomabove",
      "fennec-location-bottombelow",
    ],
    "Offers the four supported tab strip positions"
  );
  for (const tile of locationTiles.data) {
    assertFennecAction(
      tile.action,
      "tab-location",
      tile.id.replace("fennec-location-", "")
    );
  }
  assertSettingsAction(
    tabsScreen.content.secondary_button.action,
    "preferences#tabsBrowsing"
  );

  const privacyScreen = getScreen(defaults, "AW_FENNEC_PRIVACY");
  assertFennecAction(
    privacyScreen.content.primary_button.action,
    "privacy-defaults",
    true
  );
  Assert.equal(
    privacyScreen.content.primary_button.action.navigate,
    true,
    "Privacy primary button continues"
  );
  assertSettingsAction(
    privacyScreen.content.secondary_button.action,
    "preferences#adBlocking"
  );

  const defaultScreen = getScreen(defaults, "AW_FENNEC_DEFAULT_BROWSER");
  Assert.equal(
    defaultScreen.targeting,
    "needDefault",
    "Default screen is targeted"
  );
  Assert.equal(
    defaultScreen.content.primary_button.action.type,
    "SET_DEFAULT_BROWSER",
    "Default screen can set the default browser"
  );

  const finishAction = getScreen(defaults, "AW_FENNEC_FINISH").content
    .primary_button.action;
  Assert.equal(finishAction.type, "OPEN_ABOUT_PAGE", "Finish opens a page");
  Assert.equal(finishAction.data.args, "home", "Finish opens about:home");
  Assert.equal(finishAction.data.where, "current", "Finish reuses the tab");
  Assert.equal(finishAction.navigate, true, "Finish completes onboarding");
});

add_task(
  async function test_fennec_onboarding_actions_write_expected_prefs() {
    clearUserPrefs(ACTION_PREFS);
    FennecThemeColors.clear();

    try {
      Services.prefs.setBoolPref(NOVA_PREF, false);
      Services.prefs.setIntPref(STYLE_PREF, 1);

      await runFennecAction("style", "nova");
      Assert.equal(
        Services.prefs.getBoolPref(NOVA_PREF),
        true,
        "Nova turns on"
      );
      Assert.equal(
        Services.prefs.getIntPref(STYLE_PREF),
        1,
        "Nova keeps Lepton chrome styling enabled"
      );
      Assert.equal(
        Services.prefs.getBoolPref("userChrome.tab.lepton_like_padding"),
        false,
        "Nova keeps the stock tab style"
      );
      Assert.ok(
        !Services.prefs.prefHasUserValue(SUPERNOVA_PREF),
        "Nova does not write the Supernova Lepton pref"
      );

      await runFennecAction("style", "photon");
      Assert.equal(
        Services.prefs.getBoolPref(NOVA_PREF),
        false,
        "Photon turns Nova off"
      );
      Assert.equal(
        Services.prefs.getIntPref(STYLE_PREF),
        1,
        "Photon enables Fennec styling for stock themes"
      );
      Assert.equal(
        Services.prefs.getBoolPref("userChrome.tab.photon_like_contextline"),
        true,
        "Photon writes the Photon style block"
      );
      Assert.ok(
        !Services.prefs.prefHasUserValue(SUPERNOVA_PREF),
        "Photon does not write the Supernova Lepton pref"
      );

      await runFennecAction("style", "proton");
      Assert.equal(
        Services.prefs.getBoolPref(NOVA_PREF),
        false,
        "Proton keeps Nova off"
      );
      Assert.equal(
        Services.prefs.getIntPref(STYLE_PREF),
        1,
        "Proton keeps Lepton chrome styling enabled"
      );
      Assert.equal(
        Services.prefs.getBoolPref("userChrome.tab.lepton_like_padding"),
        false,
        "Proton keeps the stock tab style"
      );

      await runFennecAction("theme-mode", "dark");
      Assert.equal(
        Services.prefs.getStringPref(FENNEC_THEME_MODE_PREF),
        "dark",
        "Theme mode writes the Fennec mode pref"
      );
      Assert.equal(
        LightweightThemeManager.themeData.theme.id,
        FENNEC_THEME_ID,
        "Theme mode applies Fennec dynamic theme data"
      );
      Assert.equal(
        LightweightThemeManager.themeData.theme.color_scheme,
        "dark",
        "Dark mode applies dark theme data"
      );
      Assert.ok(
        !LightweightThemeManager.themeData.darkTheme,
        "Forced dark mode does not wait for the system variant"
      );

      await runFennecAction("theme-color", "pine");
      Assert.equal(
        Services.prefs.getStringPref(FENNEC_THEME_COLOR_PREF),
        "pine",
        "Theme color writes the Fennec color pref"
      );
      Assert.equal(
        LightweightThemeManager.themeData.theme.toolbarColor,
        "#0a2015",
        "Color choice combines with the current dark mode"
      );

      await runFennecAction("theme-color", "default");
      Assert.ok(
        !Services.prefs.prefHasUserValue(FENNEC_THEME_COLOR_PREF),
        "Default theme color clears the Fennec color pref"
      );
      Assert.equal(
        LightweightThemeManager.themeData.theme.toolbarColor,
        "#081a2d",
        "Default color keeps the current dark mode with default colors"
      );

      await runFennecAction("theme-mode", "system");
      Assert.equal(
        Services.prefs.getStringPref(FENNEC_THEME_MODE_PREF),
        "system",
        "System mode writes the Fennec mode pref"
      );
      Assert.ok(
        LightweightThemeManager.themeData.darkTheme,
        "System mode keeps light and dark variants available"
      );
      Assert.notEqual(
        LightweightThemeManager.themeData.theme.toolbarColor,
        LightweightThemeManager.themeData.darkTheme.toolbarColor,
        "Light and dark variants visibly differ"
      );

      await runFennecAction("density", "touch");
      Assert.equal(
        Services.prefs.getIntPref(UIDENSITY_PREF),
        2,
        "Density action writes the UI density pref"
      );

      await runFennecAction("layout", "tree");
      Assert.equal(
        Services.prefs.getBoolPref(VERTICAL_TABS_PREF),
        true,
        "Tree layout enables vertical tabs"
      );
      Assert.equal(
        Services.prefs.getBoolPref(TREE_TABS_PREF),
        true,
        "Tree layout enables the tree"
      );

      await runFennecAction("layout", "vertical");
      Assert.equal(
        Services.prefs.getBoolPref(VERTICAL_TABS_PREF),
        true,
        "Vertical layout keeps vertical tabs on"
      );
      Assert.equal(
        Services.prefs.getBoolPref(TREE_TABS_PREF),
        false,
        "Vertical layout turns the tree off"
      );

      await runFennecAction("layout", "horizontal");
      Assert.equal(
        Services.prefs.getBoolPref(TREE_TABS_PREF),
        false,
        "Horizontal layout keeps the tree off"
      );
      Assert.equal(
        Services.prefs.getBoolPref(VERTICAL_TABS_PREF),
        false,
        "Horizontal layout disables vertical tabs"
      );

      await runFennecAction("tab-location", "bottomabove");
      Assert.equal(
        Services.prefs.getStringPref(TABBAR_POSITION_PREF),
        "bottomabove",
        "Tab location action writes the tab strip position"
      );

      Services.prefs.setBoolPref(PRIVACY_PREF, false);
      await runFennecAction("privacy-defaults", true);
      Assert.equal(
        Services.prefs.getBoolPref(PRIVACY_PREF),
        true,
        "Privacy action keeps the blocker enabled"
      );
    } finally {
      clearUserPrefs(ACTION_PREFS);
      FennecThemeColors.clear();
    }
  }
);

add_task(async function test_fennec_defaults_render_first_screen() {
  const { browser, cleanup } = await openMRAboutWelcome();

  try {
    await test_screen_content(
      browser,
      "Fennec onboarding first screen",
      [
        "main.AW_FENNEC_WELCOME[pos='split']",
        "div.onboardingContainer",
        "div.section-secondary",
        "div.steps",
        "button.primary",
      ],
      ["main.AW_FENNEC_IMPORT"]
    );
  } finally {
    await cleanup();
  }
});
