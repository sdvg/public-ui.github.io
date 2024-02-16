"use strict";
exports.id = 7844;
exports.ids = [7844];
exports.modules = {

/***/ 83408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ translate)
/* harmony export */ });
/* unused harmony export t */
/* harmony import */ var _index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75224);
/* harmony import */ var _index_eb50dd62_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28636);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const locale_de={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:",version:"Versionsnummer","table-visible-range":"Einträge {{start}} bis {{end}} von {{total}}"},locale_en={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all","error-list":"Error list","error-list-message":"Please correct the following errors",version:"Version number","table-visible-range":"Entries {{start}} to {{end}} of {{total}}"},mapLocaleKeys=e=>Object.keys(e).reduce(((a,n)=>(a[`kol-${n}`]=e[n],a)),{}),translations=new Set([e=>e("en",mapLocaleKeys(locale_en)),e=>e("de",mapLocaleKeys(locale_de))]),translate=(e,a)=>{const n=(0,_index_eb50dd62_js__WEBPACK_IMPORTED_MODULE_0__.g)();if(void 0===n)return (0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.h)("[I18n] I18nService not available! Please call the global register function."),e;let i=n.translate(e,a);return i===e&&((0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.h)("[I18n] Locales not initialized! Initialize default locales automatically."),translations.forEach((e=>e(((e,a)=>(n.addResourceBundle(e,a),e))))),i=n.translate(e,a)),i};

/***/ }),

/***/ 87844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kol_table: () => (/* binding */ KolTable)
/* harmony export */ });
/* harmony import */ var _index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24236);
/* harmony import */ var _index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75224);
/* harmony import */ var _i18n_73edd5e1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83408);
/*!
 * KoliBri - The accessible HTML-Standard
 */
