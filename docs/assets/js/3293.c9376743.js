/*! For license information please see 3293.c9376743.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[3293],{83293:(e,t,o)=>{o.r(t),o.d(t,{kol_input_date:()=>a});var r=o(97657),i=o(74704),n=o(60245);const a=class{constructor(e){(0,r.r)(this,e),this.catchRef=e=>{this.ref=e,(0,n.a)(this.host,this.ref)},this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._max=void 0,this._min=void 0,this._name=void 0,this._on=void 0,this._readOnly=void 0,this._required=void 0,this._smartButton=void 0,this._step=void 0,this._tabIndex=void 0,this._touched=!1,this._type="date",this._value=void 0,this.state={}}render(){return(0,r.h)(r.H,null,(0,r.h)("kol-input-number",{ref:this.catchRef,_accessKey:this._accessKey,_alert:this._alert,_autoComplete:this._autoComplete,_disabled:this._disabled,_error:this._error,_hideLabel:this._hideLabel,_hint:this._hint,_icon:this._icon,_id:this._id,_list:this._list,_max:this.state._max,_min:this.state._min,_name:this._name,_on:this.state._on,_readOnly:this._readOnly,_required:this._required,_smartButton:this._smartButton,_step:this._step,_tabIndex:this._tabIndex,_touched:this._touched,_type:this._type,_value:this.state._value},(0,r.h)("slot",null)))}valueAsIsoDate(e,t){const o=null!=e?e:t;if("string"==typeof o)return o;if("object"==typeof o&&o instanceof Date)switch(this._type){case"date":return`${o.getFullYear()}-${o.getMonth()+1}-${o.getDate()}`;case"datetime-local":return`${o.getFullYear()}-${o.getMonth()+1}-${o.getDate()}T${o.getHours()}:${o.getMinutes()}:${o.getSeconds()}`;case"month":return`${o.getFullYear()}-${o.getMonth()+1}`;case"time":return void 0===this._step||"string"==typeof this._step&&"60"===this._step||"number"==typeof this._step&&60===this._step?`${o.getHours()}:${o.getMinutes()}`:`${o.getHours()}:${o.getMinutes()}:${o.getSeconds()}`;case"week":throw new Error("Auto convert to week is not supported!")}return null===e?null:void 0}validateDateString(e){switch(this._type){case"date":return a.isoDateRegex.test(e);case"datetime-local":return a.isoLocalDateTimeRegex.test(e);case"month":return a.isoMonthRegex.test(e);case"time":return a.isoTimeRegex.test(e);case"week":return a.isoWeekRegex.test(e)}}validateOn(e){(0,i.s)(this,"_on",Object.assign(Object.assign({},e),{onChange:(t,o)=>{this._value=o,(null==e?void 0:e.onChange)&&e.onChange(t,o)}}))}validateMax(e){(0,i.a)(this,"_max",(e=>void 0===e||null!==e&&this.validateDateString(e)),new Set(["Iso8601","Date"]),this.valueAsIsoDate(e,"date"===this._type||"month"===this._type||"datetime-local"===this._type?a.DEFAULT_MAX_DATE:void 0))}validateMin(e){(0,i.a)(this,"_min",(e=>void 0===e||null!==e&&this.validateDateString(e)),new Set(["Iso8601","Date"]),this.valueAsIsoDate(e))}validateValue(e){(0,i.a)(this,"_value",(e=>null==e||this.validateDateString(e)),new Set(["Iso8601","Date"]),this.valueAsIsoDate(e))}componentWillLoad(){this.validateOn(this._on),this.validateMax(this._max),this.validateMin(this._min),this.validateValue(this._value)}get host(){return(0,r.g)(this)}static get watchers(){return{_on:["validateOn"],_max:["validateMax"],_min:["validateMin"],_value:["validateValue"]}}};a.DEFAULT_MAX_DATE=new Date(9999,11,31,23,59,59),a.isoDateRegex=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])/,a.isoLocalDateTimeRegex=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])[T ][0-2]\d:[0-5]\d(:[0-5]\d(?:\.\d+)?)?/,a.isoMonthRegex=/^\d{4}-([0]\d|1[0-2])/,a.isoTimeRegex=/^[0-2]\d:[0-5]\d(:[0-5]\d(?:\.\d+)?)?/,a.isoWeekRegex=/^\d{4}-W(?:[0-4]\d|5[0-3])$/,a.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host{font-family:inherit;font-size:inherit}:host *{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}:host{display:inline-block}a,button{background-color:transparent;border:none;font-size:inherit;margin:0;padding:0;transition-duration:0.5s;transition-property:background-color, color, border-color}:host{font-family:var(--kolibri-font-family);font-size:inherit}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}kol-span-wc>kol-icon,kol-span-wc>span>kol-icon{display:inline-grid;place-items:center;width:1em;height:1em}a,button,input,select,textarea{appearance:none;cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}h1,h2,h3,h4,h5,h6{font-family:var(--kolibri-font-family);font-size:var(--kolibri-font-size);margin:0;padding:0}.kol-required span::after{content:'*'}.kol-disabled{opacity:0.5}.kol-cursor-not-allowed,.kol-cursor-not-allowed *{cursor:not-allowed}input[type='color'],input[type='date'],input[type='datetime-local'],input[type='email'],input[type='file'],input[type='month'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='time'],input[type='url'],input[type='week'],select,textarea{background-color:white;display:block;font-size:1rem;line-height:1.5em;min-height:44px;padding:0.5em 0.75em}input[type='color']{height:2.5em;padding:0.25em 0.5em}textarea{padding:0.5em}input,select,textarea{border-color:var(--kolibri-border-color);border-style:solid;border-width:calc(var(--kolibri-spacing) / 2)}input input.error,input select.error,input textarea.error,select input.error,select select.error,select textarea.error,textarea input.error,textarea select.error,textarea textarea.error{border-color:var(--kolibri-border-error)}input input:focus,input input:hover,input select:focus,input select:hover,input textarea:focus,input textarea:hover,select input:focus,select input:hover,select select:focus,select select:hover,select textarea:focus,select textarea:hover,textarea input:focus,textarea input:hover,textarea select:focus,textarea select:hover,textarea textarea:focus,textarea textarea:hover{border-color:var(--kolibri-color-text)}input:not([type='checkbox']),option,select,textarea{font-size:inherit;letter-spacing:inherit;word-spacing:inherit}kol-input{display:grid;gap:calc(2 * var(--kolibri-spacing))}input,select,textarea{background-color:white;border-color:var(--kolibri-border-color);border-radius:var(--kolibri-border-radius);border-style:solid;border-width:var(--kolibri-border-width);font-size:1em;font-family:var(--kolibri-font-family-sans);line-height:2.5em;overflow:hidden;width:100%}input,select:not([multiple]){height:2.75em}input::placeholder{color:var(--kolibri-color-normal)}input:hover{border-color:var(--kolibri-color-primary)}input:not([type='color']):read-only,input:disabled,select:read-only,select:disabled,textarea:read-only,textarea:disabled{cursor:not-allowed}.required label>span::after{content:'*';padding-left:var(--kolibri-spacing)}.icons{display:flex;justify-content:space-between;height:0}.icons>kol-icon{display:grid;height:44px;padding:0 0.75em;place-items:center}.icon-left input,.icon-left select{padding-left:2em}.icon-right input,.icon-right select{padding-right:2em}kol-button-wc{position:relative;float:right;z-index:1000;margin-top:-44px}kol-button-wc button{background-color:transparent;display:inline-block;min-height:44px;min-width:44px}.icon-right kol-button-wc{margin-right:44px}.disabled{opacity:0.5}select[multiple],textarea{overflow:auto}textarea{display:block}select option{margin:var(--kolibri-spacing) 0;padding:0.5em;border-radius:0.25em;cursor:pointer}select option:disabled{cursor:not-allowed}option:active:not(:disabled),option:checked:not(:disabled),option:focus:not(:disabled),option:hover:not(:disabled){background-color:var(--kolibri-color-primary);color:white}kol-input-number{display:block}"}},74704:(e,t,o)=>{o.d(t,{K:()=>oe,a:()=>$,b:()=>T,c:()=>M,d:()=>q,e:()=>C,f:()=>E,g:()=>D,h:()=>F,i:()=>ee,j:()=>W,k:()=>K,l:()=>te,m:()=>P,n:()=>G,o:()=>A,p:()=>J,q:()=>U,r:()=>c,s:()=>O,t:()=>Q,u:()=>I,w:()=>H});var r=o(91492),i=o(51065),n=o(1119);const a=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const o=new Set;a(o,t.querySelectorAll(e));const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const i=r[t].shadowRoot;a(o,l(e,"object"==typeof i&&null!==i?i:r[t]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let o=t.querySelector(e);if(null===o){const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const i=r[t].shadowRoot;if(o=s(e,"object"==typeof i&&null!==i?i:r[t]),null!==o)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=g,d=g,u=function(e){var t=b(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},h=function(e){var t=b(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},p=function(e){3==(t=b(e)).length&&t.push(255);var t,o=255==t[3],r=m(t[0]),i=m(t[1]),n=m(t[2]),a=function(e,t,o,r){var i=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=i.indexOf(e)&&-1!=i.indexOf(t)&&-1!=i.indexOf(o)&&-1!=i.indexOf(r)}(r,i,n,t=m(Math.round(t[3])));return o?a?"#"+r.charAt(0)+i.charAt(0)+n.charAt(0):"#"+r+i+n:a?"#"+r.charAt(0)+i.charAt(0)+n.charAt(0)+t.charAt(0):"#"+r+i+n+t},f=function(e){var t=b(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function g(e){var t=b(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function b(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),o=t.length;if(3==o||4==o){var r=v(t[0]),i=v(t[1]),n=v(t[2]),a=3==o?255:v(t[3]);if(isNaN(r)||isNaN(i)||isNaN(n)||isNaN(a))return;return[r,i,n,a]}}(e)||function(e){var t=e.replace(/^#/,""),o=t.length;if(6==o||8==o){var r=v(t.slice(0,2)),i=v(t.slice(2,4)),n=v(t.slice(4,6)),a=6==o?255:v(t.slice(6,8));if(isNaN(r)||isNaN(i)||isNaN(n)||isNaN(a))return;return[r,i,n,a]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=y(t[0],!0),r=y(t[1],!0),i=y(t[2],!0);if(-1!=o&&-1!=r&&-1!=i)return[o,r,i,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=y(t[0],!0),r=y(t[1],!0),i=y(t[2],!0),n=y(255*t[3]);if(-1!=o&&-1!=r&&-1!=i&&-1!=n)return[o,r,i,n]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=y(null!=e.r?e.r:null!=e.red?e.red:0,!0),o=y(null!=e.g?e.g:null!=e.green?e.green:0,!0),r=y(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),i=y(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=o&&-1!=r&&-1!=i)return[t,o,r,i]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=y(e[0],!0),o=y(e[1],!0),r=y(e[2],!0),i=y(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=o&&-1!=r&&-1!=i)return[t,o,r,i]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function m(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function v(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function y(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=d,c.obj=u,c.css=h,c.hex=p,c.num=f;var k=1/12.92;function x(e){return Math.pow((e+.055)/1.055,2.4)}function w(e){var t=e[0]/255,o=e[1]/255,r=e[2]/255;return.2126*(t<=.03928?t*k:x(t))+.7152*(o<=.03928?o*k:x(o))+.0722*(r<=.03928?r*k:x(r))}function _(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var o=parseInt(e,16);return[o>>16,o>>8&255,255&o,t]}function S(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(w(e),w(t))}function M(e,t){return S(_(e),_(t))}function L(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const N=/\[object Object\]/,A=(e,t)=>{"string"==typeof e&&N.test(e)||t()},D=(e,t)=>{"string"==typeof e&&""===e||t()},E=(e,t)=>{(0,n.b)()&&(n.L.debug([e,t]),n.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},O=(e,t,o,r={})=>{var i,n;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==o&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof r.afterPatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("afterPatch",r.afterPatch)),"function"==typeof r.beforePatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("beforePatch",r.beforePatch)),e.nextState.set(t,o),(e=>{var t,o,r;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,o)=>{var r;const i=t.get("beforePatch");"function"==typeof i&&i(null===(r=e.nextState)||void 0===r?void 0:r.get(o),e.nextState,e,o)})),(null===(o=e.nextState)||void 0===o?void 0:o.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(r=e.nextHooks)||void 0===r||r.forEach(((t,o)=>{const r=t.get("afterPatch");"function"==typeof r&&r(e.state[o],e.state,e,o)}))),delete e.nextHooks})(e))},$=(e,t,o,r,n,a={})=>{o(n)?O(e,t,n,null==a?void 0:a.hooks):void 0===n||null===n&&(void 0===(null==a?void 0:a.required)||!1===(null==a?void 0:a.required))?O(e,t,null==a?void 0:a.defaultValue,null==a?void 0:a.hooks):(void 0!==(null==a?void 0:a.required)&&!1!==(null==a?void 0:a.required)||r.add(null),((e,t,o,r)=>{(0,i.d)(`[${e.constructor.name}] Der Property-Wert (${o}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(r).join(", ")}`)})(e,t,n,r))},T=(e,t,o,r)=>{$(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),o,r)},H=(e,t,o,r={})=>{const i="number"==typeof r.minLength?null==r?void 0:r.minLength:0;$(e,t,(e=>"string"==typeof e&&e.length>=i&&(void 0===(null==r?void 0:r.maxLength)||e.length<=r.maxLength)),new Set(["String"]),o,r)},C=(e,t,o,r)=>{$(e,t,(e=>"number"==typeof e&&(void 0===(null==r?void 0:r.min)||"number"==typeof(null==r?void 0:r.min)&&e>=r.min)&&(void 0===(null==r?void 0:r.max)||"number"==typeof(null==r?void 0:r.max)&&e<=r.max)),new Set(["Number"]),o,r)},q=(e,t,o,r,i=(e=>e==e),a={})=>{D(r,(()=>{A(r,(()=>{void 0===r&&(r=[]);try{try{r=J(r)}catch(e){}if(Array.isArray(r)){const l=r.find((e=>!o(e)));void 0===l&&i(r)?O(e,t,r,a.hooks):A(l,(()=>{throw n.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else A(r,(()=>{throw n.L.debug(r),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){n.L.debug(e)}}))}))},R=/^(true|false)$/,j=/^-?(0|[1-9]\d*)$/,z=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,P=e=>{const t=typeof e,o=`${e}`;if("string"==typeof e)if(R.test(e))e="true"===e;else if(j.test(e))e=parseInt(e);else if(z.test(e))e=parseFloat(e);else if(B.test(e))try{e=J(e)}catch(e){}return t!==typeof e&&(0,i.d)(`You have used a stringified property value (${o} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},I=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw n.L.warn(["stringifyJson",e]),n.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},B=/^[{[]/,J=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(B.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){n.L.warn(["parseJson",e]),n.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},F=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,W=e=>"string"==typeof e?e:F(e),K=(e,t)=>s(e,t||(0,n.g)()),U=(e,t)=>l(e,t||(0,n.g)());let V=null;const Y=()=>(V=V||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,n.g)().body,level:"Fail",score:1},V),X=/(\d+, ){3}0\)/,G=(e,t=Y())=>{const o=getComputedStyle(e),r=X.test(o.backgroundColor)?t.backgroundColor:c.hex(o.backgroundColor),i=X.test(o.color)?t.color:c.hex(o.color),a=M(r,i),l={backgroundColor:r,color:i,domNode:e,level:L(a),score:a};return a<4.5&&n.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},Q=(e,t=Y())=>{t.domNode instanceof HTMLElement&&(t=G(t.domNode,t));const o=t.domNode.querySelector(e);if(null===o){const o=t.domNode.querySelectorAll('[class="hydrated"]');for(let r=0;r<o.length&&(t.domNode=o[r],null===(t=Q(e,t)).domNode);r++);return t}return G(o,t)},Z=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,n.a)().pageYOffset-50}),e.focus()):(0,i.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ee=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,i.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const o=`${t}`;t=e,e=o}if("string"==typeof e){const o=K(e,t);o instanceof HTMLElement?Z(o):(0,i.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,i.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class te{static queryHtmlElementColors(e,t,o=!1,r=!0){let i=null;if(!0===o||!1===te.executionLock)if(!1===o&&(te.cache.clear(),te.cache.set(t.domNode,t),te.executionLock=!0,!0===r&&n.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)i=t;else{const o=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)o.add(e[t])}const r=t.domNode;if("function"==typeof r.assignedNodes){const e=r.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&o.add(e[t])}const n=t.domNode.children;for(let e=0;e<n.length;e++)o.add(n[e]);const a=Array.from(o);for(let l=0;l<a.length;l++){let o=te.cache.get(a[l]);void 0===o&&(o=G(a[l],t)),te.cache.set(a[l],o);const r=te.queryHtmlElementColors(e,o,!0,!1);if(null!==r){i=r;break}}}else n.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===o&&(!0===r&&n.L.debug(`[KoliBriUtils] Color contrast analysis finished (${te.cache.size} DOM elements are analysed).`),te.executionLock=!1,te.cache.clear()),i}}te.executionLock=!1,te.cache=new Map;class oe{}oe.patchTheme=r.p,oe.patchThemeTag=r.a,oe.querySelector=K,oe.querySelectorAll=U,oe.scrollByHTMLElement=Z,oe.scrollBySelector=ee,oe.stringifyJson=I}}]);