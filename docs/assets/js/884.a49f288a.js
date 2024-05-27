"use strict";
exports.id = 884;
exports.ids = [884];
exports.modules = {

/***/ 43440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ initKoliBri),
/* harmony export */   n: () => (/* binding */ nonce),
/* harmony export */   r: () => (/* binding */ renderDevAdvice)
/* harmony export */ });
/* harmony import */ var _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74520);
/* harmony import */ var _reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31604);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const initMeta=()=>{const e=(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.g)().querySelector('meta[name="kolibri"]');if(e&&e.hasAttribute("content")){const t=e.getAttribute("content");"string"==typeof t&&((0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.s)(t.includes("dev-mode=true")),(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.b)(t.includes("experimental-mode=true")),(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.c)(t.includes("color-contrast-analysis=true")))}},getKoliBri=()=>{let e=(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.d)().KoliBri;return void 0===e&&(e={},Object.defineProperty((0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.d)(),"KoliBri",{value:e,writable:!1})),e},initKoliBri=()=>{initMeta(),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("\n,--. ,--.         ,--. ,--. ,-----.           ,--.\n|  .'   /  ,---.  |  | `--' |  |) /_  ,--.--. `--'\n|  .   '  | .-. | |  | ,--. |  .-.  \\ |  .--' ,--.\n|  |\\   \\ | '-' | |  | |  | |  '--' / |  |    |  |\n`--' `--´  `---´  `--' `--' `------´  `--'    `--'\n🚹 The accessible HTML-Standard | 👉 https://public-ui.github.io | 2.1.1\n\t",{forceLog:!0})},renderDevAdvice=()=>{!0!==getKoliBri().adviceShown&&(Object.defineProperty(getKoliBri(),"adviceShown",{get:function(){return!0}}),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("\nYou are using the KoliBri component library. If you have any suggestions for improvement or find a problem, please contact us:\n\nTicket: https://github.com/public-ui/kolibri/issues/new/choose (for privacy reasons, please use email)\nEmail: kolibri@itzbund.de\n"))};let nonce=()=>Math.floor(16777215*Math.random()).toString(16);"test"===_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_1__.p&&(nonce=()=>"nonce");

/***/ }),

/***/ 26768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ preventDefaultAndStopPropagation),
/* harmony export */   s: () => (/* binding */ stopPropagation),
/* harmony export */   t: () => (/* binding */ tryToDispatchKoliBriEvent)
/* harmony export */ });
/*!
 * KoliBri - The accessible HTML-Standard
 */
function stopPropagation(t){t.stopImmediatePropagation(),t.stopPropagation()}function createKoliBriEvent(t,o){return new CustomEvent(`kol-${t}`,{bubbles:!0,cancelable:!0,composed:!0,detail:o})}function dispatchKoliBriEvent(t,o,n){return t.dispatchEvent(createKoliBriEvent(o,n))}function tryToDispatchKoliBriEvent(t,o,n){o&&dispatchKoliBriEvent(o,t,n)}function preventDefaultAndStopPropagation(t){t.preventDefault(),stopPropagation(t)}

/***/ }),

/***/ 69320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ translate)
/* harmony export */ });
/* harmony import */ var _i18n_9eed57c7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4423);
/* harmony import */ var _reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31604);
/*!
 * KoliBri - The accessible HTML-Standard
 */
let translate=(e,t)=>{var n;return(null!==(n=(0,_i18n_9eed57c7_js__WEBPACK_IMPORTED_MODULE_0__.g)())&&void 0!==n?n:(0,_i18n_9eed57c7_js__WEBPACK_IMPORTED_MODULE_0__.i)("de")).translate(e,t)};"test"===_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_1__.p&&(translate=e=>e);

/***/ }),