const defaultStyleCss="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * No element should be used without a background and font color whose contrast ratio has\n\t\t * not been checked. By initially setting the background color to white and the font color\n\t\t * to black, the contrast ratio is ensured and explicit adjustment is forced.\n\t\t */\n\t\tbackground-color: white;\n\t\tcolor: black;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n\n\t/*\n\t * Ensure elements with hidden attribute to be actually not visible\n\t * @see https://meowni.ca/hidden.is.a.lie.html\n\t */\n\t[hidden] {\n\t\tdisplay: none !important;\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t.hidden {\n\t\tdisplay: none;\n\t\tvisibility: hidden;\n\t}\n\n\t/* This is the text label. */\n\t.hide-label > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n\n\t.disabled label,\n\t[aria-disabled='true'],\n\t[disabled] {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n\t\toutline: none;\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: block;\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\tdisplay: grid;\n\t}\n\n\t:host > div.table {\n\t\tmax-width: 100%;\n\t\toverflow-x: auto;\n\t\toverflow-y: hidden;\n\t}\n\n\t:host > div.table table {\n\t\twidth: 100%;\n\t}\n\n\tcaption {\n\t\ttext-align: start;\n\t}\n\tcaption:focus {\n\t\toutline: 0 !important;\n\t}\n\n\t.table:has(caption:focus) {\n\t\t/* @see https://remysharp.com/til/css/focus-ring-default-styles */\n\t\toutline: 5px auto Highlight;\n\t\toutline: 5px auto -webkit-focus-ring-color;\n\t\toutline-offset: 2px;\n\t}\n\n\t.table-sort-button .button {\n\t\tcolor: inherit;\n\t}\n\n\tth.align-left {\n\t\ttext-align: left;\n\t\t& .table-sort-button .button-inner {\n\t\t\tjustify-items: start;\n\t\t}\n\t}\n\tth.align-center {\n\t\ttext-align: center;\n\t\t& .table-sort-button .button-inner {\n\t\t\tjustify-items: center;\n\t\t}\n\t}\n\tth.align-right {\n\t\ttext-align: right;\n\t\t& .table-sort-button .button-inner {\n\t\t\tjustify-items: end;\n\t\t}\n\t}\n\n\tdiv.pagination kol-pagination {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t}\n\n\tdiv.pagination,\n\tdiv.pagination > div:last-child {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t@media (max-width: 1024px) {\n\t\tdiv.pagination kol-pagination {\n\t\t\tflex-direction: column;\n\t\t}\n\t}\n\n\t@media (min-width: 1024px) {\n\t\tdiv.pagination,\n\t\tdiv.pagination > div:last-child {\n\t\t\tgrid-auto-flow: column;\n\t\t}\n\n\t\tdiv.pagination kol-pagination {\n\t\t\tdisplay: flex;\n\t\t}\n\t}\n}\n",KolTableDefaultStyle0=defaultStyleCss,PAGINATION_OPTIONS=[10,20,50,100],CELL_REFS=new Map,paginationValidator=t=>!0===t||""===t||"object"==typeof t&&null!==t,KolTable=class{constructor(t){(0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.horizontal=!0,this.sortDirections=new Map,this.sortData=[],this.showPagination=!1,this.pageStartSlice=0,this.pageEndSlice=10,this.disableSort=!1,this.sortedColumnHead={label:"",key:"",sortDirection:"NOS"},this.setSortDirection=(t,e)=>{this.sortDirections.clear(),this.sortDirections.set(t,e),this.sortFunction=t},this.handlePagination={onClick:(t,e)=>{var n;"function"==typeof(null===(n=this.state._pagination._on)||void 0===n?void 0:n.onClick)&&this.state._pagination._on.onClick(t,e),(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.m)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:e}))},onChangePage:(t,e)=>{var n;"function"==typeof(null===(n=this.state._pagination._on)||void 0===n?void 0:n.onChangePage)&&this.state._pagination._on.onChangePage(t,e),(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.m)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:e}))},onChangePageSize:(t,e)=>{var n;"function"==typeof(null===(n=this.state._pagination._on)||void 0===n?void 0:n.onChangePageSize)&&this.state._pagination._on.onChangePageSize(t,e),(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.m)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_pageSize:e})),(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.m)(this,"_pageSize",e)}},this.updateSortedData=(t=this.sortedColumnHead)=>{if(this.disableSort)return void (0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.m)(this,"_sortedData",this.state._data);let e=this.state._data;if(this.sortData.length>0)e=this.state._data.sort(((t,e)=>{for(let n=0;n<this.sortData.length;n++){const i=this.sortData[n],a=i.compareFn(t,e);if(0!==a)return"ASC"===i.direction?a:-a}return 0}));else if("function"==typeof this.sortFunction)switch(this.sortDirections.get(this.sortFunction)){case"ASC":e=this.sortFunction([...this.state._data]),this.sortedColumnHead={label:t.label,key:t.key,sortDirection:"ASC"};break;case"DESC":e=this.sortFunction([...this.state._data]).reverse(),this.sortedColumnHead={label:t.label,key:t.key,sortDirection:"DESC"};break;default:e=[...this.state._data],this.sortedColumnHead={label:"",key:"",sortDirection:"NOS"}}(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.m)(this,"_sortedData",e)},this.renderTableRow=(t,e)=>(0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)("tr",{key:`tbody-${e}`},t.map(((t,n)=>this.renderTableCell(t,e,n)))),this.renderTableCell=(t,e,n)=>{if(!1===t.asTd){const i=t;let a,o="NOS",s="codicon codicon-fold";if(!this.disableSort){if(i.key){const t=this.sortData.find((t=>t.key===i.key));if(t)switch(o=t.direction,t.direction){case"ASC":s="codicon codicon-chevron-up",a="ascending";break;case"DESC":s="codicon codicon-chevron-down",a="descending"}}if(i.key===this.sortedColumnHead.key)switch(o=this.sortedColumnHead.sortDirection,this.sortedColumnHead.sortDirection){case"ASC":s="codicon codicon-chevron-up",a="ascending";break;case"DESC":s="codicon codicon-chevron-down",a="descending"}}return (0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)("th",{key:`tbody-${e}-${n}-${i.label}`,scope:"number"==typeof i.rowSpan&&i.rowSpan>1?"rowgroup":"row",colSpan:i.colSpan,rowSpan:i.rowSpan,style:{textAlign:i.textAlign,width:i.width},"aria-sort":a,"data-sort":`sort-${o}`},(0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"w-full flex gap-1 items-center"},(0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"w-full":!0,[i.textAlign]:"string"==typeof i.textAlign&&i.textAlign.length>0},style:{textAlign:i.textAlign}},i.label),!this.disableSort&&("function"==typeof i.compareFn||"function"==typeof i.sort)&&(0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button",{exportparts:"icon",_icons:s,_hideLabel:!0,_label:(0,_i18n_73edd5e1_js__WEBPACK_IMPORTED_MODULE_2__.a)("kol-change-order",{placeholders:{colLabel:i.label}}),_on:{onClick:()=>this.changeCellSort(i)},_variant:"ghost"})))}return (0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)("td",{key:`tbody-${e}-${n}-${t.label}`,class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?e=>{this.cellRender(t,e)}:void 0},"function"!=typeof t.render?t.label:"")},this.renderFoot=()=>{const t=this.createDataField(this.state._dataFoot,this.state._headers,!0);return (0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)("tfoot",null,t.map(this.renderTableRow))},this.tableDivElementHasScrollbar=!1,this._allowMultiSort=void 0,this._data=void 0,this._dataFoot=void 0,this._headers=void 0,this._label=void 0,this._minWidth=void 0,this._pagination=void 0,this._paginationPosition="bottom",this.state={_allowMultiSort:!1,_data:[],_dataFoot:[],_headers:{horizontal:[],vertical:[]},_label:"",_pagination:{_page:1,_pageSize:10,_max:0},_sortedData:[],_paginationPosition:"bottom"}}validateAllowMultiSort(t){(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_allowMultiSort",(()=>!0),new Set(["boolean"]),t,{defaultValue:!1})}validateData(t){(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.aq)(t,(()=>{(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.t)(t,(()=>{void 0===t&&(t=[]);try{t=(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.u)(t)}catch(t){}Array.isArray(t)&&void 0===t.find((t=>!("object"==typeof t&&null!==t)))&&(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.m)(this,"_data",t,{afterPatch:()=>{setTimeout(this.updateSortedData)}})}))}))}validateDataFoot(t){(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.aq)(t,(()=>{(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.t)(t,(()=>{void 0===t&&(t=[]);try{t=(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.u)(t)}catch(t){}Array.isArray(t)&&void 0===t.find((t=>!("object"==typeof t&&null!==t)))&&(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.m)(this,"_dataFoot",t,{afterPatch:()=>{setTimeout(this.updateSortedData)}})}))}))}validatePaginationPosition(t){(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.ar)(this,t)}changeCellSort(t){var e;if("function"==typeof t.compareFn){this.state._allowMultiSort||t.key==(null===(e=this.sortData[0])||void 0===e?void 0:e.key)||(this.sortData=[]);const n=this.sortData.findIndex((e=>e.key===t.key));if(n>=0){const t=this.sortData[n];switch(t.direction){case"ASC":t.direction="DESC";break;case"DESC":this.sortData.splice(n,1);break;default:t.direction="ASC"}}else t.key&&this.sortData.push({label:t.label,key:t.key,compareFn:t.compareFn,direction:"ASC"});this.updateSortedData(t)}else if("function"==typeof t.sort){switch(this.sortFunction=t.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData(t)}}validateHeaders(t){(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.aq)(t,(()=>{(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.t)(t,(()=>{try{t=(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.u)(t)}catch(t){}(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_headers",(t=>"object"==typeof t&&null!==t),new Set(["KoliBriTableHeaders"]),t,{hooks:{beforePatch:t=>{var e,n,i,a;const o=t=>{let e=!1;t.forEach((t=>{const n=t.key;if(!n)return;const i=t.sortDirection;"ASC"!==i&&"DESC"!==i||("function"==typeof t.compareFn?((this.state._allowMultiSort||0===this.sortData.length)&&this.sortData.push({label:t.label,key:n,compareFn:t.compareFn,direction:i}),e=!0):"function"==typeof t.sort&&(this.setSortDirection(t.sort,i),setTimeout((()=>this.updateSortedData({key:n,label:t.label,sortDirection:i})))))})),e&&setTimeout((()=>this.updateSortedData()))},s=t;null===(e=s.horizontal)||void 0===e||e.forEach(o),null===(n=s.vertical)||void 0===n||n.forEach(o),s.horizontal&&s.vertical&&(null===(i=s.horizontal)||void 0===i?void 0:i.length)>0&&(null===(a=s.vertical)||void 0===a?void 0:a.length)>0&&(this.disableSort=!0,(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.h)("Table: You can not sort the table data, if horizontal and vertical headers are defined at the same time. (https://github.com/public-ui/kolibri/issues/2372)"))}}})}))}))}validateLabel(t){(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.v)(this,t,{required:!0})}validateMinWidth(t){(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.C)(this,"_minWidth",t,{defaultValue:void 0})}validatePagination(t){try{t=(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.u)(t)}catch(t){}this.showPagination=paginationValidator(t),(0,_index_c3ae175d_js__WEBPACK_IMPORTED_MODULE_1__.w)(this,"_pagination",paginationValidator,new Set(["boolean","KoliBriTablePagination"]),t,{defaultValue:{_page:1,_pageSize:10,_max:0}})}componentDidRender(){this.checkDivElementScrollbar()}componentDidLoad(){this.tableDivElement&&ResizeObserver&&(this.tableDivElementResizeObserver=new ResizeObserver(this.checkDivElementScrollbar.bind(this)),this.tableDivElementResizeObserver.observe(this.tableDivElement))}disconnectedCallback(){var t;null===(t=this.tableDivElementResizeObserver)||void 0===t||t.disconnect()}checkDivElementScrollbar(){this.tableDivElement&&(this.tableDivElementHasScrollbar=this.tableDivElement.scrollWidth>this.tableDivElement.clientWidth)}componentWillLoad(){this.validateAllowMultiSort(this._allowMultiSort),this.validateData(this._data),this.validateDataFoot(this._dataFoot),this.validateHeaders(this._headers),this.validateLabel(this._label),this.validateMinWidth(this._minWidth),this.validatePagination(this._pagination),this.validatePaginationPosition(this._paginationPosition)}getNumberOfCols(t,e){let n=0;return t.forEach((t=>{let e=0;t.forEach((t=>{var n;return e+=null!==(n=t.colSpan)&&void 0!==n?n:1})),n<e&&(n=e)})),0===n&&(n=e.length),n}getNumberOfRows(t,e){let n=0;return t.forEach((t=>{let e=0;t.forEach((t=>{var n;return e+=null!==(n=t.rowSpan)&&void 0!==n?n:1})),n<e&&(n=e)})),0===n?n=e.length:n-=this.state._dataFoot.length,n}filterHeaderKeys(t){const e=[];return t.forEach((t=>{t.forEach((t=>{"string"==typeof t.key&&e.push(t)}))})),e}getPrimaryHeader(t){var e,n;let i=this.filterHeaderKeys(null!==(e=t.horizontal)&&void 0!==e?e:[]);return this.horizontal=!0,0===i.length&&(i=this.filterHeaderKeys(null!==(n=t.vertical)&&void 0!==n?n:[]),i.length>0&&(this.horizontal=!1)),i}createDataField(t,e,n){e.horizontal=Array.isArray(null==e?void 0:e.horizontal)?e.horizontal:[],e.vertical=Array.isArray(null==e?void 0:e.vertical)?e.vertical:[];const i=this.getPrimaryHeader(e),a=this.getNumberOfCols(e.horizontal,t);let o=this.getNumberOfRows(e.vertical,t),s=0;n&&(s=o,o+=this.state._dataFoot.length);const l=[],r=[],h=[];e.vertical.forEach(((t,e)=>{r[e]=0,h[e]=[]}));for(let d=s;d<o;d++){const o=[];e.vertical.forEach(((t,e)=>{let n=0;if(h[e].forEach((t=>n+=t)),n<=d){const i=t[d-n+r[e]];if("object"==typeof i){o.push(Object.assign(Object.assign({},i),{asTd:!1,data:{}}));let t=1;if("number"==typeof i.rowSpan&&i.rowSpan>1&&(t=i.rowSpan),h[e].push(t),"number"==typeof i.colSpan&&i.colSpan>1)for(let n=1;n<i.colSpan;n++)h[e+n].push(t);r[e]++}}}));for(let e=0;e<a;e++)if(!0===this.horizontal){const a=n?this.state._dataFoot[d-s]:t[d];"object"==typeof i[e]&&null!==i[e]&&"string"==typeof i[e].key&&"object"==typeof a&&null!==a&&o.push(Object.assign(Object.assign({},i[e]),{colSpan:void 0,data:a,label:a[i[e].key],rowSpan:void 0}))}else"object"==typeof i[d]&&null!==i[d]&&"string"==typeof i[d].key&&"object"==typeof t[e]&&null!==t[e]&&o.push(Object.assign(Object.assign({},i[d]),{colSpan:void 0,data:t[e],label:t[e][i[d].key],rowSpan:void 0}));l.push(o)}if(0===t.length){let t=0,n=0;Array.isArray(e.horizontal)&&e.horizontal.length>0&&e.horizontal[0].forEach((e=>{t+=e.colSpan||1})),Array.isArray(e.vertical)&&e.vertical.length>0&&(t-=e.vertical.length,e.vertical[0].forEach((t=>{n+=t.rowSpan||1})));const i={colSpan:t,label:(0,_i18n_73edd5e1_js__WEBPACK_IMPORTED_MODULE_2__.a)("kol-no-entries"),render:void 0,rowSpan:Math.max(n,1)};0===l.length?l.push([i]):l[0].push(i)}return l}selectDisplayedData(t,e,n){return"number"==typeof e&&e>0&&"number"==typeof n&&n>0?(this.pageStartSlice=e*(n-1),this.pageEndSlice=e*n>t.length?t.length:e*n,t.slice(this.pageStartSlice,this.pageEndSlice)):(this.pageStartSlice=0,this.pageEndSlice=t.length,t)}cellRender(t,e){e&&(clearTimeout(CELL_REFS.get(e)),CELL_REFS.set(e,setTimeout((()=>{clearTimeout(CELL_REFS.get(e));const n=t.render(e,{asTd:t.asTd,label:t.label,textAlign:t.textAlign,width:t.width},t.data,this.state._data);"string"==typeof n&&(e.textContent=n)}))))}renderPagination(){return (0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"pagination"},(0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,(0,_i18n_73edd5e1_js__WEBPACK_IMPORTED_MODULE_2__.a)("kol-table-visible-range",{placeholders:{start:this.pageEndSlice>0?(this.pageStartSlice+1).toString():"0",end:this.pageEndSlice.toString(),total:this.state._pagination&&this.state._pagination._max>0?this.state._pagination._max.toString():Array.isArray(this.state._data)?this.state._data.length.toString():"0"}})),(0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-pagination",{_boundaryCount:this.state._pagination._boundaryCount,_customClass:this.state._pagination._customClass,_on:this.handlePagination,_page:this.state._pagination._page,_pageSize:this.state._pagination._pageSize,_pageSizeOptions:this.state._pagination._pageSizeOptions||PAGINATION_OPTIONS,_siblingCount:this.state._pagination._siblingCount,_tooltipAlign:"bottom",_max:this.state._pagination._max||this.state._pagination._max||this.state._data.length,_label:(0,_i18n_73edd5e1_js__WEBPACK_IMPORTED_MODULE_2__.a)("kol-table-pagination-label",{placeholders:{label:this.state._label}})})))}render(){var t,e;const n=this.selectDisplayedData(this.state._sortedData,this.showPagination?null!==(e=null===(t=this.state._pagination)||void 0===t?void 0:t._pageSize)&&void 0!==e?e:10:this.state._sortedData.length,this.state._pagination._page||1),i=this.createDataField(n,this.state._headers),a="top"===this._paginationPosition||"both"===this._paginationPosition?this.renderPagination():null,o="bottom"===this._paginationPosition||"both"===this._paginationPosition?this.renderPagination():null;return (0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.H,null,this.pageEndSlice>0&&this.showPagination&&a,(0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{ref:t=>this.tableDivElement=t,class:"table",tabindex:"-1",onMouseDown:t=>{t.preventDefault()}},(0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)("table",{style:{minWidth:this.state._minWidth}},(0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)("caption",{tabindex:this.tableDivElementHasScrollbar?"0":void 0},this.state._label),Array.isArray(this.state._headers.horizontal)&&(0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)("thead",null,this.state._headers.horizontal.map(((t,e)=>(0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)("tr",{key:`thead-${e}`},t.map(((t,n)=>{if(!0===t.asTd)return (0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)("td",{key:`thead-${e}-${n}-${t.label}`,class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?e=>{this.cellRender(t,e)}:void 0},"function"!=typeof t.render?t.label:"");{const i=t;let a,o="NOS",s="codicon codicon-fold";if(i.key){const t=this.sortData.find((t=>t.key===i.key));if(t)switch(o=t.direction,t.direction){case"ASC":s="codicon codicon-chevron-up",a="ascending";break;case"DESC":s="codicon codicon-chevron-down",a="descending"}}if(i.key===this.sortedColumnHead.key)switch(o=this.sortedColumnHead.sortDirection,this.sortedColumnHead.sortDirection){case"ASC":s="codicon codicon-chevron-up",a="ascending";break;case"DESC":s="codicon codicon-chevron-down",a="descending"}return (0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)("th",{class:t.textAlign?`align-${t.textAlign}`:void 0,key:`thead-${e}-${n}-${i.label}`,scope:"number"==typeof i.colSpan&&i.colSpan>1?"colgroup":"col",colSpan:i.colSpan,rowSpan:i.rowSpan,style:{width:t.width},"aria-sort":a,"data-sort":`sort-${o}`},this.disableSort||"function"!=typeof i.compareFn&&"function"!=typeof i.sort?t.label:(0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button-wc",{class:"table-sort-button",exportparts:"icon",_icons:{right:s},_label:t.label,_on:{onClick:()=>this.changeCellSort(i)}}))}})))))),(0,_index_a5e15b1e_js__WEBPACK_IMPORTED_MODULE_0__.h)("tbody",null,i.map(this.renderTableRow)),this.state._dataFoot.length>0?this.renderFoot():"")),this.pageEndSlice>0&&this.showPagination&&o)}static get watchers(){return{_allowMultiSort:["validateAllowMultiSort"],_data:["validateData"],_dataFoot:["validateDataFoot"],_paginationPosition:["validatePaginationPosition"],_headers:["validateHeaders"],_label:["validateLabel"],_minWidth:["validateMinWidth"],_pagination:["validatePagination"]}}};KolTable.style={default:KolTableDefaultStyle0};

/***/ })

};
;