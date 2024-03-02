/*! For license information please see 9933.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[9933],{5779:(t,e,n)=>{n.d(e,{a:()=>h});var i=n(3973),a=n(3975);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:",version:"Versionsnummer","table-visible-range":"Einträge {{start}} bis {{end}} von {{total}}"},s={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all","error-list":"Error list","error-list-message":"Please correct the following errors",version:"Version number","table-visible-range":"Entries {{start}} to {{end}} of {{total}}"},l=t=>Object.keys(t).reduce(((e,n)=>(e[`kol-${n}`]=t[n],e)),{}),r=new Set([t=>t("en",l(s)),t=>t("de",l(o))]),h=(t,e)=>{const n=(0,a.g)();if(void 0===n)return(0,i.h)("[I18n] I18nService not available! Please call the global register function."),t;let o=n.translate(t,e);return o===t&&((0,i.h)("[I18n] Locales not initialized! Initialize default locales automatically."),r.forEach((t=>t(((t,e)=>(n.addResourceBundle(t,e),t))))),o=n.translate(t,e)),o}},9933:(t,e,n)=>{n.r(e),n.d(e,{kol_table:()=>h});var i=n(173),a=n(3973),o=n(5779);const s=[10,20,50,100],l=new Map,r=t=>!0===t||""===t||"object"==typeof t&&null!==t,h=class{constructor(t){(0,i.r)(this,t),this.horizontal=!0,this.sortDirections=new Map,this.sortData=[],this.showPagination=!1,this.pageStartSlice=0,this.pageEndSlice=10,this.disableSort=!1,this.sortedColumnHead={label:"",key:"",sortDirection:"NOS"},this.setSortDirection=(t,e)=>{this.sortDirections.clear(),this.sortDirections.set(t,e),this.sortFunction=t},this.handlePagination={onClick:(t,e)=>{var n;"function"==typeof(null===(n=this.state._pagination._on)||void 0===n?void 0:n.onClick)&&this.state._pagination._on.onClick(t,e),(0,a.m)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:e}))},onChangePage:(t,e)=>{var n;"function"==typeof(null===(n=this.state._pagination._on)||void 0===n?void 0:n.onChangePage)&&this.state._pagination._on.onChangePage(t,e),(0,a.m)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:e}))},onChangePageSize:(t,e)=>{var n;"function"==typeof(null===(n=this.state._pagination._on)||void 0===n?void 0:n.onChangePageSize)&&this.state._pagination._on.onChangePageSize(t,e),(0,a.m)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_pageSize:e})),(0,a.m)(this,"_pageSize",e)}},this.updateSortedData=(t=this.sortedColumnHead)=>{if(this.disableSort)return void(0,a.m)(this,"_sortedData",this.state._data);let e=this.state._data;if(this.sortData.length>0)e=this.state._data.sort(((t,e)=>{for(let n=0;n<this.sortData.length;n++){const i=this.sortData[n],a=i.compareFn(t,e);if(0!==a)return"ASC"===i.direction?a:-a}return 0}));else if("function"==typeof this.sortFunction)switch(this.sortDirections.get(this.sortFunction)){case"ASC":e=this.sortFunction([...this.state._data]),this.sortedColumnHead={label:t.label,key:t.key,sortDirection:"ASC"};break;case"DESC":e=this.sortFunction([...this.state._data]).reverse(),this.sortedColumnHead={label:t.label,key:t.key,sortDirection:"DESC"};break;default:e=[...this.state._data],this.sortedColumnHead={label:"",key:"",sortDirection:"NOS"}}(0,a.m)(this,"_sortedData",e)},this.renderTableRow=(t,e)=>(0,i.h)("tr",{key:`tbody-${e}`},t.map(((t,n)=>this.renderTableCell(t,e,n)))),this.renderTableCell=(t,e,n)=>{if(!1===t.asTd){const a=t;let s,l="NOS",r="codicon codicon-fold";if(!this.disableSort){if(a.key){const t=this.sortData.find((t=>t.key===a.key));if(t)switch(l=t.direction,t.direction){case"ASC":r="codicon codicon-chevron-up",s="ascending";break;case"DESC":r="codicon codicon-chevron-down",s="descending"}}if(a.key===this.sortedColumnHead.key)switch(l=this.sortedColumnHead.sortDirection,this.sortedColumnHead.sortDirection){case"ASC":r="codicon codicon-chevron-up",s="ascending";break;case"DESC":r="codicon codicon-chevron-down",s="descending"}}return(0,i.h)("th",{key:`tbody-${e}-${n}-${a.label}`,scope:"number"==typeof a.rowSpan&&a.rowSpan>1?"rowgroup":"row",colSpan:a.colSpan,rowSpan:a.rowSpan,style:{textAlign:a.textAlign,width:a.width},"aria-sort":s,"data-sort":`sort-${l}`},(0,i.h)("div",{class:"w-full flex gap-1 items-center"},(0,i.h)("div",{class:{"w-full":!0,[a.textAlign]:"string"==typeof a.textAlign&&a.textAlign.length>0},style:{textAlign:a.textAlign}},a.label),!this.disableSort&&("function"==typeof a.compareFn||"function"==typeof a.sort)&&(0,i.h)("kol-button",{exportparts:"icon",_icons:r,_hideLabel:!0,_label:(0,o.a)("kol-change-order",{placeholders:{colLabel:a.label}}),_on:{onClick:()=>this.changeCellSort(a)},_variant:"ghost"})))}return(0,i.h)("td",{key:`tbody-${e}-${n}-${t.label}`,class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?e=>{this.cellRender(t,e)}:void 0},"function"!=typeof t.render?t.label:"")},this.renderFoot=()=>{const t=this.createDataField(this.state._dataFoot,this.state._headers,!0);return(0,i.h)("tfoot",null,t.map(this.renderTableRow))},this.tableDivElementHasScrollbar=!1,this._allowMultiSort=void 0,this._data=void 0,this._dataFoot=void 0,this._headers=void 0,this._label=void 0,this._minWidth=void 0,this._pagination=void 0,this._paginationPosition="bottom",this.state={_allowMultiSort:!1,_data:[],_dataFoot:[],_headers:{horizontal:[],vertical:[]},_label:"",_pagination:{_page:1,_pageSize:10,_max:0},_sortedData:[],_paginationPosition:"bottom"}}validateAllowMultiSort(t){(0,a.w)(this,"_allowMultiSort",(()=>!0),new Set(["boolean"]),t,{defaultValue:!1})}validateData(t){(0,a.aq)(t,(()=>{(0,a.t)(t,(()=>{void 0===t&&(t=[]);try{t=(0,a.u)(t)}catch(t){}Array.isArray(t)&&void 0===t.find((t=>!("object"==typeof t&&null!==t)))&&(0,a.m)(this,"_data",t,{afterPatch:()=>{setTimeout(this.updateSortedData)}})}))}))}validateDataFoot(t){(0,a.aq)(t,(()=>{(0,a.t)(t,(()=>{void 0===t&&(t=[]);try{t=(0,a.u)(t)}catch(t){}Array.isArray(t)&&void 0===t.find((t=>!("object"==typeof t&&null!==t)))&&(0,a.m)(this,"_dataFoot",t,{afterPatch:()=>{setTimeout(this.updateSortedData)}})}))}))}validatePaginationPosition(t){(0,a.ar)(this,t)}changeCellSort(t){var e;if("function"==typeof t.compareFn){this.state._allowMultiSort||t.key==(null===(e=this.sortData[0])||void 0===e?void 0:e.key)||(this.sortData=[]);const n=this.sortData.findIndex((e=>e.key===t.key));if(n>=0){const t=this.sortData[n];switch(t.direction){case"ASC":t.direction="DESC";break;case"DESC":this.sortData.splice(n,1);break;default:t.direction="ASC"}}else t.key&&this.sortData.push({label:t.label,key:t.key,compareFn:t.compareFn,direction:"ASC"});this.updateSortedData(t)}else if("function"==typeof t.sort){switch(this.sortFunction=t.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData(t)}}validateHeaders(t){(0,a.aq)(t,(()=>{(0,a.t)(t,(()=>{try{t=(0,a.u)(t)}catch(t){}(0,a.w)(this,"_headers",(t=>"object"==typeof t&&null!==t),new Set(["KoliBriTableHeaders"]),t,{hooks:{beforePatch:t=>{var e,n,i,o;const s=t=>{let e=!1;t.forEach((t=>{const n=t.key;if(!n)return;const i=t.sortDirection;"ASC"!==i&&"DESC"!==i||("function"==typeof t.compareFn?((this.state._allowMultiSort||0===this.sortData.length)&&this.sortData.push({label:t.label,key:n,compareFn:t.compareFn,direction:i}),e=!0):"function"==typeof t.sort&&(this.setSortDirection(t.sort,i),setTimeout((()=>this.updateSortedData({key:n,label:t.label,sortDirection:i})))))})),e&&setTimeout((()=>this.updateSortedData()))},l=t;null===(e=l.horizontal)||void 0===e||e.forEach(s),null===(n=l.vertical)||void 0===n||n.forEach(s),l.horizontal&&l.vertical&&(null===(i=l.horizontal)||void 0===i?void 0:i.length)>0&&(null===(o=l.vertical)||void 0===o?void 0:o.length)>0&&(this.disableSort=!0,(0,a.h)("Table: You can not sort the table data, if horizontal and vertical headers are defined at the same time. (https://github.com/public-ui/kolibri/issues/2372)"))}}})}))}))}validateLabel(t){(0,a.v)(this,t,{required:!0})}validateMinWidth(t){(0,a.C)(this,"_minWidth",t,{defaultValue:void 0})}validatePagination(t){try{t=(0,a.u)(t)}catch(t){}this.showPagination=r(t),(0,a.w)(this,"_pagination",r,new Set(["boolean","KoliBriTablePagination"]),t,{defaultValue:{_page:1,_pageSize:10,_max:0}})}componentDidRender(){this.checkDivElementScrollbar()}componentDidLoad(){this.tableDivElement&&ResizeObserver&&(this.tableDivElementResizeObserver=new ResizeObserver(this.checkDivElementScrollbar.bind(this)),this.tableDivElementResizeObserver.observe(this.tableDivElement))}disconnectedCallback(){var t;null===(t=this.tableDivElementResizeObserver)||void 0===t||t.disconnect()}checkDivElementScrollbar(){this.tableDivElement&&(this.tableDivElementHasScrollbar=this.tableDivElement.scrollWidth>this.tableDivElement.clientWidth)}componentWillLoad(){this.validateAllowMultiSort(this._allowMultiSort),this.validateData(this._data),this.validateDataFoot(this._dataFoot),this.validateHeaders(this._headers),this.validateLabel(this._label),this.validateMinWidth(this._minWidth),this.validatePagination(this._pagination),this.validatePaginationPosition(this._paginationPosition)}getNumberOfCols(t,e){let n=0;return t.forEach((t=>{let e=0;t.forEach((t=>{var n;return e+=null!==(n=t.colSpan)&&void 0!==n?n:1})),n<e&&(n=e)})),0===n&&(n=e.length),n}getNumberOfRows(t,e){let n=0;return t.forEach((t=>{let e=0;t.forEach((t=>{var n;return e+=null!==(n=t.rowSpan)&&void 0!==n?n:1})),n<e&&(n=e)})),0===n?n=e.length:n-=this.state._dataFoot.length,n}filterHeaderKeys(t){const e=[];return t.forEach((t=>{t.forEach((t=>{"string"==typeof t.key&&e.push(t)}))})),e}getPrimaryHeader(t){var e,n;let i=this.filterHeaderKeys(null!==(e=t.horizontal)&&void 0!==e?e:[]);return this.horizontal=!0,0===i.length&&(i=this.filterHeaderKeys(null!==(n=t.vertical)&&void 0!==n?n:[]),i.length>0&&(this.horizontal=!1)),i}createDataField(t,e,n){e.horizontal=Array.isArray(null==e?void 0:e.horizontal)?e.horizontal:[],e.vertical=Array.isArray(null==e?void 0:e.vertical)?e.vertical:[];const i=this.getPrimaryHeader(e),a=this.getNumberOfCols(e.horizontal,t);let s=this.getNumberOfRows(e.vertical,t),l=0;n&&(l=s,s+=this.state._dataFoot.length);const r=[],h=[],d=[];e.vertical.forEach(((t,e)=>{h[e]=0,d[e]=[]}));for(let o=l;o<s;o++){const s=[];e.vertical.forEach(((t,e)=>{let n=0;if(d[e].forEach((t=>n+=t)),n<=o){const i=t[o-n+h[e]];if("object"==typeof i){s.push(Object.assign(Object.assign({},i),{asTd:!1,data:{}}));let t=1;if("number"==typeof i.rowSpan&&i.rowSpan>1&&(t=i.rowSpan),d[e].push(t),"number"==typeof i.colSpan&&i.colSpan>1)for(let n=1;n<i.colSpan;n++)d[e+n].push(t);h[e]++}}}));for(let e=0;e<a;e++)if(!0===this.horizontal){const a=n?this.state._dataFoot[o-l]:t[o];"object"==typeof i[e]&&null!==i[e]&&"string"==typeof i[e].key&&"object"==typeof a&&null!==a&&s.push(Object.assign(Object.assign({},i[e]),{colSpan:void 0,data:a,label:a[i[e].key],rowSpan:void 0}))}else"object"==typeof i[o]&&null!==i[o]&&"string"==typeof i[o].key&&"object"==typeof t[e]&&null!==t[e]&&s.push(Object.assign(Object.assign({},i[o]),{colSpan:void 0,data:t[e],label:t[e][i[o].key],rowSpan:void 0}));r.push(s)}if(0===t.length){let t=0,n=0;Array.isArray(e.horizontal)&&e.horizontal.length>0&&e.horizontal[0].forEach((e=>{t+=e.colSpan||1})),Array.isArray(e.vertical)&&e.vertical.length>0&&(t-=e.vertical.length,e.vertical[0].forEach((t=>{n+=t.rowSpan||1})));const i={colSpan:t,label:(0,o.a)("kol-no-entries"),render:void 0,rowSpan:Math.max(n,1)};0===r.length?r.push([i]):r[0].push(i)}return r}selectDisplayedData(t,e,n){return"number"==typeof e&&e>0&&"number"==typeof n&&n>0?(this.pageStartSlice=e*(n-1),this.pageEndSlice=e*n>t.length?t.length:e*n,t.slice(this.pageStartSlice,this.pageEndSlice)):(this.pageStartSlice=0,this.pageEndSlice=t.length,t)}cellRender(t,e){e&&(clearTimeout(l.get(e)),l.set(e,setTimeout((()=>{clearTimeout(l.get(e));const n=t.render(e,{asTd:t.asTd,label:t.label,textAlign:t.textAlign,width:t.width},t.data,this.state._data);"string"==typeof n&&(e.textContent=n)}))))}renderPagination(){return(0,i.h)("div",{class:"pagination"},(0,i.h)("span",null,(0,o.a)("kol-table-visible-range",{placeholders:{start:this.pageEndSlice>0?(this.pageStartSlice+1).toString():"0",end:this.pageEndSlice.toString(),total:this.state._pagination&&this.state._pagination._max>0?this.state._pagination._max.toString():Array.isArray(this.state._data)?this.state._data.length.toString():"0"}})),(0,i.h)("div",null,(0,i.h)("kol-pagination",{_boundaryCount:this.state._pagination._boundaryCount,_customClass:this.state._pagination._customClass,_on:this.handlePagination,_page:this.state._pagination._page,_pageSize:this.state._pagination._pageSize,_pageSizeOptions:this.state._pagination._pageSizeOptions||s,_siblingCount:this.state._pagination._siblingCount,_tooltipAlign:"bottom",_max:this.state._pagination._max||this.state._pagination._max||this.state._data.length,_label:(0,o.a)("kol-table-pagination-label",{placeholders:{label:this.state._label}})})))}render(){var t,e;const n=this.selectDisplayedData(this.state._sortedData,this.showPagination?null!==(e=null===(t=this.state._pagination)||void 0===t?void 0:t._pageSize)&&void 0!==e?e:10:this.state._sortedData.length,this.state._pagination._page||1),a=this.createDataField(n,this.state._headers),o="top"===this._paginationPosition||"both"===this._paginationPosition?this.renderPagination():null,s="bottom"===this._paginationPosition||"both"===this._paginationPosition?this.renderPagination():null;return(0,i.h)(i.H,{key:"c80e2161228b007200b23aded2c8b255ffd582dd"},this.pageEndSlice>0&&this.showPagination&&o,(0,i.h)("div",{key:"35e2f73b819963d715745efec48af99aad147f15",ref:t=>this.tableDivElement=t,class:"table",tabindex:"-1",onMouseDown:t=>{t.preventDefault()}},(0,i.h)("table",{key:"9545cfeb02836fc388d97b47ac40de61940709d0",style:{minWidth:this.state._minWidth}},(0,i.h)("caption",{key:"39a640e4b0cf65a1506adc4697753c14a244e07f",tabindex:this.tableDivElementHasScrollbar?"0":void 0},this.state._label),Array.isArray(this.state._headers.horizontal)&&(0,i.h)("thead",null,this.state._headers.horizontal.map(((t,e)=>(0,i.h)("tr",{key:`thead-${e}`},t.map(((t,n)=>{if(!0===t.asTd)return(0,i.h)("td",{key:`thead-${e}-${n}-${t.label}`,class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?e=>{this.cellRender(t,e)}:void 0},"function"!=typeof t.render?t.label:"");{const a=t;let o,s="NOS",l="codicon codicon-fold";if(a.key){const t=this.sortData.find((t=>t.key===a.key));if(t)switch(s=t.direction,t.direction){case"ASC":l="codicon codicon-chevron-up",o="ascending";break;case"DESC":l="codicon codicon-chevron-down",o="descending"}}if(a.key===this.sortedColumnHead.key)switch(s=this.sortedColumnHead.sortDirection,this.sortedColumnHead.sortDirection){case"ASC":l="codicon codicon-chevron-up",o="ascending";break;case"DESC":l="codicon codicon-chevron-down",o="descending"}return(0,i.h)("th",{class:t.textAlign?`align-${t.textAlign}`:void 0,key:`thead-${e}-${n}-${a.label}`,scope:"number"==typeof a.colSpan&&a.colSpan>1?"colgroup":"col",colSpan:a.colSpan,rowSpan:a.rowSpan,style:{width:t.width},"aria-sort":o,"data-sort":`sort-${s}`},this.disableSort||"function"!=typeof a.compareFn&&"function"!=typeof a.sort?t.label:(0,i.h)("kol-button-wc",{class:"table-sort-button",exportparts:"icon",_icons:{right:l},_label:t.label,_on:{onClick:()=>this.changeCellSort(a)}}))}})))))),(0,i.h)("tbody",{key:"d1fcfe215ffe10354cd944182bdbfb70a55d4106"},a.map(this.renderTableRow)),this.state._dataFoot.length>0?this.renderFoot():"")),this.pageEndSlice>0&&this.showPagination&&s)}static get watchers(){return{_allowMultiSort:["validateAllowMultiSort"],_data:["validateData"],_dataFoot:["validateDataFoot"],_paginationPosition:["validatePaginationPosition"],_headers:["validateHeaders"],_label:["validateLabel"],_minWidth:["validateMinWidth"],_pagination:["validatePagination"]}}};h.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  .hidden {\n    display: none;\n    visibility: hidden;\n  }\n  /* This is the text label. */\n  .hide-label > kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed !important;\n    opacity: 0.5 !important;\n    outline: none !important;\n  }\n  [aria-disabled=true]:focus kol-span-wc,\n  [disabled]:focus kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  :host {\n    display: block;\n  }\n}\n@layer kol-component {\n  :host {\n    display: grid;\n  }\n  :host > div.table {\n    max-width: 100%;\n    overflow-x: auto;\n    overflow-y: hidden;\n  }\n  :host > div.table table {\n    width: 100%;\n  }\n  caption {\n    text-align: start;\n  }\n  caption:focus {\n    outline: 0 !important;\n  }\n  .table:has(caption:focus) {\n    /* @see https://remysharp.com/til/css/focus-ring-default-styles */\n    outline: 5px auto Highlight;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: 2px;\n  }\n  .table-sort-button .button {\n    color: inherit;\n  }\n  th.align-left {\n    text-align: left;\n  }\n  th.align-left .table-sort-button .button-inner {\n    justify-items: start;\n  }\n  th.align-center {\n    text-align: center;\n  }\n  th.align-center .table-sort-button .button-inner {\n    justify-items: center;\n  }\n  th.align-right {\n    text-align: right;\n  }\n  th.align-right .table-sort-button .button-inner {\n    justify-items: end;\n  }\n  div.pagination kol-pagination {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  div.pagination,\n  div.pagination > div:last-child {\n    display: grid;\n    place-items: center;\n  }\n  @media (max-width: 1024px) {\n    div.pagination kol-pagination {\n      flex-direction: column;\n    }\n  }\n  @media (min-width: 1024px) {\n    div.pagination,\n    div.pagination > div:last-child {\n      grid-auto-flow: column;\n    }\n    div.pagination kol-pagination {\n      display: flex;\n    }\n  }\n}"}}}]);