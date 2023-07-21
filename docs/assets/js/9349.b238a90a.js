/*! For license information please see 9349.b238a90a.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[9349],{42877:(e,t,o)=>{o.d(t,{a:()=>i,b:()=>b,c:()=>v,d:()=>d,e:()=>s,f:()=>u,g:()=>c,h:()=>g,u:()=>p});var n=o(45617);const a=new Set,i=e=>{!1===a.has(e)&&(a.add(e),n.L.debug(e,{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},r=new Set,s=e=>{!1===r.has(e)&&(r.add(e),n.L.warn(e,{classifier:"\ud83d\udd25 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},l=new Set,d=e=>{!1===l.has(e)&&(l.add(e),n.L.debug(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},c=e=>{!1===l.has(e)&&(l.add(e),n.L.warn(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},h=new Set,u=(e,t=!1)=>{!1===h.has(e)&&(h.add(e),e+=!0===t?" \u2705":"",n.L.debug(e,{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};d("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const f=new Set,p=e=>{!1===f.has(e)&&(f.add(e),n.L.debug(e,{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},g=()=>{i('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},b=e=>{"string"==typeof e&&""!==e||i("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},v=(e,t=8)=>{t>7&&p(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},18980:(e,t,o)=>{o.d(t,{a:()=>i,v:()=>a});var n=o(78389);const a=(e,t)=>{(0,n.a)(e,"_ariaCurrent",(e=>"date"===e||"location"===e||"page"===e||"step"===e||"time"===e||!0===e),new Set(["String {data, location, page, step, time}","boolean"]),t)},i=(e,t)=>{(0,n.b)(e,"_ariaSelected",t)}},35953:(e,t,o)=>{o.d(t,{w:()=>a});var n=o(78389);const a=(e,t,o)=>{(0,n.a)(e,t,(e=>"top"===e||"right"===e||"bottom"===e||"left"===e),new Set(["Alignment {top, right, buttom, left}"]),o,{defaultValue:"top"})}},43402:(e,t,o)=>{o.d(t,{a:()=>a,w:()=>i});var n=o(78389);const a=(e,t,o)=>{(0,n.a)(e,t,(e=>"button"===e||"reset"===e||"submit"===e),new Set(["KoliBriButtonType {button, reset, submit}"]),o)},i=(e,t,o)=>{(0,n.a)(e,t,(e=>"primary"===e||"secondary"===e||"normal"===e||"danger"===e||"ghost"===e||"custom"===e),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),o,{defaultValue:"normal"})}},75799:(e,t,o)=>{o.d(t,{a:()=>i,v:()=>a});var n=o(78389);const a=(e,t)=>{(0,n.b)(e,"_ariaExpanded",t)},i=(e,t)=>{(0,n.b)(e,"_disabled",t)}},71814:(e,t,o)=>{o.d(t,{v:()=>a});var n=o(78389);const a=(e,t)=>{(0,n.b)(e,"_hideLabel",t)}},79349:(e,t,o)=>{o.r(t),o.d(t,{kol_split_button:()=>f});var n=o(61678),a=o(35953),i=o(18980),r=o(75799),s=o(71814),l=o(85907),d=o(42877),c=o(78389),h=o(39492),u=o(43402);const f=class{constructor(e){(0,n.r)(this,e),this.clickHandler=e=>{"function"==typeof this.state._on.onClick?this.state._on.onClick(e):this.toggleDropdown()},this.openDropdown=()=>{this.dropdown&&this.dropdownContent&&(this.dropdown.style.height=`${this.dropdownContent.clientHeight}px`,this.state=Object.assign(Object.assign({},this.state),{_showDropdown:!0}))},this.closeDropdown=()=>{this.dropdown&&this.dropdownContent&&(this.dropdown.style.height="",this.state=Object.assign(Object.assign({},this.state),{_showDropdown:!1}))},this.toggleDropdown=e=>{("boolean"==typeof e?e:!this.state._showDropdown)?this.openDropdown():this.closeDropdown()},this.forceCounter=100,this.forceOpenDropdown=()=>{var e;this.forceCounter>0&&((null===(e=this.dropdownContent)||void 0===e?void 0:e.clientHeight)?this.openDropdown():setTimeout(this.forceOpenDropdown,10),this.forceCounter--)},this.catchDropdownElements=e=>{e&&(this.dropdown=e,setTimeout((()=>{this.dropdownContent=e.firstChild,this._showDropdown&&this.forceOpenDropdown()})))},this._accessKey=void 0,this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._hideLabel=!1,this._icon=void 0,this._iconOnly=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._showDropdown=!1,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_icon:"",_label:"",_on:{},_showDropdown:!1}}render(){return(0,n.h)(n.H,null,(0,n.h)("kol-button-wc",{class:{"main-button":!0,button:!0,[this._variant]:"custom"!==this._variant,[this._customClass]:"custom"===this._variant&&"string"==typeof this._customClass&&this._customClass.length>0},_accessKey:this._accessKey,_ariaControls:this._ariaControls,_ariaCurrent:this._ariaCurrent,_ariaExpanded:this._ariaExpanded,_ariaSelected:this._ariaSelected,_customClass:this._customClass,_disabled:this._disabled,_icon:this._icon,_hideLabel:this._hideLabel,_label:this._label,_on:{onClick:this.clickHandler},_role:this._role,_tabIndex:this._tabIndex,_tooltipAlign:this._tooltipAlign,_type:this._type,_value:this._value,_variant:this._variant}),(0,n.h)("div",{class:"horizontal-line"}),(0,n.h)("kol-button-wc",{class:"secondary-button",_disabled:this._disabled,_hideLabel:!0,_icon:"codicon codicon-triangle-down",_label:"dropdown "+(this.state._showDropdown?"schlie\xdfen":"\xf6ffnen"),_on:{onClick:()=>this.toggleDropdown()}}),(0,n.h)("div",{class:"popover",ref:this.catchDropdownElements},(0,n.h)("div",{class:"popover-content"},(0,n.h)("slot",null))))}validateAccessKey(e){(0,c.w)(this,"_accessKey",e)}validateAriaControls(e){(0,c.w)(this,"_ariaControls",e)}validateAriaCurrent(e){(0,i.v)(this,e)}validateAriaExpanded(e){(0,r.v)(this,e)}validateAriaLabel(e){this.validateLabel(e)}validateAriaSelected(e){(0,i.a)(this,e)}validateCustomClass(e){(0,c.w)(this,"_customClass",e,{defaultValue:void 0})}validateDisabled(e){(0,r.a)(this,e),e&&(0,d.h)()}validateHideLabel(e){(0,s.v)(this,e)}validateIcon(e){(0,c.w)(this,"_icon",e)}validateIconOnly(e){this.validateHideLabel(e)}validateLabel(e){(0,l.v)(this,e)}validateOn(e){"object"==typeof e&&null!==e&&(this.state=Object.assign(Object.assign({},this.state),{_on:e}))}validateRole(e){(0,c.w)(this,"_role",e)}validateShowDropdown(e){(0,c.b)(this,"_showDropdown",e),this.toggleDropdown(e)}validateTabIndex(e){(0,h.v)(this,e)}validateTooltipAlign(e){(0,a.w)(this,"_tooltipAlign",e)}validateType(e){(0,u.a)(this,"_type",e)}validateValue(e){(0,c.s)(this,"_value",e)}validateVariant(e){(0,u.w)(this,"_variant",e)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaSelected(this._ariaSelected),this.validateCustomClass(this._customClass),this.validateDisabled(this._disabled),this.validateHideLabel(this._hideLabel||this._iconOnly),this.validateIcon(this._icon),this.validateLabel(this._label||this._ariaLabel),this.validateOn(this._on),this.validateRole(this._role),this.validateShowDropdown(this._showDropdown),this.validateTabIndex(this._tabIndex),this.validateTooltipAlign(this._tooltipAlign),this.validateType(this._type),this.validateValue(this._value),this.validateVariant(this._variant)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_hideLabel:["validateHideLabel"],_icon:["validateIcon"],_iconOnly:["validateIconOnly"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_showDropdown:["validateShowDropdown"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}};f.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:flex;position:relative}.main-button{flex-grow:1;text-align:left}.main-button kol-span-wc{place-items:start}.secondary-button button{height:100%}.horizontal-line{background-color:rgba(0, 0, 0, 0.2);border-radius:2px;height:70%;margin-block:auto;width:1px}.popover{height:0;left:0;min-width:100%;overflow:hidden;position:absolute;top:100%;transition:height 0.3s ease-in-out}.popover-content{inset:0 0 auto 0;min-width:100%;position:absolute}"}},85907:(e,t,o)=>{o.d(t,{a:()=>f,c:()=>l,h:()=>s,v:()=>h});var n=o(42877),a=o(78389);const i=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,r=/^\d+$/;function s(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(i))||void 0===t?void 0:t.length)||0}(e)>=t}function l(e){return r.test(e)}function d(e){var t;return{hooks:{afterPatch:(t,o,a,i)=>{var r,d;"function"==typeof(null===(r=e.hooks)||void 0===r?void 0:r.afterPatch)&&(null===(d=e.hooks)||void 0===d||d.afterPatch(t,o,a,i)),"string"==typeof t&&!1===s(t,3)&&!1===l(t)&&(0,n.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,n.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}}}const c=new Set(["string"]),h=(e,t,o={})=>{(0,a.a)(e,"_label",(e=>"string"==typeof e),c,t,d(o))},u=new Set(["string","false"]),f=(e,t,o={})=>{""!==t&&"false"!==t||(t=!1),(0,a.a)(e,"_label",(e=>!1===e||"string"==typeof e),u,t,d(o))}},78389:(e,t,o)=>{o.d(t,{K:()=>re,a:()=>P,b:()=>z,c:()=>D,d:()=>K,e:()=>$,f:()=>H,g:()=>T,h:()=>U,i:()=>ae,j:()=>Z,k:()=>Y,l:()=>ie,m:()=>V,n:()=>te,o:()=>E,p:()=>F,q:()=>G,r:()=>d,s:()=>M,t:()=>oe,u:()=>J,w:()=>I});var n=o(42877),a=o(45617),i=o(11301);const r=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const o=new Set;r(o,t.querySelectorAll(e));const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const a=n[t].shadowRoot;r(o,s(e,"object"==typeof a&&null!==a?a:n[t]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let o=t.querySelector(e);if(null===o){const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const a=n[t].shadowRoot;if(o=l(e,"object"==typeof a&&null!==a?a:n[t]),null!==o)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var d=g,c=g,h=function(e){var t=b(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},u=function(e){var t=b(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},f=function(e){3==(t=b(e)).length&&t.push(255);var t,o=255==t[3],n=v(t[0]),a=v(t[1]),i=v(t[2]),r=function(e,t,o,n){var a=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=a.indexOf(e)&&-1!=a.indexOf(t)&&-1!=a.indexOf(o)&&-1!=a.indexOf(n)}(n,a,i,t=v(Math.round(t[3])));return o?r?"#"+n.charAt(0)+a.charAt(0)+i.charAt(0):"#"+n+a+i:r?"#"+n.charAt(0)+a.charAt(0)+i.charAt(0)+t.charAt(0):"#"+n+a+i+t},p=function(e){var t=b(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function g(e){var t=b(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function b(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),o=t.length;if(3==o||4==o){var n=m(t[0]),a=m(t[1]),i=m(t[2]),r=3==o?255:m(t[3]);if(isNaN(n)||isNaN(a)||isNaN(i)||isNaN(r))return;return[n,a,i,r]}}(e)||function(e){var t=e.replace(/^#/,""),o=t.length;if(6==o||8==o){var n=m(t.slice(0,2)),a=m(t.slice(2,4)),i=m(t.slice(4,6)),r=6==o?255:m(t.slice(6,8));if(isNaN(n)||isNaN(a)||isNaN(i)||isNaN(r))return;return[n,a,i,r]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=w(t[0],!0),n=w(t[1],!0),a=w(t[2],!0);if(-1!=o&&-1!=n&&-1!=a)return[o,n,a,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=w(t[0],!0),n=w(t[1],!0),a=w(t[2],!0),i=w(255*t[3]);if(-1!=o&&-1!=n&&-1!=a&&-1!=i)return[o,n,a,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=w(null!=e.r?e.r:null!=e.red?e.red:0,!0),o=w(null!=e.g?e.g:null!=e.green?e.green:0,!0),n=w(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),a=w(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=o&&-1!=n&&-1!=a)return[t,o,n,a]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=w(e[0],!0),o=w(e[1],!0),n=w(e[2],!0),a=w(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=o&&-1!=n&&-1!=a)return[t,o,n,a]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function v(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function m(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function w(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}d.arr=c,d.obj=h,d.css=u,d.hex=f,d.num=p;var y=.2126,_=.7152,k=.0722,S=1/12.92;function x(e){return Math.pow((e+.055)/1.055,2.4)}function A(e){var t=e[0]/255,o=e[1]/255,n=e[2]/255,a=t<=.03928?t*S:x(t),i=o<=.03928?o*S:x(o),r=n<=.03928?n*S:x(n);return a*y+i*_+r*k}function L(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var o=parseInt(e,16);return[o>>16,o>>8&255,255&o,t]}function C(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(A(e),A(t))}function D(e,t){return C(L(e),L(t))}function N(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const O=/\[object Object\]/,E=(e,t)=>{"string"==typeof e&&O.test(e)||t()},T=(e,t)=>{"string"==typeof e&&""===e||t()},H=(e,t)=>{(0,a.b)()&&(a.L.debug([e,t]),a.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},M=(e,t,o,n={})=>{var a,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==o&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof n.afterPatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("afterPatch",n.afterPatch)),"function"==typeof n.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",n.beforePatch)),e.nextState.set(t,o),(e=>{var t,o,n;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,o)=>{var n;const a=t.get("beforePatch");"function"==typeof a&&a(null===(n=e.nextState)||void 0===n?void 0:n.get(o),e.nextState,e,o)})),(null===(o=e.nextState)||void 0===o?void 0:o.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(n=e.nextHooks)||void 0===n||n.forEach(((t,o)=>{const n=t.get("afterPatch");"function"==typeof n&&n(e.state[o],e.state,e,o)}))),delete e.nextHooks})(e))},j=(e,t,o,a)=>{(0,n.d)(`[${e.constructor.name}] Der Property-Wert (${o}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(a).join(", ")}`)};function P(e,t,o,n,a,i={}){o(a)?M(e,t,a,i.hooks):null!=a||i.required?(i.required||n.add(null),j(e,t,a,n)):M(e,t,i.defaultValue,i.hooks)}const z=(e,t,o,n)=>{P(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),o,n)},I=(e,t,o,n={})=>{const a="number"==typeof n.minLength?null==n?void 0:n.minLength:0;P(e,t,(e=>"string"==typeof e&&e.length>=a&&(void 0===(null==n?void 0:n.maxLength)||e.length<=n.maxLength)),new Set(["String"]),o,n)},$=(e,t,o,n)=>{P(e,t,(e=>"number"==typeof e&&(void 0===(null==n?void 0:n.min)||"number"==typeof(null==n?void 0:n.min)&&e>=n.min)&&(void 0===(null==n?void 0:n.max)||"number"==typeof(null==n?void 0:n.max)&&e<=n.max)),new Set(["Number"]),o,n)},K=(e,t,o,n,i=(e=>e==e),r={})=>{T(n,(()=>{E(n,(()=>{void 0===n&&(n=[]);try{try{n=F(n)}catch(e){}if(Array.isArray(n)){const s=n.find((e=>!o(e)));void 0===s&&i(n)?M(e,t,n,r.hooks):E(s,(()=>{throw a.L.debug(s),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else E(n,(()=>{throw a.L.debug(n),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){a.L.debug(e)}}))}))},q=/^(true|false)$/,R=/^-?(0|[1-9]\d*)$/,B=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,V=e=>{const t=typeof e,o=`${e}`;if("string"==typeof e)if(q.test(e))e="true"===e;else if(R.test(e))e=parseInt(e);else if(B.test(e))e=parseFloat(e);else if(W.test(e))try{e=F(e)}catch(e){}return t!==typeof e&&(0,n.d)(`You have used a stringified property value (${o} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},J=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(k){throw a.L.warn(["stringifyJson",e]),a.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},W=/^[{[]/,F=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(k){if(W.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(k){a.L.warn(["parseJson",e]),a.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},U=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,Z=e=>"string"==typeof e?e:U(e),Y=(e,t)=>l(e,t||(0,a.g)()),G=(e,t)=>s(e,t||(0,a.g)());let Q=null;const X=()=>(Q=Q||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,a.g)().body,level:"Fail",score:1},Q),ee=/(\d+, ){3}0\)/,te=(e,t=X())=>{const o=getComputedStyle(e),n=ee.test(o.backgroundColor)?t.backgroundColor:d.hex(o.backgroundColor),i=ee.test(o.color)?t.color:d.hex(o.color),r=D(n,i),s={backgroundColor:n,color:i,domNode:e,level:N(r),score:r};return r<4.5&&a.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},oe=(e,t=X())=>{t.domNode instanceof HTMLElement&&(t=te(t.domNode,t));const o=t.domNode.querySelector(e);if(null===o){const o=t.domNode.querySelectorAll('[class="hydrated"]');for(let n=0;n<o.length&&(t.domNode=o[n],null===(t=oe(e,t)).domNode);n++);return t}return te(o,t)},ne=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,a.a)().pageYOffset-50}),e.focus()):(0,n.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ae=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,n.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const o=`${t}`;t=e,e=o}if("string"==typeof e){const o=Y(e,t);o instanceof HTMLElement?ne(o):(0,n.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,n.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class ie{static queryHtmlElementColors(e,t,o=!1,n=!0){let i=null;if(!0===o||!1===ie.executionLock)if(!1===o&&(ie.cache.clear(),ie.cache.set(t.domNode,t),ie.executionLock=!0,!0===n&&a.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)i=t;else{const o=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)o.add(e[t])}const n=t.domNode;if("function"==typeof n.assignedNodes){const e=n.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&o.add(e[t])}const a=t.domNode.children;for(let e=0;e<a.length;e++)o.add(a[e]);const r=Array.from(o);for(let s=0;s<r.length;s++){let o=ie.cache.get(r[s]);void 0===o&&(o=te(r[s],t)),ie.cache.set(r[s],o);const n=ie.queryHtmlElementColors(e,o,!0,!1);if(null!==n){i=n;break}}}else a.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===o&&(!0===n&&a.L.debug(`[KoliBriUtils] Color contrast analysis finished (${ie.cache.size} DOM elements are analysed).`),ie.executionLock=!1,ie.cache.clear()),i}}ie.executionLock=!1,ie.cache=new Map;class re{}re.patchTheme=i.p,re.patchThemeTag=i.a,re.querySelector=Y,re.querySelectorAll=G,re.scrollByHTMLElement=ne,re.scrollBySelector=ae,re.stringifyJson=J},39492:(e,t,o)=>{o.d(t,{v:()=>r});var n=o(42877),a=o(78389);const i={hooks:{afterPatch:e=>{-1!==e&&0!==e&&(0,n.a)("Don\u2019t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},r=(e,t)=>{(0,a.e)(e,"_tabIndex",t,i)}}}]);