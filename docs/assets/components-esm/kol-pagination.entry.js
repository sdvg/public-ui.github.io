/*!
 * KoliBri - The accessible HTML-Standard
 */
import{r as registerInstance,h,H as Host}from"./index-2c046ff1.js";import{a as translate}from"./i18n-2b2ccdd6.js";import{w as watchTooltipAlignment}from"./button-link-e7a5fabf.js";import{n as nonce}from"./dev.utils-e98368e1.js";import{e as watchNumber,w as watchString,a as watchValidator,d as watchJsonArrayString,p as parseJson}from"./prop.validators-e3c93395.js";import{S as STATE_CHANGE_EVENT}from"./reuse-c2156413.js";import{w as watchButtonVariant}from"./controller-cbd99b24.js";import"./index-d8ac1088.js";import"./index-37b5cbcf.js";import"./a11y.tipps-255c885e.js";const defaultStyleCss=":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.separator:before{content:'•••'}",leftDoubleArrowIcon={left:"codicon codicon-debug-reverse-continue"},leftSingleArrow={left:"codicon codicon-chevron-left"},rightSingleArrowIcon={right:"codicon codicon-chevron-right"},rightDoubleArrowIcon={right:"codicon codicon-debug-continue"},KolPagination=class{constructor(t){registerInstance(this,t),this.nonce=nonce(),this.calcCount=(t,a=1)=>Math.ceil(t/a),this.getCount=()=>this.calcCount(this.state._total,this.state._pageSize),this.onClick=(t,a)=>{"function"==typeof this.state._on.onClick&&this.state._on.onClick(t,a),this.onChangePage(t,a)},this.onChangePage=(t,a)=>{const e=setTimeout((()=>{clearTimeout(e),"function"==typeof this.state._on.onChangePage&&this.state._on.onChangePage(t,a)}))},this.onChangePageSize=(t,a)=>{if("number"==typeof(a=parseInt(a[0]))&&a>0&&this._pageSize!==a){this._pageSize=a;const e=setTimeout((()=>{clearTimeout(e),"function"==typeof this.state._on.onChangePageSize&&this.state._on.onChangePageSize(t,this._pageSize)}))}},this.onGoToFirst={onClick:t=>{this.onClick(t,1)}},this.onGoToEnd={onClick:t=>{this.onClick(t,this.getCount())}},this.onGoBackward={onClick:t=>{this.onClick(t,this.state._page-1)}},this.onGoForward={onClick:t=>{this.onClick(t,this.state._page+1)}},this.beforePageSize=(t,a)=>{let e=a.has("_pageSize")?a.get("_pageSize"):this.state._pageSize;const s=a.has("_pageSizeOptions")?a.get("_pageSizeOptions"):this.state._pageSizeOptions;if(Array.isArray(s)&&s.length>0){const t=s.find((t=>t.value===e));e=void 0===t?s[0].value:t.value,a.set("_pageSize",e)}const i=a.has("_page")?a.get("_page"):this.state._page,o=a.has("_total")?a.get("_total"):this.state._total;this.syncPage(a,i,a.get("_pageSize"),o)},this.syncPage=(t,a,e,s)=>{if(s>0){const i=this.calcCount(s,e);i>0&&(a>i?(t.set("_page",i),this.onChangePage(STATE_CHANGE_EVENT,i)):a<1&&(t.set("_page",1),this.onChangePage(STATE_CHANGE_EVENT,1)))}},this.beforePageSizeOptions=(t,a)=>{const e=[];if(Array.isArray(t))for(const a of t)"number"==typeof a&&e.push({label:translate("kol-page-per-site",{placeholders:{entries:`${a}`}}),value:a});a.set("_pageSizeOptions",e),this.beforePageSize(e,a)},this._boundaryCount=1,this._customClass=void 0,this._hasButtons=!0,this._page=void 0,this._pageSize=1,this._pageSizeOptions=[],this._on=void 0,this._siblingCount=1,this._tooltipAlign="top",this._total=void 0,this._variant="normal",this.state={_boundaryCount:1,_hasButtons:{first:!0,last:!0,next:!0,previous:!0},_on:{onClick:()=>null},_page:0,_pageSize:1,_pageSizeOptions:[],_siblingCount:1,_total:0,_variant:"normal"}}render(){var t;let a=!1;const e=this.getCount(),s=Array.from(Array(e).keys()).map((t=>t+1)).map((t=>t<=this.state._boundaryCount||t>e-this.state._boundaryCount||t>=this.state._page-this.state._siblingCount&&t<=this.state._page+this.state._siblingCount?(a=!0,this.state._page===t?this.getSelectedPageButton(t):this.getUnselectedPageButton(t)):!0===a?(a=!1,h("span",{class:"separator",key:`${this.nonce}-el-${t}`})):null));return h(Host,null,h("div",null,this.state._hasButtons.first&&h("kol-button",{class:"first",exportparts:"icon",_customClass:this.state._customClass,_disabled:this.state._page<=1,_icon:leftDoubleArrowIcon,_hideLabel:!0,_label:translate("kol-page-first"),_on:this.onGoToFirst,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign}),this.state._hasButtons.previous&&h("kol-button",{class:"previous",exportparts:"icon",_customClass:this.state._customClass,_disabled:this.state._page<=1,_icon:leftSingleArrow,_hideLabel:!0,_label:translate("kol-page-back"),_on:this.onGoBackward,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign}),s,this.state._hasButtons.next&&h("kol-button",{class:"next",exportparts:"icon",_customClass:this.state._customClass,_disabled:e<=this.state._page,_icon:rightSingleArrowIcon,_hideLabel:!0,_label:translate("kol-page-next"),_on:this.onGoForward,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign}),this.state._hasButtons.last&&h("kol-button",{class:"last",exportparts:"icon",_customClass:this.state._customClass,_disabled:e<=this.state._page,_icon:rightDoubleArrowIcon,_hideLabel:!0,_label:translate("kol-page-last"),_on:this.onGoToEnd,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign})),(null===(t=this.state._pageSizeOptions)||void 0===t?void 0:t.length)>0&&h("kol-select",{_hideLabel:!0,_id:`pagination-size-${this.nonce}`,_label:translate("kol-entries-per-site"),_list:this.state._pageSizeOptions,_on:{onChange:this.onChangePageSize},_value:[this.state._pageSize]}))}getUnselectedPageButton(t){return h("kol-button",{exportparts:"icon",key:`${this.nonce}-${t}`,_customClass:this.state._customClass,_label:`${t}`,_on:{onClick:a=>{this.onClick(a,t)}},_variant:this.state._variant})}getSelectedPageButton(t){return h("kol-button-wc",{class:"selected",key:`${this.nonce}-selected`,_customClass:this.state._customClass,_disabled:!0,_ariaCurrent:!0,_label:`${t}`,_variant:this.state._variant})}validateBoundaryCount(t){watchNumber(this,"_boundaryCount",Math.max(0,null!=t?t:1))}validateCustomClass(t){watchString(this,"_customClass",t,{defaultValue:void 0})}validateHasButtons(t){watchValidator(this,"_hasButtons",(t=>"boolean"==typeof t||"string"==typeof t||"object"==typeof t&&null!==t),new Set(["Boolean","PaginationHasButton"]),t,{hooks:{beforePatch:(t,a)=>{if("boolean"==typeof t)a.set("_hasButtons",{first:t,last:t,next:t,previous:t});else{if("string"==typeof t)try{t=parseJson(t)}catch(t){a.delete("_hasButtons")}"object"==typeof t&&null!==t&&a.set("_hasButtons",Object.assign(Object.assign({},this.state._hasButtons),{first:"boolean"==typeof t.first?!0===t.first:this.state._hasButtons.first,last:"boolean"==typeof t.last?!0===t.last:this.state._hasButtons.last,next:"boolean"==typeof t.next?!0===t.next:this.state._hasButtons.next,previous:"boolean"==typeof t.previous?!0===t.previous:this.state._hasButtons.previous}))}}}})}validateOn(t){"object"==typeof t&&null!==t&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validatePage(t){watchNumber(this,"_page",t,{hooks:{beforePatch:(t,a)=>{const e=a.has("_pageSize")?a.get("_pageSize"):this.state._pageSize,s=a.has("_total")?a.get("_total"):this.state._total;this.syncPage(a,t,e,s)}}})}validatePageSize(t){watchNumber(this,"_pageSize",t,{hooks:{beforePatch:this.beforePageSize}})}validatePageSizeOptions(t){watchJsonArrayString(this,"_pageSizeOptions",(t=>"number"==typeof t),t,void 0,{hooks:{beforePatch:this.beforePageSizeOptions}})}validateSiblingCount(t){watchNumber(this,"_siblingCount",Math.max(0,null!=t?t:1))}validateTotal(t){watchNumber(this,"_total",t,{hooks:{beforePatch:(t,a)=>{const e=a.has("_page")?a.get("_page"):this.state._page,s=a.has("_pageSize")?a.get("_pageSize"):this.state._pageSize;this.syncPage(a,e,s,t)}}})}validateTooltipAlign(t){watchTooltipAlignment(this,"_tooltipAlign",t)}validateVariant(t){watchButtonVariant(this,"_variant",t)}componentWillLoad(){this.validateBoundaryCount(this._boundaryCount),this.validateCustomClass(this._customClass),this.validateHasButtons(this._hasButtons),this.validateOn(this._on),this.validatePage(this._page),this.validatePageSize(this._pageSize),this.validatePageSizeOptions(this._pageSizeOptions),this.validateSiblingCount(this._siblingCount),this.validateTooltipAlign(this._tooltipAlign),this.validateTotal(this._total),this.validateVariant(this._variant),this.validatePage(this._page)}static get watchers(){return{_boundaryCount:["validateBoundaryCount"],_customClass:["validateCustomClass"],_hasButtons:["validateHasButtons"],_on:["validateOn"],_page:["validatePage"],_pageSize:["validatePageSize"],_pageSizeOptions:["validatePageSizeOptions"],_siblingCount:["validateSiblingCount"],_total:["validateTotal"],_tooltipAlign:["validateTooltipAlign"],_variant:["validateVariant"]}}};KolPagination.style={default:defaultStyleCss};export{KolPagination as kol_pagination};