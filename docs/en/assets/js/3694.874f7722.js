/*! For license information please see 3694.874f7722.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[3694],{87611:(e,t,a)=>{a.d(t,{a:()=>o,b:()=>v,c:()=>p,d:()=>c,e:()=>l,f:()=>u,g:()=>b,h:()=>d,u:()=>f});var i=a(76944);const n=new Set,o=e=>{!1===n.has(e)&&(n.add(e),i.L.debug(e,{classifier:"\u270b a11y",overwriteStyle:"; background-color: #09f"}))},r=new Set,l=e=>{!1===r.has(e)&&(r.add(e),i.L.warn(e,{classifier:"\ud83d\udd25 deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},s=new Set,c=e=>{!1===s.has(e)&&(s.add(e),i.L.debug(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},d=e=>{!1===s.has(e)&&(s.add(e),i.L.warn(e,{classifier:"\ud83d\udcbb dev",overwriteStyle:"; background-color: #f09"}))},h=new Set,u=(e,t=!1)=>{!1===h.has(e)&&(h.add(e),e+=!0===t?" \u2705":"",i.L.debug(e,{classifier:"\ud83c\udf1f feature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const g=new Set,f=e=>{!1===g.has(e)&&(g.add(e),i.L.debug(e,{classifier:"\ud83d\udcd1 ui/ux",overwriteStyle:"; background-color: #060;"}))},b=()=>{o('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},v=e=>{"string"==typeof e&&""!==e||o("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},p=(e,t=8)=>{t>7&&f(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},26589:(e,t,a)=>{a.d(t,{a:()=>o,v:()=>n});var i=a(93657);const n=(e,t)=>{(0,i.a)(e,"_ariaCurrent",(e=>"date"===e||"location"===e||"page"===e||"step"===e||"time"===e||!0===e),new Set(["String {data, location, page, step, time}","boolean"]),t)},o=(e,t)=>{(0,i.b)(e,"_ariaSelected",t)}},3281:(e,t,a)=>{a.d(t,{w:()=>n});var i=a(93657);const n=(e,t,a)=>{(0,i.a)(e,t,(e=>"top"===e||"right"===e||"bottom"===e||"left"===e),new Set(["Alignment {top, right, buttom, left}"]),a,{defaultValue:"top"})}},96364:(e,t,a)=>{a.d(t,{a:()=>c});var i=a(73196),n=a(87611);const o={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schlie\xdfen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Eintr\xe4ge vorhanden.","change-order":"Sortierung von {{colLabel}} \xe4ndern","action-running":"Aktion wird ausgef\xfchrt...","action-done":"Aktion abgeschlossen","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zur\xfcck","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Eintr\xe4ge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgew\xe4hlt","page-per-site":"{{entries}} Eintr\xe4ge pro Seite","nav-maximize":"Navigation maximieren","nav-minimize":"Navigation minimieren","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab ge\xf6ffnet.","kolibri-logo":"Logo von KoliBri"},r={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","nav-maximize":"Maximize","nav-minimize":"Minimize","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo"},l=e=>Object.keys(e).reduce(((t,a)=>(t[`kol-${a}`]=e[a],t)),{}),s=new Set([e=>e("en",l(r)),e=>e("de",l(o))]),c=(e,t)=>{const a=(0,i.g)();if(void 0===a)return(0,n.d)("[I18n] I18nService not available! Please call the global register function."),e;let o=a.translate(e,t);return o===e&&((0,n.d)("[I18n] Locales not initialized! Initialize default locales automatically."),s.forEach((e=>e(((e,t)=>(a.addResourceBundle(e,t),e))))),o=a.translate(e,t)),o}},86082:(e,t,a)=>{a.d(t,{i:()=>l,v:()=>s,w:()=>c});var i=a(93657),n=a(32094);const o=(e,t,a)=>{(0,n.d)(a)?e[t]=a:(0,n.b)(a,1)&&(e[t]={icon:a})},r=e=>{var t,a,i,r,l,s,c;if(null===(t=e.nextState)||void 0===t?void 0:t.has("_icon")){const t=null===(a=e.nextState)||void 0===a?void 0:a.get("_icon"),l=(null===(i=e.nextState)||void 0===i?void 0:i.get("_iconAlign"))||e.state._iconAlign;null===(r=e.nextState)||void 0===r||r.set("_icon",((e,t)=>{let a={};return(0,n.b)(e,1)?a="right"===t?{right:{icon:e}}:{left:{icon:e}}:"object"==typeof e&&null!==e&&(o(a,"top",e.top),o(a,"right",e.right),o(a,"bottom",e.bottom),o(a,"left",e.left)),a})(t,l))}else if(null===(l=e.nextState)||void 0===l?void 0:l.has("_iconAlign")){const t=e.state._iconAlign;null===(s=e.nextState)||void 0===s||s.set("_icon",{[t]:void 0,[null===(c=e.nextState)||void 0===c?void 0:c.get("_iconAlign")]:e.state._icon[t]})}},l=e=>"object"==typeof e&&null!==e&&(void 0===e.style||(0,n.c)(e.style))&&(0,n.b)(e.icon,1),s=(e,t)=>{(0,i.o)(t,(()=>{try{t=(0,i.p)(t)}catch(e){}(0,i.a)(e,"_icon",(e=>null===e||(0,n.b)(e,1)||"object"==typeof e&&null!==e&&((0,n.b)(e.left,1)||l(e.left)||(0,n.b)(e.right,1)||l(e.right)||(0,n.b)(e.top,1)||l(e.top)||(0,n.b)(e.bottom,1)||l(e.bottom))),new Set(["KoliBriIcon"]),t,{hooks:{beforePatch:(t,a)=>{null===t&&a.set("_icon",{}),r(e)}},required:!0})}))},c=(e,t)=>{(0,i.a)(e,"_iconAlign",(e=>"left"===e||"right"===e),new Set(["Alignment {left, right, top, bottom}"]),t,{hooks:{beforePatch:()=>{r(e)}}})}},83694:(e,t,a)=>{a.r(t),a.d(t,{kol_link_wc:()=>f});var i=a(28309),n=a(96364),o=a(3281),r=a(87611),l=a(76944),s=a(93657),c=a(32094),d=a(86082),h=a(16719),u=a(74144),g=a(26589);const f=class{constructor(e){(0,i.r)(this,e),this.nonce=(0,l.n)(),this.catchRef=e=>{this.ref=e,(0,c.a)(this.host,this.ref)},this.onClick=e=>{var t,a;"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onClick)&&(e.preventDefault(),(0,s.f)(e,this.ref),null===(a=this.state._on)||void 0===a||a.onClick(e,this.state._href))},this.getRenderValues=()=>{let e={};"string"==typeof this.state._selector&&(e={role:"link",tabIndex:0,onClick:()=>{(0,s.i)(this.state._selector)},onKeyPress:()=>{(0,s.i)(this.state._selector)}});const t="string"==typeof this.state._target&&"_self"!==this.state._target,a={href:"string"==typeof this.state._href&&this.state._href.length>0?this.state._href:"javascript:void(0)",target:"string"==typeof this.state._target&&this.state._target.length>0?this.state._target:void 0,rel:t?"noopener":void 0};return"image"!==this.state._useCase&&!0!==this.state._iconOnly||"string"==typeof this.state._ariaLabel&&0!==this.state._ariaLabel.length||(0,r.d)("[KolLink] Es muss ein Aria-Label gesetzt werden, wenn eine Grafik verlinkt oder der Icon-Only-Modus verwendet wird."),{isExternal:t,tagAttrs:a,goToProps:e}},this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._disabled=!1,this._download=!1,this._href=void 0,this._icon=void 0,this._iconAlign=void 0,this._iconOnly=!1,this._label=void 0,this._on=void 0,this._role=void 0,this._selector=void 0,this._stealth=!1,this._tabIndex=void 0,this._target=void 0,this._targetDescription=(0,n.a)("kol-open-link-in-tab"),this._tooltipAlign="right",this._useCase="text",this.state={_href:"javascript:void(0)",_icon:{},_label:""}}render(){const{isExternal:e,tagAttrs:t,goToProps:a}=this.getRenderValues();return(0,i.h)(i.H,null,(0,i.h)("a",Object.assign({ref:this.catchRef},t,{"aria-controls":this.state._ariaControls,"aria-current":this.state._ariaCurrent,"aria-expanded":(0,s.h)(this.state._ariaExpanded),"aria-labelledby":"image"===this.state._useCase||!0===this.state._iconOnly?this.nonce:void 0,"aria-selected":(0,s.h)(this.state._ariaSelected),class:{disabled:!0===this.state._disabled,"skip ":!1!==this.state._stealth,"icon-only":!0===this.state._iconOnly,"external-link":e}},this.state._on,{onClick:this.onClick,onKeyPress:this.onClick},a,{role:this.state._role,tabIndex:this.state._tabIndex}),(0,i.h)("kol-span-wc",{_icon:this._icon,_iconOnly:this._iconOnly,_label:this.state._label},(0,i.h)("slot",{name:"expert",slot:"expert"})),e&&(0,i.h)("kol-icon",{class:"external-link-icon",_ariaLabel:this.state._targetDescription,_icon:"codicon codicon-link-external"})),(!0===this.state._iconOnly||"image"===this.state._useCase)&&(0,i.h)("kol-tooltip",{"aria-hidden":"true",_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._ariaLabel||this.state._label}))}validateAriaControls(e){(0,s.w)(this,"_ariaControls",e)}validateAriaCurrent(e){(0,g.v)(this,e)}validateAriaExpanded(e){(0,s.b)(this,"_ariaExpanded",e)}validateAriaLabel(e){(0,h.a)(this,e)}validateAriaSelected(e){(0,g.a)(this,e)}validateDisabled(e){(0,s.b)(this,"_disabled",e),!0===e&&(0,r.g)()}validateDownload(e){((e,t)=>{"boolean"==typeof t?(0,s.b)(e,"_download",t):(0,s.w)(e,"_download",t)})(this,e)}validateHref(e){(0,s.w)(this,"_href",e)}validateIcon(e){(0,d.v)(this,e)}validateIconAlign(e){(0,d.w)(this,e)}validateIconOnly(e){(0,s.b)(this,"_iconOnly",e)}validateLabel(e){(0,h.b)(this,e)}validateOn(e){"object"==typeof e&&null!==e&&Object.prototype.hasOwnProperty.call(e,"onClick")&&"function"==typeof e.onClick&&(this.state=Object.assign(Object.assign({},this.state),{_on:e}))}validateRole(e){(0,s.w)(this,"_role",e)}validateSelector(e){(0,s.w)(this,"_selector",e)}validateStealth(e){((e,t)=>{(0,s.b)(e,"_stealth",t)})(this,e)}validateTabIndex(e){(0,u.v)(this,e)}validateTarget(e){(0,s.w)(this,"_target",e)}validateTargetDescription(e){(0,s.w)(this,"_targetDescription",e)}validateTooltipAlign(e){(0,o.w)(this,"_tooltipAlign",e)}validateUseCase(e){"string"==typeof e&&(this.state=Object.assign(Object.assign({},this.state),{_useCase:e}))}componentWillLoad(){this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaLabel(this._ariaLabel),this.validateAriaSelected(this._ariaSelected),this.validateDisabled(this._disabled),this.validateDownload(this._download),this.validateHref(this._href),this.validateIcon(this._icon),this.validateIconAlign(this._iconAlign),this.validateIconOnly(this._iconOnly),this.validateLabel(this._label),this.validateOn(this._on),this.validateRole(this._role),this.validateSelector(this._selector),this.validateStealth(this._stealth),this.validateTabIndex(this._tabIndex),this.validateTarget(this._target),this.validateTargetDescription(this._targetDescription),this.validateTooltipAlign(this._tooltipAlign),this.validateUseCase(this._useCase)}get host(){return(0,i.g)(this)}static get watchers(){return{_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_disabled:["validateDisabled"],_download:["validateDownload"],_href:["validateHref"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_selector:["validateSelector"],_stealth:["validateStealth"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_targetDescription:["validateTargetDescription"],_tooltipAlign:["validateTooltipAlign"],_useCase:["validateUseCase"]}}}},16719:(e,t,a)=>{a.d(t,{a:()=>h,b:()=>g,c:()=>c,h:()=>s,v:()=>u});var i=a(87611),n=a(93657),o=a(32094);const r=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,l=/^\d+$/;function s(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(r))||void 0===t?void 0:t.length)||0}(e)>=t}function c(e){return l.test(e)}const d=(e,t,a,n)=>{const r=t.has("_ariaLabel")?t.get("_ariaLabel"):a.state._ariaLabel;if("string"==typeof r){const e=t.has("_label")?t.get("_label"):a.state._label;!1===(0,o.i)(e,r)&&("_ariaLabel"===n?t.set("_label",r):t.set("_ariaLabel",void 0),(0,i.a)("The different Aria label is not barrier-free. A different Aria label must start with the label text for reasons of accessibility for voice control."))}},h=(e,t)=>{((e,t,a={})=>{var o;(0,n.w)(e,"_ariaLabel",t,{hooks:{afterPatch:(e,t,n,o)=>{var r,l;"function"==typeof(null===(r=a.hooks)||void 0===r?void 0:r.afterPatch)&&(null===(l=a.hooks)||void 0===l||l.afterPatch(e,t,n,o)),"string"==typeof e&&e.length>0&&!1===s(e,3)&&!1===c(e)&&(0,i.a)(`The different aria label ("${e}") is not accessible. A different aria label should consist of at least three readable characters.`)},beforePatch:null===(o=a.hooks)||void 0===o?void 0:o.beforePatch}})})(e,t,{hooks:{beforePatch:d}})},u=(e,t,a={})=>{var o;(0,n.w)(e,"_label",t,{hooks:{afterPatch:(e,t,n,o)=>{var r,l;"function"==typeof(null===(r=a.hooks)||void 0===r?void 0:r.afterPatch)&&(null===(l=a.hooks)||void 0===l||l.afterPatch(e,t,n,o)),"string"==typeof e&&!1===s(e,3)&&!1===c(e)&&(0,i.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(o=a.hooks)||void 0===o?void 0:o.beforePatch},required:!0})},g=(e,t)=>{u(e,t,{hooks:{beforePatch:d}})}},93657:(e,t,a)=>{a.d(t,{K:()=>re,a:()=>j,b:()=>z,c:()=>N,d:()=>$,e:()=>R,f:()=>T,g:()=>D,h:()=>V,i:()=>ne,j:()=>Z,k:()=>G,l:()=>oe,m:()=>W,n:()=>te,o:()=>P,p:()=>U,q:()=>Y,r:()=>c,s:()=>M,t:()=>ae,u:()=>F,w:()=>H});var i=a(87611),n=a(76944),o=a(77205);const r=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},l=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const a=new Set;r(a,t.querySelectorAll(e));const i=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<i.length;t++){const n=i[t].shadowRoot;r(a,l(e,"object"==typeof n&&null!==n?n:i[t]))}return Array.from(a)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let a=t.querySelector(e);if(null===a){const i=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<i.length;t++){const n=i[t].shadowRoot;if(a=s(e,"object"==typeof n&&null!==n?n:i[t]),null!==a)break}}return a}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=b,d=b,h=function(e){var t=v(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},u=function(e){var t=v(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},g=function(e){3==(t=v(e)).length&&t.push(255);var t,a=255==t[3],i=p(t[0]),n=p(t[1]),o=p(t[2]),r=function(e,t,a,i){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(a)&&-1!=n.indexOf(i)}(i,n,o,t=p(Math.round(t[3])));return a?r?"#"+i.charAt(0)+n.charAt(0)+o.charAt(0):"#"+i+n+o:r?"#"+i.charAt(0)+n.charAt(0)+o.charAt(0)+t.charAt(0):"#"+i+n+o+t},f=function(e){var t=v(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};function b(e){var t=v(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function v(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),a=t.length;if(3==a||4==a){var i=_(t[0]),n=_(t[1]),o=_(t[2]),r=3==a?255:_(t[3]);if(isNaN(i)||isNaN(n)||isNaN(o)||isNaN(r))return;return[i,n,o,r]}}(e)||function(e){var t=e.replace(/^#/,""),a=t.length;if(6==a||8==a){var i=_(t.slice(0,2)),n=_(t.slice(2,4)),o=_(t.slice(4,6)),r=6==a?255:_(t.slice(6,8));if(isNaN(i)||isNaN(n)||isNaN(o)||isNaN(r))return;return[i,n,o,r]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),a=m(t[0],!0),i=m(t[1],!0),n=m(t[2],!0);if(-1!=a&&-1!=i&&-1!=n)return[a,i,n,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),a=m(t[0],!0),i=m(t[1],!0),n=m(t[2],!0),o=m(255*t[3]);if(-1!=a&&-1!=i&&-1!=n&&-1!=o)return[a,i,n,o]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=m(null!=e.r?e.r:null!=e.red?e.red:0,!0),a=m(null!=e.g?e.g:null!=e.green?e.green:0,!0),i=m(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=m(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=a&&-1!=i&&-1!=n)return[t,a,i,n]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=m(e[0],!0),a=m(e[1],!0),i=m(e[2],!0),n=m(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=a&&-1!=i&&-1!=n)return[t,a,i,n]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function p(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function _(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function m(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}c.arr=d,c.obj=h,c.css=u,c.hex=g,c.num=f;var y=.2126,w=.7152,k=.0722,S=1/12.92;function A(e){return Math.pow((e+.055)/1.055,2.4)}function x(e){var t=e[0]/255,a=e[1]/255,i=e[2]/255,n=t<=.03928?t*S:A(t),o=a<=.03928?a*S:A(a),r=i<=.03928?i*S:A(i);return n*y+o*w+r*k}function L(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var a=parseInt(e,16);return[a>>16,a>>8&255,255&a,t]}function C(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(x(e),x(t))}function N(e,t){return C(L(e),L(t))}function O(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}const E=/\[object Object\]/,P=(e,t)=>{"string"==typeof e&&E.test(e)||t()},D=(e,t)=>{"string"==typeof e&&""===e||t()},T=(e,t)=>{(0,n.b)()&&(n.L.debug([e,t]),n.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},M=(e,t,a,i={})=>{var n,o;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==a&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof i.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",i.afterPatch)),"function"==typeof i.beforePatch&&(null===(o=e.nextHooks.get(t))||void 0===o||o.set("beforePatch",i.beforePatch)),e.nextState.set(t,a),(e=>{var t,a,i;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,a)=>{var i;const n=t.get("beforePatch");"function"==typeof n&&n(null===(i=e.nextState)||void 0===i?void 0:i.get(a),e.nextState,e,a)})),(null===(a=e.nextState)||void 0===a?void 0:a.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(i=e.nextHooks)||void 0===i||i.forEach(((t,a)=>{const i=t.get("afterPatch");"function"==typeof i&&i(e.state[a],e.state,e,a)}))),delete e.nextHooks})(e))},I=(e,t,a,n)=>{(0,i.d)(`[${e.constructor.name}] Der Property-Wert (${a}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(n).join(", ")}`)};function j(e,t,a,i,n,o={}){a(n)?M(e,t,n,o.hooks):null!=n||o.required?(o.required||i.add(null),I(e,t,n,i)):M(e,t,o.defaultValue,o.hooks)}const z=(e,t,a,i)=>{j(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),a,i)},H=(e,t,a,i={})=>{const n="number"==typeof i.minLength?null==i?void 0:i.minLength:0;j(e,t,(e=>"string"==typeof e&&e.length>=n&&(void 0===(null==i?void 0:i.maxLength)||e.length<=i.maxLength)),new Set(["String"]),a,i)},R=(e,t,a,i)=>{j(e,t,(e=>"number"==typeof e&&(void 0===(null==i?void 0:i.min)||"number"==typeof(null==i?void 0:i.min)&&e>=i.min)&&(void 0===(null==i?void 0:i.max)||"number"==typeof(null==i?void 0:i.max)&&e<=i.max)),new Set(["Number"]),a,i)},$=(e,t,a,i,o=(e=>e==e),r={})=>{D(i,(()=>{P(i,(()=>{void 0===i&&(i=[]);try{try{i=U(i)}catch(e){}if(Array.isArray(i)){const l=i.find((e=>!a(e)));void 0===l&&o(i)?M(e,t,i,r.hooks):P(l,(()=>{throw n.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else P(i,(()=>{throw n.L.debug(i),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){n.L.debug(e)}}))}))},q=/^(true|false)$/,B=/^-?(0|[1-9]\d*)$/,K=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,W=e=>{const t=typeof e,a=`${e}`;if("string"==typeof e)if(q.test(e))e="true"===e;else if(B.test(e))e=parseInt(e);else if(K.test(e))e=parseFloat(e);else if(J.test(e))try{e=U(e)}catch(e){}return t!==typeof e&&(0,i.d)(`You have used a stringified property value (${a} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},F=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(k){throw n.L.warn(["stringifyJson",e]),n.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},J=/^[{[]/,U=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(k){if(J.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(k){n.L.warn(["parseJson",e]),n.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},V=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,Z=e=>"string"==typeof e?e:V(e),G=(e,t)=>s(e,t||(0,n.g)()),Y=(e,t)=>l(e,t||(0,n.g)());let Q=null;const X=()=>(Q=Q||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,n.g)().body,level:"Fail",score:1},Q),ee=/(\d+, ){3}0\)/,te=(e,t=X())=>{const a=getComputedStyle(e),i=ee.test(a.backgroundColor)?t.backgroundColor:c.hex(a.backgroundColor),o=ee.test(a.color)?t.color:c.hex(a.color),r=N(i,o),l={backgroundColor:i,color:o,domNode:e,level:O(r),score:r};return r<4.5&&n.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},ae=(e,t=X())=>{t.domNode instanceof HTMLElement&&(t=te(t.domNode,t));const a=t.domNode.querySelector(e);if(null===a){const a=t.domNode.querySelectorAll('[class="hydrated"]');for(let i=0;i<a.length&&(t.domNode=a[i],null===(t=ae(e,t)).domNode);i++);return t}return te(a,t)},ie=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,n.a)().pageYOffset-50}),e.focus()):(0,i.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},ne=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,i.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const a=`${t}`;t=e,e=a}if("string"==typeof e){const a=G(e,t);a instanceof HTMLElement?ie(a):(0,i.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,i.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class oe{static queryHtmlElementColors(e,t,a=!1,i=!0){let o=null;if(!0===a||!1===oe.executionLock)if(!1===a&&(oe.cache.clear(),oe.cache.set(t.domNode,t),oe.executionLock=!0,!0===i&&n.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)o=t;else{const a=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)a.add(e[t])}const i=t.domNode;if("function"==typeof i.assignedNodes){const e=i.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&a.add(e[t])}const n=t.domNode.children;for(let e=0;e<n.length;e++)a.add(n[e]);const r=Array.from(a);for(let l=0;l<r.length;l++){let a=oe.cache.get(r[l]);void 0===a&&(a=te(r[l],t)),oe.cache.set(r[l],a);const i=oe.queryHtmlElementColors(e,a,!0,!1);if(null!==i){o=i;break}}}else n.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===a&&(!0===i&&n.L.debug(`[KoliBriUtils] Color contrast analysis finished (${oe.cache.size} DOM elements are analysed).`),oe.executionLock=!1,oe.cache.clear()),o}}oe.executionLock=!1,oe.cache=new Map;class re{}re.patchTheme=o.p,re.patchThemeTag=o.a,re.querySelector=G,re.querySelectorAll=Y,re.scrollByHTMLElement=ie,re.scrollBySelector=ne,re.stringifyJson=F},74144:(e,t,a)=>{a.d(t,{v:()=>r});var i=a(87611),n=a(93657);const o={hooks:{afterPatch:e=>{-1!==e&&0!==e&&(0,i.a)("Don\u2019t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},r=(e,t)=>{(0,n.e)(e,"_tabIndex",t,o)}}}]);