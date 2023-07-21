/*! For license information please see 8518.03c054ef.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[8518],{99339:(e,t,n)=>{n.d(t,{a:()=>o,b:()=>p,c:()=>m,d:()=>c,e:()=>s,f:()=>u,g:()=>d,h:()=>v,u:()=>f});var r=n(76700);const i=new Set,o=e=>{!1===i.has(e)&&(i.add(e),r.L.debug(e,{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},a=new Set,s=e=>{!1===a.has(e)&&(a.add(e),r.L.warn(e,{classifier:"\ud83d\udd25 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},l=new Set,c=e=>{!1===l.has(e)&&(l.add(e),r.L.debug(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},d=e=>{!1===l.has(e)&&(l.add(e),r.L.warn(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},h=new Set,u=(e,t=!1)=>{!1===h.has(e)&&(h.add(e),e+=!0===t?" \u2705":"",r.L.debug(e,{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const g=new Set,f=e=>{!1===g.has(e)&&(g.add(e),r.L.debug(e,{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},v=()=>{o('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},p=e=>{"string"==typeof e&&""!==e||o("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},m=(e,t=8)=>{t>7&&f(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},72442:(e,t,n)=>{n.d(t,{v:()=>i});var r=n(36053);const i=(e,t)=>{(0,r.b)(e,"_hasCloser",t)}},29816:(e,t,n)=>{n.d(t,{a:()=>c});var r=n(37194),i=n(99339);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri","avatar-alt":"Avatar-Bild von {{name}}"},a={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","avatar-alt":"Avatar picture of {{name}}"},s=e=>Object.keys(e).reduce(((t,n)=>(t[`kol-${n}`]=e[n],t)),{}),l=new Set([e=>e("en",s(a)),e=>e("de",s(o))]),c=(e,t)=>{const n=(0,r.g)();if(void 0===n)return(0,i.d)("[I18n] I18nService not available! Please call the global register function."),e;let o=n.translate(e,t);return o===e&&((0,i.d)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((e=>e(((e,t)=>(n.addResourceBundle(e,t),e))))),o=n.translate(e,t)),o}},8518:(e,t,n)=>{n.r(t),n.d(t,{kol_alert_wc:()=>h,kol_input:()=>u});var r=n(37812),i=n(29816),o=n(72442),a=n(76700),s=n(36053),l=n(16331);const c=e=>(0,r.h)("kol-icon",{class:"heading-icon",_ariaLabel:"string"==typeof e.heading&&e.heading.length>0?"":e.ariaLabel,_icon:e.icon}),d=e=>{switch(e.type){case"error":return(0,r.h)(c,{ariaLabel:(0,i.a)("kol-error"),icon:"codicon codicon-error",heading:e.heading});case"info":return(0,r.h)(c,{ariaLabel:(0,i.a)("kol-info"),icon:"codicon codicon-info",heading:e.heading});case"warning":return(0,r.h)(c,{ariaLabel:(0,i.a)("kol-warning"),icon:"codicon codicon-warning",heading:e.heading});case"success":return(0,r.h)(c,{ariaLabel:(0,i.a)("kol-success"),icon:"codicon codicon-pass",heading:e.heading});default:return(0,r.h)(c,{ariaLabel:(0,i.a)("kol-message"),icon:"codicon codicon-comment",heading:e.heading})}},h=class{constructor(e){(0,r.r)(this,e),this.close=()=>{var e;void 0!==(null===(e=this._on)||void 0===e?void 0:e.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClick:this.close},this.validateOnValue=e=>"object"==typeof e&&null!==e&&"function"==typeof e.onClose,this._alert=!1,this._hasCloser=!1,this._heading=void 0,this._level=1,this._on=void 0,this._type="default",this._variant="msg",this.state={_level:1}}render(){var e;if(this.state._alert){try{a.L.debug(["Navigator should vibrate ...",navigator.vibrate([100,75,100,75,100])])}catch(e){a.L.debug("Navigator does not support vibration.")}setTimeout((()=>{this.validateAlert(!1)}),1e4)}return(0,r.h)(r.H,{class:{[this.state._type]:!0,[this.state._variant]:!0},role:this.state._alert?"alert":void 0},(0,r.h)("div",{class:"heading"},(0,r.h)(d,{heading:this.state._heading,type:this.state._type}),(0,r.h)("div",null,"string"==typeof this.state._heading&&(null===(e=this.state._heading)||void 0===e?void 0:e.length)>0&&(0,r.h)("kol-heading-wc",{_label:this.state._heading,_level:this.state._level}),"msg"===this._variant&&(0,r.h)("div",{class:"content"},(0,r.h)("slot",null))),this.state._hasCloser&&(0,r.h)("kol-button-wc",{class:"close",_hideLabel:!0,_icon:{left:{icon:"codicon codicon-close"}},_label:(0,i.a)("kol-close"),_on:this.on,_tooltipAlign:"left"})),"card"===this._variant&&(0,r.h)("div",{class:"content"},(0,r.h)("slot",null)))}validateAlert(e){(0,s.b)(this,"_alert",e)}validateHasCloser(e){(0,o.v)(this,e)}validateHeading(e){(0,s.w)(this,"_heading",e)}validateLevel(e){(0,l.w)(this,e)}validateOn(e){this.validateOnValue(e)&&(0,s.s)(this,"_on",{onClose:e.onClose})}validateType(e){(0,s.a)(this,"_type",(e=>"string"==typeof e&&("default"===e||"error"===e||"info"===e||"success"===e||"warning"===e)),new Set("String {success, info, warning, error}"),e)}validateVariant(e){(0,s.a)(this,"_variant",(e=>"card"===e||"msg"===e),new Set("AlertVariant {card, msg}"),e)}componentWillLoad(){this.validateAlert(this._alert),this.validateHasCloser(this._hasCloser),this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateType(this._type),this.validateVariant(this._variant)}static get watchers(){return{_alert:["validateAlert"],_hasCloser:["validateHasCloser"],_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_type:["validateType"],_variant:["validateVariant"]}}},u=class{constructor(e){(0,r.r)(this,e),this._alert=!0,this._currentLength=void 0,this._disabled=!1,this._error="",this._hasCounter=void 0,this._hideLabel=!1,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._maxLength=void 0,this._readOnly=!1,this._renderNoLabel=!1,this._required=!1,this._slotName=void 0,this._smartButton=void 0,this._touched=!1}render(){var e,t,n,o;const a="string"==typeof this._error&&this._error.length>0&&!0===this._touched,s="string"==typeof this._hint&&this._hint.length>0,l=!0===this._hideLabel&&!0!==this._required,c=this._slotName?this._slotName:"input";return(0,r.h)(r.H,{class:{disabled:!0===this._disabled,error:!0===a,"read-only":!0===this._readOnly,required:!0===this._required,touched:!0===this._touched}},!1===this._renderNoLabel&&(0,r.h)("label",{id:`${this._id}-label`,hidden:l,htmlFor:this._id},(0,r.h)("span",null,(0,r.h)("slot",{name:"label"}))),s&&(0,r.h)("span",{class:"hint",id:`${this._id}-hint`},this._hint),(0,r.h)("div",{class:{input:!0,"icon-left":"object"==typeof(null===(e=this._icon)||void 0===e?void 0:e.left),"icon-right":"object"==typeof(null===(t=this._icon)||void 0===t?void 0:t.right)}},(null===(n=this._icon)||void 0===n?void 0:n.left)&&(0,r.h)("kol-icon",{_ariaLabel:"",_icon:this._icon.left.icon}),(0,r.h)("slot",{name:c}),"object"==typeof this._smartButton&&null!==this._smartButton&&(0,r.h)("kol-button-wc",{_customClass:this._smartButton._customClass,_disabled:this._smartButton._disabled,_icon:this._smartButton._icon,_hideLabel:!0,_id:this._smartButton._id,_label:this._smartButton._label,_on:this._smartButton._on,_tooltipAlign:this._smartButton._tooltipAlign,_variant:this._smartButton._variant}),(null===(o=this._icon)||void 0===o?void 0:o.right)&&(0,r.h)("kol-icon",{_ariaLabel:"",_icon:this._icon.right.icon})),a&&(0,r.h)("kol-alert",{class:"error",id:`${this._id}-error`,_alert:this._alert,_type:"error",_variant:"msg"},this._error),Array.isArray(this._list)&&this._list.length>0&&(0,r.h)("datalist",{id:`${this._id}-list`},this._list.map((e=>(0,r.h)("option",{value:e})))),this._hasCounter&&(0,r.h)("span",{"aria-atomic":"true","aria-live":"polite"},this._currentLength,this._maxLength&&(0,r.h)(r.F,null,(0,r.h)("span",{"aria-label":(0,i.a)("kol-of"),role:"img"},"/"),this._maxLength)," ",(0,r.h)("span",null,(0,i.a)("kol-characters"))))}}},36053:(e,t,n)=>{n.d(t,{K:()=>ae,a:()=>D,b:()=>j,c:()=>C,d:()=>$,e:()=>P,f:()=>z,g:()=>H,h:()=>U,i:()=>ie,j:()=>Z,k:()=>Y,l:()=>oe,m:()=>W,n:()=>te,o:()=>O,p:()=>K,q:()=>G,r:()=>c,s:()=>B,t:()=>ne,u:()=>J,w:()=>q});var r=n(99339),i=n(76700),o=n(5230);const a=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;a(n,t.querySelectorAll(e));const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const i=r[t].shadowRoot;a(n,s(e,"object"==typeof i&&null!==i?i:r[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const i=r[t].shadowRoot;if(n=l(e,"object"==typeof i&&null!==i?i:r[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=v,d=v,h=function(e){var t=p(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},u=function(e){var t=p(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},g=function(e){3==(t=p(e)).length&&t.push(255);var t,n=255==t[3],r=m(t[0]),i=m(t[1]),o=m(t[2]),a=function(e,t,n,r){var i=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=i.indexOf(e)&&-1!=i.indexOf(t)&&-1!=i.indexOf(n)&&-1!=i.indexOf(r)}(r,i,o,t=m(Math.round(t[3])));return n?a?"#"+r.charAt(0)+i.charAt(0)+o.charAt(0):"#"+r+i+o:a?"#"+r.charAt(0)+i.charAt(0)+o.charAt(0)+t.charAt(0):"#"+r+i+o+t},f=function(e){var t=p(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function v(e){var t=p(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function p(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var r=b(t[0]),i=b(t[1]),o=b(t[2]),a=3==n?255:b(t[3]);if(isNaN(r)||isNaN(i)||isNaN(o)||isNaN(a))return;return[r,i,o,a]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var r=b(t.slice(0,2)),i=b(t.slice(2,4)),o=b(t.slice(4,6)),a=6==n?255:b(t.slice(6,8));if(isNaN(r)||isNaN(i)||isNaN(o)||isNaN(a))return;return[r,i,o,a]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=_(t[0],!0),r=_(t[1],!0),i=_(t[2],!0);if(-1!=n&&-1!=r&&-1!=i)return[n,r,i,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=_(t[0],!0),r=_(t[1],!0),i=_(t[2],!0),o=_(255*t[3]);if(-1!=n&&-1!=r&&-1!=i&&-1!=o)return[n,r,i,o]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=_(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=_(null!=e.g?e.g:null!=e.green?e.green:0,!0),r=_(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),i=_(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=r&&-1!=i)return[t,n,r,i]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=_(e[0],!0),n=_(e[1],!0),r=_(e[2],!0),i=_(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=r&&-1!=i)return[t,n,r,i]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function m(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function b(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function _(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=d,c.obj=h,c.css=u,c.hex=g,c.num=f;var y=.2126,w=.7152,k=.0722,S=1/12.92;function L(e){return Math.pow((e+.055)/1.055,2.4)}function N(e){var t=e[0]/255,n=e[1]/255,r=e[2]/255,i=t<=.03928?t*S:L(t),o=n<=.03928?n*S:L(n),a=r<=.03928?r*S:L(r);return i*y+o*w+a*k}function A(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function x(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(N(e),N(t))}function C(e,t){return x(A(e),A(t))}function E(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const M=/\[object Object\]/,O=(e,t)=>{"string"==typeof e&&M.test(e)||t()},H=(e,t)=>{"string"==typeof e&&""===e||t()},z=(e,t)=>{(0,i.b)()&&(i.L.debug([e,t]),i.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},B=(e,t,n,r={})=>{var i,o;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==n&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof r.afterPatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("afterPatch",r.afterPatch)),"function"==typeof r.beforePatch&&(null===(o=e.nextHooks.get(t))||void 0===o||o.set("beforePatch",r.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,r;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var r;const i=t.get("beforePatch");"function"==typeof i&&i(null===(r=e.nextState)||void 0===r?void 0:r.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(r=e.nextHooks)||void 0===r||r.forEach(((t,n)=>{const r=t.get("afterPatch");"function"==typeof r&&r(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e))},T=(e,t,n,i)=>{(0,r.d)(`[${e.constructor.name}] Der Property-Wert (${n}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(i).join(", ")}`)};function D(e,t,n,r,i,o={}){n(i)?B(e,t,i,o.hooks):null!=i||o.required?(o.required||r.add(null),T(e,t,i,r)):B(e,t,o.defaultValue,o.hooks)}const j=(e,t,n,r)=>{D(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,r)},q=(e,t,n,r={})=>{const i="number"==typeof r.minLength?null==r?void 0:r.minLength:0;D(e,t,(e=>"string"==typeof e&&e.length>=i&&(void 0===(null==r?void 0:r.maxLength)||e.length<=r.maxLength)),new Set(["String"]),n,r)},P=(e,t,n,r)=>{D(e,t,(e=>"number"==typeof e&&(void 0===(null==r?void 0:r.min)||"number"==typeof(null==r?void 0:r.min)&&e>=r.min)&&(void 0===(null==r?void 0:r.max)||"number"==typeof(null==r?void 0:r.max)&&e<=r.max)),new Set(["Number"]),n,r)},$=(e,t,n,r,o=(e=>e==e),a={})=>{H(r,(()=>{O(r,(()=>{void 0===r&&(r=[]);try{try{r=K(r)}catch(e){}if(Array.isArray(r)){const s=r.find((e=>!n(e)));void 0===s&&o(r)?B(e,t,r,a.hooks):O(s,(()=>{throw i.L.debug(s),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else O(r,(()=>{throw i.L.debug(r),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){i.L.debug(e)}}))}))},R=/^(true|false)$/,F=/^-?(0|[1-9]\d*)$/,I=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,W=e=>{const t=typeof e,n=`${e}`;if("string"==typeof e)if(R.test(e))e="true"===e;else if(F.test(e))e=parseInt(e);else if(I.test(e))e=parseFloat(e);else if(V.test(e))try{e=K(e)}catch(e){}return t!==typeof e&&(0,r.d)(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},J=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(k){throw i.L.warn(["stringifyJson",e]),i.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},V=/^[{[]/,K=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(k){if(V.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(k){i.L.warn(["parseJson",e]),i.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},U=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,Z=e=>"string"==typeof e?e:U(e),Y=(e,t)=>l(e,t||(0,i.g)()),G=(e,t)=>s(e,t||(0,i.g)());let Q=null;const X=()=>(Q=Q||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,i.g)().body,level:"Fail",score:1},Q),ee=/(\d+, ){3}0\)/,te=(e,t=X())=>{const n=getComputedStyle(e),r=ee.test(n.backgroundColor)?t.backgroundColor:c.hex(n.backgroundColor),o=ee.test(n.color)?t.color:c.hex(n.color),a=C(r,o),s={backgroundColor:r,color:o,domNode:e,level:E(a),score:a};return a<4.5&&i.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},ne=(e,t=X())=>{t.domNode instanceof HTMLElement&&(t=te(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let r=0;r<n.length&&(t.domNode=n[r],null===(t=ne(e,t)).domNode);r++);return t}return te(n,t)},re=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,i.a)().pageYOffset-50}),e.focus()):(0,r.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ie=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,r.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const n=`${t}`;t=e,e=n}if("string"==typeof e){const n=Y(e,t);n instanceof HTMLElement?re(n):(0,r.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,r.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class oe{static queryHtmlElementColors(e,t,n=!1,r=!0){let o=null;if(!0===n||!1===oe.executionLock)if(!1===n&&(oe.cache.clear(),oe.cache.set(t.domNode,t),oe.executionLock=!0,!0===r&&i.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)o=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const r=t.domNode;if("function"==typeof r.assignedNodes){const e=r.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const i=t.domNode.children;for(let e=0;e<i.length;e++)n.add(i[e]);const a=Array.from(n);for(let s=0;s<a.length;s++){let n=oe.cache.get(a[s]);void 0===n&&(n=te(a[s],t)),oe.cache.set(a[s],n);const r=oe.queryHtmlElementColors(e,n,!0,!1);if(null!==r){o=r;break}}}else i.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===r&&i.L.debug(`[KoliBriUtils] Color contrast analysis finished (${oe.cache.size} DOM elements are analysed).`),oe.executionLock=!1,oe.cache.clear()),o}}oe.executionLock=!1,oe.cache=new Map;class ae{}ae.patchTheme=o.p,ae.patchThemeTag=o.a,ae.querySelector=Y,ae.querySelectorAll=G,ae.scrollByHTMLElement=re,ae.scrollBySelector=ie,ae.stringifyJson=J},16331:(e,t,n)=>{n.d(t,{w:()=>i});var r=n(36053);const i=(e,t)=>{(0,r.a)(e,"_level",(e=>"number"==typeof e&&0<=e&&e<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),t,{defaultValue:1,required:!0})}}}]);