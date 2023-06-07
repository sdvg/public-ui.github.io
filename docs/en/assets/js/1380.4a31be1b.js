/*! For license information please see 1380.4a31be1b.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1380],{76649:(e,t,r)=>{r.d(t,{a:()=>a,b:()=>m,c:()=>v,d:()=>c,e:()=>l,f:()=>h,g:()=>p,h:()=>d,u:()=>g});var n=r(1694);const o=new Set,a=e=>{!1===o.has(e)&&(o.add(e),n.L.debug(e,{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},i=new Set,l=e=>{!1===i.has(e)&&(i.add(e),n.L.warn(e,{classifier:"\ud83d\udd25 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},s=new Set,c=e=>{!1===s.has(e)&&(s.add(e),n.L.debug(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},d=e=>{!1===s.has(e)&&(s.add(e),n.L.warn(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},u=new Set,h=(e,t=!1)=>{!1===u.has(e)&&(u.add(e),e+=!0===t?" \u2705":"",n.L.debug(e,{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const f=new Set,g=e=>{!1===f.has(e)&&(f.add(e),n.L.debug(e,{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},p=()=>{a('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},m=e=>{"string"==typeof e&&""!==e||a("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},v=(e,t=8)=>{t>7&&g(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},41380:(e,t,r)=>{r.r(t),r.d(t,{kol_progress:()=>a});var n=r(73621),o=r(93262);const a=class{constructor(e){(0,n.r)(this,e),this._label=void 0,this._max=void 0,this._type=void 0,this._unit="%",this._value=void 0,this._variant=void 0,this.state={_max:100,_unit:"%",_value:0,_variant:"bar",_liveValue:0}}render(){return(0,n.h)(n.H,null,"cycle"===(e=this.state)._variant?(0,n.h)("svg",{class:"cycle",width:"100",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},(0,n.h)("circle",{fill:"none",stroke:"#efefef",cx:"6px",cy:"6px",r:"5px"}),(0,n.h)("text",{"aria-hidden":"true","font-size":"0.1em",x:"50%",y:"50%","text-anchor":"middle",fill:"currentColor"},e._label&&(0,n.h)("tspan",{"text-anchor":"middle",x:"50%",dy:"-0.5em"},e._label),(0,n.h)("tspan",{"text-anchor":"middle",x:"50%",dy:e._label?"1em":"0em"},e._value,e._unit)),(0,n.h)("circle",{class:"progress","stroke-linecap":"round","stroke-dasharray":`${Math.round(e._value/e._max*32)}px 32px`,fill:"none",stroke:"#0075ff",cx:"6px",cy:"6px",r:"5px"})):(0,n.h)("div",{class:"bar"},e._label&&(0,n.h)("div",null,e._label),(0,n.h)("div",{style:{display:"flex",gap:"0.3em"}},(0,n.h)("svg",{width:"100",viewBox:"0 0 24 2",xmlns:"http://www.w3.org/2000/svg"},(0,n.h)("line",{"stroke-width":"2",x1:"1","stroke-linecap":"round",y1:"1",x2:"23",y2:"1",fill:"#efefef",stroke:"#efefef"}),(0,n.h)("line",{class:"progress","stroke-width":"2",x1:"1","stroke-linecap":"round",y1:"1",x2:`${1+Math.round(e._value/e._max*22)}`,y2:"1",fill:"#0075ff",stroke:"#0075ff"})),(0,n.h)("text",{"aria-hidden":"true","font-size":"0.1em","text-anchor":"middle","dominant-baseline":"central",fill:"currentColor"},e._value,e._unit))),(0,n.h)("progress",{"aria-busy":this.state._value<this.state._max?"true":"false",max:this.state._max,value:this.state._value}),(0,n.h)("span",{"aria-live":"polite","aria-relevant":"removals text",hidden:!0},this.state._liveValue," von ",this.state._max," ",this.state._unit));var e}validateLabel(e){(0,o.w)(this,"_label",e)}validateMax(e){"number"!=typeof e&&(e=100),(0,o.e)(this,"_max",e,{required:!0})}validateType(e){this.validateVariant(e)}validateUnit(e){(0,o.w)(this,"_unit",e)}validateValue(e){"number"!=typeof e&&(e=0),(0,o.e)(this,"_value",e,{required:!0})}validateVariant(e){!e&&this._type&&(e=this._type),"cycle"!==e&&(e="bar"),this.state=Object.assign(Object.assign({},this.state),{_variant:e})}componentWillLoad(){this.validateLabel(this._label),this.validateMax(this._max),this.validateUnit(this._unit),this.validateValue(this._value),this.validateVariant(this._variant||this._type),this.interval=setInterval((()=>{this.state._liveValue!==this.state._value&&(this.state=Object.assign(Object.assign({},this.state),{_liveValue:this.state._value}))}),5e3)}disconnectedCallback(){clearInterval(this.interval)}static get watchers(){return{_label:["validateLabel"],_max:["validateMax"],_type:["validateType"],_unit:["validateUnit"],_value:["validateValue"],_variant:["validateVariant"]}}};a.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}progress{display:block;height:0;overflow:hidden;width:0}.progress{transition:0.5s ease-in-out 0.25s}.cycle .progress{transform-origin:50% 50%;transform:rotate(-90deg)}"}},93262:(e,t,r)=>{r.d(t,{K:()=>ie,a:()=>D,b:()=>q,c:()=>A,d:()=>R,e:()=>P,f:()=>T,g:()=>C,h:()=>F,i:()=>oe,j:()=>Z,k:()=>Y,l:()=>ae,m:()=>J,n:()=>te,o:()=>H,p:()=>K,q:()=>G,r:()=>c,s:()=>j,t:()=>re,u:()=>W,w:()=>$});var n=r(76649),o=r(1694),a=r(81931);const i=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;i(r,t.querySelectorAll(e));const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const o=n[t].shadowRoot;i(r,l(e,"object"==typeof o&&null!==o?o:n[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const o=n[t].shadowRoot;if(r=s(e,"object"==typeof o&&null!==o?o:n[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=p,d=p,u=function(e){var t=m(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},h=function(e){var t=m(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},f=function(e){3==(t=m(e)).length&&t.push(255);var t,r=255==t[3],n=v(t[0]),o=v(t[1]),a=v(t[2]),i=function(e,t,r,n){var o=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=o.indexOf(e)&&-1!=o.indexOf(t)&&-1!=o.indexOf(r)&&-1!=o.indexOf(n)}(n,o,a,t=v(Math.round(t[3])));return r?i?"#"+n.charAt(0)+o.charAt(0)+a.charAt(0):"#"+n+o+a:i?"#"+n.charAt(0)+o.charAt(0)+a.charAt(0)+t.charAt(0):"#"+n+o+a+t},g=function(e){var t=m(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function p(e){var t=m(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function m(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var n=b(t[0]),o=b(t[1]),a=b(t[2]),i=3==r?255:b(t[3]);if(isNaN(n)||isNaN(o)||isNaN(a)||isNaN(i))return;return[n,o,a,i]}}(e)||function(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var n=b(t.slice(0,2)),o=b(t.slice(2,4)),a=b(t.slice(4,6)),i=6==r?255:b(t.slice(6,8));if(isNaN(n)||isNaN(o)||isNaN(a)||isNaN(i))return;return[n,o,a,i]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=y(t[0],!0),n=y(t[1],!0),o=y(t[2],!0);if(-1!=r&&-1!=n&&-1!=o)return[r,n,o,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=y(t[0],!0),n=y(t[1],!0),o=y(t[2],!0),a=y(255*t[3]);if(-1!=r&&-1!=n&&-1!=o&&-1!=a)return[r,n,o,a]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=y(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=y(null!=e.g?e.g:null!=e.green?e.green:0,!0),n=y(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),o=y(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=n&&-1!=o)return[t,r,n,o]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=y(e[0],!0),r=y(e[1],!0),n=y(e[2],!0),o=y(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=n&&-1!=o)return[t,r,n,o]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function v(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function b(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function y(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=d,c.obj=u,c.css=h,c.hex=f,c.num=g;var w=.2126,x=.7152,k=.0722,S=1/12.92;function _(e){return Math.pow((e+.055)/1.055,2.4)}function L(e){var t=e[0]/255,r=e[1]/255,n=e[2]/255,o=t<=.03928?t*S:_(t),a=r<=.03928?r*S:_(r),i=n<=.03928?n*S:_(n);return o*w+a*x+i*k}function N(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function M(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(L(e),L(t))}function A(e,t){return M(N(e),N(t))}function O(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const E=/\[object Object\]/,H=(e,t)=>{"string"==typeof e&&E.test(e)||t()},C=(e,t)=>{"string"==typeof e&&""===e||t()},T=(e,t)=>{(0,o.b)()&&(o.L.debug([e,t]),o.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},j=(e,t,r,n={})=>{var o,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==r&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof n.afterPatch&&(null===(o=e.nextHooks.get(t))||void 0===o||o.set("afterPatch",n.afterPatch)),"function"==typeof n.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",n.beforePatch)),e.nextState.set(t,r),(e=>{var t,r,n;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var n;const o=t.get("beforePatch");"function"==typeof o&&o(null===(n=e.nextState)||void 0===n?void 0:n.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(n=e.nextHooks)||void 0===n||n.forEach(((t,r)=>{const n=t.get("afterPatch");"function"==typeof n&&n(e.state[r],e.state,e,r)}))),delete e.nextHooks})(e))},z=(e,t,r,o)=>{(0,n.d)(`[${e.constructor.name}] Der Property-Wert (${r}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)};function D(e,t,r,n,o,a={}){r(o)?j(e,t,o,a.hooks):null!=o||a.required?(a.required||n.add(null),z(e,t,o,n)):j(e,t,a.defaultValue,a.hooks)}const q=(e,t,r,n)=>{D(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,n)},$=(e,t,r,n={})=>{const o="number"==typeof n.minLength?null==n?void 0:n.minLength:0;D(e,t,(e=>"string"==typeof e&&e.length>=o&&(void 0===(null==n?void 0:n.maxLength)||e.length<=n.maxLength)),new Set(["String"]),r,n)},P=(e,t,r,n)=>{D(e,t,(e=>"number"==typeof e&&(void 0===(null==n?void 0:n.min)||"number"==typeof(null==n?void 0:n.min)&&e>=n.min)&&(void 0===(null==n?void 0:n.max)||"number"==typeof(null==n?void 0:n.max)&&e<=n.max)),new Set(["Number"]),r,n)},R=(e,t,r,n,a=(e=>e==e),i={})=>{C(n,(()=>{H(n,(()=>{void 0===n&&(n=[]);try{try{n=K(n)}catch(e){}if(Array.isArray(n)){const l=n.find((e=>!r(e)));void 0===l&&a(n)?j(e,t,n,i.hooks):H(l,(()=>{throw o.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else H(n,(()=>{throw o.L.debug(n),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){o.L.debug(e)}}))}))},V=/^(true|false)$/,B=/^-?(0|[1-9]\d*)$/,I=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,J=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if(V.test(e))e="true"===e;else if(B.test(e))e=parseInt(e);else if(I.test(e))e=parseFloat(e);else if(U.test(e))try{e=K(e)}catch(e){}return t!==typeof e&&(0,n.d)(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},W=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(k){throw o.L.warn(["stringifyJson",e]),o.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},U=/^[{[]/,K=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(k){if(U.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(k){o.L.warn(["parseJson",e]),o.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},F=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,Z=e=>"string"==typeof e?e:F(e),Y=(e,t)=>s(e,t||(0,o.g)()),G=(e,t)=>l(e,t||(0,o.g)());let Q=null;const X=()=>(Q=Q||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,o.g)().body,level:"Fail",score:1},Q),ee=/(\d+, ){3}0\)/,te=(e,t=X())=>{const r=getComputedStyle(e),n=ee.test(r.backgroundColor)?t.backgroundColor:c.hex(r.backgroundColor),a=ee.test(r.color)?t.color:c.hex(r.color),i=A(n,a),l={backgroundColor:n,color:a,domNode:e,level:O(i),score:i};return i<4.5&&o.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},re=(e,t=X())=>{t.domNode instanceof HTMLElement&&(t=te(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let n=0;n<r.length&&(t.domNode=r[n],null===(t=re(e,t)).domNode);n++);return t}return te(r,t)},ne=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,o.a)().pageYOffset-50}),e.focus()):(0,n.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},oe=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,n.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const r=`${t}`;t=e,e=r}if("string"==typeof e){const r=Y(e,t);r instanceof HTMLElement?ne(r):(0,n.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,n.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class ae{static queryHtmlElementColors(e,t,r=!1,n=!0){let a=null;if(!0===r||!1===ae.executionLock)if(!1===r&&(ae.cache.clear(),ae.cache.set(t.domNode,t),ae.executionLock=!0,!0===n&&o.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)a=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const n=t.domNode;if("function"==typeof n.assignedNodes){const e=n.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const o=t.domNode.children;for(let e=0;e<o.length;e++)r.add(o[e]);const i=Array.from(r);for(let l=0;l<i.length;l++){let r=ae.cache.get(i[l]);void 0===r&&(r=te(i[l],t)),ae.cache.set(i[l],r);const n=ae.queryHtmlElementColors(e,r,!0,!1);if(null!==n){a=n;break}}}else o.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===n&&o.L.debug(`[KoliBriUtils] Color contrast analysis finished (${ae.cache.size} DOM elements are analysed).`),ae.executionLock=!1,ae.cache.clear()),a}}ae.executionLock=!1,ae.cache=new Map;class ie{}ie.patchTheme=a.p,ie.patchThemeTag=a.a,ie.querySelector=Y,ie.querySelectorAll=G,ie.scrollByHTMLElement=ne,ie.scrollBySelector=oe,ie.stringifyJson=W}}]);