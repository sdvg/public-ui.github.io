/*! For license information please see 35499.999ae9a5.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[35499],{21491:(e,t,r)=>{r.d(t,{a:()=>i,b:()=>g,c:()=>b,d:()=>l,e:()=>h,f:()=>d,g:()=>s,u:()=>f});var n=r(9724);const o=new Set,i=(e,t)=>{(!1===o.has(e)||(null==t?void 0:t.force))&&(o.add(e),n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},a=new Set,l=(e,t)=>{(!1===a.has(e)||(null==t?void 0:t.force))&&(a.add(e),n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},s=(e,t)=>{(!1===a.has(e)||(null==t?void 0:t.force))&&(a.add(e),n.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},c=new Set,d=(e,t=!1,r)=>{(!1===c.has(e)||(null==r?void 0:r.force))&&(c.add(e),e+=!0===t?" \u2705":"",n.L.debug([e].concat((null==r?void 0:r.details)||[]),{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};l("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const u=new Set,f=(e,t)=>{(!1===u.has(e)||(null==t?void 0:t.force))&&(u.add(e),n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},h=()=>{i('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},g=e=>{"string"==typeof e&&""!==e||i("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},b=(e,t=8)=>{t>7&&f(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},35499:(e,t,r)=>{r.r(t),r.d(t,{initialize:()=>l});var n=r(9724),o=r(48167);function i(e,t){try{Object.defineProperty(n.K,e,{get:function(){return t}})}catch(t){n.L.debug(`KoliBri property ${e} is already bind.`)}}const a=(e,t)=>n.L.debug(`${e} ${t?"":"not "}activated`),l=()=>{if((0,n.i)(),(0,n.h)()){(0,n.j)(),i("a11yColorContrast",o.l),i("querySelector",o.k),i("querySelectorAll",o.n),i("querySelectorColors",o.q),i("utils",(function(){return o.j})),i("parseJson",o.p),i("stringifyJson",o.t);const e=(0,n.b)().body,t=(0,n.b)().createElement("svg");if(t.setAttribute("aria-label","KoliBri-DevTools"),t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("role","toolbar"),t.setAttribute("style","position: fixed;color: black;font-size: 200%;bottom: 0.25rem;right: 0.25rem;"),t.innerHTML='<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="50"\n  height="50"\n  viewBox="0 0 600 600"\n>\n  <path d="M353 322L213 304V434L353 322Z" fill="#047" />\n  <path d="M209 564V304L149 434L209 564Z" fill="#047" />\n  <path d="M357 316L417 250L361 210L275 244L357 316Z" fill="#047" />\n  <path d="M353 318L35 36L213 300L353 318Z" fill="#047" />\n  <path d="M329 218L237 92L250 222L272 241L329 218Z" fill="#047" />\n  <path d="M391 286L565 272L421 252L391 286Z" fill="#047" />\n</svg>',(0,n.b)().body.appendChild(t),a("Development mode",(0,n.h)()),a("Experimental mode",(0,n.d)()),a("Color contrast analysis",(0,n.k)()),(0,n.k)()){const t=setTimeout((()=>{clearTimeout(t),setInterval((()=>{o.j.queryHtmlElementColors((0,n.b)().createElement("div"),(0,o.l)(e),!1,!1)}),1e4)}),2500)}}}},48167:(e,t,r)=>{r.d(t,{K:()=>ne,a:()=>$,b:()=>M,c:()=>J,d:()=>P,e:()=>z,f:()=>q,g:()=>j,h:()=>F,i:()=>U,j:()=>re,k:()=>V,l:()=>ee,m:()=>K,n:()=>Y,o:()=>O,p:()=>_,q:()=>te,r:()=>s,s:()=>H,t:()=>W,w:()=>T});var n=r(21491),o=r(9724);const i=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},a=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;i(r,t.querySelectorAll(e));const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const o=n[t].shadowRoot;i(r,a(e,"object"==typeof o&&null!==o?o:n[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const o=n[t].shadowRoot;if(r=l(e,"object"==typeof o&&null!==o?o:n[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var s=g,c=g,d=function(e){var t=b(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},u=function(e){var t=b(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},f=function(e){3==(t=b(e)).length&&t.push(255);var t,r=255==t[3],n=p(t[0]),o=p(t[1]),i=p(t[2]),a=function(e,t,r,n){var o=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=o.indexOf(e)&&-1!=o.indexOf(t)&&-1!=o.indexOf(r)&&-1!=o.indexOf(n)}(n,o,i,t=p(Math.round(t[3])));return r?a?"#"+n.charAt(0)+o.charAt(0)+i.charAt(0):"#"+n+o+i:a?"#"+n.charAt(0)+o.charAt(0)+i.charAt(0)+t.charAt(0):"#"+n+o+i+t},h=function(e){var t=b(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function g(e){var t=b(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function b(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var n=m(t[0]),o=m(t[1]),i=m(t[2]),a=3==r?255:m(t[3]);if(isNaN(n)||isNaN(o)||isNaN(i)||isNaN(a))return;return[n,o,i,a]}}(e)||function(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var n=m(t.slice(0,2)),o=m(t.slice(2,4)),i=m(t.slice(4,6)),a=6==r?255:m(t.slice(6,8));if(isNaN(n)||isNaN(o)||isNaN(i)||isNaN(a))return;return[n,o,i,a]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=y(t[0],!0),n=y(t[1],!0),o=y(t[2],!0);if(-1!=r&&-1!=n&&-1!=o)return[r,n,o,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=y(t[0],!0),n=y(t[1],!0),o=y(t[2],!0),i=y(255*t[3]);if(-1!=r&&-1!=n&&-1!=o&&-1!=i)return[r,n,o,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=y(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=y(null!=e.g?e.g:null!=e.green?e.green:0,!0),n=y(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),o=y(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=n&&-1!=o)return[t,r,n,o]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=y(e[0],!0),r=y(e[1],!0),n=y(e[2],!0),o=y(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=n&&-1!=o)return[t,r,n,o]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function p(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function m(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function y(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}s.arr=c,s.obj=d,s.css=u,s.hex=f,s.num=h;var v=.2126,w=.7152,S=.0722,k=1/12.92;function L(e){return Math.pow((e+.055)/1.055,2.4)}function N(e){var t=e[0]/255,r=e[1]/255,n=e[2]/255,o=t<=.03928?t*k:L(t),i=r<=.03928?r*k:L(r),a=n<=.03928?n*k:L(n);return o*v+i*w+a*S}function x(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function A(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(N(e),N(t))}function M(e,t){return A(x(e),x(t))}function C(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const E=/\[object Object\]/,O=(e,t)=>{"string"==typeof e&&E.test(e)||t()},j=(e,t)=>{"string"==typeof e&&""===e||t()},q=(e,t)=>{(0,o.d)()&&(o.L.debug([e,t]),o.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},H=(e,t,r,n={})=>{var o,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==r&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof n.afterPatch&&(null===(o=e.nextHooks.get(t))||void 0===o||o.set("afterPatch",n.afterPatch)),"function"==typeof n.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",n.beforePatch)),e.nextState.set(t,r),(e=>{var t,r,n;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var n;const o=t.get("beforePatch");"function"==typeof o&&o(null===(n=e.nextState)||void 0===n?void 0:n.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(n=e.nextHooks)||void 0===n||n.forEach(((t,r)=>{const n=t.get("afterPatch");"function"==typeof n&&n(e.state[r],e.state,e,r)}))),delete e.nextHooks})(e))},D=(e,t,r,o)=>{(0,n.d)(`[${e.constructor.name}] Der Property-Wert (${r}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)};function T(e,t,r,n,o,i={}){r(o)?H(e,t,o,i.hooks):null!=o||i.required?(i.required||n.add(null),D(e,t,o,n)):H(e,t,i.defaultValue,i.hooks)}const $=(e,t,r,n)=>{T(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,n)},P=(e,t,r,n={})=>{const o="number"==typeof n.minLength?null==n?void 0:n.minLength:0;T(e,t,(e=>"string"==typeof e&&e.length>=o&&(void 0===(null==n?void 0:n.maxLength)||e.length<=n.maxLength)),new Set(["String"]),r,n)},z=(e,t,r,n)=>{T(e,t,(e=>"number"==typeof e&&(void 0===(null==n?void 0:n.min)||"number"==typeof(null==n?void 0:n.min)&&e>=n.min)&&(void 0===(null==n?void 0:n.max)||"number"==typeof(null==n?void 0:n.max)&&e<=n.max)),new Set(["Number"]),r,n)},J=(e,t,r,n,i=(e=>e==e),a={})=>{j(n,(()=>{O(n,(()=>{void 0===n&&(n=[]);try{try{n=_(n)}catch(e){}if(Array.isArray(n)){const l=n.find((e=>!r(e)));void 0===l&&i(n)?H(e,t,n,a.hooks):O(l,(()=>{throw o.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else O(n,(()=>{throw o.L.debug(n),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){o.L.debug(e)}}))}))},R=/^(true|false)$/,B=/^-?(0|[1-9]\d*)$/,I=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,K=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if(R.test(e))e="true"===e;else if(B.test(e))e=parseInt(e);else if(I.test(e))e=parseFloat(e);else if(Z.test(e))try{e=_(e)}catch(e){}return t!==typeof e&&(0,n.d)(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},W=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(S){throw o.L.warn(["stringifyJson",e]),o.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},Z=/^[{[]/,_=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(S){if(Z.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(S){o.L.warn(["parseJson",e]),o.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},F=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,U=e=>"string"==typeof e?e:F(e),V=(e,t)=>l(e,t||(0,o.b)()),Y=(e,t)=>a(e,t||(0,o.b)());let G=null;const Q=()=>(G=G||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,o.b)().body,level:"Fail",score:1},G),X=/(\d+, ){3}0\)/,ee=(e,t=Q())=>{const r=getComputedStyle(e),n=X.test(r.backgroundColor)?t.backgroundColor:s.hex(r.backgroundColor),i=X.test(r.color)?t.color:s.hex(r.color),a=M(n,i),l={backgroundColor:n,color:i,domNode:e,level:C(a),score:a};return a<4.5&&o.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},te=(e,t=Q())=>{t.domNode instanceof HTMLElement&&(t=ee(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let n=0;n<r.length&&(t.domNode=r[n],null===(t=te(e,t)).domNode);n++);return t}return ee(r,t)};class re{static queryHtmlElementColors(e,t,r=!1,n=!0){let i=null;if(!0===r||!1===re.executionLock)if(!1===r&&(re.cache.clear(),re.cache.set(t.domNode,t),re.executionLock=!0,!0===n&&o.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)i=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const n=t.domNode;if("function"==typeof n.assignedNodes){const e=n.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const o=t.domNode.children;for(let e=0;e<o.length;e++)r.add(o[e]);const a=Array.from(r);for(let l=0;l<a.length;l++){let r=re.cache.get(a[l]);void 0===r&&(r=ee(a[l],t)),re.cache.set(a[l],r);const n=re.queryHtmlElementColors(e,r,!0,!1);if(null!==n){i=n;break}}}else o.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===n&&o.L.debug(`[KoliBriUtils] Color contrast analysis finished (${re.cache.size} DOM elements are analysed).`),re.executionLock=!1,re.cache.clear()),i}}re.executionLock=!1,re.cache=new Map;class ne{}ne.patchTheme=o.p,ne.patchThemeTag=o.a,ne.querySelector=V,ne.querySelectorAll=Y,ne.stringifyJson=W}}]);