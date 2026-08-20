# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

fennec-blocker-header = 广告拦截

fennec-blocker-intro-description = 拦截广告、跟踪脚本和其他不必要的请求，以加快页面加载速度并减少干扰。

fennec-blocker-setting-on =
    .label = 开启

fennec-blocker-setting-on-description = Fennec 拦截了以下内容：

fennec-blocker-setting-off =
    .label = 关闭

fennec-blocker-setting-off-description = Fennec 不拦截任何广告或跟踪器。第三方扩展仍可独立拦截内容。

fennec-blocker-dropdown-label =
    .value = 搜索合作伙伴广告：

fennec-blocker-dropdown-option-partner-exception =
    .label = 允许 Fennec 搜索合作伙伴的广告

fennec-blocker-dropdown-option-block-everything =
    .label = 禁止 Fennec 搜索合作伙伴的广告

fennec-blocker-manage-filter-lists =
    .label = 管理过滤器列表…

fennec-blocker-filter-lists-window =
    .title = 广告拦截过滤列表

fennec-blocker-filter-lists-dialog =
    .buttonlabelaccept = 保存更改
    .buttonaccesskeyaccept = S

fennec-blocker-filter-lists-description =
    .value = 选择要启用的过滤列表。

fennec-blocker-filter-lists-active-count =
    .value = { $activeCount } / { $totalCount } 已启用

fennec-blocker-filter-lists-column-enabled =
    .label = 已启用

fennec-blocker-filter-lists-column-name =
    .label = 过滤器列表

fennec-blocker-filter-lists-column-category =
    .label = 类别

fennec-blocker-filter-lists-enable =
    .label = 启用

fennec-blocker-filter-lists-disable =
    .label = 关闭

fennec-blocker-extension-detected = Fennec 现已内置广告拦截功能。您可以在设置中查看您的配置。

fennec-blocker-extension-detected-learn-more =
    .label = 了解更多

fennec-blocker-extension-detected-dismiss =
    .label = 不再显示

fennec-blocker-extension-install-warning = Fennec 已内置广告拦截器。同时运行两个广告拦截器可能导致页面出错或加载缓慢。

fennec-blocker-extension-install-got-it =
    .label = 知道了

fennec-blocker-extension-install-learn-more =
    .label = 了解更多

fennec-blocker-third-party-notice-description = { $extensionName } 也在拦截广告。同时运行两个广告拦截器可能会引发问题。

fennec-blocker-filter-lists-category-core = 默认

fennec-blocker-filter-lists-category-annoyances = 干扰元素

fennec-blocker-filter-lists-category-optional = 可选

fennec-blocker-filter-lists-category-regional = 特定语言

fennec-blocker-filter-lists-empty-state = 没有可用的过滤列表。

fennec-blocker-extension-fallback-name-this = 此扩展

fennec-blocker-extension-fallback-name-your = 您的扩展

fennec-blocker-spotlight-title = Fennec 现已包含广告拦截功能

fennec-blocker-spotlight-subtitle = 我们注意到您安装了 { $extensionName }。Fennec 现已内置广告拦截器。使用内置拦截器有助于支持 Fennec，但最终由您决定。

fennec-blocker-spotlight-primary-button = 保留我当前的设置

fennec-blocker-spotlight-secondary-button = 查看设置

fennec-blocker-prompt-title = Fennec 广告拦截

fennec-blocker-reenable-conflict-message = 同时运行 Fennec 广告拦截和"{ $extensionName }"可能导致页面出错。您想保留哪一个？

fennec-blocker-filter-lists-category-privacy = 隐私

fennec-blocker-reenable-use-built-in = 使用内置拦截器

fennec-blocker-reenable-keep-extension = 保留扩展拦截器

fennec-blocker-extension-install-manage-settings = 您可以在"设置 > 隐私与安全"中管理广告拦截。

fennec-blocker-extension-install-anyway = 仍然安装

fennec-blocker-extension-install-keep-built-in = 继续使用内置拦截器

fennec-blocked-page-title = Fennec 拦截了此页面

fennec-blocked-page-heading = Fennec 拦截了此页面

fennec-blocked-page-description = 此页面被广告拦截过滤规则拦截。

fennec-blocked-page-details =
    .aria-label = 已拦截页面详情

fennec-blocked-page-blocked-url-label = 已拦截的网址

fennec-blocked-page-matched-rule-label = 匹配规则

fennec-blocked-page-unavailable = 不可用

fennec-blocked-page-hint = "仍然加载"将在此会话期间临时允许该网站。

fennec-blocked-page-go-back = 返回

fennec-blocked-page-load-anyway = 仍然加载

fennec-blocker-toolbar-button =
    .label = 广告拦截
    .tooltiptext = 广告拦截

fennec-blocker-panel-not-available = 此页面不可用

fennec-blocker-panel-toggle =
    .label = 此网站的广告拦截
    .description = 拦截此网站上的广告和跟踪器。

fennec-blocker-panel-disabled = 广告拦截已关闭

