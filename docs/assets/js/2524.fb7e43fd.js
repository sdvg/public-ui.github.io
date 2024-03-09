"use strict";
exports.id = 2524;
exports.ids = [2524];
exports.modules = {

/***/ 10259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ translate)
/* harmony export */ });
/* unused harmony export t */
/* harmony import */ var _index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32924);
/* harmony import */ var _index_8cb3c3b2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49888);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const locale_de={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:",version:"Versionsnummer","table-visible-range":"Einträge {{start}} bis {{end}} von {{total}}"},locale_en={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all","error-list":"Error list","error-list-message":"Please correct the following errors",version:"Version number","table-visible-range":"Entries {{start}} to {{end}} of {{total}}"},mapLocaleKeys=e=>Object.keys(e).reduce(((a,n)=>(a[`kol-${n}`]=e[n],a)),{}),translations=new Set([e=>e("en",mapLocaleKeys(locale_en)),e=>e("de",mapLocaleKeys(locale_de))]),translate=(e,a)=>{const n=(0,_index_8cb3c3b2_js__WEBPACK_IMPORTED_MODULE_0__.g)();if(void 0===n)return (0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.h)("[I18n] I18nService not available! Please call the global register function."),e;let i=n.translate(e,a);return i===e&&((0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_1__.h)("[I18n] Locales not initialized! Initialize default locales automatically."),translations.forEach((e=>e(((e,a)=>(n.addResourceBundle(e,a),e))))),i=n.translate(e,a)),i};

/***/ }),

