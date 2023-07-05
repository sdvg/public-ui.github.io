/*! For license information please see 1717.636f3c30.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1717],{93538:(e,t,i)=>{i.d(t,{a:()=>o,b:()=>b,c:()=>p,d:()=>d,e:()=>l,f:()=>u,g:()=>v,h:()=>c,u:()=>f});var a=i(31509);const n=new Set,o=e=>{!1===n.has(e)&&(n.add(e),a.L.debug(e,{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},r=new Set,l=e=>{!1===r.has(e)&&(r.add(e),a.L.warn(e,{classifier:"\ud83d\udd25 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},s=new Set,d=e=>{!1===s.has(e)&&(s.add(e),a.L.debug(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},c=e=>{!1===s.has(e)&&(s.add(e),a.L.warn(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},h=new Set,u=(e,t=!1)=>{!1===h.has(e)&&(h.add(e),e+=!0===t?" \u2705":"",a.L.debug(e,{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};d("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const g=new Set,f=e=>{!1===g.has(e)&&(g.add(e),a.L.debug(e,{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},v=()=>{o('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},b=e=>{"string"==typeof e&&""!==e||o("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},p=(e,t=8)=>{t>7&&f(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},85023:(e,t,i)=>{i.d(t,{a:()=>o,v:()=>n});var a=i(22315);const n=(e,t)=>{(0,a.a)(e,"_ariaCurrent",(e=>"date"===e||"location"===e||"page"===e||"step"===e||"time"===e||!0===e),new Set(["String {data, location, page, step, time}","boolean"]),t)},o=(e,t)=>{(0,a.b)(e,"_ariaSelected",t)}},59113:(e,t,i)=>{i.d(t,{w:()=>n});var a=i(22315);const n=(e,t,i)=>{(0,a.a)(e,t,(e=>"top"===e||"right"===e||"bottom"===e||"left"===e),new Set(["Alignment {top, right, buttom, left}"]),i,{defaultValue:"top"})}},52617:(e,t,i)=>{i.d(t,{v:()=>n});var a=i(22315);const n=(e,t)=>{(0,a.b)(e,"_hideLabel",t)}},55249:(e,t,i)=>{i.d(t,{a:()=>d});var a=i(10956),n=i(93538);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri"},r={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},l=e=>Object.keys(e).reduce(((t,i)=>(t[`kol-${i}`]=e[i],t)),{}),s=new Set([e=>e("en",l(r)),e=>e("de",l(o))]),d=(e,t)=>{const i=(0,a.g)();if(void 0===i)return(0,n.d)("[I18n] I18nService not available! Please call the global register function."),e;let o=i.translate(e,t);return o===e&&((0,n.d)("[I18n] Locales not initialized! Initialize default locales automatically."),s.forEach((e=>e(((e,t)=>(i.addResourceBundle(e,t),e))))),o=i.translate(e,t)),o}},26899:(e,t,i)=>{i.d(t,{i:()=>l,v:()=>s,w:()=>d});var a=i(22315),n=i(80450);const o=(e,t,i)=>{(0,n.c)(i)?e[t]=i:(0,n.i)(i,1)&&(e[t]={icon:i})},r=e=>{var t,i,a,r,l,s,d;if(null===(t=e.nextState)||void 0===t?void 0:t.has("_icon")){const t=null===(i=e.nextState)||void 0===i?void 0:i.get("_icon"),l=(null===(a=e.nextState)||void 0===a?void 0:a.get("_iconAlign"))||e.state._iconAlign;null===(r=e.nextState)||void 0===r||r.set("_icon",((e,t)=>{let i={};return(0,n.i)(e,1)?i="right"===t?{right:{icon:e}}:{left:{icon:e}}:"object"==typeof e&&null!==e&&(o(i,"top",e.top),o(i,"right",e.right),o(i,"bottom",e.bottom),o(i,"left",e.left)),i})(t,l))}else if(null===(l=e.nextState)||void 0===l?void 0:l.has("_iconAlign")){const t=e.state._iconAlign;null===(s=e.nextState)||void 0===s||s.set("_icon",{[t]:void 0,[null===(d=e.nextState)||void 0===d?void 0:d.get("_iconAlign")]:e.state._icon[t]})}},l=e=>"object"==typeof e&&null!==e&&(void 0===e.style||(0,n.b)(e.style))&&(0,n.i)(e.icon,1),s=(e,t)=>{(0,a.o)(t,(()=>{try{t=(0,a.p)(t)}catch(e){}(0,a.a)(e,"_icon",(e=>null===e||(0,n.i)(e,1)||"object"==typeof e&&null!==e&&((0,n.i)(e.left,1)||l(e.left)||(0,n.i)(e.right,1)||l(e.right)||(0,n.i)(e.top,1)||l(e.top)||(0,n.i)(e.bottom,1)||l(e.bottom))),new Set(["KoliBriIcon"]),t,{hooks:{beforePatch:(t,i)=>{null===t&&i.set("_icon",{}),r(e)}},required:!0})}))},d=(e,t)=>{(0,a.a)(e,"_iconAlign",(e=>"left"===e||"right"===e),new Set(["Alignment {left, right, top, bottom}"]),t,{hooks:{beforePatch:()=>{r(e)}}})}},41717:(e,t,i)=>{i.r(t),i.d(t,{kol_link_wc:()=>v});var a=i(62267),n=i(55249),o=i(59113),r=i(93538),l=i(31509),s=i(22315),d=i(80450),c=i(26899),h=i(21005),u=i(88303),g=i(85023),f=i(52617);const v=class{constructor(e){(0,a.r)(this,e),this.nonce=(0,l.n)(),this.catchRef=e=>{this.ref=e,(0,d.a)(this.host,this.ref)},this.onClick=e=>{var t,i;"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onClick)&&(e.preventDefault(),(0,s.f)(e,this.ref),null===(i=this.state._on)||void 0===i||i.onClick(e,this.state._href))},this.getRenderValues=()=>{let e={};"string"==typeof this.state._selector&&(e={role:"link",tabIndex:0,onClick:()=>{(0,s.i)(this.state._selector)},onKeyPress:()=>{(0,s.i)(this.state._selector)}});const t="string"==typeof this.state._target&&"_self"!==this.state._target,i={href:"string"==typeof this.state._href&&this.state._href.length>0?this.state._href:"javascript:void(0);",target:"string"==typeof this.state._target&&this.state._target.length>0?this.state._target:void 0,rel:t?"noopener":void 0};return"image"!==this.state._useCase&&!0!==this.state._hideLabel||this.state._label||(0,r.d)("[KolLink] Es muss ein Aria-Label gesetzt werden, wenn eine Grafik verlinkt oder der _hide-label gesetzt ist."),{isExternal:t,tagAttrs:i,goToProps:e}},this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._disabled=!1,this._download=!1,this._hideLabel=!1,this._href=void 0,this._icon=void 0,this._iconAlign=void 0,this._iconOnly=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._selector=void 0,this._stealth=!1,this._tabIndex=void 0,this._target=void 0,this._targetDescription=(0,n.a)("kol-open-link-in-tab"),this._tooltipAlign="right",this._useCase="text",this.state={_href:"javascript:void(0);",_icon:{},_label:"\u2026"}}render(){const{isExternal:e,tagAttrs:t,goToProps:i}=this.getRenderValues();return(0,a.h)(a.H,null,(0,a.h)("a",Object.assign({ref:this.catchRef},t,{"aria-controls":this.state._ariaControls,"aria-current":this.state._ariaCurrent,"aria-expanded":(0,s.h)(this.state._ariaExpanded),"aria-labelledby":"image"===this.state._useCase||!0===this.state._hideLabel?this.nonce:void 0,"aria-selected":(0,s.h)(this.state._ariaSelected),class:{disabled:!0===this.state._disabled,"skip ":!1!==this.state._stealth,"icon-only":!0===this.state._hideLabel,"hide-label":!0===this.state._hideLabel,"external-link":e}},this.state._on,{onClick:this.onClick,onKeyPress:this.onClick},i,{role:this.state._role,tabIndex:this.state._tabIndex}),(0,a.h)("kol-span-wc",{_icon:this._icon,_hideLabel:this._hideLabel,_label:this.state._label},(0,a.h)("slot",{name:"expert",slot:"expert"})),e&&(0,a.h)("kol-icon",{class:"external-link-icon",_label:this.state._targetDescription,_icon:"codicon codicon-link-external"})),(0,a.h)("kol-tooltip",{"aria-hidden":"true",hidden:!0!==this.state._hideLabel,_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._label}))}validateAriaControls(e){(0,s.w)(this,"_ariaControls",e)}validateAriaCurrent(e){(0,g.v)(this,e)}validateAriaExpanded(e){(0,s.b)(this,"_ariaExpanded",e)}validateAriaLabel(e){this.validateLabel(e)}validateAriaSelected(e){(0,g.a)(this,e)}validateDisabled(e){(0,s.b)(this,"_disabled",e),!0===e&&(0,r.g)()}validateDownload(e){((e,t)=>{"boolean"==typeof t?(0,s.b)(e,"_download",t):(0,s.w)(e,"_download",t)})(this,e)}validateHideLabel(e){(0,f.v)(this,e)}validateHref(e){((e,t,i={})=>{(0,s.w)(e,"_href",t,i)})(this,e)}validateIcon(e){(0,c.v)(this,e)}validateIconAlign(e){(0,c.w)(this,e)}validateIconOnly(e){this.validateHideLabel(e)}validateLabel(e){(0,h.v)(this,e)}validateOn(e){"object"==typeof e&&"function"==typeof(null==e?void 0:e.onClick)&&(this.state=Object.assign(Object.assign({},this.state),{_on:e}))}validateRole(e){(0,s.w)(this,"_role",e)}validateSelector(e){(0,s.w)(this,"_selector",e)}validateStealth(e){((e,t)=>{(0,s.b)(e,"_stealth",t)})(this,e)}validateTabIndex(e){(0,u.v)(this,e)}validateTarget(e){(0,s.w)(this,"_target",e)}validateTargetDescription(e){(0,s.w)(this,"_targetDescription",e)}validateTooltipAlign(e){(0,o.w)(this,"_tooltipAlign",e)}validateUseCase(e){"string"==typeof e&&(this.state=Object.assign(Object.assign({},this.state),{_useCase:e}))}componentWillLoad(){this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaSelected(this._ariaSelected),this.validateDisabled(this._disabled),this.validateDownload(this._download),this.validateHideLabel(this._hideLabel||this._iconOnly),this.validateHref(this._href),this.validateIcon(this._icon),this.validateIconAlign(this._iconAlign),this.validateLabel(this._label||this._ariaLabel),this.validateOn(this._on),this.validateRole(this._role),this.validateSelector(this._selector),this.validateStealth(this._stealth),this.validateTabIndex(this._tabIndex),this.validateTarget(this._target),this.validateTargetDescription(this._targetDescription),this.validateTooltipAlign(this._tooltipAlign),this.validateUseCase(this._useCase)}get host(){return(0,a.g)(this)}static get watchers(){return{_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_disabled:["validateDisabled"],_download:["validateDownload"],_hideLabel:["validateHideLabel"],_href:["validateHref"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_selector:["validateSelector"],_stealth:["validateStealth"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_targetDescription:["validateTargetDescription"],_tooltipAlign:["validateTooltipAlign"],_useCase:["validateUseCase"]}}}},21005:(e,t,i)=>{i.d(t,{c:()=>s,h:()=>l,v:()=>d});var a=i(93538),n=i(22315);const o=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,r=/^\d+$/;function l(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(o))||void 0===t?void 0:t.length)||0}(e)>=t}function s(e){return r.test(e)}const d=(e,t,i={})=>{var o;(0,n.w)(e,"_label",t,{hooks:{afterPatch:(e,t,n,o)=>{var r,d;"function"==typeof(null===(r=i.hooks)||void 0===r?void 0:r.afterPatch)&&(null===(d=i.hooks)||void 0===d||d.afterPatch(e,t,n,o)),"string"==typeof e&&!1===l(e,3)&&!1===s(e)&&(0,a.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(o=i.hooks)||void 0===o?void 0:o.beforePatch},required:!0})}},22315:(e,t,i)=>{i.d(t,{K:()=>re,a:()=>I,b:()=>z,c:()=>N,d:()=>$,e:()=>R,f:()=>M,g:()=>T,h:()=>V,i:()=>ne,j:()=>Z,k:()=>G,l:()=>oe,m:()=>W,n:()=>te,o:()=>O,p:()=>U,q:()=>Y,r:()=>d,s:()=>P,t:()=>ie,u:()=>F,w:()=>j});var a=i(93538),n=i(31509),o=i(99080);const r=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const i=new Set;r(i,t.querySelectorAll(e));const a=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<a.length;t++){const n=a[t].shadowRoot;r(i,l(e,"object"==typeof n&&null!==n?n:a[t]))}return Array.from(i)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let i=t.querySelector(e);if(null===i){const a=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<a.length;t++){const n=a[t].shadowRoot;if(i=s(e,"object"==typeof n&&null!==n?n:a[t]),null!==i)break}}return i}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var d=v,c=v,h=function(e){var t=b(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},u=function(e){var t=b(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},g=function(e){3==(t=b(e)).length&&t.push(255);var t,i=255==t[3],a=p(t[0]),n=p(t[1]),o=p(t[2]),r=function(e,t,i,a){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(i)&&-1!=n.indexOf(a)}(a,n,o,t=p(Math.round(t[3])));return i?r?"#"+a.charAt(0)+n.charAt(0)+o.charAt(0):"#"+a+n+o:r?"#"+a.charAt(0)+n.charAt(0)+o.charAt(0)+t.charAt(0):"#"+a+n+o+t},f=function(e){var t=b(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function v(e){var t=b(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function b(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),i=t.length;if(3==i||4==i){var a=m(t[0]),n=m(t[1]),o=m(t[2]),r=3==i?255:m(t[3]);if(isNaN(a)||isNaN(n)||isNaN(o)||isNaN(r))return;return[a,n,o,r]}}(e)||function(e){var t=e.replace(/^#/,""),i=t.length;if(6==i||8==i){var a=m(t.slice(0,2)),n=m(t.slice(2,4)),o=m(t.slice(4,6)),r=6==i?255:m(t.slice(6,8));if(isNaN(a)||isNaN(n)||isNaN(o)||isNaN(r))return;return[a,n,o,r]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),i=_(t[0],!0),a=_(t[1],!0),n=_(t[2],!0);if(-1!=i&&-1!=a&&-1!=n)return[i,a,n,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),i=_(t[0],!0),a=_(t[1],!0),n=_(t[2],!0),o=_(255*t[3]);if(-1!=i&&-1!=a&&-1!=n&&-1!=o)return[i,a,n,o]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=_(null!=e.r?e.r:null!=e.red?e.red:0,!0),i=_(null!=e.g?e.g:null!=e.green?e.green:0,!0),a=_(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=_(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=i&&-1!=a&&-1!=n)return[t,i,a,n]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=_(e[0],!0),i=_(e[1],!0),a=_(e[2],!0),n=_(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=i&&-1!=a&&-1!=n)return[t,i,a,n]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function p(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function m(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function _(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}d.arr=c,d.obj=h,d.css=u,d.hex=g,d.num=f;var y=.2126,w=.7152,k=.0722,S=1/12.92;function A(e){return Math.pow((e+.055)/1.055,2.4)}function x(e){var t=e[0]/255,i=e[1]/255,a=e[2]/255,n=t<=.03928?t*S:A(t),o=i<=.03928?i*S:A(i),r=a<=.03928?a*S:A(a);return n*y+o*w+r*k}function L(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var i=parseInt(e,16);return[i>>16,i>>8&255,255&i,t]}function C(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(x(e),x(t))}function N(e,t){return C(L(e),L(t))}function E(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const D=/\[object Object\]/,O=(e,t)=>{"string"==typeof e&&D.test(e)||t()},T=(e,t)=>{"string"==typeof e&&""===e||t()},M=(e,t)=>{(0,n.b)()&&(n.L.debug([e,t]),n.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},P=(e,t,i,a={})=>{var n,o;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==i&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof a.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",a.afterPatch)),"function"==typeof a.beforePatch&&(null===(o=e.nextHooks.get(t))||void 0===o||o.set("beforePatch",a.beforePatch)),e.nextState.set(t,i),(e=>{var t,i,a;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,i)=>{var a;const n=t.get("beforePatch");"function"==typeof n&&n(null===(a=e.nextState)||void 0===a?void 0:a.get(i),e.nextState,e,i)})),(null===(i=e.nextState)||void 0===i?void 0:i.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(a=e.nextHooks)||void 0===a||a.forEach(((t,i)=>{const a=t.get("afterPatch");"function"==typeof a&&a(e.state[i],e.state,e,i)}))),delete e.nextHooks})(e))},H=(e,t,i,n)=>{(0,a.d)(`[${e.constructor.name}] Der Property-Wert (${i}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(n).join(", ")}`)};function I(e,t,i,a,n,o={}){i(n)?P(e,t,n,o.hooks):null!=n||o.required?(o.required||a.add(null),H(e,t,n,a)):P(e,t,o.defaultValue,o.hooks)}const z=(e,t,i,a)=>{I(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),i,a)},j=(e,t,i,a={})=>{const n="number"==typeof a.minLength?null==a?void 0:a.minLength:0;I(e,t,(e=>"string"==typeof e&&e.length>=n&&(void 0===(null==a?void 0:a.maxLength)||e.length<=a.maxLength)),new Set(["String"]),i,a)},R=(e,t,i,a)=>{I(e,t,(e=>"number"==typeof e&&(void 0===(null==a?void 0:a.min)||"number"==typeof(null==a?void 0:a.min)&&e>=a.min)&&(void 0===(null==a?void 0:a.max)||"number"==typeof(null==a?void 0:a.max)&&e<=a.max)),new Set(["Number"]),i,a)},$=(e,t,i,a,o=(e=>e==e),r={})=>{T(a,(()=>{O(a,(()=>{void 0===a&&(a=[]);try{try{a=U(a)}catch(e){}if(Array.isArray(a)){const l=a.find((e=>!i(e)));void 0===l&&o(a)?P(e,t,a,r.hooks):O(l,(()=>{throw n.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else O(a,(()=>{throw n.L.debug(a),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){n.L.debug(e)}}))}))},q=/^(true|false)$/,B=/^-?(0|[1-9]\d*)$/,K=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,W=e=>{const t=typeof e,i=`${e}`;if("string"==typeof e)if(q.test(e))e="true"===e;else if(B.test(e))e=parseInt(e);else if(K.test(e))e=parseFloat(e);else if(J.test(e))try{e=U(e)}catch(e){}return t!==typeof e&&(0,a.d)(`You have used a stringified property value (${i} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},F=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(k){throw n.L.warn(["stringifyJson",e]),n.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},J=/^[{[]/,U=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(k){if(J.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(k){n.L.warn(["parseJson",e]),n.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},V=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,Z=e=>"string"==typeof e?e:V(e),G=(e,t)=>s(e,t||(0,n.g)()),Y=(e,t)=>l(e,t||(0,n.g)());let Q=null;const X=()=>(Q=Q||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,n.g)().body,level:"Fail",score:1},Q),ee=/(\d+, ){3}0\)/,te=(e,t=X())=>{const i=getComputedStyle(e),a=ee.test(i.backgroundColor)?t.backgroundColor:d.hex(i.backgroundColor),o=ee.test(i.color)?t.color:d.hex(i.color),r=N(a,o),l={backgroundColor:a,color:o,domNode:e,level:E(r),score:r};return r<4.5&&n.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},ie=(e,t=X())=>{t.domNode instanceof HTMLElement&&(t=te(t.domNode,t));const i=t.domNode.querySelector(e);if(null===i){const i=t.domNode.querySelectorAll('[class="hydrated"]');for(let a=0;a<i.length&&(t.domNode=i[a],null===(t=ie(e,t)).domNode);a++);return t}return te(i,t)},ae=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,n.a)().pageYOffset-50}),e.focus()):(0,a.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ne=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,a.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const i=`${t}`;t=e,e=i}if("string"==typeof e){const i=G(e,t);i instanceof HTMLElement?ae(i):(0,a.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,a.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class oe{static queryHtmlElementColors(e,t,i=!1,a=!0){let o=null;if(!0===i||!1===oe.executionLock)if(!1===i&&(oe.cache.clear(),oe.cache.set(t.domNode,t),oe.executionLock=!0,!0===a&&n.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)o=t;else{const i=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)i.add(e[t])}const a=t.domNode;if("function"==typeof a.assignedNodes){const e=a.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&i.add(e[t])}const n=t.domNode.children;for(let e=0;e<n.length;e++)i.add(n[e]);const r=Array.from(i);for(let l=0;l<r.length;l++){let i=oe.cache.get(r[l]);void 0===i&&(i=te(r[l],t)),oe.cache.set(r[l],i);const a=oe.queryHtmlElementColors(e,i,!0,!1);if(null!==a){o=a;break}}}else n.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===i&&(!0===a&&n.L.debug(`[KoliBriUtils] Color contrast analysis finished (${oe.cache.size} DOM elements are analysed).`),oe.executionLock=!1,oe.cache.clear()),o}}oe.executionLock=!1,oe.cache=new Map;class re{}re.patchTheme=o.p,re.patchThemeTag=o.a,re.querySelector=G,re.querySelectorAll=Y,re.scrollByHTMLElement=ae,re.scrollBySelector=ne,re.stringifyJson=F},88303:(e,t,i)=>{i.d(t,{v:()=>r});var a=i(93538),n=i(22315);const o={hooks:{afterPatch:e=>{-1!==e&&0!==e&&(0,a.a)("Don\u2019t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},r=(e,t)=>{(0,n.e)(e,"_tabIndex",t,o)}}}]);