/*! For license information please see 6522.d86cfe9a.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[6522],{89054:(e,t,n)=>{n.d(t,{a:()=>i,b:()=>b,c:()=>m,d:()=>c,e:()=>r,f:()=>d,g:()=>f,h:()=>h,u:()=>p});var o=n(54059);const a=new Set,i=e=>{!1===a.has(e)&&(a.add(e),o.L.debug(e,{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},s=new Set,r=e=>{!1===s.has(e)&&(s.add(e),o.L.warn(e,{classifier:"\ud83d\udd25 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},l=new Set,c=e=>{!1===l.has(e)&&(l.add(e),o.L.debug(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},h=e=>{!1===l.has(e)&&(l.add(e),o.L.warn(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},u=new Set,d=(e,t=!1)=>{!1===u.has(e)&&(u.add(e),e+=!0===t?" \u2705":"",o.L.debug(e,{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const g=new Set,p=e=>{!1===g.has(e)&&(g.add(e),o.L.debug(e,{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},f=()=>{i('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},b=e=>{"string"==typeof e&&""!==e||i("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},m=(e,t=8)=>{t>7&&p(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},160:(e,t,n)=>{n.d(t,{w:()=>a});var o=n(76309);const a=(e,t,n)=>{(0,o.a)(e,t,(e=>"top"===e||"right"===e||"bottom"===e||"left"===e),new Set(["Alignment {top, right, buttom, left}"]),n,{defaultValue:"top"})}},51614:(e,t,n)=>{n.d(t,{a:()=>a,w:()=>i});var o=n(76309);const a=(e,t,n)=>{(0,o.a)(e,t,(e=>"button"===e||"reset"===e||"submit"===e),new Set(["KoliBriButtonType {button, reset, submit}"]),n)},i=(e,t,n)=>{(0,o.a)(e,t,(e=>"primary"===e||"secondary"===e||"normal"===e||"danger"===e||"ghost"===e||"custom"===e),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),n,{defaultValue:"normal"})}},27607:(e,t,n)=>{n.d(t,{a:()=>c});var o=n(99332),a=n(89054);const i={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri"},s={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},r=e=>Object.keys(e).reduce(((t,n)=>(t[`kol-${n}`]=e[n],t)),{}),l=new Set([e=>e("en",r(s)),e=>e("de",r(i))]),c=(e,t)=>{const n=(0,o.g)();if(void 0===n)return(0,a.d)("[I18n] I18nService not available! Please call the global register function."),e;let i=n.translate(e,t);return i===e&&((0,a.d)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((e=>e(((e,t)=>(n.addResourceBundle(e,t),e))))),i=n.translate(e,t)),i}},66522:(e,t,n)=>{n.r(t),n.d(t,{kol_pagination:()=>p});var o=n(18313),a=n(160),i=n(54059),s=n(76309),r=n(51614),l=n(92237),c=n(27607);const h={left:"codicon codicon-debug-reverse-continue"},u={left:"codicon codicon-chevron-left"},d={right:"codicon codicon-chevron-right"},g={right:"codicon codicon-debug-continue"},p=class{constructor(e){(0,o.r)(this,e),this.nonce=(0,i.n)(),this.calcCount=(e,t=1)=>Math.ceil(e/t),this.getCount=()=>this.calcCount(this.state._total,this.state._pageSize),this.onClick=(e,t)=>{"function"==typeof this.state._on.onClick&&this.state._on.onClick(e,t),this.onChangePage(e,t)},this.onChangePage=(e,t)=>{const n=setTimeout((()=>{clearTimeout(n),"function"==typeof this.state._on.onChangePage&&this.state._on.onChangePage(e,t)}))},this.onChangePageSize=(e,t)=>{if("number"==typeof(t=parseInt(t[0]))&&t>0&&this._pageSize!==t){this._pageSize=t;const n=setTimeout((()=>{clearTimeout(n),"function"==typeof this.state._on.onChangePageSize&&this.state._on.onChangePageSize(e,this._pageSize)}))}},this.onGoToFirst={onClick:e=>{this.onClick(e,1)}},this.onGoToEnd={onClick:e=>{this.onClick(e,this.getCount())}},this.onGoBackward={onClick:e=>{this.onClick(e,this.state._page-1)}},this.onGoForward={onClick:e=>{this.onClick(e,this.state._page+1)}},this.beforePageSize=(e,t)=>{let n=t.has("_pageSize")?t.get("_pageSize"):this.state._pageSize;const o=t.has("_pageSizeOptions")?t.get("_pageSizeOptions"):this.state._pageSizeOptions;if(Array.isArray(o)&&o.length>0){const e=o.find((e=>e.value===n));n=void 0===e?o[0].value:e.value,t.set("_pageSize",n)}const a=t.has("_page")?t.get("_page"):this.state._page,i=t.has("_total")?t.get("_total"):this.state._total;this.syncPage(t,a,t.get("_pageSize"),i)},this.syncPage=(e,t,n,o)=>{if(o>0){const a=this.calcCount(o,n);a>0&&(t>a?(e.set("_page",a),this.onChangePage(l.S,a)):t<1&&(e.set("_page",1),this.onChangePage(l.S,1)))}},this.beforePageSizeOptions=(e,t)=>{const n=[];if(Array.isArray(e))for(const o of e)"number"==typeof o&&n.push({label:(0,c.a)("kol-page-per-site",{placeholders:{entries:`${o}`}}),value:o});t.set("_pageSizeOptions",n),this.beforePageSize(n,t)},this._boundaryCount=1,this._customClass=void 0,this._hasButtons=!0,this._page=void 0,this._pageSize=1,this._pageSizeOptions=[],this._on=void 0,this._siblingCount=1,this._tooltipAlign="top",this._total=void 0,this._variant="normal",this.state={_boundaryCount:1,_hasButtons:{first:!0,last:!0,next:!0,previous:!0},_on:{onClick:()=>null},_page:0,_pageSize:1,_pageSizeOptions:[],_siblingCount:1,_total:0,_variant:"normal"}}render(){var e;let t=!1;const n=this.getCount(),a=Array.from(Array(n).keys()).map((e=>e+1)).map((e=>e<=this.state._boundaryCount||e>n-this.state._boundaryCount||e>=this.state._page-this.state._siblingCount&&e<=this.state._page+this.state._siblingCount?(t=!0,this.state._page===e?this.getSelectedPageButton(e):this.getUnselectedPageButton(e)):!0===t?(t=!1,(0,o.h)("span",{class:"separator",key:`${this.nonce}-el-${e}`})):null));return(0,o.h)(o.H,null,(0,o.h)("div",null,this.state._hasButtons.first&&(0,o.h)("kol-button",{class:"first",exportparts:"icon",_customClass:this.state._customClass,_disabled:this.state._page<=1,_icon:h,_iconOnly:!0,_label:(0,c.a)("kol-page-first"),_on:this.onGoToFirst,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign}),this.state._hasButtons.previous&&(0,o.h)("kol-button",{class:"previous",exportparts:"icon",_customClass:this.state._customClass,_disabled:this.state._page<=1,_icon:u,_iconOnly:!0,_label:(0,c.a)("kol-page-back"),_on:this.onGoBackward,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign}),a,this.state._hasButtons.next&&(0,o.h)("kol-button",{class:"next",exportparts:"icon",_customClass:this.state._customClass,_disabled:n<=this.state._page,_icon:d,_iconOnly:!0,_label:(0,c.a)("kol-page-next"),_on:this.onGoForward,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign}),this.state._hasButtons.last&&(0,o.h)("kol-button",{class:"last",exportparts:"icon",_customClass:this.state._customClass,_disabled:n<=this.state._page,_icon:g,_iconOnly:!0,_label:(0,c.a)("kol-page-last"),_on:this.onGoToEnd,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign})),(null===(e=this.state._pageSizeOptions)||void 0===e?void 0:e.length)>0&&(0,o.h)("kol-select",{_hideLabel:!0,_id:"pagination-size",_label:(0,c.a)("kol-entries-per-site"),_list:this.state._pageSizeOptions,_on:{onChange:this.onChangePageSize},_value:[this.state._pageSize]}))}getUnselectedPageButton(e){return(0,o.h)("kol-button",{exportparts:"icon",key:`${this.nonce}-${e}`,_customClass:this.state._customClass,_ariaLabel:(0,c.a)("kol-page-current",{placeholders:{page:e.toFixed(0)}}),_label:`${e}`,_on:{onClick:t=>{this.onClick(t,e)}},_variant:this.state._variant})}getSelectedPageButton(e){return(0,o.h)("kol-button-wc",{class:"selected",key:`${this.nonce}-selected`,_customClass:this.state._customClass,_disabled:!0,_ariaCurrent:!0,_ariaLabel:(0,c.a)("kol-page-selected",{placeholders:{page:e.toFixed(0)}}),_label:`${e}`,_variant:this.state._variant})}validateBoundaryCount(e){(0,s.e)(this,"_boundaryCount",Math.max(0,null!=e?e:1))}validateCustomClass(e){(0,s.w)(this,"_customClass",e,{defaultValue:void 0})}validateHasButtons(e){(0,s.a)(this,"_hasButtons",(e=>"boolean"==typeof e||"string"==typeof e||"object"==typeof e&&null!==e),new Set(["Boolean","PaginationHasButton"]),e,{hooks:{beforePatch:(e,t)=>{if("boolean"==typeof e)t.set("_hasButtons",{first:e,last:e,next:e,previous:e});else{if("string"==typeof e)try{e=(0,s.p)(e)}catch(e){t.delete("_hasButtons")}"object"==typeof e&&null!==e&&t.set("_hasButtons",Object.assign(Object.assign({},this.state._hasButtons),{first:"boolean"==typeof e.first?!0===e.first:this.state._hasButtons.first,last:"boolean"==typeof e.last?!0===e.last:this.state._hasButtons.last,next:"boolean"==typeof e.next?!0===e.next:this.state._hasButtons.next,previous:"boolean"==typeof e.previous?!0===e.previous:this.state._hasButtons.previous}))}}}})}validateOn(e){"object"==typeof e&&null!==e&&(this.state=Object.assign(Object.assign({},this.state),{_on:e}))}validatePage(e){(0,s.e)(this,"_page",e,{hooks:{beforePatch:(e,t)=>{const n=t.has("_pageSize")?t.get("_pageSize"):this.state._pageSize,o=t.has("_total")?t.get("_total"):this.state._total;this.syncPage(t,e,n,o)}}})}validatePageSize(e){(0,s.e)(this,"_pageSize",e,{hooks:{beforePatch:this.beforePageSize}})}validatePageSizeOptions(e){(0,s.d)(this,"_pageSizeOptions",(e=>"number"==typeof e),e,void 0,{hooks:{beforePatch:this.beforePageSizeOptions}})}validateSiblingCount(e){(0,s.e)(this,"_siblingCount",Math.max(0,null!=e?e:1))}validateTotal(e){(0,s.e)(this,"_total",e,{hooks:{beforePatch:(e,t)=>{const n=t.has("_page")?t.get("_page"):this.state._page,o=t.has("_pageSize")?t.get("_pageSize"):this.state._pageSize;this.syncPage(t,n,o,e)}}})}validateTooltipAlign(e){(0,a.w)(this,"_tooltipAlign",e)}validateVariant(e){(0,r.w)(this,"_variant",e)}componentWillLoad(){this.validateBoundaryCount(this._boundaryCount),this.validateCustomClass(this._customClass),this.validateHasButtons(this._hasButtons),this.validateOn(this._on),this.validatePage(this._page),this.validatePageSize(this._pageSize),this.validatePageSizeOptions(this._pageSizeOptions),this.validateSiblingCount(this._siblingCount),this.validateTooltipAlign(this._tooltipAlign),this.validateTotal(this._total),this.validateVariant(this._variant),this.validatePage(this._page)}static get watchers(){return{_boundaryCount:["validateBoundaryCount"],_customClass:["validateCustomClass"],_hasButtons:["validateHasButtons"],_on:["validateOn"],_page:["validatePage"],_pageSize:["validatePageSize"],_pageSizeOptions:["validatePageSizeOptions"],_siblingCount:["validateSiblingCount"],_total:["validateTotal"],_tooltipAlign:["validateTooltipAlign"],_variant:["validateVariant"]}}};p.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.separator:before{content:'\u2022\u2022\u2022'}"}},76309:(e,t,n)=>{n.d(t,{K:()=>se,a:()=>H,b:()=>j,c:()=>P,d:()=>F,e:()=>D,f:()=>E,g:()=>B,h:()=>G,i:()=>ae,j:()=>U,k:()=>Z,l:()=>ie,m:()=>W,n:()=>te,o:()=>N,p:()=>V,q:()=>Y,r:()=>c,s:()=>M,t:()=>ne,u:()=>J,w:()=>$});var o=n(89054),a=n(54059),i=n(54095);const s=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},r=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;s(n,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const a=o[t].shadowRoot;s(n,r(e,"object"==typeof a&&null!==a?a:o[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const a=o[t].shadowRoot;if(n=l(e,"object"==typeof a&&null!==a?a:o[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=f,h=f,u=function(e){var t=b(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},d=function(e){var t=b(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},g=function(e){3==(t=b(e)).length&&t.push(255);var t,n=255==t[3],o=m(t[0]),a=m(t[1]),i=m(t[2]),s=function(e,t,n,o){var a=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=a.indexOf(e)&&-1!=a.indexOf(t)&&-1!=a.indexOf(n)&&-1!=a.indexOf(o)}(o,a,i,t=m(Math.round(t[3])));return n?s?"#"+o.charAt(0)+a.charAt(0)+i.charAt(0):"#"+o+a+i:s?"#"+o.charAt(0)+a.charAt(0)+i.charAt(0)+t.charAt(0):"#"+o+a+i+t},p=function(e){var t=b(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function f(e){var t=b(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function b(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var o=_(t[0]),a=_(t[1]),i=_(t[2]),s=3==n?255:_(t[3]);if(isNaN(o)||isNaN(a)||isNaN(i)||isNaN(s))return;return[o,a,i,s]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var o=_(t.slice(0,2)),a=_(t.slice(2,4)),i=_(t.slice(4,6)),s=6==n?255:_(t.slice(6,8));if(isNaN(o)||isNaN(a)||isNaN(i)||isNaN(s))return;return[o,a,i,s]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=v(t[0],!0),o=v(t[1],!0),a=v(t[2],!0);if(-1!=n&&-1!=o&&-1!=a)return[n,o,a,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=v(t[0],!0),o=v(t[1],!0),a=v(t[2],!0),i=v(255*t[3]);if(-1!=n&&-1!=o&&-1!=a&&-1!=i)return[n,o,a,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=v(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=v(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=v(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),a=v(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=a)return[t,n,o,a]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=v(e[0],!0),n=v(e[1],!0),o=v(e[2],!0),a=v(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=a)return[t,n,o,a]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function m(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function _(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function v(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=h,c.obj=u,c.css=d,c.hex=g,c.num=p;var y=.2126,S=.7152,k=.0722,w=1/12.92;function C(e){return Math.pow((e+.055)/1.055,2.4)}function z(e){var t=e[0]/255,n=e[1]/255,o=e[2]/255,a=t<=.03928?t*w:C(t),i=n<=.03928?n*w:C(n),s=o<=.03928?o*w:C(o);return a*y+i*S+s*k}function x(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function A(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(z(e),z(t))}function P(e,t){return A(x(e),x(t))}function L(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const O=/\[object Object\]/,N=(e,t)=>{"string"==typeof e&&O.test(e)||t()},B=(e,t)=>{"string"==typeof e&&""===e||t()},E=(e,t)=>{(0,a.b)()&&(a.L.debug([e,t]),a.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},M=(e,t,n,o={})=>{var a,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==n&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",o.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var o;const a=t.get("beforePatch");"function"==typeof a&&a(null===(o=e.nextState)||void 0===o?void 0:o.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,n)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e))},T=(e,t,n,a)=>{(0,o.d)(`[${e.constructor.name}] Der Property-Wert (${n}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(a).join(", ")}`)};function H(e,t,n,o,a,i={}){n(a)?M(e,t,a,i.hooks):null!=a||i.required?(i.required||o.add(null),T(e,t,a,o)):M(e,t,i.defaultValue,i.hooks)}const j=(e,t,n,o)=>{H(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,o)},$=(e,t,n,o={})=>{const a="number"==typeof o.minLength?null==o?void 0:o.minLength:0;H(e,t,(e=>"string"==typeof e&&e.length>=a&&(void 0===(null==o?void 0:o.maxLength)||e.length<=o.maxLength)),new Set(["String"]),n,o)},D=(e,t,n,o)=>{H(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),n,o)},F=(e,t,n,o,i=(e=>e==e),s={})=>{B(o,(()=>{N(o,(()=>{void 0===o&&(o=[]);try{try{o=V(o)}catch(e){}if(Array.isArray(o)){const r=o.find((e=>!n(e)));void 0===r&&i(o)?M(e,t,o,s.hooks):N(r,(()=>{throw a.L.debug(r),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else N(o,(()=>{throw a.L.debug(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){a.L.debug(e)}}))}))},q=/^(true|false)$/,R=/^-?(0|[1-9]\d*)$/,I=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,W=e=>{const t=typeof e,n=`${e}`;if("string"==typeof e)if(q.test(e))e="true"===e;else if(R.test(e))e=parseInt(e);else if(I.test(e))e=parseFloat(e);else if(K.test(e))try{e=V(e)}catch(e){}return t!==typeof e&&(0,o.d)(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},J=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(k){throw a.L.warn(["stringifyJson",e]),a.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},K=/^[{[]/,V=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(k){if(K.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(k){a.L.warn(["parseJson",e]),a.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},G=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,U=e=>"string"==typeof e?e:G(e),Z=(e,t)=>l(e,t||(0,a.g)()),Y=(e,t)=>r(e,t||(0,a.g)());let Q=null;const X=()=>(Q=Q||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,a.g)().body,level:"Fail",score:1},Q),ee=/(\d+, ){3}0\)/,te=(e,t=X())=>{const n=getComputedStyle(e),o=ee.test(n.backgroundColor)?t.backgroundColor:c.hex(n.backgroundColor),i=ee.test(n.color)?t.color:c.hex(n.color),s=P(o,i),r={backgroundColor:o,color:i,domNode:e,level:L(s),score:s};return s<4.5&&a.L.error(["Color-Contrast-Error",{backgroundColor:r.backgroundColor,color:r.color,level:r.level,score:r.score},r.domNode]),r},ne=(e,t=X())=>{t.domNode instanceof HTMLElement&&(t=te(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<n.length&&(t.domNode=n[o],null===(t=ne(e,t)).domNode);o++);return t}return te(n,t)},oe=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,a.a)().pageYOffset-50}),e.focus()):(0,o.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ae=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,o.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const n=`${t}`;t=e,e=n}if("string"==typeof e){const n=Z(e,t);n instanceof HTMLElement?oe(n):(0,o.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,o.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class ie{static queryHtmlElementColors(e,t,n=!1,o=!0){let i=null;if(!0===n||!1===ie.executionLock)if(!1===n&&(ie.cache.clear(),ie.cache.set(t.domNode,t),ie.executionLock=!0,!0===o&&a.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)i=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const a=t.domNode.children;for(let e=0;e<a.length;e++)n.add(a[e]);const s=Array.from(n);for(let r=0;r<s.length;r++){let n=ie.cache.get(s[r]);void 0===n&&(n=te(s[r],t)),ie.cache.set(s[r],n);const o=ie.queryHtmlElementColors(e,n,!0,!1);if(null!==o){i=o;break}}}else a.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===o&&a.L.debug(`[KoliBriUtils] Color contrast analysis finished (${ie.cache.size} DOM elements are analysed).`),ie.executionLock=!1,ie.cache.clear()),i}}ie.executionLock=!1,ie.cache=new Map;class se{}se.patchTheme=i.p,se.patchThemeTag=i.a,se.querySelector=Z,se.querySelectorAll=Y,se.scrollByHTMLElement=oe,se.scrollBySelector=ae,se.stringifyJson=J}}]);