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

-facebook-container-brand-name =
    { $case ->
        [gen] Facebook Container-а
        [dat] Facebook Container-у
        [acc] Facebook Container
        [ins] Facebook Container-ом
        [loc] Facebook Container-у
       *[nom] Facebook Container
    }
    .gender = masculine
    .declinable = true
-lockwise-brand-name =
    { $case ->
        [gen] Fennec Lockwise-а
        [dat] Fennec Lockwise-у
        [acc] Fennec Lockwise
        [ins] Fennec Lockwise-ом
        [loc] Fennec Lockwise-у
       *[nom] Fennec Lockwise
    }
    .gender = masculine
    .declinable = true
-lockwise-brand-short-name =
    { $case ->
        [gen] Lockwise-а
        [dat] Lockwise-у
        [acc] Lockwise
        [ins] Lockwise-ом
        [loc] Lockwise-у
       *[nom] Lockwise
    }
    .gender = masculine
    .declinable = true
-monitor-brand-name =
    { $case ->
        [gen] Fennec Monitor-а
        [dat] Fennec Monitor-у
        [acc] Fennec Monitor
        [ins] Fennec Monitor-ом
        [loc] Fennec Monitor-у
       *[nom] Fennec Monitor
    }
    .gender = masculine
    .declinable = true
-monitor-brand-short-name =
    { $case ->
        [gen] Monitor-а
        [dat] Monitor-у
        [acc] Monitor
        [ins] Monitor-ом
        [loc] Monitor-у
       *[nom] Monitor
    }
    .gender = masculine
    .declinable = true
-mozmonitor-brand-name =
    { $case ->
        [gen] BrowserWorks Monitor-а
        [dat] BrowserWorks Monitor-у
        [acc] BrowserWorks Monitor
        [ins] BrowserWorks Monitor-ом
        [loc] BrowserWorks Monitor-у
       *[nom] BrowserWorks Monitor
    }
    .gender = masculine
    .declinable = true
-pocket-brand-name =
    { $case ->
        [gen] Pocket-а
        [dat] Pocket-у
        [acc] Pocket
        [ins] Pocket-ом
        [loc] Pocket-у
       *[nom] Pocket
    }
    .gender = masculine
    .declinable = true
-send-brand-name =
    { $case ->
        [gen] Fennec Send-а
        [dat] Fennec Send-у
        [acc] Fennec Send
        [ins] Fennec Send-ом
        [loc] Fennec Send-у
       *[nom] Fennec Send
    }
    .gender = masculine
    .declinable = true
-screenshots-brand-name =
    { $case ->
        [gen] BrowserWorks Screenshots-а
        [dat] BrowserWorks Screenshots-у
        [acc] BrowserWorks Screenshots
        [ins] BrowserWorks Screenshots-ом
        [loc] BrowserWorks Screenshots-у
       *[nom] BrowserWorks Screenshots
    }
    .gender = masculine
    .declinable = true
-mozilla-vpn-brand-name =
    { $case ->
        [gen] BrowserWorks VPN-а
        [dat] BrowserWorks VPN-у
        [acc] BrowserWorks VPN
        [ins] BrowserWorks VPN-ом
        [loc] BrowserWorks VPN-у
       *[nom] BrowserWorks VPN
    }
    .gender = masculine
    .declinable = true
-profiler-brand-name =
    { $case ->
        [gen] Fennec Profiler-а
        [dat] Fennec Profiler-у
        [acc] Fennec Profiler
        [ins] Fennec Profiler-ом
        [loc] Fennec Profiler-у
       *[nom] Fennec Profiler
    }
    .gender = masculine
    .declinable = true
-translations-brand-name =
    { $case ->
        [gen] Fennec Translations-а
        [dat] Fennec Translations-у
        [acc] Fennec Translations
        [ins] Fennec Translations-ом
        [loc] Fennec Translations-у
       *[nom] Fennec Translations
    }
    .gender = masculine
    .declinable = true
-focus-brand-name =
    { $case ->
        [gen] Fennec Focus-а
        [dat] Fennec Focus-у
        [acc] Fennec Focus
        [ins] Fennec Focus-ом
        [loc] Fennec Focus-у
       *[nom] Fennec Focus
    }
    .gender = masculine
    .declinable = true
