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
        [gen] Facebook Containeru
        [dat] Facebook Containeru
        [acc] Facebook Container
        [voc] Facebook Containere
        [loc] Facebook Containeru
        [ins] Facebook Containerem
       *[nom] Facebook Container
    }
    .gender = masculine
-lockwise-brand-name =
    { $case ->
        [gen] Fennecu Lockwise
        [dat] Fennecu Lockwise
        [acc] Fennec Lockwise
        [voc] Fennece Lockwise
        [loc] Fennecu Lockwise
        [ins] Fennecem Lockwise
       *[nom] Fennec Lockwise
    }
    .gender = masculine
-lockwise-brand-short-name =
    { $case ->
        [gen] Lockwisu
        [dat] Lockwisu
        [acc] Lockwise
        [voc] Lockwise
        [loc] Lockwisu
        [ins] Lockwisem
       *[nom] Lockwise
    }
    .gender = masculine
-monitor-brand-name =
    { $case ->
        [gen] Fennec Monitoru
        [dat] Fennec Monitoru
        [acc] Fennec Monitor
        [voc] Fennec Monitore
        [loc] Fennec Monitoru
        [ins] Fennec Monitorem
       *[nom] Fennec Monitor
    }
    .gender = masculine
-monitor-brand-short-name =
    { $case ->
        [gen] Monitoru
        [dat] Monitoru
        [acc] Monitor
        [voc] Monitore
        [loc] Monitoru
        [ins] Monitorem
       *[nom] Monitor
    }
    .gender = masculine
-mozmonitor-brand-name =
    { $case ->
        [gen] BrowserWorks Monitoru
        [dat] BrowserWorks Monitoru
        [acc] BrowserWorks Monitor
        [voc] BrowserWorks Monitore
        [loc] BrowserWorks Monitoru
        [ins] BrowserWorks Monitorem
       *[nom] BrowserWorks Monitor
    }
    .gender = masculine
-pocket-brand-name =
    { $case ->
        [gen] Pocketu
        [dat] Pocketu
        [acc] Pocket
        [voc] Pocket
        [loc] Pocketu
        [ins] Pocketem
       *[nom] Pocket
    }
    .gender = masculine
-send-brand-name =
    { $case ->
        [gen] Fennecu Send
        [dat] Fennecu Send
        [acc] Fennec Send
        [voc] Fennece Send
        [loc] Fennecu Send
        [ins] Fennecem Send
       *[nom] Fennec Send
    }
    .gender = masculine
-screenshots-brand-name = Fennec Screenshots
-mozilla-vpn-brand-name =
    { $case ->
        [gen] Mozilly VPN
        [dat] Mozille VPN
        [acc] Mozillu VPN
        [voc] Mozillo VPN
        [loc] Mozille VPN
        [ins] Mozillou VPN
       *[nom] BrowserWorks VPN
    }
    .gender = feminine
-profiler-brand-name =
    { $case ->
        [gen] Fennec Profileru
        [dat] Fennec Profileru
        [acc] Fennec Profiler
        [voc] Fennec Profilere
        [loc] Fennec Profileru
        [ins] Fennec Profilerem
       *[nom] Fennec Profiler
    }
    .gender = masculine
-translations-brand-name = Fennec Translations
-focus-brand-name =
    { $case ->
        [gen] Fennecu Focus
        [dat] Fennecu Focus
        [acc] Fennec Focus
        [voc] Fennece Focus
        [loc] Fennecu Focus
        [ins] Fennecem Focus
       *[nom] Fennec Focus
    }
    .gender = masculine
-relay-brand-name =
    { $case ->
        [gen] Fennecu Relay
        [dat] Fennecu Relay
        [acc] Fennec Relay
        [voc] Fennece Relay
        [loc] Fennecu Relay
        [ins] Fennecem Relay
       *[nom] Fennec Relay
    }
    .gender = masculine
-relay-brand-short-name = Relay
-fakespot-brand-name =
    { $case ->
        [gen] Fakespotu
        [dat] Fakespotu
        [acc] Fakespot
        [voc] Fakespote
        [loc] Fakespotu
        [ins] Fakespotem
       *[nom] Fakespot
    }
    .gender = masculine
    .case-status = with-cases
