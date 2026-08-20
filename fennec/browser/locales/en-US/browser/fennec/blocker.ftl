# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

## Ad blocking

fennec-blocker-header = Ad Blocking

fennec-blocker-intro-description = Blocks ads, tracking scripts, and other unwanted requests for faster page loads and fewer distractions.

fennec-blocker-setting-on =
    .label = On

fennec-blocker-setting-on-summary = Blocks ads and trackers with minimal impact on page loading.

fennec-blocker-setting-on-description = Fennec blocks the following:

fennec-blocker-blocks-ads = Ads and ad network requests

fennec-blocker-blocks-tracking = Tracking scripts and pixels

fennec-blocker-blocks-annoyances = Nuisance popups and overlays (with annoyance lists enabled)

fennec-blocker-partner-funding-title = Support Fennec’s development

fennec-blocker-partner-funding-description = Fennec is free, open source, and independent. Allowing ads on search partner pages is how Fennec funds development and infrastructure. You can turn this off at any time, but keeping it on is the easiest way to support the project.

fennec-blocker-setting-off =
    .label = Off

fennec-blocker-setting-off-description = No ads or trackers are blocked by Fennec. Third-party extensions can still block content independently.

fennec-blocker-dropdown-label =
    .value = Search partner ads:

fennec-blocker-dropdown-option-partner-exception =
    .label = Allow on Fennec search partners

fennec-blocker-dropdown-option-block-everything =
    .label = Disallow on Fennec search partners

fennec-blocker-manage-filter-lists =
    .label = Manage Filter Lists…

fennec-blocker-custom-filter-lists =
    .label = Custom Filter Lists…

fennec-blocker-filter-lists-window =
    .title = Ad blocking filter lists

fennec-blocker-filter-lists-dialog =
    .buttonlabelaccept = Save Changes
    .buttonaccesskeyaccept = S

fennec-blocker-filter-lists-description =
    .value = Choose which filter lists are active.

# Variables:
#   $activeCount (Number) - Number of enabled filter lists.
#   $totalCount (Number) - Total number of available filter lists.
fennec-blocker-filter-lists-active-count =
    .value = { $activeCount } active of { $totalCount }

fennec-blocker-filter-lists-column-enabled =
    .label = Enabled

fennec-blocker-filter-lists-column-name =
    .label = Filter List

fennec-blocker-filter-lists-column-category =
    .label = Category

fennec-blocker-filter-lists-enable =
    .label = Enable

fennec-blocker-filter-lists-disable =
    .label = Disable

fennec-blocker-extension-detected = Fennec now has built-in ad blocking. You can review your setup in settings.

fennec-blocker-extension-detected-learn-more =
    .label = Learn more

fennec-blocker-extension-detected-dismiss =
    .label = Don’t show again

fennec-blocker-extension-install-warning = Fennec already has a built-in ad blocker. Running two ad blockers can cause pages to break or load slowly.

fennec-blocker-extension-install-got-it =
    .label = Got it

fennec-blocker-extension-install-learn-more =
    .label = Learn more

# Variables:
#   $extensionName (String) - Name of the third-party extension controlling ad blocking.
fennec-blocker-third-party-notice-description = { $extensionName } is also blocking ads. Running two ad blockers can cause issues.

permissions-exceptions-fennec-blocker-window2 =
    .title = Exceptions for Ad Blocking
    .style = { permissions-window2.style }

permissions-exceptions-manage-fennec-blocker-desc = You can specify which websites have ad blocking turned off. Type the exact address of the site you want to manage and then click Add Exception.

fennec-blocker-toolbar-button =
    .label = Ad blocking
    .tooltiptext = Ad blocking

fennec-blocker-panel-not-available = Not available on this page

fennec-blocker-panel-disabled = Ad blocking is off

fennec-blocker-panel-partner-allowed = Ads allowed for search partners

# Variables:
#   $count (Number) - Number of requests blocked on this page.
fennec-blocker-panel-hero-count = { $count } blocked

fennec-blocker-panel-hero-paused = Paused

# Variables:
#   $host (String) - Host of the current page.
fennec-blocker-panel-hero-subtitle = on { $host }

fennec-blocker-panel-category-ads = Ads

fennec-blocker-panel-category-trackers = Trackers

fennec-blocker-panel-category-popups = Pop-ups

fennec-blocker-panel-see-all = See everything blocked

