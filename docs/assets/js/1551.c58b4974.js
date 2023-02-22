/*! For license information please see 1551.c58b4974.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1551],{31551:(e,t,o)=>{o.r(t),o.d(t,{kol_input_date:()=>a});var r=o(65640),n=o(7106),i=o(47121);const a=class{constructor(e){(0,r.r)(this,e),this.catchRef=e=>{this.ref=e,(0,i.a)(this.host,this.ref)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._max=void 0,this._min=void 0,this._name=void 0,this._on=void 0,this._readOnly=void 0,this._required=void 0,this._smartButton=void 0,this._step=void 0,this._tabIndex=void 0,this._touched=!1,this._type="date",this._value=void 0,this.state={}}render(){return(0,r.h)(r.H,null,(0,r.h)("kol-input-number",{ref:this.catchRef,_accessKey:this._accessKey,_alert:this._alert,_autoComplete:this._autoComplete,_disabled:this._disabled,_error:this._error,_hideLabel:this._hideLabel,_hint:this._hint,_icon:this._icon,_id:this._id,_list:this._list,_max:this.state._max,_min:this.state._min,_name:this._name,_on:this._on,_readOnly:this._readOnly,_required:this._required,_smartButton:this._smartButton,_step:this._step,_tabIndex:this._tabIndex,_touched:this._touched,_type:this._type,_value:this.state._value},(0,r.h)("slot",null)))}valueAsIsoDate(e,t){const o=null!=e?e:t;if("string"==typeof o)return o;if("object"==typeof o&&o instanceof Date)switch(this._type){case"date":return`${o.getFullYear()}-${o.getMonth()+1}-${o.getDate()}`;case"datetime-local":return`${o.getFullYear()}-${o.getMonth()+1}-${o.getDate()}T${o.getHours()}:${o.getMinutes()}:${o.getSeconds()}`;case"month":return`${o.getFullYear()}-${o.getMonth()+1}`;case"time":return`${o.getHours()}:${o.getMinutes()}:${o.getSeconds()}`;case"week":throw new Error("Auto convert to week is not supported!")}}validateDateString(e){switch(this._type){case"date":return a.isoDateRegex.test(e);case"datetime-local":return a.isoLocalDateTimeRegex.test(e);case"month":return a.isoMonthRegex.test(e);case"time":return a.isoTimeRegex.test(e);case"week":return a.isoWeekRegex.test(e)}}validateMax(e){(0,n.a)(this,"_max",(e=>void 0===e||this.validateDateString(e)),new Set(["Iso8601","Date"]),this.valueAsIsoDate(e,"date"===this._type||"month"===this._type||"datetime-local"===this._type?a.DEFAULT_MAX_DATE:void 0))}validateMin(e){(0,n.a)(this,"_min",(e=>void 0===e||this.validateDateString(e)),new Set(["Iso8601","Date"]),this.valueAsIsoDate(e))}validateValue(e){(0,n.a)(this,"_value",(e=>void 0===e||this.validateDateString(e)),new Set(["Iso8601","Date"]),this.valueAsIsoDate(e))}componentWillLoad(){this.validateMax(this._max),this.validateMin(this._min),this.validateValue(this._value)}get host(){return(0,r.g)(this)}static get watchers(){return{_max:["validateMax"],_min:["validateMin"],_value:["validateValue"]}}};a.DEFAULT_MAX_DATE=new Date(9999,11,31,23,59,59),a.isoDateRegex=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])/,a.isoLocalDateTimeRegex=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])[T ][0-2]\d:[0-5]\d(:[0-5]\d(?:\.\d+)?)?/,a.isoMonthRegex=/^\d{4}-([0]\d|1[0-2])/,a.isoTimeRegex=/^[0-2]\d:[0-5]\d(:[0-5]\d(?:\.\d+)?)?/,a.isoWeekRegex=/^\d{4}-W(?:[0-4]\d|5[0-3])$/,a.style={default:":host{--kolibri-border-color:#e0e0e0;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*{box-sizing:border-box;font-family:var(--kolibri-font-family)}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}a,button,input,select,textarea{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0}h1,h2,h3,h4,h5,h6{font-size:1rem;margin:0}"}},7106:(e,t,o)=>{o.d(t,{K:()=>oe,a:()=>T,b:()=>H,c:()=>M,d:()=>R,e:()=>C,f:()=>E,g:()=>D,h:()=>F,i:()=>ee,j:()=>W,k:()=>K,l:()=>te,m:()=>I,n:()=>G,o:()=>L,p:()=>J,q:()=>U,r:()=>c,s:()=>$,t:()=>Q,u:()=>B,w:()=>O});var r=o(89308),n=o(74711),i=o(67451);const a=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const o=new Set;a(o,t.querySelectorAll(e));const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const n=r[t].shadowRoot;a(o,s(e,"object"==typeof n&&null!==n?n:r[t]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let o=t.querySelector(e);if(null===o){const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const n=r[t].shadowRoot;if(o=l(e,"object"==typeof n&&null!==n?n:r[t]),null!==o)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=m,d=m,u=function(e){var t=p(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},h=function(e){var t=p(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},f=function(e){3==(t=p(e)).length&&t.push(255);var t,o=255==t[3],r=b(t[0]),n=b(t[1]),i=b(t[2]),a=function(e,t,o,r){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(o)&&-1!=n.indexOf(r)}(r,n,i,t=b(Math.round(t[3])));return o?a?"#"+r.charAt(0)+n.charAt(0)+i.charAt(0):"#"+r+n+i:a?"#"+r.charAt(0)+n.charAt(0)+i.charAt(0)+t.charAt(0):"#"+r+n+i+t},g=function(e){var t=p(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function m(e){var t=p(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function p(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),o=t.length;if(3==o||4==o){var r=v(t[0]),n=v(t[1]),i=v(t[2]),a=3==o?255:v(t[3]);if(isNaN(r)||isNaN(n)||isNaN(i)||isNaN(a))return;return[r,n,i,a]}}(e)||function(e){var t=e.replace(/^#/,""),o=t.length;if(6==o||8==o){var r=v(t.slice(0,2)),n=v(t.slice(2,4)),i=v(t.slice(4,6)),a=6==o?255:v(t.slice(6,8));if(isNaN(r)||isNaN(n)||isNaN(i)||isNaN(a))return;return[r,n,i,a]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=y(t[0],!0),r=y(t[1],!0),n=y(t[2],!0);if(-1!=o&&-1!=r&&-1!=n)return[o,r,n,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=y(t[0],!0),r=y(t[1],!0),n=y(t[2],!0),i=y(255*t[3]);if(-1!=o&&-1!=r&&-1!=n&&-1!=i)return[o,r,n,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=y(null!=e.r?e.r:null!=e.red?e.red:0,!0),o=y(null!=e.g?e.g:null!=e.green?e.green:0,!0),r=y(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=y(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=o&&-1!=r&&-1!=n)return[t,o,r,n]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=y(e[0],!0),o=y(e[1],!0),r=y(e[2],!0),n=y(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=o&&-1!=r&&-1!=n)return[t,o,r,n]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function b(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function v(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function y(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=d,c.obj=u,c.css=h,c.hex=f,c.num=g;var _=1/12.92;function w(e){return Math.pow((e+.055)/1.055,2.4)}function k(e){var t=e[0]/255,o=e[1]/255,r=e[2]/255;return.2126*(t<=.03928?t*_:w(t))+.7152*(o<=.03928?o*_:w(o))+.0722*(r<=.03928?r*_:w(r))}function x(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var o=parseInt(e,16);return[o>>16,o>>8&255,255&o,t]}function S(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(k(e),k(t))}function M(e,t){return S(x(e),x(t))}function N(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const A=/\[object Object\]/,L=(e,t)=>{"string"==typeof e&&A.test(e)||t()},D=(e,t)=>{"string"==typeof e&&""===e||t()},E=(e,t)=>{(0,i.b)()&&(i.L.debug([e,t]),i.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},$=(e,t,o,r={})=>{var n,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==o&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof r.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",r.afterPatch)),"function"==typeof r.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",r.beforePatch)),e.nextState.set(t,o),(e=>{var t,o,r;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,o)=>{var r;const n=t.get("beforePatch");"function"==typeof n&&n(null===(r=e.nextState)||void 0===r?void 0:r.get(o),e.nextState,e,o)})),(null===(o=e.nextState)||void 0===o?void 0:o.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(r=e.nextHooks)||void 0===r||r.forEach(((t,o)=>{const r=t.get("afterPatch");"function"==typeof r&&r(e.state[o],e.state,e,o)}))),delete e.nextHooks})(e))},T=(e,t,o,r,i,a={})=>{o(i)?$(e,t,i,null==a?void 0:a.hooks):void 0===i||null===i&&(void 0===(null==a?void 0:a.required)||!1===(null==a?void 0:a.required))?$(e,t,null==a?void 0:a.defaultValue,null==a?void 0:a.hooks):(void 0!==(null==a?void 0:a.required)&&!1!==(null==a?void 0:a.required)||r.add(null),((e,t,o,r)=>{(0,n.d)(`[${e.constructor.name}] Der Property-Wert (${o}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(r).join(", ")}`)})(e,t,i,r))},H=(e,t,o,r)=>{T(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),o,r)},O=(e,t,o,r={})=>{const n="number"==typeof r.minLength?null==r?void 0:r.minLength:0;T(e,t,(e=>"string"==typeof e&&e.length>=n),new Set([`String (Mindestl\xe4nge ${n})`]),o,r)},C=(e,t,o,r)=>{T(e,t,(e=>"number"==typeof e&&(void 0===(null==r?void 0:r.min)||"number"==typeof(null==r?void 0:r.min)&&e>=r.min)&&(void 0===(null==r?void 0:r.max)||"number"==typeof(null==r?void 0:r.max)&&e<=r.max)),new Set(["Number"]),o,r)},R=(e,t,o,r,n=(e=>e==e),a={})=>{D(r,(()=>{L(r,(()=>{void 0===r&&(r=[]);try{try{r=J(r)}catch(e){}if(Array.isArray(r)){const s=r.find((e=>!o(e)));void 0===s&&n(r)?$(e,t,r,a.hooks):L(s,(()=>{throw i.L.debug(s),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else L(r,(()=>{throw i.L.debug(r),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){i.L.debug(e)}}))}))},q=/^(true|false)$/,j=/^-?(0|[1-9]\d*)$/,P=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,I=e=>{const t=typeof e,o=`${e}`;if("string"==typeof e)if(q.test(e))e="true"===e;else if(j.test(e))e=parseInt(e);else if(P.test(e))e=parseFloat(e);else if(z.test(e))try{e=J(e)}catch(e){}return t!==typeof e&&(0,n.d)(`You have used a stringified property value (${o} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},B=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw i.L.warn(["stringifyJson",e]),i.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},z=/^[{[]/,J=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(z.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){i.L.warn(["parseJson",e]),i.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},F=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,W=e=>"string"==typeof e?e:F(e),K=(e,t)=>l(e,t||(0,i.g)()),U=(e,t)=>s(e,t||(0,i.g)());let V=null;const Y=()=>(V=V||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,i.g)().body,level:"Fail",score:1},V),X=/(\d+, ){3}0\)/,G=(e,t=Y())=>{const o=getComputedStyle(e),r=X.test(o.backgroundColor)?t.backgroundColor:c.hex(o.backgroundColor),n=X.test(o.color)?t.color:c.hex(o.color),a=M(r,n),s={backgroundColor:r,color:n,domNode:e,level:N(a),score:a};return a<4.5&&i.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},Q=(e,t=Y())=>{t.domNode instanceof HTMLElement&&(t=G(t.domNode,t));const o=t.domNode.querySelector(e);if(null===o){const o=t.domNode.querySelectorAll('[class="hydrated"]');for(let r=0;r<o.length&&(t.domNode=o[r],null===(t=Q(e,t)).domNode);r++);return t}return G(o,t)},Z=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,i.a)().pageYOffset-50}),e.focus()):(0,n.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ee=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,n.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const o=`${t}`;t=e,e=o}if("string"==typeof e){const o=K(e,t);o instanceof HTMLElement?Z(o):(0,n.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,n.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class te{static queryHtmlElementColors(e,t,o=!1,r=!0){let n=null;if(!0===o||!1===te.executionLock)if(!1===o&&(te.cache.clear(),te.cache.set(t.domNode,t),te.executionLock=!0,!0===r&&i.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)n=t;else{const o=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)o.add(e[t])}const r=t.domNode;if("function"==typeof r.assignedNodes){const e=r.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&o.add(e[t])}const i=t.domNode.children;for(let e=0;e<i.length;e++)o.add(i[e]);const a=Array.from(o);for(let s=0;s<a.length;s++){let o=te.cache.get(a[s]);void 0===o&&(o=G(a[s],t)),te.cache.set(a[s],o);const r=te.queryHtmlElementColors(e,o,!0,!1);if(null!==r){n=r;break}}}else i.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===o&&(!0===r&&i.L.debug(`[KoliBriUtils] Color contrast analysis finished (${te.cache.size} DOM elements are analysed).`),te.executionLock=!1,te.cache.clear()),n}}te.executionLock=!1,te.cache=new Map;class oe{}oe.patchTheme=r.p,oe.patchThemeTag=r.a,oe.querySelector=K,oe.querySelectorAll=U,oe.scrollByHTMLElement=Z,oe.scrollBySelector=ee,oe.stringifyJson=B}}]);