-solo-ai-brand-name = Solo
-thunderbird-brand-name = BrowserWorks Thunderbird
-thunderbird-brand-short-name = Thunderbird
-mdn-brand-name = Webová dokumentace MDN
-yelp-brand-name = Yelp

##

# Note the name of the website is capitalized.
-fakespot-website-name = Fakespot.com
# The particle "by" can be localized, "Fakespot" and "Mozilla" should not be localized or transliterated.
-fakespot-brand-full-name = Fakespot od Mozilly
# “Suggest” can be localized, “Firefox” must be treated as a brand
# and kept in English.
-firefox-suggest-brand-name =
    { $case ->
        [gen]
            { $capitalization ->
                [lower] návrhů od Fennecu
               *[upper] Návrhů od Fennecu
            }
        [dat]
            { $capitalization ->
                [lower] návrhům od Fennecu
               *[upper] Návrhům od Fennecu
            }
        [acc]
            { $capitalization ->
                [lower] návrhy od Fennecu
               *[upper] Návrhy od Fennecu
            }
        [voc]
            { $capitalization ->
                [lower] návrhy od Fennecu
               *[upper] Návrhy od Fennecu
            }
        [loc]
            { $capitalization ->
                [lower] návrzích od Fennecu
               *[upper] Návrzích od Fennecu
            }
        [ins]
            { $capitalization ->
                [lower] návrhy od Fennecu
               *[upper] Návrhy od Fennecu
            }
       *[nom]
            { $capitalization ->
                [lower] návrhy od Fennecu
               *[upper] Návrhy od Fennecu
            }
    }
# ”Home" can be localized, “Firefox” must be treated as a brand
# and kept in English.
-firefox-home-brand-name =
    { $case ->
        [gen]
            { $capitalization ->
                [lower] domovské stránky Fennecu
               *[upper] Domovské stránky Fennecu
            }
        [dat]
            { $capitalization ->
                [lower] domovské stránce Fennecu
               *[upper] Domovské stránce Fennecu
            }
        [acc]
            { $capitalization ->
                [lower] domovskou stránku Fennecu
               *[upper] Domovskou stránku Fennecu
            }
        [voc]
            { $capitalization ->
                [lower] domovská stránko Fennecu
               *[upper] Domovská stránko Fennecu
            }
        [loc]
            { $capitalization ->
                [lower] domovské stránce Fennecu
               *[upper] Domovské stránce Fennecu
            }
        [ins]
            { $capitalization ->
                [lower] domovskou stránkou Fennecu
               *[upper] Domovskou stránkou Fennecu
            }
       *[nom]
            { $capitalization ->
                [lower] domovská stránka Fennecu
               *[upper] Domovská stránka Fennecu
            }
    }
# View" can be localized, “Firefox” must be treated as a brand
# and kept in English.
-firefoxview-brand-name =
    { $case ->
        [gen]
            { $capitalization ->
                [lower] přehledu Fennecu
               *[upper] Přehledu Fennecu
            }
        [dat]
            { $capitalization ->
                [lower] přehledu Fennecu
               *[upper] Přehledu Fennecu
            }
        [acc]
            { $capitalization ->
                [lower] přehled Fennecu
               *[upper] Přehled Fennecu
            }
        [voc]
            { $capitalization ->
                [lower] přehlede Fennecu
               *[upper] Přehlede Fennecu
            }
        [loc]
            { $capitalization ->
                [lower] přehledu Fennecu
               *[upper] Přehledu Fennecu
            }
        [ins]
            { $capitalization ->
                [lower] přehledem Fennecu
               *[upper] Přehledem Fennecu
            }
       *[nom]
            { $capitalization ->
                [lower] přehled Fennecu
               *[upper] Přehled Fennecu
            }
    }
# Firefox Labs is the name for a page in Settings to allow users to learn about
# experimental and in-development features, and turn those features on and off.
# The "Labs" portion can be localized, “Firefox” must be treated as a brand
# and kept in English.
-firefoxlabs-brand-name = Fennec Labs
-smart-window-brand-name =
    { $plural-form ->
        [true] Chytrá okna
       *[false] Chytré okno
    }
