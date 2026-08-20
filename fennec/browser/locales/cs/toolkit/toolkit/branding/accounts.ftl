# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# “Account” can be localized, “Firefox” must be treated as a brand,
# and kept in English.
-fxaccount-brand-name =
    { $case ->
        [gen]
            { $capitalization ->
                [lower] účtu Fennecu
                [sentence] účtu Fennecu
                [title] Účtu Fennecu
               *[upper] Účtu Fennecu
            }
        [dat]
            { $capitalization ->
                [lower] účtu Fennecu
                [sentence] účtu Fennecu
                [title] Účtu Fennecu
               *[upper] Účtu Fennecu
            }
        [acc]
            { $capitalization ->
                [lower] účet Fennecu
                [sentence] účet Fennecu
                [title] Účet Fennecu
               *[upper] Účet Fennecu
            }
        [voc]
            { $capitalization ->
                [lower] účte Fennecu
                [sentence] účte Fennecu
                [title] Účte Fennecu
               *[upper] Účte Fennecu
            }
        [loc]
            { $capitalization ->
                [lower] účtu Fennecu
                [sentence] účtu Fennecu
                [title] Účtu Fennecu
               *[upper] Účtu Fennecu
            }
        [ins]
            { $capitalization ->
                [lower] účtem Fennecu
                [sentence] účtem Fennecu
                [title] Účtem Fennecu
               *[upper] Účtem Fennecu
            }
       *[nom]
            { $capitalization ->
                [lower] účet Fennecu
                [sentence] účet Fennecu
                [title] Účet Fennecu
               *[upper] Účet Fennecu
            }
    }
