/*! For license information please see 9783.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[9783],{6175:(t,e,i)=>{i.d(e,{t:()=>h});var a=i(1508),n=i(8125);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite",page:"Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Öffnet in neuem Tab.","kolibri-logo":"Logo von KoliBri","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen",version:"Versionsnummer","error-list":"Fehlerliste","error-list-message":"Bitte korrigieren Sie folgende Fehler:"},s={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page",page:"Page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"Opens in new tab.","kolibri-logo":"KoliBri logo","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all",version:"Version number","error-list":"Error list","error-list-message":"Please correct the following errors"},r=t=>Object.keys(t).reduce(((e,i)=>(e[`kol-${i}`]=t[i],e)),{}),l=new Set([t=>t("en",r(s)),t=>t("de",r(o))]);let h=(t,e)=>{const i=(0,a.g)();let n=i.translate(t,e);return n===t&&(i.addTranslations(l),n=i.translate(t,e)),n};"test"===n.p&&(h=t=>t)},9933:(t,e,i)=>{i.r(e),i.d(e,{kol_table:()=>g});var a=i(2951),n=i(6175),o=i(9415),s=i(7703),r=i(2016),l=i(2454);const h=[10,20,50,100],c=new Map,d=t=>!0===t||""===t||"object"==typeof t&&null!==t,g=class{constructor(t){(0,a.r)(this,t),this.horizontal=!0,this.sortDirections=new Map,this.showPagination=!1,this.pageStartSlice=0,this.pageEndSlice=10,this.disableSort=!1,this.sortedColumnHead={label:"",key:"",sortDirection:"NOS"},this.setSortDirection=(t,e)=>{this.sortDirections.clear(),this.sortDirections.set(t,e),this.sortFunction=t},this.handlePagination={onClick:(t,e)=>{var i;"function"==typeof(null===(i=this.state._pagination._on)||void 0===i?void 0:i.onClick)&&this.state._pagination._on.onClick(t,e),(0,r.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:e}))},onChangePage:(t,e)=>{var i;"function"==typeof(null===(i=this.state._pagination._on)||void 0===i?void 0:i.onChangePage)&&this.state._pagination._on.onChangePage(t,e),(0,r.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:e}))},onChangePageSize:(t,e)=>{var i;"function"==typeof(null===(i=this.state._pagination._on)||void 0===i?void 0:i.onChangePageSize)&&this.state._pagination._on.onChangePageSize(t,e),(0,r.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_pageSize:e})),(0,r.s)(this,"_pageSize",e)}},this.updateSortedData=(t=this.sortedColumnHead)=>{let e=this.state._data;if("function"==typeof this.sortFunction)switch(this.sortDirections.get(this.sortFunction)){case"ASC":e=this.sortFunction([...this.state._data]),this.sortedColumnHead={label:t.label,key:t.key,sortDirection:"ASC"};break;case"DESC":e=this.sortFunction([...this.state._data]).reverse(),this.sortedColumnHead={label:t.label,key:t.key,sortDirection:"DESC"};break;default:e=[...this.state._data],this.sortedColumnHead={label:"",key:"",sortDirection:"NOS"}}(0,r.s)(this,"_sortedData",e)},this.renderTableRow=(t,e)=>(0,a.h)("tr",{key:`tbody-${e}`},t.map(((t,i)=>this.renderTableCell(t,e,i)))),this.renderTableCell=(t,e,i)=>{if(!1===t.asTd){const o=t;let s,r="codicon codicon-fold";if(!this.disableSort&&o.key===this.sortedColumnHead.key)switch(this.sortedColumnHead.sortDirection){case"ASC":r="codicon codicon-chevron-up",s="ascending";break;case"DESC":r="codicon codicon-chevron-down",s="descending"}return(0,a.h)("th",{key:`tbody-${e}-${i}-${o.label}`,scope:"number"==typeof o.rowSpan&&o.rowSpan>1?"rowgroup":"row",colSpan:o.colSpan,rowSpan:o.rowSpan,style:{textAlign:o.textAlign,width:o.width},"aria-sort":s,"data-sort":`sort-${this.sortDirections.get(o.sort)}`},(0,a.h)("div",{class:"w-full flex gap-1 items-center"},(0,a.h)("div",{class:{"w-full":!0,[o.textAlign]:"string"==typeof o.textAlign&&o.textAlign.length>0},style:{textAlign:o.textAlign}},o.label),!this.disableSort&&"function"==typeof o.sort&&(0,a.h)(l.p,{exportparts:"icon",_icon:r,_hideLabel:!0,_label:(0,n.t)("kol-change-order",{placeholders:{colLabel:o.label}}),_on:{onClick:()=>{if("function"==typeof o.sort){switch(this.sortFunction=o.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData(o)}}},_variant:"ghost"})))}return(0,a.h)("td",{key:`tbody-${e}-${i}-${t.label}`,class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?e=>{this.cellRender(t,e)}:void 0},"function"!=typeof t.render?t.label:"")},this.renderFoot=()=>{const t=this.createDataField(this.state._dataFoot,this.state._headers,!0);return(0,a.h)("tfoot",null,t.map(this.renderTableRow))},this.tableDivElementHasScrollbar=!1,this._caption=void 0,this._data=void 0,this._dataFoot=void 0,this._headers=void 0,this._label=void 0,this._minWidth=void 0,this._pagination=void 0,this.state={_data:[],_dataFoot:[],_headers:{horizontal:[],vertical:[]},_label:"…",_pagination:{_page:1,_pageSize:10,_max:0},_sortedData:[]}}validateCaption(t){this.validateLabel(t)}validateData(t){(0,r.g)(t,(()=>{(0,r.o)(t,(()=>{void 0===t&&(t=[]);try{t=(0,r.p)(t)}catch(t){}Array.isArray(t)&&void 0===t.find((t=>!("object"==typeof t&&null!==t)))&&(0,r.s)(this,"_data",t,{afterPatch:()=>{setTimeout(this.updateSortedData)}})}))}))}validateDataFoot(t){(0,r.g)(t,(()=>{(0,r.o)(t,(()=>{void 0===t&&(t=[]);try{t=(0,r.p)(t)}catch(t){}Array.isArray(t)&&void 0===t.find((t=>!("object"==typeof t&&null!==t)))&&(0,r.s)(this,"_dataFoot",t,{afterPatch:()=>{setTimeout(this.updateSortedData)}})}))}))}validateHeaders(t){(0,r.g)(t,(()=>{(0,r.o)(t,(()=>{try{t=(0,r.p)(t)}catch(t){}(0,r.w)(this,"_headers",(t=>"object"==typeof t&&null!==t),new Set(["KoliBriTableHeaders"]),t,{hooks:{beforePatch:t=>{var e,i,a,n;const o=t=>{t.forEach(((t,e)=>{const i=t.sortDirection;"function"!=typeof t.sort||"ASC"!==i&&"DESC"!==i||(this.setSortDirection(t.sort,i),setTimeout((()=>this.updateSortedData({key:t.key||`cell-${e}`,label:t.label,sortDirection:i}))))}))},r=t;null===(e=r.horizontal)||void 0===e||e.forEach(o),null===(i=r.vertical)||void 0===i||i.forEach(o),r.horizontal&&r.vertical&&(null===(a=r.horizontal)||void 0===a?void 0:a.length)>0&&(null===(n=r.vertical)||void 0===n?void 0:n.length)>0&&(this.disableSort=!0,(0,s.d)("Table: You can not sort the table data, if horizontal and vertical headers are defined at the same time. (https://github.com/public-ui/kolibri/issues/2372)"))}}})}))}))}validateLabel(t){(0,o.v)(this,t,{required:!0})}validateMinWidth(t){(0,r.d)(this,"_minWidth",t,{defaultValue:void 0})}validatePagination(t){try{t=(0,r.p)(t)}catch(t){}this.showPagination=d(t),(0,r.w)(this,"_pagination",d,new Set(["boolean","KoliBriTablePagination"]),t,{defaultValue:{_page:1,_pageSize:10,_max:0}})}componentWillLoad(){this.validateData(this._data),this.validateDataFoot(this._dataFoot),this.validateHeaders(this._headers),this.validateLabel(this._label||this._caption),this.validateMinWidth(this._minWidth),this.validatePagination(this._pagination)}componentDidRender(){this.checkDivElementScrollbar()}componentDidLoad(){this.tableDivElement&&ResizeObserver&&(this.tableDivElementResizeObserver=new ResizeObserver(this.checkDivElementScrollbar.bind(this)),this.tableDivElementResizeObserver.observe(this.tableDivElement))}disconnectedCallback(){var t;null===(t=this.tableDivElementResizeObserver)||void 0===t||t.disconnect()}checkDivElementScrollbar(){this.tableDivElement&&(this.tableDivElementHasScrollbar=this.tableDivElement.scrollWidth>this.tableDivElement.clientWidth)}getNumberOfCols(t,e){let i=0;return t.forEach((t=>{let e=0;t.forEach((t=>{var i;return e+=null!==(i=t.colSpan)&&void 0!==i?i:1})),i<e&&(i=e)})),0===i&&(i=e.length),i}getNumberOfRows(t,e){let i=0;return t.forEach((t=>{let e=0;t.forEach((t=>{var i;return e+=null!==(i=t.rowSpan)&&void 0!==i?i:1})),i<e&&(i=e)})),0===i?i=e.length:i-=this.state._dataFoot.length,i}filterHeaderKeys(t){const e=[];return t.forEach((t=>{t.forEach((t=>{"string"==typeof t.key&&e.push(t)}))})),e}getPrimaryHeader(t){var e,i;let a=this.filterHeaderKeys(null!==(e=t.horizontal)&&void 0!==e?e:[]);return this.horizontal=!0,0===a.length&&(a=this.filterHeaderKeys(null!==(i=t.vertical)&&void 0!==i?i:[]),a.length>0&&(this.horizontal=!1)),a}createDataField(t,e,i){e.horizontal=Array.isArray(null==e?void 0:e.horizontal)?e.horizontal:[],e.vertical=Array.isArray(null==e?void 0:e.vertical)?e.vertical:[];const a=this.getPrimaryHeader(e),o=this.getNumberOfCols(e.horizontal,t);let s=this.getNumberOfRows(e.vertical,t),r=0;i&&(r=s,s+=this.state._dataFoot.length);const l=[],h=[],c=[];e.vertical.forEach(((t,e)=>{h[e]=0,c[e]=[]}));for(let n=r;n<s;n++){const s=[];e.vertical.forEach(((t,e)=>{let i=0;if(c[e].forEach((t=>i+=t)),i<=n){const a=t[n-i+h[e]];if("object"==typeof a){s.push(Object.assign(Object.assign({},a),{asTd:!1,data:{}}));let t=1;if("number"==typeof a.rowSpan&&a.rowSpan>1&&(t=a.rowSpan),c[e].push(t),"number"==typeof a.colSpan&&a.colSpan>1)for(let i=1;i<a.colSpan;i++)c[e+i].push(t);h[e]++}}}));for(let e=0;e<o;e++)if(!0===this.horizontal){const o=i?this.state._dataFoot[n-r]:t[n];"object"==typeof a[e]&&null!==a[e]&&"string"==typeof a[e].key&&"object"==typeof o&&null!==o&&s.push(Object.assign(Object.assign({},a[e]),{colSpan:void 0,data:o,label:o[a[e].key],rowSpan:void 0}))}else"object"==typeof a[n]&&null!==a[n]&&"string"==typeof a[n].key&&"object"==typeof t[e]&&null!==t[e]&&s.push(Object.assign(Object.assign({},a[n]),{colSpan:void 0,data:t[e],label:t[e][a[n].key],rowSpan:void 0}));l.push(s)}if(0===t.length){let t=0,i=0;Array.isArray(e.horizontal)&&e.horizontal.length>0&&e.horizontal[0].forEach((e=>{t+=e.colSpan||1})),Array.isArray(e.vertical)&&e.vertical.length>0&&(t-=e.vertical.length,e.vertical[0].forEach((t=>{i+=t.rowSpan||1})));const a={colSpan:t,label:(0,n.t)("kol-no-entries"),render:void 0,rowSpan:Math.max(i,1)};0===l.length?l.push([a]):l[0].push(a)}return l}selectDisplayedData(t,e,i){return"number"==typeof e&&e>0&&"number"==typeof i&&i>0?(this.pageStartSlice=e*(i-1),this.pageEndSlice=e*i>t.length?t.length:e*i,t.slice(this.pageStartSlice,this.pageEndSlice)):(this.pageStartSlice=0,this.pageEndSlice=t.length,t)}cellRender(t,e){e&&(clearTimeout(c.get(e)),c.set(e,setTimeout((()=>{clearTimeout(c.get(e));const i=t.render(e,{asTd:t.asTd,label:t.label,textAlign:t.textAlign,width:t.width},t.data,this.state._data);"string"==typeof i&&(e.textContent=i)}))))}render(){var t,e;const i=this.selectDisplayedData(this.state._sortedData,this.showPagination?null!==(e=null===(t=this.state._pagination)||void 0===t?void 0:t._pageSize)&&void 0!==e?e:10:this.state._sortedData.length,this.state._pagination._page||1),o=this.createDataField(i,this.state._headers);return(0,a.h)(a.H,{key:"199d3f5fe7a14ef4ffb3d94d5b5ec3b89e6c7a19",class:"kol-table"},this.pageEndSlice>0&&this.showPagination&&(0,a.h)("div",{class:"pagination"},(0,a.h)("span",null,"Einträge ",this.pageEndSlice>0?this.pageStartSlice+1:0," bis ",this.pageEndSlice," von"," ",this.state._pagination._max||(Array.isArray(this.state._data)?this.state._data.length:0)," angezeigt"),(0,a.h)("div",null,(0,a.h)(l.r,{_boundaryCount:this.state._pagination._boundaryCount,_customClass:this.state._pagination._customClass,_on:this.handlePagination,_page:this.state._pagination._page,_pageSize:this.state._pagination._pageSize,_pageSizeOptions:this.state._pagination._pageSizeOptions||h,_siblingCount:this.state._pagination._siblingCount,_tooltipAlign:"bottom",_max:this.state._pagination._max||this.state._pagination._total||this.state._data.length,_label:(0,n.t)("kol-table-pagination-label",{placeholders:{label:this.state._label}})}))),(0,a.h)("div",{key:"2ff74916a3e4838c5701bf281783732f130e1667",ref:t=>this.tableDivElement=t,class:"table",tabindex:this.tableDivElementHasScrollbar?"-1":void 0},(0,a.h)("table",{key:"84cc14bf597a038244febff56e0441a5baa9dee9",style:{minWidth:this.state._minWidth}},(0,a.h)("div",{key:"1625347128e9328e5c2744bd5e6cdd1e69c8a265",class:"focus-element",tabindex:this.tableDivElementHasScrollbar?"0":void 0,"aria-describedby":"caption"}," "),(0,a.h)("caption",{key:"11b73c10bda5634637d34a5b19f930ca34012186",id:"caption"},this.state._label),Array.isArray(this.state._headers.horizontal)&&(0,a.h)("thead",null,this.state._headers.horizontal.map(((t,e)=>(0,a.h)("tr",{key:`thead-${e}`},t.map(((t,i)=>{if(!0===t.asTd)return(0,a.h)("td",{key:`thead-${e}-${i}-${t.label}`,class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?e=>{this.cellRender(t,e)}:void 0},"function"!=typeof t.render?t.label:"");{const n=t;let o,s="codicon codicon-fold";if(n.key===this.sortedColumnHead.key)switch(this.sortedColumnHead.sortDirection){case"ASC":s="codicon codicon-chevron-up",o="ascending";break;case"DESC":s="codicon codicon-chevron-down",o="descending"}return(0,a.h)("th",{class:t.textAlign?`align-${t.textAlign}`:void 0,key:`thead-${e}-${i}-${n.label}`,scope:"number"==typeof n.colSpan&&n.colSpan>1?"colgroup":"col",colSpan:n.colSpan,rowSpan:n.rowSpan,style:{width:t.width},"aria-sort":o,"data-sort":o?`sort-${this.sortedColumnHead.sortDirection}`:"sort-NOS"},this.disableSort||"function"!=typeof n.sort?t.label:(0,a.h)(l.d,{class:"table-sort-button",exportparts:"icon",_icons:{right:s},_label:t.label,_on:{onClick:()=>{if("function"==typeof n.sort){switch(this.sortFunction=n.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData(n)}}}}))}})))))),(0,a.h)("tbody",{key:"ba13876ccc6fe9aef28f9b4f83a8e1f769021781"},o.map(this.renderTableRow)),this.state._dataFoot.length>0?this.renderFoot():"")))}static get watchers(){return{_caption:["validateCaption"],_data:["validateData"],_dataFoot:["validateDataFoot"],_headers:["validateHeaders"],_label:["validateLabel"],_minWidth:["validateMinWidth"],_pagination:["validatePagination"]}}};g.style={default:":host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role=button],button:not([role=link]),.kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}.kol-span-wc{display:grid;place-items:center}.kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>.kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}:host{display:block}:host{display:grid}:host>div.table{max-width:100%;order:1;overflow-x:auto;overflow-y:hidden}:host>div.table table{width:100%}caption{text-align:start}.focus-element{font-size:0}.focus-element:focus{outline:0 !important}.table:has(.focus-element:focus){outline:5px auto Highlight;outline:5px auto -webkit-focus-ring-color;outline-offset:2px}th>div{display:grid;grid-template-columns:1fr auto;place-items:center}.table-sort-button .button{color:inherit}th.align-left{text-align:left}th.align-left .table-sort-button .button-inner{justify-items:start}th.align-center{text-align:center}th.align-center .table-sort-button .button-inner{justify-items:center}th.align-right{text-align:right}th.align-right .table-sort-button .button-inner{justify-items:end}div.pagination{order:2}div.pagination,div.pagination>div:last-child{display:grid;place-items:center}@media (min-width: 1024px){div.pagination,div.pagination>div:last-child{grid-auto-flow:column}div.pagination .kol-pagination{display:flex}}"}},9415:(t,e,i)=>{i.d(e,{a:()=>d,c:()=>l,h:()=>r,v:()=>c});var a=i(7703),n=i(2016);const o=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function r(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(o))||void 0===e?void 0:e.length)||0}(t)>=e}function l(t){return s.test(t)}const h=new Set(["string"]),c=(t,e,i={})=>{(0,n.w)(t,"_label",(t=>"string"==typeof t),h,e,function(t){var e;return Object.assign(Object.assign({},t),{hooks:{afterPatch:(e,i,n,o)=>{var s,h;"function"==typeof(null===(s=t.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,i,n,o)),"string"==typeof e&&!1===r(e,3)&&!1===l(e)&&(0,a.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}})}(i))},d=c}}]);