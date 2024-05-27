/*! For license information please see 3936.2d5921d3.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[3936],{88140:(e,t,n)=>{n.d(t,{a:()=>r,v:()=>a});var o=n(29808);const a=(e,t,n)=>{(0,o.w)(e,t,(e=>"string"==typeof e&&i.includes(e)),new Set(i),n,{defaultValue:"top"})},i=["left","right","top","bottom"],r=(e,t)=>{a(e,"_align",t)}},69320:(e,t,n)=>{n.d(t,{t:()=>i});var o=n(4423),a=n(31604);let i=(e,t)=>{var n;return(null!==(n=(0,o.g)())&&void 0!==n?n:(0,o.i)("de")).translate(e,t)};"test"===a.p&&(i=e=>e)},3936:(e,t,n)=>{n.r(t),n.d(t,{kol_tabs:()=>c});var o=n(33432),a=n(69320),i=n(83852),r=n(88140),l=n(29808),s=n(72784),d=n(74520);const c=class{constructor(e){(0,o.r)(this,e),this.onCreateLabel=`${(0,a.t)("kol-new")} \u2026`,this.showCreateTab=!1,this.nextPossibleTabIndex=(e,t,n)=>{if(n>0){if(t+n<e.length)return e[t+n]._disabled?this.nextPossibleTabIndex(e,t,n+1):t+n}else if(n<0&&t+n>=0)return e[t+n]._disabled?this.nextPossibleTabIndex(e,t,n-1):t+n;return t},this.onKeyDown=e=>{let t=null;switch(e.key){case"ArrowRight":t=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,1);break;case"ArrowLeft":t=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,-1)}null!==t&&this.onSelect(e,t)},this.onClickSelect=(e,t)=>{this.onSelect(e,t)},this.onMouseDown=e=>{e.preventDefault(),e.stopPropagation()},this.callbacks={onClick:this.onClickSelect,onMouseDown:this.onMouseDown},this.catchTabPanelHost=e=>{this.tabPanelHost=e},this.selectNextNotDisabledTab=(e,t,n=!0,o)=>{if(e>t.length-1&&(e=t.length-1),e<0&&(e=0),Array.isArray(t)&&t[e]&&t[e]._disabled){if(!0===n){if(e<t.length-1)return this.selectNextNotDisabledTab(e+1,t,!0,o||e);e=o||e,n=!1}if(!1===n){if(e>0)return this.selectNextNotDisabledTab(e-1,t,!1,o||e);(0,l.j)("[KolTabs] Alle Tabs sind deaktiviert und somit kann kein Tab angezeigt werden.")}}return e},this.syncSelectedAndTabs=(e,t,n,o)=>{let a,i;a="_selected"===o?e:this.state._selected,i="_tabs"===o?e:this.state._tabs,i.length>0&&t.set("_selected",this.selectNextNotDisabledTab(a,i))},this.handleTabPanels=()=>{var e,t,n;if(this.tabPanelHost instanceof HTMLDivElement)for(let o=this.tabPanelHost.children.length;o<this.state._tabs.length;o++){const a=document.createElement("div");a.setAttribute("aria-labelledby",`${this.state._label.replace(/\s/g,"-")}-tab-${o}`),a.setAttribute("id",`tabpanel-${o}`),a.setAttribute("role","tabpanel"),a.setAttribute("hidden","");const i=document.createElement("slot");i.setAttribute("name",`tabpanel-slot-${o}`),a.appendChild(i),this.tabPanelHost.appendChild(a),(null===(e=this.host)||void 0===e?void 0:e.children)instanceof HTMLCollection&&(null===(t=this.host)||void 0===t?void 0:t.children[o])&&(null===(n=this.host)||void 0===n||n.children[o].setAttribute("slot",`tabpanel-slot-${o}`))}},this.onCreate=e=>{var t,n;e.preventDefault(),e.stopPropagation(),"function"==typeof(null===(t=this.state._on)||void 0===t?void 0:t.onCreate)&&(null===(n=this.state._on)||void 0===n||n.onCreate(e))},this._align="top",this._label=void 0,this._on=void 0,this._selected=0,this._tabs=void 0,this.state={_align:"top",_label:"",_selected:0,_tabs:[]}}renderButtonGroup(){return(0,o.h)(i.i,{class:"tabs-button-group",role:"tablist","aria-label":this.state._label,onKeyDown:this.onKeyDown},this.state._tabs.map(((e,t)=>(0,o.h)(i.c,{_disabled:e._disabled,_icons:e._icons,_hideLabel:e._hideLabel,_label:e._label,_on:this.callbacks,_tabIndex:this.state._selected===t?0:-1,_tooltipAlign:e._tooltipAlign,_variant:this.state._selected===t?"custom":void 0,_customClass:this.state._selected===t?"selected":void 0,_ariaControls:`tabpanel-${t}`,_ariaSelected:this.state._selected===t,_id:`${this.state._label.replace(/\s/g,"-")}-tab-${t}`,_role:"tab",_value:t}))),this.showCreateTab&&(0,o.h)(i.c,{class:"create-button",_label:this.onCreateLabel,_on:{onClick:this.onCreate}}))}render(){return(0,o.h)(o.H,{key:"e4e1913d7ede8a07070844194b5ba4a7edb19501",class:"kol-tabs"},(0,o.h)("div",{key:"9292bb7b6cf4cf0b738e97807735b4f299ca06ae",ref:e=>{this.tabPanelsElement=e},class:{[`tabs-align-${this.state._align}`]:!0}},this.renderButtonGroup(),(0,o.h)("div",{key:"99b0efb5eb634e24f9b376b488dab127f3a778b9",class:"tabs-content",ref:this.catchTabPanelHost})))}validateAlign(e){(0,r.a)(this,e)}validateLabel(e){(0,s.v)(this,e,{required:!0})}validateOn(e){if("object"==typeof e&&null!==e){(0,l.f)("[KolTabs] Pr\xfcfen, wie man auch einen EventCallback einzeln \xe4ndern kann.");const t={};"function"!=typeof e.onCreate&&"object"!=typeof e.onCreate||("object"==typeof e.onCreate?("string"==typeof e.onCreate.label&&e.onCreate.label.length>0?this.onCreateLabel=e.onCreate.label:d.L.debug("[KolTabs] Der Label-Text f\xfcr Neu in {\n  onCreate: {\n    label: string (!),\n    callback: Function\n  }\n} ist nicht korrekt gesetzt."),"function"==typeof e.onCreate.callback?t.onCreate=e.onCreate.callback:d.L.debug("[KolTabs] Die onCreate-Callback-Funktion f\xfcr Neu in {\n  onCreate: {\n    label: string,\n    callback: Function (!)\n  }\n} ist nicht korrekt gesetzt.")):t.onCreate=e.onCreate,this.showCreateTab="function"==typeof t.onCreate),"function"==typeof e.onSelect&&(t.onSelect=e.onSelect),(0,l.s)(this,"_on",t)}}validateSelected(e){(0,l.k)(this,"_selected",e,{hooks:{beforePatch:this.syncSelectedAndTabs}})}validateTabs(e){(0,l.g)(this,"_tabs",(e=>"object"==typeof e&&null!==e&&"string"==typeof e._label&&e._label.length>0),e,void 0,{hooks:{beforePatch:this.syncSelectedAndTabs}}),(0,l.h)("KolTabs",this.state._tabs.length)}componentWillLoad(){this.validateAlign(this._align),this.validateLabel(this._label),this.validateOn(this._on),this.validateSelected(this._selected),this.validateTabs(this._tabs)}componentDidRender(){if(this.handleTabPanels(),this.tabPanelHost instanceof HTMLDivElement)for(let e=0;e<this.tabPanelHost.children.length;e++)e!==this.state._selected?this.tabPanelHost.children[e].setAttribute("hidden",""):this.tabPanelHost.children[e].removeAttribute("hidden")}onSelect(e,t){var n,o;if(this._selected=t,"function"==typeof(null===(n=this._on)||void 0===n?void 0:n.onSelect)&&(null===(o=this._on)||void 0===o||o.onSelect(e,t)),this.tabPanelsElement){const e=(0,l.v)(`button#${this.state._label.replace(/\s/g,"-")}-tab-${t}`,this.tabPanelsElement);null==e||e.focus()}}get host(){return(0,o.g)(this)}static get watchers(){return{_align:["validateAlign"],_label:["validateLabel"],_on:["validateOn"],_selected:["validateSelected"],_tabs:["validateTabs"]}}};c.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  .hidden {\n    display: none;\n    visibility: hidden;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed;\n    opacity: 0.5;\n    outline: none;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  :host {\n    display: block;\n  }\n}\n@layer kol-component {\n  :host {\n    font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n  }\n  .kol-button-group-wc {\n    display: inline-flex;\n    flex-wrap: wrap;\n  }\n  .kol-button-group-wc button {\n    border-bottom-color: transparent;\n    border-bottom-style: solid;\n    display: block;\n  }\n  div.grid,\n  div[role=tabpanel] {\n    height: 100%;\n  }\n  :host > .tabs-align-right {\n    display: grid;\n    grid-template-columns: 1fr auto;\n  }\n  :host > .tabs-align-right .kol-button-group-wc {\n    display: grid;\n    order: 2;\n  }\n  :host > .tabs-align-left {\n    display: grid;\n    grid-template-columns: auto 1fr;\n  }\n  :host > .tabs-align-left .kol-button-group-wc {\n    display: grid;\n    order: 0;\n  }\n  :host > .tabs-align-bottom {\n    display: grid;\n    grid-template-rows: 1fr auto;\n  }\n  :host > .tabs-align-bottom .kol-button-group-wc {\n    order: 2;\n  }\n  :host > .tabs-align-bottom .kol-button-group-wc > div {\n    display: flex;\n  }\n  :host > .tabs-align-bottom > .kol-button-group-wc > div > div:first-child {\n    margin: 0 1em 0 0;\n  }\n  :host > .tabs-align-bottom > .kol-button-group-wc > div > div {\n    margin: 0 1em;\n  }\n  :host > .tabs-align-top {\n    display: grid;\n    grid-template-rows: auto 1fr;\n  }\n  :host > .tabs-align-top .kol-button-group-wc {\n    order: 0;\n  }\n  :host > .tabs-align-top .kol-button-group-wc > div {\n    display: flex;\n  }\n  :host > .tabs-align-top > .kol-button-group-wc > div > div:first-child {\n    margin: 0 1em 0 0;\n  }\n  :host > .tabs-align-top > .kol-button-group-wc > div > div {\n    margin: 0 1em;\n  }\n  :host > div {\n    display: grid;\n  }\n  :host > .tabs-align-left .kol-button-group-wc,\n  :host > .tabs-align-top .kol-button-group-wc {\n    order: 0;\n  }\n  :host > .tabs-align-bottom .kol-button-group-wc,\n  :host > .tabs-align-right .kol-button-group-wc {\n    order: 1;\n  }\n  :host > div.tabs-align-left .kol-button-group-wc > div,\n  :host > div.tabs-align-left .kol-button-group-wc > div > div,\n  :host > div.tabs-align-right .kol-button-group-wc > div,\n  :host > div.tabs-align-right .kol-button-group-wc > div > div {\n    display: grid;\n  }\n  :host > div.tabs-align-left .kol-button-group-wc > div > div .kol-button-wc,\n  :host > div.tabs-align-right .kol-button-group-wc > div > div .kol-button-wc {\n    width: 100%;\n  }\n  :host > div.tabs-align-bottom .kol-button-group-wc div,\n  :host > div.tabs-align-top .kol-button-group-wc div {\n    display: flex;\n    flex-wrap: wrap;\n  }\n}"}},72784:(e,t,n)=>{n.d(t,{a:()=>h,b:()=>l,c:()=>s,h:()=>a,v:()=>c});var o=n(29808);const a=[0,1,2,3,4,5,6],i=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,r=/^\d+$/;function l(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(i))||void 0===t?void 0:t.length)||0}(e)>=t}function s(e){return r.test(e)}const d=new Set(["string"]),c=(e,t,n={})=>{(0,o.w)(e,"_label",(e=>"string"==typeof e),d,t,function(e){var t;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(t,n,a,i)=>{var r,d;"function"==typeof(null===(r=e.hooks)||void 0===r?void 0:r.afterPatch)&&(null===(d=e.hooks)||void 0===d||d.afterPatch(t,n,a,i)),"string"==typeof t&&!1===l(t,3)&&!1===s(t)&&(0,o.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,o.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}})}(n))},h=c},29808:(e,t,n)=>{n.d(t,{A:()=>ce,B:()=>re,C:()=>he,D:()=>ee,K:()=>be,a:()=>r,b:()=>F,c:()=>p,d:()=>C,e:()=>v,f:()=>b,g:()=>Z,h:()=>m,i:()=>V,j:()=>c,k:()=>U,l:()=>h,m:()=>X,n:()=>s,o:()=>K,p:()=>ne,q:()=>R,r:()=>E,s:()=>W,t:()=>I,u:()=>g,v:()=>ie,w:()=>J,x:()=>oe,y:()=>ae,z:()=>ue});var o=n(88172),a=n(74520);const i=new Set,r=(e,t)=>{(!1===i.has(e)||(null==t?void 0:t.force))&&(i.add(e),a.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\u270b a11y",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #09f"}))},l=new Set,s=(e,t)=>{(!1===l.has(e)||(null==t?void 0:t.force))&&(l.add(e),a.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udd25 deprecated",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f00"}))},d=new Set,c=(e,t)=>{(!1===d.has(e)||(null==t?void 0:t.force))&&(d.add(e),a.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcbb dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},h=(e,t)=>{(!1===d.has(e)||(null==t?void 0:t.force))&&(d.add(e),a.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"\u26a0\ufe0f dev",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #f09"}))},u=new Set,b=(e,t=!1,n)=>{(!1===u.has(e)||(null==n?void 0:n.force))&&(u.add(e),e+=!0===t?" \u2705":"",a.L.debug([e].concat((null==n?void 0:n.details)||[]),{classifier:"\ud83c\udf1f feature",forceLog:!!(null==n?void 0:n.force),overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const f=new Set,g=(e,t)=>{(!1===f.has(e)||(null==t?void 0:t.force))&&(f.add(e),a.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83d\udcd1 ui/ux",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #060;"}))},p=()=>{r('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},v=e=>{"string"==typeof e&&""!==e||r("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},m=(e,t=8)=>{t>7&&g(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)};var y=.2126,w=.7152,k=.0722,x=1/12.92;function S(e){return Math.pow((e+.055)/1.055,2.4)}function _(e){var t=e[0]/255,n=e[1]/255,o=e[2]/255,a=t<=.03928?t*x:S(t),i=n<=.03928?n*x:S(n),r=o<=.03928?o*x:S(o);return a*y+i*w+r*k}function A(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function L(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(_(e),_(t))}function C(e,t){return L(A(e),A(t))}function N(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}var T={exports:{}};function P(e){var t=D(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function D(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var o=z(t[0]),a=z(t[1]),i=z(t[2]),r=3==n?255:z(t[3]);if(isNaN(o)||isNaN(a)||isNaN(i)||isNaN(r))return;return[o,a,i,r]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var o=z(t.slice(0,2)),a=z(t.slice(2,4)),i=z(t.slice(4,6)),r=6==n?255:z(t.slice(6,8));if(isNaN(o)||isNaN(a)||isNaN(i)||isNaN(r))return;return[o,a,i,r]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=H(t[0],!0),o=H(t[1],!0),a=H(t[2],!0);if(-1!=n&&-1!=o&&-1!=a)return[n,o,a,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=H(t[0],!0),o=H(t[1],!0),a=H(t[2],!0),i=H(255*t[3]);if(-1!=n&&-1!=o&&-1!=a&&-1!=i)return[n,o,a,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=H(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=H(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=H(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),a=H(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=a)return[t,n,o,a]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=H(e[0],!0),n=H(e[1],!0),o=H(e[2],!0),a=H(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=o&&-1!=a)return[t,n,o,a]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function M(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function z(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function H(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}T.exports=P,T.exports.arr=P,T.exports.obj=function(e){var t=D(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},T.exports.css=function(e){var t=D(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},T.exports.hex=function(e){3==(t=D(e)).length&&t.push(255);var t,n=255==t[3],o=M(t[0]),a=M(t[1]),i=M(t[2]),r=function(e,t,n,o){var a=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=a.indexOf(e)&&-1!=a.indexOf(t)&&-1!=a.indexOf(n)&&-1!=a.indexOf(o)}(o,a,i,t=M(Math.round(t[3])));return n?r?"#"+o.charAt(0)+a.charAt(0)+i.charAt(0):"#"+o+a+i:r?"#"+o.charAt(0)+a.charAt(0)+i.charAt(0)+t.charAt(0):"#"+o+a+i+t},T.exports.num=function(e){var t=D(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};const E=T.exports,O=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},$=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;O(n,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const a=o[t].shadowRoot;O(n,$(e,"object"==typeof a&&null!==a?a:o[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},j=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const a=o[t].shadowRoot;if(n=j(e,"object"==typeof a&&null!==a?a:o[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")},q=/\[object Object\]/,K=(e,t)=>{"string"==typeof e&&q.test(e)||t()},I=(e,t)=>{"string"==typeof e&&""===e||t()},R=(e,t)=>{(0,a.a)()&&(a.L.debug([e,t]),a.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:t,writable:!1})},W=(e,t,n,o={})=>{var a,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",o.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var o;const a=t.get("beforePatch");"function"==typeof a&&a(null===(o=e.nextState)||void 0===o?void 0:o.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,n)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e)},B=(e,t,n,o)=>{c(`[${e.constructor.name}] Der Property-Wert (${n}) f\xfcr '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)};function J(e,t,n,o,a,i={}){n(a)?W(e,t,a,i.hooks):void 0===a&&!0!==i.required&&n(i.defaultValue)?W(e,t,i.defaultValue,i.hooks):(i.required||o.add(null),B(e,t,a,o))}const F=(e,t,n,o)=>{J(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,o)},V=(e,t,n,o={})=>{const a="number"==typeof o.minLength?null==o?void 0:o.minLength:0;J(e,t,(e=>"string"==typeof e&&e.length>=a&&(void 0===(null==o?void 0:o.maxLength)||e.length<=o.maxLength)),new Set(["String"]),n,o)},U=(e,t,n,o)=>{J(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),n,o)},Z=(e,t,n,o,i=(e=>e==e),r={})=>{I(o,(()=>{K(o,(()=>{void 0===o&&(o=[]);try{try{o=ne(o)}catch(e){}if(Array.isArray(o)){const l=o.find((e=>!n(e)));void 0===l&&i(o)?W(e,t,o,r.hooks):K(l,(()=>{throw a.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else K(o,(()=>{throw a.L.debug(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){a.L.debug(e)}}))}))},G=/^(true|false)$/,Y=/^-?(0|[1-9]\d*)$/,Q=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,X=e=>{const t=typeof e,n=`${e}`;if("string"==typeof e)if(G.test(e))e="true"===e;else if(Y.test(e))e=parseInt(e);else if(Q.test(e))e=parseFloat(e);else if(te.test(e))try{e=ne(e)}catch(e){}return t!==typeof e&&c(`You have used a stringified property value (${n} to ${JSON.stringify(e)}) which type switched from ${t} to ${typeof e}!`),e},ee=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(k){throw a.L.warn(["stringifyJson",e]),a.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},te=/^[{[]/,ne=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(k){if(te.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(k){a.L.warn(["parseJson",e]),a.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},oe=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,ae=e=>"string"==typeof e?e:oe(e),ie=(e,t)=>j(e,t||(0,a.g)()),re=(e,t)=>$(e,t||(0,a.g)());let le=null;const se=()=>(le=le||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,a.g)().body,level:"Fail",score:1},le),de=/(\d+, ){3}0\)/,ce=(e,t=se())=>{const n=getComputedStyle(e),o=de.test(n.backgroundColor)?t.backgroundColor:E.hex(n.backgroundColor),i=de.test(n.color)?t.color:E.hex(n.color),r=C(o,i),l={backgroundColor:o,color:i,domNode:e,level:N(r),score:r};return r<4.5&&a.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},he=(e,t=se())=>{t.domNode instanceof HTMLElement&&(t=ce(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<n.length&&(t.domNode=n[o],null===(t=he(e,t)).domNode);o++);return t}return ce(n,t)};class ue{static queryHtmlElementColors(e,t,n=!1,o=!0){let i=null;if(!0===n||!1===ue.executionLock)if(!1===n&&(ue.cache.clear(),ue.cache.set(t.domNode,t),ue.executionLock=!0,!0===o&&a.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)i=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const a=t.domNode.children;for(let e=0;e<a.length;e++)n.add(a[e]);const r=Array.from(n);for(let l=0;l<r.length;l++){let n=ue.cache.get(r[l]);void 0===n&&(n=ce(r[l],t)),ue.cache.set(r[l],n);const o=ue.queryHtmlElementColors(e,n,!0,!1);if(null!==o){i=o;break}}}else a.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===o&&a.L.debug(`[KoliBriUtils] Color contrast analysis finished (${ue.cache.size} DOM elements are analysed).`),ue.executionLock=!1,ue.cache.clear()),i}}ue.executionLock=!1,ue.cache=new Map;class be{}be.patchTheme=o.U,be.patchThemeTag=o.b,be.querySelector=ie,be.querySelectorAll=re,be.stringifyJson=ee}}]);