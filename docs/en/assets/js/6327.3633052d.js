/*! For license information please see 6327.3633052d.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[6327],{21491:(t,e,n)=>{n.d(e,{a:()=>i,b:()=>p,c:()=>g,d:()=>l,e:()=>f,f:()=>d,g:()=>s,u:()=>u});var r=n(9724);const o=new Set,i=(t,e)=>{(!1===o.has(t)||(null==e?void 0:e.force))&&(o.add(t),r.L.debug([t].concat((null==e?void 0:e.details)||[]),{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},a=new Set,l=(t,e)=>{(!1===a.has(t)||(null==e?void 0:e.force))&&(a.add(t),r.L.debug([t].concat((null==e?void 0:e.details)||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},s=(t,e)=>{(!1===a.has(t)||(null==e?void 0:e.force))&&(a.add(t),r.L.warn([t].concat((null==e?void 0:e.details)||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},c=new Set,d=(t,e=!1,n)=>{(!1===c.has(t)||(null==n?void 0:n.force))&&(c.add(t),t+=!0===e?" \u2705":"",r.L.debug([t].concat((null==n?void 0:n.details)||[]),{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};l("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const h=new Set,u=(t,e)=>{(!1===h.has(t)||(null==e?void 0:e.force))&&(h.add(t),r.L.debug([t].concat((null==e?void 0:e.details)||[]),{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},f=()=>{i('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},p=t=>{"string"==typeof t&&""!==t||i("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},g=(t,e=8)=>{e>7&&u(`[${t}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},6327:(t,e,n)=>{n.r(e),n.d(e,{kol_link_group:()=>c});var r=n(78331),o=n(20013),i=n(48167),a=n(85241),l=n(36294);const s=t=>{const e=[];return t.links.map(((n,o)=>{e.push((0,r.h)("li",{key:o,class:{ident:o>0&&"vertical"===t.orientation,"list-none":0===o&&"horizontal"===t.orientation},style:{listStyleType:t.listStyleType}},(0,r.h)("kol-link",Object.assign({},n))))})),e},c=class{constructor(t){(0,r.r)(this,t),this.isUl=!0,this._listStyleType=void 0,this._label=void 0,this._links=void 0,this._orientation="vertical",this.state={_label:"\u2026",_listStyleType:"disc",_links:[],_orientation:"vertical"}}render(){return(0,r.h)("nav",{"aria-label":this.state._label,class:{vertical:"vertical"===this.state._orientation,horizontal:"horizontal"===this.state._orientation}},!1===this.isUl?(0,r.h)("ol",null,(0,r.h)(s,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType})):(0,r.h)("ul",null,(0,r.h)(s,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType})))}validateLabel(t,e,n=!1){n||(0,a.r)(this.state._label),(0,o.v)(this,t),(0,a.a)(this.state._label)}validateListStyleType(t){(0,i.w)(this,"_listStyleType",(t=>{switch(t){case"disc":case"circle":case"square":case"none":return this.isUl=!0,!0;case"decimal":case"decimal-leading-zero":case"lower-alpha":case"lower-latin":case"lower-greek":case"lower-roman":case"upper-alpha":case"upper-latin":case"upper-roman":return this.isUl=!1,!0;default:return!1}}),new Set(["https://www.w3schools.com/tags/tag_ol.asp"]),t)}validateLinks(t){(0,l.w)("KolLinkGroup",this,t)}validateOrientation(t){(0,i.w)(this,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}componentWillLoad(){this.validateLabel(this._label,void 0,!0),this.validateListStyleType(this._listStyleType),this.validateLinks(this._links),this.validateOrientation(this._orientation)}disconnectedCallback(){(0,a.r)(this.state._label)}static get watchers(){return{_label:["validateLabel"],_listStyleType:["validateListStyleType"],_links:["validateLinks"],_orientation:["validateOrientation"]}}};c.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * Minimum size of interactive elements.\n\t\t */\n\t\t--a11y-min-size: 44px;\n\t\t/*\n\t\t * Verdana is an accessible font that can be used without requiring additional loading time.\n\t\t */\n\t\tfont-family: Verdana;\n\t}\n\n\t* {\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\thyphens: auto;\n\t\t/*\n\t\t * Letter spacing is required for all texts.\n\t\t */\n\t\tletter-spacing: inherit;\n\t\t/*\n\t\t * This rule enables the word dividing for all texts. That is important for high zoom levels.\n\t\t */\n\t\tword-break: break-word;\n\t\t/*\n\t\t * Word spacing is required for all texts.\n\t\t */\n\t\tword-spacing: inherit;\n\t}\n\n\t/*\n\t * All interactive elements should have a minimum size of 44px.\n\t */\n\t/* input:not([type='checkbox'], [type='radio'], [type='range']), */\n\t/* option, */\n\t/* select, */\n\t/* textarea, */\n\t[role='button'],\n\tbutton:not([role='link']),\n\tkol-input .input {\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t}\n\n\t/*\n\t * Some interactive elements should not inherit the font-family and font-size.\n\t */\n\ta,\n\tbutton,\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6,\n\tinput,\n\toption,\n\tselect,\n\ttextarea {\n\t\t/*\n\t\t * All elements should inherit the font family from his parent element.\n\t\t */\n\t\tfont-family: inherit;\n\t\t/*\n\t\t * All elements should inherit the font size from his parent element.\n\t\t */\n\t\tfont-size: inherit;\n\t}\n}\n\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n\twidth: 1px;\n}\n\n@layer kol-global {\n\t/*\n\t * Dieses CSS stellt sicher, dass der Standard-Style\n\t * von A und Button resettet werden.\n\t */\n\t:is(a, button) {\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%; /* 100% needed for custom width from outside */\n\t}\n}\n\n@layer kol-global {\n\t:host {\n\t\t/*\n\t\t * The max-width is needed to prevent the table from overflowing the\n\t\t * parent node, if the table is wider than the parent node.\n\t\t */\n\t\tmax-width: 100%;\n\t}\n\n\t* {\n\t\t/*\n\t\t * We prefer to box-sizing: border-box for all elements.\n\t\t */\n\t\tbox-sizing: border-box;\n\t}\n\n\t/* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n\tkol-span-wc {\n\t\tdisplay: grid;\n\t\tplace-items: center;\n\t}\n\n\t/* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n\tkol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\n\ta,\n\tbutton {\n\t\tcursor: pointer;\n\t}\n\n\t/* This is the text label. */\n\t.icon-only > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n}\n\n@layer kol-component {\n\tul {\n\t\tlist-style: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\n\tnav.horizontal ul {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t}\n\n\tnav.horizontal li {\n\t\tmargin-left: 1.25rem;\n\t\tmargin-right: 0.25rem;\n\t}\n\n\tnav.horizontal li:first-child {\n\t\tmargin-left: 0;\n\t}\n\n\tnav.horizontal li:last-child {\n\t\tmargin-right: 0;\n\t}\n\n\tnav.vertical li {\n\t\tmargin-left: 1.75rem;\n\t\tmargin-right: 0.5rem;\n\t}\n\n\tli.list-none {\n\t\tlist-style-type: none !important;\n\t\tmargin-left: 0;\n\t}\n}\n"}},20013:(t,e,n)=>{n.d(e,{a:()=>h,c:()=>s,h:()=>l,v:()=>d});var r=n(21491),o=n(48167);const i=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,a=/^\d+$/;function l(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(i))||void 0===e?void 0:e.length)||0}(t)>=e}function s(t){return a.test(t)}const c=new Set(["string"]),d=(t,e,n={})=>{(0,o.w)(t,"_label",(t=>"string"==typeof t),c,e,function(t){var e;return{hooks:{afterPatch:(e,n,o,i)=>{var a,c;"function"==typeof(null===(a=t.hooks)||void 0===a?void 0:a.afterPatch)&&(null===(c=t.hooks)||void 0===c||c.afterPatch(e,n,o,i)),"string"==typeof e&&!1===l(e,3)&&!1===s(e)&&(0,r.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,r.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}(n))},h=d},48167:(t,e,n)=>{n.d(e,{K:()=>rt,a:()=>P,b:()=>A,c:()=>$,d:()=>D,e:()=>H,f:()=>j,g:()=>M,h:()=>F,i:()=>V,j:()=>nt,k:()=>Z,l:()=>tt,m:()=>K,n:()=>G,o:()=>O,p:()=>B,q:()=>et,r:()=>s,s:()=>C,t:()=>I,w:()=>q});var r=n(21491),o=n(9724);const i=(t,e)=>{e.forEach((e=>{!1===t.has(e)&&t.add(e)}))},a=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){const n=new Set;i(n,e.querySelectorAll(t));const r=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<r.length;e++){const o=r[e].shadowRoot;i(n,a(t,"object"==typeof o&&null!==o?o:r[e]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},l=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){let n=e.querySelector(t);if(null===n){const r=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<r.length;e++){const o=r[e].shadowRoot;if(n=l(t,"object"==typeof o&&null!==o?o:r[e]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var s=p,c=p,d=function(t){var e=g(t);return{r:e[0],g:e[1],b:e[2],a:3==e.length?255:Math.round(e[3])}},h=function(t){var e=g(t);return 3==e.length&&e.push(255),255==e[3]?"rgb("+e[0]+", "+e[1]+", "+e[2]+")":0==e[3]?"rgba("+e[0]+", "+e[1]+", "+e[2]+", 0)":"rgba("+e[0]+", "+e[1]+", "+e[2]+", "+String(e[3]/255).substr(1)+")"},u=function(t){3==(e=g(t)).length&&e.push(255);var e,n=255==e[3],r=b(e[0]),o=b(e[1]),i=b(e[2]),a=function(t,e,n,r){var o=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=o.indexOf(t)&&-1!=o.indexOf(e)&&-1!=o.indexOf(n)&&-1!=o.indexOf(r)}(r,o,i,e=b(Math.round(e[3])));return n?a?"#"+r.charAt(0)+o.charAt(0)+i.charAt(0):"#"+r+o+i:a?"#"+r.charAt(0)+o.charAt(0)+i.charAt(0)+e.charAt(0):"#"+r+o+i+e},f=function(t){var e=g(t);return 3==e.length?e.push(255):e[3]=Math.round(e[3]),(e[3]<<24>>>0|e[0]<<16|e[1]<<8|e[2])>>>0};function p(t){var e=g(t);return 3==e.length?e.concat(255):(e[3]=Math.round(e[3]),e)}function g(t){return"string"==typeof t?function(t){return"red"==t?[255,0,0]:"green"==t?[0,255,0]:"blue"==t?[0,0,255]:"black"==t?[0,0,0]:"white"==t?[255,255,255]:"cyan"==t?[0,255,255]:"gray"==t||"grey"==t?[128,128,128]:"magenta"==t||"pink"==t?[255,0,255]:"yellow"==t?[255,255,0]:void 0}(t=t.toLowerCase())||function(t){var e=t.replace(/^#/,""),n=e.length;if(3==n||4==n){var r=m(e[0]),o=m(e[1]),i=m(e[2]),a=3==n?255:m(e[3]);if(isNaN(r)||isNaN(o)||isNaN(i)||isNaN(a))return;return[r,o,i,a]}}(t)||function(t){var e=t.replace(/^#/,""),n=e.length;if(6==n||8==n){var r=m(e.slice(0,2)),o=m(e.slice(2,4)),i=m(e.slice(4,6)),a=6==n?255:m(e.slice(6,8));if(isNaN(r)||isNaN(o)||isNaN(i)||isNaN(a))return;return[r,o,i,a]}}(t)||function(t){if("rgb("==t.substr(0,4)){var e=(t=t.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=y(e[0],!0),r=y(e[1],!0),o=y(e[2],!0);if(-1!=n&&-1!=r&&-1!=o)return[n,r,o,255]}}(t)||function(t){if("rgba("==t.substr(0,5)){var e=(t=t.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=y(e[0],!0),r=y(e[1],!0),o=y(e[2],!0),i=y(255*e[3]);if(-1!=n&&-1!=r&&-1!=o&&-1!=i)return[n,r,o,i]}}(t)||[0,0,0,255]:function(t){if("[object Object]"===Object.prototype.toString.call(t)&&Object.getPrototypeOf(t)===Object.getPrototypeOf({})){var e=y(null!=t.r?t.r:null!=t.red?t.red:0,!0),n=y(null!=t.g?t.g:null!=t.green?t.green:0,!0),r=y(null!=t.b?t.b:null!=t.blue?t.blue:0,!0),o=y(null!=t.a?t.a:null!=t.alpha?t.alpha:255,!0);if(-1!=e&&-1!=n&&-1!=r&&-1!=o)return[e,n,r,o]}}(t)||function(t){if(Array.isArray(t)&&(3==t.length||4==t.length)){var e=y(t[0],!0),n=y(t[1],!0),r=y(t[2],!0),o=y(null!=t[3]?t[3]:255,!0);if(-1!=e&&-1!=n&&-1!=r&&-1!=o)return[e,n,r,o]}}(t)||function(t){if("number"==typeof t&&Math.floor(t)==t&&t<=4294967295&&t>=0)return[t>>16&255,t>>8&255,255&t,t>>24&255]}(t)||[0,0,0,255]}function b(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function m(t){return 1==t.length?parseInt(t+t,16):parseInt(t,16)}function y(t,e){return"number"!=typeof t||!0===e&&Math.floor(t)!==t?-1:t>=0&&t<=255?t:-1}s.arr=c,s.obj=d,s.css=h,s.hex=u,s.num=f;var v=.2126,w=.7152,k=.0722,S=1/12.92;function x(t){return Math.pow((t+.055)/1.055,2.4)}function L(t){var e=t[0]/255,n=t[1]/255,r=t[2]/255,o=e<=.03928?e*S:x(e),i=n<=.03928?n*S:x(n),a=r<=.03928?r*S:x(r);return o*v+i*w+a*k}function N(t){var e=255;8===(t=t.replace(/^#/,"")).length&&(e=parseInt(t.slice(6,8),16),t=t.substring(0,6)),4===t.length&&(e=parseInt(t.slice(3,4).repeat(2),16),t=t.substring(0,3)),3===t.length&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);var n=parseInt(t,16);return[n>>16,n>>8&255,255&n,e]}function _(t,e){return function(t,e){return(Math.max(t,e)+.05)/(Math.min(t,e)+.05)}(L(t),L(e))}function A(t,e){return _(N(t),N(e))}function T(t){return t>=7?"AAA":t>=4.5?"AA":t>=3?"AA Large":"Fail"}const z=/\[object Object\]/,O=(t,e)=>{"string"==typeof t&&z.test(t)||e()},M=(t,e)=>{"string"==typeof t&&""===t||e()},j=(t,e)=>{(0,o.d)()&&(o.L.debug([t,e]),o.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(t,"target",{value:e,writable:!1})},C=(t,e,n,r={})=>{var o,i;void 0===t.nextHooks&&(t.nextHooks=new Map),void 0===t.nextState&&(t.nextState=new Map),t.nextState.get(e)!==n&&(t.nextHooks.get(e)instanceof Map==0&&t.nextHooks.set(e,new Map),"function"==typeof r.afterPatch&&(null===(o=t.nextHooks.get(e))||void 0===o||o.set("afterPatch",r.afterPatch)),"function"==typeof r.beforePatch&&(null===(i=t.nextHooks.get(e))||void 0===i||i.set("beforePatch",r.beforePatch)),t.nextState.set(e,n),(t=>{var e,n,r;null===(e=t.nextHooks)||void 0===e||e.forEach(((e,n)=>{var r;const o=e.get("beforePatch");"function"==typeof o&&o(null===(r=t.nextState)||void 0===r?void 0:r.get(n),t.nextState,t,n)})),(null===(n=t.nextState)||void 0===n?void 0:n.size)>0&&(t.state=Object.assign(Object.assign({},t.state),Object.fromEntries(t.nextState)),delete t.nextState,null===(r=t.nextHooks)||void 0===r||r.forEach(((e,n)=>{const r=e.get("afterPatch");"function"==typeof r&&r(t.state[n],t.state,t,n)}))),delete t.nextHooks})(t))},E=(t,e,n,o)=>{(0,r.d)(`[${t.constructor.name}] Der Property-Wert (${n}) f\xfcr '${e}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)};function q(t,e,n,r,o,i={}){n(o)?C(t,e,o,i.hooks):null!=o||i.required?(i.required||r.add(null),E(t,e,o,r)):C(t,e,i.defaultValue,i.hooks)}const P=(t,e,n,r)=>{q(t,e,(t=>"boolean"==typeof t),new Set(["Boolean {true, false}"]),n,r)},D=(t,e,n,r={})=>{const o="number"==typeof r.minLength?null==r?void 0:r.minLength:0;q(t,e,(t=>"string"==typeof t&&t.length>=o&&(void 0===(null==r?void 0:r.maxLength)||t.length<=r.maxLength)),new Set(["String"]),n,r)},H=(t,e,n,r)=>{q(t,e,(t=>"number"==typeof t&&(void 0===(null==r?void 0:r.min)||"number"==typeof(null==r?void 0:r.min)&&t>=r.min)&&(void 0===(null==r?void 0:r.max)||"number"==typeof(null==r?void 0:r.max)&&t<=r.max)),new Set(["Number"]),n,r)},$=(t,e,n,r,i=(t=>t==t),a={})=>{M(r,(()=>{O(r,(()=>{void 0===r&&(r=[]);try{try{r=B(r)}catch(t){}if(Array.isArray(r)){const l=r.find((t=>!n(t)));void 0===l&&i(r)?C(t,e,r,a.hooks):O(l,(()=>{throw o.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else O(r,(()=>{throw o.L.debug(r),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(t){o.L.debug(t)}}))}))},W=/^(true|false)$/,R=/^-?(0|[1-9]\d*)$/,J=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,K=t=>{const e=typeof t,n=`${t}`;if("string"==typeof t)if(W.test(t))t="true"===t;else if(R.test(t))t=parseInt(t);else if(J.test(t))t=parseFloat(t);else if(U.test(t))try{t=B(t)}catch(t){}return e!==typeof t&&(0,r.d)(`You have used a stringified property value (${n} to ${JSON.stringify(t)}) which type switched from ${e} to ${typeof t}!`),t},I=t=>{try{return JSON.stringify(t).replace(/"/g,"'")}catch(k){throw o.L.warn(["stringifyJson",t]),o.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},U=/^[{[]/,B=t=>{if("string"==typeof t)try{return JSON.parse(t)}catch(k){if(U.test(t))try{return JSON.parse(t.replace(/'/g,'"'))}catch(k){o.L.warn(["parseJson",t]),o.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},F=t=>"boolean"==typeof t?!0===t?"true":"false":void 0,V=t=>"string"==typeof t?t:F(t),Z=(t,e)=>l(t,e||(0,o.b)()),G=(t,e)=>a(t,e||(0,o.b)());let Y=null;const Q=()=>(Y=Y||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,o.b)().body,level:"Fail",score:1},Y),X=/(\d+, ){3}0\)/,tt=(t,e=Q())=>{const n=getComputedStyle(t),r=X.test(n.backgroundColor)?e.backgroundColor:s.hex(n.backgroundColor),i=X.test(n.color)?e.color:s.hex(n.color),a=A(r,i),l={backgroundColor:r,color:i,domNode:t,level:T(a),score:a};return a<4.5&&o.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},et=(t,e=Q())=>{e.domNode instanceof HTMLElement&&(e=tt(e.domNode,e));const n=e.domNode.querySelector(t);if(null===n){const n=e.domNode.querySelectorAll('[class="hydrated"]');for(let r=0;r<n.length&&(e.domNode=n[r],null===(e=et(t,e)).domNode);r++);return e}return tt(n,e)};class nt{static queryHtmlElementColors(t,e,n=!1,r=!0){let i=null;if(!0===n||!1===nt.executionLock)if(!1===n&&(nt.cache.clear(),nt.cache.set(e.domNode,e),nt.executionLock=!0,!0===r&&o.L.debug("[KoliBriUtils] Color contrast analysis started...")),t===e.domNode)i=e;else{const n=new Set;if(e.domNode.shadowRoot){const t=e.domNode.shadowRoot.children;for(let e=0;e<t.length;e++)n.add(t[e])}const r=e.domNode;if("function"==typeof r.assignedNodes){const t=r.assignedNodes();for(let e=0;e<t.length;e++)t[e]instanceof HTMLElement&&n.add(t[e])}const o=e.domNode.children;for(let t=0;t<o.length;t++)n.add(o[t]);const a=Array.from(n);for(let l=0;l<a.length;l++){let n=nt.cache.get(a[l]);void 0===n&&(n=tt(a[l],e)),nt.cache.set(a[l],n);const r=nt.queryHtmlElementColors(t,n,!0,!1);if(null!==r){i=r;break}}}else o.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===r&&o.L.debug(`[KoliBriUtils] Color contrast analysis finished (${nt.cache.size} DOM elements are analysed).`),nt.executionLock=!1,nt.cache.clear()),i}}nt.executionLock=!1,nt.cache=new Map;class rt{}rt.patchTheme=o.p,rt.patchThemeTag=o.a,rt.querySelector=Z,rt.querySelectorAll=G,rt.stringifyJson=I},85241:(t,e,n)=>{n.d(e,{a:()=>o,r:()=>i});const r=new Set;function o(t){r.has(t)?console.error(`There already is a nav element with the label "${t}"`):r.add(t)}function i(t){r.delete(t)}},36294:(t,e,n)=>{n.d(e,{w:()=>i});var r=n(21491),o=n(48167);const i=(t,e,n)=>{(0,o.c)(e,"_links",(t=>"object"==typeof t&&("string"==typeof t._href||"string"==typeof t._label)),n),(0,r.c)(t,e.state._links.length)}}}]);