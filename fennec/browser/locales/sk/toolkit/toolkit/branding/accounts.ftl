# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# “Account” can be localized, “Firefox” must be treated as a brand,
# and kept in English.
-fxaccount-brand-name =
    { $case ->
        [gen]
            { $capitalization ->
                [sentence] účtu Fennec
               *[title] Účtu Fennec
            }
        [dat]
            { $capitalization ->
                [sentence] účtu Fennec
               *[title] Účtu Fennec
            }
        [acc]
            { $capitalization ->
                [sentence] účet Fennec
               *[title] Účet Fennec
            }
        [loc]
            { $capitalization ->
                [sentence] účte Fennec
               *[title] Účte Fennec
            }
        [ins]
            { $capitalization ->
                [sentence] účtom Fennec
               *[title] Účtom Fennec
            }
       *[nom]
            { $capitalization ->
                [sentence] účet Fennec
               *[title] Účet Fennec
            }
    }