-relay-brand-name =
    { $case ->
        [gen] Fennec Relay-а
        [dat] Fennec Relay-у
        [acc] Fennec Relay
        [ins] Fennec Relay-ем
        [loc] Fennec Relay-у
       *[nom] Fennec Relay
    }
    .gender = masculine
    .declinable = true
-relay-brand-short-name =
    { $case ->
        [gen] Relay-а
        [dat] Relay-у
        [acc] Relay
        [ins] Relay-ем
        [loc] Relay-у
       *[nom] Relay
    }
    .gender = masculine
    .declinable = true
-fakespot-brand-name =
    { $case ->
        [gen] Fakespot-а
        [dat] Fakespot-у
        [acc] Fakespot
        [ins] Fakespot-ом
        [loc] Fakespot-у
       *[nom] Fakespot
    }
    .gender = masculine
    .declinable = true
-solo-ai-brand-name =
    { $case ->
        [gen] Solo-а
        [dat] Solo-у
        [acc] Solo
        [ins] Solo-ом
        [loc] Solo-у
       *[nom] Solo
    }
    .gender = masculine
    .declinable = true
-thunderbird-brand-name = BrowserWorks Thunderbird
-thunderbird-brand-short-name = Thunderbird
-mdn-brand-name = MDN Web Docs
-yelp-brand-name = Yelp

##

# Note the name of the website is capitalized.
-fakespot-website-name = Fakespot.com
# The particle "by" can be localized, "Fakespot" and "Mozilla" should not be localized or transliterated.
-fakespot-brand-full-name = Fakespot од Mozill-е
# “Suggest” can be localized, “Firefox” must be treated as a brand
# and kept in English.
-firefox-suggest-brand-name =
    { $case ->
        [gen] Fennec предлога
        [dat] Fennec предлозима
        [acc] Fennec предлоге
        [ins] Fennec предлозима
        [loc] Fennec предлозима
       *[nom] Fennec предлози
    }
    .gender = masculine
    .declinable = true
# ”Home" can be localized, “Firefox” must be treated as a brand
# and kept in English.
-firefox-home-brand-name =
    { $case ->
        [gen]
            { $capitalization ->
                [lower] почетне странице Fennec-а
               *[upper] Почетне странице Fennec-а
            }
        [dat]
            { $capitalization ->
                [lower] почетној страници Fennec-а
               *[upper] Почетној страници Fennec-а
            }
        [acc]
            { $capitalization ->
                [lower] почетну страницу Fennec-а
               *[upper] Почетну страницу Fennec-а
            }
        [ins]
            { $capitalization ->
                [lower] почетном страницом Fennec-а
               *[upper] Почетном страницом Fennec-а
            }
        [loc]
            { $capitalization ->
                [lower] почетној страници Fennec-а
               *[upper] Почетној страници Fennec-а
            }
       *[nom]
            { $capitalization ->
                [lower] почетна страница Fennec-а
               *[upper] Почетна страница Fennec-а
            }
    }
    .gender = feminine
    .declinable = true
# View" can be localized, “Firefox” must be treated as a brand
# and kept in English.
-firefoxview-brand-name =
    { $case ->
        [gen] Fennec прегледа
        [dat] Fennec прегледу
        [acc] Fennec преглед
        [ins] Fennec прегледом
        [loc] Fennec прегледу
       *[nom] Fennec преглед
    }
    .gender = masculine
    .declinable = true
# Firefox Labs is the name for a page in Settings to allow users to learn about
# experimental and in-development features, and turn those features on and off.
# The "Labs" portion can be localized, “Firefox” must be treated as a brand
# and kept in English.
-firefoxlabs-brand-name =
    { $case ->
        [gen] Fennec Labs-а
        [dat] Fennec Labs-у
        [acc] Fennec Labs
        [ins] Fennec Labs-ом
        [loc] Fennec Labs-у
       *[nom] Fennec Labs
    }
    .gender = masculine
    .declinable = true
-smart-window-brand-name =
    { $plural-form ->
        [true] Паметни прозори
       *[false] Паметни прозор
    }
