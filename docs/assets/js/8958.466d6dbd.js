/*! For license information please see 8958.466d6dbd.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[8958],{28958:(e,t,r)=>{r.r(t),r.d(t,{kol_symbol:()=>l});var o=r(65640),n=r(7106),a=r(83522);const l=class{constructor(e){(0,o.r)(this,e),this._ariaLabel=void 0,this._symbol=void 0,this.state={_ariaLabel:(0,a.a)("kol-warning"),_symbol:"\u26a0"}}render(){return(0,o.h)(o.H,null,(0,o.h)("span",{"aria-label":this.state._ariaLabel,role:"term"},this.state._symbol))}validateAriaLabel(e){(0,n.w)(this,"_ariaLabel",e,{required:!0})}validateSymbol(e){(0,n.w)(this,"_symbol",e,{required:!0})}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateSymbol(this._symbol)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_symbol:["validateSymbol"]}}}},7106:(e,t,r)=>{r.d(t,{K:()=>re,a:()=>C,b:()=>T,c:()=>x,d:()=>$,e:()=>j,f:()=>O,g:()=>H,h:()=>W,i:()=>ee,j:()=>F,k:()=>K,l:()=>te,m:()=>R,n:()=>Q,o:()=>E,p:()=>I,q:()=>U,r:()=>c,s:()=>q,t:()=>X,u:()=>B,w:()=>P});var o=r(89308),n=r(74711),a=r(67451);const l=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},i=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;l(r,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;l(r,i(e,"object"==typeof n&&null!==n?n:o[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const n=o[t].shadowRoot;if(r=s(e,"object"==typeof n&&null!==n?n:o[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=m,u=m,d=function(e){var t=b(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},f=function(e){var t=b(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},h=function(e){3==(t=b(e)).length&&t.push(255);var t,r=255==t[3],o=y(t[0]),n=y(t[1]),a=y(t[2]),l=function(e,t,r,o){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(r)&&-1!=n.indexOf(o)}(o,n,a,t=y(Math.round(t[3])));return r?l?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0):"#"+o+n+a:l?"#"+o.charAt(0)+n.charAt(0)+a.charAt(0)+t.charAt(0):"#"+o+n+a+t},g=function(e){var t=b(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function m(e){var t=b(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function b(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var o=p(t[0]),n=p(t[1]),a=p(t[2]),l=3==r?255:p(t[3]);if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(l))return;return[o,n,a,l]}}(e)||function(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var o=p(t.slice(0,2)),n=p(t.slice(2,4)),a=p(t.slice(4,6)),l=6==r?255:p(t.slice(6,8));if(isNaN(o)||isNaN(n)||isNaN(a)||isNaN(l))return;return[o,n,a,l]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=v(t[0],!0),o=v(t[1],!0),n=v(t[2],!0);if(-1!=r&&-1!=o&&-1!=n)return[r,o,n,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=v(t[0],!0),o=v(t[1],!0),n=v(t[2],!0),a=v(255*t[3]);if(-1!=r&&-1!=o&&-1!=n&&-1!=a)return[r,o,n,a]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=v(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=v(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=v(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=v(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=v(e[0],!0),r=v(e[1],!0),o=v(e[2],!0),n=v(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=n)return[t,r,o,n]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function y(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function p(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function v(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=u,c.obj=d,c.css=f,c.hex=h,c.num=g;var w=1/12.92;function S(e){return Math.pow((e+.055)/1.055,2.4)}function L(e){var t=e[0]/255,r=e[1]/255,o=e[2]/255;return.2126*(t<=.03928?t*w:S(t))+.7152*(r<=.03928?r*w:S(r))+.0722*(o<=.03928?o*w:S(o))}function N(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function k(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(L(e),L(t))}function x(e,t){return k(N(e),N(t))}function A(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const M=/\[object Object\]/,E=(e,t)=>{"string"==typeof e&&M.test(e)||t()},H=(e,t)=>{"string"==typeof e&&""===e||t()},O=(e,t)=>{(0,a.b)()&&(a.L.debug([e,t]),a.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},q=(e,t,r,o={})=>{var n,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==r&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",o.beforePatch)),e.nextState.set(t,r),(e=>{var t,r,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var o;const n=t.get("beforePatch");"function"==typeof n&&n(null===(o=e.nextState)||void 0===o?void 0:o.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,r)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[r],e.state,e,r)}))),delete e.nextHooks})(e))},C=(e,t,r,o,a,l={})=>{r(a)?q(e,t,a,null==l?void 0:l.hooks):void 0===a||null===a&&(void 0===(null==l?void 0:l.required)||!1===(null==l?void 0:l.required))?q(e,t,null==l?void 0:l.defaultValue,null==l?void 0:l.hooks):(void 0!==(null==l?void 0:l.required)&&!1!==(null==l?void 0:l.required)||o.add(null),((e,t,r,o)=>{(0,n.d)(`[${e.constructor.name}] Der Property-Wert (${r}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)})(e,t,a,o))},T=(e,t,r,o)=>{C(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,o)},P=(e,t,r,o={})=>{const n="number"==typeof o.minLength?null==o?void 0:o.minLength:0;C(e,t,(e=>"string"==typeof e&&e.length>=n),new Set([`String (Mindestl\xe4nge ${n})`]),r,o)},j=(e,t,r,o)=>{C(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),r,o)},$=(e,t,r,o,n=(e=>e==e),l={})=>{H(o,(()=>{E(o,(()=>{void 0===o&&(o=[]);try{try{o=I(o)}catch(e){}if(Array.isArray(o)){const i=o.find((e=>!r(e)));void 0===i&&n(o)?q(e,t,o,l.hooks):E(i,(()=>{throw a.L.debug(i),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else E(o,(()=>{throw a.L.debug(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){a.L.debug(e)}}))}))},D=/^(true|false)$/,_=/^-?(0|[1-9]\d*)$/,J=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,R=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if(D.test(e))e="true"===e;else if(_.test(e))e=parseInt(e);else if(J.test(e))e=parseFloat(e);else if(z.test(e))try{e=I(e)}catch(e){}return t!==typeof e&&(0,n.d)(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},B=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw a.L.warn(["stringifyJson",e]),a.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},z=/^[{[]/,I=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(z.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){a.L.warn(["parseJson",e]),a.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},W=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,F=e=>"string"==typeof e?e:W(e),K=(e,t)=>s(e,t||(0,a.g)()),U=(e,t)=>i(e,t||(0,a.g)());let Y=null;const V=()=>(Y=Y||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,a.g)().body,level:"Fail",score:1},Y),G=/(\d+, ){3}0\)/,Q=(e,t=V())=>{const r=getComputedStyle(e),o=G.test(r.backgroundColor)?t.backgroundColor:c.hex(r.backgroundColor),n=G.test(r.color)?t.color:c.hex(r.color),l=x(o,n),i={backgroundColor:o,color:n,domNode:e,level:A(l),score:l};return l<4.5&&a.L.error(["Color-Contrast-Error",{backgroundColor:i.backgroundColor,color:i.color,level:i.level,score:i.score},i.domNode]),i},X=(e,t=V())=>{t.domNode instanceof HTMLElement&&(t=Q(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<r.length&&(t.domNode=r[o],null===(t=X(e,t)).domNode);o++);return t}return Q(r,t)},Z=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,a.a)().pageYOffset-50}),e.focus()):(0,n.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ee=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,n.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const r=`${t}`;t=e,e=r}if("string"==typeof e){const r=K(e,t);r instanceof HTMLElement?Z(r):(0,n.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,n.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class te{static queryHtmlElementColors(e,t,r=!1,o=!0){let n=null;if(!0===r||!1===te.executionLock)if(!1===r&&(te.cache.clear(),te.cache.set(t.domNode,t),te.executionLock=!0,!0===o&&a.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)n=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const a=t.domNode.children;for(let e=0;e<a.length;e++)r.add(a[e]);const l=Array.from(r);for(let i=0;i<l.length;i++){let r=te.cache.get(l[i]);void 0===r&&(r=Q(l[i],t)),te.cache.set(l[i],r);const o=te.queryHtmlElementColors(e,r,!0,!1);if(null!==o){n=o;break}}}else a.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===o&&a.L.debug(`[KoliBriUtils] Color contrast analysis finished (${te.cache.size} DOM elements are analysed).`),te.executionLock=!1,te.cache.clear()),n}}te.executionLock=!1,te.cache=new Map;class re{}re.patchTheme=o.p,re.patchThemeTag=o.a,re.querySelector=K,re.querySelectorAll=U,re.scrollByHTMLElement=Z,re.scrollBySelector=ee,re.stringifyJson=B}}]);