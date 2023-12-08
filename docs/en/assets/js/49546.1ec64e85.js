/*! For license information please see 49546.1ec64e85.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[49546],{21491:(t,e,n)=>{n.d(e,{a:()=>i,b:()=>g,c:()=>p,d:()=>l,e:()=>f,f:()=>d,g:()=>s,u:()=>h});var o=n(9724);const r=new Set,i=(t,e)=>{(!1===r.has(t)||(null==e?void 0:e.force))&&(r.add(t),o.L.debug([t].concat((null==e?void 0:e.details)||[]),{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},a=new Set,l=(t,e)=>{(!1===a.has(t)||(null==e?void 0:e.force))&&(a.add(t),o.L.debug([t].concat((null==e?void 0:e.details)||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},s=(t,e)=>{(!1===a.has(t)||(null==e?void 0:e.force))&&(a.add(t),o.L.warn([t].concat((null==e?void 0:e.details)||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},c=new Set,d=(t,e=!1,n)=>{(!1===c.has(t)||(null==n?void 0:n.force))&&(c.add(t),t+=!0===e?" \u2705":"",o.L.debug([t].concat((null==n?void 0:n.details)||[]),{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};l("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const u=new Set,h=(t,e)=>{(!1===u.has(t)||(null==e?void 0:e.force))&&(u.add(t),o.L.debug([t].concat((null==e?void 0:e.details)||[]),{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},f=()=>{i('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},g=t=>{"string"==typeof t&&""!==t||i("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},p=(t,e=8)=>{e>7&&h(`[${t}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},23589:(t,e,n)=>{n.d(e,{a:()=>i,v:()=>a});var o=n(48167);const r=["left","right","top","bottom"],i=(t,e)=>{a(t,"_align",e)},a=(t,e,n)=>{(0,o.w)(t,e,(t=>"string"==typeof t&&r.includes(t)),new Set(r),n,{defaultValue:"top"})}},49546:(t,e,n)=>{n.r(e),n.d(e,{kol_abbr:()=>l});var o=n(78331),r=n(20013),i=n(11357),a=n(9724);const l=class{constructor(t){(0,o.r)(this,t),this.nonce=(0,a.n)(),this._label=void 0,this._tooltipAlign="top",this.state={_label:"\u2026",_tooltipAlign:"top"}}render(){return(0,o.h)(o.H,null,(0,o.h)("abbr",{"aria-labelledby":this.nonce,role:"definition",tabindex:"0",title:this.state._label},(0,o.h)("span",{title:""},(0,o.h)("slot",null))),(0,o.h)("kol-tooltip-wc",{_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._label}))}validateLabel(t){(0,r.v)(this,t)}validateTooltipAlign(t){(0,i.v)(this,t)}componentWillLoad(){this.validateLabel(this._label),this.validateTooltipAlign(this._tooltipAlign)}static get watchers(){return{_label:["validateLabel"],_tooltipAlign:["validateTooltipAlign"]}}};l.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\t:host > abbr {\n\t\tcursor: help;\n\t}\n}\n"}},20013:(t,e,n)=>{n.d(e,{a:()=>u,c:()=>s,h:()=>l,v:()=>d});var o=n(21491),r=n(48167);const i=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,a=/^\d+$/;function l(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(i))||void 0===e?void 0:e.length)||0}(t)>=e}function s(t){return a.test(t)}const c=new Set(["string"]),d=(t,e,n={})=>{(0,r.w)(t,"_label",(t=>"string"==typeof t),c,e,function(t){var e;return{hooks:{afterPatch:(e,n,r,i)=>{var a,c;"function"==typeof(null===(a=t.hooks)||void 0===a?void 0:a.afterPatch)&&(null===(c=t.hooks)||void 0===c||c.afterPatch(e,n,r,i)),"string"==typeof e&&!1===l(e,3)&&!1===s(e)&&(0,o.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,o.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}(n))},u=d},48167:(t,e,n)=>{n.d(e,{K:()=>ot,a:()=>q,b:()=>M,c:()=>$,d:()=>H,e:()=>D,f:()=>E,g:()=>O,h:()=>V,i:()=>U,j:()=>nt,k:()=>Z,l:()=>tt,m:()=>I,n:()=>Y,o:()=>_,p:()=>F,q:()=>et,r:()=>s,s:()=>C,t:()=>K,w:()=>j});var o=n(21491),r=n(9724);const i=(t,e)=>{e.forEach((e=>{!1===t.has(e)&&t.add(e)}))},a=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){const n=new Set;i(n,e.querySelectorAll(t));const o=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<o.length;e++){const r=o[e].shadowRoot;i(n,a(t,"object"==typeof r&&null!==r?r:o[e]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},l=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){let n=e.querySelector(t);if(null===n){const o=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<o.length;e++){const r=o[e].shadowRoot;if(n=l(t,"object"==typeof r&&null!==r?r:o[e]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var s=g,c=g,d=function(t){var e=p(t);return{r:e[0],g:e[1],b:e[2],a:3==e.length?255:Math.round(e[3])}},u=function(t){var e=p(t);return 3==e.length&&e.push(255),255==e[3]?"rgb("+e[0]+", "+e[1]+", "+e[2]+")":0==e[3]?"rgba("+e[0]+", "+e[1]+", "+e[2]+", 0)":"rgba("+e[0]+", "+e[1]+", "+e[2]+", "+String(e[3]/255).substr(1)+")"},h=function(t){3==(e=p(t)).length&&e.push(255);var e,n=255==e[3],o=b(e[0]),r=b(e[1]),i=b(e[2]),a=function(t,e,n,o){var r=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=r.indexOf(t)&&-1!=r.indexOf(e)&&-1!=r.indexOf(n)&&-1!=r.indexOf(o)}(o,r,i,e=b(Math.round(e[3])));return n?a?"#"+o.charAt(0)+r.charAt(0)+i.charAt(0):"#"+o+r+i:a?"#"+o.charAt(0)+r.charAt(0)+i.charAt(0)+e.charAt(0):"#"+o+r+i+e},f=function(t){var e=p(t);return 3==e.length?e.push(255):e[3]=Math.round(e[3]),(e[3]<<24>>>0|e[0]<<16|e[1]<<8|e[2])>>>0};function g(t){var e=p(t);return 3==e.length?e.concat(255):(e[3]=Math.round(e[3]),e)}function p(t){return"string"==typeof t?function(t){return"red"==t?[255,0,0]:"green"==t?[0,255,0]:"blue"==t?[0,0,255]:"black"==t?[0,0,0]:"white"==t?[255,255,255]:"cyan"==t?[0,255,255]:"gray"==t||"grey"==t?[128,128,128]:"magenta"==t||"pink"==t?[255,0,255]:"yellow"==t?[255,255,0]:void 0}(t=t.toLowerCase())||function(t){var e=t.replace(/^#/,""),n=e.length;if(3==n||4==n){var o=m(e[0]),r=m(e[1]),i=m(e[2]),a=3==n?255:m(e[3]);if(isNaN(o)||isNaN(r)||isNaN(i)||isNaN(a))return;return[o,r,i,a]}}(t)||function(t){var e=t.replace(/^#/,""),n=e.length;if(6==n||8==n){var o=m(e.slice(0,2)),r=m(e.slice(2,4)),i=m(e.slice(4,6)),a=6==n?255:m(e.slice(6,8));if(isNaN(o)||isNaN(r)||isNaN(i)||isNaN(a))return;return[o,r,i,a]}}(t)||function(t){if("rgb("==t.substr(0,4)){var e=(t=t.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=v(e[0],!0),o=v(e[1],!0),r=v(e[2],!0);if(-1!=n&&-1!=o&&-1!=r)return[n,o,r,255]}}(t)||function(t){if("rgba("==t.substr(0,5)){var e=(t=t.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=v(e[0],!0),o=v(e[1],!0),r=v(e[2],!0),i=v(255*e[3]);if(-1!=n&&-1!=o&&-1!=r&&-1!=i)return[n,o,r,i]}}(t)||[0,0,0,255]:function(t){if("[object Object]"===Object.prototype.toString.call(t)&&Object.getPrototypeOf(t)===Object.getPrototypeOf({})){var e=v(null!=t.r?t.r:null!=t.red?t.red:0,!0),n=v(null!=t.g?t.g:null!=t.green?t.green:0,!0),o=v(null!=t.b?t.b:null!=t.blue?t.blue:0,!0),r=v(null!=t.a?t.a:null!=t.alpha?t.alpha:255,!0);if(-1!=e&&-1!=n&&-1!=o&&-1!=r)return[e,n,o,r]}}(t)||function(t){if(Array.isArray(t)&&(3==t.length||4==t.length)){var e=v(t[0],!0),n=v(t[1],!0),o=v(t[2],!0),r=v(null!=t[3]?t[3]:255,!0);if(-1!=e&&-1!=n&&-1!=o&&-1!=r)return[e,n,o,r]}}(t)||function(t){if("number"==typeof t&&Math.floor(t)==t&&t<=4294967295&&t>=0)return[t>>16&255,t>>8&255,255&t,t>>24&255]}(t)||[0,0,0,255]}function b(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function m(t){return 1==t.length?parseInt(t+t,16):parseInt(t,16)}function v(t,e){return"number"!=typeof t||!0===e&&Math.floor(t)!==t?-1:t>=0&&t<=255?t:-1}s.arr=c,s.obj=d,s.css=u,s.hex=h,s.num=f;var y=.2126,w=.7152,k=.0722,S=1/12.92;function x(t){return Math.pow((t+.055)/1.055,2.4)}function A(t){var e=t[0]/255,n=t[1]/255,o=t[2]/255,r=e<=.03928?e*S:x(e),i=n<=.03928?n*S:x(n),a=o<=.03928?o*S:x(o);return r*y+i*w+a*k}function N(t){var e=255;8===(t=t.replace(/^#/,"")).length&&(e=parseInt(t.slice(6,8),16),t=t.substring(0,6)),4===t.length&&(e=parseInt(t.slice(3,4).repeat(2),16),t=t.substring(0,3)),3===t.length&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);var n=parseInt(t,16);return[n>>16,n>>8&255,255&n,e]}function L(t,e){return function(t,e){return(Math.max(t,e)+.05)/(Math.min(t,e)+.05)}(A(t),A(e))}function M(t,e){return L(N(t),N(e))}function T(t){return t>=7?"AAA":t>=4.5?"AA":t>=3?"AA Large":"Fail"}const z=/\[object Object\]/,_=(t,e)=>{"string"==typeof t&&z.test(t)||e()},O=(t,e)=>{"string"==typeof t&&""===t||e()},E=(t,e)=>{(0,r.d)()&&(r.L.debug([t,e]),r.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(t,"target",{value:e,writable:!1})},C=(t,e,n,o={})=>{var r,i;void 0===t.nextHooks&&(t.nextHooks=new Map),void 0===t.nextState&&(t.nextState=new Map),t.nextState.get(e)!==n&&(t.nextHooks.get(e)instanceof Map==0&&t.nextHooks.set(e,new Map),"function"==typeof o.afterPatch&&(null===(r=t.nextHooks.get(e))||void 0===r||r.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(i=t.nextHooks.get(e))||void 0===i||i.set("beforePatch",o.beforePatch)),t.nextState.set(e,n),(t=>{var e,n,o;null===(e=t.nextHooks)||void 0===e||e.forEach(((e,n)=>{var o;const r=e.get("beforePatch");"function"==typeof r&&r(null===(o=t.nextState)||void 0===o?void 0:o.get(n),t.nextState,t,n)})),(null===(n=t.nextState)||void 0===n?void 0:n.size)>0&&(t.state=Object.assign(Object.assign({},t.state),Object.fromEntries(t.nextState)),delete t.nextState,null===(o=t.nextHooks)||void 0===o||o.forEach(((e,n)=>{const o=e.get("afterPatch");"function"==typeof o&&o(t.state[n],t.state,t,n)}))),delete t.nextHooks})(t))},P=(t,e,n,r)=>{(0,o.d)(`[${t.constructor.name}] Der Property-Wert (${n}) f\xfcr '${e}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(r).join(", ")}`)};function j(t,e,n,o,r,i={}){n(r)?C(t,e,r,i.hooks):null!=r||i.required?(i.required||o.add(null),P(t,e,r,o)):C(t,e,i.defaultValue,i.hooks)}const q=(t,e,n,o)=>{j(t,e,(t=>"boolean"==typeof t),new Set(["Boolean {true, false}"]),n,o)},H=(t,e,n,o={})=>{const r="number"==typeof o.minLength?null==o?void 0:o.minLength:0;j(t,e,(t=>"string"==typeof t&&t.length>=r&&(void 0===(null==o?void 0:o.maxLength)||t.length<=o.maxLength)),new Set(["String"]),n,o)},D=(t,e,n,o)=>{j(t,e,(t=>"number"==typeof t&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&t>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&t<=o.max)),new Set(["Number"]),n,o)},$=(t,e,n,o,i=(t=>t==t),a={})=>{O(o,(()=>{_(o,(()=>{void 0===o&&(o=[]);try{try{o=F(o)}catch(t){}if(Array.isArray(o)){const l=o.find((t=>!n(t)));void 0===l&&i(o)?C(t,e,o,a.hooks):_(l,(()=>{throw r.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else _(o,(()=>{throw r.L.debug(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(t){r.L.debug(t)}}))}))},W=/^(true|false)$/,R=/^-?(0|[1-9]\d*)$/,J=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,I=t=>{const e=typeof t,n=`${t}`;if("string"==typeof t)if(W.test(t))t="true"===t;else if(R.test(t))t=parseInt(t);else if(J.test(t))t=parseFloat(t);else if(B.test(t))try{t=F(t)}catch(t){}return e!==typeof t&&(0,o.d)(`You have used a stringified property value (${n} to ${JSON.stringify(t)}) which type switched from ${e} to ${typeof t}!`),t},K=t=>{try{return JSON.stringify(t).replace(/"/g,"'")}catch(k){throw r.L.warn(["stringifyJson",t]),r.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},B=/^[{[]/,F=t=>{if("string"==typeof t)try{return JSON.parse(t)}catch(k){if(B.test(t))try{return JSON.parse(t.replace(/'/g,'"'))}catch(k){r.L.warn(["parseJson",t]),r.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},V=t=>"boolean"==typeof t?!0===t?"true":"false":void 0,U=t=>"string"==typeof t?t:V(t),Z=(t,e)=>l(t,e||(0,r.b)()),Y=(t,e)=>a(t,e||(0,r.b)());let G=null;const Q=()=>(G=G||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,r.b)().body,level:"Fail",score:1},G),X=/(\d+, ){3}0\)/,tt=(t,e=Q())=>{const n=getComputedStyle(t),o=X.test(n.backgroundColor)?e.backgroundColor:s.hex(n.backgroundColor),i=X.test(n.color)?e.color:s.hex(n.color),a=M(o,i),l={backgroundColor:o,color:i,domNode:t,level:T(a),score:a};return a<4.5&&r.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},et=(t,e=Q())=>{e.domNode instanceof HTMLElement&&(e=tt(e.domNode,e));const n=e.domNode.querySelector(t);if(null===n){const n=e.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<n.length&&(e.domNode=n[o],null===(e=et(t,e)).domNode);o++);return e}return tt(n,e)};class nt{static queryHtmlElementColors(t,e,n=!1,o=!0){let i=null;if(!0===n||!1===nt.executionLock)if(!1===n&&(nt.cache.clear(),nt.cache.set(e.domNode,e),nt.executionLock=!0,!0===o&&r.L.debug("[KoliBriUtils] Color contrast analysis started...")),t===e.domNode)i=e;else{const n=new Set;if(e.domNode.shadowRoot){const t=e.domNode.shadowRoot.children;for(let e=0;e<t.length;e++)n.add(t[e])}const o=e.domNode;if("function"==typeof o.assignedNodes){const t=o.assignedNodes();for(let e=0;e<t.length;e++)t[e]instanceof HTMLElement&&n.add(t[e])}const r=e.domNode.children;for(let t=0;t<r.length;t++)n.add(r[t]);const a=Array.from(n);for(let l=0;l<a.length;l++){let n=nt.cache.get(a[l]);void 0===n&&(n=tt(a[l],e)),nt.cache.set(a[l],n);const o=nt.queryHtmlElementColors(t,n,!0,!1);if(null!==o){i=o;break}}}else r.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===o&&r.L.debug(`[KoliBriUtils] Color contrast analysis finished (${nt.cache.size} DOM elements are analysed).`),nt.executionLock=!1,nt.cache.clear()),i}}nt.executionLock=!1,nt.cache=new Map;class ot{}ot.patchTheme=r.p,ot.patchThemeTag=r.a,ot.querySelector=Z,ot.querySelectorAll=Y,ot.stringifyJson=K},11357:(t,e,n)=>{n.d(e,{v:()=>r});var o=n(23589);const r=(t,e)=>{(0,o.v)(t,"_tooltipAlign",e)}}}]);