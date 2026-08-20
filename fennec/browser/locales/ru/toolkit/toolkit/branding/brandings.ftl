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
-profiler-brand-name = Профайлер Fennec
-translations-brand-name = Fennec Translations
-focus-brand-name = Fennec Focus
-relay-brand-name = Fennec Relay
-relay-brand-short-name = Relay
-fakespot-brand-name = Fakespot
-solo-ai-brand-name = Solo
-thunderbird-brand-name = BrowserWorks Thunderbird
-thunderbird-brand-short-name = Thunderbird
-mdn-brand-name = MDN Web Docs
-yelp-brand-name = Yelp

##

# Note the name of the website is capitalized.
-fakespot-website-name = Fakespot.com
# The particle "by" can be localized, "Fakespot" and "Mozilla" should not be localized or transliterated.
-fakespot-brand-full-name = Fakespot от BrowserWorks
# “Suggest” can be localized, “Firefox” must be treated as a brand
# and kept in English.
-firefox-suggest-brand-name = Fennec Suggest
# ”Home" can be localized, “Firefox” must be treated as a brand
# and kept in English.
-firefox-home-brand-name =
    { $case ->
        [nominative_uppercase] Домашняя страница Fennec
        [genitive] домашней страницы Fennec
        [dative] домашнюю страницу Fennec
        [accusative] домашнюю страницу Fennec
        [instrumental] домашней страницей Fennec
        [prepositional] домашней странице Fennec
       *[nominative] домашняя страница Fennec
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
        [true]
            { $case ->
                [nominative_uppercase] Умные окна
                [genitive] Умных окон
                [dative] Умным окнам
                [accusative] Умные окна
                [instrumental] Умными окнами
                [prepositional] Умных окнах
               *[nominative] Умные окна
            }
       *[false]
            { $case ->
                [nominative_uppercase] Умное окно
                [genitive] Умного окна
                [dative] Умному окну
                [accusative] Умное окно
                [instrumental] Умным окном
                [prepositional] Умном окне
               *[nominative] Умное окно
            }
    }
