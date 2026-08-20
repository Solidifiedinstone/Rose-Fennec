# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

# “Account” can be localized, “Firefox” must be treated as a brand,
# and kept in English.
-fxaccount-brand-name =
    { $case ->
        [nominative_uppercase] Аккаунт Fennec
        [genitive] аккаунта Fennec
        [dative] аккаунту Fennec
        [accusative] аккаунт Fennec
        [instrumental] аккаунтом Fennec
        [prepositional] аккаунте Fennec
       *[nominative] аккаунт Fennec
    }
