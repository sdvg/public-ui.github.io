/*!
 * KoliBri - The accessible HTML-Standard
 */
import{r as registerInstance,h,H as Host}from"./index-5ab2ea42.js";import{a as translate}from"./i18n-a1e6f17e.js";import{v as validateLabel}from"./label-14bf9651.js";import{d as devHint}from"./a11y.tipps-de9972d7.js";import{s as setState,g as emptyStringByArrayHandler,d as watchString,p as parseJson,w as watchValidator,o as objectObjectHandler}from"./prop.validators-eed6b0ae.js";import"./index-2bab8f5e.js";import"./index-accc567c.js";import"./dev.utils-eba8f2da.js";import"./reuse-c2156413.js";const defaultStyleCss=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}:host{display:grid}:host>div.table{max-width:100%;order:1;overflow-x:auto;overflow-y:hidden}:host>div.table table{width:100%}th>div{display:grid;grid-template-columns:1fr auto;place-items:center}div.pagination{order:2}div.pagination,div.pagination>div:last-child{display:grid;place-items:center}@media (min-width: 1024px){div.pagination,div.pagination>div:last-child{grid-auto-flow:column}div.pagination kol-pagination{display:flex}}",PAGINATION_OPTIONS=[10,20,50,100],CELL_REFS=new Map,KolTable=class{constructor(t){registerInstance(this,t),this.horizontal=!0,this.sortDirections=new Map,this.showPagination=!1,this.pageStartSlice=0,this.pageEndSlice=10,this.disableSort=!1,this.sortedColumnHead={label:"",key:"",sortDirection:"NOS"},this.ariaLive="",this.setSortDirection=(t,e)=>{this.sortDirections.clear(),this.sortDirections.set(t,e),this.sortFunction=t},this.handlePagination={onClick:(t,e)=>{var a;"function"==typeof(null===(a=this.state._pagination._on)||void 0===a?void 0:a.onClick)&&this.state._pagination._on.onClick(t,e),setState(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:e}))},onChangePage:(t,e)=>{var a;"function"==typeof(null===(a=this.state._pagination._on)||void 0===a?void 0:a.onChangePage)&&this.state._pagination._on.onChangePage(t,e),setState(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_page:e}))},onChangePageSize:(t,e)=>{var a;"function"==typeof(null===(a=this.state._pagination._on)||void 0===a?void 0:a.onChangePageSize)&&this.state._pagination._on.onChangePageSize(t,e),setState(this,"_pagination",Object.assign(Object.assign({},this.state._pagination),{_pageSize:e})),setState(this,"_pageSize",e)}},this.beforePatchPagination=(t,e,a,i)=>{"_pagination"===i&&(this.showPagination=!0===t||""===t||"object"==typeof t&&null!==t)},this.updateSortedData=(t=this.sortedColumnHead)=>{let e=this.state._data;if("function"==typeof this.sortFunction)switch(this.sortDirections.get(this.sortFunction)){case"ASC":e=this.sortFunction([...this.state._data]),this.ariaLive=translate("kol-sort-ascending",{placeholders:{column:t.label}}),this.sortedColumnHead={label:t.label,key:t.key,sortDirection:"ASC"};break;case"DESC":e=this.sortFunction([...this.state._data]).reverse(),this.ariaLive=translate("kol-sort-descending",{placeholders:{column:t.label}}),this.sortedColumnHead={label:t.label,key:t.key,sortDirection:"DESC"};break;default:e=[...this.state._data],this.sortedColumnHead={label:"",key:"",sortDirection:"NOS"},this.ariaLive=translate("kol-sort-none",{placeholders:{column:t.label}})}setState(this,"_sortedData",e)},this.renderTableRow=(t,e)=>h("tr",{key:`tbody-${e}`},t.map(((t,a)=>this.renderTableCell(t,e,a)))),this.renderTableCell=(t,e,a)=>{if(!1===t.asTd){const i=t;let o,n="codicon codicon-fold";if(!this.disableSort&&i.key===this.sortedColumnHead.key)switch(this.sortedColumnHead.sortDirection){case"ASC":n="codicon codicon-chevron-up",o="ascending";break;case"DESC":n="codicon codicon-chevron-down",o="descending"}return h("th",{key:`tbody-${e}-${a}-${i.label}`,scope:"number"==typeof i.rowSpan&&i.rowSpan>1?"rowgroup":"row",colSpan:i.colSpan,rowSpan:i.rowSpan,style:{textAlign:i.textAlign,width:i.width},"aria-sort":o,"data-sort":`sort-${this.sortDirections.get(i.sort)}`},h("div",{class:"w-full flex gap-1 items-center"},h("div",{class:{"w-full":!0,[i.textAlign]:"string"==typeof i.textAlign&&i.textAlign.length>0},innerHTML:i.label,style:{textAlign:i.textAlign}}),!this.disableSort&&"function"==typeof i.sort&&h("kol-button",{exportparts:"icon",_icon:n,_hideLabel:!0,_label:translate("kol-change-order",{placeholders:{colLabel:i.label}}),_on:{onClick:()=>{if("function"==typeof i.sort){switch(this.sortFunction=i.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData(i)}}},_variant:"ghost"})))}return h("td",{key:`tbody-${e}-${a}-${t.label}`,class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?e=>{this.cellRender(t,e)}:void 0,innerHTML:"function"!=typeof t.render?t.label:""})},this.renderFoot=()=>{const t=this.createDataField(this.state._dataFoot,this.state._headers,!0);return h("tfoot",null,t.map(this.renderTableRow))},this._caption=void 0,this._data=void 0,this._dataFoot=void 0,this._headers=void 0,this._label=void 0,this._minWidth=void 0,this._pagination=void 0,this.state={_label:"…",_data:[],_dataFoot:[],_headers:{horizontal:[],vertical:[]},_pagination:{_page:1,_pageSize:10,_total:0},_sortedData:[]}}validateCaption(t){this.validateLabel(t)}validateData(t){emptyStringByArrayHandler(t,(()=>{objectObjectHandler(t,(()=>{void 0===t&&(t=[]);try{t=parseJson(t)}catch(t){}Array.isArray(t)&&void 0===t.find((t=>!("object"==typeof t&&null!==t)))&&setState(this,"_data",t,{afterPatch:()=>{setTimeout(this.updateSortedData)}})}))}))}validateDataFoot(t){emptyStringByArrayHandler(t,(()=>{objectObjectHandler(t,(()=>{void 0===t&&(t=[]);try{t=parseJson(t)}catch(t){}Array.isArray(t)&&void 0===t.find((t=>!("object"==typeof t&&null!==t)))&&setState(this,"_dataFoot",t,{afterPatch:()=>{setTimeout(this.updateSortedData)}})}))}))}validateHeaders(t){emptyStringByArrayHandler(t,(()=>{objectObjectHandler(t,(()=>{try{t=parseJson(t)}catch(t){}watchValidator(this,"_headers",(t=>"object"==typeof t&&null!==t),new Set(["KoliBriTableHeaders"]),t,{hooks:{beforePatch:t=>{var e,a,i,o;const n=t;null===(e=n.horizontal)||void 0===e||e.forEach((t=>{t.forEach((t=>{"function"==typeof t.sort&&"string"==typeof t.sortDirection&&this.setSortDirection(t.sort,t.sortDirection)}))})),null===(a=n.vertical)||void 0===a||a.forEach((t=>{t.forEach((t=>{"function"==typeof t.sort&&"string"==typeof t.sortDirection&&this.setSortDirection(t.sort,t.sortDirection)}))})),n.horizontal&&n.vertical&&(null===(i=n.horizontal)||void 0===i?void 0:i.length)>0&&(null===(o=n.vertical)||void 0===o?void 0:o.length)>0&&(this.disableSort=!0,devHint("Table: You can not sort the table data, if horizontal and vertical headers are defined at the same time. (https://github.com/public-ui/kolibri/issues/2372)"))}}})}))}))}validateLabel(t){validateLabel(this,t)}validateMinWidth(t){watchString(this,"_minWidth",t,{defaultValue:void 0})}validatePagination(t){try{t=parseJson(t)}catch(t){}watchValidator(this,"_pagination",(()=>!0),new Set(["boolean","KoliBriTablePagination"]),t,{hooks:{beforePatch:this.beforePatchPagination}})}componentWillLoad(){this.validateData(this._data),this.validateDataFoot(this._dataFoot),this.validateHeaders(this._headers),this.validateLabel(this._label||this._caption),this.validateMinWidth(this._minWidth),this.validatePagination(this._pagination)}getNumberOfCols(t,e){let a=0;return t.forEach((t=>{let e=0;t.forEach((t=>{var a;return e+=null!==(a=t.colSpan)&&void 0!==a?a:1})),a<e&&(a=e)})),0===a&&(a=e.length),a}getNumberOfRows(t,e){let a=0;return t.forEach((t=>{let e=0;t.forEach((t=>{var a;return e+=null!==(a=t.rowSpan)&&void 0!==a?a:1})),a<e&&(a=e)})),0===a?a=e.length:a-=this.state._dataFoot.length,a}filterHeaderKeys(t){const e=[];return t.forEach((t=>{t.forEach((t=>{"string"==typeof t.key&&e.push(t)}))})),e}getPrimaryHeader(t){var e,a;let i=this.filterHeaderKeys(null!==(e=t.horizontal)&&void 0!==e?e:[]);return this.horizontal=!0,0===i.length&&(i=this.filterHeaderKeys(null!==(a=t.vertical)&&void 0!==a?a:[]),i.length>0&&(this.horizontal=!1)),i}createDataField(t,e,a){e.horizontal=Array.isArray(null==e?void 0:e.horizontal)?e.horizontal:[],e.vertical=Array.isArray(null==e?void 0:e.vertical)?e.vertical:[];const i=this.getPrimaryHeader(e),o=this.getNumberOfCols(e.horizontal,t);let n=this.getNumberOfRows(e.vertical,t),s=0;a&&(s=n,n+=this.state._dataFoot.length);const r=[],l=[],h=[];e.vertical.forEach(((t,e)=>{l[e]=0,h[e]=[]}));for(let d=s;d<n;d++){const n=[];e.vertical.forEach(((t,e)=>{let a=0;if(h[e].forEach((t=>a+=t)),a<=d){const i=t[d-a+l[e]];if("object"==typeof i){n.push(Object.assign(Object.assign({},i),{asTd:!1,data:{}}));let t=1;if("number"==typeof i.rowSpan&&i.rowSpan>1&&(t=i.rowSpan),h[e].push(t),"number"==typeof i.colSpan&&i.colSpan>1)for(let a=1;a<i.colSpan;a++)h[e+a].push(t);l[e]++}}}));for(let e=0;e<o;e++)if(!0===this.horizontal){const o=a?this.state._dataFoot[d-s]:t[d];"object"==typeof i[e]&&null!==i[e]&&"string"==typeof i[e].key&&"object"==typeof o&&null!==o&&n.push(Object.assign(Object.assign({},i[e]),{colSpan:void 0,data:o,label:o[i[e].key],rowSpan:void 0}))}else"object"==typeof i[d]&&null!==i[d]&&"string"==typeof i[d].key&&"object"==typeof t[e]&&null!==t[e]&&n.push(Object.assign(Object.assign({},i[d]),{colSpan:void 0,data:t[e],label:t[e][i[d].key],rowSpan:void 0}));r.push(n)}if(0===t.length){let t=0,a=0;Array.isArray(e.horizontal)&&e.horizontal.length>0&&e.horizontal[0].forEach((e=>{t+=e.colSpan||1})),Array.isArray(e.vertical)&&e.vertical.length>0&&(t-=e.vertical.length,e.vertical[0].forEach((t=>{a+=t.rowSpan||1})));const i={colSpan:t,label:translate("kol-no-entries"),render:void 0,rowSpan:Math.max(a,1)};0===r.length?r.push([i]):r[0].push(i)}return r}selectDisplayedData(t,e,a){return"number"==typeof e&&e>0&&"number"==typeof a&&a>0?(this.pageStartSlice=e*(a-1),this.pageEndSlice=e*a>t.length?t.length:e*a,t.slice(this.pageStartSlice,this.pageEndSlice)):(this.pageStartSlice=0,this.pageEndSlice=t.length,t)}cellRender(t,e){e&&(clearTimeout(CELL_REFS.get(e)),CELL_REFS.set(e,setTimeout((()=>{clearTimeout(CELL_REFS.get(e));const a=t.render(e,{asTd:t.asTd,label:t.label,textAlign:t.textAlign,width:t.width},t.data,this.state._data);"string"==typeof a&&(e.innerHTML=a)}))))}render(){var t,e;const a=this.selectDisplayedData(this.state._sortedData,this.showPagination?null!==(e=null===(t=this.state._pagination)||void 0===t?void 0:t._pageSize)&&void 0!==e?e:10:this.state._sortedData.length,this.state._pagination._page||1),i=this.createDataField(a,this.state._headers);return h(Host,null,h("span",{style:{height:"0",width:"0",overflow:"hidden"},"aria-live":"assertive"},this.ariaLive),this.pageEndSlice>0&&this.showPagination&&h("div",{class:"pagination"},h("span",null,"Einträge ",this.pageEndSlice>0?this.pageStartSlice+1:0," bis ",this.pageEndSlice," von"," ",this.state._pagination._total||(Array.isArray(this.state._data)?this.state._data.length:0)," angezeigt"),h("div",null,h("kol-pagination",{_boundaryCount:this.state._pagination._boundaryCount,_customClass:this.state._pagination._customClass,_on:this.handlePagination,_page:this.state._pagination._page,_pageSize:this.state._pagination._pageSize,_pageSizeOptions:this.state._pagination._pageSizeOptions||PAGINATION_OPTIONS,_siblingCount:this.state._pagination._siblingCount,_tooltipAlign:"bottom",_total:this.state._pagination._total||this.state._data.length,_label:translate("kol-table-pagination-label",{placeholders:{label:this.state._label}})}))),h("div",{class:"table",tabindex:"0"},h("table",{style:{minWidth:this.state._minWidth}},h("caption",null,this.state._label),Array.isArray(this.state._headers.horizontal)&&h("thead",null,this.state._headers.horizontal.map(((t,e)=>h("tr",{key:`thead-${e}`},t.map(((t,a)=>{if(!0===t.asTd)return h("td",{key:`thead-${e}-${a}-${t.label}`,class:{[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},colSpan:t.colSpan,rowSpan:t.rowSpan,style:{textAlign:t.textAlign,width:t.width},ref:"function"==typeof t.render?e=>{this.cellRender(t,e)}:void 0,innerHTML:"function"!=typeof t.render?t.label:""});{const i=t;let o,n="codicon codicon-fold";if(i.key===this.sortedColumnHead.key)switch(this.sortedColumnHead.sortDirection){case"ASC":n="codicon codicon-chevron-up",o="ascending";break;case"DESC":n="codicon codicon-chevron-down",o="descending"}return h("th",{key:`thead-${e}-${a}-${i.label}`,scope:"number"==typeof i.colSpan&&i.colSpan>1?"colgroup":"col",colSpan:i.colSpan,rowSpan:i.rowSpan,style:{textAlign:t.textAlign,width:t.width},"aria-sort":o,"data-sort":o?`sort-${this.sortedColumnHead.sortDirection}`:"sort-NOS"},h("div",{class:"w-full flex gap-1 items-center"},h("div",{class:{"w-full":!0,[t.textAlign]:"string"==typeof t.textAlign&&t.textAlign.length>0},innerHTML:t.label,style:{textAlign:t.textAlign}}),!this.disableSort&&"function"==typeof i.sort&&h("kol-button",{exportparts:"icon",_icon:n,_hideLabel:!0,_label:translate("kol-change-order",{placeholders:{colLabel:t.label}}),_on:{onClick:()=>{if("function"==typeof i.sort){switch(this.sortFunction=i.sort,this.sortDirections.get(this.sortFunction)){case"ASC":this.setSortDirection(this.sortFunction,"DESC");break;case"DESC":this.setSortDirection(this.sortFunction,"NOS");break;default:this.setSortDirection(this.sortFunction,"ASC")}this.updateSortedData(i)}}},_variant:"ghost"})))}})))))),h("tbody",null,i.map(this.renderTableRow)),this.state._dataFoot.length>0?this.renderFoot():"")))}static get watchers(){return{_caption:["validateCaption"],_data:["validateData"],_dataFoot:["validateDataFoot"],_headers:["validateHeaders"],_label:["validateLabel"],_minWidth:["validateMinWidth"],_pagination:["validatePagination"]}}};KolTable.style={default:defaultStyleCss};export{KolTable as kol_table};