/***/ 884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kol_table_stateless_wc: () => (/* binding */ KolTableStateless)
/* harmony export */ });
/* harmony import */ var _index_40be4caf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33432);
/* harmony import */ var _component_names_791b1799_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83852);
/* harmony import */ var _i18n_a7081f2c_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69320);
/* harmony import */ var _events_29e84d75_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26768);
/* harmony import */ var _dev_utils_60f0cf1e_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43440);
/* harmony import */ var _prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29808);
/* harmony import */ var _reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31604);
/* harmony import */ var _table_data_foot_8bae51b6_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48660);
/* harmony import */ var _label_af70fdc5_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72784);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateTableCallbacks=(e,t)=>{(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.w)(e,"_on",(e=>"object"==typeof e&&null!==e),new Set(["TableCallbacksPropType {Events.onSort, Events.onSelectionChange}"]),t)},validateTableHeaderCells=(e,t)=>{(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.t)(t,(()=>{(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.o)(t,(()=>{try{t=(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.p)(t)}catch(e){}(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.w)(e,"_headerCells",(e=>"object"==typeof e&&null!==e),new Set(["TableHeaderCellsPropType"]),t)}))}))},validateTableSelection=(e,t)=>{(e=>e&&(0,_reuse_b66836de_js__WEBPACK_IMPORTED_MODULE_1__.c)(e)&&"function"==typeof e.label&&(!e.selectedKeys||Array.isArray(e.selectedKeys)))("string"==typeof t?(()=>{try{return (0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.p)(t)}catch(e){return}})():t)&&(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.s)(e,"_selection",t)};var Events;!function(e){e.onBlur="onBlur",e.onChange="onChange",e.onClick="onClick",e.onDblClick="onDblClick",e.onFocus="onFocus",e.onInput="onInput",e.onKeyDown="onKeyDown",e.onKeyPress="onKeyPress",e.onKeyUp="onKeyUp",e.onMouseDown="onMouseDown",e.onMouseMove="onMouseMove",e.onMouseOut="onMouseOut",e.onMouseOver="onMouseOver",e.onMouseUp="onMouseUp",e.onReset="onReset",e.onSelect="onSelect",e.onSort="onSort",e.onSelectionChange="onSelectionChange",e.onSubmit="onSubmit"}(Events||(Events={}));const KolTableStateless=class{constructor(e){(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_2__.r)(this,e),this.horizontal=!0,this.cellsToRenderTimeouts=new Map,this.dataToKeyMap=new Map,this.renderTableRow=(e,t)=>{var a,o;let l=String(t);return this.horizontal&&(null===(a=e[0])||void 0===a?void 0:a.data)&&(l=null!==(o=this.getDataKey(e[0].data))&&void 0!==o?o:l),(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_2__.h)("tr",{key:`row-${l}`},this.renderSelectionCell(e,t),e.map(((e,a)=>this.renderTableCell(e,t,a))))},this.renderTableCell=(e,t,a)=>{let o=`${t}-${a}-${e.label}`;if(e.data){const l=this.getDataKey(e.data);o=this.horizontal?l?`${l}-${a}`:o:l?`${l}-${t}`:o}return!1===e.asTd?this.renderHeadingCell(e,t,a):(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_2__.h)("td",{key:`cell-${o}`,class:{[e.textAlign]:"string"==typeof e.textAlign&&e.textAlign.length>0},colSpan:e.colSpan,rowSpan:e.rowSpan,style:{textAlign:e.textAlign,width:e.width},ref:"function"==typeof e.render?t=>{this.cellRender(e,t)}:void 0},"function"!=typeof e.render?e.label:"")},this.state={_data:[],_label:"",_headerCells:{horizontal:[],vertical:[]}},this.tableDivElementHasScrollbar=!1,this._data=void 0,this._dataFoot=void 0,this._headerCells=void 0,this._label=void 0,this._minWidth=void 0,this._on=void 0,this._selection=void 0}validateData(e){(0,_table_data_foot_8bae51b6_js__WEBPACK_IMPORTED_MODULE_3__.v)(this,e,{beforePatch:e=>{this.updateDataToKeyMap(e)}})}validateDataFoot(e){(0,_table_data_foot_8bae51b6_js__WEBPACK_IMPORTED_MODULE_3__.a)(this,e)}validateHeaderCells(e){validateTableHeaderCells(this,e)}validateLabel(e){(0,_label_af70fdc5_js__WEBPACK_IMPORTED_MODULE_4__.v)(this,e,{required:!0})}validateMinWidth(e){(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.i)(this,"_minWidth",e,{defaultValue:void 0})}validateOn(e){validateTableCallbacks(this,e)}validateSelection(e){validateTableSelection(this,e)}componentDidRender(){this.checkDivElementScrollbar()}componentDidLoad(){this.tableDivElement&&ResizeObserver&&(this.tableDivElementResizeObserver=new ResizeObserver(this.checkDivElementScrollbar.bind(this)),this.tableDivElementResizeObserver.observe(this.tableDivElement))}disconnectedCallback(){var e;null===(e=this.tableDivElementResizeObserver)||void 0===e||e.disconnect()}checkDivElementScrollbar(){this.tableDivElement&&(this.tableDivElementHasScrollbar=this.tableDivElement.scrollWidth>this.tableDivElement.clientWidth)}updateDataToKeyMap(e){e.forEach((e=>{this.dataToKeyMap.has(e)||this.dataToKeyMap.set(e,(0,_dev_utils_60f0cf1e_js__WEBPACK_IMPORTED_MODULE_5__.n)())})),this.dataToKeyMap.forEach(((t,a)=>{e.includes(a)||this.dataToKeyMap.delete(a)}))}getDataKey(e){return this.dataToKeyMap.get(e)}cellRender(e,t){t&&(clearTimeout(this.cellsToRenderTimeouts.get(t)),this.cellsToRenderTimeouts.set(t,setTimeout((()=>{if("function"==typeof e.render){const a=e.render(t,e,e.data,this.state._data);"string"==typeof a&&(t.textContent=a)}}))))}getNumberOfCols(e,t){let a=0;return e.forEach((e=>{let t=0;e.forEach((e=>{var a;return t+=null!==(a=e.colSpan)&&void 0!==a?a:1})),a<t&&(a=t)})),0===a&&(a=t.length),a}getNumberOfRows(e,t){var a;let o=0;return e.forEach((e=>{let t=0;e.forEach((e=>{var a;return t+=null!==(a=e.rowSpan)&&void 0!==a?a:1})),o<t&&(o=t)})),0===o?o=t.length:o-=(null===(a=this.state._dataFoot)||void 0===a?void 0:a.length)||0,o}filterHeaderKeys(e){const t=[];return e.forEach((e=>{e.forEach((e=>{"string"==typeof e.key&&t.push(e)}))})),t}getPrimaryHeader(e){var t,a;let o=this.filterHeaderKeys(null!==(t=e.horizontal)&&void 0!==t?t:[]);return this.horizontal=!0,0===o.length&&(o=this.filterHeaderKeys(null!==(a=e.vertical)&&void 0!==a?a:[]),o.length>0&&(this.horizontal=!1)),o}createDataField(e,t,a){var o;t.horizontal=Array.isArray(null==t?void 0:t.horizontal)?t.horizontal:[],t.vertical=Array.isArray(null==t?void 0:t.vertical)?t.vertical:[];const l=this.getPrimaryHeader(t),i=this.getNumberOfCols(t.horizontal,e);let n=this.getNumberOfRows(t.vertical,e),s=0;a&&(s=n,n+=(null===(o=this.state._dataFoot)||void 0===o?void 0:o.length)||0);const r=[],c=[],d=[];t.vertical.forEach(((e,t)=>{c[t]=0,d[t]=[]}));for(let o=s;o<n;o++){const n=[];t.vertical.forEach(((e,t)=>{let a=0;if(d[t].forEach((e=>a+=e)),a<=o){const l=e[o-a+c[t]];if("object"==typeof l){n.push(Object.assign(Object.assign({},l),{asTd:!1,data:{}}));let e=1;if("number"==typeof l.rowSpan&&l.rowSpan>1&&(e=l.rowSpan),d[t].push(e),"number"==typeof l.colSpan&&l.colSpan>1)for(let a=1;a<l.colSpan;a++)d[t+a].push(e);c[t]++}}}));for(let t=0;t<i;t++)if(!0===this.horizontal){const i=a&&this.state._dataFoot?this.state._dataFoot[o-s]:e[o];"object"==typeof l[t]&&null!==l[t]&&"string"==typeof l[t].key&&"object"==typeof i&&null!==i&&n.push(Object.assign(Object.assign({},l[t]),{colSpan:void 0,data:i,label:i[l[t].key],rowSpan:void 0}))}else"object"==typeof l[o]&&null!==l[o]&&"string"==typeof l[o].key&&"object"==typeof e[t]&&null!==e[t]&&n.push(Object.assign(Object.assign({},l[o]),{colSpan:void 0,data:e[t],label:e[t][l[o].key],rowSpan:void 0}));r.push(n)}if(0===e.length){let e=0,a=0;Array.isArray(t.horizontal)&&t.horizontal.length>0&&t.horizontal[0].forEach((t=>{e+=t.colSpan||1})),Array.isArray(t.vertical)&&t.vertical.length>0&&(e-=t.vertical.length,t.vertical[0].forEach((e=>{a+=e.rowSpan||1})));const o={colSpan:e,label:(0,_i18n_a7081f2c_js__WEBPACK_IMPORTED_MODULE_6__.t)("kol-no-entries"),render:void 0,rowSpan:Math.max(a,1)};0===r.length?r.push([o]):r[0].push(o)}return r}componentWillLoad(){this.validateData(this._data),this.validateDataFoot(this._dataFoot),this.validateHeaderCells(this._headerCells),this.validateLabel(this._label),this.validateMinWidth(this._minWidth),this.validateOn(this._on),this.validateSelection(this._selection)}renderSelectionCell(e,t){var a,o,l;if(this.state._selection){const i=null!==(a=this.state._selection.keyPropertyName)&&void 0!==a?a:"id",n=e.find((e=>e.key===i));if(n){const e=(null==n?void 0:n.data)[i],a=null===(l=null===(o=this.state._selection)||void 0===o?void 0:o.selectedKeys)||void 0===l?void 0:l.includes(e),s=this.state._selection.label(n.data);return (0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_2__.h)("td",{key:`tbody-${t}-selection`,class:"selection-cell"},(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_2__.h)(_component_names_791b1799_js__WEBPACK_IMPORTED_MODULE_7__.w,{_label:s,_hideLabel:!0,_checked:a,_tooltipAlign:"right",_on:{onInput:(t,a)=>{var o,l;if(null===(o=this.state._selection)||void 0===o?void 0:o.selectedKeys){const o=a?[...this.state._selection.selectedKeys,e]:this.state._selection.selectedKeys.filter((t=>t!==e));(0,_events_29e84d75_js__WEBPACK_IMPORTED_MODULE_8__.t)("selection-change",this.host,o),"function"==typeof(null===(l=this.state._on)||void 0===l?void 0:l[Events.onSelectionChange])&&this.state._on[Events.onSelectionChange](t,o)}}}}))}}return""}renderHeadingCell(e,t,a){let o,l="codicon codicon-fold";if(e.sortDirection)switch(e.sortDirection){case"ASC":l="codicon codicon-chevron-up",o="ascending";break;case"DESC":l="codicon codicon-chevron-down",o="descending"}return (0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_2__.h)("th",{key:`${t}-${a}-${e.label}`,class:e.textAlign?`align-${e.textAlign}`:void 0,scope:"number"==typeof e.colSpan&&e.colSpan>1?"colgroup":"col",colSpan:e.colSpan,rowSpan:e.rowSpan,style:{width:e.width},"aria-sort":o,"data-sort":`sort-${e.sortDirection}`},e.sortDirection?(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_2__.h)(_component_names_791b1799_js__WEBPACK_IMPORTED_MODULE_7__.c,{class:"table-sort-button",exportparts:"icon",_icons:{right:l},_label:e.label,_on:{onClick:t=>{var a;"function"==typeof(null===(a=this.state._on)||void 0===a?void 0:a.onSort)&&e.key&&e.sortDirection&&this.state._on.onSort(t,{key:e.key,currentSortDirection:e.sortDirection})}}}):e.label)}renderFoot(){if(!this.state._dataFoot||0===this.state._dataFoot.length)return"";const e=this.createDataField(this.state._dataFoot,this.state._headerCells,!0);return (0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_2__.h)("tfoot",null,e.map(this.renderTableRow))}render(){const e=this.createDataField(this.state._data,this.state._headerCells);return (0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_2__.h)(_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_2__.H,{key:"1674fb7ab899c0098a312c938c6311b8966687ad",class:"kol-table-stateless-wc"},(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_2__.h)("div",{key:"5a705ad1cfd82c9e137c7a1aa3e9250db3b679b5",ref:e=>this.tableDivElement=e,class:"table",tabindex:this.tableDivElementHasScrollbar?"-1":void 0},(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_2__.h)("table",{key:"027b8f0e87050291b9fc7ad6132fca166d74587c",style:{minWidth:this.state._minWidth}},(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_2__.h)("div",{key:"4be66ae604e40ac0220c90094b0a37d5c7f34f91",class:"focus-element",tabindex:this.tableDivElementHasScrollbar?"0":void 0,"aria-describedby":"caption"}," "),(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_2__.h)("caption",{key:"414c49cc7be0cdbe48260b232e63de7d6a1c70fe",id:"caption"},this.state._label),Array.isArray(this.state._headerCells.horizontal)&&(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_2__.h)("thead",{key:"851404469bd24ae4e826115ee4cffe56e94f4231"},this.state._headerCells.horizontal.map(((e,t)=>(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_2__.h)("tr",{key:`thead-${t}`},this.state._selection&&(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_2__.h)("td",{key:"thead-selection",class:"selection-header-cell"}),e.map(((e,a)=>!0===e.asTd?(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_2__.h)("td",{key:`thead-${t}-${a}-${e.label}`,class:{[e.textAlign]:"string"==typeof e.textAlign&&e.textAlign.length>0},colSpan:e.colSpan,rowSpan:e.rowSpan,style:{textAlign:e.textAlign,width:e.width},ref:"function"==typeof e.render?t=>{this.cellRender(e,t)}:void 0},"function"!=typeof e.render?e.label:""):this.renderHeadingCell(e,t,a))))))),(0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_2__.h)("tbody",{key:"1024a2ab0ec473830f31ca5fe164c9953d4cfdbc"},e.map(this.renderTableRow)),this.renderFoot())))}get host(){return (0,_index_40be4caf_js__WEBPACK_IMPORTED_MODULE_2__.g)(this)}static get watchers(){return{_data:["validateData"],_dataFoot:["validateDataFoot"],_headerCells:["validateHeaderCells"],_label:["validateLabel"],_minWidth:["validateMinWidth"],_on:["validateOn"],_selection:["validateSelection"]}}};

