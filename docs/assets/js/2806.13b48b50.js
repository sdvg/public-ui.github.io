/*! For license information please see 2806.13b48b50.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[2806],{6620:(e,t,n)=>{n.d(t,{a:()=>r,b:()=>b,c:()=>m,d:()=>c,e:()=>l,f:()=>u,g:()=>p,h:()=>d,u:()=>f});var a=n(94880);const i=new Set,r=e=>{!1===i.has(e)&&(i.add(e),a.L.debug(e,{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},o=new Set,l=e=>{!1===o.has(e)&&(o.add(e),a.L.warn(e,{classifier:"\ud83d\udd25 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},s=new Set,c=e=>{!1===s.has(e)&&(s.add(e),a.L.debug(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},d=e=>{!1===s.has(e)&&(s.add(e),a.L.warn(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},h=new Set,u=(e,t=!1)=>{!1===h.has(e)&&(h.add(e),e+=!0===t?" \u2705":"",a.L.debug(e,{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const g=new Set,f=e=>{!1===g.has(e)&&(g.add(e),a.L.debug(e,{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},p=()=>{r('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},b=e=>{"string"==typeof e&&""!==e||r("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},m=(e,t=8)=>{t>7&&f(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},74716:(e,t,n)=>{n.d(t,{a:()=>c});var a=n(67204),i=n(6620);const r={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri"},o={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},l=e=>Object.keys(e).reduce(((t,n)=>(t[`kol-${n}`]=e[n],t)),{}),s=new Set([e=>e("en",l(o)),e=>e("de",l(r))]),c=(e,t)=>{const n=(0,a.g)();if(void 0===n)return(0,i.d)("[I18n] I18nService not available! Please call the global register function."),e;let r=n.translate(e,t);return r===e&&((0,i.d)("[I18n] Locales not initialized! Initialize default locales automatically."),s.forEach((e=>e(((e,t)=>(n.addResourceBundle(e,t),e))))),r=n.translate(e,t)),r}},12806:(e,t,n)=>{n.r(t),n.d(t,{kol_nav:()=>d});var a=n(98224),i=n(74716),r=n(6620),o=n(26798),l=n(23108);const s=[],c=e=>{const t=s.indexOf(e);t>=0&&s.splice(t,1)},d=class{constructor(e){(0,a.r)(this,e),this.onClick=e=>{e._active=!e._active,this.state=Object.assign({},this.state)},this.hasActiveChild=e=>!!(Array.isArray(e._children)&&e._children.length>0)&&e._children.some(this.hasActiveChild),this.linkList=e=>(0,a.h)("ul",{class:"list "+(0===e.deep&&"horizontal"===e.orientation?" horizontal":" vertical"),"data-deep":e.deep},e.links.map(((t,n)=>this.li(e.collapsible,e.compact,e.deep,n,t,e.orientation)))),this._ariaCurrentValue=!1,this._ariaLabel=void 0,this._collapsible=!0,this._compact=!1,this._hasCompactButton=!1,this._orientation="vertical",this._links=void 0,this._variant="primary",this.state={_ariaCurrentValue:!1,_ariaLabel:"\u2026",_collapsible:!0,_hasCompactButton:!1,_links:[],_orientation:"vertical",_variant:"primary"}}button(e,t,n,i,r){return(0,a.h)("kol-button-wc",{_disabled:t,_icon:n||"-",_iconOnly:e,_label:i,_on:r})}text(e,t,n){return(0,a.h)("kol-span-wc",{_icon:t||"-",_iconOnly:e,_label:n})}entry(e,t,n,i,r,o){return(0,a.h)("div",{class:{entry:!0,"has-children":n,selected:o,expanded:r,compact:t}},this.buttonOrLinkOrText(t,i,o),n?this.expandButton(e,i,o):"")}expandButton(e,t,n){return(0,a.h)("kol-button-wc",{class:"expand-button",_ariaExpanded:n,_disabled:!e,_icon:"codicon codicon-"+(n?"remove":"add"),_iconOnly:!0,_label:`Untermen\xfc zu ${t._label} ${n?"schlie\xdfen":"\xf6ffnen"}`,_on:{onClick:()=>this.onClick(t)}})}li(e,t,n,i,r,o){const l=Array.isArray(r._children)&&r._children.length>0,s=!!r._active,c=l&&!!r._active;return(0,a.h)("li",{class:{expanded:c,selected:s,"has-children":l},key:i},this.entry(e,t,l,r,c,s),l&&s?(0,a.h)(this.linkList,{collapsible:e,compact:t,deep:n+1,links:r._children||[],orientation:o}):"")}link(e,t,n,i,r){return(0,a.h)("kol-link-wc",{_ariaExpanded:e,_href:n,_icon:i||"-",_iconOnly:t,_label:r})}buttonOrLinkOrText(e,t,n){return t._on?this.button(e,!0===t._disabled,t._icon,t._label,t._on):t._href?this.link(n,e,t._href,t._icon,t._label):this.text(e,t._icon,t._label)}render(){let e=this.state._hasCompactButton;"horizontal"===this.state._orientation&&!0===this.state._hasCompactButton&&(e=!1,(0,r.h)("[KolNav] Wenn eine horizontale Navigation verwendet wird, kann die Option _hasCompactButton nicht aktiviert werden."));const t=!0===this.state._collapsible,n=!0===this.state._compact,o=this.state._orientation;return(0,a.h)(a.H,null,(0,a.h)("div",{class:{[o]:!0,[this.state._variant]:!0}},(0,a.h)("nav",{"aria-label":this.state._ariaLabel,id:"nav"},(0,a.h)(this.linkList,{collapsible:t,compact:n,deep:0,links:this.state._links,orientation:o})),e&&(0,a.h)("div",{class:"mt-2 w-full compact"},(0,a.h)("kol-button",{_ariaControls:"nav",_ariaExpanded:n,_icon:n?"codicon codicon-chevron-right":"codicon codicon-chevron-left",_iconOnly:!0,_label:(0,i.a)(n?"kol-nav-maximize":"kol-nav-minimize"),_on:{onClick:()=>{this.state=Object.assign(Object.assign({},this.state),{_compact:!1===this.state._compact})}},_tooltipAlign:"right",_variant:"ghost"}))))}validateAriaCurrentValue(e){(0,o.a)(this,"_ariaCurrentValue",(e=>!0===e||"date"===e||"location"===e||"page"===e||"step"===e||"time"===e),new Set(["boolean","String {data, location, page, step, time}"]),e)}validateAriaLabel(e){(0,o.w)(this,"_ariaLabel",e,{hooks:{afterPatch:()=>{s.includes(this.state._ariaLabel)&&(0,r.d)(`[KolNav] Das Aria-Label "${this.state._ariaLabel}" wurde f\xfcr die Rolle Navigation mehrfach verwendet!`),s.push(this.state._ariaLabel)},beforePatch:()=>{c(this.state._ariaLabel)}},required:!0}),(0,r.b)(e)}validateCollapsible(e){((e,t)=>{(0,o.b)(e,"_collapsible",t)})(this,e)}validateCompact(e){((e,t)=>{(0,o.b)(e,"_compact",t)})(this,e)}validateHasCompactButton(e){((e,t)=>{(0,o.b)(e,"_hasCompactButton",t)})(this,e)}validateLinks(e){(0,l.w)("KolNav",this,e),(0,r.d)("[KolNav] Die Navigationsstruktur wird noch nicht rekursiv validiert.")}validateOrientation(e){(0,o.a)(this,"_orientation",(e=>"horizontal"===e||"vertical"===e),new Set(["Orientation {horizontal, vertical}"]),e,{defaultValue:"vertical"})}validateVariant(e){(0,o.a)(this,"_variant",(e=>"primary"===e||"secondary"===e),new Set(["KoliBriNavVariant {primary, secondary}"]),e,{defaultValue:"primary"})}componentWillLoad(){this.validateAriaCurrentValue(this._ariaCurrentValue),this.validateAriaLabel(this._ariaLabel),this.validateCollapsible(this._collapsible),this.validateCompact(this._compact),this.validateHasCompactButton(this._hasCompactButton),this.validateLinks(this._links),this.validateOrientation(this._orientation),this.validateVariant(this._variant)}disconnectedCallback(){c(this.state._ariaLabel)}static get watchers(){return{_ariaCurrentValue:["validateAriaCurrentValue"],_ariaLabel:["validateAriaLabel"],_collapsible:["validateCollapsible"],_compact:["validateCompact"],_hasCompactButton:["validateHasCompactButton"],_links:["validateLinks"],_orientation:["validateOrientation"],_variant:["validateVariant"]}}};d.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host>div{display:grid;place-items:center}nav{width:100%}.list{display:flex;list-style:none;margin:0;padding:0}.list.vertical{flex-direction:column}.entry{display:flex}.entry kol-button-wc:first-child,.entry kol-link-wc,.entry kol-span-wc{flex-grow:1}.entry kol-span-wc{justify-items:start}"}},26798:(e,t,n)=>{n.d(t,{K:()=>oe,a:()=>T,b:()=>j,c:()=>C,d:()=>q,e:()=>$,f:()=>B,g:()=>M,h:()=>U,i:()=>ie,j:()=>Z,k:()=>Y,l:()=>re,m:()=>W,n:()=>te,o:()=>E,p:()=>J,q:()=>G,r:()=>c,s:()=>H,t:()=>ne,u:()=>I,w:()=>P});var a=n(6620),i=n(94880),r=n(64447);const o=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;o(n,t.querySelectorAll(e));const a=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<a.length;t++){const i=a[t].shadowRoot;o(n,l(e,"object"==typeof i&&null!==i?i:a[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const a=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<a.length;t++){const i=a[t].shadowRoot;if(n=s(e,"object"==typeof i&&null!==i?i:a[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=p,d=p,h=function(e){var t=b(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},u=function(e){var t=b(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},g=function(e){3==(t=b(e)).length&&t.push(255);var t,n=255==t[3],a=m(t[0]),i=m(t[1]),r=m(t[2]),o=function(e,t,n,a){var i=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=i.indexOf(e)&&-1!=i.indexOf(t)&&-1!=i.indexOf(n)&&-1!=i.indexOf(a)}(a,i,r,t=m(Math.round(t[3])));return n?o?"#"+a.charAt(0)+i.charAt(0)+r.charAt(0):"#"+a+i+r:o?"#"+a.charAt(0)+i.charAt(0)+r.charAt(0)+t.charAt(0):"#"+a+i+r+t},f=function(e){var t=b(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function p(e){var t=b(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function b(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var a=v(t[0]),i=v(t[1]),r=v(t[2]),o=3==n?255:v(t[3]);if(isNaN(a)||isNaN(i)||isNaN(r)||isNaN(o))return;return[a,i,r,o]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var a=v(t.slice(0,2)),i=v(t.slice(2,4)),r=v(t.slice(4,6)),o=6==n?255:v(t.slice(6,8));if(isNaN(a)||isNaN(i)||isNaN(r)||isNaN(o))return;return[a,i,r,o]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=y(t[0],!0),a=y(t[1],!0),i=y(t[2],!0);if(-1!=n&&-1!=a&&-1!=i)return[n,a,i,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=y(t[0],!0),a=y(t[1],!0),i=y(t[2],!0),r=y(255*t[3]);if(-1!=n&&-1!=a&&-1!=i&&-1!=r)return[n,a,i,r]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=y(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=y(null!=e.g?e.g:null!=e.green?e.green:0,!0),a=y(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),i=y(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=a&&-1!=i)return[t,n,a,i]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=y(e[0],!0),n=y(e[1],!0),a=y(e[2],!0),i=y(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=a&&-1!=i)return[t,n,a,i]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function m(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function v(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function y(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=d,c.obj=h,c.css=u,c.hex=g,c.num=f;var k=.2126,w=.7152,_=.0722,S=1/12.92;function L(e){return Math.pow((e+.055)/1.055,2.4)}function x(e){var t=e[0]/255,n=e[1]/255,a=e[2]/255,i=t<=.03928?t*S:L(t),r=n<=.03928?n*S:L(n),o=a<=.03928?a*S:L(a);return i*k+r*w+o*_}function N(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function A(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(x(e),x(t))}function C(e,t){return A(N(e),N(t))}function O(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const z=/\[object Object\]/,E=(e,t)=>{"string"==typeof e&&z.test(e)||t()},M=(e,t)=>{"string"==typeof e&&""===e||t()},B=(e,t)=>{(0,i.b)()&&(i.L.debug([e,t]),i.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},H=(e,t,n,a={})=>{var i,r;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==n&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof a.afterPatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("afterPatch",a.afterPatch)),"function"==typeof a.beforePatch&&(null===(r=e.nextHooks.get(t))||void 0===r||r.set("beforePatch",a.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,a;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var a;const i=t.get("beforePatch");"function"==typeof i&&i(null===(a=e.nextState)||void 0===a?void 0:a.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(a=e.nextHooks)||void 0===a||a.forEach(((t,n)=>{const a=t.get("afterPatch");"function"==typeof a&&a(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e))},D=(e,t,n,i)=>{(0,a.d)(`[${e.constructor.name}] Der Property-Wert (${n}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(i).join(", ")}`)};function T(e,t,n,a,i,r={}){n(i)?H(e,t,i,r.hooks):null!=i||r.required?(r.required||a.add(null),D(e,t,i,a)):H(e,t,r.defaultValue,r.hooks)}const j=(e,t,n,a)=>{T(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,a)},P=(e,t,n,a={})=>{const i="number"==typeof a.minLength?null==a?void 0:a.minLength:0;T(e,t,(e=>"string"==typeof e&&e.length>=i&&(void 0===(null==a?void 0:a.maxLength)||e.length<=a.maxLength)),new Set(["String"]),n,a)},$=(e,t,n,a)=>{T(e,t,(e=>"number"==typeof e&&(void 0===(null==a?void 0:a.min)||"number"==typeof(null==a?void 0:a.min)&&e>=a.min)&&(void 0===(null==a?void 0:a.max)||"number"==typeof(null==a?void 0:a.max)&&e<=a.max)),new Set(["Number"]),n,a)},q=(e,t,n,a,r=(e=>e==e),o={})=>{M(a,(()=>{E(a,(()=>{void 0===a&&(a=[]);try{try{a=J(a)}catch(e){}if(Array.isArray(a)){const l=a.find((e=>!n(e)));void 0===l&&r(a)?H(e,t,a,o.hooks):E(l,(()=>{throw i.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else E(a,(()=>{throw i.L.debug(a),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){i.L.debug(e)}}))}))},V=/^(true|false)$/,R=/^-?(0|[1-9]\d*)$/,K=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,W=e=>{const t=typeof e,n=`${e}`;if("string"==typeof e)if(V.test(e))e="true"===e;else if(R.test(e))e=parseInt(e);else if(K.test(e))e=parseFloat(e);else if(F.test(e))try{e=J(e)}catch(e){}return t!==typeof e&&(0,a.d)(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},I=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(_){throw i.L.warn(["stringifyJson",e]),i.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},F=/^[{[]/,J=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(_){if(F.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(_){i.L.warn(["parseJson",e]),i.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},U=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,Z=e=>"string"==typeof e?e:U(e),Y=(e,t)=>s(e,t||(0,i.g)()),G=(e,t)=>l(e,t||(0,i.g)());let Q=null;const X=()=>(Q=Q||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,i.g)().body,level:"Fail",score:1},Q),ee=/(\d+, ){3}0\)/,te=(e,t=X())=>{const n=getComputedStyle(e),a=ee.test(n.backgroundColor)?t.backgroundColor:c.hex(n.backgroundColor),r=ee.test(n.color)?t.color:c.hex(n.color),o=C(a,r),l={backgroundColor:a,color:r,domNode:e,level:O(o),score:o};return o<4.5&&i.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},ne=(e,t=X())=>{t.domNode instanceof HTMLElement&&(t=te(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let a=0;a<n.length&&(t.domNode=n[a],null===(t=ne(e,t)).domNode);a++);return t}return te(n,t)},ae=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,i.a)().pageYOffset-50}),e.focus()):(0,a.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ie=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,a.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const n=`${t}`;t=e,e=n}if("string"==typeof e){const n=Y(e,t);n instanceof HTMLElement?ae(n):(0,a.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,a.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class re{static queryHtmlElementColors(e,t,n=!1,a=!0){let r=null;if(!0===n||!1===re.executionLock)if(!1===n&&(re.cache.clear(),re.cache.set(t.domNode,t),re.executionLock=!0,!0===a&&i.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)r=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const a=t.domNode;if("function"==typeof a.assignedNodes){const e=a.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const i=t.domNode.children;for(let e=0;e<i.length;e++)n.add(i[e]);const o=Array.from(n);for(let l=0;l<o.length;l++){let n=re.cache.get(o[l]);void 0===n&&(n=te(o[l],t)),re.cache.set(o[l],n);const a=re.queryHtmlElementColors(e,n,!0,!1);if(null!==a){r=a;break}}}else i.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===a&&i.L.debug(`[KoliBriUtils] Color contrast analysis finished (${re.cache.size} DOM elements are analysed).`),re.executionLock=!1,re.cache.clear()),r}}re.executionLock=!1,re.cache=new Map;class oe{}oe.patchTheme=r.p,oe.patchThemeTag=r.a,oe.querySelector=Y,oe.querySelectorAll=G,oe.scrollByHTMLElement=ae,oe.scrollBySelector=ie,oe.stringifyJson=I},23108:(e,t,n)=>{n.d(t,{w:()=>r});var a=n(6620),i=n(26798);const r=(e,t,n)=>{(0,i.d)(t,"_links",(e=>"object"==typeof e&&"string"==typeof e._label),n),(0,a.c)(e,t.state._links.length)}}}]);