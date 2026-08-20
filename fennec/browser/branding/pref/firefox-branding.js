/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// This file contains branding-specific prefs.

pref(
  "startup.homepage_override_url",
  "https://www.waterfox.com/releases/%DISPLAY_VERSION%/?update"
);
pref("startup.homepage_welcome_url", "about:welcome");
pref(
  "startup.homepage_welcome_url.additional",
  "https://www.waterfox.com/releases/%DISPLAY_VERSION%/?new"
);
// Interval: Time between checks for a new version (in seconds)
pref("app.update.interval", 43200); // 12 hours
// Give the user x seconds to react before showing the big UI. default=192 hours
pref("app.update.promptWaitTime", 691200);
// app.update.url.manual: URL user can browse to manually if for some reason
// all update installation attempts fail.
// app.update.url.details: a default value for the "More information about this
// update" link supplied in the "An update is available" page of the update
// wizard.
pref(
  "app.update.url.manual",
  "https://www.waterfox.com/download/?reason=manual-update"
);
pref("app.update.url.details", "https://www.waterfox.com/releases/");
pref(
  "app.releaseNotesURL",
  "https://www.waterfox.com/releases/%DISPLAY_VERSION%/?utm_source=fennec-browser&utm_medium=fennec-browser&utm_campaign=whatsnew"
);
pref(
  "app.releaseNotesURL.aboutDialog",
  "https://www.waterfox.com/releases/%DISPLAY_VERSION%/?utm_source=fennec-browser&utm_medium=fennec-desktop&utm_campaign=about-dialog"
);

// The number of days a binary is permitted to be old
// without checking for an update.  This assumes that
// app.update.checkInstallTime is true.
pref("app.update.checkInstallTime.days", 2);

// Give the user x seconds to reboot before showing a badge on the hamburger
// button. default=immediately
pref("app.update.badgeWaitTime", 0);

// Number of usages of the web console.
// If this is less than 5, then pasting code into the web console is disabled
pref("devtools.selfxss.count", 0);

// ─────────────────────────────────────────────────────────────────
// Fennec
//
// A fork's job is to differ deliberately, so what changes is listed
// here rather than buried in a patch. Two kinds of change:
//
//   1. Debloat — features that phone home, suggest things, or exist
//      to serve someone other than the person at the keyboard.
//   2. Defaults — the settings most people change first anyway.
//
// Everything remains a preference. Nothing here is compiled out, so
// anyone who wants Pocket back can have it in about:config.
// ─────────────────────────────────────────────────────────────────

// ── Telemetry and studies ────────────────────────────────────────
pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.policy.dataSubmissionEnabled", false);
pref("toolkit.telemetry.enabled", false);
pref("toolkit.telemetry.unified", false);
pref("toolkit.telemetry.archive.enabled", false);
pref("toolkit.telemetry.newProfilePing.enabled", false);
pref("toolkit.telemetry.updatePing.enabled", false);
pref("toolkit.telemetry.bhrPing.enabled", false);
pref("toolkit.telemetry.firstShutdownPing.enabled", false);
pref("toolkit.telemetry.coverage.opt-out", true);
pref("toolkit.coverage.opt-out", true);
pref("toolkit.coverage.endpoint.base", "");
pref("app.shield.optoutstudies.enabled", false);
pref("app.normandy.enabled", false);
pref("app.normandy.api_url", "");
pref("browser.ping-centre.telemetry", false);

// ── Sponsored content on the new tab page ────────────────────────
pref("browser.newtabpage.activity-stream.showSponsored", false);
pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
pref("browser.newtabpage.activity-stream.telemetry", false);
pref("browser.newtabpage.activity-stream.feeds.snippets", false);
pref("browser.newtabpage.activity-stream.system.showSponsored", false);

// ── Pocket ───────────────────────────────────────────────────────
pref("extensions.pocket.enabled", false);
pref("browser.urlbar.suggest.pocket", false);

// ── Nagging and onboarding ───────────────────────────────────────
pref("browser.aboutwelcome.enabled", false);
pref("browser.startup.homepage_override.mstone", "ignore");
pref("browser.messaging-system.whatsNewPanel.enabled", false);
pref("browser.discovery.enabled", false);
pref("browser.shopping.experience2023.enabled", false);
pref("extensions.getAddons.showPane", false);

// ── Crash reporting ──────────────────────────────────────────────
pref("breakpad.reportURL", "");
pref("browser.tabs.crashReporting.sendReport", false);

// ── Privacy defaults ─────────────────────────────────────────────
// Resist fingerprinting is deliberately NOT enabled: it breaks enough
// sites that people turn it off along with everything else here.
pref("privacy.trackingprotection.enabled", true);
pref("privacy.trackingprotection.socialtracking.enabled", true);
pref("privacy.donottrackheader.enabled", true);
pref("privacy.globalprivacycontrol.enabled", true);
pref("network.cookie.cookieBehavior", 5);       // total cookie protection
pref("browser.contentblocking.category", "strict");

// ── Search ───────────────────────────────────────────────────────
pref("browser.urlbar.suggest.searches", false);
pref("browser.search.suggest.enabled", false);
pref("browser.urlbar.trending.featureGate", false);
pref("browser.urlbar.quicksuggest.enabled", false);
pref("browser.urlbar.suggest.quicksuggest.sponsored", false);

// ── The Rose theme ───────────────────────────────────────────────
// The chrome stylesheet in the profile is what themes the browser
// itself; without this Firefox ignores it entirely.
pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
// Compact mode is hidden by default and is what most people want on a
// laptop; making it available is not the same as forcing it.
pref("browser.compactmode.show", true);
pref("browser.uidensity", 1);

// ── Where the release notes point ────────────────────────────────
pref("startup.homepage_override_url", "https://github.com/Solidifiedinstone/Rose-Fennec/releases");
pref("startup.homepage_welcome_url", "about:newtab");
pref("startup.homepage_welcome_url.additional", "");