/***/ }),

/***/ 72784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ validateLabelWithExpertSlot),
/* harmony export */   b: () => (/* binding */ hasEnoughReadableChars),
/* harmony export */   c: () => (/* binding */ containsOnlyNumbers),
/* harmony export */   h: () => (/* binding */ headingLevelOptions),
/* harmony export */   v: () => (/* binding */ validateLabel)
/* harmony export */ });
/* harmony import */ var _prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29808);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const headingLevelOptions=[0,1,2,3,4,5,6],READABLE_CHARS=/[a-zA-Z0-9äöüÄÖÜß]/g,ONLY_NUMBERS=/^\d+$/;function countReadableChars(a){var t;return"string"==typeof a&&(null===(t=a.match(READABLE_CHARS))||void 0===t?void 0:t.length)||0}function hasEnoughReadableChars(a,t=1){return countReadableChars(a)>=t}function containsOnlyNumbers(a){return ONLY_NUMBERS.test(a)}function getValidationOptions(a){var t;return Object.assign(Object.assign({},a),{hooks:{afterPatch:(t,e,n,o)=>{var i,s;"function"==typeof(null===(i=a.hooks)||void 0===i?void 0:i.afterPatch)&&(null===(s=a.hooks)||void 0===s||s.afterPatch(t,e,n,o)),"string"==typeof t&&!1===hasEnoughReadableChars(t,3)&&!1===containsOnlyNumbers(t)&&(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=a.hooks)||void 0===t?void 0:t.beforePatch}})}const LABEL_VALUES=new Set(["string"]),validateLabel=(a,t,e={})=>{(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.w)(a,"_label",(a=>"string"==typeof a),LABEL_VALUES,t,getValidationOptions(e))},validateLabelWithExpertSlot=validateLabel;

/***/ }),

