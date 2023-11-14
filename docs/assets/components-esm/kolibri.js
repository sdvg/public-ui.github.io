/*! * KoliBri - The accessible HTML-Standard */ import{p as promiseResolve,b as bootstrapLazy}from"./index-0bc40dc4.js";export{s as setNonce}from"./index-0bc40dc4.js";import{g as globalScripts}from"./app-globals-e75cd996.js";import"./index-328ae082.js";import"./dev.utils-0ab1db26.js";import"./reuse-b3566e4c.js";const patchBrowser=()=>{const e=import.meta.url,a={};return""!==e&&(a.resourcesUrl=new URL(".",e).href),promiseResolve(a)};patchBrowser().then((e=>(globalScripts(),bootstrapLazy(JSON.parse('[["kol-span-wc",[[4,"kol-span-wc",{"_accessKey":[1,"_access-key"],"_allowMarkdown":[4,"_allow-markdown"],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_label":[1],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_allowMarkdown":["validateAllowMarkdown"],"_hideLabel":["validateHideLabel"],"_icons":["validateIcons"],"_label":["validateLabel"]}]]],["kol-table",[[33,"kol-table",{"_data":[1],"_dataFoot":[1,"_data-foot"],"_headers":[1],"_label":[1],"_minWidth":[1,"_min-width"],"_pagination":[8],"state":[32]},null,{"_data":["validateData"],"_dataFoot":["validateDataFoot"],"_headers":["validateHeaders"],"_label":["validateLabel"],"_minWidth":["validateMinWidth"],"_pagination":["validatePagination"]}]]],["kol-input-checkbox",[[33,"kol-input-checkbox",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_checked":[1540],"_hideError":[1540,"_hide-error"],"_disabled":[4],"_error":[1],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_indeterminate":[1540],"_label":[1],"_name":[1],"_on":[16],"_required":[4],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[8],"_variant":[1],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_checked":["validateChecked"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_indeterminate":["validateIndeterminate"],"_label":["validateLabel"],"_name":["validateName"],"_on":["validateOn"],"_required":["validateRequired"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"],"_variant":["validateVariant"]}]]],["kol-input-color",[[33,"kol-input-color",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_name":[1],"_on":[16],"_smartButton":[1,"_smart-button"],"_suggestions":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_name":["validateName"],"_on":["validateOn"],"_smartButton":["validateSmartButton"],"_suggestions":["validateSuggestions"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-date",[[33,"kol-input-date",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_max":[1],"_min":[1],"_name":[1],"_on":[16],"_readOnly":[4,"_read-only"],"_required":[4],"_smartButton":[1,"_smart-button"],"_suggestions":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_step":[2],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_type":[1],"_value":[1025],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_max":["validateMax"],"_min":["validateMin"],"_name":["validateName"],"_on":["validateOn"],"_readOnly":["validateReadOnly"],"_required":["validateRequired"],"_smartButton":["validateSmartButton"],"_suggestions":["validateSuggestions"],"_step":["validateStep"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_type":["validateType"],"_value":["validateValue"]}]]],["kol-input-email",[[33,"kol-input-email",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hasCounter":[4,"_has-counter"],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_maxLength":[2,"_max-length"],"_multiple":[4],"_name":[1],"_on":[16],"_pattern":[1],"_placeholder":[1],"_readOnly":[4,"_read-only"],"_required":[4],"_smartButton":[1,"_smart-button"],"_suggestions":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hasCounter":["validateHasCounter"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_maxLength":["validateMaxLength"],"_multiple":["validateMultiple"],"_name":["validateName"],"_on":["validateOn"],"_pattern":["validatePattern"],"_placeholder":["validatePlaceholder"],"_readOnly":["validateReadOnly"],"_required":["validateRequired"],"_suggestions":["validateSuggestions"],"_smartButton":["validateSmartButton"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-file",[[33,"kol-input-file",{"_accept":[1],"_accessKey":[1,"_access-key"],"_alert":[1540],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_multiple":[4],"_name":[1],"_on":[16],"_required":[4],"_smartButton":[1,"_smart-button"],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1],"state":[32]},null,{"_accept":["validateAccept"],"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_multiple":["validateMultiple"],"_name":["validateName"],"_on":["validateOn"],"_required":["validateRequired"],"_smartButton":["validateSmartButton"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-number",[[33,"kol-input-number",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_max":[8],"_min":[8],"_name":[1],"_on":[16],"_placeholder":[1],"_readOnly":[4,"_read-only"],"_required":[4],"_smartButton":[1,"_smart-button"],"_suggestions":[1],"_step":[2],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1032],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_max":["validateMax"],"_min":["validateMin"],"_name":["validateName"],"_on":["validateOn"],"_placeholder":["validatePlaceholder"],"_readOnly":["validateReadOnly"],"_required":["validateRequired"],"_smartButton":["validateSmartButton"],"_suggestions":["validateSuggestions"],"_step":["validateStep"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-password",[[33,"kol-input-password",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hasCounter":[4,"_has-counter"],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_maxLength":[2,"_max-length"],"_name":[1],"_on":[16],"_pattern":[1],"_placeholder":[1],"_readOnly":[4,"_read-only"],"_required":[4],"_smartButton":[1,"_smart-button"],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hasCounter":["validateHasCounter"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_maxLength":["validateMaxLength"],"_name":["validateName"],"_on":["validateOn"],"_pattern":["validatePattern"],"_placeholder":["validatePlaceholder"],"_readOnly":["validateReadOnly"],"_required":["validateRequired"],"_smartButton":["validateSmartButton"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-radio",[[33,"kol-input-radio",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_id":[1],"_label":[1],"_name":[1],"_on":[16],"_options":[1],"_orientation":[1],"_required":[4],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[8],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideLabel":["validateHideLabel"],"_hideError":["validateHideError"],"_hint":["validateHint"],"_id":["validateId"],"_label":["validateLabel"],"_name":["validateName"],"_on":["validateOn"],"_options":["validateOptions"],"_orientation":["validateOrientation"],"_required":["validateRequired"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-range",[[33,"kol-input-range",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_max":[2],"_min":[2],"_name":[1],"_on":[16],"_step":[2],"_suggestions":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[2],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_max":["validateMax"],"_min":["validateMin"],"_name":["validateName"],"_on":["validateOn"],"_step":["validateStep"],"_suggestions":["validateSuggestions"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-text",[[33,"kol-input-text",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hasCounter":[4,"_has-counter"],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_maxLength":[2,"_max-length"],"_name":[1],"_on":[16],"_pattern":[1],"_placeholder":[1],"_readOnly":[4,"_read-only"],"_required":[4],"_suggestions":[1],"_smartButton":[1,"_smart-button"],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_type":[1],"_value":[1025],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hasCounter":["validateHasCounter"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_maxLength":["validateMaxLength"],"_name":["validateName"],"_on":["validateOn"],"_pattern":["validatePattern"],"_placeholder":["validatePlaceholder"],"_readOnly":["validateReadOnly"],"_required":["validateRequired"],"_suggestions":["validateSuggestions"],"_smartButton":["validateSmartButton"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_type":["validateType"],"_value":["validateValue"]}]]],["kol-textarea",[[33,"kol-textarea",{"_accessKey":[1,"_access-key"],"_adjustHeight":[4,"_adjust-height"],"_alert":[1540],"_disabled":[4],"_error":[1],"_hasCounter":[4,"_has-counter"],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_id":[1],"_label":[1],"_maxLength":[2,"_max-length"],"_name":[1],"_on":[16],"_placeholder":[1],"_readOnly":[4,"_read-only"],"_resize":[1],"_required":[4],"_rows":[1026],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_adjustHeight":["validateAdjustHeight"],"_alert":["validateAlert"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hasCounter":["validateHasCounter"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_id":["validateId"],"_label":["validateLabel"],"_maxLength":["validateMaxLength"],"_name":["validateName"],"_on":["validateOn"],"_placeholder":["validatePlaceholder"],"_readOnly":["validateReadOnly"],"_resize":["validateResize"],"_required":["validateRequired"],"_rows":["validateRows"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-toast-container",[[33,"kol-toast-container",{"state":[32],"enqueue":[64],"closeAll":[64]}]]],["kol-nav",[[33,"kol-nav",{"_ariaCurrentValue":[8,"_aria-current-value"],"_collapsible":[4],"_hasCompactButton":[4,"_has-compact-button"],"_hideLabel":[4,"_hide-label"],"_label":[1],"_links":[1],"_orientation":[1],"state":[32]},null,{"_ariaCurrentValue":["validateAriaCurrentValue"],"_collapsible":["validateCollapsible"],"_hasCompactButton":["validateHasCompactButton"],"_hideLabel":["validateHideLabel"],"_label":["validateLabel"],"_links":["validateLinks"],"_orientation":["validateOrientation"]}]]],["kol-accordion",[[33,"kol-accordion",{"_label":[1],"_level":[2],"_on":[16],"_open":[1540],"state":[32]},null,{"_label":["validateLabel"],"_level":["validateLevel"],"_on":["validateOn"],"_open":["validateOpen"]}]]],["kol-breadcrumb",[[33,"kol-breadcrumb",{"_label":[1],"_links":[1],"state":[32]},null,{"_label":["validateLabel"],"_links":["validateLinks"]}]]],["kol-card",[[33,"kol-card",{"_on":[16],"_hasCloser":[4,"_has-closer"],"_label":[1],"_level":[2],"state":[32]},null,{"_on":["validateOn"],"_hasCloser":["validateHasCloser"],"_label":["validateLabel"],"_level":["validateLevel"]}]]],["kol-link-group",[[33,"kol-link-group",{"_listStyleType":[1,"_list-style-type"],"_label":[1],"_links":[1],"_orientation":[1],"state":[32]},null,{"_label":["validateLabel"],"_listStyleType":["validateListStyleType"],"_links":["validateLinks"],"_orientation":["validateOrientation"]}]]],["kol-quote",[[33,"kol-quote",{"_label":[1],"_href":[1],"_quote":[1],"_variant":[1],"state":[32]},null,{"_label":["validateLabel"],"_href":["validateHref"],"_quote":["validateQuote"],"_variant":["validateVariant"]}]]],["kol-tabs",[[33,"kol-tabs",{"_align":[1],"_label":[1],"_on":[16],"_selected":[1538],"_tabs":[1],"state":[32]},null,{"_align":["validateAlign"],"_label":["validateLabel"],"_on":["validateOn"],"_selected":["validateSelected"],"_tabs":["validateTabs"]}]]],["kol-version",[[33,"kol-version",{"_label":[1],"state":[32]},null,{"_label":["validateLabel"]}]]],["kol-button-link",[[33,"kol-button-link",{"_accessKey":[1,"_access-key"],"_ariaControls":[1,"_aria-controls"],"_ariaExpanded":[4,"_aria-expanded"],"_ariaSelected":[4,"_aria-selected"],"_disabled":[4],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_id":[1],"_label":[1],"_name":[1],"_on":[16],"_role":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_type":[1],"_value":[8]}]]],["kol-link-button",[[33,"kol-link-button",{"_accessKey":[1,"_access-key"],"_customClass":[1,"_custom-class"],"_download":[1],"_hideLabel":[4,"_hide-label"],"_href":[1],"_icons":[1],"_label":[1],"_listenAriaCurrent":[8,"_listen-aria-current"],"_on":[16],"_role":[1],"_tabIndex":[2,"_tab-index"],"_target":[1],"_targetDescription":[1,"_target-description"],"_tooltipAlign":[1,"_tooltip-align"],"_variant":[1]}]]],["kol-skip-nav",[[33,"kol-skip-nav",{"_label":[1],"_links":[1],"state":[32]},null,{"_label":["validateLabel"],"_links":["validateLinks"]}]]],["kol-split-button",[[33,"kol-split-button",{"_ariaControls":[1,"_aria-controls"],"_ariaExpanded":[4,"_aria-expanded"],"_ariaSelected":[4,"_aria-selected"],"_customClass":[1,"_custom-class"],"_disabled":[4],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_id":[1],"_label":[1],"_name":[1],"_on":[16],"_role":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_type":[1],"_value":[8],"_variant":[1],"state":[32]}]]],["kol-abbr",[[33,"kol-abbr",{"_label":[1],"_tooltipAlign":[1,"_tooltip-align"],"state":[32]},null,{"_label":["validateLabel"],"_tooltipAlign":["validateTooltipAlign"]}]]],["kol-details",[[33,"kol-details",{"_label":[1],"_on":[16],"_open":[1540],"state":[32]},null,{"_label":["validateLabel"],"_on":["validateOn"],"_open":["validateOpen"]}]]],["kol-span",[[33,"kol-span",{"_accessKey":[1,"_access-key"],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_label":[1]}]]],["kol-avatar",[[33,"kol-avatar",{"_src":[1],"_label":[1]}]]],["kol-button-group",[[33,"kol-button-group"]]],["kol-form",[[1,"kol-form",{"_on":[16],"_requiredText":[8,"_required-text"],"state":[32]},null,{"_on":["validateOn"],"_requiredText":["validateRequiredText"]}]]],["kol-heading",[[33,"kol-heading",{"_label":[1],"_level":[2],"_secondaryHeadline":[1,"_secondary-headline"]}]]],["kol-image",[[33,"kol-image",{"_alt":[1],"_loading":[1],"_sizes":[1],"_src":[1],"_srcset":[1],"state":[32]},null,{"_alt":["validateAlt"],"_loading":["validateLoading"],"_sizes":["validateSizes"],"_src":["validateSrc"],"_srcset":["validateSrcset"]}]]],["kol-kolibri",[[33,"kol-kolibri",{"_animate":[4],"_color":[1],"_labeled":[4],"state":[32]},null,{"_animate":["validateAnimate"],"_color":["validateColor"],"_labeled":["validateLabeled"]}]]],["kol-logo",[[33,"kol-logo",{"_org":[1],"state":[32]},null,{"_org":["validateOrg"]}]]],["kol-modal",[[33,"kol-modal",{"_activeElement":[1040],"_label":[1],"_on":[16],"_width":[1],"state":[32]},null,{"_activeElement":["validateActiveElement"],"_label":["validateLabel"],"_on":["validateOn"],"_width":["validateWidth"]}]]],["kol-popover-wc",[[4,"kol-popover-wc",{"_align":[1],"_show":[1540],"state":[32]},null,{"_align":["validateAlign"],"_show":["validateShow"]}]]],["kol-progress",[[33,"kol-progress",{"_label":[1],"_max":[2],"_unit":[1],"_value":[2],"_variant":[1],"state":[32]},null,{"_label":["validateLabel"],"_max":["validateMax"],"_unit":["validateUnit"],"_value":["validateValue"],"_variant":["validateVariant"]}]]],["kol-spin",[[33,"kol-spin",{"_show":[1540],"_variant":[1],"state":[32]},null,{"_show":["validateShow"],"_variant":["validateVariant"]}]]],["kol-symbol",[[0,"kol-symbol",{"_label":[1],"_symbol":[1],"state":[32]},null,{"_label":["validateLabel"],"_symbol":["validateSymbol"]}]]],["kol-button-wc_2",[[4,"kol-button-wc",{"_accessKey":[1,"_access-key"],"_ariaControls":[1,"_aria-controls"],"_ariaExpanded":[4,"_aria-expanded"],"_ariaSelected":[4,"_aria-selected"],"_customClass":[1,"_custom-class"],"_disabled":[4],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_id":[1],"_label":[1],"_name":[1],"_on":[16],"_role":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_type":[1],"_value":[8],"_variant":[1],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_ariaControls":["validateAriaControls"],"_ariaExpanded":["validateAriaExpanded"],"_ariaSelected":["validateAriaSelected"],"_customClass":["validateCustomClass"],"_disabled":["validateDisabled"],"_hideLabel":["validateHideLabel"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_name":["validateName"],"_on":["validateOn"],"_role":["validateRole"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_tooltipAlign":["validateTooltipAlign"],"_type":["validateType"],"_value":["validateValue"],"_variant":["validateVariant"]}],[0,"kol-tooltip-wc",{"_accessKey":[1,"_access-key"],"_align":[1],"_id":[1],"_label":[1],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_align":["validateAlign"],"_id":["validateId"],"_label":["validateLabel"]}]]],["kol-alert-wc_2",[[4,"kol-alert-wc",{"_alert":[4],"_hasCloser":[4,"_has-closer"],"_label":[1],"_level":[2],"_on":[16],"_type":[1],"_variant":[1],"state":[32]},null,{"_alert":["validateAlert"],"_hasCloser":["validateHasCloser"],"_label":["validateLabel"],"_level":["validateLevel"],"_on":["validateOn"],"_type":["validateType"],"_variant":["validateVariant"]}],[4,"kol-heading-wc",{"_label":[1],"_level":[2],"_secondaryHeadline":[1,"_secondary-headline"],"state":[32]},null,{"_label":["validateLabel"],"_level":["validateLevel"],"_secondaryHeadline":["validateSecondaryHeadline"]}]]],["kol-pagination",[[33,"kol-pagination",{"_boundaryCount":[2,"_boundary-count"],"_customClass":[1,"_custom-class"],"_label":[1],"_hasButtons":[8,"_has-buttons"],"_page":[2],"_pageSize":[1026,"_page-size"],"_pageSizeOptions":[1,"_page-size-options"],"_on":[16],"_siblingCount":[2,"_sibling-count"],"_tooltipAlign":[1,"_tooltip-align"],"_max":[2],"state":[32]},null,{"_boundaryCount":["validateBoundaryCount"],"_customClass":["validateCustomClass"],"_label":["validateLabel"],"_hasButtons":["validateHasButtons"],"_on":["validateOn"],"_page":["validatePage"],"_pageSize":["validatePageSize"],"_pageSizeOptions":["validatePageSizeOptions"],"_siblingCount":["validateSiblingCount"],"_max":["validateMax"],"_tooltipAlign":["validateTooltipAlign"]}]]],["kol-avatar-wc",[[0,"kol-avatar-wc",{"_src":[1],"_label":[1],"state":[32]},null,{"_src":["validateSrc"],"_label":["validateLabel"]}]]],["kol-indented-text",[[33,"kol-indented-text",{"state":[32]}]]],["kol-icon",[[33,"kol-icon",{"_icons":[1],"_label":[1],"state":[32]},null,{"_icons":["validateIcons"],"_label":["validateLabel"]}]]],["kol-button-link-text-switch",[[0,"kol-button-link-text-switch",{"_link":[16]}]]],["kol-badge",[[33,"kol-badge",{"_color":[1],"_icons":[1],"_label":[1],"_smartButton":[1,"_smart-button"],"state":[32]},null,{"_color":["validateColor"],"_smartButton":["validateSmartButton"]}]]],["kol-input",[[4,"kol-input",{"_accessKey":[1,"_access-key"],"_alert":[4],"_currentLength":[2,"_current-length"],"_disabled":[4],"_error":[1],"_hasCounter":[4,"_has-counter"],"_hideError":[4,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[16],"_id":[1],"_label":[1],"_maxLength":[2,"_max-length"],"_readOnly":[4,"_read-only"],"_renderNoLabel":[4,"_render-no-label"],"_required":[4],"_slotName":[1,"_slot-name"],"_suggestions":[1],"_smartButton":[1,"_smart-button"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[4]}]]],["kol-select",[[33,"kol-select",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_multiple":[4],"_name":[1],"_on":[16],"_options":[1],"_required":[4],"_rows":[2],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1025],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_multiple":["validateMultiple"],"_name":["validateName"],"_on":["validateOn"],"_options":["validateOptions"],"_required":["validateRequired"],"_rows":["validateRows"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-button-group-wc",[[4,"kol-button-group-wc",{"state":[32]}]]],["kol-button",[[33,"kol-button",{"_accessKey":[1,"_access-key"],"_ariaControls":[1,"_aria-controls"],"_ariaExpanded":[4,"_aria-expanded"],"_ariaSelected":[4,"_aria-selected"],"_customClass":[1,"_custom-class"],"_disabled":[4],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_id":[1],"_label":[1],"_name":[1],"_on":[16],"_role":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_type":[1],"_value":[8],"_variant":[1]}]]],["kol-link-wc",[[4,"kol-link-wc",{"_accessKey":[1,"_access-key"],"_download":[1],"_hideLabel":[4,"_hide-label"],"_href":[1],"_icons":[1],"_label":[1],"_listenAriaCurrent":[8,"_listen-aria-current"],"_on":[16],"_role":[1],"_tabIndex":[2,"_tab-index"],"_target":[1],"_targetDescription":[1,"_target-description"],"_tooltipAlign":[1,"_tooltip-align"],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_download":["validateDownload"],"_hideLabel":["validateHideLabel"],"_href":["validateHref"],"_icons":["validateIcons"],"_label":["validateLabel"],"_listenAriaCurrent":["validateListenAriaCurrent"],"_on":["validateOn"],"_role":["validateRole"],"_tabIndex":["validateTabIndex"],"_target":["validateTarget"],"_targetDescription":["validateTargetDescription"],"_tooltipAlign":["validateTooltipAlign"]}]]],["kol-link",[[33,"kol-link",{"_accessKey":[1,"_access-key"],"_download":[1],"_hideLabel":[4,"_hide-label"],"_href":[1],"_icons":[1],"_label":[1],"_listenAriaCurrent":[8,"_listen-aria-current"],"_on":[16],"_role":[1],"_tabIndex":[2,"_tab-index"],"_target":[1],"_targetDescription":[1,"_target-description"],"_tooltipAlign":[1,"_tooltip-align"]}]]],["kol-alert",[[33,"kol-alert",{"_alert":[4],"_hasCloser":[4,"_has-closer"],"_label":[1],"_level":[2],"_on":[16],"_type":[1],"_variant":[1],"state":[32]}]]]]'),e))));