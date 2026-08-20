/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const PALETTE_PREF = "rose.appearance.palette";
const DEFAULT_PALETTE = "rose-dark";

const lazy = {};

ChromeUtils.defineESModuleGetters(lazy, {
  AddonManager: "resource://gre/modules/AddonManager.sys.mjs",
});

function themeId(palette) {
  const name = palette.startsWith("rose-") ? palette : `rose-${palette}`;
  return `${name}@fennec`;
}

// The stylesheet in chrome://browser/skin/rose/ does the chrome, driven by
// prefs through @media -moz-pref(). It cannot reach what the theme system
// owns: in-content pages, the tab strip's own painting, the colours handed to
// extensions. Enabling the matching built-in theme covers those, so the
// palette pref stays the single thing anybody sets.
export const RoseAppearance = {
  _initialized: false,

  init() {
    if (this._initialized) {
      return;
    }
    this._initialized = true;

    Services.prefs.addObserver(PALETTE_PREF, this);
    this.apply().catch(console.error);
  },

  uninit() {
    if (!this._initialized) {
      return;
    }
    Services.prefs.removeObserver(PALETTE_PREF, this);
    this._initialized = false;
  },

  observe(subject, topic) {
    if (topic === "nsPref:changed") {
      this.apply().catch(console.error);
    }
  },

  get palette() {
    return Services.prefs.getStringPref(PALETTE_PREF, DEFAULT_PALETTE);
  },

  async apply() {
    const wanted = themeId(this.palette);
    let theme = await lazy.AddonManager.getAddonByID(wanted);

    if (!theme) {
      // An unknown palette is a typo or a downgrade, not a reason to leave the
      // window half themed.
      theme = await lazy.AddonManager.getAddonByID(themeId(DEFAULT_PALETTE));
    }

    if (theme && !theme.isActive) {
      await theme.enable();
    }
  },
};
