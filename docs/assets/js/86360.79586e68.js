/*! For license information please see 86360.79586e68.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[86360],{86360:(e,t,n)=>{n.r(t),n.d(t,{kol_quote:()=>c});var o=n(86104),r=n(60848),i=n(25108),a=n(15752),l=n(63312);const s=["block","inline"],c=class{constructor(e){(0,o.r)(this,e),this._label=void 0,this._href=void 0,this._quote=void 0,this._variant="inline",this.state={_href:"",_quote:"",_variant:"inline"}}validateLabel(e){(0,i.v)(this,e)}validateHref(e){(0,a.i)(this,"_href",e,{required:!0})}validateQuote(e){(0,a.i)(this,"_quote",e,{required:!0})}validateVariant(e){(0,a.w)(this,"_variant",(e=>"string"==typeof e&&s.includes(e)),new Set(s),e)}componentWillLoad(){this.validateHref(this._href),this.validateLabel(this._label),this.validateQuote(this._quote),this.validateVariant(this._variant)}render(){const e=(0,l.s)(this.state._quote);return(0,o.h)(o.H,{key:"06071e4062c3dad31dc54678b3809cda9d97bec3",class:"kol-quote"},(0,o.h)("figure",{key:"a1ddfd8830f510be2acb2511e142168e9c57435a",class:{[this.state._variant]:!0}},"block"===this.state._variant?(0,o.h)("blockquote",{cite:this.state._href},this.state._quote,(0,o.h)("span",{"aria-hidden":e?void 0:"true",hidden:!e},(0,o.h)("slot",{name:"expert"}))):(0,o.h)("q",{cite:this.state._href},this.state._quote,(0,o.h)("span",{"aria-hidden":e?void 0:"true",hidden:!e},(0,o.h)("slot",{name:"expert"}))),"string"==typeof this.state._label&&this.state._label.length>0&&(0,o.h)("figcaption",{key:"27b79e60e46de28765eefaf8859bf54ab2cc0596"},(0,o.h)("cite",{key:"3522b8bdb372c71e24d1bed45616326f535e7a4f"},(0,o.h)(r.h,{key:"3a5fb98869d14d343a7b184d887d057ae6e6cc2b",_href:this.state._href,_label:this.state._label,_target:"_blank"})))))}static get watchers(){return{_label:["validateLabel"],_href:["validateHref"],_quote:["validateQuote"],_variant:["validateVariant"]}}};c.style={default:"@charset \"UTF-8\";\n/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed;\n    opacity: 0.5;\n    outline: none;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  :host {\n    font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n  }\n  cite,\n  figure,\n  q + figcaption {\n    display: inline;\n    margin: 0;\n    padding: 0;\n  }\n  blockquote:before {\n    content: open-quote;\n  }\n  blockquote::after {\n    content: close-quote;\n  }\n  cite:before {\n    content: \"\u2014\";\n  }\n  .block cite:before {\n    padding-right: 0.5em;\n  }\n  .inline cite:before {\n    padding: 0.5em;\n  }\n}"}},25108:(e,t,n)=>{n.d(t,{a:()=>u,b:()=>l,c:()=>s,h:()=>r,v:()=>d});var o=n(15752);const r=[0,1,2,3,4,5,6],i=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,a=/^\d+$/;function l(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(i))||void 0===t?void 0:t.length)||0}(e)>=t}function s(e){return a.test(e)}const c=new Set(["string"]),d=(e,t,n={})=>{(0,o.w)(e,"_label",(e=>"string"==typeof e),c,t,function(e){var t;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(t,n,r,i)=>{var a,c;"function"==typeof(null===(a=e.hooks)||void 0===a?void 0:a.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(t,n,r,i)),"string"==typeof t&&!1===l(t,3)&&!1===s(t)&&(0,o.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,o.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}})}(n))},u=d},15752:(e,t,n)=>{n.d(t,{A:()=>de,B:()=>ae,C:()=>ue,D:()=>ee,K:()=>fe,a:()=>a,b:()=>V,c:()=>p,d:()=>_,e:()=>m,f:()=>f,g:()=>Z,h:()=>v,i:()=>F,j:()=>d,k:()=>U,l:()=>u,m:()=>X,n:()=>s,o:()=>R,p:()=>ne,q:()=>J,r:()=>E,s:()=>B,t:()=>W,u:()=>g,v:()=>ie,w:()=>K,x:()=>oe,y:()=>re,z:()=>he});var o=n(1500),r=n(4144);const i=new Set,a=(e,t)=>{(!1===i.has(e)||(null==t?void 0:t.force))&&(i.add(e),r.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\u270b a11y",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #09f"}))},l=new Set,s=(e,t)=>{(!1===l.has(e)||(null==t?void 0:t.force))&&(l.add(e),r.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udd25 deprecated",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f00"}))},c=new Set,d=(e,t)=>{(!1===c.has(e)||(null==t?void 0:t.force))&&(c.add(e),r.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcbb dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},u=(e,t)=>{(!1===c.has(e)||(null==t?void 0:t.force))&&(c.add(e),r.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"\u26a0\ufe0f dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},h=new Set,f=(e,t=!1,n)=>{(!1===h.has(e)||(null==n?void 0:n.force))&&(h.add(e),e+=!0===t?" \u2705":"",r.L.debug([e].concat((null==n?void 0:n.details)||[]),{classifier:"\ud83c\udf1f feature",forceLog:!!(null==n?void 0:n.force),overwriteStyle:"; background-color: #309"}))};d("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const b=new Set,g=(e,t)=>{(!1===b.has(e)||(null==t?void 0:t.force))&&(b.add(e),r.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcd1 ui/ux",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #060;"}))},p=()=>{a('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},m=e=>{"string"==typeof e&&""!==e||a("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},v=(e,t=8)=>{t>7&&g(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)};var y=.2126,w=.7152,k=.0722,x=1/12.92;function S(e){return Math.pow((e+.055)/1.055,2.4)}function L(e){var t=e[0]/255,n=e[1]/255,o=e[2]/255,r=t<=.03928?t*x:S(t),i=n<=.03928?n*x:S(n),a=o<=.03928?o*x:S(o);return r*y+i*w+a*k}function N(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function A(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(L(e),L(t))}function _(e,t){return A(N(e),N(t))}function q(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}var z={exports:{}};function M(e){var t=O(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function O(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var o=j(t[0]),r=j(t[1]),i=j(t[2]),a=3==n?255:j(t[3]);if(isNaN(o)||isNaN(r)||isNaN(i)||isNaN(a))return;return[o,r,i,a]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var o=j(t.slice(0,2)),r=j(t.slice(2,4)),i=j(t.slice(4,6)),a=6==n?255:j(t.slice(6,8));if(isNaN(o)||isNaN(r)||isNaN(i)||isNaN(a))return;return[o,r,i,a]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=C(t[0],!0),o=C(t[1],!0),r=C(t[2],!0);if(-1!=n&&-1!=o&&-1!=r)return[n,o,r,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=C(t[0],!0),o=C(t[1],!0),r=C(t[2],!0),i=C(255*t[3]);if(-1!=n&&-1!=o&&-1!=r&&-1!=i)return[n,o,r,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=C(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=C(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=C(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),r=C(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=r)return[t,n,o,r]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=C(e[0],!0),n=C(e[1],!0),o=C(e[2],!0),r=C(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=r)return[t,n,o,r]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function T(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function j(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function C(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}z.exports=M,z.exports.arr=M,z.exports.obj=function(e){var t=O(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},z.exports.css=function(e){var t=O(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},z.exports.hex=function(e){3==(t=O(e)).length&&t.push(255);var t,n=255==t[3],o=T(t[0]),r=T(t[1]),i=T(t[2]),a=function(e,t,n,o){var r=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=r.indexOf(e)&&-1!=r.indexOf(t)&&-1!=r.indexOf(n)&&-1!=r.indexOf(o)}(o,r,i,t=T(Math.round(t[3])));return n?a?"#"+o.charAt(0)+r.charAt(0)+i.charAt(0):"#"+o+r+i:a?"#"+o.charAt(0)+r.charAt(0)+i.charAt(0)+t.charAt(0):"#"+o+r+i+t},z.exports.num=function(e){var t=O(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};const E=z.exports,H=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},P=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;H(n,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const r=o[t].shadowRoot;H(n,P(e,"object"==typeof r&&null!==r?r:o[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},D=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const r=o[t].shadowRoot;if(n=D(e,"object"==typeof r&&null!==r?r:o[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")},$=/\[object Object\]/,R=(e,t)=>{"string"==typeof e&&$.test(e)||t()},W=(e,t)=>{"string"==typeof e&&""===e||t()},J=(e,t)=>{(0,r.a)()&&(r.L.debug([e,t]),r.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},B=(e,t,n,o={})=>{var r,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(r=e.nextHooks.get(t))||void 0===r||r.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",o.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var o;const r=t.get("beforePatch");"function"==typeof r&&r(null===(o=e.nextState)||void 0===o?void 0:o.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,n)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e)},I=(e,t,n,o)=>{d(`[${e.constructor.name}] Der Property-Wert (${n}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)};function K(e,t,n,o,r,i={}){n(r)?B(e,t,r,i.hooks):void 0===r&&!0!==i.required&&n(i.defaultValue)?B(e,t,i.defaultValue,i.hooks):(i.required||o.add(null),I(e,t,r,o))}const V=(e,t,n,o)=>{K(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,o)},F=(e,t,n,o={})=>{const r="number"==typeof o.minLength?null==o?void 0:o.minLength:0;K(e,t,(e=>"string"==typeof e&&e.length>=r&&(void 0===(null==o?void 0:o.maxLength)||e.length<=o.maxLength)),new Set(["String"]),n,o)},U=(e,t,n,o)=>{K(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),n,o)},Z=(e,t,n,o,i=(e=>e==e),a={})=>{W(o,(()=>{R(o,(()=>{void 0===o&&(o=[]);try{try{o=ne(o)}catch(e){}if(Array.isArray(o)){const l=o.find((e=>!n(e)));void 0===l&&i(o)?B(e,t,o,a.hooks):R(l,(()=>{throw r.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else R(o,(()=>{throw r.L.debug(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){r.L.debug(e)}}))}))},Q=/^(true|false)$/,Y=/^-?(0|[1-9]\d*)$/,G=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,X=e=>{const t=typeof e,n=`${e}`;if("string"==typeof e)if(Q.test(e))e="true"===e;else if(Y.test(e))e=parseInt(e);else if(G.test(e))e=parseFloat(e);else if(te.test(e))try{e=ne(e)}catch(e){}return t!==typeof e&&d(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},ee=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(k){throw r.L.warn(["stringifyJson",e]),r.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},te=/^[{[]/,ne=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(k){if(te.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(k){r.L.warn(["parseJson",e]),r.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},oe=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,re=e=>"string"==typeof e?e:oe(e),ie=(e,t)=>D(e,t||(0,r.g)()),ae=(e,t)=>P(e,t||(0,r.g)());let le=null;const se=()=>(le=le||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,r.g)().body,level:"Fail",score:1},le),ce=/(\d+, ){3}0\)/,de=(e,t=se())=>{const n=getComputedStyle(e),o=ce.test(n.backgroundColor)?t.backgroundColor:E.hex(n.backgroundColor),i=ce.test(n.color)?t.color:E.hex(n.color),a=_(o,i),l={backgroundColor:o,color:i,domNode:e,level:q(a),score:a};return a<4.5&&r.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},ue=(e,t=se())=>{t.domNode instanceof HTMLElement&&(t=de(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<n.length&&(t.domNode=n[o],null===(t=ue(e,t)).domNode);o++);return t}return de(n,t)};class he{static queryHtmlElementColors(e,t,n=!1,o=!0){let i=null;if(!0===n||!1===he.executionLock)if(!1===n&&(he.cache.clear(),he.cache.set(t.domNode,t),he.executionLock=!0,!0===o&&r.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)i=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const r=t.domNode.children;for(let e=0;e<r.length;e++)n.add(r[e]);const a=Array.from(n);for(let l=0;l<a.length;l++){let n=he.cache.get(a[l]);void 0===n&&(n=de(a[l],t)),he.cache.set(a[l],n);const o=he.queryHtmlElementColors(e,n,!0,!1);if(null!==o){i=o;break}}}else r.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===o&&r.L.debug(`[KoliBriUtils] Color contrast analysis finished (${he.cache.size} DOM elements are analysed).`),he.executionLock=!1,he.cache.clear()),i}}he.executionLock=!1,he.cache=new Map;class fe{}fe.getCssStyle=o.p,fe.patchTheme=o.x,fe.patchThemeTag=o.z,fe.querySelector=ie,fe.querySelectorAll=ae,fe.stringifyJson=ee}}]);