fennec-blocker-panel-toggle2 =
    .label = Block ads on this site

fennec-blocker-panel-paused-card = This site is on your allowlist. Ads, pop-ups, and trackers can load until you turn blocking back on.

fennec-blocker-panel-allowlist = Manage allowlist

# Variables:
#   $count (Number) - Number of sites on the allowlist.
fennec-blocker-panel-allowlist-count =
    { $count ->
        [one] { $count } site
       *[other] { $count } sites
    }

# Variables:
#   $count (Number) - Number of requests blocked since installation.
#   $size (String) - Localized estimate of data saved, e.g. "41 MB".
fennec-blocker-panel-footer-stats = <b data-l10n-name="total">{ $count }</b> blocked all time · { $size } saved

fennec-blocker-panel-footer-settings = Settings

fennec-blocker-panel-back =
    .aria-label = Back

fennec-blocker-panel-detail-title = Blocked on this page

fennec-blocker-panel-detail-section-ads = Advertising

fennec-blocker-panel-detail-section-trackers = Trackers

fennec-blocker-panel-detail-section-popups = Pop-ups

# Variables:
#   $count (Number) - Number of blocked pop-up windows.
fennec-blocker-panel-detail-popup-note =
    { $count ->
        [one] { $count } pop-up window was blocked automatically.
       *[other] { $count } pop-up windows were blocked automatically.
    }

# Variables:
#   $domain (String) - Domain the user can allow on the current site.
fennec-blocker-panel-allow-domain = Allow
    .aria-label = Allow { $domain }

# Variables:
#   $count (Number) - Number of times requests to the domain were blocked.
fennec-blocker-panel-domain-count = ×{ $count }

fennec-blocker-show-badge-pref =
    .label = Show blocked count on toolbar button

fennec-blocker-filter-lists-category-core = Default

fennec-blocker-filter-lists-category-privacy = Privacy

fennec-blocker-filter-lists-category-annoyances = Annoyances

fennec-blocker-filter-lists-category-optional = Optional

fennec-blocker-filter-lists-category-regional = Regional

fennec-blocker-filter-lists-search =
    .placeholder = Search filter lists…

fennec-blocker-filter-lists-empty-state = No filter lists available.

fennec-blocker-filter-lists-refresh-now =
    .label = Refresh Now

# Variables:
#   $date (String) - Human-readable date/time of the last successful list update.
fennec-blocker-filter-lists-last-updated = Updated { $date }

fennec-blocker-filter-lists-never-updated =
    .value = Not yet updated

# Variables:
#   $date (String) - Human-readable date/time of the next scheduled list update.
fennec-blocker-filter-lists-next-refresh =
    .value = Next refresh: { $date }

fennec-blocker-filter-lists-next-refresh-unknown =
    .value = Next refresh: unknown

fennec-blocker-custom-filter-lists-window =
    .title = Custom Filter Lists

fennec-blocker-custom-filter-lists-dialog =
    .buttonlabelaccept = Save Changes
    .buttonaccesskeyaccept = S

fennec-blocker-custom-filter-lists-description = Add URLs of custom filter lists. Lists will be fetched and applied alongside built-in filters.

fennec-blocker-filter-lists-custom-heading =
    .value = Custom Filter Lists

fennec-blocker-filter-lists-custom-input =
    .placeholder = Enter filter list URL…

fennec-blocker-filter-lists-custom-url-label =
    .value = Filter list URL

fennec-blocker-filter-lists-custom-col =
    .label = URL

fennec-blocker-filter-lists-custom-add =
    .label = Add

fennec-blocker-filter-lists-custom-remove =
    .label = Remove

fennec-blocker-filter-lists-custom-remove-all =
    .label = Remove All

fennec-blocker-filter-lists-custom-empty =
    .value = No custom filter lists added.

fennec-blocker-custom-filters =
    .label = My Filters…

fennec-blocker-custom-filters-window =
    .title = My Filters

fennec-blocker-custom-filters-dialog =
    .buttonlabelaccept = Save Changes
    .buttonaccesskeyaccept = S

fennec-blocker-custom-filters-description = Add your own ad blocking rules. These use standard uBlock Origin filter syntax and are applied alongside your enabled filter lists.

fennec-blocker-custom-filters-empty =
    .value = No custom filters.

# Variables:
#   $count (Number) - Number of custom filters currently configured.
fennec-blocker-custom-filters-status =
    { $count ->
        [0] No custom filters.
        [one] 1 custom filter.
       *[other] { $count } custom filters.
    }