/***/ 72524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kol_pagination: () => (/* binding */ KolPagination)
/* harmony export */ });
/* harmony import */ var _index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32924);
/* harmony import */ var _i18n_8b7a6ddc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10259);
/* harmony import */ var _dev_utils_744f41b3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31800);
/* harmony import */ var _unique_nav_labels_62d9802d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79492);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const defaultStyleCss="@charset \"UTF-8\";\n/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  .hidden {\n    display: none;\n    visibility: hidden;\n  }\n  /* This is the text label. */\n  .hide-label > kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed !important;\n    opacity: 0.5 !important;\n    outline: none !important;\n  }\n  [aria-disabled=true]:focus kol-span-wc,\n  [disabled]:focus kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  :host {\n    align-items: center;\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 1fr auto;\n  }\n  .navigation-list {\n    align-items: center;\n    display: inline-flex;\n    flex-wrap: wrap;\n    gap: 0.5em;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n  .separator:before {\n    content: \"•••\";\n  }\n}",KolPaginationDefaultStyle0=defaultStyleCss,leftDoubleArrowIcon={left:"codicon codicon-debug-reverse-continue"},leftSingleArrow={left:"codicon codicon-chevron-left"},rightSingleArrowIcon={right:"codicon codicon-chevron-right"},rightDoubleArrowIcon={right:"codicon codicon-debug-continue"},KolPagination=class{constructor(t){(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.nonce=(0,_dev_utils_744f41b3_js__WEBPACK_IMPORTED_MODULE_1__.n)(),this.calcCount=(t,e=1)=>Math.ceil(t/e),this.getCount=()=>this.calcCount(this.state._max,this.state._pageSize),this.onClick=(t,e)=>{"function"==typeof this.state._on.onClick&&this.state._on.onClick(t,e),this.onChangePage(t,e)},this.onChangePage=(t,e)=>{const n=setTimeout((()=>{clearTimeout(n),"function"==typeof this.state._on.onChangePage&&this.state._on.onChangePage(t,e)}))},this.onChangePageSize=(t,e)=>{if("number"==typeof(e=parseInt(e[0]))&&e>0&&this._pageSize!==e){this._pageSize=e;const n=setTimeout((()=>{clearTimeout(n),"function"==typeof this.state._on.onChangePageSize&&this.state._on.onChangePageSize(t,this._pageSize)}))}},this.onGoToFirst={onClick:t=>{this.onClick(t,1)}},this.onGoToEnd={onClick:t=>{this.onClick(t,this.getCount())}},this.onGoBackward={onClick:t=>{this.onClick(t,this.state._page-1)}},this.onGoForward={onClick:t=>{this.onClick(t,this.state._page+1)}},this.beforePageSize=(t,e)=>{let n=e.has("_pageSize")?e.get("_pageSize"):this.state._pageSize;const a=e.has("_pageSizeOptions")?e.get("_pageSizeOptions"):this.state._pageSizeOptions;if(Array.isArray(a)&&a.length>0){const t=a.find((t=>t.value===n));n=void 0===t?a[0].value:t.value,e.set("_pageSize",n)}const i=e.has("_page")?e.get("_page"):this.state._page,s=e.has("_max")?e.get("_max"):this.state._max;this.syncPage(e,i,e.get("_pageSize"),s)},this.syncPage=(t,e,n,a)=>{if(a>0){const i=this.calcCount(a,n);i>0&&(e>i?(t.set("_page",i),this.onChangePage(_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_2__.$,i)):e<1&&(t.set("_page",1),this.onChangePage(_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_2__.$,1)))}},this.beforePageSizeOptions=(t,e)=>{const n=[];if(Array.isArray(t))for(const e of t)"number"==typeof e&&n.push({label:(0,_i18n_8b7a6ddc_js__WEBPACK_IMPORTED_MODULE_3__.a)("kol-page-per-site",{placeholders:{entries:`${e}`}}),value:e});e.set("_pageSizeOptions",n),this.beforePageSize(n,e)},this._boundaryCount=1,this._customClass=void 0,this._label=void 0,this._hasButtons=!0,this._page=void 0,this._pageSize=1,this._pageSizeOptions=[],this._on=void 0,this._siblingCount=1,this._tooltipAlign="top",this._max=void 0,this.state={_boundaryCount:1,_label:(0,_i18n_8b7a6ddc_js__WEBPACK_IMPORTED_MODULE_3__.a)("kol-pagination"),_hasButtons:{first:!0,last:!0,next:!0,previous:!0},_on:{onClick:()=>null},_page:0,_pageSize:1,_pageSizeOptions:[],_siblingCount:1,_max:0}}render(){var t;let e=!1;const n=this.getCount(),a=Array.from(Array(n).keys()).map((t=>t+1)).map((t=>t<=this.state._boundaryCount||t>n-this.state._boundaryCount||t>=this.state._page-this.state._siblingCount&&t<=this.state._page+this.state._siblingCount?(e=!0,this.state._page===t?this.getSelectedPageButton(t):this.getUnselectedPageButton(t)):!0===e?(e=!1,(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",null,(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"separator",key:`${this.nonce}-el-${t}`,"aria-hidden":"true"}))):null));return (0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("nav",{"aria-label":this.state._label},(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("ul",{class:"navigation-list"},this.state._hasButtons.first&&(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",null,(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button-wc",{class:"first",exportparts:"icon",_customClass:this.state._customClass,_disabled:this.state._page<=1,_icons:leftDoubleArrowIcon,_hideLabel:!0,_label:(0,_i18n_8b7a6ddc_js__WEBPACK_IMPORTED_MODULE_3__.a)("kol-page-first"),_on:this.onGoToFirst,_tooltipAlign:this.state._tooltipAlign})),this.state._hasButtons.previous&&(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",null,(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button-wc",{class:"previous",exportparts:"icon",_customClass:this.state._customClass,_disabled:this.state._page<=1,_icons:leftSingleArrow,_hideLabel:!0,_label:(0,_i18n_8b7a6ddc_js__WEBPACK_IMPORTED_MODULE_3__.a)("kol-page-back"),_on:this.onGoBackward,_tooltipAlign:this.state._tooltipAlign})),a,this.state._hasButtons.next&&(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",null,(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button-wc",{class:"next",exportparts:"icon",_customClass:this.state._customClass,_disabled:n<=this.state._page,_icons:rightSingleArrowIcon,_hideLabel:!0,_label:(0,_i18n_8b7a6ddc_js__WEBPACK_IMPORTED_MODULE_3__.a)("kol-page-next"),_on:this.onGoForward,_tooltipAlign:this.state._tooltipAlign})),this.state._hasButtons.last&&(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",null,(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button-wc",{class:"last",exportparts:"icon",_customClass:this.state._customClass,_disabled:n<=this.state._page,_icons:rightDoubleArrowIcon,_hideLabel:!0,_label:(0,_i18n_8b7a6ddc_js__WEBPACK_IMPORTED_MODULE_3__.a)("kol-page-last"),_on:this.onGoToEnd,_tooltipAlign:this.state._tooltipAlign})))),(null===(t=this.state._pageSizeOptions)||void 0===t?void 0:t.length)>0&&(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-select",{_hideLabel:!0,_id:`pagination-size-${this.nonce}`,_label:(0,_i18n_8b7a6ddc_js__WEBPACK_IMPORTED_MODULE_3__.a)("kol-entries-per-site"),_options:this.state._pageSizeOptions,_on:{onChange:this.onChangePageSize},_value:[this.state._pageSize]}))}getUnselectedPageButton(t){return (0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",null,(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button-wc",{exportparts:"icon",key:`${this.nonce}-${t}`,_customClass:this.state._customClass,_label:"",_on:{onClick:e=>{this.onClick(e,t)}}},(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{slot:"expert"},(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"visually-hidden"},(0,_i18n_8b7a6ddc_js__WEBPACK_IMPORTED_MODULE_3__.a)("kol-page"))," ",t)))}getSelectedPageButton(t){return (0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("li",null,(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button-wc",{class:"selected",key:`${this.nonce}-selected`,_customClass:this.state._customClass,_disabled:!0,_label:""},(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{slot:"expert"},(0,_index_62e5924b_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"visually-hidden"},(0,_i18n_8b7a6ddc_js__WEBPACK_IMPORTED_MODULE_3__.a)("kol-page"))," ",t)))}validateBoundaryCount(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_2__.a7)(this,"_boundaryCount",Math.max(0,null!=t?t:1))}validateCustomClass(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_2__.ai)(this,t)}validateLabel(t,e,n=!1){n||(0,_unique_nav_labels_62d9802d_js__WEBPACK_IMPORTED_MODULE_4__.r)(this.state._label),(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_2__.v)(this,t),(0,_unique_nav_labels_62d9802d_js__WEBPACK_IMPORTED_MODULE_4__.a)(this.state._label)}validateHasButtons(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_2__.w)(this,"_hasButtons",(t=>"boolean"==typeof t||"string"==typeof t||"object"==typeof t&&null!==t),new Set(["Boolean","PaginationHasButton"]),t,{hooks:{beforePatch:(t,e)=>{if("boolean"==typeof t)e.set("_hasButtons",{first:t,last:t,next:t,previous:t});else{if("string"==typeof t)try{t=(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_2__.u)(t)}catch(t){e.delete("_hasButtons")}"object"==typeof t&&null!==t&&e.set("_hasButtons",Object.assign(Object.assign({},this.state._hasButtons),{first:"boolean"==typeof t.first?!0===t.first:this.state._hasButtons.first,last:"boolean"==typeof t.last?!0===t.last:this.state._hasButtons.last,next:"boolean"==typeof t.next?!0===t.next:this.state._hasButtons.next,previous:"boolean"==typeof t.previous?!0===t.previous:this.state._hasButtons.previous}))}}}})}validateOn(t){"object"==typeof t&&null!==t&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validatePage(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_2__.a7)(this,"_page",t,{hooks:{beforePatch:(t,e)=>{const n=e.has("_pageSize")?e.get("_pageSize"):this.state._pageSize,a=e.has("_max")?e.get("_max"):this.state._max;this.syncPage(e,t,n,a)}}})}validatePageSize(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_2__.a7)(this,"_pageSize",t,{hooks:{beforePatch:this.beforePageSize}})}validatePageSizeOptions(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_2__.y)(this,"_pageSizeOptions",(t=>"number"==typeof t),t,void 0,{hooks:{beforePatch:this.beforePageSizeOptions}})}validateSiblingCount(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_2__.a7)(this,"_siblingCount",Math.max(0,null!=t?t:1))}validateMax(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_2__.aj)(this,t,{hooks:{beforePatch:(t,e)=>{const n=e.has("_page")?e.get("_page"):this.state._page,a=e.has("_pageSize")?e.get("_pageSize"):this.state._pageSize;this.syncPage(e,n,a,t)}}})}validateTooltipAlign(t){(0,_index_de9d4ee0_js__WEBPACK_IMPORTED_MODULE_2__.i)(this,t)}componentWillLoad(){this.validateBoundaryCount(this._boundaryCount),this.validateCustomClass(this._customClass),this.validateHasButtons(this._hasButtons),this.validateLabel(this._label,void 0,!0),this.validateOn(this._on),this.validatePage(this._page),this.validatePageSize(this._pageSize),this.validatePageSizeOptions(this._pageSizeOptions),this.validateSiblingCount(this._siblingCount),this.validateTooltipAlign(this._tooltipAlign),this.validateMax(this._max),this.validatePage(this._page)}disconnectedCallback(){(0,_unique_nav_labels_62d9802d_js__WEBPACK_IMPORTED_MODULE_4__.r)(this.state._label)}static get watchers(){return{_boundaryCount:["validateBoundaryCount"],_customClass:["validateCustomClass"],_label:["validateLabel"],_hasButtons:["validateHasButtons"],_on:["validateOn"],_page:["validatePage"],_pageSize:["validatePageSize"],_pageSizeOptions:["validatePageSizeOptions"],_siblingCount:["validateSiblingCount"],_max:["validateMax"],_tooltipAlign:["validateTooltipAlign"]}}};KolPagination.style={default:KolPaginationDefaultStyle0};

/***/ }),

/***/ 79492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ addNavLabel),
/* harmony export */   r: () => (/* binding */ removeNavLabel)
/* harmony export */ });
/*!
 * KoliBri - The accessible HTML-Standard
 */
const UNIQUE_LABELS=new Set;function addNavLabel(e){UNIQUE_LABELS.has(e)?console.error(`There already is a nav element with the label "${e}"`):UNIQUE_LABELS.add(e)}function removeNavLabel(e){UNIQUE_LABELS.delete(e)}

/***/ })

};
;