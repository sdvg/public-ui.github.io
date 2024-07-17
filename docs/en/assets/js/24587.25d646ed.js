/*! For license information please see 24587.25d646ed.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[24587],{9824:(e,n,t)=>{t.d(n,{t:()=>i});var o=t(77352),r=t(63312);let i=(e,n)=>{var t;return(null!==(t=(0,o.g)())&&void 0!==t?t:(0,o.i)("de")).translate(e,n)};"test"===r.p&&(i=e=>e)},24587:(e,n,t)=>{t.r(n),t.d(n,{kol_version:()=>l});var o=t(86104),r=t(9824),i=t(60848),a=t(25108);const l=class{constructor(e){(0,o.r)(this,e),this._label=void 0,this.state={_label:"0.0.0-alpha.0"}}render(){return(0,o.h)(o.H,{key:"a4c3e7f9b27e9839b0d55418532cdbf2eebed285",class:"kol-version"},(0,o.h)(i.w,{key:"b22098b308a2b0513068a25ff758368c116efdde",_color:"#bec5c9",_icons:{left:{icon:"codicon codicon-versions",label:(0,r.t)("kol-version")}},_label:this.state._label}))}validateLabel(e){(0,a.v)(this,e,{required:!0})}componentWillLoad(){this.validateLabel(this._label)}static get watchers(){return{_label:["validateLabel"]}}};l.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed;\n    opacity: 0.5;\n    outline: none;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  :host {\n    font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n  }\n}"}},25108:(e,n,t)=>{t.d(n,{a:()=>u,b:()=>l,c:()=>s,h:()=>r,v:()=>d});var o=t(15752);const r=[0,1,2,3,4,5,6],i=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,a=/^\d+$/;function l(e,n=1){return function(e){var n;return"string"==typeof e&&(null===(n=e.match(i))||void 0===n?void 0:n.length)||0}(e)>=n}function s(e){return a.test(e)}const c=new Set(["string"]),d=(e,n,t={})=>{(0,o.w)(e,"_label",(e=>"string"==typeof e),c,n,function(e){var n;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(n,t,r,i)=>{var a,c;"function"==typeof(null===(a=e.hooks)||void 0===a?void 0:a.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(n,t,r,i)),"string"==typeof n&&!1===l(n,3)&&!1===s(n)&&(0,o.a)(`The heading or label ("${n}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof n&&n.length>80&&(0,o.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(n=e.hooks)||void 0===n?void 0:n.beforePatch}})}(t))},u=d},15752:(e,n,t)=>{t.d(n,{A:()=>de,B:()=>ae,C:()=>ue,D:()=>ee,K:()=>fe,a:()=>a,b:()=>F,c:()=>p,d:()=>z,e:()=>m,f:()=>f,g:()=>Z,h:()=>v,i:()=>V,j:()=>d,k:()=>U,l:()=>u,m:()=>X,n:()=>s,o:()=>R,p:()=>te,q:()=>J,r:()=>P,s:()=>B,t:()=>W,u:()=>g,v:()=>ie,w:()=>K,x:()=>oe,y:()=>re,z:()=>he});var o=t(1500),r=t(4144);const i=new Set,a=(e,n)=>{(!1===i.has(e)||(null==n?void 0:n.force))&&(i.add(e),r.L.debug([e].concat((null==n?void 0:n.details)||[]),{classifier:"\u270b a11y",forceLog:!!(null==n?void 0:n.force),overwriteStyle:"; background-color: #09f"}))},l=new Set,s=(e,n)=>{(!1===l.has(e)||(null==n?void 0:n.force))&&(l.add(e),r.L.warn([e].concat((null==n?void 0:n.details)||[]),{classifier:"\ud83d\udd25 deprecated",forceLog:!!(null==n?void 0:n.force),overwriteStyle:"; background-color: #f00"}))},c=new Set,d=(e,n)=>{(!1===c.has(e)||(null==n?void 0:n.force))&&(c.add(e),r.L.debug([e].concat((null==n?void 0:n.details)||[]),{classifier:"\ud83d\udcbb dev",forceLog:!!(null==n?void 0:n.force),overwriteStyle:"; background-color: #f09"}))},u=(e,n)=>{(!1===c.has(e)||(null==n?void 0:n.force))&&(c.add(e),r.L.warn([e].concat((null==n?void 0:n.details)||[]),{classifier:"\u26a0\ufe0f dev",forceLog:!!(null==n?void 0:n.force),overwriteStyle:"; background-color: #f09"}))},h=new Set,f=(e,n=!1,t)=>{(!1===h.has(e)||(null==t?void 0:t.force))&&(h.add(e),e+=!0===n?" \u2705":"",r.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83c\udf1f feature",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #309"}))};d("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const b=new Set,g=(e,n)=>{(!1===b.has(e)||(null==n?void 0:n.force))&&(b.add(e),r.L.debug([e].concat((null==n?void 0:n.details)||[]),{classifier:"\ud83d\udcd1 ui/ux",forceLog:!!(null==n?void 0:n.force),overwriteStyle:"; background-color: #060;"}))},p=()=>{a('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},m=e=>{"string"==typeof e&&""!==e||a("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},v=(e,n=8)=>{n>7&&g(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)};var y=.2126,w=.7152,k=.0722,S=1/12.92;function x(e){return Math.pow((e+.055)/1.055,2.4)}function L(e){var n=e[0]/255,t=e[1]/255,o=e[2]/255,r=n<=.03928?n*S:x(n),i=t<=.03928?t*S:x(t),a=o<=.03928?o*S:x(o);return r*y+i*w+a*k}function N(e){var n=255;8===(e=e.replace(/^#/,"")).length&&(n=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(n=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var t=parseInt(e,16);return[t>>16,t>>8&255,255&t,n]}function A(e,n){return function(e,n){return(Math.max(e,n)+.05)/(Math.min(e,n)+.05)}(L(e),L(n))}function z(e,n){return A(N(e),N(n))}function M(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}var O={exports:{}};function T(e){var n=j(e);return 3==n.length?n.concat(255):(n[3]=Math.round(n[3]),n)}function j(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var n=e.replace(/^#/,""),t=n.length;if(3==t||4==t){var o=E(n[0]),r=E(n[1]),i=E(n[2]),a=3==t?255:E(n[3]);if(isNaN(o)||isNaN(r)||isNaN(i)||isNaN(a))return;return[o,r,i,a]}}(e)||function(e){var n=e.replace(/^#/,""),t=n.length;if(6==t||8==t){var o=E(n.slice(0,2)),r=E(n.slice(2,4)),i=E(n.slice(4,6)),a=6==t?255:E(n.slice(6,8));if(isNaN(o)||isNaN(r)||isNaN(i)||isNaN(a))return;return[o,r,i,a]}}(e)||function(e){if("rgb("==e.substr(0,4)){var n=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),t=q(n[0],!0),o=q(n[1],!0),r=q(n[2],!0);if(-1!=t&&-1!=o&&-1!=r)return[t,o,r,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var n=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),t=q(n[0],!0),o=q(n[1],!0),r=q(n[2],!0),i=q(255*n[3]);if(-1!=t&&-1!=o&&-1!=r&&-1!=i)return[t,o,r,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var n=q(null!=e.r?e.r:null!=e.red?e.red:0,!0),t=q(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=q(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),r=q(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=n&&-1!=t&&-1!=o&&-1!=r)return[n,t,o,r]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var n=q(e[0],!0),t=q(e[1],!0),o=q(e[2],!0),r=q(null!=e[3]?e[3]:255,!0);if(-1!=n&&-1!=t&&-1!=o&&-1!=r)return[n,t,o,r]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function C(e){var n=e.toString(16);return 1==n.length?"0"+n:n}function E(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function q(e,n){return"number"!=typeof e||!0===n&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}O.exports=T,O.exports.arr=T,O.exports.obj=function(e){var n=j(e);return{r:n[0],g:n[1],b:n[2],a:3==n.length?255:Math.round(n[3])}},O.exports.css=function(e){var n=j(e);return 3==n.length&&n.push(255),255==n[3]?"rgb("+n[0]+", "+n[1]+", "+n[2]+")":0==n[3]?"rgba("+n[0]+", "+n[1]+", "+n[2]+", 0)":"rgba("+n[0]+", "+n[1]+", "+n[2]+", "+String(n[3]/255).substr(1)+")"},O.exports.hex=function(e){3==(n=j(e)).length&&n.push(255);var n,t=255==n[3],o=C(n[0]),r=C(n[1]),i=C(n[2]),a=function(e,n,t,o){var r=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=r.indexOf(e)&&-1!=r.indexOf(n)&&-1!=r.indexOf(t)&&-1!=r.indexOf(o)}(o,r,i,n=C(Math.round(n[3])));return t?a?"#"+o.charAt(0)+r.charAt(0)+i.charAt(0):"#"+o+r+i:a?"#"+o.charAt(0)+r.charAt(0)+i.charAt(0)+n.charAt(0):"#"+o+r+i+n},O.exports.num=function(e){var n=j(e);return 3==n.length?n.push(255):n[3]=Math.round(n[3]),(n[3]<<24>>>0|n[0]<<16|n[1]<<8|n[2])>>>0};const P=O.exports,D=(e,n)=>{n.forEach((n=>{!1===e.has(n)&&e.add(n)}))},H=(e,n=document)=>{if(n instanceof Document||n instanceof HTMLElement||n instanceof ShadowRoot){const t=new Set;D(t,n.querySelectorAll(e));const o=n.querySelectorAll('[class*="hydrated"]');for(let n=0;n<o.length;n++){const r=o[n].shadowRoot;D(t,H(e,"object"==typeof r&&null!==r?r:o[n]))}return Array.from(t)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},$=(e,n=document)=>{if(n instanceof Document||n instanceof HTMLElement||n instanceof ShadowRoot){let t=n.querySelector(e);if(null===t){const o=n.querySelectorAll('[class*="hydrated"]');for(let n=0;n<o.length;n++){const r=o[n].shadowRoot;if(t=$(e,"object"==typeof r&&null!==r?r:o[n]),null!==t)break}}return t}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")},_=/\[object Object\]/,R=(e,n)=>{"string"==typeof e&&_.test(e)||n()},W=(e,n)=>{"string"==typeof e&&""===e||n()},J=(e,n)=>{(0,r.a)()&&(r.L.debug([e,n]),r.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:n,writable:!1})},B=(e,n,t,o={})=>{var r,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextHooks.get(n)instanceof Map==0&&e.nextHooks.set(n,new Map),"function"==typeof o.afterPatch&&(null===(r=e.nextHooks.get(n))||void 0===r||r.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(i=e.nextHooks.get(n))||void 0===i||i.set("beforePatch",o.beforePatch)),e.nextState.set(n,t),(e=>{var n,t,o;null===(n=e.nextHooks)||void 0===n||n.forEach(((n,t)=>{var o;const r=n.get("beforePatch");"function"==typeof r&&r(null===(o=e.nextState)||void 0===o?void 0:o.get(t),e.nextState,e,t)})),(null===(t=e.nextState)||void 0===t?void 0:t.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((n,t)=>{const o=n.get("afterPatch");"function"==typeof o&&o(e.state[t],e.state,e,t)}))),delete e.nextHooks})(e)},I=(e,n,t,o)=>{d(`[${e.constructor.name}] Der Property-Wert (${t}) f\xfcr '${n}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)};function K(e,n,t,o,r,i={}){t(r)?B(e,n,r,i.hooks):void 0===r&&!0!==i.required&&t(i.defaultValue)?B(e,n,i.defaultValue,i.hooks):(i.required||o.add(null),I(e,n,r,o))}const F=(e,n,t,o)=>{K(e,n,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),t,o)},V=(e,n,t,o={})=>{const r="number"==typeof o.minLength?null==o?void 0:o.minLength:0;K(e,n,(e=>"string"==typeof e&&e.length>=r&&(void 0===(null==o?void 0:o.maxLength)||e.length<=o.maxLength)),new Set(["String"]),t,o)},U=(e,n,t,o)=>{K(e,n,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),t,o)},Z=(e,n,t,o,i=(e=>e==e),a={})=>{W(o,(()=>{R(o,(()=>{void 0===o&&(o=[]);try{try{o=te(o)}catch(e){}if(Array.isArray(o)){const l=o.find((e=>!t(e)));void 0===l&&i(o)?B(e,n,o,a.hooks):R(l,(()=>{throw r.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else R(o,(()=>{throw r.L.debug(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){r.L.debug(e)}}))}))},Y=/^(true|false)$/,G=/^-?(0|[1-9]\d*)$/,Q=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,X=e=>{const n=typeof e,t=`${e}`;if("string"==typeof e)if(Y.test(e))e="true"===e;else if(G.test(e))e=parseInt(e);else if(Q.test(e))e=parseFloat(e);else if(ne.test(e))try{e=te(e)}catch(e){}return n!==typeof e&&d(`You have used a stringified property value (${t} to ${JSON.stringify(e)}) which type switched from ${n} to ${typeof e}!`),e},ee=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(k){throw r.L.warn(["stringifyJson",e]),r.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},ne=/^[{[]/,te=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(k){if(ne.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(k){r.L.warn(["parseJson",e]),r.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},oe=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,re=e=>"string"==typeof e?e:oe(e),ie=(e,n)=>$(e,n||(0,r.g)()),ae=(e,n)=>H(e,n||(0,r.g)());let le=null;const se=()=>(le=le||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,r.g)().body,level:"Fail",score:1},le),ce=/(\d+, ){3}0\)/,de=(e,n=se())=>{const t=getComputedStyle(e),o=ce.test(t.backgroundColor)?n.backgroundColor:P.hex(t.backgroundColor),i=ce.test(t.color)?n.color:P.hex(t.color),a=z(o,i),l={backgroundColor:o,color:i,domNode:e,level:M(a),score:a};return a<4.5&&r.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},ue=(e,n=se())=>{n.domNode instanceof HTMLElement&&(n=de(n.domNode,n));const t=n.domNode.querySelector(e);if(null===t){const t=n.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<t.length&&(n.domNode=t[o],null===(n=ue(e,n)).domNode);o++);return n}return de(t,n)};class he{static queryHtmlElementColors(e,n,t=!1,o=!0){let i=null;if(!0===t||!1===he.executionLock)if(!1===t&&(he.cache.clear(),he.cache.set(n.domNode,n),he.executionLock=!0,!0===o&&r.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===n.domNode)i=n;else{const t=new Set;if(n.domNode.shadowRoot){const e=n.domNode.shadowRoot.children;for(let n=0;n<e.length;n++)t.add(e[n])}const o=n.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let n=0;n<e.length;n++)e[n]instanceof HTMLElement&&t.add(e[n])}const r=n.domNode.children;for(let e=0;e<r.length;e++)t.add(r[e]);const a=Array.from(t);for(let l=0;l<a.length;l++){let t=he.cache.get(a[l]);void 0===t&&(t=de(a[l],n)),he.cache.set(a[l],t);const o=he.queryHtmlElementColors(e,t,!0,!1);if(null!==o){i=o;break}}}else r.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===t&&(!0===o&&r.L.debug(`[KoliBriUtils] Color contrast analysis finished (${he.cache.size} DOM elements are analysed).`),he.executionLock=!1,he.cache.clear()),i}}he.executionLock=!1,he.cache=new Map;class fe{}fe.getCssStyle=o.p,fe.patchTheme=o.x,fe.patchThemeTag=o.z,fe.querySelector=ie,fe.querySelectorAll=ae,fe.stringifyJson=ee}}]);