fennec-blocker-custom-filters-status-unsaved = Unsaved changes.

fennec-blocker-custom-filters-import =
    .label = Import…

fennec-blocker-custom-filters-export =
    .label = Export…

fennec-blocker-custom-filters-load-error-title = Load failed

fennec-blocker-custom-filters-load-error = Custom filters could not be loaded.

fennec-blocker-custom-filters-save-error-title = Save failed

fennec-blocker-custom-filters-save-error = Custom filters could not be saved.

fennec-blocker-custom-filters-import-error-title = Import failed

fennec-blocker-custom-filters-import-error = The selected file could not be imported.

fennec-blocker-custom-filters-export-error-title = Export failed

fennec-blocker-custom-filters-export-error = Custom filters could not be exported.

fennec-blocker-custom-filters-import-picker-title = Import custom filters

fennec-blocker-custom-filters-export-picker-title = Export custom filters

fennec-blocker-custom-filters-import-replace-title = Replace current filters?

fennec-blocker-custom-filters-import-replace-message = Importing will replace everything currently in the editor.

fennec-blocker-extension-fallback-name-this = this extension

fennec-blocker-extension-fallback-name-your = your extension

fennec-blocker-spotlight-title = Fennec now includes ad blocking

# Variables:
#   $extensionName (String) - Name of the user’s existing ad-blocking extension.
fennec-blocker-spotlight-subtitle = We noticed you have { $extensionName } installed. Fennec now has its own ad blocker. Using it helps support Fennec, but it’s your call.

fennec-blocker-spotlight-primary-button = Keep my current setup

fennec-blocker-spotlight-secondary-button = Review settings

fennec-blocker-prompt-title = Fennec ad blocking

# Variables:
#   $extensionName (String) - Name of the extension that conflicts with built-in ad blocking.
fennec-blocker-reenable-conflict-message = Running both Fennec ad blocking and “{ $extensionName }” can cause pages to break. Which would you like to keep?

fennec-blocker-reenable-use-built-in = Use built-in blocker

fennec-blocker-reenable-keep-extension = Keep extension blocker

fennec-blocker-extension-install-manage-settings = You can manage ad blocking in Settings > Privacy & Security.

fennec-blocker-extension-install-anyway = Install anyway

fennec-blocker-extension-install-keep-built-in = Keep using built-in blocker

pane-fennec-blocker-title = Ad Blocking
    .title = { pane-fennec-blocker-title }

fennec-blocker-pane-header =
    .heading = Ad Blocking

fennec-blocker-group =
    .label = Ad blocking
    .description = Blocks ads, tracking scripts, and other unwanted requests for faster page loads and fewer distractions.

fennec-blocker-enabled-toggle =
    .label = Block ads and trackers
    .description = Blocks ads and trackers with minimal impact on page loading.

# Variables:
#   $extensionName (String) - Name of the third-party extension that also blocks ads.
fennec-blocker-extension-notice =
    .message = { $extensionName } is also blocking ads. Running two ad blockers can cause issues.

fennec-blocker-partner-select =
    .label = Search partner ads
    .description = Fennec is free, open source, and independent. Allowing ads on search partner pages is how Fennec funds development and infrastructure. You can turn this off at any time, but keeping it on is the easiest way to support the project.

fennec-blocker-lists-group =
    .label = Filter lists

fennec-blocker-manage-lists-button =
    .label = Manage filter lists

fennec-blocker-custom-lists-button =
    .label = Custom filter lists

fennec-blocker-my-filters-button =
    .label = My filters

fennec-blocker-exceptions-group =
    .label = Exceptions

fennec-blocker-exceptions-button =
    .label = Manage exceptions

fennec-blocked-page-title = Fennec blocked this page

fennec-blocked-page-heading = Fennec blocked this page

fennec-blocked-page-description = This page was blocked by an ad blocking filter rule.

fennec-blocked-page-details =
    .aria-label = Blocked page details

fennec-blocked-page-blocked-url-label = Blocked URL

fennec-blocked-page-matched-rule-label = Matched rule

fennec-blocked-page-unavailable = Unavailable

fennec-blocked-page-hint = “Load anyway” will temporarily allow this site for the rest of your session.

fennec-blocked-page-go-back = Go back

fennec-blocked-page-load-anyway = Load anyway
