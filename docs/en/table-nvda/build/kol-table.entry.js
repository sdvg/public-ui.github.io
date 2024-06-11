/*! For license information please see kol-table.entry.js.LICENSE.txt */
import{r as t,h as i,H as e}from"./index-330c31f9.js";import{a as s}from"./i18n-931157b2.js";import{d as o}from"./a11y.tipps-beae7792.js";import{s as n,w as a,g as l,p as r,a as h,o as d}from"./prop.validators-0a66a178.js";import"./index-fc511254.js";import"./index-3711603c.js";import"./dev.utils-5b0de6da.js";import"./reuse-c2156413.js";const c=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}:host{display:grid}:host>div.table{max-width:100%;order:1;overflow-x:auto;overflow-y:hidden}:host>div.table table{width:100%}th>div{display:grid;grid-template-columns:1fr auto;place-items:center}div.pagination{order:2}div.pagination,div.pagination>div:last-child{display:grid;place-items:center}@media (min-width: 1024px){div.pagination,div.pagination>div:last-child{grid-auto-flow:column}div.pagination kol-pagination{display:flex}}",f=[10,20,50,100],p=new Map,u=class{constructor(e){t(this,e),this.horizontal=!0,this.sortDirections=new Map,this.showPagination=!1,this.pageStartSlice=0,this.pageEndSlice=10,this.disableSort=!1,this.sortedColumnHead={label:"",key:"",sortDirection:"NOS"},this.ariaLive="",this.setSortDirection=(t,i)=>{this.sortDirections.clear(),this.sortDirections.set(t,i),this.sortFunction=t},this.handlePagination={onClick:(t,i)=>{var e;"function"==typeof(null===(e=this.state._pagination._on)||void 0===e?void 0:e.onClick)&&this.state._pagination._on.onClick(t,i),n(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:i}))},onChangePage:(t,i)=>{var e;"function"==typeof(null===(e=this.state._pagination._on)||void 0===e?void 0:e.onChangePage)&&this.state._pagination._on.onChangePage(t,i),n(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:i}))},onChangePageSize:(t,i)=>{var e;"function"==typeof(null===(e=this.state._pagination._on)||void 0===e?void 0:e.onChangePageSize)&&this.state._pagination._on.onChangePageSize(t,i),n(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_pageSize:i})),n(this,"_pageSize",i)}},this.beforePatchPagination=(t,i,e,a)=>{"_pagination"===a&&(this.showPagination=!0===t||""===t||"object"==typeof t&&null!==t)},this.updateSortedData=(t=this.sortedColumnHead)=>{let i=this.state._data;if("function"==typeof this.sortFunction)switch(this.sortDirections.get(this.sortFunction)){case"ASC":i=this.sortFunction([...this.state._data]),this.ariaLive=s("kol-sort-ascending",{placeholders:{column:t.label}}),this.sortedColumnHead={label:t.label,key:t.key,sortDirection:"ASC"};break;case"DESC":i=this.sortFunction([...this.state._data]).reverse(),this.ariaLive=s("kol-sort-descending",{placeholders:{column:t.label}}),this.sortedColumnHead={label:t.label,key:t.key,sortDirection:"DESC"};break;default:i=[...this.state._data],this.sortedColumnHead={label:"",key:"",sortDirection:"NOS"},this.ariaLive=s("kol-sort-none",{placeholders:{column:t.label}})}n(this,"_sortedData",i)},this.renderTableRow=(t,e)=>i("tr",{key:`tbody-${e}`},t.map(((t,i)=>this.renderTableCell(t,e,i)))),this.renderTableCell=(t,e,a)=>{if(!1===t.asTd){const o=t;let n,r="codicon codicon-fold";if(!this.disableSort&&o.key===this.sortedColumnHead.key)switch(this.sortedColumnHead.sortDirection){case"ASC":r="codicon codicon-chevron-up",n="ascending";break;case"DESC":r="codicon codicon-chevron-down",n="descending"}return i("th",{key:`tbody-${e}-${a}-${o.label}`,scope:"number"==typeof o.rowSpan&&o.rowSpan>1?"rowgroup":"row",colSpan:o.colSpan,rowSpan:o.rowSpan,style:{textAlign:o.textAlign,width:o.width},"aria-sort":n,"data-sort":`sort-${this.sortDirections.get(o.sort)}`},i("div",{class:"w-full flex gap-1 items-center"},i("div",{class:{"w-full":!0,[o.textAlign]:"string"==typeof o.textAlign&&o.textAlign.length>0},innerHTML:o.label,style:{textAlign:o.textAlign}}),!this.disableSort&&"function"==typeof o.sort&&i("kol-button",{exportparts:"icon",_icon:r,_hideLabel:!0,_label:s("kol-change-order",{placeholders:{colLabel:o.label}}),_on:{onClick:()=>{if("function"==typeof o.sort){switch(this.sortFunction=o.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData(o)}}},_variant:"ghost"})))}return i("td",{key:`tbody-${e}-${a}-${t.label}`,class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?i=>{this.cellRender(t,i)}:void 0,innerHTML:"function"!=typeof t.render?t.label:""})},this.renderFoot=()=>{const t=this.createDataField(this.state._dataFoot,this.state._headers,!0);return i("tfoot",null,t.map(this.renderTableRow))},this._caption=void 0,this._data=void 0,this._dataFoot=void 0,this._headers=void 0,this._minWidth=void 0,this._pagination=void 0,this.state={_caption:"\u2026",_data:[],_dataFoot:[],_headers:{horizontal:[],vertical:[]},_pagination:{_page:1,_pageSize:10,_total:0},_sortedData:[]}}validateCaption(t){a(this,"_caption",t,{required:!0})}validateData(t){l(t,(()=>{d(t,(()=>{void 0===t&&(t=[]);try{t=r(t)}catch(t){}Array.isArray(t)&&void 0===t.find((t=>!("object"==typeof t&&null!==t)))&&n(this,"_data",t,{afterPatch:()=>{setTimeout(this.updateSortedData)}})}))}))}validateDataFoot(t){l(t,(()=>{d(t,(()=>{void 0===t&&(t=[]);try{t=r(t)}catch(t){}Array.isArray(t)&&void 0===t.find((t=>!("object"==typeof t&&null!==t)))&&n(this,"_dataFoot",t,{afterPatch:()=>{setTimeout(this.updateSortedData)}})}))}))}validateHeaders(t){l(t,(()=>{d(t,(()=>{try{t=r(t)}catch(t){}h(this,"_headers",(t=>"object"==typeof t&&null!==t),new Set(["KoliBriTableHeaders"]),t,{hooks:{beforePatch:t=>{var i,e,a,n;const s=t;null===(i=s.horizontal)||void 0===i||i.forEach((t=>{t.forEach((t=>{"function"==typeof t.sort&&"string"==typeof t.sortDirection&&this.setSortDirection(t.sort,t.sortDirection)}))})),null===(e=s.vertical)||void 0===e||e.forEach((t=>{t.forEach((t=>{"function"==typeof t.sort&&"string"==typeof t.sortDirection&&this.setSortDirection(t.sort,t.sortDirection)}))})),s.horizontal&&s.vertical&&(null===(a=s.horizontal)||void 0===a?void 0:a.length)>0&&(null===(n=s.vertical)||void 0===n?void 0:n.length)>0&&(this.disableSort=!0,o("Table: You can not sort the table data, if horizontal and vertical headers are defined at the same time. (https://github.com/public-ui/kolibri/issues/2372)"))}}})}))}))}validateMinWidth(t){a(this,"_minWidth",t,{defaultValue:void 0})}validatePagination(t){try{t=r(t)}catch(t){}h(this,"_pagination",(()=>!0),new Set(["boolean","KoliBriTablePagination"]),t,{hooks:{beforePatch:this.beforePatchPagination}})}componentWillLoad(){this.validateCaption(this._caption),this.validateData(this._data),this.validateDataFoot(this._dataFoot),this.validateHeaders(this._headers),this.validateMinWidth(this._minWidth),this.validatePagination(this._pagination)}getNumberOfCols(t,i){let e=0;return t.forEach((t=>{let i=0;t.forEach((t=>{var e;return i+=null!==(e=t.colSpan)&&void 0!==e?e:1})),e<i&&(e=i)})),0===e&&(e=i.length),e}getNumberOfRows(t,i){let e=0;return t.forEach((t=>{let i=0;t.forEach((t=>{var e;return i+=null!==(e=t.rowSpan)&&void 0!==e?e:1})),e<i&&(e=i)})),0===e?e=i.length:e-=this.state._dataFoot.length,e}filterHeaderKeys(t){const i=[];return t.forEach((t=>{t.forEach((t=>{"string"==typeof t.key&&i.push(t)}))})),i}getPrimaryHeader(t){var i,e;let a=this.filterHeaderKeys(null!==(i=t.horizontal)&&void 0!==i?i:[]);return this.horizontal=!0,0===a.length&&(a=this.filterHeaderKeys(null!==(e=t.vertical)&&void 0!==e?e:[]),a.length>0&&(this.horizontal=!1)),a}createDataField(t,i,e){i.horizontal=Array.isArray(null==i?void 0:i.horizontal)?i.horizontal:[],i.vertical=Array.isArray(null==i?void 0:i.vertical)?i.vertical:[];const a=this.getPrimaryHeader(i),o=this.getNumberOfCols(i.horizontal,t);let n=this.getNumberOfRows(i.vertical,t),r=0;e&&(r=n,n+=this.state._dataFoot.length);const l=[],h=[],d=[];i.vertical.forEach(((t,i)=>{h[i]=0,d[i]=[]}));for(let s=r;s<n;s++){const n=[];i.vertical.forEach(((t,i)=>{let e=0;if(d[i].forEach((t=>e+=t)),e<=s){const a=t[s-e+h[i]];if("object"==typeof a){n.push(Object.assign(Object.assign({},a),{asTd:!1,data:{}}));let t=1;if("number"==typeof a.rowSpan&&a.rowSpan>1&&(t=a.rowSpan),d[i].push(t),"number"==typeof a.colSpan&&a.colSpan>1)for(let e=1;e<a.colSpan;e++)d[i+e].push(t);h[i]++}}}));for(let i=0;i<o;i++)if(!0===this.horizontal){const o=e?this.state._dataFoot[s-r]:t[s];"object"==typeof a[i]&&null!==a[i]&&"string"==typeof a[i].key&&"object"==typeof o&&null!==o&&n.push(Object.assign(Object.assign({},a[i]),{colSpan:void 0,data:o,label:o[a[i].key],rowSpan:void 0}))}else"object"==typeof a[s]&&null!==a[s]&&"string"==typeof a[s].key&&"object"==typeof t[i]&&null!==t[i]&&n.push(Object.assign(Object.assign({},a[s]),{colSpan:void 0,data:t[i],label:t[i][a[s].key],rowSpan:void 0}));l.push(n)}if(0===t.length){let t=0,e=0;Array.isArray(i.horizontal)&&i.horizontal.length>0&&i.horizontal[0].forEach((i=>{t+=i.colSpan||1})),Array.isArray(i.vertical)&&i.vertical.length>0&&(t-=i.vertical.length,i.vertical[0].forEach((t=>{e+=t.rowSpan||1})));const a={colSpan:t,label:s("kol-no-entries"),render:void 0,rowSpan:Math.max(e,1)};0===l.length?l.push([a]):l[0].push(a)}return l}selectDisplayedData(t,i,e){return"number"==typeof i&&i>0&&"number"==typeof e&&e>0?(this.pageStartSlice=i*(e-1),this.pageEndSlice=i*e>t.length?t.length:i*e,t.slice(this.pageStartSlice,this.pageEndSlice)):(this.pageStartSlice=0,this.pageEndSlice=t.length,t)}cellRender(t,i){i&&(clearTimeout(p.get(i)),p.set(i,setTimeout((()=>{clearTimeout(p.get(i));const e=t.render(i,{asTd:t.asTd,label:t.label,textAlign:t.textAlign,width:t.width},t.data,this.state._data);"string"==typeof e&&(i.innerHTML=e)}))))}render(){var t,a;const o=this.selectDisplayedData(this.state._sortedData,this.showPagination?null!==(a=null===(t=this.state._pagination)||void 0===t?void 0:t._pageSize)&&void 0!==a?a:10:this.state._sortedData.length,this.state._pagination._page||1),n=this.createDataField(o,this.state._headers);return i(e,null,i("span",{style:{height:"0",width:"0",overflow:"hidden"},"aria-live":"assertive"},this.ariaLive),this.pageEndSlice>0&&this.showPagination&&i("div",{class:"pagination"},i("span",null,"Eintr\xe4ge ",this.pageEndSlice>0?this.pageStartSlice+1:0," bis ",this.pageEndSlice," von"," ",this.state._pagination._total||(Array.isArray(this.state._data)?this.state._data.length:0)," angezeigt"),i("div",null,i("kol-pagination",{_boundaryCount:this.state._pagination._boundaryCount,_customClass:this.state._pagination._customClass,_on:this.handlePagination,_page:this.state._pagination._page,_pageSize:this.state._pagination._pageSize,_pageSizeOptions:this.state._pagination._pageSizeOptions||f,_siblingCount:this.state._pagination._siblingCount,_tooltipAlign:"bottom",_total:this.state._pagination._total||this.state._data.length}))),i("div",{class:"table",tabindex:"0"},i("table",{style:{minWidth:this.state._minWidth}},i("caption",null,this.state._caption),Array.isArray(this.state._headers.horizontal)&&i("thead",null,this.state._headers.horizontal.map(((t,e)=>i("tr",{key:`thead-${e}`},t.map(((t,a)=>{if(!0===t.asTd)return i("td",{key:`thead-${e}-${a}-${t.label}`,class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?i=>{this.cellRender(t,i)}:void 0,innerHTML:"function"!=typeof t.render?t.label:""});{const o=t;let n,r="codicon codicon-fold";if(o.key===this.sortedColumnHead.key)switch(this.sortedColumnHead.sortDirection){case"ASC":r="codicon codicon-chevron-up",n="ascending";break;case"DESC":r="codicon codicon-chevron-down",n="descending"}return i("th",{key:`thead-${e}-${a}-${o.label}`,scope:"number"==typeof o.colSpan&&o.colSpan>1?"colgroup":"col",colSpan:o.colSpan,rowSpan:o.rowSpan,style:{textAlign:t.textAlign,width:t.width},"aria-sort":n,"data-sort":n?`sort-${this.sortedColumnHead.sortDirection}`:"sort-NOS"},i("div",{class:"w-full flex gap-1 items-center"},i("div",{class:{"w-full":!0,[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},innerHTML:t.label,style:{textAlign:t.textAlign}}),!this.disableSort&&"function"==typeof o.sort&&i("kol-button",{exportparts:"icon",_icon:r,_hideLabel:!0,_label:s("kol-change-order",{placeholders:{colLabel:t.label}}),_on:{onClick:()=>{if("function"==typeof o.sort){switch(this.sortFunction=o.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData(o)}}},_variant:"ghost"})))}})))))),i("tbody",null,n.map(this.renderTableRow)),this.state._dataFoot.length>0?this.renderFoot():"")))}static get watchers(){return{_caption:["validateCaption"],_data:["validateData"],_dataFoot:["validateDataFoot"],_headers:["validateHeaders"],_minWidth:["validateMinWidth"],_pagination:["validatePagination"]}}};u.style={default:c};export{u as kol_table};