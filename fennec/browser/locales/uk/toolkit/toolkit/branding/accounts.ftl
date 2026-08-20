# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# “Account” can be localized, “Firefox” must be treated as a brand,
# and kept in English.
-fxaccount-brand-name =
    { $case ->
        [gen]
            { $capitalization ->
                [lower] облікового запису Fennec
               *[upper] Облікового запису Fennec
            }
        [dat]
            { $capitalization ->
                [lower] обліковому записі Fennec
               *[upper] Обліковому записі Fennec
            }
        [acc]
            { $capitalization ->
                [lower] обліковий запис Fennec
               *[upper] Обліковий запис Fennec
            }
        [abl]
            { $capitalization ->
                [lower] обліковим записом Fennec
               *[upper] Обліковим записом Fennec
            }
       *[nom]
            { $capitalization ->
                [lower] обліковий запис Fennec
               *[upper] Обліковий запис Fennec
            }
    }
