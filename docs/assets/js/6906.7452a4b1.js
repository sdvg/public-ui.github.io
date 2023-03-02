/*! For license information please see 6906.7452a4b1.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[6906],{56906:(t,e,o)=>{o.r(e),o.d(e,{kol_tabs:()=>u});var n=o(61051),r=o(42352),i=o(6612),a=o(31279),l=o(70176);const s=new Set(['"left", "right"']),c=new Set(['"left", "right"']),d=new Set([...s,...c]),u=class{constructor(t){(0,n.r)(this,t),this.onCreateLabel=`${(0,a.a)("kol-new")} \u2026`,this.showCreateTab=!1,this.nextPossibleTabIndex=(t,e,o)=>{if(o>0){if(e+o<t.length)return t[e+o]._disabled?this.nextPossibleTabIndex(t,e,o+1):e+o}else if(o<0&&e+o>=0)return t[e+o]._disabled?this.nextPossibleTabIndex(t,e,o-1):e+o;return e},this.onKeyDown=t=>{const e=setTimeout((()=>{clearTimeout(e);let o=null;switch(t.key){case"ArrowRight":o=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,1);break;case"ArrowLeft":o=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,-1)}null!==o&&this.onSelect(t,o,!0)}),250)},this.onClickSelect=(t,e)=>{this.onSelect(t,e,!0)},this.onMouseDown=t=>{t.stopPropagation()},this.callbacks={onClick:this.onClickSelect,onMouseDown:this.onMouseDown},this.catchTabPanelHost=t=>{this.tabPanelHost=t},this.selectNextNotDisabledTab=(t,e,o=!0,n)=>{if(t>e.length-1&&(t=e.length-1),t<0&&(t=0),Array.isArray(e)&&e[t]&&e[t]._disabled){if(!0===o){if(t<e.length-1)return this.selectNextNotDisabledTab(t+1,e,!0,n||t);t=n||t,o=!1}if(!1===o){if(t>0)return this.selectNextNotDisabledTab(t-1,e,!1,n||t);(0,r.d)("[KolTabs] Alle Tabs sind deaktiviert und somit kann kein Tab angezeigt werden.")}}return t},this.syncSelectedAndTabs=(t,e,o,n)=>{let r,i;r="_selected"===n?t:this.state._selected,i="_tabs"===n?t:this.state._tabs,i.length>0&&e.set("_selected",this.selectNextNotDisabledTab(r,i))},this.handleTabPanels=()=>{var t,e,o;if(this.tabPanelHost instanceof HTMLDivElement)for(let n=this.tabPanelHost.children.length;n<this.state._tabs.length;n++){const r=document.createElement("div");r.setAttribute("aria-labelledby",`tab-${n}`),r.setAttribute("id",`tabpanel-${n}`),r.setAttribute("role","tabpanel"),r.setAttribute("hidden","");const i=document.createElement("slot");i.setAttribute("name",`tabpanel-slot-${n}`),r.appendChild(i),this.tabPanelHost.appendChild(r),(null===(t=this.host)||void 0===t?void 0:t.children)instanceof HTMLCollection&&(null===(e=this.host)||void 0===e?void 0:e.children[n])&&(null===(o=this.host)||void 0===o||o.children[n].setAttribute("slot",`tabpanel-slot-${n}`))}},this.onCreate=t=>{var e,o;t.stopPropagation(),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onCreate)&&(null===(o=this.state._on)||void 0===o||o.onCreate(t))},this._ariaLabel=void 0,this._on=void 0,this._selected=0,this._tabs=void 0,this._tabsAlign="top",this.state={_ariaLabel:"\u2026",_selected:0,_tabs:[],_tabsAlign:"top"}}renderButtonGroup(){return(0,n.h)("kol-button-group-wc",{role:"tablist","aria-label":this.state._ariaLabel,onKeyDown:this.onKeyDown},this.state._tabs.map(((t,e)=>(0,n.h)("kol-button-wc",{_disabled:t._disabled,_icon:t._icon,_iconOnly:t._iconOnly,_label:t._label&&t._label,_on:this.callbacks,_tabIndex:this.state._selected===e?0:-1,_tooltipAlign:t._tooltipAlign,_variant:this.state._selected===e?"custom":void 0,_customClass:this.state._selected===e?"selected":void 0,_ariaControls:`tabpanel-${e}`,_ariaSelected:this.state._selected===e,_id:`tab-${e}`,_role:"tab",_value:e}))),this.showCreateTab&&(0,n.h)("kol-button-wc",{class:"create-button",_label:this.onCreateLabel,_on:{onClick:this.onCreate}}))}render(){return(0,n.h)(n.H,null,(0,n.h)("div",{ref:t=>{this.tabPanelsElement=t},class:{[`tabs-align-${this.state._tabsAlign}`]:!0}},this.renderButtonGroup(),(0,n.h)("div",{ref:this.catchTabPanelHost})))}validateAriaLabel(t){(0,i.w)(this,"_ariaLabel",t,{required:!0}),(0,r.b)(t)}validateOn(t){if("object"==typeof t&&null!==t){(0,r.f)("[KolTabs] Pr\xfcfen, wie man auch einen EventCallback einzeln \xe4ndern kann.");const e={};"function"!=typeof t.onCreate&&"object"!=typeof t.onCreate||("object"==typeof t.onCreate?("string"==typeof t.onCreate.label&&t.onCreate.label.length>0?this.onCreateLabel=t.onCreate.label:l.L.debug("[KolTabs] Der Label-Text f\xfcr Neu in {\n  onCreate: {\n    label: string (!),\n    callback: Function\n  }\n} ist nicht korrekt gesetzt."),"function"==typeof t.onCreate.callback?e.onCreate=t.onCreate.callback:l.L.debug("[KolTabs] Die onCreate-Callback-Funktion f\xfcr Neu in {\n  onCreate: {\n    label: string,\n    callback: Function (!)\n  }\n} ist nicht korrekt gesetzt.")):e.onCreate=t.onCreate,this.showCreateTab="function"==typeof e.onCreate),"function"==typeof t.onSelect&&(e.onSelect=t.onSelect),(0,i.s)(this,"_on",e)}}validateSelected(t){(0,i.e)(this,"_selected",t,{hooks:{beforePatch:this.syncSelectedAndTabs}})}validateTabs(t){(0,i.d)(this,"_tabs",(t=>"object"==typeof t&&null!==t&&"string"==typeof t._label&&t._label.length>0),t,void 0,{hooks:{beforePatch:this.syncSelectedAndTabs}}),(0,r.u)("KolTabs",this.state._tabs.length)}validateTabsAlign(t){((t,e,o)=>{(0,i.a)(t,e,(t=>"bottom"===t||"left"===t||"right"===t||"top"===t),d,o)})(this,"_tabsAlign",t)}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateOn(this._on),this.validateSelected(this._selected),this.validateTabs(this._tabs),this.validateTabsAlign(this._tabsAlign)}componentDidRender(){if(this.handleTabPanels(),this.tabPanelHost instanceof HTMLDivElement)for(let t=0;t<this.tabPanelHost.children.length;t++)t!==this.state._selected?this.tabPanelHost.children[t].setAttribute("hidden",""):this.tabPanelHost.children[t].removeAttribute("hidden")}onSelect(t,e,o=!1){var n,r;this._selected=e,"function"==typeof(null===(n=this._on)||void 0===n?void 0:n.onSelect)&&(null===(r=this._on)||void 0===r||r.onSelect(t,e)),!0===o&&(this.selectedTimeout=setTimeout((()=>{if(clearTimeout(this.selectedTimeout),this.tabPanelsElement){const t=(0,i.k)(`button#tab-${e}`,this.tabPanelsElement);null==t||t.focus()}}),250))}get host(){return(0,n.g)(this)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_on:["validateOn"],_selected:["validateSelected"],_tabs:["validateTabs"],_tabsAlign:["validateTabsAlign"]}}};u.style={default:":host{--kolibri-border-color:#666;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}:host{font-family:inherit;font-size:inherit}:host *{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}:host{font-family:var(--kolibri-font-family);font-size:inherit}*{box-sizing:border-box}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0;margin:0;min-height:44px;min-width:44px;padding:0}a,button,input,select,textarea{cursor:pointer}a.icon-only>kol-span-wc>span>span,:host button.icon-only>kol-span-wc>span>span{display:none}kol-button-group-wc{display:inline-flex;gap:calc(2 * var(--kolibri-spacing));flex-wrap:wrap}kol-button-group-wc button{border:0;border-bottom-color:transparent;border-bottom-style:solid;border-bottom-width:var(--kolibri-spacing)}kol-button-group-wc button[aria-selected='true'],kol-button-group-wc button:focus{border-bottom-color:var(--kolibri-color-accent)}.close-button{font-size:50%;height:fit-content;left:-3em;position:relative;top:0.25em}div[role='tabpanel']{height:100%}div.grid{height:100%}:host>.tabs-align-right{display:grid;grid-template-columns:1fr auto}:host>.tabs-align-right kol-button-group-wc{display:grid;order:2}:host>.tabs-align-left{display:grid;grid-template-columns:auto 1fr}:host>.tabs-align-left kol-button-group-wc{display:grid;order:0}:host>.tabs-align-bottom{display:grid;grid-template-rows:1fr auto}:host>.tabs-align-bottom kol-button-group-wc{order:2}:host>.tabs-align-bottom kol-button-group-wc>div{display:flex}:host>.tabs-align-bottom>kol-button-group-wc>div>div:first-child{margin:0px 1em 0px 0px}:host>.tabs-align-bottom>kol-button-group-wc>div>div{margin:0px 1em}:host>.tabs-align-top{display:grid;grid-template-rows:auto 1fr}:host>.tabs-align-top kol-button-group-wc{order:0}:host>.tabs-align-top kol-button-group-wc>div{display:flex}:host>.tabs-align-top>kol-button-group-wc>div>div:first-child{margin:0px 1em 0px 0px}:host>.tabs-align-top>kol-button-group-wc>div>div{margin:0px 1em}:host>div{display:grid}:host>div.tabs-align-left{grid-template-columns:auto 1fr}:host>div.tabs-align-right{grid-template-columns:1fr auto}:host>.tabs-align-left kol-button-group-wc,:host>.tabs-align-top kol-button-group-wc{order:0}:host>.tabs-align-bottom kol-button-group-wc,:host>.tabs-align-right kol-button-group-wc{order:1}:host>div.tabs-align-left kol-button-group-wc>div,:host>div.tabs-align-left kol-button-group-wc>div>div,:host>div.tabs-align-right kol-button-group-wc>div,:host>div.tabs-align-right kol-button-group-wc>div>div{display:grid}:host>div.tabs-align-left kol-button-group-wc>div>div kol-button-wc,:host>div.tabs-align-right kol-button-group-wc>div>div kol-button-wc{width:100%}:host>div.tabs-align-bottom kol-button-group-wc div,:host>div.tabs-align-top kol-button-group-wc div{display:flex;flex-wrap:wrap}"}},6612:(t,e,o)=>{o.d(e,{K:()=>ot,a:()=>E,b:()=>M,c:()=>T,d:()=>$,e:()=>O,f:()=>P,g:()=>N,h:()=>J,i:()=>tt,j:()=>F,k:()=>W,l:()=>et,m:()=>I,n:()=>Q,o:()=>L,p:()=>B,q:()=>U,r:()=>c,s:()=>H,t:()=>X,u:()=>K,w:()=>D});var n=o(55520),r=o(42352),i=o(70176);const a=(t,e)=>{e.forEach((e=>{!1===t.has(e)&&t.add(e)}))},l=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){const o=new Set;a(o,e.querySelectorAll(t));const n=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<n.length;e++){const r=n[e].shadowRoot;a(o,l(t,"object"==typeof r&&null!==r?r:n[e]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},s=(t,e=document)=>{if(e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot){let o=e.querySelector(t);if(null===o){const n=e.querySelectorAll('[class*="hydrated"]');for(let e=0;e<n.length;e++){const r=n[e].shadowRoot;if(o=s(t,"object"==typeof r&&null!==r?r:n[e]),null!==o)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var c=g,d=g,u=function(t){var e=p(t);return{r:e[0],g:e[1],b:e[2],a:3==e.length?255:Math.round(e[3])}},h=function(t){var e=p(t);return 3==e.length&&e.push(255),255==e[3]?"rgb("+e[0]+", "+e[1]+", "+e[2]+")":0==e[3]?"rgba("+e[0]+", "+e[1]+", "+e[2]+", 0)":"rgba("+e[0]+", "+e[1]+", "+e[2]+", "+String(e[3]/255).substr(1)+")"},b=function(t){3==(e=p(t)).length&&e.push(255);var e,o=255==e[3],n=m(e[0]),r=m(e[1]),i=m(e[2]),a=function(t,e,o,n){var r=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=r.indexOf(t)&&-1!=r.indexOf(e)&&-1!=r.indexOf(o)&&-1!=r.indexOf(n)}(n,r,i,e=m(Math.round(e[3])));return o?a?"#"+n.charAt(0)+r.charAt(0)+i.charAt(0):"#"+n+r+i:a?"#"+n.charAt(0)+r.charAt(0)+i.charAt(0)+e.charAt(0):"#"+n+r+i+e},f=function(t){var e=p(t);return 3==e.length?e.push(255):e[3]=Math.round(e[3]),(e[3]<<24>>>0|e[0]<<16|e[1]<<8|e[2])>>>0};function g(t){var e=p(t);return 3==e.length?e.concat(255):(e[3]=Math.round(e[3]),e)}function p(t){return"string"==typeof t?function(t){return"red"==t?[255,0,0]:"green"==t?[0,255,0]:"blue"==t?[0,0,255]:"black"==t?[0,0,0]:"white"==t?[255,255,255]:"cyan"==t?[0,255,255]:"gray"==t||"grey"==t?[128,128,128]:"magenta"==t||"pink"==t?[255,0,255]:"yellow"==t?[255,255,0]:void 0}(t=t.toLowerCase())||function(t){var e=t.replace(/^#/,""),o=e.length;if(3==o||4==o){var n=v(e[0]),r=v(e[1]),i=v(e[2]),a=3==o?255:v(e[3]);if(isNaN(n)||isNaN(r)||isNaN(i)||isNaN(a))return;return[n,r,i,a]}}(t)||function(t){var e=t.replace(/^#/,""),o=e.length;if(6==o||8==o){var n=v(e.slice(0,2)),r=v(e.slice(2,4)),i=v(e.slice(4,6)),a=6==o?255:v(e.slice(6,8));if(isNaN(n)||isNaN(r)||isNaN(i)||isNaN(a))return;return[n,r,i,a]}}(t)||function(t){if("rgb("==t.substr(0,4)){var e=(t=t.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=y(e[0],!0),n=y(e[1],!0),r=y(e[2],!0);if(-1!=o&&-1!=n&&-1!=r)return[o,n,r,255]}}(t)||function(t){if("rgba("==t.substr(0,5)){var e=(t=t.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=y(e[0],!0),n=y(e[1],!0),r=y(e[2],!0),i=y(255*e[3]);if(-1!=o&&-1!=n&&-1!=r&&-1!=i)return[o,n,r,i]}}(t)||[0,0,0,255]:function(t){if("[object Object]"===Object.prototype.toString.call(t)&&Object.getPrototypeOf(t)===Object.getPrototypeOf({})){var e=y(null!=t.r?t.r:null!=t.red?t.red:0,!0),o=y(null!=t.g?t.g:null!=t.green?t.green:0,!0),n=y(null!=t.b?t.b:null!=t.blue?t.blue:0,!0),r=y(null!=t.a?t.a:null!=t.alpha?t.alpha:255,!0);if(-1!=e&&-1!=o&&-1!=n&&-1!=r)return[e,o,n,r]}}(t)||function(t){if(Array.isArray(t)&&(3==t.length||4==t.length)){var e=y(t[0],!0),o=y(t[1],!0),n=y(t[2],!0),r=y(null!=t[3]?t[3]:255,!0);if(-1!=e&&-1!=o&&-1!=n&&-1!=r)return[e,o,n,r]}}(t)||function(t){if("number"==typeof t&&Math.floor(t)==t&&t<=4294967295&&t>=0)return[t>>16&255,t>>8&255,255&t,t>>24&255]}(t)||[0,0,0,255]}function m(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function v(t){return 1==t.length?parseInt(t+t,16):parseInt(t,16)}function y(t,e){return"number"!=typeof t||!0===e&&Math.floor(t)!==t?-1:t>=0&&t<=255?t:-1}c.arr=d,c.obj=u,c.css=h,c.hex=b,c.num=f;var k=1/12.92;function w(t){return Math.pow((t+.055)/1.055,2.4)}function _(t){var e=t[0]/255,o=t[1]/255,n=t[2]/255;return.2126*(e<=.03928?e*k:w(e))+.7152*(o<=.03928?o*k:w(o))+.0722*(n<=.03928?n*k:w(n))}function x(t){var e=255;8===(t=t.replace(/^#/,"")).length&&(e=parseInt(t.slice(6,8),16),t=t.substring(0,6)),4===t.length&&(e=parseInt(t.slice(3,4).repeat(2),16),t=t.substring(0,3)),3===t.length&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);var o=parseInt(t,16);return[o>>16,o>>8&255,255&o,e]}function S(t,e){return function(t,e){return(Math.max(t,e)+.05)/(Math.min(t,e)+.05)}(_(t),_(e))}function T(t,e){return S(x(t),x(e))}function A(t){return t>=7?"AAA":t>=4.5?"AA":t>=3?"AA Large":"Fail"}const C=/\[object Object\]/,L=(t,e)=>{"string"==typeof t&&C.test(t)||e()},N=(t,e)=>{"string"==typeof t&&""===t||e()},P=(t,e)=>{(0,i.b)()&&(i.L.debug([t,e]),i.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(t,"target",{value:e,writable:!1})},H=(t,e,o,n={})=>{var r,i;void 0===t.nextHooks&&(t.nextHooks=new Map),void 0===t.nextState&&(t.nextState=new Map),t.nextState.get(e)!==o&&(t.nextHooks.get(e)instanceof Map==0&&t.nextHooks.set(e,new Map),"function"==typeof n.afterPatch&&(null===(r=t.nextHooks.get(e))||void 0===r||r.set("afterPatch",n.afterPatch)),"function"==typeof n.beforePatch&&(null===(i=t.nextHooks.get(e))||void 0===i||i.set("beforePatch",n.beforePatch)),t.nextState.set(e,o),(t=>{var e,o,n;null===(e=t.nextHooks)||void 0===e||e.forEach(((e,o)=>{var n;const r=e.get("beforePatch");"function"==typeof r&&r(null===(n=t.nextState)||void 0===n?void 0:n.get(o),t.nextState,t,o)})),(null===(o=t.nextState)||void 0===o?void 0:o.size)>0&&(t.state=Object.assign(Object.assign({},t.state),Object.fromEntries(t.nextState)),delete t.nextState,null===(n=t.nextHooks)||void 0===n||n.forEach(((e,o)=>{const n=e.get("afterPatch");"function"==typeof n&&n(t.state[o],t.state,t,o)}))),delete t.nextHooks})(t))},E=(t,e,o,n,i,a={})=>{o(i)?H(t,e,i,null==a?void 0:a.hooks):void 0===i||null===i&&(void 0===(null==a?void 0:a.required)||!1===(null==a?void 0:a.required))?H(t,e,null==a?void 0:a.defaultValue,null==a?void 0:a.hooks):(void 0!==(null==a?void 0:a.required)&&!1!==(null==a?void 0:a.required)||n.add(null),((t,e,o,n)=>{(0,r.d)(`[${t.constructor.name}] Der Property-Wert (${o}) f\xfcr '${e}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(n).join(", ")}`)})(t,e,i,n))},M=(t,e,o,n)=>{E(t,e,(t=>"boolean"==typeof t),new Set(["Boolean {true, false}"]),o,n)},D=(t,e,o,n={})=>{const r="number"==typeof n.minLength?null==n?void 0:n.minLength:0;E(t,e,(t=>"string"==typeof t&&t.length>=r&&(void 0===(null==n?void 0:n.maxLength)||t.length<=n.maxLength)),new Set(["String"]),o,n)},O=(t,e,o,n)=>{E(t,e,(t=>"number"==typeof t&&(void 0===(null==n?void 0:n.min)||"number"==typeof(null==n?void 0:n.min)&&t>=n.min)&&(void 0===(null==n?void 0:n.max)||"number"==typeof(null==n?void 0:n.max)&&t<=n.max)),new Set(["Number"]),o,n)},$=(t,e,o,n,r=(t=>t==t),a={})=>{N(n,(()=>{L(n,(()=>{void 0===n&&(n=[]);try{try{n=B(n)}catch(t){}if(Array.isArray(n)){const l=n.find((t=>!o(t)));void 0===l&&r(n)?H(t,e,n,a.hooks):L(l,(()=>{throw i.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else L(n,(()=>{throw i.L.debug(n),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(t){i.L.debug(t)}}))}))},j=/^(true|false)$/,q=/^-?(0|[1-9]\d*)$/,z=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,I=t=>{const e=typeof t,o=`${t}`;if("string"==typeof t)if(j.test(t))t="true"===t;else if(q.test(t))t=parseInt(t);else if(z.test(t))t=parseFloat(t);else if(R.test(t))try{t=B(t)}catch(t){}return e!==typeof t&&(0,r.d)(`You have used a stringified property value (${o} to ${JSON.stringify(t)}) which type switched from ${e} to ${typeof t}!`),t},K=t=>{try{return JSON.stringify(t).replace(/"/g,"'")}catch(e){throw i.L.warn(["stringifyJson",t]),i.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},R=/^[{[]/,B=t=>{if("string"==typeof t)try{return JSON.parse(t)}catch(e){if(R.test(t))try{return JSON.parse(t.replace(/'/g,'"'))}catch(e){i.L.warn(["parseJson",t]),i.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},J=t=>"boolean"==typeof t?!0===t?"true":"false":void 0,F=t=>"string"==typeof t?t:J(t),W=(t,e)=>s(t,e||(0,i.g)()),U=(t,e)=>l(t,e||(0,i.g)());let G=null;const V=()=>(G=G||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,i.g)().body,level:"Fail",score:1},G),Y=/(\d+, ){3}0\)/,Q=(t,e=V())=>{const o=getComputedStyle(t),n=Y.test(o.backgroundColor)?e.backgroundColor:c.hex(o.backgroundColor),r=Y.test(o.color)?e.color:c.hex(o.color),a=T(n,r),l={backgroundColor:n,color:r,domNode:t,level:A(a),score:a};return a<4.5&&i.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},X=(t,e=V())=>{e.domNode instanceof HTMLElement&&(e=Q(e.domNode,e));const o=e.domNode.querySelector(t);if(null===o){const o=e.domNode.querySelectorAll('[class="hydrated"]');for(let n=0;n<o.length&&(e.domNode=o[n],null===(e=X(t,e)).domNode);n++);return e}return Q(o,e)},Z=(t,e=window)=>{t instanceof HTMLElement?(e.scrollTo({behavior:"smooth",top:t.getBoundingClientRect().top+(0,i.a)().pageYOffset-50}),t.focus()):(0,r.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},tt=(t,e)=>{if((t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot)&&"string"==typeof e){(0,r.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const o=`${e}`;e=t,t=o}if("string"==typeof t){const o=W(t,e);o instanceof HTMLElement?Z(o):(0,r.d)(`Es konnte kein HTMLElement mit dem Selector (${t}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,r.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class et{static queryHtmlElementColors(t,e,o=!1,n=!0){let r=null;if(!0===o||!1===et.executionLock)if(!1===o&&(et.cache.clear(),et.cache.set(e.domNode,e),et.executionLock=!0,!0===n&&i.L.debug("[KoliBriUtils] Color contrast analysis started...")),t===e.domNode)r=e;else{const o=new Set;if(e.domNode.shadowRoot){const t=e.domNode.shadowRoot.children;for(let e=0;e<t.length;e++)o.add(t[e])}const n=e.domNode;if("function"==typeof n.assignedNodes){const t=n.assignedNodes();for(let e=0;e<t.length;e++)t[e]instanceof HTMLElement&&o.add(t[e])}const i=e.domNode.children;for(let t=0;t<i.length;t++)o.add(i[t]);const a=Array.from(o);for(let l=0;l<a.length;l++){let o=et.cache.get(a[l]);void 0===o&&(o=Q(a[l],e)),et.cache.set(a[l],o);const n=et.queryHtmlElementColors(t,o,!0,!1);if(null!==n){r=n;break}}}else i.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===o&&(!0===n&&i.L.debug(`[KoliBriUtils] Color contrast analysis finished (${et.cache.size} DOM elements are analysed).`),et.executionLock=!1,et.cache.clear()),r}}et.executionLock=!1,et.cache=new Map;class ot{}ot.patchTheme=n.p,ot.patchThemeTag=n.a,ot.querySelector=W,ot.querySelectorAll=U,ot.scrollByHTMLElement=Z,ot.scrollBySelector=tt,ot.stringifyJson=K}}]);