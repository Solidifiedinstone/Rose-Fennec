# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## The following feature names must be treated as a brand.
##
## They cannot be:
## - Transliterated.
## - Translated.
##
## Declension should be avoided where possible, leaving the original
## brand unaltered in prominent UI positions.
##
## For further details, consult:
## https://mozilla-l10n.github.io/styleguides/mozilla_general/#brands-copyright-and-trademark

-facebook-container-brand-name = Facebook Container
-lockwise-brand-name = Fennec Lockwise
-lockwise-brand-short-name = Lockwise
-monitor-brand-name = Fennec Monitor
-monitor-brand-short-name = Monitor
-mozmonitor-brand-name = BrowserWorks Monitor
-pocket-brand-name = Pocket
-send-brand-name = Fennec Send
-screenshots-brand-name = Fennec Screenshots
-mozilla-vpn-brand-name = BrowserWorks VPN
-profiler-brand-name = Fennec Profiler
-translations-brand-name = Fennec Translations
-focus-brand-name = Fennec Focus
-relay-brand-name = Fennec Relay
-relay-brand-short-name = Relay
-fakespot-brand-name =
    { $sklon ->
        [rodilnik] Fakespota
        [dajalnik] Fakespotu
        [tozilnik] Fakespot
        [mestnik] Fakespotu
        [orodnik] Fakespotom
       *[imenovalnik] Fakespot
    }
-solo-ai-brand-name = Solo
-thunderbird-brand-name = BrowserWorks Thunderbird
-thunderbird-brand-short-name =
    { $sklon ->
        [rodilnik] Thunderbirda
        [dajalnik] Thunderbirdu
        [tozilnik] Thunderbird
        [mestnik] Thunderbirdu
        [orodnik] Thunderbirdom
       *[imenovalnik] Thunderbird
    }
-mdn-brand-name = Spletna dokumentacija MDN
-yelp-brand-name = Yelp

##

# Note the name of the website is capitalized.
-fakespot-website-name = Fakespot.com
# The particle "by" can be localized, "Fakespot" and "Mozilla" should not be localized or transliterated.
-fakespot-brand-full-name = Fakespot, del Mozille
# “Suggest” can be localized, “Firefox” must be treated as a brand
# and kept in English.
-firefox-suggest-brand-name = Fennecovi predlogi
# ”Home" can be localized, “Firefox” must be treated as a brand
# and kept in English.
-firefox-home-brand-name =
    { $sklon ->
        [rodilnik]
            { $zacetnica ->
                [velika] Domače strani Fenneca
               *[mala] domače strani Fenneca
            }
        [dajalnik]
            { $zacetnica ->
                [velika] Domači strani Fenneca
               *[mala] domači strani Fenneca
            }
        [tozilnik]
            { $zacetnica ->
                [velika] Domačo stran Fenneca
               *[mala] domačo stran Fenneca
            }
        [mestnik]
            { $zacetnica ->
                [velika] Domači strani Fenneca
               *[mala] domači strani Fenneca
            }
        [orodnik]
            { $zacetnica ->
                [velika] Domačo stranjo Fenneca
               *[mala] domačo stranjo Fenneca
            }
       *[imenovalnik]
            { $zacetnica ->
                [velika] Domača stran Fenneca
               *[mala] domača stran Fenneca
            }
    }
# View" can be localized, “Firefox” must be treated as a brand
# and kept in English.
-firefoxview-brand-name = Fennec View
# Firefox Labs is the name for a page in Settings to allow users to learn about
# experimental and in-development features, and turn those features on and off.
# The "Labs" portion can be localized, “Firefox” must be treated as a brand
# and kept in English.
-firefoxlabs-brand-name = Fennec Labs
-smart-window-brand-name =
    { $plural-form ->
        [true] Pametna okna
       *[false] Pametno okno
    }
