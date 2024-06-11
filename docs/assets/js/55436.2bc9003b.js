/*! For license information please see 55436.2bc9003b.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[55436],{7379:(e,t,o)=>{o.d(t,{v:()=>n});var a=o(15752);const n=(e,t)=>{(0,a.i)(e,"_accessKey",t)}},9983:(e,t,o)=>{o.d(t,{a:()=>i,v:()=>n});var a=o(15752);const n=(e,t,o)=>{(0,a.w)(e,t,(e=>"string"==typeof e&&r.includes(e)),new Set(r),o,{defaultValue:"top"})},r=["left","right","top","bottom"],i=(e,t)=>{n(e,"_align",t)}},38016:(e,t,o)=>{o.d(t,{v:()=>n});var a=o(15752);const n=(e,t)=>{(0,a.i)(e,"_role",t)}},47836:(e,t,o)=>{o.d(t,{v:()=>n});var a=o(15752);const n=(e,t)=>{(0,a.b)(e,"_disabled",t,{hooks:{afterPatch:e=>{!0===e&&(0,a.c)()}}})}},22004:(e,t,o)=>{function a(e){e.stopImmediatePropagation(),e.stopPropagation()}function n(e,t,o){return e.dispatchEvent(function(e,t){return new CustomEvent(`kol-${e}`,{bubbles:!0,cancelable:!0,composed:!0,detail:t})}(t,o))}function r(e,t,o){t&&n(t,e,o)}function i(e){e.preventDefault(),a(e)}o.d(t,{p:()=>i,s:()=>a,t:()=>r})},17584:(e,t,o)=>{o.d(t,{v:()=>n});var a=o(15752);const n=(e,t,o={})=>{(0,a.b)(e,"_hideLabel",t,o)}},21208:(e,t,o)=>{o.d(t,{v:()=>n});var a=o(15752);const n=(e,t,o={})=>{(0,a.i)(e,"_href",t,o)}},9824:(e,t,o)=>{o.d(t,{t:()=>r});var a=o(77352),n=o(63312);let r=(e,t)=>{var o;return(null!==(o=(0,a.g)())&&void 0!==o?o:(0,a.i)("de")).translate(e,t)};"test"===n.p&&(r=e=>e)},19684:(e,t,o)=>{o.d(t,{i:()=>s,v:()=>l});var a=o(15752),n=o(63312);const r=(e,t,o)=>{(0,n.c)(o)?e[t]=o:(0,n.i)(o,1)&&(e[t]={icon:o})},i=e=>{var t,o,a;if(null===(t=e.nextState)||void 0===t?void 0:t.has("_icons")){const t=null===(o=e.nextState)||void 0===o?void 0:o.get("_icons");null===(a=e.nextState)||void 0===a||a.set("_icons",(e=>{let t={};return(0,n.i)(e,1)?t={left:{icon:e}}:"object"==typeof e&&null!==e&&(r(t,"top",e.top),r(t,"right",e.right),r(t,"bottom",e.bottom),r(t,"left",e.left)),t})(t))}},s=e=>"object"==typeof e&&null!==e&&(void 0===e.style||(0,n.b)(e.style))&&(void 0===e.label||(0,n.i)(e.label))&&(0,n.i)(e.icon,1),l=(e,t,o={})=>{(0,a.o)(t,(()=>{var r;try{t=(0,a.p)(t)}catch(e){}(0,a.w)(e,"_icons",(e=>{const t="object"==typeof e&&null!==e&&0===Object.keys(e).length;return null===e||t||(0,n.i)(e,1)||"object"==typeof e&&null!==e&&((0,n.i)(e.left,1)||s(e.left)||(0,n.i)(e.right,1)||s(e.right)||(0,n.i)(e.top,1)||s(e.top)||(0,n.i)(e.bottom,1)||s(e.bottom))}),new Set(["KoliBriIcon"]),t,Object.assign(Object.assign({},o),{defaultValue:{},hooks:{afterPatch:null===(r=o.hooks)||void 0===r?void 0:r.afterPatch,beforePatch:(e,t,a,n)=>{var r,s;"function"==typeof(null===(r=o.hooks)||void 0===r?void 0:r.beforePatch)&&(null===(s=o.hooks)||void 0===s||s.beforePatch(e,t,a,n)),i(a)}}}))}))}},55436:(e,t,o)=>{o.r(t),o.d(t,{kol_link_wc:()=>k});var a=o(86104),n=o(9824);let r;const i=[];var s=o(22004),l=o(60848),c=o(15752),d=o(21208),h=o(63312),u=o(7379),f=o(47836),b=o(17584),v=o(19684),g=o(25108),p=o(38016),y=o(87424),_=o(13716);const m=["date","location","page","step","time","true","false"],k=class{constructor(e){(0,a.r)(this,e),this.catchRef=e=>{this.ref=e,(0,h.a)(this.host,this.ref)},this.onClick=e=>{var t,o;!0===this.state._disabled?(0,s.p)(e):"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onClick)&&(e.preventDefault(),e.stopPropagation(),(0,c.q)(e,this.ref),null===(o=this.state._on)||void 0===o||o.onClick(e,this.state._href))},this.getRenderValues=()=>{const e="string"==typeof this.state._target&&"_self"!==this.state._target,t={href:"string"==typeof this.state._href&&this.state._href.length>0?this.state._href:"javascript:void(0);",target:"string"==typeof this.state._target&&this.state._target.length>0?this.state._target:void 0,rel:e?"noopener":void 0,download:"string"==typeof this.state._download?this.state._download:void 0};return!0!==this.state._hideLabel||this.state._label||(0,c.j)("[KolLink] Es muss ein Aria-Label gesetzt werden, wenn _hide-label gesetzt ist."),{isExternal:e,tagAttrs:t}},this._accessKey=void 0,this._ariaCurrentValue=void 0,this._disabled=!1,this._download=void 0,this._hideLabel=!1,this._href=void 0,this._icons=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._target=void 0,this._tooltipAlign="right",this.state={_ariaCurrentValue:"page",_href:"",_icons:{}}}render(){const{isExternal:e,tagAttrs:t}=this.getRenderValues(),o=(0,h.s)(this.state._label);return(0,a.h)(a.H,{key:"82f9f5d0f689c25163bd6136ca5c34dcb1fd692b",class:"kol-link-wc"},(0,a.h)("a",Object.assign({key:"b7db13f7744362450d778d707e5540558d997ecb",ref:this.catchRef},t,{accessKey:this.state._accessKey,"aria-current":this.state._ariaCurrent,"aria-disabled":this.state._disabled?"true":void 0,"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?`${this.state._label}${e?` (${(0,n.t)("kol-open-link-in-tab")})`:""}`:void 0,class:{disabled:!0===this.state._disabled,"external-link":e,"hide-label":!0===this.state._hideLabel}},this.state._on,{onClick:this.onClick,onKeyPress:this.onClick,role:this.state._role,tabIndex:this.state._disabled?-1:this.state._tabIndex}),(0,a.h)(l.f,{key:"74e96d85bcef160e5cb9c0d5676981b32e5abaaf",_accessKey:this.state._accessKey,_icons:this.state._icons,_hideLabel:this.state._hideLabel,_label:o?"":this.state._label||this.state._href},(0,a.h)("slot",{key:"e6f537ca1733bf45673369cb51f9cd0a5ed8d349",name:"expert",slot:"expert"})),e&&(0,a.h)(l.g,{key:"b41fee1ddbffadab9c2371ff336fadb3ce7abe74",class:"external-link-icon",_label:this.state._hideLabel?"":(0,n.t)("kol-open-link-in-tab"),_icons:"codicon codicon-link-external","aria-hidden":this.state._hideLabel})),(0,a.h)(l.a,{key:"c6e48539bc159d804fd5cff1983a1a652f16a312","aria-hidden":"true",hidden:o||!this.state._hideLabel,_accessKey:this.state._accessKey,_align:this.state._tooltipAlign,_label:this.state._label||this.state._href}))}validateAccessKey(e){(0,u.v)(this,e)}validateAriaCurrentValue(e){((e,t)=>{(0,c.w)(e,"_ariaCurrentValue",(e=>"string"==typeof e&&m.includes(e)),new Set([`AriaCurrentValue {${m.join(", ")}`]),t,{defaultValue:"page"})})(this,e)}validateDisabled(e){(0,f.v)(this,e)}validateDownload(e){((e,t)=>{(0,c.i)(e,"_download",t)})(this,e)}validateHideLabel(e){(0,b.v)(this,e)}validateHref(e){(0,d.v)(this,e,{required:!0})}validateIcons(e){(0,v.v)(this,e)}validateLabel(e){(0,g.a)(this,e)}validateOn(e){((e,t)=>{"object"==typeof t&&"function"==typeof(null==t?void 0:t.onClick)&&(e.state=Object.assign(Object.assign({},e.state),{_on:t}))})(this,e)}validateRole(e){(0,p.v)(this,e)}validateTabIndex(e){(0,y.v)(this,e)}validateTarget(e){((e,t)=>{(0,c.i)(e,"_target",t)})(this,e)}validateTooltipAlign(e){(0,_.v)(this,e)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaCurrentValue(this._ariaCurrentValue),this.validateDisabled(this._disabled),this.validateDownload(this._download),this.validateHideLabel(this._hideLabel),this.validateHref(this._href),this.validateIcons(this._icons),this.validateLabel(this._label),this.validateOn(this._on),this.validateRole(this._role),this.validateTabIndex(this._tabIndex),this.validateTarget(this._target),this.validateTooltipAlign(this._tooltipAlign),this.unsubscribeOnLocationChange=((e,t=!0)=>(t&&"string"==typeof r&&e(r),i.push(e),()=>{const t=i.indexOf(e);t>=0&&i.splice(t,1)}))((e=>{this.state._ariaCurrent=e===this.state._href?this.state._ariaCurrentValue:void 0}))}disconnectedCallback(){this.unsubscribeOnLocationChange&&this.unsubscribeOnLocationChange()}get host(){return(0,a.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaCurrentValue:["validateAriaCurrentValue"],_disabled:["validateDisabled"],_download:["validateDownload"],_hideLabel:["validateHideLabel"],_href:["validateHref"],_icons:["validateIcons"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_tooltipAlign:["validateTooltipAlign"]}}}},25108:(e,t,o)=>{o.d(t,{a:()=>h,b:()=>s,c:()=>l,h:()=>n,v:()=>d});var a=o(15752);const n=[0,1,2,3,4,5,6],r=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,i=/^\d+$/;function s(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(r))||void 0===t?void 0:t.length)||0}(e)>=t}function l(e){return i.test(e)}const c=new Set(["string"]),d=(e,t,o={})=>{(0,a.w)(e,"_label",(e=>"string"==typeof e),c,t,function(e){var t;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(t,o,n,r)=>{var i,c;"function"==typeof(null===(i=e.hooks)||void 0===i?void 0:i.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(t,o,n,r)),"string"==typeof t&&!1===s(t,3)&&!1===l(t)&&(0,a.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,a.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}})}(o))},h=d},15752:(e,t,o)=>{o.d(t,{A:()=>de,B:()=>ie,C:()=>he,D:()=>ee,K:()=>fe,a:()=>i,b:()=>B,c:()=>g,d:()=>N,e:()=>p,f:()=>f,g:()=>Z,h:()=>y,i:()=>F,j:()=>d,k:()=>U,l:()=>h,m:()=>X,n:()=>l,o:()=>R,p:()=>oe,q:()=>q,r:()=>H,s:()=>z,t:()=>V,u:()=>v,v:()=>re,w:()=>W,x:()=>ae,y:()=>ne,z:()=>ue});var a=o(1500),n=o(4144);const r=new Set,i=(e,t)=>{(!1===r.has(e)||(null==t?void 0:t.force))&&(r.add(e),n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\u270b a11y",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #09f"}))},s=new Set,l=(e,t)=>{(!1===s.has(e)||(null==t?void 0:t.force))&&(s.add(e),n.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udd25 deprecated",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f00"}))},c=new Set,d=(e,t)=>{(!1===c.has(e)||(null==t?void 0:t.force))&&(c.add(e),n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcbb dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},h=(e,t)=>{(!1===c.has(e)||(null==t?void 0:t.force))&&(c.add(e),n.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"\u26a0\ufe0f dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},u=new Set,f=(e,t=!1,o)=>{(!1===u.has(e)||(null==o?void 0:o.force))&&(u.add(e),e+=!0===t?" \u2705":"",n.L.debug([e].concat((null==o?void 0:o.details)||[]),{classifier:"\ud83c\udf1f feature",forceLog:!!(null==o?void 0:o.force),overwriteStyle:"; background-color: #309"}))};d("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const b=new Set,v=(e,t)=>{(!1===b.has(e)||(null==t?void 0:t.force))&&(b.add(e),n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcd1 ui/ux",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #060;"}))},g=()=>{i('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},p=e=>{"string"==typeof e&&""!==e||i("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},y=(e,t=8)=>{t>7&&v(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)};var _=.2126,m=.7152,k=.0722,w=1/12.92;function x(e){return Math.pow((e+.055)/1.055,2.4)}function S(e){var t=e[0]/255,o=e[1]/255,a=e[2]/255,n=t<=.03928?t*w:x(t),r=o<=.03928?o*w:x(o),i=a<=.03928?a*w:x(a);return n*_+r*m+i*k}function L(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var o=parseInt(e,16);return[o>>16,o>>8&255,255&o,t]}function A(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(S(e),S(t))}function N(e,t){return A(L(e),L(t))}function C(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}var O={exports:{}};function j(e){var t=P(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function P(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),o=t.length;if(3==o||4==o){var a=E(t[0]),n=E(t[1]),r=E(t[2]),i=3==o?255:E(t[3]);if(isNaN(a)||isNaN(n)||isNaN(r)||isNaN(i))return;return[a,n,r,i]}}(e)||function(e){var t=e.replace(/^#/,""),o=t.length;if(6==o||8==o){var a=E(t.slice(0,2)),n=E(t.slice(2,4)),r=E(t.slice(4,6)),i=6==o?255:E(t.slice(6,8));if(isNaN(a)||isNaN(n)||isNaN(r)||isNaN(i))return;return[a,n,r,i]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=M(t[0],!0),a=M(t[1],!0),n=M(t[2],!0);if(-1!=o&&-1!=a&&-1!=n)return[o,a,n,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=M(t[0],!0),a=M(t[1],!0),n=M(t[2],!0),r=M(255*t[3]);if(-1!=o&&-1!=a&&-1!=n&&-1!=r)return[o,a,n,r]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=M(null!=e.r?e.r:null!=e.red?e.red:0,!0),o=M(null!=e.g?e.g:null!=e.green?e.green:0,!0),a=M(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),n=M(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=o&&-1!=a&&-1!=n)return[t,o,a,n]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=M(e[0],!0),o=M(e[1],!0),a=M(e[2],!0),n=M(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=o&&-1!=a&&-1!=n)return[t,o,a,n]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function D(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function E(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function M(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}O.exports=j,O.exports.arr=j,O.exports.obj=function(e){var t=P(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},O.exports.css=function(e){var t=P(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},O.exports.hex=function(e){3==(t=P(e)).length&&t.push(255);var t,o=255==t[3],a=D(t[0]),n=D(t[1]),r=D(t[2]),i=function(e,t,o,a){var n=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=n.indexOf(e)&&-1!=n.indexOf(t)&&-1!=n.indexOf(o)&&-1!=n.indexOf(a)}(a,n,r,t=D(Math.round(t[3])));return o?i?"#"+a.charAt(0)+n.charAt(0)+r.charAt(0):"#"+a+n+r:i?"#"+a.charAt(0)+n.charAt(0)+r.charAt(0)+t.charAt(0):"#"+a+n+r+t},O.exports.num=function(e){var t=P(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};const H=O.exports,T=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},I=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const o=new Set;T(o,t.querySelectorAll(e));const a=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<a.length;t++){const n=a[t].shadowRoot;T(o,I(e,"object"==typeof n&&null!==n?n:a[t]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},K=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let o=t.querySelector(e);if(null===o){const a=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<a.length;t++){const n=a[t].shadowRoot;if(o=K(e,"object"==typeof n&&null!==n?n:a[t]),null!==o)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")},$=/\[object Object\]/,R=(e,t)=>{"string"==typeof e&&$.test(e)||t()},V=(e,t)=>{"string"==typeof e&&""===e||t()},q=(e,t)=>{(0,n.a)()&&(n.L.debug([e,t]),n.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},z=(e,t,o,a={})=>{var n,r;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof a.afterPatch&&(null===(n=e.nextHooks.get(t))||void 0===n||n.set("afterPatch",a.afterPatch)),"function"==typeof a.beforePatch&&(null===(r=e.nextHooks.get(t))||void 0===r||r.set("beforePatch",a.beforePatch)),e.nextState.set(t,o),(e=>{var t,o,a;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,o)=>{var a;const n=t.get("beforePatch");"function"==typeof n&&n(null===(a=e.nextState)||void 0===a?void 0:a.get(o),e.nextState,e,o)})),(null===(o=e.nextState)||void 0===o?void 0:o.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(a=e.nextHooks)||void 0===a||a.forEach(((t,o)=>{const a=t.get("afterPatch");"function"==typeof a&&a(e.state[o],e.state,e,o)}))),delete e.nextHooks})(e)},J=(e,t,o,a)=>{d(`[${e.constructor.name}] Der Property-Wert (${o}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(a).join(", ")}`)};function W(e,t,o,a,n,r={}){o(n)?z(e,t,n,r.hooks):void 0===n&&!0!==r.required&&o(r.defaultValue)?z(e,t,r.defaultValue,r.hooks):(r.required||a.add(null),J(e,t,n,a))}const B=(e,t,o,a)=>{W(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),o,a)},F=(e,t,o,a={})=>{const n="number"==typeof a.minLength?null==a?void 0:a.minLength:0;W(e,t,(e=>"string"==typeof e&&e.length>=n&&(void 0===(null==a?void 0:a.maxLength)||e.length<=a.maxLength)),new Set(["String"]),o,a)},U=(e,t,o,a)=>{W(e,t,(e=>"number"==typeof e&&(void 0===(null==a?void 0:a.min)||"number"==typeof(null==a?void 0:a.min)&&e>=a.min)&&(void 0===(null==a?void 0:a.max)||"number"==typeof(null==a?void 0:a.max)&&e<=a.max)),new Set(["Number"]),o,a)},Z=(e,t,o,a,r=(e=>e==e),i={})=>{V(a,(()=>{R(a,(()=>{void 0===a&&(a=[]);try{try{a=oe(a)}catch(e){}if(Array.isArray(a)){const s=a.find((e=>!o(e)));void 0===s&&r(a)?z(e,t,a,i.hooks):R(s,(()=>{throw n.L.debug(s),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else R(a,(()=>{throw n.L.debug(a),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){n.L.debug(e)}}))}))},G=/^(true|false)$/,Y=/^-?(0|[1-9]\d*)$/,Q=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,X=e=>{const t=typeof e,o=`${e}`;if("string"==typeof e)if(G.test(e))e="true"===e;else if(Y.test(e))e=parseInt(e);else if(Q.test(e))e=parseFloat(e);else if(te.test(e))try{e=oe(e)}catch(e){}return t!==typeof e&&d(`You have used a stringified property value (${o} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},ee=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(k){throw n.L.warn(["stringifyJson",e]),n.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},te=/^[{[]/,oe=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(k){if(te.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(k){n.L.warn(["parseJson",e]),n.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},ae=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,ne=e=>"string"==typeof e?e:ae(e),re=(e,t)=>K(e,t||(0,n.g)()),ie=(e,t)=>I(e,t||(0,n.g)());let se=null;const le=()=>(se=se||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,n.g)().body,level:"Fail",score:1},se),ce=/(\d+, ){3}0\)/,de=(e,t=le())=>{const o=getComputedStyle(e),a=ce.test(o.backgroundColor)?t.backgroundColor:H.hex(o.backgroundColor),r=ce.test(o.color)?t.color:H.hex(o.color),i=N(a,r),s={backgroundColor:a,color:r,domNode:e,level:C(i),score:i};return i<4.5&&n.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},he=(e,t=le())=>{t.domNode instanceof HTMLElement&&(t=de(t.domNode,t));const o=t.domNode.querySelector(e);if(null===o){const o=t.domNode.querySelectorAll('[class="hydrated"]');for(let a=0;a<o.length&&(t.domNode=o[a],null===(t=he(e,t)).domNode);a++);return t}return de(o,t)};class ue{static queryHtmlElementColors(e,t,o=!1,a=!0){let r=null;if(!0===o||!1===ue.executionLock)if(!1===o&&(ue.cache.clear(),ue.cache.set(t.domNode,t),ue.executionLock=!0,!0===a&&n.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)r=t;else{const o=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)o.add(e[t])}const a=t.domNode;if("function"==typeof a.assignedNodes){const e=a.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&o.add(e[t])}const n=t.domNode.children;for(let e=0;e<n.length;e++)o.add(n[e]);const i=Array.from(o);for(let s=0;s<i.length;s++){let o=ue.cache.get(i[s]);void 0===o&&(o=de(i[s],t)),ue.cache.set(i[s],o);const a=ue.queryHtmlElementColors(e,o,!0,!1);if(null!==a){r=a;break}}}else n.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===o&&(!0===a&&n.L.debug(`[KoliBriUtils] Color contrast analysis finished (${ue.cache.size} DOM elements are analysed).`),ue.executionLock=!1,ue.cache.clear()),r}}ue.executionLock=!1,ue.cache=new Map;class fe{}fe.getCssStyle=a.p,fe.patchTheme=a.x,fe.patchThemeTag=a.z,fe.querySelector=re,fe.querySelectorAll=ie,fe.stringifyJson=ee},87424:(e,t,o)=>{o.d(t,{v:()=>r});var a=o(15752);const n={hooks:{afterPatch:e=>{-1!==e&&0!==e&&(0,a.a)("Don't Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},r=(e,t)=>{(0,a.k)(e,"_tabIndex",t,n)}},13716:(e,t,o)=>{o.d(t,{v:()=>n});var a=o(9983);const n=(e,t)=>{(0,a.v)(e,"_tooltipAlign",t)}}}]);