/*! For license information please see 7081.0cc2f601.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[7081],{76649:(e,t,r)=>{r.d(t,{a:()=>a,b:()=>b,c:()=>p,d:()=>c,e:()=>l,f:()=>g,g:()=>m,h:()=>d,u:()=>f});var n=r(1694);const o=new Set,a=e=>{!1===o.has(e)&&(o.add(e),n.L.debug(e,{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},i=new Set,l=e=>{!1===i.has(e)&&(i.add(e),n.L.warn(e,{classifier:"\ud83d\udd25 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},s=new Set,c=e=>{!1===s.has(e)&&(s.add(e),n.L.debug(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},d=e=>{!1===s.has(e)&&(s.add(e),n.L.warn(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},u=new Set,g=(e,t=!1)=>{!1===u.has(e)&&(u.add(e),e+=!0===t?" \u2705":"",n.L.debug(e,{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const h=new Set,f=e=>{!1===h.has(e)&&(h.add(e),n.L.debug(e,{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},m=()=>{a('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},b=e=>{"string"==typeof e&&""!==e||a("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},p=(e,t=8)=>{t>7&&f(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},79836:(e,t,r)=>{r.d(t,{a:()=>c});var n=r(66458),o=r(76649);const a={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri"},i={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},l=e=>Object.keys(e).reduce(((t,r)=>(t[`kol-${r}`]=e[r],t)),{}),s=new Set([e=>e("en",l(i)),e=>e("de",l(a))]),c=(e,t)=>{const r=(0,n.g)();if(void 0===r)return(0,o.d)("[I18n] I18nService not available! Please call the global register function."),e;let a=r.translate(e,t);return a===e&&((0,o.d)("[I18n] Locales not initialized! Initialize default locales automatically."),s.forEach((e=>e(((e,t)=>(r.addResourceBundle(e,t),e))))),a=r.translate(e,t)),a}},67081:(e,t,r)=>{r.r(t),r.d(t,{kol_symbol:()=>i});var n=r(73621),o=r(93262),a=r(79836);const i=class{constructor(e){(0,n.r)(this,e),this._ariaLabel=void 0,this._symbol=void 0,this.state={_ariaLabel:(0,a.a)("kol-warning"),_symbol:"\u2026"}}render(){return(0,n.h)(n.H,null,(0,n.h)("span",{"aria-label":this.state._ariaLabel,role:"term"},this.state._symbol))}validateAriaLabel(e){(0,o.w)(this,"_ariaLabel",e,{required:!0})}validateSymbol(e){(0,o.w)(this,"_symbol",e,{required:!0})}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateSymbol(this._symbol)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_symbol:["validateSymbol"]}}}},93262:(e,t,r)=>{r.d(t,{K:()=>ie,a:()=>_,b:()=>j,c:()=>M,d:()=>B,e:()=>$,f:()=>T,g:()=>D,h:()=>Z,i:()=>oe,j:()=>V,k:()=>Y,l:()=>ae,m:()=>F,n:()=>te,o:()=>H,p:()=>U,q:()=>G,r:()=>c,s:()=>C,t:()=>re,u:()=>J,w:()=>q});var n=r(76649),o=r(1694),a=r(81931);const i=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;i(r,t.querySelectorAll(e));const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const o=n[t].shadowRoot;i(r,l(e,"object"==typeof o&&null!==o?o:n[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const o=n[t].shadowRoot;if(r=s(e,"object"==typeof o&&null!==o?o:n[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=m,d=m,u=function(e){var t=b(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},g=function(e){var t=b(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},h=function(e){3==(t=b(e)).length&&t.push(255);var t,r=255==t[3],n=p(t[0]),o=p(t[1]),a=p(t[2]),i=function(e,t,r,n){var o=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=o.indexOf(e)&&-1!=o.indexOf(t)&&-1!=o.indexOf(r)&&-1!=o.indexOf(n)}(n,o,a,t=p(Math.round(t[3])));return r?i?"#"+n.charAt(0)+o.charAt(0)+a.charAt(0):"#"+n+o+a:i?"#"+n.charAt(0)+o.charAt(0)+a.charAt(0)+t.charAt(0):"#"+n+o+a+t},f=function(e){var t=b(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function m(e){var t=b(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function b(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var n=y(t[0]),o=y(t[1]),a=y(t[2]),i=3==r?255:y(t[3]);if(isNaN(n)||isNaN(o)||isNaN(a)||isNaN(i))return;return[n,o,a,i]}}(e)||function(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var n=y(t.slice(0,2)),o=y(t.slice(2,4)),a=y(t.slice(4,6)),i=6==r?255:y(t.slice(6,8));if(isNaN(n)||isNaN(o)||isNaN(a)||isNaN(i))return;return[n,o,a,i]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=v(t[0],!0),n=v(t[1],!0),o=v(t[2],!0);if(-1!=r&&-1!=n&&-1!=o)return[r,n,o,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=v(t[0],!0),n=v(t[1],!0),o=v(t[2],!0),a=v(255*t[3]);if(-1!=r&&-1!=n&&-1!=o&&-1!=a)return[r,n,o,a]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=v(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=v(null!=e.g?e.g:null!=e.green?e.green:0,!0),n=v(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),o=v(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=n&&-1!=o)return[t,r,n,o]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=v(e[0],!0),r=v(e[1],!0),n=v(e[2],!0),o=v(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=n&&-1!=o)return[t,r,n,o]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function p(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function y(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function v(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=d,c.obj=u,c.css=g,c.hex=h,c.num=f;var w=.2126,S=.7152,k=.0722,L=1/12.92;function N(e){return Math.pow((e+.055)/1.055,2.4)}function x(e){var t=e[0]/255,r=e[1]/255,n=e[2]/255,o=t<=.03928?t*L:N(t),a=r<=.03928?r*L:N(r),i=n<=.03928?n*L:N(n);return o*w+a*S+i*k}function A(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function E(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(x(e),x(t))}function M(e,t){return E(A(e),A(t))}function z(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const O=/\[object Object\]/,H=(e,t)=>{"string"==typeof e&&O.test(e)||t()},D=(e,t)=>{"string"==typeof e&&""===e||t()},T=(e,t)=>{(0,o.b)()&&(o.L.debug([e,t]),o.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},C=(e,t,r,n={})=>{var o,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==r&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof n.afterPatch&&(null===(o=e.nextHooks.get(t))||void 0===o||o.set("afterPatch",n.afterPatch)),"function"==typeof n.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",n.beforePatch)),e.nextState.set(t,r),(e=>{var t,r,n;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var n;const o=t.get("beforePatch");"function"==typeof o&&o(null===(n=e.nextState)||void 0===n?void 0:n.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(n=e.nextHooks)||void 0===n||n.forEach(((t,r)=>{const n=t.get("afterPatch");"function"==typeof n&&n(e.state[r],e.state,e,r)}))),delete e.nextHooks})(e))},P=(e,t,r,o)=>{(0,n.d)(`[${e.constructor.name}] Der Property-Wert (${r}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)};function _(e,t,r,n,o,a={}){r(o)?C(e,t,o,a.hooks):null!=o||a.required?(a.required||n.add(null),P(e,t,o,n)):C(e,t,a.defaultValue,a.hooks)}const j=(e,t,r,n)=>{_(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,n)},q=(e,t,r,n={})=>{const o="number"==typeof n.minLength?null==n?void 0:n.minLength:0;_(e,t,(e=>"string"==typeof e&&e.length>=o&&(void 0===(null==n?void 0:n.maxLength)||e.length<=n.maxLength)),new Set(["String"]),r,n)},$=(e,t,r,n)=>{_(e,t,(e=>"number"==typeof e&&(void 0===(null==n?void 0:n.min)||"number"==typeof(null==n?void 0:n.min)&&e>=n.min)&&(void 0===(null==n?void 0:n.max)||"number"==typeof(null==n?void 0:n.max)&&e<=n.max)),new Set(["Number"]),r,n)},B=(e,t,r,n,a=(e=>e==e),i={})=>{D(n,(()=>{H(n,(()=>{void 0===n&&(n=[]);try{try{n=U(n)}catch(e){}if(Array.isArray(n)){const l=n.find((e=>!r(e)));void 0===l&&a(n)?C(e,t,n,i.hooks):H(l,(()=>{throw o.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else H(n,(()=>{throw o.L.debug(n),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){o.L.debug(e)}}))}))},R=/^(true|false)$/,I=/^-?(0|[1-9]\d*)$/,W=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,F=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if(R.test(e))e="true"===e;else if(I.test(e))e=parseInt(e);else if(W.test(e))e=parseFloat(e);else if(K.test(e))try{e=U(e)}catch(e){}return t!==typeof e&&(0,n.d)(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},J=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(k){throw o.L.warn(["stringifyJson",e]),o.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},K=/^[{[]/,U=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(k){if(K.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(k){o.L.warn(["parseJson",e]),o.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},Z=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,V=e=>"string"==typeof e?e:Z(e),Y=(e,t)=>s(e,t||(0,o.g)()),G=(e,t)=>l(e,t||(0,o.g)());let Q=null;const X=()=>(Q=Q||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,o.g)().body,level:"Fail",score:1},Q),ee=/(\d+, ){3}0\)/,te=(e,t=X())=>{const r=getComputedStyle(e),n=ee.test(r.backgroundColor)?t.backgroundColor:c.hex(r.backgroundColor),a=ee.test(r.color)?t.color:c.hex(r.color),i=M(n,a),l={backgroundColor:n,color:a,domNode:e,level:z(i),score:i};return i<4.5&&o.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},re=(e,t=X())=>{t.domNode instanceof HTMLElement&&(t=te(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let n=0;n<r.length&&(t.domNode=r[n],null===(t=re(e,t)).domNode);n++);return t}return te(r,t)},ne=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,o.a)().pageYOffset-50}),e.focus()):(0,n.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},oe=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,n.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const r=`${t}`;t=e,e=r}if("string"==typeof e){const r=Y(e,t);r instanceof HTMLElement?ne(r):(0,n.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,n.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class ae{static queryHtmlElementColors(e,t,r=!1,n=!0){let a=null;if(!0===r||!1===ae.executionLock)if(!1===r&&(ae.cache.clear(),ae.cache.set(t.domNode,t),ae.executionLock=!0,!0===n&&o.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)a=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const n=t.domNode;if("function"==typeof n.assignedNodes){const e=n.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const o=t.domNode.children;for(let e=0;e<o.length;e++)r.add(o[e]);const i=Array.from(r);for(let l=0;l<i.length;l++){let r=ae.cache.get(i[l]);void 0===r&&(r=te(i[l],t)),ae.cache.set(i[l],r);const n=ae.queryHtmlElementColors(e,r,!0,!1);if(null!==n){a=n;break}}}else o.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===n&&o.L.debug(`[KoliBriUtils] Color contrast analysis finished (${ae.cache.size} DOM elements are analysed).`),ae.executionLock=!1,ae.cache.clear()),a}}ae.executionLock=!1,ae.cache=new Map;class ie{}ie.patchTheme=a.p,ie.patchThemeTag=a.a,ie.querySelector=Y,ie.querySelectorAll=G,ie.scrollByHTMLElement=ne,ie.scrollBySelector=oe,ie.stringifyJson=J}}]);