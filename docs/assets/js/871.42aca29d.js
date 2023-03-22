/*! For license information please see 871.42aca29d.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[871],{59419:(t,e,n)=>{n.d(e,{a:()=>a,b:()=>p,c:()=>s,d:()=>c,e:()=>u,f:()=>h,u:()=>f});var i=n(19250);const o=new Set,a=t=>{!1===o.has(t)&&(o.add(t),i.L.debug(t,{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},r=new Set,s=t=>{!1===r.has(t)&&(r.add(t),i.L.warn(t,{classifier:"\ud83d\udd25 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},l=new Set,c=t=>{!1===l.has(t)&&(l.add(t),i.L.debug(t,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},d=new Set,h=(t,e=!1)=>{!1===d.has(t)&&(d.add(t),t+=!0===e?" \u2705":"",i.L.debug(t,{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const g=new Set,u=()=>{a('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},p=t=>{"string"==typeof t&&""!==t||a("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},f=(t,e=8)=>{var n;e>7&&(n=`[${t}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===g.has(n)&&(g.add(n),i.L.debug(n,{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"})))}},44273:(t,e,n)=>{n.d(e,{a:()=>c});var i=n(44894),o=n(59419);const a={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri"},r={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},s=t=>Object.keys(t).reduce(((e,n)=>(e[`kol-${n}`]=t[n],e)),{}),l=new Set([t=>t("en",s(r)),t=>t("de",s(a))]),c=(t,e)=>{const n=(0,i.g)();if(void 0===n)return(0,o.d)("[I18n] I18nService not available! Please call the global register function."),t;let a=n.translate(t,e);return a===t&&((0,o.d)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((t=>t(((t,e)=>(n.addResourceBundle(t,e),t))))),a=n.translate(t,e)),a}},40871:(t,e,n)=>{n.r(e),n.d(e,{kol_table:()=>l});var i=n(54359),o=n(31372),a=n(44273);const r=[10,20,50,100],s=new Map,l=class{constructor(t){(0,i.r)(this,t),this.horizontal=!0,this.sortDirections=new Map,this.showPagination=!1,this.pageStartSlice=0,this.pageEndSlice=10,this.setSortDirection=(t,e)=>{this.sortDirections.clear(),this.sortDirections.set(t,e),this.sortFunction=t},this.handlePagination={onClick:(t,e)=>{var n;"function"==typeof(null===(n=this.state._pagination._on)||void 0===n?void 0:n.onClick)&&this.state._pagination._on.onClick(t,e),(0,o.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:e}))},onChangePage:(t,e)=>{var n;"function"==typeof(null===(n=this.state._pagination._on)||void 0===n?void 0:n.onChangePage)&&this.state._pagination._on.onChangePage(t,e),(0,o.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:e}))},onChangePageSize:(t,e)=>{var n;"function"==typeof(null===(n=this.state._pagination._on)||void 0===n?void 0:n.onChangePageSize)&&this.state._pagination._on.onChangePageSize(t,e),(0,o.s)(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_pageSize:e})),(0,o.s)(this,"_pageSize",e)}},this.beforePatchPagination=(t,e,n,i)=>{"_pagination"===i&&(this.showPagination=!0===t||""===t||"object"==typeof t&&null!==t)},this.updateSortedData=()=>{let t=this.state._data;if("function"==typeof this.sortFunction)switch(this.sortDirections.get(this.sortFunction)){case"NOS":t=[...this.state._data];break;case"ASC":t=this.sortFunction([...this.state._data]);break;default:t=this.sortFunction([...this.state._data]).reverse()}(0,o.s)(this,"_sortedData",t)},this._caption=void 0,this._data=void 0,this._headers=void 0,this._minWidth=void 0,this._pagination=void 0,this.state={_caption:"\u2026",_data:[],_headers:{horizontal:[],vertical:[]},_pagination:{_page:1,_pageSize:10,_total:0},_sortedData:[]}}validateCaption(t){(0,o.w)(this,"_caption",t,{required:!0})}validateData(t){(0,o.g)(t,(()=>{(0,o.o)(t,(()=>{void 0===t&&(t=[]);try{t=(0,o.p)(t)}catch(t){}Array.isArray(t)&&void 0===t.find((t=>!("object"==typeof t&&null!==t)))&&(0,o.s)(this,"_data",t,{afterPatch:()=>{const t=setTimeout((()=>{clearTimeout(t),this.updateSortedData()}))}})}))}))}validateHeaders(t){(0,o.g)(t,(()=>{(0,o.o)(t,(()=>{try{t=(0,o.p)(t)}catch(t){}(0,o.a)(this,"_headers",(t=>"object"==typeof t&&null!==t),new Set(["KoliBriTableHeaders"]),t,{hooks:{beforePatch:t=>{var e,n;const i=t;null===(e=i.horizontal)||void 0===e||e.forEach((t=>{t.forEach((t=>{"function"==typeof t.sort&&"string"==typeof t.sortDirection&&this.setSortDirection(t.sort,t.sortDirection)}))})),null===(n=i.vertical)||void 0===n||n.forEach((t=>{t.forEach((t=>{"function"==typeof t.sort&&"string"==typeof t.sortDirection&&this.setSortDirection(t.sort,t.sortDirection)}))}))}}})}))}))}validateMinWidth(t){(0,o.w)(this,"_minWidth",t,{defaultValue:void 0})}validatePagination(t){try{t=(0,o.p)(t)}catch(t){}(0,o.a)(this,"_pagination",(()=>!0),new Set(["boolean","KoliBriTablePagination"]),t,{hooks:{beforePatch:this.beforePatchPagination}})}componentWillLoad(){this.validateCaption(this._caption),this.validateData(this._data),this.validateHeaders(this._headers),this.validateMinWidth(this._minWidth),this.validatePagination(this._pagination)}getNumberOfCols(t,e){let n=0;return t.forEach((t=>{let e=0;t.forEach((t=>{var n;return e+=null!==(n=t.colSpan)&&void 0!==n?n:1})),n<e&&(n=e)})),0===n&&(n=e.length),n}getNumberOfRows(t,e){let n=0;return t.forEach((t=>{let e=0;t.forEach((t=>{var n;return e+=null!==(n=t.rowSpan)&&void 0!==n?n:1})),n<e&&(n=e)})),0===n&&(n=e.length),n}filterHeaderKeys(t){const e=[];return t.forEach((t=>{t.forEach((t=>{"string"==typeof t.key&&e.push(t)}))})),e}getPrimaryHeader(t){var e,n;let i=this.filterHeaderKeys(null!==(e=t.horizontal)&&void 0!==e?e:[]);return this.horizontal=!0,0===i.length&&(i=this.filterHeaderKeys(null!==(n=t.vertical)&&void 0!==n?n:[]),i.length>0&&(this.horizontal=!1)),i}createDataField(t,e){e.horizontal=Array.isArray(null==e?void 0:e.horizontal)?e.horizontal:[],e.vertical=Array.isArray(null==e?void 0:e.vertical)?e.vertical:[];const n=this.getPrimaryHeader(e),i=this.getNumberOfCols(e.horizontal,t),o=this.getNumberOfRows(e.vertical,t),r=[],s=[],l=[];e.vertical.forEach(((t,e)=>{s[e]=0,l[e]=[]}));for(let a=0;a<o;a++){const o=[];e.vertical.forEach(((t,e)=>{let n=0;if(l[e].forEach((t=>n+=t)),n<=a){const i=t[a-n+s[e]];if("object"==typeof i){o.push(Object.assign(Object.assign({},i),{asTd:!1,data:{}}));let t=1;if("number"==typeof i.rowSpan&&i.rowSpan>1&&(t=i.rowSpan),l[e].push(t),"number"==typeof i.colSpan&&i.colSpan>1)for(let n=1;n<i.colSpan;n++)l[e+n].push(t);s[e]++}}}));for(let e=0;e<i;e++)!0===this.horizontal?"object"==typeof n[e]&&null!==n[e]&&"string"==typeof n[e].key&&"object"==typeof t[a]&&null!==t[a]&&o.push(Object.assign(Object.assign({},n[e]),{colSpan:void 0,data:t[a],label:t[a][n[e].key],rowSpan:void 0})):"object"==typeof n[a]&&null!==n[a]&&"string"==typeof n[a].key&&"object"==typeof t[e]&&null!==t[e]&&o.push(Object.assign(Object.assign({},n[a]),{colSpan:void 0,data:t[e],label:t[e][n[a].key],rowSpan:void 0}));r.push(o)}if(0===t.length){let t=0,n=0;Array.isArray(e.horizontal)&&e.horizontal.length>0&&e.horizontal[0].forEach((e=>{t+=e.colSpan||1})),Array.isArray(e.vertical)&&e.vertical.length>0&&(t-=e.vertical.length,e.vertical[0].forEach((t=>{n+=t.rowSpan||1})));const i={colSpan:t,label:(0,a.a)("kol-no-entries"),render:void 0,rowSpan:Math.max(n,1)};0===r.length?r.push([i]):r[0].push(i)}return r}selectDisplayedData(t,e,n){return"number"==typeof e&&e>0&&"number"==typeof n&&n>0?(this.pageStartSlice=e*(n-1),this.pageEndSlice=e*n>t.length?t.length:e*n,t.slice(this.pageStartSlice,this.pageEndSlice)):(this.pageStartSlice=0,this.pageEndSlice=t.length,t)}cellRender(t,e){e&&(clearTimeout(s.get(e)),s.set(e,setTimeout((()=>{if(clearTimeout(s.get(e)),"function"==typeof t.render){const n=t.render(e,{asTd:t.asTd,label:t.label,textAlign:t.textAlign,width:t.width},t.data,this.state._data);"string"==typeof n&&(e.innerHTML=n)}}))))}render(){var t,e;const n=this.selectDisplayedData(this.state._sortedData,this.showPagination?null!==(e=null===(t=this.state._pagination)||void 0===t?void 0:t._pageSize)&&void 0!==e?e:10:this.state._sortedData.length,this.state._pagination._page||1),o=this.createDataField(n,this.state._headers);return(0,i.h)(i.H,null,(0,i.h)("div",{tabindex:"0"},(0,i.h)("table",{style:{minWidth:this.state._minWidth}},(0,i.h)("caption",null,this.state._caption),Array.isArray(this.state._headers.horizontal)&&(0,i.h)("thead",null,this.state._headers.horizontal.map(((t,e)=>(0,i.h)("tr",{key:`thead-${e}`},t.map(((t,n)=>!0===t.asTd?(0,i.h)("td",{key:`thead-${e}-${n}-${t.label}`,class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?e=>{this.cellRender(t,e)}:void 0,innerHTML:"function"!=typeof t.render?t.label:""}):(0,i.h)("th",{key:`thead-${e}-${n}-${t.label}`,scope:"number"==typeof t.colSpan&&t.colSpan>1?"colgroup":"col",colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},"aria-sort":"function"==typeof t.sort?t.sort!==this.sortFunction||"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"none":"ASC"===this.sortDirections.get(t.sort)?"ascending":"descending":void 0,"data-sort":`sort-${this.sortDirections.get(t.sort)}`},(0,i.h)("div",{class:"w-full flex gap-1 items-center"},(0,i.h)("div",{class:{"w-full":!0,[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},innerHTML:t.label,style:{textAlign:t.textAlign}}),"function"==typeof t.sort&&(0,i.h)("kol-button",{exportparts:"button,ghost",_ariaLabel:(0,a.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_icon:t.sort!==this.sortFunction||"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"codicon codicon-fold":"ASC"===this.sortDirections.get(t.sort)?"codicon codicon-chevron-up":"codicon codicon-chevron-down",_iconOnly:!0,_label:(0,a.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_on:{onClick:()=>{if("function"==typeof t.sort){switch(this.sortFunction=t.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData()}}},_variant:"ghost"}))))))))),(0,i.h)("tbody",null,o.map(((t,e)=>(0,i.h)("tr",{key:`tbody-${e}`},t.map(((t,n)=>!1===t.asTd?(0,i.h)("th",{key:`tbody-${e}-${n}-${t.label}`,scope:"number"==typeof t.rowSpan&&t.rowSpan>1?"rowgroup":"row",colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},"aria-sort":"function"==typeof t.sort?t.sort!==this.sortFunction||"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"none":"ASC"===this.sortDirections.get(t.sort)?"ascending":"descending":void 0,"data-sort":`sort-${this.sortDirections.get(t.sort)}`},(0,i.h)("div",{class:"w-full flex gap-1 items-center"},(0,i.h)("div",{class:{"w-full":!0,[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},innerHTML:t.label,style:{textAlign:t.textAlign}}),"function"==typeof t.sort&&(0,i.h)("kol-button",{exportparts:"button,ghost",_ariaLabel:(0,a.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_icon:t.sort!==this.sortFunction||"NOS"===this.sortDirections.get(t.sort)||void 0===this.sortDirections.get(t.sort)?"codicon codicon-fold":"ASC"===this.sortDirections.get(t.sort)?"codicon codicon-chevron-up":"codicon codicon-chevron-down",_iconOnly:!0,_label:(0,a.a)("kol-change-order",{placeholders:{colLabel:t.label}}),_on:{onClick:()=>{if("function"==typeof t.sort){switch(this.sortFunction=t.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData()}}},_variant:"ghost"}))):(0,i.h)("td",{key:`tbody-${e}-${n}-${t.label}`,class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?e=>{this.cellRender(t,e)}:void 0,innerHTML:"function"!=typeof t.render?t.label:""}))))))))),this.pageEndSlice>0&&this.showPagination&&(0,i.h)("div",{class:"pagination"},(0,i.h)("span",null,"Eintr\xe4ge ",this.pageEndSlice>0?this.pageStartSlice+1:0," bis ",this.pageEndSlice," von"," ",this.state._pagination._total||(Array.isArray(this.state._data)?this.state._data.length:0)," angezeigt"),(0,i.h)("div",null,(0,i.h)("kol-pagination",{_boundaryCount:this.state._pagination._boundaryCount,_customClass:this.state._pagination._customClass,_on:this.handlePagination,_page:this.state._pagination._page,_pageSize:this.state._pagination._pageSize,_pageSizeOptions:this.state._pagination._pageSizeOptions||r,_siblingCount:this.state._pagination._siblingCount,_tooltipAlign:"bottom",_total:this.state._pagination._total||this.state._data.length}))))}static get watchers(){return{_caption:["validateCaption"],_data:["validateData"],_headers:["validateHeaders"],_minWidth:["validateMinWidth"],_pagination:["validatePagination"]}}};l.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']),input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],option,select,textarea{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button,input,option,select,textarea{cursor:pointer;font-family:inherit;font-size:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}:host>div{overflow-x:auto;overflow-y:hidden}table{width:100%}th>div{display:grid;grid-template-columns:1fr auto;place-items:center;gap:0.25em}div.pagination{padding:0.5em}div.pagination,div.pagination>div:last-child{display:grid;place-items:center;gap:0.5em}@media (min-width: 1024px){div.pagination,div.pagination>div:last-child{grid-auto-flow:column}div.pagination kol-pagination{display:flex}}"}},31372:(t,e,n)=>{n.d(e,{K:()=>nt,a:()=>O,b:()=>M,c:()=>x,d:()=>T,e:()=>H,f:()=>z,g:()=>N,h:()=>K,i:()=>tt,j:()=>I,k:()=>J,l:()=>et,m:()=>W,n:()=>G,o:()=>E,p:()=>B,q:()=>U,r:()=>c,s:()=>C,t:()=>Q,u:()=>R,w:()=>P});var i=n(59419),o=n(19250),a=n(4629);const r=(t,e)=>{e.forEach((e=>{!1===t.has(e)&&t.add(e)}))},s=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){const n=new Set;r(n,e.querySelectorAll(t));const i=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<i.length;e++){const o=i[e].shadowRoot;r(n,s(t,"object"==typeof o&&null!==o?o:i[e]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},l=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){let n=e.querySelector(t);if(null===n){const i=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<i.length;e++){const o=i[e].shadowRoot;if(n=l(t,"object"==typeof o&&null!==o?o:i[e]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=f,d=f,h=function(t){var e=b(t);return{r:e[0],g:e[1],b:e[2],a:3==e.length?255:Math.round(e[3])}},g=function(t){var e=b(t);return 3==e.length&&e.push(255),255==e[3]?"rgb("+e[0]+", "+e[1]+", "+e[2]+")":0==e[3]?"rgba("+e[0]+", "+e[1]+", "+e[2]+", 0)":"rgba("+e[0]+", "+e[1]+", "+e[2]+", "+String(e[3]/255).substr(1)+")"},u=function(t){3==(e=b(t)).length&&e.push(255);var e,n=255==e[3],i=y(e[0]),o=y(e[1]),a=y(e[2]),r=function(t,e,n,i){var o=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=o.indexOf(t)&&-1!=o.indexOf(e)&&-1!=o.indexOf(n)&&-1!=o.indexOf(i)}(i,o,a,e=y(Math.round(e[3])));return n?r?"#"+i.charAt(0)+o.charAt(0)+a.charAt(0):"#"+i+o+a:r?"#"+i.charAt(0)+o.charAt(0)+a.charAt(0)+e.charAt(0):"#"+i+o+a+e},p=function(t){var e=b(t);return 3==e.length?e.push(255):e[3]=Math.round(e[3]),(e[3]<<24>>>0|e[0]<<16|e[1]<<8|e[2])>>>0};function f(t){var e=b(t);return 3==e.length?e.concat(255):(e[3]=Math.round(e[3]),e)}function b(t){return"string"==typeof t?function(t){return"red"==t?[255,0,0]:"green"==t?[0,255,0]:"blue"==t?[0,0,255]:"black"==t?[0,0,0]:"white"==t?[255,255,255]:"cyan"==t?[0,255,255]:"gray"==t||"grey"==t?[128,128,128]:"magenta"==t||"pink"==t?[255,0,255]:"yellow"==t?[255,255,0]:void 0}(t=t.toLowerCase())||function(t){var e=t.replace(/^#/,""),n=e.length;if(3==n||4==n){var i=v(e[0]),o=v(e[1]),a=v(e[2]),r=3==n?255:v(e[3]);if(isNaN(i)||isNaN(o)||isNaN(a)||isNaN(r))return;return[i,o,a,r]}}(t)||function(t){var e=t.replace(/^#/,""),n=e.length;if(6==n||8==n){var i=v(e.slice(0,2)),o=v(e.slice(2,4)),a=v(e.slice(4,6)),r=6==n?255:v(e.slice(6,8));if(isNaN(i)||isNaN(o)||isNaN(a)||isNaN(r))return;return[i,o,a,r]}}(t)||function(t){if("rgb("==t.substr(0,4)){var e=(t=t.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=m(e[0],!0),i=m(e[1],!0),o=m(e[2],!0);if(-1!=n&&-1!=i&&-1!=o)return[n,i,o,255]}}(t)||function(t){if("rgba("==t.substr(0,5)){var e=(t=t.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=m(e[0],!0),i=m(e[1],!0),o=m(e[2],!0),a=m(255*e[3]);if(-1!=n&&-1!=i&&-1!=o&&-1!=a)return[n,i,o,a]}}(t)||[0,0,0,255]:function(t){if("[object Object]"===Object.prototype.toString.call(t)&&Object.getPrototypeOf(t)===Object.getPrototypeOf({})){var e=m(null!=t.r?t.r:null!=t.red?t.red:0,!0),n=m(null!=t.g?t.g:null!=t.green?t.green:0,!0),i=m(null!=t.b?t.b:null!=t.blue?t.blue:0,!0),o=m(null!=t.a?t.a:null!=t.alpha?t.alpha:255,!0);if(-1!=e&&-1!=n&&-1!=i&&-1!=o)return[e,n,i,o]}}(t)||function(t){if(Array.isArray(t)&&(3==t.length||4==t.length)){var e=m(t[0],!0),n=m(t[1],!0),i=m(t[2],!0),o=m(null!=t[3]?t[3]:255,!0);if(-1!=e&&-1!=n&&-1!=i&&-1!=o)return[e,n,i,o]}}(t)||function(t){if("number"==typeof t&&Math.floor(t)==t&&t<=4294967295&&t>=0)return[t>>16&255,t>>8&255,255&t,t>>24&255]}(t)||[0,0,0,255]}function y(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function v(t){return 1==t.length?parseInt(t+t,16):parseInt(t,16)}function m(t,e){return"number"!=typeof t||!0===e&&Math.floor(t)!==t?-1:t>=0&&t<=255?t:-1}c.arr=d,c.obj=h,c.css=g,c.hex=u,c.num=p;var S=1/12.92;function w(t){return Math.pow((t+.055)/1.055,2.4)}function k(t){var e=t[0]/255,n=t[1]/255,i=t[2]/255;return.2126*(e<=.03928?e*S:w(e))+.7152*(n<=.03928?n*S:w(n))+.0722*(i<=.03928?i*S:w(i))}function _(t){var e=255;8===(t=t.replace(/^#/,"")).length&&(e=parseInt(t.slice(6,8),16),t=t.substring(0,6)),4===t.length&&(e=parseInt(t.slice(3,4).repeat(2),16),t=t.substring(0,3)),3===t.length&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);var n=parseInt(t,16);return[n>>16,n>>8&255,255&n,e]}function A(t,e){return function(t,e){return(Math.max(t,e)+.05)/(Math.min(t,e)+.05)}(k(t),k(e))}function x(t,e){return A(_(t),_(e))}function D(t){return t>=7?"AAA":t>=4.5?"AA":t>=3?"AA Large":"Fail"}const L=/\[object Object\]/,E=(t,e)=>{"string"==typeof t&&L.test(t)||e()},N=(t,e)=>{"string"==typeof t&&""===t||e()},z=(t,e)=>{(0,o.b)()&&(o.L.debug([t,e]),o.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(t,"target",{value:e,writable:!1})},C=(t,e,n,i={})=>{var o,a;void 0===t.nextHooks&&(t.nextHooks=new Map),void 0===t.nextState&&(t.nextState=new Map),t.nextState.get(e)!==n&&(t.nextHooks.get(e)instanceof Map==0&&t.nextHooks.set(e,new Map),"function"==typeof i.afterPatch&&(null===(o=t.nextHooks.get(e))||void 0===o||o.set("afterPatch",i.afterPatch)),"function"==typeof i.beforePatch&&(null===(a=t.nextHooks.get(e))||void 0===a||a.set("beforePatch",i.beforePatch)),t.nextState.set(e,n),(t=>{var e,n,i;null===(e=t.nextHooks)||void 0===e||e.forEach(((e,n)=>{var i;const o=e.get("beforePatch");"function"==typeof o&&o(null===(i=t.nextState)||void 0===i?void 0:i.get(n),t.nextState,t,n)})),(null===(n=t.nextState)||void 0===n?void 0:n.size)>0&&(t.state=Object.assign(Object.assign({},t.state),Object.fromEntries(t.nextState)),delete t.nextState,null===(i=t.nextHooks)||void 0===i||i.forEach(((e,n)=>{const i=e.get("afterPatch");"function"==typeof i&&i(t.state[n],t.state,t,n)}))),delete t.nextHooks})(t))};function O(t,e,n,o,a,r={}){n(a)?C(t,e,a,r.hooks):null!=a||r.required?(r.required||o.add(null),((t,e,n,o)=>{(0,i.d)(`[${t.constructor.name}] Der Property-Wert (${n}) f\xfcr '${e}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)})(t,e,a,o)):C(t,e,r.defaultValue,r.hooks)}const M=(t,e,n,i)=>{O(t,e,(t=>"boolean"==typeof t),new Set(["Boolean {true, false}"]),n,i)},P=(t,e,n,i={})=>{const o="number"==typeof i.minLength?null==i?void 0:i.minLength:0;O(t,e,(t=>"string"==typeof t&&t.length>=o&&(void 0===(null==i?void 0:i.maxLength)||t.length<=i.maxLength)),new Set(["String"]),n,i)},H=(t,e,n,i)=>{O(t,e,(t=>"number"==typeof t&&(void 0===(null==i?void 0:i.min)||"number"==typeof(null==i?void 0:i.min)&&t>=i.min)&&(void 0===(null==i?void 0:i.max)||"number"==typeof(null==i?void 0:i.max)&&t<=i.max)),new Set(["Number"]),n,i)},T=(t,e,n,i,a=(t=>t==t),r={})=>{N(i,(()=>{E(i,(()=>{void 0===i&&(i=[]);try{try{i=B(i)}catch(t){}if(Array.isArray(i)){const s=i.find((t=>!n(t)));void 0===s&&a(i)?C(t,e,i,r.hooks):E(s,(()=>{throw o.L.debug(s),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else E(i,(()=>{throw o.L.debug(i),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(t){o.L.debug(t)}}))}))},j=/^(true|false)$/,$=/^-?(0|[1-9]\d*)$/,F=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,W=t=>{const e=typeof t,n=`${t}`;if("string"==typeof t)if(j.test(t))t="true"===t;else if($.test(t))t=parseInt(t);else if(F.test(t))t=parseFloat(t);else if(q.test(t))try{t=B(t)}catch(t){}return e!==typeof t&&(0,i.d)(`You have used a stringified property value (${n} to ${JSON.stringify(t)}) which type switched from ${e} to ${typeof t}!`),t},R=t=>{try{return JSON.stringify(t).replace(/"/g,"'")}catch(e){throw o.L.warn(["stringifyJson",t]),o.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},q=/^[{[]/,B=t=>{if("string"==typeof t)try{return JSON.parse(t)}catch(e){if(q.test(t))try{return JSON.parse(t.replace(/'/g,'"'))}catch(e){o.L.warn(["parseJson",t]),o.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},K=t=>"boolean"==typeof t?!0===t?"true":"false":void 0,I=t=>"string"==typeof t?t:K(t),J=(t,e)=>l(t,e||(0,o.g)()),U=(t,e)=>s(t,e||(0,o.g)());let Z=null;const V=()=>(Z=Z||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,o.g)().body,level:"Fail",score:1},Z),Y=/(\d+, ){3}0\)/,G=(t,e=V())=>{const n=getComputedStyle(t),i=Y.test(n.backgroundColor)?e.backgroundColor:c.hex(n.backgroundColor),a=Y.test(n.color)?e.color:c.hex(n.color),r=x(i,a),s={backgroundColor:i,color:a,domNode:t,level:D(r),score:r};return r<4.5&&o.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},Q=(t,e=V())=>{e.domNode instanceof HTMLElement&&(e=G(e.domNode,e));const n=e.domNode.querySelector(t);if(null===n){const n=e.domNode.querySelectorAll('[class="hydrated"]');for(let i=0;i<n.length&&(e.domNode=n[i],null===(e=Q(t,e)).domNode);i++);return e}return G(n,e)},X=(t,e=window)=>{t instanceof HTMLElement?(e.scrollTo({behavior:"smooth",top:t.getBoundingClientRect().top+(0,o.a)().pageYOffset-50}),t.focus()):(0,i.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},tt=(t,e)=>{if((t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot)&&"string"==typeof e){(0,i.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const n=`${e}`;e=t,t=n}if("string"==typeof t){const n=J(t,e);n instanceof HTMLElement?X(n):(0,i.d)(`Es konnte kein HTMLElement mit dem Selector (${t}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,i.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class et{static queryHtmlElementColors(t,e,n=!1,i=!0){let a=null;if(!0===n||!1===et.executionLock)if(!1===n&&(et.cache.clear(),et.cache.set(e.domNode,e),et.executionLock=!0,!0===i&&o.L.debug("[KoliBriUtils] Color contrast analysis started...")),t===e.domNode)a=e;else{const n=new Set;if(e.domNode.shadowRoot){const t=e.domNode.shadowRoot.children;for(let e=0;e<t.length;e++)n.add(t[e])}const i=e.domNode;if("function"==typeof i.assignedNodes){const t=i.assignedNodes();for(let e=0;e<t.length;e++)t[e]instanceof HTMLElement&&n.add(t[e])}const o=e.domNode.children;for(let t=0;t<o.length;t++)n.add(o[t]);const r=Array.from(n);for(let s=0;s<r.length;s++){let n=et.cache.get(r[s]);void 0===n&&(n=G(r[s],e)),et.cache.set(r[s],n);const i=et.queryHtmlElementColors(t,n,!0,!1);if(null!==i){a=i;break}}}else o.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===i&&o.L.debug(`[KoliBriUtils] Color contrast analysis finished (${et.cache.size} DOM elements are analysed).`),et.executionLock=!1,et.cache.clear()),a}}et.executionLock=!1,et.cache=new Map;class nt{}nt.patchTheme=a.p,nt.patchThemeTag=a.a,nt.querySelector=J,nt.querySelectorAll=U,nt.scrollByHTMLElement=X,nt.scrollBySelector=tt,nt.stringifyJson=R}}]);