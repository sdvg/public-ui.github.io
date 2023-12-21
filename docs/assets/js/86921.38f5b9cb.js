/*! For license information please see 86921.38f5b9cb.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[86921],{27520:(e,t,n)=>{n.d(t,{a:()=>a,b:()=>f,c:()=>b,d:()=>l,e:()=>h,f:()=>d,g:()=>s,u:()=>g});var r=n(40480);const o=new Set,a=(e,t)=>{(!1===o.has(e)||(null==t?void 0:t.force))&&(o.add(e),r.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},i=new Set,l=(e,t)=>{(!1===i.has(e)||(null==t?void 0:t.force))&&(i.add(e),r.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},s=(e,t)=>{(!1===i.has(e)||(null==t?void 0:t.force))&&(i.add(e),r.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},c=new Set,d=(e,t=!1,n)=>{(!1===c.has(e)||(null==n?void 0:n.force))&&(c.add(e),e+=!0===t?" \u2705":"",r.L.debug([e].concat((null==n?void 0:n.details)||[]),{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};l("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const u=new Set,g=(e,t)=>{(!1===u.has(e)||(null==t?void 0:t.force))&&(u.add(e),r.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},h=()=>{a('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},f=e=>{"string"==typeof e&&""!==e||a("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},b=(e,t=8)=>{t>7&&g(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},45364:(e,t,n)=>{n.d(t,{a:()=>c});var r=n(38696),o=n(27520);const a={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri","sort-ascending":"Die Spalte {{column}} ist aufsteigend{{multi}} sortiert.","sort-descending":"Die Spalte {{column}} ist absteigend{{multi}} sortiert.","sort-then-ascending":", dann die Spalte {{column}} aufsteigend","sort-then-descending":", dann die Spalte {{column}} absteigend","sort-then-last-ascending":" und dann die Spalte {{column}} aufsteigend","sort-then-last-descending":" und dann die Spalte {{column}} absteigend","sort-none":"Spalte {{column}} nicht sortiert","table-sort-none":"Keine Spalte ist sortiert.","table-pagination-label":"Paginierung f\xfcr die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schlie\xdfen"},i={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"Sorted column {{column}} descending{{multi}}","sort-ascending":"Sorted column {{column}} ascending{{multi}}","sort-then-ascending":", then column {{column}} acending","sort-then-descending":", then column {{column}} descending","sort-then-last-ascending":" and then column {{column}} acending","sort-then-last-descending":" and then column {{column}} descending","sort-none":"column {{column}} not sorted","table-sort-none":"No column is sorted.","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all"},l=e=>Object.keys(e).reduce(((t,n)=>(t[`kol-${n}`]=e[n],t)),{}),s=new Set([e=>e("en",l(i)),e=>e("de",l(a))]),c=(e,t)=>{const n=(0,r.g)();if(void 0===n)return(0,o.d)("[I18n] I18nService not available! Please call the global register function."),e;let a=n.translate(e,t);return a===e&&((0,o.d)("[I18n] Locales not initialized! Initialize default locales automatically."),s.forEach((e=>e(((e,t)=>(n.addResourceBundle(e,t),e))))),a=n.translate(e,t)),a}},27344:(e,t,n)=>{n.d(t,{v:()=>o});var r=n(28854);const o=(e,t,n)=>{(0,r.d)(e,"_src",t,n)}},86921:(e,t,n)=>{n.r(t),n.d(t,{kol_avatar_wc:()=>s});var r=n(26231),o=n(45364),a=n(27344),i=n(48995);const l=e=>0===e.length?"":e[0].toUpperCase(),s=class{constructor(e){(0,r.r)(this,e),this._src=void 0,this._label=void 0,this.state={_src:"",_label:""}}render(){return(0,r.h)(r.H,null,(0,r.h)("div",{"aria-label":(0,o.a)("kol-avatar-alt",{placeholders:{name:this.state._label}}),class:"container",role:"img"},this.state._src?(0,r.h)("img",{alt:"","aria-hidden":"true",class:"image",src:this.state._src}):(0,r.h)("span",{"aria-hidden":"true",class:"initials"},(e=>{const t=e.split(/\s+/),n=t.at(0),r=t.at(-1);return t.length>=2&&n&&r?`${l(n)}${l(r)}`:l(e)})(this.state._label.trim()))))}validateSrc(e){(0,a.v)(this,e)}validateLabel(e){(0,i.v)(this,e)}componentWillLoad(){this.validateSrc(this._src),this.validateLabel(this._label)}static get watchers(){return{_src:["validateSrc"],_label:["validateLabel"]}}}},48995:(e,t,n)=>{n.d(t,{a:()=>u,c:()=>s,h:()=>l,v:()=>d});var r=n(27520),o=n(28854);const a=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,i=/^\d+$/;function l(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(a))||void 0===t?void 0:t.length)||0}(e)>=t}function s(e){return i.test(e)}const c=new Set(["string"]),d=(e,t,n={})=>{(0,o.w)(e,"_label",(e=>"string"==typeof e),c,t,function(e){var t;return{hooks:{afterPatch:(t,n,o,a)=>{var i,c;"function"==typeof(null===(i=e.hooks)||void 0===i?void 0:i.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(t,n,o,a)),"string"==typeof t&&!1===l(t,3)&&!1===s(t)&&(0,r.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,r.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}}}(n))},u=d},28854:(e,t,n)=>{n.d(t,{K:()=>re,a:()=>$,b:()=>E,c:()=>q,d:()=>j,e:()=>T,f:()=>D,g:()=>z,h:()=>U,i:()=>Z,j:()=>ne,k:()=>V,l:()=>ee,m:()=>F,n:()=>Y,o:()=>O,p:()=>K,q:()=>te,r:()=>s,s:()=>C,t:()=>B,w:()=>H});var r=n(40480),o=n(27520);const a=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},i=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;a(n,t.querySelectorAll(e));const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const o=r[t].shadowRoot;a(n,i(e,"object"==typeof o&&null!==o?o:r[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const o=r[t].shadowRoot;if(n=l(e,"object"==typeof o&&null!==o?o:r[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var s=f,c=f,d=function(e){var t=b(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},u=function(e){var t=b(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},g=function(e){3==(t=b(e)).length&&t.push(255);var t,n=255==t[3],r=p(t[0]),o=p(t[1]),a=p(t[2]),i=function(e,t,n,r){var o=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=o.indexOf(e)&&-1!=o.indexOf(t)&&-1!=o.indexOf(n)&&-1!=o.indexOf(r)}(r,o,a,t=p(Math.round(t[3])));return n?i?"#"+r.charAt(0)+o.charAt(0)+a.charAt(0):"#"+r+o+a:i?"#"+r.charAt(0)+o.charAt(0)+a.charAt(0)+t.charAt(0):"#"+r+o+a+t},h=function(e){var t=b(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function f(e){var t=b(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function b(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var r=m(t[0]),o=m(t[1]),a=m(t[2]),i=3==n?255:m(t[3]);if(isNaN(r)||isNaN(o)||isNaN(a)||isNaN(i))return;return[r,o,a,i]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var r=m(t.slice(0,2)),o=m(t.slice(2,4)),a=m(t.slice(4,6)),i=6==n?255:m(t.slice(6,8));if(isNaN(r)||isNaN(o)||isNaN(a)||isNaN(i))return;return[r,o,a,i]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=v(t[0],!0),r=v(t[1],!0),o=v(t[2],!0);if(-1!=n&&-1!=r&&-1!=o)return[n,r,o,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=v(t[0],!0),r=v(t[1],!0),o=v(t[2],!0),a=v(255*t[3]);if(-1!=n&&-1!=r&&-1!=o&&-1!=a)return[n,r,o,a]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=v(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=v(null!=e.g?e.g:null!=e.green?e.green:0,!0),r=v(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),o=v(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=r&&-1!=o)return[t,n,r,o]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=v(e[0],!0),n=v(e[1],!0),r=v(e[2],!0),o=v(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=r&&-1!=o)return[t,n,r,o]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function p(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function m(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function v(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}s.arr=c,s.obj=d,s.css=u,s.hex=g,s.num=h;var y=.2126,S=.7152,w=.0722,k=1/12.92;function N(e){return Math.pow((e+.055)/1.055,2.4)}function L(e){var t=e[0]/255,n=e[1]/255,r=e[2]/255,o=t<=.03928?t*k:N(t),a=n<=.03928?n*k:N(n),i=r<=.03928?r*k:N(r);return o*y+a*S+i*w}function A(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function x(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(L(e),L(t))}function E(e,t){return x(A(e),A(t))}function M(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const P=/\[object Object\]/,O=(e,t)=>{"string"==typeof e&&P.test(e)||t()},z=(e,t)=>{"string"==typeof e&&""===e||t()},D=(e,t)=>{(0,r.d)()&&(r.L.debug([e,t]),r.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},C=(e,t,n,r={})=>{var o,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==n&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof r.afterPatch&&(null===(o=e.nextHooks.get(t))||void 0===o||o.set("afterPatch",r.afterPatch)),"function"==typeof r.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",r.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,r;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var r;const o=t.get("beforePatch");"function"==typeof o&&o(null===(r=e.nextState)||void 0===r?void 0:r.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(r=e.nextHooks)||void 0===r||r.forEach(((t,n)=>{const r=t.get("afterPatch");"function"==typeof r&&r(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e))},_=(e,t,n,r)=>{(0,o.d)(`[${e.constructor.name}] Der Property-Wert (${n}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(r).join(", ")}`)};function H(e,t,n,r,o,a={}){n(o)?C(e,t,o,a.hooks):null!=o||a.required?(a.required||r.add(null),_(e,t,o,r)):C(e,t,a.defaultValue,a.hooks)}const $=(e,t,n,r)=>{H(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,r)},j=(e,t,n,r={})=>{const o="number"==typeof r.minLength?null==r?void 0:r.minLength:0;H(e,t,(e=>"string"==typeof e&&e.length>=o&&(void 0===(null==r?void 0:r.maxLength)||e.length<=r.maxLength)),new Set(["String"]),n,r)},T=(e,t,n,r)=>{H(e,t,(e=>"number"==typeof e&&(void 0===(null==r?void 0:r.min)||"number"==typeof(null==r?void 0:r.min)&&e>=r.min)&&(void 0===(null==r?void 0:r.max)||"number"==typeof(null==r?void 0:r.max)&&e<=r.max)),new Set(["Number"]),n,r)},q=(e,t,n,o,a=(e=>e==e),i={})=>{z(o,(()=>{O(o,(()=>{void 0===o&&(o=[]);try{try{o=K(o)}catch(e){}if(Array.isArray(o)){const l=o.find((e=>!n(e)));void 0===l&&a(o)?C(e,t,o,i.hooks):O(l,(()=>{throw r.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else O(o,(()=>{throw r.L.debug(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){r.L.debug(e)}}))}))},I=/^(true|false)$/,R=/^-?(0|[1-9]\d*)$/,W=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,F=e=>{const t=typeof e,n=`${e}`;if("string"==typeof e)if(I.test(e))e="true"===e;else if(R.test(e))e=parseInt(e);else if(W.test(e))e=parseFloat(e);else if(J.test(e))try{e=K(e)}catch(e){}return t!==typeof e&&(0,o.d)(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},B=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(w){throw r.L.warn(["stringifyJson",e]),r.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},J=/^[{[]/,K=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(w){if(J.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(w){r.L.warn(["parseJson",e]),r.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},U=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,Z=e=>"string"==typeof e?e:U(e),V=(e,t)=>l(e,t||(0,r.a)()),Y=(e,t)=>i(e,t||(0,r.a)());let G=null;const Q=()=>(G=G||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,r.a)().body,level:"Fail",score:1},G),X=/(\d+, ){3}0\)/,ee=(e,t=Q())=>{const n=getComputedStyle(e),o=X.test(n.backgroundColor)?t.backgroundColor:s.hex(n.backgroundColor),a=X.test(n.color)?t.color:s.hex(n.color),i=E(o,a),l={backgroundColor:o,color:a,domNode:e,level:M(i),score:i};return i<4.5&&r.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},te=(e,t=Q())=>{t.domNode instanceof HTMLElement&&(t=ee(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let r=0;r<n.length&&(t.domNode=n[r],null===(t=te(e,t)).domNode);r++);return t}return ee(n,t)};class ne{static queryHtmlElementColors(e,t,n=!1,o=!0){let a=null;if(!0===n||!1===ne.executionLock)if(!1===n&&(ne.cache.clear(),ne.cache.set(t.domNode,t),ne.executionLock=!0,!0===o&&r.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)a=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const r=t.domNode;if("function"==typeof r.assignedNodes){const e=r.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const o=t.domNode.children;for(let e=0;e<o.length;e++)n.add(o[e]);const i=Array.from(n);for(let l=0;l<i.length;l++){let n=ne.cache.get(i[l]);void 0===n&&(n=ee(i[l],t)),ne.cache.set(i[l],n);const r=ne.queryHtmlElementColors(e,n,!0,!1);if(null!==r){a=r;break}}}else r.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===o&&r.L.debug(`[KoliBriUtils] Color contrast analysis finished (${ne.cache.size} DOM elements are analysed).`),ne.executionLock=!1,ne.cache.clear()),a}}ne.executionLock=!1,ne.cache=new Map;class re{}re.patchTheme=r.b,re.patchThemeTag=r.A,re.querySelector=V,re.querySelectorAll=Y,re.stringifyJson=B}}]);