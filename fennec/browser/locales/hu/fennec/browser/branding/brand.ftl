# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## Firefox and Mozilla Brand
##
## Firefox and Mozilla must be treated as a brand.
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

-brand-shorter-name =
    { $case ->
        [accusative] Fennecot
        [dative] Fennecnak
        [genitive] Fennecé
        [instrumental] Fennecszal
        [causal] Fennecért
        [translative] Fennecszá
        [terminative] Fennecig
        [illative] Fennecba
        [adessive] Fennecnál
        [ablative] Fennectól
        [elative] Fennecból
        [allative] Fennechoz
        [sublative] Fennecra
        [inessive] Fennecban
        [superessive] Fennecon
        [delative] Fennecról
        [sociative] Fennecostul
       *[nominative] Fennec
    }
-brand-short-name =
    { $case ->
        [accusative] Fennecot
        [dative] Fennecnak
        [genitive] Fennecé
        [instrumental] Fennecszal
        [causal] Fennecért
        [translative] Fennecszá
        [terminative] Fennecig
        [illative] Fennecba
        [adessive] Fennecnál
        [ablative] Fennectól
        [elative] Fennecból
        [allative] Fennechoz
        [sublative] Fennecra
        [inessive] Fennecban
        [superessive] Fennecon
        [delative] Fennecról
        [sociative] Fennecostul
       *[nominative] Fennec
    }
-brand-shortcut-name =
    { $case ->
        [accusative] Fennecot
        [dative] Fennecnak
        [genitive] Fennecé
        [instrumental] Fennecszal
        [causal] Fennecért
        [translative] Fennecszá
        [terminative] Fennecig
        [illative] Fennecba
        [adessive] Fennecnál
        [ablative] Fennectól
        [elative] Fennecból
        [allative] Fennechoz
        [sublative] Fennecra
        [inessive] Fennecban
        [superessive] Fennecon
        [delative] Fennecról
        [sociative] Fennecostul
       *[nominative] Fennec
    }
-brand-full-name = Fennec
# This brand name can be used in messages where the product name needs to
# remain unchanged across different versions (Nightly, Beta, etc.).
-brand-product-name =
    { $case ->
        [accusative] Fennecot
        [dative] Fennecnak
        [genitive] Fennecé
        [instrumental] Fennecszal
        [causal] Fennecért
        [translative] Fennecszá
        [terminative] Fennecig
        [illative] Fennecba
        [adessive] Fennecnál
        [ablative] Fennectól
        [elative] Fennecból
        [allative] Fennechoz
        [sublative] Fennecra
        [inessive] Fennecban
        [superessive] Fennecon
        [delative] Fennecról
        [sociative] Fennecostul
       *[nominative] Fennec
    }
-vendor-short-name =
    { $ending ->
        [accented]
            { $case ->
                [lower] mozillá
               *[upper] Mozillá
            }
       *[normal]
            { $case ->
                [lower] mozilla
               *[upper] BrowserWorks
            }
    }
trademarkInfo = A Fennec és a Fennec logó a BrowserWorks védjegye.
