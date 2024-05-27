/*!
 * KoliBri - The accessible HTML-Standard
 */
import{r as registerInstance,h,H as Host,g as getElement}from"./index-40be4caf.js";import{w as KolInputCheckboxTag,c as KolButtonWcTag}from"./component-names-791b1799.js";import{t as translate}from"./i18n-a7081f2c.js";import{t as tryToDispatchKoliBriEvent}from"./events-29e84d75.js";import{n as nonce}from"./dev.utils-60f0cf1e.js";import{w as watchValidator,t as emptyStringByArrayHandler,o as objectObjectHandler,p as parseJson,s as setState,i as watchString}from"./prop.validators-28badc7d.js";import{c as isObject}from"./reuse-b66836de.js";import{v as validateTableData,a as validateTableDataFoot}from"./table-data-foot-8bae51b6.js";import{v as validateLabel}from"./label-af70fdc5.js";import"./i18n-9eed57c7.js";import"./dev.utils-1ca991a2.js";import"./index-4a3076fc.js";const validateTableCallbacks=(e,t)=>{watchValidator(e,"_on",(e=>"object"==typeof e&&null!==e),new Set(["TableCallbacksPropType {Events.onSort, Events.onSelectionChange}"]),t)},validateTableHeaderCells=(e,t)=>{emptyStringByArrayHandler(t,(()=>{objectObjectHandler(t,(()=>{try{t=parseJson(t)}catch(e){}watchValidator(e,"_headerCells",(e=>"object"==typeof e&&null!==e),new Set(["TableHeaderCellsPropType"]),t)}))}))},validateTableSelection=(e,t)=>{(e=>e&&isObject(e)&&"function"==typeof e.label&&(!e.selectedKeys||Array.isArray(e.selectedKeys)))("string"==typeof t?(()=>{try{return parseJson(t)}catch(e){return}})():t)&&setState(e,"_selection",t)};var Events;!function(e){e.onBlur="onBlur",e.onChange="onChange",e.onClick="onClick",e.onDblClick="onDblClick",e.onFocus="onFocus",e.onInput="onInput",e.onKeyDown="onKeyDown",e.onKeyPress="onKeyPress",e.onKeyUp="onKeyUp",e.onMouseDown="onMouseDown",e.onMouseMove="onMouseMove",e.onMouseOut="onMouseOut",e.onMouseOver="onMouseOver",e.onMouseUp="onMouseUp",e.onReset="onReset",e.onSelect="onSelect",e.onSort="onSort",e.onSelectionChange="onSelectionChange",e.onSubmit="onSubmit"}(Events||(Events={}));const KolTableStateless=class{constructor(e){registerInstance(this,e),this.horizontal=!0,this.cellsToRenderTimeouts=new Map,this.dataToKeyMap=new Map,this.renderTableRow=(e,t)=>{var a,o;let l=String(t);return this.horizontal&&(null===(a=e[0])||void 0===a?void 0:a.data)&&(l=null!==(o=this.getDataKey(e[0].data))&&void 0!==o?o:l),h("tr",{key:`row-${l}`},this.renderSelectionCell(e,t),e.map(((e,a)=>this.renderTableCell(e,t,a))))},this.renderTableCell=(e,t,a)=>{let o=`${t}-${a}-${e.label}`;if(e.data){const l=this.getDataKey(e.data);o=this.horizontal?l?`${l}-${a}`:o:l?`${l}-${t}`:o}return!1===e.asTd?this.renderHeadingCell(e,t,a):h("td",{key:`cell-${o}`,class:{[e.textAlign]:"string"==typeof e.textAlign&&e.textAlign.length>0},colSpan:e.colSpan,rowSpan:e.rowSpan,style:{textAlign:e.textAlign,width:e.width},ref:"function"==typeof e.render?t=>{this.cellRender(e,t)}:void 0},"function"!=typeof e.render?e.label:"")},this.state={_data:[],_label:"",_headerCells:{horizontal:[],vertical:[]}},this.tableDivElementHasScrollbar=!1,this._data=void 0,this._dataFoot=void 0,this._headerCells=void 0,this._label=void 0,this._minWidth=void 0,this._on=void 0,this._selection=void 0}validateData(e){validateTableData(this,e,{beforePatch:e=>{this.updateDataToKeyMap(e)}})}validateDataFoot(e){validateTableDataFoot(this,e)}validateHeaderCells(e){validateTableHeaderCells(this,e)}validateLabel(e){validateLabel(this,e,{required:!0})}validateMinWidth(e){watchString(this,"_minWidth",e,{defaultValue:void 0})}validateOn(e){validateTableCallbacks(this,e)}validateSelection(e){validateTableSelection(this,e)}componentDidRender(){this.checkDivElementScrollbar()}componentDidLoad(){this.tableDivElement&&ResizeObserver&&(this.tableDivElementResizeObserver=new ResizeObserver(this.checkDivElementScrollbar.bind(this)),this.tableDivElementResizeObserver.observe(this.tableDivElement))}disconnectedCallback(){var e;null===(e=this.tableDivElementResizeObserver)||void 0===e||e.disconnect()}checkDivElementScrollbar(){this.tableDivElement&&(this.tableDivElementHasScrollbar=this.tableDivElement.scrollWidth>this.tableDivElement.clientWidth)}updateDataToKeyMap(e){e.forEach((e=>{this.dataToKeyMap.has(e)||this.dataToKeyMap.set(e,nonce())})),this.dataToKeyMap.forEach(((t,a)=>{e.includes(a)||this.dataToKeyMap.delete(a)}))}getDataKey(e){return this.dataToKeyMap.get(e)}cellRender(e,t){t&&(clearTimeout(this.cellsToRenderTimeouts.get(t)),this.cellsToRenderTimeouts.set(t,setTimeout((()=>{if("function"==typeof e.render){const a=e.render(t,e,e.data,this.state._data);"string"==typeof a&&(t.textContent=a)}}))))}getNumberOfCols(e,t){let a=0;return e.forEach((e=>{let t=0;e.forEach((e=>{var a;return t+=null!==(a=e.colSpan)&&void 0!==a?a:1})),a<t&&(a=t)})),0===a&&(a=t.length),a}getNumberOfRows(e,t){var a;let o=0;return e.forEach((e=>{let t=0;e.forEach((e=>{var a;return t+=null!==(a=e.rowSpan)&&void 0!==a?a:1})),o<t&&(o=t)})),0===o?o=t.length:o-=(null===(a=this.state._dataFoot)||void 0===a?void 0:a.length)||0,o}filterHeaderKeys(e){const t=[];return e.forEach((e=>{e.forEach((e=>{"string"==typeof e.key&&t.push(e)}))})),t}getPrimaryHeader(e){var t,a;let o=this.filterHeaderKeys(null!==(t=e.horizontal)&&void 0!==t?t:[]);return this.horizontal=!0,0===o.length&&(o=this.filterHeaderKeys(null!==(a=e.vertical)&&void 0!==a?a:[]),o.length>0&&(this.horizontal=!1)),o}createDataField(e,t,a){var o;t.horizontal=Array.isArray(null==t?void 0:t.horizontal)?t.horizontal:[],t.vertical=Array.isArray(null==t?void 0:t.vertical)?t.vertical:[];const l=this.getPrimaryHeader(t),i=this.getNumberOfCols(t.horizontal,e);let n=this.getNumberOfRows(t.vertical,e),s=0;a&&(s=n,n+=(null===(o=this.state._dataFoot)||void 0===o?void 0:o.length)||0);const r=[],c=[],d=[];t.vertical.forEach(((e,t)=>{c[t]=0,d[t]=[]}));for(let o=s;o<n;o++){const n=[];t.vertical.forEach(((e,t)=>{let a=0;if(d[t].forEach((e=>a+=e)),a<=o){const l=e[o-a+c[t]];if("object"==typeof l){n.push(Object.assign(Object.assign({},l),{asTd:!1,data:{}}));let e=1;if("number"==typeof l.rowSpan&&l.rowSpan>1&&(e=l.rowSpan),d[t].push(e),"number"==typeof l.colSpan&&l.colSpan>1)for(let a=1;a<l.colSpan;a++)d[t+a].push(e);c[t]++}}}));for(let t=0;t<i;t++)if(!0===this.horizontal){const i=a&&this.state._dataFoot?this.state._dataFoot[o-s]:e[o];"object"==typeof l[t]&&null!==l[t]&&"string"==typeof l[t].key&&"object"==typeof i&&null!==i&&n.push(Object.assign(Object.assign({},l[t]),{colSpan:void 0,data:i,label:i[l[t].key],rowSpan:void 0}))}else"object"==typeof l[o]&&null!==l[o]&&"string"==typeof l[o].key&&"object"==typeof e[t]&&null!==e[t]&&n.push(Object.assign(Object.assign({},l[o]),{colSpan:void 0,data:e[t],label:e[t][l[o].key],rowSpan:void 0}));r.push(n)}if(0===e.length){let e=0,a=0;Array.isArray(t.horizontal)&&t.horizontal.length>0&&t.horizontal[0].forEach((t=>{e+=t.colSpan||1})),Array.isArray(t.vertical)&&t.vertical.length>0&&(e-=t.vertical.length,t.vertical[0].forEach((e=>{a+=e.rowSpan||1})));const o={colSpan:e,label:translate("kol-no-entries"),render:void 0,rowSpan:Math.max(a,1)};0===r.length?r.push([o]):r[0].push(o)}return r}componentWillLoad(){this.validateData(this._data),this.validateDataFoot(this._dataFoot),this.validateHeaderCells(this._headerCells),this.validateLabel(this._label),this.validateMinWidth(this._minWidth),this.validateOn(this._on),this.validateSelection(this._selection)}renderSelectionCell(e,t){var a,o,l;if(this.state._selection){const i=null!==(a=this.state._selection.keyPropertyName)&&void 0!==a?a:"id",n=e.find((e=>e.key===i));if(n){const e=(null==n?void 0:n.data)[i],a=null===(l=null===(o=this.state._selection)||void 0===o?void 0:o.selectedKeys)||void 0===l?void 0:l.includes(e),s=this.state._selection.label(n.data);return h("td",{key:`tbody-${t}-selection`,class:"selection-cell"},h(KolInputCheckboxTag,{_label:s,_hideLabel:!0,_checked:a,_tooltipAlign:"right",_on:{onInput:(t,a)=>{var o,l;if(null===(o=this.state._selection)||void 0===o?void 0:o.selectedKeys){const o=a?[...this.state._selection.selectedKeys,e]:this.state._selection.selectedKeys.filter((t=>t!==e));tryToDispatchKoliBriEvent("selection-change",this.host,o),"function"==typeof(null===(l=this.state._on)||void 0===l?void 0:l[Events.onSelectionChange])&&this.state._on[Events.onSelectionChange](t,o)}}}}))}}return""}renderHeadingCell(e,t,a){let o,l="codicon codicon-fold";if(e.sortDirection)switch(e.sortDirection){case"ASC":l="codicon codicon-chevron-up",o="ascending";break;case"DESC":l="codicon codicon-chevron-down",o="descending"}return h("th",{key:`${t}-${a}-${e.label}`,class:e.textAlign?`align-${e.textAlign}`:void 0,scope:"number"==typeof e.colSpan&&e.colSpan>1?"colgroup":"col",colSpan:e.colSpan,rowSpan:e.rowSpan,style:{width:e.width},"aria-sort":o,"data-sort":`sort-${e.sortDirection}`},e.sortDirection?h(KolButtonWcTag,{class:"table-sort-button",exportparts:"icon",_icons:{right:l},_label:e.label,_on:{onClick:t=>{var a;"function"==typeof(null===(a=this.state._on)||void 0===a?void 0:a.onSort)&&e.key&&e.sortDirection&&this.state._on.onSort(t,{key:e.key,currentSortDirection:e.sortDirection})}}}):e.label)}renderFoot(){if(!this.state._dataFoot||0===this.state._dataFoot.length)return"";const e=this.createDataField(this.state._dataFoot,this.state._headerCells,!0);return h("tfoot",null,e.map(this.renderTableRow))}render(){const e=this.createDataField(this.state._data,this.state._headerCells);return h(Host,{key:"1674fb7ab899c0098a312c938c6311b8966687ad",class:"kol-table-stateless-wc"},h("div",{key:"5a705ad1cfd82c9e137c7a1aa3e9250db3b679b5",ref:e=>this.tableDivElement=e,class:"table",tabindex:this.tableDivElementHasScrollbar?"-1":void 0},h("table",{key:"027b8f0e87050291b9fc7ad6132fca166d74587c",style:{minWidth:this.state._minWidth}},h("div",{key:"4be66ae604e40ac0220c90094b0a37d5c7f34f91",class:"focus-element",tabindex:this.tableDivElementHasScrollbar?"0":void 0,"aria-describedby":"caption"}," "),h("caption",{key:"414c49cc7be0cdbe48260b232e63de7d6a1c70fe",id:"caption"},this.state._label),Array.isArray(this.state._headerCells.horizontal)&&h("thead",{key:"851404469bd24ae4e826115ee4cffe56e94f4231"},this.state._headerCells.horizontal.map(((e,t)=>h("tr",{key:`thead-${t}`},this.state._selection&&h("td",{key:"thead-selection",class:"selection-header-cell"}),e.map(((e,a)=>!0===e.asTd?h("td",{key:`thead-${t}-${a}-${e.label}`,class:{[e.textAlign]:"string"==typeof e.textAlign&&e.textAlign.length>0},colSpan:e.colSpan,rowSpan:e.rowSpan,style:{textAlign:e.textAlign,width:e.width},ref:"function"==typeof e.render?t=>{this.cellRender(e,t)}:void 0},"function"!=typeof e.render?e.label:""):this.renderHeadingCell(e,t,a))))))),h("tbody",{key:"1024a2ab0ec473830f31ca5fe164c9953d4cfdbc"},e.map(this.renderTableRow)),this.renderFoot())))}get host(){return getElement(this)}static get watchers(){return{_data:["validateData"],_dataFoot:["validateDataFoot"],_headerCells:["validateHeaderCells"],_label:["validateLabel"],_minWidth:["validateMinWidth"],_on:["validateOn"],_selection:["validateSelection"]}}};export{KolTableStateless as kol_table_stateless_wc};