fennec-blocker-panel-site-excepted = 允许此网站显示广告

fennec-blocker-panel-partner-allowed = 允许搜索合作伙伴显示广告

fennec-blocker-stats =
    { $count ->
        [one] 已在此网站拦截 { $count } 个广告
       *[other] 已在此网站拦截 { $count } 个广告
    }

fennec-blocker-panel-settings-button = 广告拦截设置

fennec-blocker-show-badge-pref =
    .label = 在工具栏按钮上显示已拦截数量

fennec-blocker-setting-on-summary = 拦截广告和跟踪器，对页面加载影响最小。

fennec-blocker-blocks-ads = 广告和广告网络请求

fennec-blocker-blocks-tracking = 跟踪脚本和像素

fennec-blocker-blocks-annoyances = 干扰弹窗和覆盖层（启用干扰元素列表后）

fennec-blocker-partner-funding-title = 支持 Fennec 的开发

fennec-blocker-partner-funding-description = Fennec 是免费、开源且独立的浏览器。允许搜索合作伙伴页面上的广告是 Fennec 为开发和基础设施提供资金的方式。您可以随时关闭此功能，但保持开启是支持该项目的最简单方式。

fennec-blocker-custom-filter-lists =
    .label = 自定义过滤列表…

permissions-exceptions-fennec-blocker-window2 =
    .title = 广告拦截例外
    .style = { permissions-window2.style }

permissions-exceptions-manage-fennec-blocker-desc = 您可以指定哪些网站关闭广告拦截。输入要管理的网站的确切地址，然后点击添加例外。

fennec-blocker-filter-lists-search =
    .placeholder = 搜索过滤列表…

fennec-blocker-filter-lists-refresh-now =
    .label = 立即刷新

fennec-blocker-filter-lists-last-updated = 更新于 { $date }

fennec-blocker-filter-lists-never-updated =
    .value = 尚未更新

fennec-blocker-filter-lists-next-refresh =
    .value = 下次刷新时间：{ $date }

fennec-blocker-filter-lists-next-refresh-unknown =
    .value = 下次刷新时间：未知

fennec-blocker-custom-filter-lists-window =
    .title = 自定义过滤列表

fennec-blocker-custom-filter-lists-dialog =
    .buttonlabelaccept = 保存更改
    .buttonaccesskeyaccept = S

fennec-blocker-custom-filter-lists-description = 添加自定义过滤列表的网址。这些列表将被获取并与内置过滤器一起应用。

fennec-blocker-filter-lists-custom-heading =
    .value = 自定义过滤列表

fennec-blocker-filter-lists-custom-input =
    .placeholder = 输入过滤列表网址…

fennec-blocker-filter-lists-custom-url-label =
    .value = 过滤列表网址

fennec-blocker-filter-lists-custom-col =
    .label = 网址

fennec-blocker-filter-lists-custom-add =
    .label = 添加

fennec-blocker-filter-lists-custom-remove =
    .label = 删除

fennec-blocker-filter-lists-custom-remove-all =
    .label = 删除所有

fennec-blocker-filter-lists-custom-empty =
    .value = 未添加自定义过滤列表。

fennec-blocker-custom-filters =
    .label = 我的过滤器…

fennec-blocker-custom-filters-window =
    .title = 我的过滤器

fennec-blocker-custom-filters-dialog =
    .buttonlabelaccept = 保存修改
    .buttonaccesskeyaccept = S

fennec-blocker-custom-filters-description = 添加您自己的广告拦截规则。这些规则使用标准的 uBlock Origin 过滤语法，并与您已启用的过滤列表一起应用。

fennec-blocker-custom-filters-empty =
    .value = 没有自定义过滤器。

fennec-blocker-custom-filters-status =
    { $count ->
        [0] 没有自定义过滤器。
        [one] 1 条自定义过滤器。
       *[other] { $count } 条自定义过滤器。
    }

fennec-blocker-custom-filters-status-unsaved = 有未保存的更改。

fennec-blocker-custom-filters-import =
    .label = 导入…

fennec-blocker-custom-filters-export =
    .label = 导出…

fennec-blocker-custom-filters-load-error-title = 加载失败

fennec-blocker-custom-filters-load-error = 无法加载自定义过滤器。

fennec-blocker-custom-filters-save-error-title = 保存失败

fennec-blocker-custom-filters-save-error = 无法保存自定义过滤器。

fennec-blocker-custom-filters-import-error-title = 导入失败

fennec-blocker-custom-filters-import-error = 无法导入所选文件。

fennec-blocker-custom-filters-export-error-title = 导出失败

fennec-blocker-custom-filters-export-error = 无法导出自定义过滤器。

fennec-blocker-custom-filters-import-picker-title = 导入自定义过滤器

fennec-blocker-custom-filters-export-picker-title = 导出自定义过滤器

fennec-blocker-custom-filters-import-replace-title = 是否替换当前过滤器？

fennec-blocker-custom-filters-import-replace-message = 导入将替换编辑器中的所有当前内容。
