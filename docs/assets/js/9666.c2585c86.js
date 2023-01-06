/*! For license information please see 9666.c2585c86.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_docusaurus=self.webpackChunk_public_ui_docusaurus||[]).push([[9666],{5149:(e,t,r)=>{r.d(t,{a:()=>f,b:()=>l,c:()=>p,d:()=>c,e:()=>n,f:()=>u,u:()=>b});var a=r(7738);const o=new Set,n=e=>{!1===o.has(e)&&(o.add(e),a.L.info(e,{classifier:"\u270ba11y",overwriteStyle:"; background-color: #09f"}))},i=new Set,l=e=>{!1===i.has(e)&&(i.add(e),a.L.warn(e,{classifier:"\ud83d\udd25deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},s=new Set,c=e=>{!1===s.has(e)&&(s.add(e),a.L.debug(e,{classifier:"\ud83d\udcbbdev",overwriteStyle:"; background-color: #f09"}))},d=new Set,u=(e,t=!1)=>{!1===d.has(e)&&(d.add(e),e+=!0===t?" \u2705":"",a.L.debug(e,{classifier:"\ud83c\udf1ffeature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const h=new Set,p=()=>{n('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},f=e=>{"string"==typeof e&&""!==e||n("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},b=(e,t=8)=>{var r;t>7&&(r=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===h.has(r)&&(h.add(r),a.L.debug(r,{classifier:"\ud83d\udcd1ui/ux",overwriteStyle:"; background-color: #060;"})))}},4340:(e,t,r)=>{r.d(t,{f:()=>c,s:()=>s});var a=1/12.92;function o(e){return Math.pow((e+.055)/1.055,2.4)}function n(e){var t=e[0]/255,r=e[1]/255,n=e[2]/255;return.2126*(t<=.03928?t*a:o(t))+.7152*(r<=.03928?r*a:o(r))+.0722*(n<=.03928?n*a:o(n))}function i(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function l(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(n(e),n(t))}function s(e,t){return l(i(e),i(t))}function c(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}},9666:(e,t,r)=>{r.r(t),r.d(t,{kol_skip_nav:()=>l});var a=r(3701),o=r(5149),n=r(6645),i=r(2216);const l=class{constructor(e){(0,a.r)(this,e),this._ariaLabel=void 0,this._links=void 0,this.state={_ariaLabel:"\u2026",_links:[]}}render(){return(0,a.h)("nav",{"aria-label":this.state._ariaLabel},(0,a.h)("ul",{class:"w-full z-50"},this.state._links.map(((e,t)=>(0,a.h)("li",{class:"text-center content-center h-0 overflow-y-visible",key:t},(0,a.h)("kol-link",Object.assign({class:"inline-block mt-4 mx-auto w-4/5",exportparts:"link"},e,{_ariaLabel:e._ariaLabel,_useCase:"nav",_stealth:!0}),e._label),"\xa0")))))}validateAriaLabel(e){(0,n.w)(this,"_ariaLabel",e,{required:!0}),(0,o.a)(e)}validateLinks(e){(0,i.w)("KolSkipNav",this,e)}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateLinks(this._links)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_links:["validateLinks"]}}};l.style={default:'*,::before,::after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--kolibri-border-color)}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:var(--kolibri-color);--tw-ring-color:rgba(undefined, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=\'search\']{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}b,strong{font-weight:bolder}button,select{text-transform:none}button,[type=\'button\'],[type=\'reset\'],[type=\'submit\']{-webkit-appearance:button}button{background-color:transparent;background-image:none}button,[role="button"]{cursor:pointer}code{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}fieldset{margin:0;padding:0}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}h1,p,h2,h3,h4,h5,h6{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}input,button,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;padding:0;line-height:inherit;color:inherit}input::placeholder{opacity:1;color:#9ca3af}input::webkit-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-ms-input-placeholder{opacity:1;color:#9ca3af}legend{padding:0}progress{vertical-align:baseline}small{font-size:80%}svg{display:block;vertical-align:middle}table{text-indent:0;border-color:inherit;border-collapse:collapse}textarea{resize:vertical}textarea::placeholder{opacity:1;color:#9ca3af}textarea::webkit-input-placeholder{opacity:1;color:#9ca3af}textarea::-moz-placeholder{opacity:1;color:#9ca3af}textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea::-ms-input-placeholder{opacity:1;color:#9ca3af}ul,ol{list-style:none;margin:0;padding:0}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.bg-normal{background-color:var(--kolibri-color-normal)}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-spin-1{background-color:var(--kolibri-color-spin-1)}.bg-spin-2{background-color:var(--kolibri-color-spin-2)}.bg-spin-3{background-color:var(--kolibri-color-spin-3)}.rounded{border-radius:var(--kolibri-border-radius)}.border-1{border-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.table{display:table}.grid{display:-ms-grid;display:grid}.hidden{display:none}.flex-wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.items-center{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.content-center{-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center}.font-80{font-weight:80}.font-60{font-weight:60}.h-full{height:100%}.h-0{height:0px}.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16{height:0.29rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.leading-normal{line-height:1.5}.list-none{list-style-type:none}.list-disc{list-style-type:disc}.list-decimal{list-style-type:decimal}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:calc(1 * var(--kolibri-spacing))}.mt-2{margin-top:calc(2 * var(--kolibri-spacing))}.mt-4{margin-top:calc(4 * var(--kolibri-spacing))}.mr-2{margin-right:calc(2 * var(--kolibri-spacing))}.ml-2{margin-left:calc(2 * var(--kolibri-spacing))}.outline{outline-style:solid}.overflow-hidden{overflow:hidden}.overflow-y-visible{overflow-y:visible}.p-2{padding:calc(2 * var(--kolibri-spacing))}.p-4{padding:calc(4 * var(--kolibri-spacing))}.px{padding-left:1px;padding-right:1px}.py-2{padding-top:calc(2 * var(--kolibri-spacing));padding-bottom:calc(2 * var(--kolibri-spacing))}.pl-8{padding-left:2rem}.pb-2{padding-bottom:calc(2 * var(--kolibri-spacing))}.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.absolute{position:absolute}.text-center{text-align:center}.hover\\:text-primary:hover{color:var(--kolibri-color-primary)}.text-normal{color:var(--kolibri-color-normal)}.italic{font-style:italic}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.indent{text-indent:1.5rem}.visible{visibility:visible}.w-full{width:100%}.w-4\\/5{width:80%}.z-50{z-index:50}.gap-1{grid-gap:calc(1 * var(--kolibri-spacing));gap:calc(1 * var(--kolibri-spacing))}.gap-2{grid-gap:calc(2 * var(--kolibri-spacing));gap:calc(2 * var(--kolibri-spacing))}.grid-flow-col{grid-auto-flow:column}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))}.animate{-webkit-animation-iteration-count:1;animation-iteration-count:1}.filter{--tw-blur:var(--tw-empty, );--tw-brightness:var(--tw-empty, );--tw-contrast:var(--tw-empty, );--tw-grayscale:var(--tw-empty, );--tw-hue-rotate:var(--tw-empty, );--tw-invert:var(--tw-empty, );--tw-saturate:var(--tw-empty, );--tw-sepia:var(--tw-empty, );--tw-drop-shadow:var(--tw-empty, );-webkit-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}:host *{-ms-hyphens:var(--kolibri-hyphens);-webkit-hyphens:var(--kolibri-hyphens);hyphens:var(--kolibri-hyphens);font-family:var(--kolibri-font-family);line-height:var(--kolibri-line-height);word-break:break-word}'}},6645:(e,t,r)=>{r.d(t,{K:()=>U,a:()=>N,b:()=>A,c:()=>E,d:()=>_,e:()=>L,f:()=>S,g:()=>P,h:()=>K,i:()=>$,j:()=>F,k:()=>R,l:()=>I,m:()=>j,n:()=>Y,o:()=>x,p:()=>D,q:()=>J,r:()=>d,s:()=>z,t:()=>T,w:()=>M});var a=r(4340),o=r(5149),n=r(7738),i=r(4776);const l=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;l(r,t.querySelectorAll(e));const a=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<a.length;t++){const o=a[t].shadowRoot;l(r,s(e,"object"==typeof o&&null!==o?o:a[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},c=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const a=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<a.length;t++){const o=a[t].shadowRoot;if(r=c(e,"object"==typeof o&&null!==o?o:a[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var d=g,u=g,h=function(e){var t=w(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},p=function(e){var t=w(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},f=function(e){3==(t=w(e)).length&&t.push(255);var t,r=255==t[3],a=m(t[0]),o=m(t[1]),n=m(t[2]),i=function(e,t,r,a){var o=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=o.indexOf(e)&&-1!=o.indexOf(t)&&-1!=o.indexOf(r)&&-1!=o.indexOf(a)}(a,o,n,t=m(Math.round(t[3])));return r?i?"#"+a.charAt(0)+o.charAt(0)+n.charAt(0):"#"+a+o+n:i?"#"+a.charAt(0)+o.charAt(0)+n.charAt(0)+t.charAt(0):"#"+a+o+n+t},b=function(e){var t=w(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function g(e){var t=w(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function w(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var a=v(t[0]),o=v(t[1]),n=v(t[2]),i=3==r?255:v(t[3]);if(isNaN(a)||isNaN(o)||isNaN(n)||isNaN(i))return;return[a,o,n,i]}}(e)||function(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var a=v(t.slice(0,2)),o=v(t.slice(2,4)),n=v(t.slice(4,6)),i=6==r?255:v(t.slice(6,8));if(isNaN(a)||isNaN(o)||isNaN(n)||isNaN(i))return;return[a,o,n,i]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=y(t[0],!0),a=y(t[1],!0),o=y(t[2],!0);if(-1!=r&&-1!=a&&-1!=o)return[r,a,o,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=y(t[0],!0),a=y(t[1],!0),o=y(t[2],!0),n=y(255*t[3]);if(-1!=r&&-1!=a&&-1!=o&&-1!=n)return[r,a,o,n]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=y(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=y(null!=e.g?e.g:null!=e.green?e.green:0,!0),a=y(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),o=y(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=a&&-1!=o)return[t,r,a,o]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=y(e[0],!0),r=y(e[1],!0),a=y(e[2],!0),o=y(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=a&&-1!=o)return[t,r,a,o]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function m(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function v(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function y(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}d.arr=u,d.obj=h,d.css=p,d.hex=f,d.num=b;const k=/\[object Object\]/,x=(e,t)=>{"string"==typeof e&&k.test(e)||t()},S=(e,t)=>{"string"==typeof e&&""===e||t()},L=(e,t)=>{(0,n.b)()&&(console.log(e,t),(0,o.d)("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},z=(e,t,r,a={})=>{var o,n;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==r&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof a.afterPatch&&(null===(o=e.nextHooks.get(t))||void 0===o||o.set("afterPatch",a.afterPatch)),"function"==typeof a.beforePatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("beforePatch",a.beforePatch)),e.nextState.set(t,r),(e=>{var t,r,a;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var a;const o=t.get("beforePatch");"function"==typeof o&&o(null===(a=e.nextState)||void 0===a?void 0:a.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(a=e.nextHooks)||void 0===a||a.forEach(((t,r)=>{const a=t.get("afterPatch");"function"==typeof a&&a(e.state[r],e.state,e,r)}))),delete e.nextHooks})(e))},N=(e,t,r,a,n,i={})=>{r(n)?z(e,t,n,null==i?void 0:i.hooks):void 0===n||null===n&&(void 0===(null==i?void 0:i.required)||!1===(null==i?void 0:i.required))?z(e,t,null==i?void 0:i.defaultValue,null==i?void 0:i.hooks):(void 0!==(null==i?void 0:i.required)&&!1!==(null==i?void 0:i.required)||a.add(null),((e,t,r,a)=>{(0,o.d)(`[${e.constructor.name}] Der Property-Wert (${r}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(a).join(", ")}`)})(e,t,n,a))},A=(e,t,r,a)=>{N(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,a)},M=(e,t,r,a={})=>{const o="number"==typeof a.minLength?null==a?void 0:a.minLength:0;N(e,t,(e=>"string"==typeof e&&e.length>=o),new Set([`String (Mindestl\xe4nge ${o})`]),r,a)},_=(e,t,r,a)=>{N(e,t,(e=>"number"==typeof e&&(void 0===(null==a?void 0:a.min)||"number"==typeof(null==a?void 0:a.min)&&e>=a.min)&&(void 0===(null==a?void 0:a.max)||"number"==typeof(null==a?void 0:a.max)&&e<=a.max)),new Set(["Number"]),r,a)},E=(e,t,r,a,n=(e=>e==e),i={})=>{S(a,(()=>{x(a,(()=>{void 0===a&&(a=[]);try{try{a=D(a)}catch(e){}if(Array.isArray(a)){const o=a.find((e=>!r(e)));void 0===o&&n(a)?z(e,t,a,i.hooks):x(o,(()=>{throw console.log(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else x(a,(()=>{throw console.log(a),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){(0,o.d)("Known bug: Zeichenkettenliste (string[])")}}))}))},O=/^(true|false)$/,C=/^-?(0|[1-9]\d*)$/,H=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,j=e=>{const t=typeof e,r=`${e}`;if("string"==typeof e)if(O.test(e))e="true"===e;else if(C.test(e))e=parseInt(e);else if(H.test(e))e=parseFloat(e);else if(q.test(e))try{e=D(e)}catch(e){}return t!==typeof e&&(0,o.d)(`You have used a stringified property value (${r} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},T=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw n.L.warn(["stringifyJson",e]),n.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},q=/^[{[]/,D=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){if(q.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){n.L.warn(["parseJson",e]),n.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},P=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,$=e=>"string"==typeof e?e:P(e),R=(e,t)=>c(e,t||(0,n.g)()),Y=(e,t)=>s(e,t||(0,n.g)());let Z=null;const B=()=>(Z=Z||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,n.g)().body,level:"Fail",score:1},Z),X=/(\d+, ){3}0\)/,I=(e,t=B())=>{const r=getComputedStyle(e),o=X.test(r.backgroundColor)?t.backgroundColor:d.hex(r.backgroundColor),i=X.test(r.color)?t.color:d.hex(r.color),l=(0,a.s)(o,i),s={backgroundColor:o,color:i,domNode:e,level:(0,a.f)(l),score:l};return l<4.5&&n.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},J=(e,t=B())=>{t.domNode instanceof HTMLElement&&(t=I(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let a=0;a<r.length&&(t.domNode=r[a],null===(t=J(e,t)).domNode);a++);return t}return I(r,t)},W=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,n.a)().pageYOffset-50}),e.focus()):(0,o.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},K=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,o.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const r=`${t}`;t=e,e=r}if("string"==typeof e){const r=R(e,t);r instanceof HTMLElement?W(r):(0,o.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,o.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class F{static queryHtmlElementColors(e,t,r=!1,a=!0){let o=null;if(!0===r||!1===F.executionLock)if(!1===r&&(F.cache.clear(),F.cache.set(t.domNode,t),F.executionLock=!0,!0===a&&n.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)o=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const a=t.domNode;if("function"==typeof a.assignedNodes){const e=a.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const n=t.domNode.children;for(let e=0;e<n.length;e++)r.add(n[e]);const i=Array.from(r);for(let l=0;l<i.length;l++){let r=F.cache.get(i[l]);void 0===r&&(r=I(i[l],t)),F.cache.set(i[l],r);const a=F.queryHtmlElementColors(e,r,!0,!1);if(null!==a){o=a;break}}}else n.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===a&&n.L.debug(`[KoliBriUtils] Color contrast analysis finished (${F.cache.size} DOM elements are analysed).`),F.executionLock=!1,F.cache.clear()),o}}F.executionLock=!1,F.cache=new Map;class U{}U.patchTheme=i.p,U.patchThemeTag=i.a,U.querySelector=R,U.querySelectorAll=Y,U.scrollByHTMLElement=W,U.scrollBySelector=K,U.stringifyJson=T},2216:(e,t,r)=>{r.d(t,{w:()=>n});var a=r(5149),o=r(6645);const n=(e,t,r)=>{(0,o.c)(t,"_links",(e=>"object"==typeof e&&"string"==typeof e._label),r),(0,a.u)(e,t.state._links.length)}}}]);