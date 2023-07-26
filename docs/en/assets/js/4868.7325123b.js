/*! For license information please see 4868.7325123b.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4868],{38583:(e,t,n)=>{n.d(t,{a:()=>a,b:()=>p,c:()=>m,d:()=>c,e:()=>l,f:()=>h,g:()=>d,h:()=>b,u:()=>g});var r=n(67790);const o=new Set,a=e=>{!1===o.has(e)&&(o.add(e),r.L.debug(e,{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},i=new Set,l=e=>{!1===i.has(e)&&(i.add(e),r.L.warn(e,{classifier:"\ud83d\udd25 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},s=new Set,c=e=>{!1===s.has(e)&&(s.add(e),r.L.debug(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},d=e=>{!1===s.has(e)&&(s.add(e),r.L.warn(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},u=new Set,h=(e,t=!1)=>{!1===u.has(e)&&(u.add(e),e+=!0===t?" \u2705":"",r.L.debug(e,{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const f=new Set,g=e=>{!1===f.has(e)&&(f.add(e),r.L.debug(e,{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},b=()=>{a('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},p=e=>{"string"==typeof e&&""!==e||a("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},m=(e,t=8)=>{t>7&&g(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},84868:(e,t,n)=>{n.r(t),n.d(t,{kol_breadcrumb:()=>l});var r=n(85432),o=n(91875),a=n(38583),i=n(24841);const l=class{constructor(e){(0,r.r)(this,e),this.renderLink=(e,t)=>{const n=this.state._links.length-1,o=e._iconOnly||e._hideLabel;return(0,r.h)("li",{key:t},0!==t&&(0,r.h)("kol-icon",{_label:"",_icon:"codicon codicon-chevron-right"}),t===n?(0,r.h)("span",null,o?(0,r.h)("kol-icon",{_label:e._label,_icon:"string"==typeof e._icon?e._icon:"codicon codicon-symbol-event"}):(0,r.h)(r.F,null,e._label)):(0,r.h)("kol-link",Object.assign({},e)))},this._ariaLabel=void 0,this._label=void 0,this._links=void 0,this.state={_label:"\u2026",_links:[]}}render(){return(0,r.h)(r.H,null,(0,r.h)("nav",{"aria-label":this.state._label},(0,r.h)("ul",null,0===this.state._links.length&&(0,r.h)("li",null,(0,r.h)("kol-icon",{_label:"",_icon:"codicon codicon-home"}),"\u2026"),this.state._links.map(this.renderLink))))}validateAriaLabel(e){this.validateLabel(e)}validateLabel(e){(0,o.v)(this,e),(0,a.b)(e)}validateLinks(e){(0,i.w)("KolBreadcrumb",this,e)}componentWillLoad(){this.validateLabel(this._label||this._ariaLabel),this.validateLinks(this._links)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_label:["validateLabel"],_links:["validateLinks"]}}};l.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}li,ul{margin:0;padding:0;list-style:none;display:flex;gap:0.5em;flex-wrap:wrap;place-items:center}kol-icon::part(separator){font-weight:900;font-size:0.7em}kol-icon::part(separator):before{content:'\\f054';font-family:'Font Awesome 6 Free'}"}},91875:(e,t,n)=>{n.d(t,{a:()=>f,c:()=>s,h:()=>l,v:()=>u});var r=n(38583),o=n(9708);const a=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,i=/^\d+$/;function l(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(a))||void 0===t?void 0:t.length)||0}(e)>=t}function s(e){return i.test(e)}function c(e){var t;return{hooks:{afterPatch:(t,n,o,a)=>{var i,c;"function"==typeof(null===(i=e.hooks)||void 0===i?void 0:i.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(t,n,o,a)),"string"==typeof t&&!1===l(t,3)&&!1===s(t)&&(0,r.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,r.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}}}const d=new Set(["string"]),u=(e,t,n={})=>{(0,o.a)(e,"_label",(e=>"string"==typeof e),d,t,c(n))},h=new Set(["string","false"]),f=(e,t,n={})=>{""!==t&&"false"!==t||(t=!1),(0,o.a)(e,"_label",(e=>!1===e||"string"==typeof e),h,t,c(n))}},9708:(e,t,n)=>{n.d(t,{K:()=>ie,a:()=>C,b:()=>D,c:()=>M,d:()=>R,e:()=>q,f:()=>z,g:()=>P,h:()=>Z,i:()=>oe,j:()=>V,k:()=>Y,l:()=>ae,m:()=>F,n:()=>te,o:()=>H,p:()=>U,q:()=>G,r:()=>c,s:()=>T,t:()=>ne,u:()=>I,w:()=>$});var r=n(38583),o=n(67790),a=n(12618);const i=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;i(n,t.querySelectorAll(e));const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const o=r[t].shadowRoot;i(n,l(e,"object"==typeof o&&null!==o?o:r[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const o=r[t].shadowRoot;if(n=s(e,"object"==typeof o&&null!==o?o:r[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=b,d=b,u=function(e){var t=p(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},h=function(e){var t=p(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},f=function(e){3==(t=p(e)).length&&t.push(255);var t,n=255==t[3],r=m(t[0]),o=m(t[1]),a=m(t[2]),i=function(e,t,n,r){var o=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=o.indexOf(e)&&-1!=o.indexOf(t)&&-1!=o.indexOf(n)&&-1!=o.indexOf(r)}(r,o,a,t=m(Math.round(t[3])));return n?i?"#"+r.charAt(0)+o.charAt(0)+a.charAt(0):"#"+r+o+a:i?"#"+r.charAt(0)+o.charAt(0)+a.charAt(0)+t.charAt(0):"#"+r+o+a+t},g=function(e){var t=p(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function b(e){var t=p(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function p(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var r=y(t[0]),o=y(t[1]),a=y(t[2]),i=3==n?255:y(t[3]);if(isNaN(r)||isNaN(o)||isNaN(a)||isNaN(i))return;return[r,o,a,i]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var r=y(t.slice(0,2)),o=y(t.slice(2,4)),a=y(t.slice(4,6)),i=6==n?255:y(t.slice(6,8));if(isNaN(r)||isNaN(o)||isNaN(a)||isNaN(i))return;return[r,o,a,i]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=v(t[0],!0),r=v(t[1],!0),o=v(t[2],!0);if(-1!=n&&-1!=r&&-1!=o)return[n,r,o,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=v(t[0],!0),r=v(t[1],!0),o=v(t[2],!0),a=v(255*t[3]);if(-1!=n&&-1!=r&&-1!=o&&-1!=a)return[n,r,o,a]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=v(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=v(null!=e.g?e.g:null!=e.green?e.green:0,!0),r=v(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),o=v(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=r&&-1!=o)return[t,n,r,o]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=v(e[0],!0),n=v(e[1],!0),r=v(e[2],!0),o=v(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=r&&-1!=o)return[t,n,r,o]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function m(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function y(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function v(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=d,c.obj=u,c.css=h,c.hex=f,c.num=g;var w=.2126,k=.7152,S=.0722,L=1/12.92;function x(e){return Math.pow((e+.055)/1.055,2.4)}function N(e){var t=e[0]/255,n=e[1]/255,r=e[2]/255,o=t<=.03928?t*L:x(t),a=n<=.03928?n*L:x(n),i=r<=.03928?r*L:x(r);return o*w+a*k+i*S}function A(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function _(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(N(e),N(t))}function M(e,t){return _(A(e),A(t))}function E(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const O=/\[object Object\]/,H=(e,t)=>{"string"==typeof e&&O.test(e)||t()},P=(e,t)=>{"string"==typeof e&&""===e||t()},z=(e,t)=>{(0,o.b)()&&(o.L.debug([e,t]),o.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},T=(e,t,n,r={})=>{var o,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==n&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof r.afterPatch&&(null===(o=e.nextHooks.get(t))||void 0===o||o.set("afterPatch",r.afterPatch)),"function"==typeof r.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",r.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,r;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var r;const o=t.get("beforePatch");"function"==typeof o&&o(null===(r=e.nextState)||void 0===r?void 0:r.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(r=e.nextHooks)||void 0===r||r.forEach(((t,n)=>{const r=t.get("afterPatch");"function"==typeof r&&r(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e))},j=(e,t,n,o)=>{(0,r.d)(`[${e.constructor.name}] Der Property-Wert (${n}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)};function C(e,t,n,r,o,a={}){n(o)?T(e,t,o,a.hooks):null!=o||a.required?(a.required||r.add(null),j(e,t,o,r)):T(e,t,a.defaultValue,a.hooks)}const D=(e,t,n,r)=>{C(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,r)},$=(e,t,n,r={})=>{const o="number"==typeof r.minLength?null==r?void 0:r.minLength:0;C(e,t,(e=>"string"==typeof e&&e.length>=o&&(void 0===(null==r?void 0:r.maxLength)||e.length<=r.maxLength)),new Set(["String"]),n,r)},q=(e,t,n,r)=>{C(e,t,(e=>"number"==typeof e&&(void 0===(null==r?void 0:r.min)||"number"==typeof(null==r?void 0:r.min)&&e>=r.min)&&(void 0===(null==r?void 0:r.max)||"number"==typeof(null==r?void 0:r.max)&&e<=r.max)),new Set(["Number"]),n,r)},R=(e,t,n,r,a=(e=>e==e),i={})=>{P(r,(()=>{H(r,(()=>{void 0===r&&(r=[]);try{try{r=U(r)}catch(e){}if(Array.isArray(r)){const l=r.find((e=>!n(e)));void 0===l&&a(r)?T(e,t,r,i.hooks):H(l,(()=>{throw o.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else H(r,(()=>{throw o.L.debug(r),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){o.L.debug(e)}}))}))},B=/^(true|false)$/,J=/^-?(0|[1-9]\d*)$/,W=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,F=e=>{const t=typeof e,n=`${e}`;if("string"==typeof e)if(B.test(e))e="true"===e;else if(J.test(e))e=parseInt(e);else if(W.test(e))e=parseFloat(e);else if(K.test(e))try{e=U(e)}catch(e){}return t!==typeof e&&(0,r.d)(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},I=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(S){throw o.L.warn(["stringifyJson",e]),o.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},K=/^[{[]/,U=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(S){if(K.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(S){o.L.warn(["parseJson",e]),o.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},Z=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,V=e=>"string"==typeof e?e:Z(e),Y=(e,t)=>s(e,t||(0,o.g)()),G=(e,t)=>l(e,t||(0,o.g)());let Q=null;const X=()=>(Q=Q||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,o.g)().body,level:"Fail",score:1},Q),ee=/(\d+, ){3}0\)/,te=(e,t=X())=>{const n=getComputedStyle(e),r=ee.test(n.backgroundColor)?t.backgroundColor:c.hex(n.backgroundColor),a=ee.test(n.color)?t.color:c.hex(n.color),i=M(r,a),l={backgroundColor:r,color:a,domNode:e,level:E(i),score:i};return i<4.5&&o.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},ne=(e,t=X())=>{t.domNode instanceof HTMLElement&&(t=te(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let r=0;r<n.length&&(t.domNode=n[r],null===(t=ne(e,t)).domNode);r++);return t}return te(n,t)},re=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,o.a)().pageYOffset-50}),e.focus()):(0,r.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},oe=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,r.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const n=`${t}`;t=e,e=n}if("string"==typeof e){const n=Y(e,t);n instanceof HTMLElement?re(n):(0,r.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,r.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class ae{static queryHtmlElementColors(e,t,n=!1,r=!0){let a=null;if(!0===n||!1===ae.executionLock)if(!1===n&&(ae.cache.clear(),ae.cache.set(t.domNode,t),ae.executionLock=!0,!0===r&&o.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)a=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const r=t.domNode;if("function"==typeof r.assignedNodes){const e=r.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const o=t.domNode.children;for(let e=0;e<o.length;e++)n.add(o[e]);const i=Array.from(n);for(let l=0;l<i.length;l++){let n=ae.cache.get(i[l]);void 0===n&&(n=te(i[l],t)),ae.cache.set(i[l],n);const r=ae.queryHtmlElementColors(e,n,!0,!1);if(null!==r){a=r;break}}}else o.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===r&&o.L.debug(`[KoliBriUtils] Color contrast analysis finished (${ae.cache.size} DOM elements are analysed).`),ae.executionLock=!1,ae.cache.clear()),a}}ae.executionLock=!1,ae.cache=new Map;class ie{}ie.patchTheme=a.p,ie.patchThemeTag=a.a,ie.querySelector=Y,ie.querySelectorAll=G,ie.scrollByHTMLElement=re,ie.scrollBySelector=oe,ie.stringifyJson=I},24841:(e,t,n)=>{n.d(t,{w:()=>a});var r=n(38583),o=n(9708);const a=(e,t,n)=>{(0,o.d)(t,"_links",(e=>"object"==typeof e&&("string"==typeof e._href||"string"==typeof e._label)),n),(0,r.c)(e,t.state._links.length)}}}]);