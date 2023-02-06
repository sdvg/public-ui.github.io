/*! For license information please see 4716.f2db0bcd.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[4716],{5298:(e,t,n)=>{n.d(t,{a:()=>g,b:()=>l,c:()=>f,d:()=>c,e:()=>i,f:()=>u,u:()=>p});var o=n(8764);const r=new Set,i=e=>{!1===r.has(e)&&(r.add(e),o.L.info(e,{classifier:"\u270ba11y",overwriteStyle:"; background-color: #09f"}))},a=new Set,l=e=>{!1===a.has(e)&&(a.add(e),o.L.warn(e,{classifier:"\ud83d\udd25deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},s=new Set,c=e=>{!1===s.has(e)&&(s.add(e),o.L.debug(e,{classifier:"\ud83d\udcbbdev",overwriteStyle:"; background-color: #f09"}))},d=new Set,u=(e,t=!1)=>{!1===d.has(e)&&(d.add(e),e+=!0===t?" \u2705":"",o.L.debug(e,{classifier:"\ud83c\udf1ffeature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const h=new Set,f=()=>{i('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},g=e=>{"string"==typeof e&&""!==e||i("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},p=(e,t=8)=>{var n;t>7&&(n=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===h.has(n)&&(h.add(n),o.L.debug(n,{classifier:"\ud83d\udcd1ui/ux",overwriteStyle:"; background-color: #060;"})))}},6970:(e,t,n)=>{n.d(t,{f:()=>c,s:()=>s});var o=1/12.92;function r(e){return Math.pow((e+.055)/1.055,2.4)}function i(e){var t=e[0]/255,n=e[1]/255,i=e[2]/255;return.2126*(t<=.03928?t*o:r(t))+.7152*(n<=.03928?n*o:r(n))+.0722*(i<=.03928?i*o:r(i))}function a(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function l(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(i(e),i(t))}function s(e,t){return l(a(e),a(t))}function c(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}},4716:(e,t,n)=>{n.r(t),n.d(t,{kol_accordion:()=>l});var o=n(2339),r=n(5298),i=n(6896),a=n(9829);(0,r.f)("[KolAccordion] Anfrage nach einer KolAccordionGroup bei dem immer nur ein Accordion ge\xf6ffnet ist.\n\n- onClick auf der KolAccordion anwenden\n- Click-Event pr\xfcft den _open-Status der Accordions\n- Logik \xd6ffnet und Schlie\xdft entsprechend"),(0,r.f)("[KolAccordion] Tab-Sperre des Inhalts im geschlossenen Zustand.");const l=class{constructor(e){(0,o.r)(this,e),this.catchAriaExpanded=e=>{e instanceof HTMLButtonElement&&(this.buttonRef=e,this.triggerAriaExpanded(e))},this.triggerAriaExpanded=e=>{e.setAttribute("aria-expanded",this.state._open?"true":"false")},this.onClick=e=>{this._open=!1===this._open;const t=setTimeout((()=>{var n;clearTimeout(t),"function"==typeof(null===(n=this.state._on)||void 0===n?void 0:n.onClick)&&this.state._on.onClick(e,!0===this._open),this.buttonRef instanceof HTMLButtonElement&&this.triggerAriaExpanded(this.buttonRef)}))},this._heading=void 0,this._level=1,this._on=void 0,this._open=!1,this.state={_heading:"\u26a0",_level:1}}render(){return(0,o.h)(o.H,null,(0,o.h)("div",{part:"accordion "+(this.state._open?"open":"close")},(0,o.h)("kol-heading-wc",{_level:this.state._level},(0,o.h)("button",{ref:this.catchAriaExpanded,onClick:this.onClick},(0,o.h)("kol-icon",{_ariaLabel:"",_icon:this.state._open?"fa-solid fa-minus":"fa-solid fa-plus",_part:this.state._open?"close":"open"}),(0,o.h)("span",null,this.state._heading))),(0,o.h)("div",{part:"header"},(0,o.h)("slot",{name:"header"})),(0,o.h)("div",{part:"content",style:!1===this.state._open?{display:"none",height:"0",visibility:"hidden"}:void 0},(0,o.h)("slot",{name:"content"}))))}validateHeading(e){(0,i.w)(this,"_heading",e,{required:!0})}validateLevel(e){(0,a.w)(this,e)}validateOn(e){"object"==typeof e&&null!==e&&"function"==typeof e.onClick&&(0,i.s)(this,"_on",e)}validateOpen(e){(0,i.b)(this,"_open",e)}componentWillLoad(){this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateOpen(this._open)}static get watchers(){return{_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_open:["validateOpen"]}}};l.style={default:"@windicss; *{box-sizing:border-box;font-size:inherit;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}kol-heading-wc{font-weight:700}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:0.25rem;place-items:center}a,button{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{border-width:0}"}},6896:(e,t,n)=>{n.d(t,{K:()=>Y,a:()=>N,b:()=>_,c:()=>O,d:()=>M,e:()=>A,f:()=>L,g:()=>$,h:()=>Z,i:()=>R,j:()=>V,k:()=>z,l:()=>I,m:()=>q,n:()=>B,o:()=>S,p:()=>P,q:()=>F,r:()=>d,s:()=>x,t:()=>D,w:()=>E});var o=n(1728),r=n(6970),i=n(5298),a=n(8764);const l=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;l(n,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const r=o[t].shadowRoot;l(n,s(e,"object"==typeof r&&null!==r?r:o[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},c=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const r=o[t].shadowRoot;if(n=c(e,"object"==typeof r&&null!==r?r:o[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var d=b,u=b,h=function(e){var t=m(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},f=function(e){var t=m(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},g=function(e){3==(t=m(e)).length&&t.push(255);var t,n=255==t[3],o=v(t[0]),r=v(t[1]),i=v(t[2]),a=function(e,t,n,o){var r=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=r.indexOf(e)&&-1!=r.indexOf(t)&&-1!=r.indexOf(n)&&-1!=r.indexOf(o)}(o,r,i,t=v(Math.round(t[3])));return n?a?"#"+o.charAt(0)+r.charAt(0)+i.charAt(0):"#"+o+r+i:a?"#"+o.charAt(0)+r.charAt(0)+i.charAt(0)+t.charAt(0):"#"+o+r+i+t},p=function(e){var t=m(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function b(e){var t=m(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function m(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var o=y(t[0]),r=y(t[1]),i=y(t[2]),a=3==n?255:y(t[3]);if(isNaN(o)||isNaN(r)||isNaN(i)||isNaN(a))return;return[o,r,i,a]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var o=y(t.slice(0,2)),r=y(t.slice(2,4)),i=y(t.slice(4,6)),a=6==n?255:y(t.slice(6,8));if(isNaN(o)||isNaN(r)||isNaN(i)||isNaN(a))return;return[o,r,i,a]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=w(t[0],!0),o=w(t[1],!0),r=w(t[2],!0);if(-1!=n&&-1!=o&&-1!=r)return[n,o,r,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=w(t[0],!0),o=w(t[1],!0),r=w(t[2],!0),i=w(255*t[3]);if(-1!=n&&-1!=o&&-1!=r&&-1!=i)return[n,o,r,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=w(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=w(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=w(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),r=w(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=r)return[t,n,o,r]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=w(e[0],!0),n=w(e[1],!0),o=w(e[2],!0),r=w(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=r)return[t,n,o,r]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function v(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function y(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function w(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}d.arr=u,d.obj=h,d.css=f,d.hex=g,d.num=p;const k=/\[object Object\]/,S=(e,t)=>{"string"==typeof e&&k.test(e)||t()},L=(e,t)=>{"string"==typeof e&&""===e||t()},A=(e,t)=>{(0,a.b)()&&(a.L.debug([e,t]),a.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},x=(e,t,n,o={})=>{var r,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==n&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(r=e.nextHooks.get(t))||void 0===r||r.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",o.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var o;const r=t.get("beforePatch");"function"==typeof r&&r(null===(o=e.nextState)||void 0===o?void 0:o.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,n)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e))},N=(e,t,n,o,r,a={})=>{n(r)?x(e,t,r,null==a?void 0:a.hooks):void 0===r||null===r&&(void 0===(null==a?void 0:a.required)||!1===(null==a?void 0:a.required))?x(e,t,null==a?void 0:a.defaultValue,null==a?void 0:a.hooks):(void 0!==(null==a?void 0:a.required)&&!1!==(null==a?void 0:a.required)||o.add(null),((e,t,n,o)=>{(0,i.d)(`[${e.constructor.name}] Der Property-Wert (${n}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)})(e,t,r,o))},_=(e,t,n,o)=>{N(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,o)},E=(e,t,n,o={})=>{const r="number"==typeof o.minLength?null==o?void 0:o.minLength:0;N(e,t,(e=>"string"==typeof e&&e.length>=r),new Set([`String (Mindestl\xe4nge ${r})`]),n,o)},M=(e,t,n,o)=>{N(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),n,o)},O=(e,t,n,o,r=(e=>e==e),i={})=>{L(o,(()=>{S(o,(()=>{void 0===o&&(o=[]);try{try{o=P(o)}catch(e){}if(Array.isArray(o)){const l=o.find((e=>!n(e)));void 0===l&&r(o)?x(e,t,o,i.hooks):S(l,(()=>{throw a.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else S(o,(()=>{throw a.L.debug(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){a.L.debug(e)}}))}))},H=/^(true|false)$/,C=/^-?(0|[1-9]\d*)$/,T=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,q=e=>{const t=typeof e,n=`${e}`;if("string"==typeof e)if(H.test(e))e="true"===e;else if(C.test(e))e=parseInt(e);else if(T.test(e))e=parseFloat(e);else if(j.test(e))try{e=P(e)}catch(e){}return t!==typeof e&&(0,i.d)(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},D=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw a.L.warn(["stringifyJson",e]),a.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},j=/^[{[]/,P=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(j.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){a.L.warn(["parseJson",e]),a.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},$=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,R=e=>"string"==typeof e?e:$(e),z=(e,t)=>c(e,t||(0,a.g)()),B=(e,t)=>s(e,t||(0,a.g)());let J=null;const K=()=>(J=J||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,a.g)().body,level:"Fail",score:1},J),W=/(\d+, ){3}0\)/,I=(e,t=K())=>{const n=getComputedStyle(e),o=W.test(n.backgroundColor)?t.backgroundColor:d.hex(n.backgroundColor),i=W.test(n.color)?t.color:d.hex(n.color),l=(0,r.s)(o,i),s={backgroundColor:o,color:i,domNode:e,level:(0,r.f)(l),score:l};return l<4.5&&a.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},F=(e,t=K())=>{t.domNode instanceof HTMLElement&&(t=I(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<n.length&&(t.domNode=n[o],null===(t=F(e,t)).domNode);o++);return t}return I(n,t)},U=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,a.a)().pageYOffset-50}),e.focus()):(0,i.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},Z=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,i.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const n=`${t}`;t=e,e=n}if("string"==typeof e){const n=z(e,t);n instanceof HTMLElement?U(n):(0,i.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,i.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class V{static queryHtmlElementColors(e,t,n=!1,o=!0){let r=null;if(!0===n||!1===V.executionLock)if(!1===n&&(V.cache.clear(),V.cache.set(t.domNode,t),V.executionLock=!0,!0===o&&a.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)r=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const i=t.domNode.children;for(let e=0;e<i.length;e++)n.add(i[e]);const a=Array.from(n);for(let l=0;l<a.length;l++){let n=V.cache.get(a[l]);void 0===n&&(n=I(a[l],t)),V.cache.set(a[l],n);const o=V.queryHtmlElementColors(e,n,!0,!1);if(null!==o){r=o;break}}}else a.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===o&&a.L.debug(`[KoliBriUtils] Color contrast analysis finished (${V.cache.size} DOM elements are analysed).`),V.executionLock=!1,V.cache.clear()),r}}V.executionLock=!1,V.cache=new Map;class Y{}Y.patchTheme=o.p,Y.patchThemeTag=o.a,Y.querySelector=z,Y.querySelectorAll=B,Y.scrollByHTMLElement=U,Y.scrollBySelector=Z,Y.stringifyJson=D},9829:(e,t,n)=>{n.d(t,{w:()=>r});var o=n(6896);const r=(e,t)=>{(0,o.a)(e,"_level",(e=>"number"==typeof e&&1<=e&&e<=6),new Set(["Number {1, 2, 3, 4, 5, 6}"]),t,{defaultValue:1,required:!0})}}}]);