/*! For license information please see 3031.549424ff.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[3031],{97788:(e,t,n)=>{n.d(t,{a:()=>r,b:()=>g,c:()=>l,d:()=>c,e:()=>p,f:()=>h,u:()=>f});var a=n(23788);const i=new Set,r=e=>{!1===i.has(e)&&(i.add(e),a.L.debug(e,{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},o=new Set,l=e=>{!1===o.has(e)&&(o.add(e),a.L.warn(e,{classifier:"\ud83d\udd25 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},s=new Set,c=e=>{!1===s.has(e)&&(s.add(e),a.L.debug(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},d=new Set,h=(e,t=!1)=>{!1===d.has(e)&&(d.add(e),e+=!0===t?" \u2705":"",a.L.debug(e,{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const u=new Set,p=()=>{r('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},g=e=>{"string"==typeof e&&""!==e||r("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},f=(e,t=8)=>{var n;t>7&&(n=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===u.has(n)&&(u.add(n),a.L.debug(n,{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"})))}},46872:(e,t,n)=>{n.d(t,{a:()=>c});var a=n(23606),i=n(97788);const r={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri"},o={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},l=e=>Object.keys(e).reduce(((t,n)=>(t[`kol-${n}`]=e[n],t)),{}),s=new Set([e=>e("en",l(o)),e=>e("de",l(r))]),c=(e,t)=>{const n=(0,a.g)();if(void 0===n)return(0,i.d)("[I18n] I18nService not available! Please call the global register function."),e;let r=n.translate(e,t);return r===e&&((0,i.d)("[I18n] Locales not initialized! Initialize default locales automatically."),s.forEach((e=>e(((e,t)=>(n.addResourceBundle(e,t),e))))),r=n.translate(e,t)),r}},73031:(e,t,n)=>{n.r(t),n.d(t,{kol_nav:()=>d});var a=n(78689),i=n(97788),r=n(53145),o=n(14176),l=n(46872);const s=[],c=e=>{const t=s.indexOf(e);t>=0&&s.splice(t,1)},d=class{constructor(e){(0,a.r)(this,e),this.onClick=e=>{e._active=!1===e._active,this.state=Object.assign({},this.state)},this.hasActiveChild=e=>!!(Array.isArray(e._children)&&e._children.length>0)&&e._children.some(this.hasActiveChild),this.linkList=e=>(0,a.h)("ul",{class:{flex:0===e.deep&&"horizontal"===this.state._orientation},part:`nav ${this.state._orientation}`},e.links.map(((t,n)=>(0,a.h)("li",{key:n,part:`li ${0===e.deep?this.state._orientation:"vertical"}${t._active?" selected":""}${n<e.links.length-1?"":" last"}`},Array.isArray(t._children)&&t._children.length>0?(0,a.h)("div",{class:"h-full"},(0,a.h)("div",{class:{"h-full":!0}},(0,a.h)("kol-link-wc",{class:"block w-full h-full",exportparts:"icon,link,span"+(!0===t._active?",selected":""),_ariaLabel:!0===this.state._compact||!0===t._iconOnly?t._label:void 0,_ariaExpanded:!0===t._active,_disabled:t._disabled,_href:"javascript:void(0)",_icon:!0===this.state._collapsible?!0===t._active?"codicon codicon-remove":"codicon codicon-add":"string"==typeof t._icon?t._icon:"codicon codicon-symbol-event",_iconOnly:!0===this.state._compact||!0===t._iconOnly,_label:t._label,onClick:()=>this.onClick(t)})),!0===t._active&&(0,a.h)("div",{class:{expanded:!0,active:!0===t._active,"active-child":this.hasActiveChild(t),"absolute ":0===e.deep&&"horizontal"===this.state._orientation}},(0,a.h)(this.linkList,{links:t._children,deep:e.deep+1}))):(0,a.h)("div",{class:{"h-full":!0,"text-center":!0===this.state._compact||!0===t._iconOnly}},(0,a.h)("kol-link-wc",{class:{"block w-full h-full":!0,active:!0===t._active},exportparts:"icon,link,span"+(!0===t._active?",selected":""),_ariaCurrent:!0===t._active&&this.state._ariaCurrentValue,_ariaLabel:!0===this.state._compact||!0===t._iconOnly?t._label:void 0,_href:t._href,_icon:"string"==typeof t._icon?t._icon:"codicon codicon-symbol-event","_icon-only":!0===this.state._compact||!0===t._iconOnly,_label:t._label,_on:t._on,_selector:t._selector,_tooltipAlign:t._tooltipAlign,_target:t._target})))))),this._ariaCurrentValue=!1,this._ariaLabel=void 0,this._collapsible=!1,this._compact=!1,this._hasCompactButton=!1,this._orientation="vertical",this._links=void 0,this._variant="primary",this.state={_ariaCurrentValue:!1,_ariaLabel:"\u2026",_collapsible:!0,_hasCompactButton:!1,_links:[],_orientation:"vertical",_variant:"primary"}}render(){let e=this.state._hasCompactButton;return"horizontal"===this.state._orientation&&!0===this.state._hasCompactButton&&(e=!1,(0,i.d)("[KolNav] Wenn eine horizontale Navigation verwendet wird, kann die Option _hasCompactButton nicht aktiviert werden.")),(0,a.h)(a.H,null,(0,a.h)("div",{class:{[this.state._orientation]:!0,"inline-block":!0===this.state._compact,[this.state._variant]:!0}},(0,a.h)("nav",{"aria-label":this.state._ariaLabel,id:"nav",part:"nav"},(0,a.h)(this.linkList,{links:this.state._links,deep:0})),e&&(0,a.h)("div",{class:"mt-2 w-full text-center"},(0,a.h)("kol-button",{exportparts:"button,ghost",_ariaControls:"nav",_ariaExpanded:!0===this.state._compact,_ariaLabel:(0,l.a)(this.state._compact?"kol-nav-maximize":"kol-nav-minimize"),_icon:this.state._compact?"codicon codicon-chevron-right":"codicon codicon-chevron-left",_iconOnly:!0,_label:(0,l.a)(this.state._compact?"kol-nav-maximize":"kol-nav-minimize"),_on:{onClick:()=>{this.state=Object.assign(Object.assign({},this.state),{_compact:!1===this.state._compact})}},_tooltipAlign:"right",_variant:"ghost"}))))}validateAriaCurrentValue(e){(0,r.a)(this,"_ariaCurrentValue",(e=>!0===e||"date"===e||"location"===e||"page"===e||"step"===e||"time"===e),new Set(["boolean","String {data, location, page, step, time}"]),e)}validateAriaLabel(e){(0,r.w)(this,"_ariaLabel",e,{hooks:{afterPatch:()=>{s.includes(this.state._ariaLabel)&&(0,i.d)(`[KolNav] Das Aria-Label "${this.state._ariaLabel}" wurde f\xfcr die Rolle Navigation mehrfach verwendet!`),s.push(this.state._ariaLabel)},beforePatch:()=>{c(this.state._ariaLabel)}},required:!0}),(0,i.b)(e)}validateCollapsible(e){(0,r.b)(this,"_collapsible",e)}validateCompact(e){(0,r.b)(this,"_compact",e)}validateHasCompactButton(e){(0,r.b)(this,"_hasCompactButton",e)}validateLinks(e){(0,o.w)("KolNav",this,e),(0,i.d)("[KolNav] Die Navigationsstruktur wird noch nicht rekursiv validiert.")}validateOrientation(e){(0,r.a)(this,"_orientation",(e=>"horizontal"===e||"vertical"===e),new Set(["Orientation {horizontal, vertical}"]),e,{defaultValue:"vertical"})}validateVariant(e){(0,r.a)(this,"_variant",(e=>"primary"===e||"secondary"===e),new Set(["KoliBriNavVariant {primary, secondary}"]),e,{defaultValue:"primary"})}componentWillLoad(){this.validateAriaCurrentValue(this._ariaCurrentValue),this.validateAriaLabel(this._ariaLabel),this.validateCollapsible(this._collapsible),this.validateCompact(this._compact),this.validateHasCompactButton(this._hasCompactButton),this.validateLinks(this._links),this.validateOrientation(this._orientation),this.validateVariant(this._variant)}disconnectedCallback(){c(this.state._ariaLabel)}static get watchers(){return{_ariaCurrentValue:["validateAriaCurrentValue"],_ariaLabel:["validateAriaLabel"],_collapsible:["validateCollapsible"],_compact:["validateCompact"],_hasCompactButton:["validateHasCompactButton"],_links:["validateLinks"],_orientation:["validateOrientation"],_variant:["validateVariant"]}}};d.style={default:":host{--a11y-min-size:44px}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*[role='button'],button:not([role='link']),input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],option,select,textarea{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{align-items:baseline;display:flex;justify-items:center}kol-span-wc kol-icon{display:inline-flex}a,button,input,option,select,textarea{appearance:none;cursor:pointer;font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host>div{display:inline-block}"}},53145:(e,t,n)=>{n.d(t,{K:()=>ne,a:()=>M,b:()=>H,c:()=>x,d:()=>j,e:()=>D,f:()=>z,g:()=>O,h:()=>W,i:()=>ee,j:()=>I,k:()=>F,l:()=>te,m:()=>q,n:()=>G,o:()=>C,p:()=>K,q:()=>J,r:()=>c,s:()=>E,t:()=>Q,u:()=>V,w:()=>B});var a=n(97788),i=n(23788),r=n(15028);const o=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;o(n,t.querySelectorAll(e));const a=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<a.length;t++){const i=a[t].shadowRoot;o(n,l(e,"object"==typeof i&&null!==i?i:a[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const a=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<a.length;t++){const i=a[t].shadowRoot;if(n=s(e,"object"==typeof i&&null!==i?i:a[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=f,d=f,h=function(e){var t=m(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},u=function(e){var t=m(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},p=function(e){3==(t=m(e)).length&&t.push(255);var t,n=255==t[3],a=b(t[0]),i=b(t[1]),r=b(t[2]),o=function(e,t,n,a){var i=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=i.indexOf(e)&&-1!=i.indexOf(t)&&-1!=i.indexOf(n)&&-1!=i.indexOf(a)}(a,i,r,t=b(Math.round(t[3])));return n?o?"#"+a.charAt(0)+i.charAt(0)+r.charAt(0):"#"+a+i+r:o?"#"+a.charAt(0)+i.charAt(0)+r.charAt(0)+t.charAt(0):"#"+a+i+r+t},g=function(e){var t=m(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function f(e){var t=m(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function m(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var a=v(t[0]),i=v(t[1]),r=v(t[2]),o=3==n?255:v(t[3]);if(isNaN(a)||isNaN(i)||isNaN(r)||isNaN(o))return;return[a,i,r,o]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var a=v(t.slice(0,2)),i=v(t.slice(2,4)),r=v(t.slice(4,6)),o=6==n?255:v(t.slice(6,8));if(isNaN(a)||isNaN(i)||isNaN(r)||isNaN(o))return;return[a,i,r,o]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=y(t[0],!0),a=y(t[1],!0),i=y(t[2],!0);if(-1!=n&&-1!=a&&-1!=i)return[n,a,i,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=y(t[0],!0),a=y(t[1],!0),i=y(t[2],!0),r=y(255*t[3]);if(-1!=n&&-1!=a&&-1!=i&&-1!=r)return[n,a,i,r]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=y(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=y(null!=e.g?e.g:null!=e.green?e.green:0,!0),a=y(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),i=y(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=a&&-1!=i)return[t,n,a,i]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=y(e[0],!0),n=y(e[1],!0),a=y(e[2],!0),i=y(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=a&&-1!=i)return[t,n,a,i]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function b(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function v(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function y(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=d,c.obj=h,c.css=u,c.hex=p,c.num=g;var _=1/12.92;function k(e){return Math.pow((e+.055)/1.055,2.4)}function w(e){var t=e[0]/255,n=e[1]/255,a=e[2]/255;return.2126*(t<=.03928?t*_:k(t))+.7152*(n<=.03928?n*_:k(n))+.0722*(a<=.03928?a*_:k(a))}function S(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function L(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(w(e),w(t))}function x(e,t){return L(S(e),S(t))}function N(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const A=/\[object Object\]/,C=(e,t)=>{"string"==typeof e&&A.test(e)||t()},O=(e,t)=>{"string"==typeof e&&""===e||t()},z=(e,t)=>{(0,i.b)()&&(i.L.debug([e,t]),i.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},E=(e,t,n,a={})=>{var i,r;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==n&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof a.afterPatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("afterPatch",a.afterPatch)),"function"==typeof a.beforePatch&&(null===(r=e.nextHooks.get(t))||void 0===r||r.set("beforePatch",a.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,a;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var a;const i=t.get("beforePatch");"function"==typeof i&&i(null===(a=e.nextState)||void 0===a?void 0:a.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(a=e.nextHooks)||void 0===a||a.forEach(((t,n)=>{const a=t.get("afterPatch");"function"==typeof a&&a(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e))};function M(e,t,n,i,r,o={}){n(r)?E(e,t,r,o.hooks):null!=r||o.required?(o.required||i.add(null),((e,t,n,i)=>{(0,a.d)(`[${e.constructor.name}] Der Property-Wert (${n}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(i).join(", ")}`)})(e,t,r,i)):E(e,t,o.defaultValue,o.hooks)}const H=(e,t,n,a)=>{M(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,a)},B=(e,t,n,a={})=>{const i="number"==typeof a.minLength?null==a?void 0:a.minLength:0;M(e,t,(e=>"string"==typeof e&&e.length>=i&&(void 0===(null==a?void 0:a.maxLength)||e.length<=a.maxLength)),new Set(["String"]),n,a)},D=(e,t,n,a)=>{M(e,t,(e=>"number"==typeof e&&(void 0===(null==a?void 0:a.min)||"number"==typeof(null==a?void 0:a.min)&&e>=a.min)&&(void 0===(null==a?void 0:a.max)||"number"==typeof(null==a?void 0:a.max)&&e<=a.max)),new Set(["Number"]),n,a)},j=(e,t,n,a,r=(e=>e==e),o={})=>{O(a,(()=>{C(a,(()=>{void 0===a&&(a=[]);try{try{a=K(a)}catch(e){}if(Array.isArray(a)){const l=a.find((e=>!n(e)));void 0===l&&r(a)?E(e,t,a,o.hooks):C(l,(()=>{throw i.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else C(a,(()=>{throw i.L.debug(a),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){i.L.debug(e)}}))}))},P=/^(true|false)$/,T=/^-?(0|[1-9]\d*)$/,$=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,q=e=>{const t=typeof e,n=`${e}`;if("string"==typeof e)if(P.test(e))e="true"===e;else if(T.test(e))e=parseInt(e);else if($.test(e))e=parseFloat(e);else if(R.test(e))try{e=K(e)}catch(e){}return t!==typeof e&&(0,a.d)(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},V=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw i.L.warn(["stringifyJson",e]),i.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},R=/^[{[]/,K=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(R.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){i.L.warn(["parseJson",e]),i.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},W=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,I=e=>"string"==typeof e?e:W(e),F=(e,t)=>s(e,t||(0,i.g)()),J=(e,t)=>l(e,t||(0,i.g)());let U=null;const Z=()=>(U=U||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,i.g)().body,level:"Fail",score:1},U),Y=/(\d+, ){3}0\)/,G=(e,t=Z())=>{const n=getComputedStyle(e),a=Y.test(n.backgroundColor)?t.backgroundColor:c.hex(n.backgroundColor),r=Y.test(n.color)?t.color:c.hex(n.color),o=x(a,r),l={backgroundColor:a,color:r,domNode:e,level:N(o),score:o};return o<4.5&&i.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},Q=(e,t=Z())=>{t.domNode instanceof HTMLElement&&(t=G(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let a=0;a<n.length&&(t.domNode=n[a],null===(t=Q(e,t)).domNode);a++);return t}return G(n,t)},X=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,i.a)().pageYOffset-50}),e.focus()):(0,a.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ee=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,a.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const n=`${t}`;t=e,e=n}if("string"==typeof e){const n=F(e,t);n instanceof HTMLElement?X(n):(0,a.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,a.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class te{static queryHtmlElementColors(e,t,n=!1,a=!0){let r=null;if(!0===n||!1===te.executionLock)if(!1===n&&(te.cache.clear(),te.cache.set(t.domNode,t),te.executionLock=!0,!0===a&&i.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)r=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const a=t.domNode;if("function"==typeof a.assignedNodes){const e=a.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const i=t.domNode.children;for(let e=0;e<i.length;e++)n.add(i[e]);const o=Array.from(n);for(let l=0;l<o.length;l++){let n=te.cache.get(o[l]);void 0===n&&(n=G(o[l],t)),te.cache.set(o[l],n);const a=te.queryHtmlElementColors(e,n,!0,!1);if(null!==a){r=a;break}}}else i.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===a&&i.L.debug(`[KoliBriUtils] Color contrast analysis finished (${te.cache.size} DOM elements are analysed).`),te.executionLock=!1,te.cache.clear()),r}}te.executionLock=!1,te.cache=new Map;class ne{}ne.patchTheme=r.p,ne.patchThemeTag=r.a,ne.querySelector=F,ne.querySelectorAll=J,ne.scrollByHTMLElement=X,ne.scrollBySelector=ee,ne.stringifyJson=V},14176:(e,t,n)=>{n.d(t,{w:()=>r});var a=n(97788),i=n(53145);const r=(e,t,n)=>{(0,i.d)(t,"_links",(e=>"object"==typeof e&&"string"==typeof e._label),n),(0,a.u)(e,t.state._links.length)}}}]);