/***/ 29808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ koliBriA11yColorContrast),
/* harmony export */   B: () => (/* binding */ koliBriQuerySelectorAll),
/* harmony export */   C: () => (/* binding */ koliBriQuerySelectorColors),
/* harmony export */   D: () => (/* binding */ stringifyJson),
/* harmony export */   K: () => (/* binding */ KoliBriDevHelper),
/* harmony export */   a: () => (/* binding */ a11yHint),
/* harmony export */   b: () => (/* binding */ watchBoolean),
/* harmony export */   c: () => (/* binding */ a11yHintDisabled),
/* harmony export */   d: () => (/* binding */ s),
/* harmony export */   e: () => (/* binding */ a11yHintLabelingLandmarks),
/* harmony export */   f: () => (/* binding */ featureHint),
/* harmony export */   g: () => (/* binding */ watchJsonArrayString),
/* harmony export */   h: () => (/* binding */ uiUxHintMillerscheZahl),
/* harmony export */   i: () => (/* binding */ watchString),
/* harmony export */   j: () => (/* binding */ devHint),
/* harmony export */   k: () => (/* binding */ watchNumber),
/* harmony export */   l: () => (/* binding */ devWarning),
/* harmony export */   m: () => (/* binding */ mapString2Unknown),
/* harmony export */   n: () => (/* binding */ deprecatedHint),
/* harmony export */   o: () => (/* binding */ objectObjectHandler),
/* harmony export */   p: () => (/* binding */ parseJson),
/* harmony export */   q: () => (/* binding */ setEventTarget),
/* harmony export */   r: () => (/* binding */ rgba$1),
/* harmony export */   s: () => (/* binding */ setState),
/* harmony export */   t: () => (/* binding */ emptyStringByArrayHandler),
/* harmony export */   u: () => (/* binding */ uiUxHint),
/* harmony export */   v: () => (/* binding */ koliBriQuerySelector),
/* harmony export */   w: () => (/* binding */ watchValidator),
/* harmony export */   x: () => (/* binding */ mapBoolean2String),
/* harmony export */   y: () => (/* binding */ mapStringOrBoolean2String),
/* harmony export */   z: () => (/* binding */ KoliBriUtils)
/* harmony export */ });
/* harmony import */ var _index_4a3076fc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88172);
/* harmony import */ var _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74520);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const a11yCache=new Set,a11yHint=(e,t)=>{(!1===a11yCache.has(e)||(null==t?void 0:t.force))&&(a11yCache.add(e),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"✋ a11y",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #09f"}))},deprecatedCache=new Set,deprecatedHint=(e,t)=>{(!1===deprecatedCache.has(e)||(null==t?void 0:t.force))&&(deprecatedCache.add(e),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"🔥 deprecated",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f00"}))},devCache=new Set,devHint=(e,t)=>{(!1===devCache.has(e)||(null==t?void 0:t.force))&&(devCache.add(e),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"💻 dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},devWarning=(e,t)=>{(!1===devCache.has(e)||(null==t?void 0:t.force))&&(devCache.add(e),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"⚠️ dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},featureCache=new Set,featureHint=(e,t=!1,r)=>{(!1===featureCache.has(e)||(null==r?void 0:r.force))&&(featureCache.add(e),e+=!0===t?" ✅":"",_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==r?void 0:r.details)||[]),{classifier:"🌟 feature",forceLog:!!(null==r?void 0:r.force),overwriteStyle:"; background-color: #309"}))};devHint("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const uiUxCache=new Set,uiUxHint=(e,t)=>{(!1===uiUxCache.has(e)||(null==t?void 0:t.force))&&(uiUxCache.add(e),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"📑 ui/ux",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #060;"}))},a11yHintDisabled=()=>{a11yHint('"Disabled" schränkt die Zugänglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},a11yHintLabelingLandmarks=e=>{"string"==typeof e&&""!==e||a11yHint("Manche Strukturelemente, wie bspw. der nav-Tag, können mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden können, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},uiUxHintMillerscheZahl=(e,t=8)=>{t>7&&uiUxHint(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Menüpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)};var n=.2126,r=.7152,t=.0722,e=1/12.92;function u(e){return Math.pow((e+.055)/1.055,2.4)}function a(o){var a=o[0]/255,i=o[1]/255,l=o[2]/255,s=a<=.03928?a*e:u(a),c=i<=.03928?i*e:u(i),d=l<=.03928?l*e:u(l);return s*n+c*r+d*t}function i(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function c(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}function o(e,t){return c(a(e),a(t))}function s(e,t){return o(i(e),i(t))}function f(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}var rgbaConvert={exports:{}};function arr(e){var t=parse(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function obj(e){var t=parse(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}}function css(e){var t=parse(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"}function hex(e){3==(t=parse(e)).length&&t.push(255);var t,r=255==t[3],o=num2hex(t[0]),n=num2hex(t[1]),a=num2hex(t[2]),i=isshort(o,n,a,t=num2hex(Math.round(t[3])));return r?i?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0):"#"+o+n+a:i?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0)+t.charAt(0):"#"+o+n+a+t}function num(e){var t=parse(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0}function parse(e){return"string"==typeof e?name(e=e.toLowerCase())||hex3(e)||hex6(e)||rgb(e)||rgba(e)||[0,0,0,255]:object(e)||array(e)||number(e)||[0,0,0,255]}function num2hex(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function isshort(e,t,r,o){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(r)&&-1!=n.indexOf(o)}function name(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}function hex2num(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function hex3(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var o=hex2num(t[0]),n=hex2num(t[1]),a=hex2num(t[2]),i=3==r?255:hex2num(t[3]);if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(i))return;return[o,n,a,i]}}function hex6(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var o=hex2num(t.slice(0,2)),n=hex2num(t.slice(2,4)),a=hex2num(t.slice(4,6)),i=6==r?255:hex2num(t.slice(6,8));if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(i))return;return[o,n,a,i]}}function getnum(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}function object(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=getnum(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=getnum(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=getnum(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=getnum(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function array(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=getnum(e[0],!0),r=getnum(e[1],!0),o=getnum(e[2],!0),n=getnum(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}function number(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}function rgb(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0);if(-1!=r&&-1!=o&&-1!=n)return[r,o,n,255]}}function rgba(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=getnum(t[0],!0),o=getnum(t[1],!0),n=getnum(t[2],!0),a=getnum(255*t[3]);if(-1!=r&&-1!=o&&-1!=n&&-1!=a)return[r,o,n,a]}}rgbaConvert.exports=arr,rgbaConvert.exports.arr=arr,rgbaConvert.exports.obj=obj,rgbaConvert.exports.css=css,rgbaConvert.exports.hex=hex,rgbaConvert.exports.num=num;const rgba$1=rgbaConvert.exports,pushNodes=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},querySelectorAll=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;pushNodes(r,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;pushNodes(r,querySelectorAll(e,"object"==typeof n&&null!==n?n:o[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},querySelector=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;if(r=querySelector(e,"object"==typeof n&&null!==n?n:o[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")},OBJECT_OBJECT=/\[object Object\]/,objectObjectHandler=(e,t)=>{"string"==typeof e&&OBJECT_OBJECT.test(e)||t()},emptyStringByArrayHandler=(e,t)=>{"string"==typeof e&&""===e||t()},setEventTarget=(e,t)=>{(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.a)()&&(_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug([e,t]),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("↑ We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},patchState=e=>{var t,r,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var o;const n=t.get("beforePatch");"function"==typeof n&&n(null===(o=e.nextState)||void 0===o?void 0:o.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,r)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[r],e.state,e,r)}))),delete e.nextHooks},setState=(e,t,r,o={})=>{var n,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map);e.nextHooks.get(t)instanceof Map==!1&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",o.beforePatch)),e.nextState.set(t,r),patchState(e)},logWarn=(e,t,r,o)=>{devHint(`[${e.constructor.name}] Der Property-Wert (${r}) für '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)};function watchValidator(e,t,r,o,n,a={}){r(n)?setState(e,t,n,a.hooks):void 0===n&&!0!==a.required&&r(a.defaultValue)?setState(e,t,a.defaultValue,a.hooks):(a.required||o.add(null),logWarn(e,t,n,o))}const watchBoolean=(e,t,r,o)=>{watchValidator(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,o)},watchString=(e,t,r,o={})=>{const n="number"==typeof o.minLength?null==o?void 0:o.minLength:0;watchValidator(e,t,(e=>"string"==typeof e&&e.length>=n&&(void 0===(null==o?void 0:o.maxLength)||e.length<=o.maxLength)),new Set(["String"]),r,o)},watchNumber=(e,t,r,o)=>{watchValidator(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),r,o)},watchJsonArrayString=(e,t,r,o,n=(e=>e==e),a={})=>{emptyStringByArrayHandler(o,(()=>{objectObjectHandler(o,(()=>{void 0===o&&(o=[]);try{try{o=parseJson(o)}catch(e){}if(Array.isArray(o)){const i=o.find((e=>!r(e)));void 0===i&&n(o)?setState(e,t,o,a.hooks):objectObjectHandler(i,(()=>{throw _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(i),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}else objectObjectHandler(o,(()=>{throw _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(o),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}catch(e){_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(e)}}))}))},BOOLEAN=/^(true|false)$/,INTEGER=/^-?(0|[1-9]\d*)$/,FLOAT=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,mapString2Unknown=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if(BOOLEAN.test(e))e="true"===e;else if(INTEGER.test(e))e=parseInt(e);else if(FLOAT.test(e))e=parseFloat(e);else if(JSON_CHARS.test(e))try{e=parseJson(e)}catch(e){}return t!==typeof e&&devHint(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},stringifyJson=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(["stringifyJson",e]),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.error("↑ Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},JSON_CHARS=/^[{[]/,parseJson=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(JSON_CHARS.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.warn(["parseJson",e]),_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.error("↑ Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anführungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},mapBoolean2String=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,mapStringOrBoolean2String=e=>"string"==typeof e?e:mapBoolean2String(e),koliBriQuerySelector=(e,t)=>querySelector(e,t||(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.g)()),koliBriQuerySelectorAll=(e,t)=>querySelectorAll(e,t||(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.g)());let DEFAULT_COLOR_CONTRAST=null;const getDefaultColorContrast=()=>(DEFAULT_COLOR_CONTRAST=DEFAULT_COLOR_CONTRAST||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.g)().body,level:"Fail",score:1},DEFAULT_COLOR_CONTRAST),TRANSPARENT_REGEXP=/(\d+, ){3}0\)/,koliBriA11yColorContrast=(e,t=getDefaultColorContrast())=>{const r=getComputedStyle(e),o=TRANSPARENT_REGEXP.test(r.backgroundColor)?t.backgroundColor:rgba$1.hex(r.backgroundColor),n=TRANSPARENT_REGEXP.test(r.color)?t.color:rgba$1.hex(r.color),a=s(o,n),i={backgroundColor:o,color:n,domNode:e,level:f(a),score:a};return a<4.5&&_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.error(["Color-Contrast-Error",{backgroundColor:i.backgroundColor,color:i.color,level:i.level,score:i.score},i.domNode]),i},koliBriQuerySelectorColors=(e,t=getDefaultColorContrast())=>{t.domNode instanceof HTMLElement&&(t=koliBriA11yColorContrast(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<r.length&&(t.domNode=r[o],null===(t=koliBriQuerySelectorColors(e,t)).domNode);o++);return t}return koliBriA11yColorContrast(r,t)};class KoliBriUtils{static queryHtmlElementColors(e,t,r=!1,o=!0){let n=null;if(!0===r||!1===KoliBriUtils.executionLock)if(!1===r&&(KoliBriUtils.cache.clear(),KoliBriUtils.cache.set(t.domNode,t),KoliBriUtils.executionLock=!0,!0===o&&_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)n=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const a=t.domNode.children;for(let e=0;e<a.length;e++)r.add(a[e]);const i=Array.from(r);for(let r=0;r<i.length;r++){let o=KoliBriUtils.cache.get(i[r]);void 0===o&&(o=koliBriA11yColorContrast(i[r],t)),KoliBriUtils.cache.set(i[r],o);const a=KoliBriUtils.queryHtmlElementColors(e,o,!0,!1);if(null!==a){n=a;break}}}else _dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===o&&_dev_utils_1ca991a2_js__WEBPACK_IMPORTED_MODULE_0__.L.debug(`[KoliBriUtils] Color contrast analysis finished (${KoliBriUtils.cache.size} DOM elements are analysed).`),KoliBriUtils.executionLock=!1,KoliBriUtils.cache.clear()),n}}KoliBriUtils.executionLock=!1,KoliBriUtils.cache=new Map;class KoliBriDevHelper{}KoliBriDevHelper.patchTheme=_index_4a3076fc_js__WEBPACK_IMPORTED_MODULE_1__.U,KoliBriDevHelper.patchThemeTag=_index_4a3076fc_js__WEBPACK_IMPORTED_MODULE_1__.b,KoliBriDevHelper.querySelector=koliBriQuerySelector,KoliBriDevHelper.querySelectorAll=koliBriQuerySelectorAll,KoliBriDevHelper.stringifyJson=stringifyJson;

/***/ }),

/***/ 48660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ validateTableDataFoot),
/* harmony export */   v: () => (/* binding */ validateTableData)
/* harmony export */ });
/* harmony import */ var _prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29808);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const validateTableData=(a,t,e)=>{(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.t)(t,(()=>{(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.o)(t,(()=>{void 0===t&&(t=[]);try{t=(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.p)(t)}catch(a){}Array.isArray(t)&&t.every((a=>"object"==typeof a&&null!==a))&&(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.s)(a,"_data",t,e)}))}))},validateTableDataFoot=(a,t,e)=>{(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.t)(t,(()=>{(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.o)(t,(()=>{void 0===t&&(t=[]);try{t=(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.p)(t)}catch(a){}Array.isArray(t)&&t.every((a=>"object"==typeof a&&null!==a))&&(0,_prop_validators_28badc7d_js__WEBPACK_IMPORTED_MODULE_0__.s)(a,"_dataFoot",t,e)}))}))};

/***/ })

};
;