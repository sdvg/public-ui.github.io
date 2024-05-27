/*! For license information please see 87340.1b496fbc.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[87340],{69320:(e,t,r)=>{r.d(t,{t:()=>a});var o=r(4423),n=r(31604);let a=(e,t)=>{var r;return(null!==(r=(0,o.g)())&&void 0!==r?r:(0,o.i)("de")).translate(e,t)};"test"===n.p&&(a=e=>e)},87340:(e,t,r)=>{r.r(t),r.d(t,{kol_symbol:()=>i});var o=r(33432),n=r(69320),a=r(72784),l=r(29808);const i=class{constructor(e){(0,o.r)(this,e),this._label=void 0,this._symbol=void 0,this.state={_label:(0,n.t)("kol-warning"),_symbol:""}}render(){return(0,o.h)(o.H,{key:"34b75c8f44124c57103e84e6f4f33ed6df1fe998",class:"kol-symbol"},(0,o.h)("span",{key:"57a61aba5a3b316f0ef65a4685ac2e7eed690c28","aria-label":this.state._label,role:"term"},this.state._symbol))}validateLabel(e){(0,a.v)(this,e,{required:!0})}validateSymbol(e){(0,l.i)(this,"_symbol",e,{required:!0})}componentWillLoad(){this.validateLabel(this._label),this.validateSymbol(this._symbol)}static get watchers(){return{_label:["validateLabel"],_symbol:["validateSymbol"]}}}},72784:(e,t,r)=>{r.d(t,{a:()=>u,b:()=>i,c:()=>s,h:()=>n,v:()=>d});var o=r(29808);const n=[0,1,2,3,4,5,6],a=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,l=/^\d+$/;function i(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(a))||void 0===t?void 0:t.length)||0}(e)>=t}function s(e){return l.test(e)}const c=new Set(["string"]),d=(e,t,r={})=>{(0,o.w)(e,"_label",(e=>"string"==typeof e),c,t,function(e){var t;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(t,r,n,a)=>{var l,c;"function"==typeof(null===(l=e.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(t,r,n,a)),"string"==typeof t&&!1===i(t,3)&&!1===s(t)&&(0,o.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,o.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}})}(r))},u=d},29808:(e,t,r)=>{r.d(t,{A:()=>de,B:()=>le,C:()=>ue,D:()=>ee,K:()=>he,a:()=>l,b:()=>F,c:()=>v,d:()=>M,e:()=>p,f:()=>h,g:()=>V,h:()=>y,i:()=>U,j:()=>d,k:()=>Z,l:()=>u,m:()=>X,n:()=>s,o:()=>R,p:()=>re,q:()=>W,r:()=>q,s:()=>I,t:()=>J,u:()=>b,v:()=>ae,w:()=>K,x:()=>oe,y:()=>ne,z:()=>fe});var o=r(88172),n=r(74520);const a=new Set,l=(e,t)=>{(!1===a.has(e)||(null==t?void 0:t.force))&&(a.add(e),n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\u270b a11y",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #09f"}))},i=new Set,s=(e,t)=>{(!1===i.has(e)||(null==t?void 0:t.force))&&(i.add(e),n.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udd25 deprecated",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f00"}))},c=new Set,d=(e,t)=>{(!1===c.has(e)||(null==t?void 0:t.force))&&(c.add(e),n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcbb dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},u=(e,t)=>{(!1===c.has(e)||(null==t?void 0:t.force))&&(c.add(e),n.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"\u26a0\ufe0f dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},f=new Set,h=(e,t=!1,r)=>{(!1===f.has(e)||(null==r?void 0:r.force))&&(f.add(e),e+=!0===t?" \u2705":"",n.L.debug([e].concat((null==r?void 0:r.details)||[]),{classifier:"\ud83c\udf1f feature",forceLog:!!(null==r?void 0:r.force),overwriteStyle:"; background-color: #309"}))};d("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const g=new Set,b=(e,t)=>{(!1===g.has(e)||(null==t?void 0:t.force))&&(g.add(e),n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcd1 ui/ux",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #060;"}))},v=()=>{l('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},p=e=>{"string"==typeof e&&""!==e||l("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},y=(e,t=8)=>{t>7&&b(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)};var m=.2126,w=.7152,k=.0722,S=1/12.92;function L(e){return Math.pow((e+.055)/1.055,2.4)}function x(e){var t=e[0]/255,r=e[1]/255,o=e[2]/255,n=t<=.03928?t*S:L(t),a=r<=.03928?r*S:L(r),l=o<=.03928?o*S:L(o);return n*m+a*w+l*k}function N(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function A(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(x(e),x(t))}function M(e,t){return A(N(e),N(t))}function O(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}var E={exports:{}};function j(e){var t=C(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function C(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var o=_(t[0]),n=_(t[1]),a=_(t[2]),l=3==r?255:_(t[3]);if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(l))return;return[o,n,a,l]}}(e)||function(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var o=_(t.slice(0,2)),n=_(t.slice(2,4)),a=_(t.slice(4,6)),l=6==r?255:_(t.slice(6,8));if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(l))return;return[o,n,a,l]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=H(t[0],!0),o=H(t[1],!0),n=H(t[2],!0);if(-1!=r&&-1!=o&&-1!=n)return[r,o,n,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=H(t[0],!0),o=H(t[1],!0),n=H(t[2],!0),a=H(255*t[3]);if(-1!=r&&-1!=o&&-1!=n&&-1!=a)return[r,o,n,a]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=H(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=H(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=H(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=H(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=H(e[0],!0),r=H(e[1],!0),o=H(e[2],!0),n=H(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function P(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function _(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function H(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}E.exports=j,E.exports.arr=j,E.exports.obj=function(e){var t=C(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},E.exports.css=function(e){var t=C(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},E.exports.hex=function(e){3==(t=C(e)).length&&t.push(255);var t,r=255==t[3],o=P(t[0]),n=P(t[1]),a=P(t[2]),l=function(e,t,r,o){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(r)&&-1!=n.indexOf(o)}(o,n,a,t=P(Math.round(t[3])));return r?l?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0):"#"+o+n+a:l?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0)+t.charAt(0):"#"+o+n+a+t},E.exports.num=function(e){var t=C(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};const q=E.exports,D=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},$=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;D(r,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;D(r,$(e,"object"==typeof n&&null!==n?n:o[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},T=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;if(r=T(e,"object"==typeof n&&null!==n?n:o[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")},z=/\[object Object\]/,R=(e,t)=>{"string"==typeof e&&z.test(e)||t()},J=(e,t)=>{"string"==typeof e&&""===e||t()},W=(e,t)=>{(0,n.a)()&&(n.L.debug([e,t]),n.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},I=(e,t,r,o={})=>{var n,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",o.beforePatch)),e.nextState.set(t,r),(e=>{var t,r,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var o;const n=t.get("beforePatch");"function"==typeof n&&n(null===(o=e.nextState)||void 0===o?void 0:o.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,r)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[r],e.state,e,r)}))),delete e.nextHooks})(e)},B=(e,t,r,o)=>{d(`[${e.constructor.name}] Der Property-Wert (${r}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)};function K(e,t,r,o,n,a={}){r(n)?I(e,t,n,a.hooks):void 0===n&&!0!==a.required&&r(a.defaultValue)?I(e,t,a.defaultValue,a.hooks):(a.required||o.add(null),B(e,t,n,o))}const F=(e,t,r,o)=>{K(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,o)},U=(e,t,r,o={})=>{const n="number"==typeof o.minLength?null==o?void 0:o.minLength:0;K(e,t,(e=>"string"==typeof e&&e.length>=n&&(void 0===(null==o?void 0:o.maxLength)||e.length<=o.maxLength)),new Set(["String"]),r,o)},Z=(e,t,r,o)=>{K(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),r,o)},V=(e,t,r,o,a=(e=>e==e),l={})=>{J(o,(()=>{R(o,(()=>{void 0===o&&(o=[]);try{try{o=re(o)}catch(e){}if(Array.isArray(o)){const i=o.find((e=>!r(e)));void 0===i&&a(o)?I(e,t,o,l.hooks):R(i,(()=>{throw n.L.debug(i),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else R(o,(()=>{throw n.L.debug(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){n.L.debug(e)}}))}))},Y=/^(true|false)$/,G=/^-?(0|[1-9]\d*)$/,Q=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,X=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if(Y.test(e))e="true"===e;else if(G.test(e))e=parseInt(e);else if(Q.test(e))e=parseFloat(e);else if(te.test(e))try{e=re(e)}catch(e){}return t!==typeof e&&d(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},ee=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(k){throw n.L.warn(["stringifyJson",e]),n.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},te=/^[{[]/,re=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(k){if(te.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(k){n.L.warn(["parseJson",e]),n.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},oe=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,ne=e=>"string"==typeof e?e:oe(e),ae=(e,t)=>T(e,t||(0,n.g)()),le=(e,t)=>$(e,t||(0,n.g)());let ie=null;const se=()=>(ie=ie||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,n.g)().body,level:"Fail",score:1},ie),ce=/(\d+, ){3}0\)/,de=(e,t=se())=>{const r=getComputedStyle(e),o=ce.test(r.backgroundColor)?t.backgroundColor:q.hex(r.backgroundColor),a=ce.test(r.color)?t.color:q.hex(r.color),l=M(o,a),i={backgroundColor:o,color:a,domNode:e,level:O(l),score:l};return l<4.5&&n.L.error(["Color-Contrast-Error",{backgroundColor:i.backgroundColor,color:i.color,level:i.level,score:i.score},i.domNode]),i},ue=(e,t=se())=>{t.domNode instanceof HTMLElement&&(t=de(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<r.length&&(t.domNode=r[o],null===(t=ue(e,t)).domNode);o++);return t}return de(r,t)};class fe{static queryHtmlElementColors(e,t,r=!1,o=!0){let a=null;if(!0===r||!1===fe.executionLock)if(!1===r&&(fe.cache.clear(),fe.cache.set(t.domNode,t),fe.executionLock=!0,!0===o&&n.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)a=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const n=t.domNode.children;for(let e=0;e<n.length;e++)r.add(n[e]);const l=Array.from(r);for(let i=0;i<l.length;i++){let r=fe.cache.get(l[i]);void 0===r&&(r=de(l[i],t)),fe.cache.set(l[i],r);const o=fe.queryHtmlElementColors(e,r,!0,!1);if(null!==o){a=o;break}}}else n.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===o&&n.L.debug(`[KoliBriUtils] Color contrast analysis finished (${fe.cache.size} DOM elements are analysed).`),fe.executionLock=!1,fe.cache.clear()),a}}fe.executionLock=!1,fe.cache=new Map;class he{}he.patchTheme=o.U,he.patchThemeTag=o.b,he.querySelector=ae,he.querySelectorAll=le,he.stringifyJson=ee}}]);