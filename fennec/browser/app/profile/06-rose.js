#filter dumbComments emptyLines

// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

// The Rose appearance.
//
// Every one of these is read by chrome://browser/skin/rose/*.css through
// @media -moz-pref(), which is why they are integers and strings rather than
// a JSON blob: a media query re-evaluates the moment a pref changes, so the
// whole interface restyles live with no JavaScript involved at all.
//
// The values here are the defaults the stylesheet already falls back to.
// Stating them anyway is what lets Settings show the real current value
// rather than an empty control.

// Which palette. Any key in fennec/browser/themes/rose/rose-themes.json.
pref("rose.appearance.palette", "rose-dark");

// Shape. Steps, not free numbers: each value costs a block of generated CSS,
// and nobody needs to choose between a 7px and an 8px corner.
pref("rose.appearance.radius", 8);          // 0 2 4 6 8 12 16 22
pref("rose.appearance.padding", 6);         // 0 2 4 6 8 12 16
pref("rose.appearance.border-width", 1);    // 0 1 2
pref("rose.appearance.font-size", 14);      // 11 … 20
pref("rose.appearance.tab-height", 36);     // 28 32 36 40 44

// The interface font. A key from the list in generate.py, not a family name:
// a picker offering fonts that are not installed silently falls back, and the
// setting then looks broken.
pref("rose.appearance.font", "system");

// How much room things get. Overrides padding and tab height together.
// "cosy" leaves the individual settings alone.
pref("rose.appearance.density", "cosy");    // compact | cosy | spacious

// Frosted surfaces. Off by default: it costs compositing on every frame, and
// on a palette with nothing behind it there is nothing to frost.
pref("rose.appearance.glass", false);
pref("rose.appearance.glass-blur", 12);     // 0 6 12 20 32
pref("rose.appearance.glass-opacity", 80);  // 60 70 80 90 100

// Gradients on the surfaces. Also off: the palettes are designed flat, and a
// gradient is a strong enough look to be asked for rather than assumed.
pref("rose.appearance.gradient", false);
pref("rose.appearance.gradient-angle", 160);     // 0 45 90 135 160 180 225 270
pref("rose.appearance.gradient-strength", 8);    // 0 4 8 12 20 30
