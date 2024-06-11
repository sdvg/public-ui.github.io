/*! For license information please see kol-pagination.entry.js.LICENSE.txt */
import{r as t,h as i,H as s}from"./index-330c31f9.js";import{a as e}from"./i18n-931157b2.js";import{w as o}from"./button-link-6460a64a.js";import{n as a}from"./dev.utils-5b0de6da.js";import{e as n,w as l,a as h,d as r,p}from"./prop.validators-0a66a178.js";import{S as u}from"./reuse-c2156413.js";import{w as c}from"./controller-1e40c612.js";import"./index-fc511254.js";import"./index-3711603c.js";import"./a11y.tipps-beae7792.js";const d=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.separator:before{content:'\u2022\u2022\u2022'}",_={left:"codicon codicon-debug-reverse-continue"},f={left:"codicon codicon-chevron-left"},b={right:"codicon codicon-chevron-right"},g={right:"codicon codicon-debug-continue"},v=class{constructor(s){t(this,s),this.nonce=a(),this.calcCount=(t,e=1)=>Math.ceil(t/e),this.getCount=()=>this.calcCount(this.state._total,this.state._pageSize),this.onClick=(t,e)=>{"function"==typeof this.state._on.onClick&&this.state._on.onClick(t,e),this.onChangePage(t,e)},this.onChangePage=(t,e)=>{const a=setTimeout((()=>{clearTimeout(a),"function"==typeof this.state._on.onChangePage&&this.state._on.onChangePage(t,e)}))},this.onChangePageSize=(t,e)=>{if("number"==typeof(e=parseInt(e[0]))&&e>0&&this._pageSize!==e){this._pageSize=e;const a=setTimeout((()=>{clearTimeout(a),"function"==typeof this.state._on.onChangePageSize&&this.state._on.onChangePageSize(t,this._pageSize)}))}},this.onGoToFirst={onClick:t=>{this.onClick(t,1)}},this.onGoToEnd={onClick:t=>{this.onClick(t,this.getCount())}},this.onGoBackward={onClick:t=>{this.onClick(t,this.state._page-1)}},this.onGoForward={onClick:t=>{this.onClick(t,this.state._page+1)}},this.beforePageSize=(t,e)=>{let a=e.has("_pageSize")?e.get("_pageSize"):this.state._pageSize;const s=e.has("_pageSizeOptions")?e.get("_pageSizeOptions"):this.state._pageSizeOptions;if(Array.isArray(s)&&s.length>0){const t=s.find((t=>t.value===a));a=void 0===t?s[0].value:t.value,e.set("_pageSize",a)}const i=e.has("_page")?e.get("_page"):this.state._page,o=e.has("_total")?e.get("_total"):this.state._total;this.syncPage(e,i,e.get("_pageSize"),o)},this.syncPage=(t,e,a,s)=>{if(s>0){const i=this.calcCount(s,a);i>0&&(e>i?(t.set("_page",i),this.onChangePage(u,i)):e<1&&(t.set("_page",1),this.onChangePage(u,1)))}},this.beforePageSizeOptions=(t,a)=>{const s=[];if(Array.isArray(t))for(const i of t)"number"==typeof i&&s.push({label:e("kol-page-per-site",{placeholders:{entries:`${i}`}}),value:i});a.set("_pageSizeOptions",s),this.beforePageSize(s,a)},this._boundaryCount=1,this._customClass=void 0,this._hasButtons=!0,this._page=void 0,this._pageSize=1,this._pageSizeOptions=[],this._on=void 0,this._siblingCount=1,this._tooltipAlign="top",this._total=void 0,this._variant="normal",this.state={_boundaryCount:1,_hasButtons:{first:!0,last:!0,next:!0,previous:!0},_on:{onClick:()=>null},_page:0,_pageSize:1,_pageSizeOptions:[],_siblingCount:1,_total:0,_variant:"normal"}}render(){var t;let a=!1;const o=this.getCount(),n=Array.from(Array(o).keys()).map((t=>t+1)).map((t=>t<=this.state._boundaryCount||t>o-this.state._boundaryCount||t>=this.state._page-this.state._siblingCount&&t<=this.state._page+this.state._siblingCount?(a=!0,this.state._page===t?this.getSelectedPageButton(t):this.getUnselectedPageButton(t)):!0===a?(a=!1,i("span",{class:"separator",key:`${this.nonce}-el-${t}`})):null));return i(s,null,i("div",null,this.state._hasButtons.first&&i("kol-button",{class:"first",exportparts:"icon",_customClass:this.state._customClass,_disabled:this.state._page<=1,_icon:_,_hideLabel:!0,_label:e("kol-page-first"),_on:this.onGoToFirst,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign}),this.state._hasButtons.previous&&i("kol-button",{class:"previous",exportparts:"icon",_customClass:this.state._customClass,_disabled:this.state._page<=1,_icon:f,_hideLabel:!0,_label:e("kol-page-back"),_on:this.onGoBackward,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign}),n,this.state._hasButtons.next&&i("kol-button",{class:"next",exportparts:"icon",_customClass:this.state._customClass,_disabled:o<=this.state._page,_icon:b,_hideLabel:!0,_label:e("kol-page-next"),_on:this.onGoForward,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign}),this.state._hasButtons.last&&i("kol-button",{class:"last",exportparts:"icon",_customClass:this.state._customClass,_disabled:o<=this.state._page,_icon:g,_hideLabel:!0,_label:e("kol-page-last"),_on:this.onGoToEnd,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign})),(null===(t=this.state._pageSizeOptions)||void 0===t?void 0:t.length)>0&&i("kol-select",{_hideLabel:!0,_id:"pagination-size",_label:e("kol-entries-per-site"),_list:this.state._pageSizeOptions,_on:{onChange:this.onChangePageSize},_value:[this.state._pageSize]}))}getUnselectedPageButton(t){return i("kol-button",{exportparts:"icon",key:`${this.nonce}-${t}`,_customClass:this.state._customClass,_label:`${t}`,_on:{onClick:e=>{this.onClick(e,t)}},_variant:this.state._variant})}getSelectedPageButton(t){return i("kol-button-wc",{class:"selected",key:`${this.nonce}-selected`,_customClass:this.state._customClass,_disabled:!0,_ariaCurrent:!0,_label:`${t}`,_variant:this.state._variant})}validateBoundaryCount(t){n(this,"_boundaryCount",Math.max(0,null!=t?t:1))}validateCustomClass(t){l(this,"_customClass",t,{defaultValue:void 0})}validateHasButtons(t){h(this,"_hasButtons",(t=>"boolean"==typeof t||"string"==typeof t||"object"==typeof t&&null!==t),new Set(["Boolean","PaginationHasButton"]),t,{hooks:{beforePatch:(t,e)=>{if("boolean"==typeof t)e.set("_hasButtons",{first:t,last:t,next:t,previous:t});else{if("string"==typeof t)try{t=p(t)}catch(t){e.delete("_hasButtons")}"object"==typeof t&&null!==t&&e.set("_hasButtons",Object.assign(Object.assign({},this.state._hasButtons),{first:"boolean"==typeof t.first?!0===t.first:this.state._hasButtons.first,last:"boolean"==typeof t.last?!0===t.last:this.state._hasButtons.last,next:"boolean"==typeof t.next?!0===t.next:this.state._hasButtons.next,previous:"boolean"==typeof t.previous?!0===t.previous:this.state._hasButtons.previous}))}}}})}validateOn(t){"object"==typeof t&&null!==t&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validatePage(t){n(this,"_page",t,{hooks:{beforePatch:(t,e)=>{const a=e.has("_pageSize")?e.get("_pageSize"):this.state._pageSize,s=e.has("_total")?e.get("_total"):this.state._total;this.syncPage(e,t,a,s)}}})}validatePageSize(t){n(this,"_pageSize",t,{hooks:{beforePatch:this.beforePageSize}})}validatePageSizeOptions(t){r(this,"_pageSizeOptions",(t=>"number"==typeof t),t,void 0,{hooks:{beforePatch:this.beforePageSizeOptions}})}validateSiblingCount(t){n(this,"_siblingCount",Math.max(0,null!=t?t:1))}validateTotal(t){n(this,"_total",t,{hooks:{beforePatch:(t,e)=>{const a=e.has("_page")?e.get("_page"):this.state._page,s=e.has("_pageSize")?e.get("_pageSize"):this.state._pageSize;this.syncPage(e,a,s,t)}}})}validateTooltipAlign(t){o(this,"_tooltipAlign",t)}validateVariant(t){c(this,"_variant",t)}componentWillLoad(){this.validateBoundaryCount(this._boundaryCount),this.validateCustomClass(this._customClass),this.validateHasButtons(this._hasButtons),this.validateOn(this._on),this.validatePage(this._page),this.validatePageSize(this._pageSize),this.validatePageSizeOptions(this._pageSizeOptions),this.validateSiblingCount(this._siblingCount),this.validateTooltipAlign(this._tooltipAlign),this.validateTotal(this._total),this.validateVariant(this._variant),this.validatePage(this._page)}static get watchers(){return{_boundaryCount:["validateBoundaryCount"],_customClass:["validateCustomClass"],_hasButtons:["validateHasButtons"],_on:["validateOn"],_page:["validatePage"],_pageSize:["validatePageSize"],_pageSizeOptions:["validatePageSizeOptions"],_siblingCount:["validateSiblingCount"],_total:["validateTotal"],_tooltipAlign:["validateTooltipAlign"],_variant:["validateVariant"]}}};v.style={default:d};export{v as kol_pagination};