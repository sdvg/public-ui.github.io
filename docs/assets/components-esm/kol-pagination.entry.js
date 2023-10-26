/*!
 * KoliBri - The accessible HTML-Standard
 */
import{r as registerInstance,h,H as Host}from"./index-9c30809b.js";import{a as translate}from"./i18n-7d2a9d87.js";import{v as validateCustomClass}from"./custom-class-11d5515f.js";import{v as validateLabel}from"./label-ba8d055d.js";import{v as validateTooltipAlign}from"./tooltip-align-4be6a782.js";import{n as nonce}from"./dev.utils-a3434f6d.js";import{e as watchNumber,w as watchValidator,c as watchJsonArrayString,p as parseJson}from"./prop.validators-0c664b0b.js";import{r as removeNavLabel,a as addNavLabel}from"./unique-nav-labels-c6750f60.js";import{S as STATE_CHANGE_EVENT}from"./reuse-b3566e4c.js";import"./index-daa35c44.js";import"./a11y.tipps-7abac3bc.js";import"./alignment-f1ece3f9.js";const validateMax=(t,e,a)=>{watchNumber(t,"_max",e,a)},defaultStyleCss="@layer kol-global {\n\t/*\n\t * This file contains all rules for accessibility.\n\t */\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\tfont-size: inherit;\n\t}\n\n\t* {\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* font-family is NOT inherited all HTML elements. */\n\tbutton,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\tfont-family: inherit;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t:host {\n\t\talign-items: center;\n\t\tdisplay: grid;\n\t\tgap: 1rem;\n\t\tgrid-template-columns: 1fr auto;\n\t}\n\t.navigation-list {\n\t\talign-items: center;\n\t\tdisplay: inline-flex;\n\t\tflex-wrap: wrap;\n\t\tgap: 0.5em;\n\t\tlist-style: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\n\t.separator:before {\n\t\tcontent: '•••';\n\t}\n}\n",leftDoubleArrowIcon={left:"codicon codicon-debug-reverse-continue"},leftSingleArrow={left:"codicon codicon-chevron-left"},rightSingleArrowIcon={right:"codicon codicon-chevron-right"},rightDoubleArrowIcon={right:"codicon codicon-debug-continue"},KolPagination=class{constructor(t){registerInstance(this,t),this.nonce=nonce(),this.calcCount=(t,e=1)=>Math.ceil(t/e),this.getCount=()=>this.calcCount(this.state._max,this.state._pageSize),this.onClick=(t,e)=>{"function"==typeof this.state._on.onClick&&this.state._on.onClick(t,e),this.onChangePage(t,e)},this.onChangePage=(t,e)=>{const a=setTimeout((()=>{clearTimeout(a),"function"==typeof this.state._on.onChangePage&&this.state._on.onChangePage(t,e)}))},this.onChangePageSize=(t,e)=>{if("number"==typeof(e=parseInt(e[0]))&&e>0&&this._pageSize!==e){this._pageSize=e;const a=setTimeout((()=>{clearTimeout(a),"function"==typeof this.state._on.onChangePageSize&&this.state._on.onChangePageSize(t,this._pageSize)}))}},this.onGoToFirst={onClick:t=>{this.onClick(t,1)}},this.onGoToEnd={onClick:t=>{this.onClick(t,this.getCount())}},this.onGoBackward={onClick:t=>{this.onClick(t,this.state._page-1)}},this.onGoForward={onClick:t=>{this.onClick(t,this.state._page+1)}},this.beforePageSize=(t,e)=>{let a=e.has("_pageSize")?e.get("_pageSize"):this.state._pageSize;const n=e.has("_pageSizeOptions")?e.get("_pageSizeOptions"):this.state._pageSizeOptions;if(Array.isArray(n)&&n.length>0){const t=n.find((t=>t.value===a));a=void 0===t?n[0].value:t.value,e.set("_pageSize",a)}const i=e.has("_page")?e.get("_page"):this.state._page,s=e.has("_max")?e.get("_max"):this.state._max;this.syncPage(e,i,e.get("_pageSize"),s)},this.syncPage=(t,e,a,n)=>{if(n>0){const i=this.calcCount(n,a);i>0&&(e>i?(t.set("_page",i),this.onChangePage(STATE_CHANGE_EVENT,i)):e<1&&(t.set("_page",1),this.onChangePage(STATE_CHANGE_EVENT,1)))}},this.beforePageSizeOptions=(t,e)=>{const a=[];if(Array.isArray(t))for(const e of t)"number"==typeof e&&a.push({label:translate("kol-page-per-site",{placeholders:{entries:`${e}`}}),value:e});e.set("_pageSizeOptions",a),this.beforePageSize(a,e)},this._boundaryCount=1,this._customClass=void 0,this._label=void 0,this._hasButtons=!0,this._page=void 0,this._pageSize=1,this._pageSizeOptions=[],this._on=void 0,this._siblingCount=1,this._tooltipAlign="top",this._max=void 0,this.state={_boundaryCount:1,_label:translate("kol-pagination"),_hasButtons:{first:!0,last:!0,next:!0,previous:!0},_on:{onClick:()=>null},_page:0,_pageSize:1,_pageSizeOptions:[],_siblingCount:1,_max:0}}render(){var t;let e=!1;const a=this.getCount(),n=Array.from(Array(a).keys()).map((t=>t+1)).map((t=>t<=this.state._boundaryCount||t>a-this.state._boundaryCount||t>=this.state._page-this.state._siblingCount&&t<=this.state._page+this.state._siblingCount?(e=!0,this.state._page===t?this.getSelectedPageButton(t):this.getUnselectedPageButton(t)):!0===e?(e=!1,h("li",null,h("span",{class:"separator",key:`${this.nonce}-el-${t}`,"aria-hidden":"true"}))):null));return h(Host,null,h("nav",{"aria-label":this.state._label},h("ul",{class:"navigation-list"},this.state._hasButtons.first&&h("li",null,h("kol-button-wc",{class:"first",exportparts:"icon",_customClass:this.state._customClass,_disabled:this.state._page<=1,_icons:leftDoubleArrowIcon,_hideLabel:!0,_label:translate("kol-page-first"),_on:this.onGoToFirst,_tooltipAlign:this.state._tooltipAlign})),this.state._hasButtons.previous&&h("li",null,h("kol-button-wc",{class:"previous",exportparts:"icon",_customClass:this.state._customClass,_disabled:this.state._page<=1,_icons:leftSingleArrow,_hideLabel:!0,_label:translate("kol-page-back"),_on:this.onGoBackward,_tooltipAlign:this.state._tooltipAlign})),n,this.state._hasButtons.next&&h("li",null,h("kol-button-wc",{class:"next",exportparts:"icon",_customClass:this.state._customClass,_disabled:a<=this.state._page,_icons:rightSingleArrowIcon,_hideLabel:!0,_label:translate("kol-page-next"),_on:this.onGoForward,_tooltipAlign:this.state._tooltipAlign})),this.state._hasButtons.last&&h("li",null,h("kol-button-wc",{class:"last",exportparts:"icon",_customClass:this.state._customClass,_disabled:a<=this.state._page,_icons:rightDoubleArrowIcon,_hideLabel:!0,_label:translate("kol-page-last"),_on:this.onGoToEnd,_tooltipAlign:this.state._tooltipAlign})))),(null===(t=this.state._pageSizeOptions)||void 0===t?void 0:t.length)>0&&h("kol-select",{_hideLabel:!0,_id:`pagination-size-${this.nonce}`,_label:translate("kol-entries-per-site"),_options:this.state._pageSizeOptions,_on:{onChange:this.onChangePageSize},_value:[this.state._pageSize]}))}getUnselectedPageButton(t){return h("li",null,h("kol-button-wc",{exportparts:"icon",key:`${this.nonce}-${t}`,_customClass:this.state._customClass,_label:`${t}`,_on:{onClick:e=>{this.onClick(e,t)}}}))}getSelectedPageButton(t){return h("li",null,h("kol-button-wc",{class:"selected",key:`${this.nonce}-selected`,_customClass:this.state._customClass,_disabled:!0,_label:`${t}`}))}validateBoundaryCount(t){watchNumber(this,"_boundaryCount",Math.max(0,null!=t?t:1))}validateCustomClass(t){validateCustomClass(this,t)}validateLabel(t,e,a=!1){a||removeNavLabel(this.state._label),validateLabel(this,t),addNavLabel(this.state._label)}validateHasButtons(t){watchValidator(this,"_hasButtons",(t=>"boolean"==typeof t||"string"==typeof t||"object"==typeof t&&null!==t),new Set(["Boolean","PaginationHasButton"]),t,{hooks:{beforePatch:(t,e)=>{if("boolean"==typeof t)e.set("_hasButtons",{first:t,last:t,next:t,previous:t});else{if("string"==typeof t)try{t=parseJson(t)}catch(t){e.delete("_hasButtons")}"object"==typeof t&&null!==t&&e.set("_hasButtons",Object.assign(Object.assign({},this.state._hasButtons),{first:"boolean"==typeof t.first?!0===t.first:this.state._hasButtons.first,last:"boolean"==typeof t.last?!0===t.last:this.state._hasButtons.last,next:"boolean"==typeof t.next?!0===t.next:this.state._hasButtons.next,previous:"boolean"==typeof t.previous?!0===t.previous:this.state._hasButtons.previous}))}}}})}validateOn(t){"object"==typeof t&&null!==t&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validatePage(t){watchNumber(this,"_page",t,{hooks:{beforePatch:(t,e)=>{const a=e.has("_pageSize")?e.get("_pageSize"):this.state._pageSize,n=e.has("_max")?e.get("_max"):this.state._max;this.syncPage(e,t,a,n)}}})}validatePageSize(t){watchNumber(this,"_pageSize",t,{hooks:{beforePatch:this.beforePageSize}})}validatePageSizeOptions(t){watchJsonArrayString(this,"_pageSizeOptions",(t=>"number"==typeof t),t,void 0,{hooks:{beforePatch:this.beforePageSizeOptions}})}validateSiblingCount(t){watchNumber(this,"_siblingCount",Math.max(0,null!=t?t:1))}validateMax(t){validateMax(this,t,{hooks:{beforePatch:(t,e)=>{const a=e.has("_page")?e.get("_page"):this.state._page,n=e.has("_pageSize")?e.get("_pageSize"):this.state._pageSize;this.syncPage(e,a,n,t)}}})}validateTooltipAlign(t){validateTooltipAlign(this,t)}componentWillLoad(){this.validateBoundaryCount(this._boundaryCount),this.validateCustomClass(this._customClass),this.validateHasButtons(this._hasButtons),this.validateLabel(this._label,void 0,!0),this.validateOn(this._on),this.validatePage(this._page),this.validatePageSize(this._pageSize),this.validatePageSizeOptions(this._pageSizeOptions),this.validateSiblingCount(this._siblingCount),this.validateTooltipAlign(this._tooltipAlign),this.validateMax(this._max),this.validatePage(this._page)}disconnectedCallback(){removeNavLabel(this.state._label)}static get watchers(){return{_boundaryCount:["validateBoundaryCount"],_customClass:["validateCustomClass"],_label:["validateLabel"],_hasButtons:["validateHasButtons"],_on:["validateOn"],_page:["validatePage"],_pageSize:["validatePageSize"],_pageSizeOptions:["validatePageSizeOptions"],_siblingCount:["validateSiblingCount"],_max:["validateMax"],_tooltipAlign:["validateTooltipAlign"]}}};KolPagination.style={default:defaultStyleCss};export{KolPagination as kol_pagination};