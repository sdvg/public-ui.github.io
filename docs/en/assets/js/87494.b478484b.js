/*! For license information please see 87494.b478484b.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[87494],{21491:(e,t,n)=>{n.d(t,{a:()=>o,b:()=>f,c:()=>b,d:()=>s,e:()=>g,f:()=>d,g:()=>l,u:()=>u});var a=n(9724);const i=new Set,o=(e,t)=>{(!1===i.has(e)||(null==t?void 0:t.force))&&(i.add(e),a.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},r=new Set,s=(e,t)=>{(!1===r.has(e)||(null==t?void 0:t.force))&&(r.add(e),a.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},l=(e,t)=>{(!1===r.has(e)||(null==t?void 0:t.force))&&(r.add(e),a.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},c=new Set,d=(e,t=!1,n)=>{(!1===c.has(e)||(null==n?void 0:n.force))&&(c.add(e),e+=!0===t?" \u2705":"",a.L.debug([e].concat((null==n?void 0:n.details)||[]),{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};s("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const h=new Set,u=(e,t)=>{(!1===h.has(e)||(null==t?void 0:t.force))&&(h.add(e),a.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},g=()=>{o('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},f=e=>{"string"==typeof e&&""!==e||o("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},b=(e,t=8)=>{t>7&&u(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},71297:(e,t,n)=>{n.d(t,{v:()=>i});var a=n(48167);const i=(e,t)=>{(0,a.d)(e,"_accessKey",t)}},23589:(e,t,n)=>{n.d(t,{a:()=>o,v:()=>r});var a=n(48167);const i=["left","right","top","bottom"],o=(e,t)=>{r(e,"_align",t)},r=(e,t,n)=>{(0,a.w)(e,t,(e=>"string"==typeof e&&i.includes(e)),new Set(i),n,{defaultValue:"top"})}},67098:(e,t,n)=>{n.d(t,{v:()=>i});var a=n(48167);const i=(e,t)=>{(0,a.d)(e,"_role",t)}},91621:(e,t,n)=>{n.d(t,{v:()=>i});var a=n(48167);const i=(e,t,n={})=>{(0,a.a)(e,"_hideLabel",t,n)}},30301:(e,t,n)=>{n.d(t,{a:()=>c});var a=n(3708),i=n(21491);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri","sort-ascending":"Die Spalte {{column}} ist aufsteigend{{multi}} sortiert.","sort-descending":"Die Spalte {{column}} ist absteigend{{multi}} sortiert.","sort-then-ascending":", dann die Spalte {{column}} aufsteigend","sort-then-descending":", dann die Spalte {{column}} absteigend","sort-then-last-ascending":" und dann die Spalte {{column}} aufsteigend","sort-then-last-descending":" und dann die Spalte {{column}} absteigend","sort-none":"Spalte {{column}} nicht sortiert","table-sort-none":"Keine Spalte ist sortiert.","table-pagination-label":"Paginierung f\xfcr die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schlie\xdfen"},r={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize navigation","nav-minimize":"Minimize navigation","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"Sorted column {{column}} descending{{multi}}","sort-ascending":"Sorted column {{column}} ascending{{multi}}","sort-then-ascending":", then column {{column}} acending","sort-then-descending":", then column {{column}} descending","sort-then-last-ascending":" and then column {{column}} acending","sort-then-last-descending":" and then column {{column}} descending","sort-none":"column {{column}} not sorted","table-sort-none":"No column is sorted.","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all"},s=e=>Object.keys(e).reduce(((t,n)=>(t[`kol-${n}`]=e[n],t)),{}),l=new Set([e=>e("en",s(r)),e=>e("de",s(o))]),c=(e,t)=>{const n=(0,a.g)();if(void 0===n)return(0,i.d)("[I18n] I18nService not available! Please call the global register function."),e;let o=n.translate(e,t);return o===e&&((0,i.d)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((e=>e(((e,t)=>(n.addResourceBundle(e,t),e))))),o=n.translate(e,t)),o}},4847:(e,t,n)=>{n.d(t,{i:()=>s,v:()=>l});var a=n(48167),i=n(68353);const o=(e,t,n)=>{(0,i.c)(n)?e[t]=n:(0,i.i)(n,1)&&(e[t]={icon:n})},r=e=>{var t,n,a;if(null===(t=e.nextState)||void 0===t?void 0:t.has("_icons")){const t=null===(n=e.nextState)||void 0===n?void 0:n.get("_icons");null===(a=e.nextState)||void 0===a||a.set("_icons",(e=>{let t={};return(0,i.i)(e,1)?t={left:{icon:e}}:"object"==typeof e&&null!==e&&(o(t,"top",e.top),o(t,"right",e.right),o(t,"bottom",e.bottom),o(t,"left",e.left)),t})(t))}},s=e=>"object"==typeof e&&null!==e&&(void 0===e.style||(0,i.b)(e.style))&&(0,i.i)(e.icon,1),l=(e,t)=>{(0,a.o)(t,(()=>{try{t=(0,a.p)(t)}catch(e){}(0,a.w)(e,"_icons",(e=>null===e||(0,i.i)(e,1)||"object"==typeof e&&null!==e&&((0,i.i)(e.left,1)||s(e.left)||(0,i.i)(e.right,1)||s(e.right)||(0,i.i)(e.top,1)||s(e.top)||(0,i.i)(e.bottom,1)||s(e.bottom))),new Set(["KoliBriIcon"]),t,{hooks:{beforePatch:(t,n)=>{null===t&&n.set("_icons",{}),r(e)}},required:!0})}))}},87494:(e,t,n)=>{n.r(t),n.d(t,{kol_link_wc:()=>m});var a=n(78331),i=n(30301),o=n(67098),r=n(48167),s=n(4847),l=n(20013),c=n(11357),d=n(21491),h=n(68353),u=n(85113),g=n(91621),f=n(71297);let b;const v=[],p=["date","location","page","step","time","true","false"],m=class{constructor(e){(0,a.r)(this,e),this.catchRef=e=>{this.ref=e,(0,h.a)(this.host,this.ref)},this.onClick=e=>{var t,n;"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onClick)&&(e.preventDefault(),e.stopPropagation(),(0,r.f)(e,this.ref),null===(n=this.state._on)||void 0===n||n.onClick(e,this.state._href))},this.getRenderValues=()=>{const e="string"==typeof this.state._target&&"_self"!==this.state._target,t={href:"string"==typeof this.state._href&&this.state._href.length>0?this.state._href:"javascript:void(0);",target:"string"==typeof this.state._target&&this.state._target.length>0?this.state._target:void 0,rel:e?"noopener":void 0,download:"string"==typeof this.state._download?this.state._download:void 0};return!0!==this.state._hideLabel||this.state._label||(0,d.d)("[KolLink] Es muss ein Aria-Label gesetzt werden _hide-label gesetzt ist."),{isExternal:e,tagAttrs:t}},this._accessKey=void 0,this._ariaCurrentValue=void 0,this._download=void 0,this._hideLabel=!1,this._href=void 0,this._icons=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._target=void 0,this._targetDescription=(0,i.a)("kol-open-link-in-tab"),this._tooltipAlign="right",this.state={_href:"\u2026",_icons:{},_ariaCurrentValue:"page"}}render(){const{isExternal:e,tagAttrs:t}=this.getRenderValues(),n=(0,h.s)(this.state._label);return(0,a.h)(a.H,null,(0,a.h)("a",Object.assign({ref:this.catchRef},t,{accessKey:this.state._accessKey,"aria-current":this.state._ariaCurrent,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,class:{"external-link":e,"hide-label":!0===this.state._hideLabel}},this.state._on,{onClick:this.onClick,onKeyPress:this.onClick,role:this.state._role,tabIndex:this.state._tabIndex}),(0,a.h)("kol-span-wc",{_accessKey:this.state._accessKey,_icons:this.state._icons,_hideLabel:this.state._hideLabel,_label:n?"":this.state._label||this.state._href},(0,a.h)("slot",{name:"expert",slot:"expert"})),e&&(0,a.h)("kol-icon",{class:"external-link-icon",_label:this.state._targetDescription,_icons:"codicon codicon-link-external"})),(0,a.h)("kol-tooltip-wc",{"aria-hidden":"true",hidden:n||!this.state._hideLabel,_accessKey:this.state._accessKey,_align:this.state._tooltipAlign,_label:this.state._label||this.state._href}))}validateAccessKey(e){(0,f.v)(this,e)}validateAriaCurrentValue(e){((e,t)=>{(0,r.w)(e,"_ariaCurrentValue",(e=>"string"==typeof e&&p.includes(e)),new Set([`AriaCurrentValue {${p.join(", ")}`]),t,{defaultValue:"page"})})(this,e)}validateDownload(e){((e,t)=>{(0,r.d)(e,"_download",t)})(this,e)}validateHideLabel(e){(0,g.v)(this,e)}validateHref(e){((e,t,n={})=>{(0,r.d)(e,"_href",t,n)})(this,e)}validateIcons(e){(0,s.v)(this,e)}validateLabel(e){(0,l.a)(this,e)}validateOn(e){((e,t)=>{"object"==typeof t&&"function"==typeof(null==t?void 0:t.onClick)&&(e.state=Object.assign(Object.assign({},e.state),{_on:t}))})(this,e)}validateRole(e){(0,o.v)(this,e)}validateTabIndex(e){(0,u.v)(this,e)}validateTarget(e){((e,t)=>{(0,r.d)(e,"_target",t)})(this,e)}validateTargetDescription(e){(0,r.d)(this,"_targetDescription",e)}validateTooltipAlign(e){(0,c.v)(this,e)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaCurrentValue(this._ariaCurrentValue),this.validateDownload(this._download),this.validateHideLabel(this._hideLabel),this.validateHref(this._href),this.validateIcons(this._icons),this.validateLabel(this._label),this.validateOn(this._on),this.validateRole(this._role),this.validateTabIndex(this._tabIndex),this.validateTarget(this._target),this.validateTargetDescription(this._targetDescription),this.validateTooltipAlign(this._tooltipAlign),this.unsubscribeOnLocationChange=((e,t=!0)=>(t&&"string"==typeof b&&e(b),v.push(e),()=>{const t=v.indexOf(e);t>=0&&v.splice(t,1)}))((e=>{this.state._ariaCurrent=e===this.state._href?this.state._ariaCurrentValue:void 0}))}disconnectedCallback(){this.unsubscribeOnLocationChange&&this.unsubscribeOnLocationChange()}get host(){return(0,a.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaCurrentValue:["validateAriaCurrentValue"],_download:["validateDownload"],_hideLabel:["validateHideLabel"],_href:["validateHref"],_icons:["validateIcons"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_targetDescription:["validateTargetDescription"],_tooltipAlign:["validateTooltipAlign"]}}}},20013:(e,t,n)=>{n.d(t,{a:()=>h,c:()=>l,h:()=>s,v:()=>d});var a=n(21491),i=n(48167);const o=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,r=/^\d+$/;function s(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(o))||void 0===t?void 0:t.length)||0}(e)>=t}function l(e){return r.test(e)}const c=new Set(["string"]),d=(e,t,n={})=>{(0,i.w)(e,"_label",(e=>"string"==typeof e),c,t,function(e){var t;return{hooks:{afterPatch:(t,n,i,o)=>{var r,c;"function"==typeof(null===(r=e.hooks)||void 0===r?void 0:r.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(t,n,i,o)),"string"==typeof t&&!1===s(t,3)&&!1===l(t)&&(0,a.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}}}(n))},h=d},48167:(e,t,n)=>{n.d(t,{K:()=>ae,a:()=>z,b:()=>N,c:()=>K,d:()=>H,e:()=>I,f:()=>P,g:()=>E,h:()=>J,i:()=>U,j:()=>ne,k:()=>Z,l:()=>ee,m:()=>V,n:()=>G,o:()=>O,p:()=>F,q:()=>te,r:()=>l,s:()=>T,t:()=>W,w:()=>j});var a=n(21491),i=n(9724);const o=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},r=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;o(n,t.querySelectorAll(e));const a=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<a.length;t++){const i=a[t].shadowRoot;o(n,r(e,"object"==typeof i&&null!==i?i:a[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const a=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<a.length;t++){const i=a[t].shadowRoot;if(n=s(e,"object"==typeof i&&null!==i?i:a[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var l=f,c=f,d=function(e){var t=b(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},h=function(e){var t=b(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},u=function(e){3==(t=b(e)).length&&t.push(255);var t,n=255==t[3],a=v(t[0]),i=v(t[1]),o=v(t[2]),r=function(e,t,n,a){var i=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=i.indexOf(e)&&-1!=i.indexOf(t)&&-1!=i.indexOf(n)&&-1!=i.indexOf(a)}(a,i,o,t=v(Math.round(t[3])));return n?r?"#"+a.charAt(0)+i.charAt(0)+o.charAt(0):"#"+a+i+o:r?"#"+a.charAt(0)+i.charAt(0)+o.charAt(0)+t.charAt(0):"#"+a+i+o+t},g=function(e){var t=b(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function f(e){var t=b(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function b(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var a=p(t[0]),i=p(t[1]),o=p(t[2]),r=3==n?255:p(t[3]);if(isNaN(a)||isNaN(i)||isNaN(o)||isNaN(r))return;return[a,i,o,r]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var a=p(t.slice(0,2)),i=p(t.slice(2,4)),o=p(t.slice(4,6)),r=6==n?255:p(t.slice(6,8));if(isNaN(a)||isNaN(i)||isNaN(o)||isNaN(r))return;return[a,i,o,r]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=m(t[0],!0),a=m(t[1],!0),i=m(t[2],!0);if(-1!=n&&-1!=a&&-1!=i)return[n,a,i,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=m(t[0],!0),a=m(t[1],!0),i=m(t[2],!0),o=m(255*t[3]);if(-1!=n&&-1!=a&&-1!=i&&-1!=o)return[n,a,i,o]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=m(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=m(null!=e.g?e.g:null!=e.green?e.green:0,!0),a=m(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),i=m(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=a&&-1!=i)return[t,n,a,i]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=m(e[0],!0),n=m(e[1],!0),a=m(e[2],!0),i=m(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=a&&-1!=i)return[t,n,a,i]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function v(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function p(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function m(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}l.arr=c,l.obj=d,l.css=h,l.hex=u,l.num=g;var y=.2126,_=.7152,w=.0722,k=1/12.92;function S(e){return Math.pow((e+.055)/1.055,2.4)}function L(e){var t=e[0]/255,n=e[1]/255,a=e[2]/255,i=t<=.03928?t*k:S(t),o=n<=.03928?n*k:S(n),r=a<=.03928?a*k:S(a);return i*y+o*_+r*w}function x(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function A(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(L(e),L(t))}function N(e,t){return A(x(e),x(t))}function C(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const D=/\[object Object\]/,O=(e,t)=>{"string"==typeof e&&D.test(e)||t()},E=(e,t)=>{"string"==typeof e&&""===e||t()},P=(e,t)=>{(0,i.d)()&&(i.L.debug([e,t]),i.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},T=(e,t,n,a={})=>{var i,o;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==n&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof a.afterPatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("afterPatch",a.afterPatch)),"function"==typeof a.beforePatch&&(null===(o=e.nextHooks.get(t))||void 0===o||o.set("beforePatch",a.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,a;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var a;const i=t.get("beforePatch");"function"==typeof i&&i(null===(a=e.nextState)||void 0===a?void 0:a.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(a=e.nextHooks)||void 0===a||a.forEach(((t,n)=>{const a=t.get("afterPatch");"function"==typeof a&&a(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e))},M=(e,t,n,i)=>{(0,a.d)(`[${e.constructor.name}] Der Property-Wert (${n}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(i).join(", ")}`)};function j(e,t,n,a,i,o={}){n(i)?T(e,t,i,o.hooks):null!=i||o.required?(o.required||a.add(null),M(e,t,i,a)):T(e,t,o.defaultValue,o.hooks)}const z=(e,t,n,a)=>{j(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,a)},H=(e,t,n,a={})=>{const i="number"==typeof a.minLength?null==a?void 0:a.minLength:0;j(e,t,(e=>"string"==typeof e&&e.length>=i&&(void 0===(null==a?void 0:a.maxLength)||e.length<=a.maxLength)),new Set(["String"]),n,a)},I=(e,t,n,a)=>{j(e,t,(e=>"number"==typeof e&&(void 0===(null==a?void 0:a.min)||"number"==typeof(null==a?void 0:a.min)&&e>=a.min)&&(void 0===(null==a?void 0:a.max)||"number"==typeof(null==a?void 0:a.max)&&e<=a.max)),new Set(["Number"]),n,a)},K=(e,t,n,a,o=(e=>e==e),r={})=>{E(a,(()=>{O(a,(()=>{void 0===a&&(a=[]);try{try{a=F(a)}catch(e){}if(Array.isArray(a)){const s=a.find((e=>!n(e)));void 0===s&&o(a)?T(e,t,a,r.hooks):O(s,(()=>{throw i.L.debug(s),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else O(a,(()=>{throw i.L.debug(a),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){i.L.debug(e)}}))}))},R=/^(true|false)$/,$=/^-?(0|[1-9]\d*)$/,q=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,V=e=>{const t=typeof e,n=`${e}`;if("string"==typeof e)if(R.test(e))e="true"===e;else if($.test(e))e=parseInt(e);else if(q.test(e))e=parseFloat(e);else if(B.test(e))try{e=F(e)}catch(e){}return t!==typeof e&&(0,a.d)(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},W=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(w){throw i.L.warn(["stringifyJson",e]),i.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},B=/^[{[]/,F=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(w){if(B.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(w){i.L.warn(["parseJson",e]),i.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},J=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,U=e=>"string"==typeof e?e:J(e),Z=(e,t)=>s(e,t||(0,i.b)()),G=(e,t)=>r(e,t||(0,i.b)());let Y=null;const Q=()=>(Y=Y||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,i.b)().body,level:"Fail",score:1},Y),X=/(\d+, ){3}0\)/,ee=(e,t=Q())=>{const n=getComputedStyle(e),a=X.test(n.backgroundColor)?t.backgroundColor:l.hex(n.backgroundColor),o=X.test(n.color)?t.color:l.hex(n.color),r=N(a,o),s={backgroundColor:a,color:o,domNode:e,level:C(r),score:r};return r<4.5&&i.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},te=(e,t=Q())=>{t.domNode instanceof HTMLElement&&(t=ee(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let a=0;a<n.length&&(t.domNode=n[a],null===(t=te(e,t)).domNode);a++);return t}return ee(n,t)};class ne{static queryHtmlElementColors(e,t,n=!1,a=!0){let o=null;if(!0===n||!1===ne.executionLock)if(!1===n&&(ne.cache.clear(),ne.cache.set(t.domNode,t),ne.executionLock=!0,!0===a&&i.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)o=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const a=t.domNode;if("function"==typeof a.assignedNodes){const e=a.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const i=t.domNode.children;for(let e=0;e<i.length;e++)n.add(i[e]);const r=Array.from(n);for(let s=0;s<r.length;s++){let n=ne.cache.get(r[s]);void 0===n&&(n=ee(r[s],t)),ne.cache.set(r[s],n);const a=ne.queryHtmlElementColors(e,n,!0,!1);if(null!==a){o=a;break}}}else i.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===a&&i.L.debug(`[KoliBriUtils] Color contrast analysis finished (${ne.cache.size} DOM elements are analysed).`),ne.executionLock=!1,ne.cache.clear()),o}}ne.executionLock=!1,ne.cache=new Map;class ae{}ae.patchTheme=i.p,ae.patchThemeTag=i.a,ae.querySelector=Z,ae.querySelectorAll=G,ae.stringifyJson=W},85113:(e,t,n)=>{n.d(t,{v:()=>r});var a=n(21491),i=n(48167);const o={hooks:{afterPatch:e=>{-1!==e&&0!==e&&(0,a.a)("Don\u2019t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},r=(e,t)=>{(0,i.e)(e,"_tabIndex",t,o)}},11357:(e,t,n)=>{n.d(t,{v:()=>i});var a=n(23589);const i=(e,t)=>{(0,a.v)(e,"_tooltipAlign",t)}}}]);