/*! For license information please see 26552.a43c4f59.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[26552],{43440:(e,n,t)=>{t.d(n,{i:()=>a,n:()=>s,r:()=>l});var o=t(74520),r=t(31604);const i=()=>{let e=(0,o.d)().KoliBri;return void 0===e&&(e={},Object.defineProperty((0,o.d)(),"KoliBri",{value:e,writable:!1})),e},a=()=>{(()=>{const e=(0,o.g)().querySelector('meta[name="kolibri"]');if(e&&e.hasAttribute("content")){const n=e.getAttribute("content");"string"==typeof n&&((0,o.s)(n.includes("dev-mode=true")),(0,o.b)(n.includes("experimental-mode=true")),(0,o.c)(n.includes("color-contrast-analysis=true")))}})(),o.L.debug("\n,--. ,--.         ,--. ,--. ,-----.           ,--.\n|  .'   /  ,---.  |  | `--' |  |) /_  ,--.--. `--'\n|  .   '  | .-. | |  | ,--. |  .-.  \\ |  .--' ,--.\n|  |\\   \\ | '-' | |  | |  | |  '--' / |  |    |  |\n`--' `--\xb4  `---\xb4  `--' `--' `------\xb4  `--'    `--'\n\ud83d\udeb9 The accessible HTML-Standard | \ud83d\udc49 https://public-ui.github.io | 2.1.1\n\t",{forceLog:!0})},l=()=>{!0!==i().adviceShown&&(Object.defineProperty(i(),"adviceShown",{get:function(){return!0}}),o.L.debug("\nYou are using the KoliBri component library. If you have any suggestions for improvement or find a problem, please contact us:\n\nTicket: https://github.com/public-ui/kolibri/issues/new/choose (for privacy reasons, please use email)\nEmail: kolibri@itzbund.de\n"))};let s=()=>Math.floor(16777215*Math.random()).toString(16);"test"===r.p&&(s=()=>"nonce")},60960:(e,n,t)=>{t.d(n,{v:()=>r});var o=t(29808);const r=(e,n)=>{(0,o.b)(e,"_disabled",n,{hooks:{afterPatch:e=>{!0===e&&(0,o.c)()}}})}},26552:(e,n,t)=>{t.r(n),t.d(n,{kol_accordion:()=>h});var o=t(33432),r=t(43440),i=t(79020),a=t(83852),l=t(29808),s=t(31604),c=t(60960),d=t(6140),u=t(72784);(0,l.f)("[KolAccordion] Anfrage nach einer KolAccordionGroup bei dem immer nur ein Accordion ge\xf6ffnet ist.\n\n- onClick auf der KolAccordion anwenden\n- Click-Event pr\xfcft den _open-Status der Accordions\n- Logik \xd6ffnet und Schlie\xdft entsprechend"),(0,l.f)("[KolAccordion] Tab-Sperre des Inhalts im geschlossenen Zustand.");const h=class{constructor(e){(0,o.r)(this,e),this.nonce=(0,r.n)(),this.catchRef=e=>{(0,s.a)(this.host,e)},this.onClick=e=>{this._open=!this._open,setTimeout((()=>{var n;"function"==typeof(null===(n=this.state._on)||void 0===n?void 0:n.onClick)&&this.state._on.onClick(e,!0===this._open)}))},this._disabled=!1,this._label=void 0,this._level=1,this._on=void 0,this._open=!1,this.state={_label:"",_level:1}}render(){return(0,o.h)(o.H,{key:"f1672f2cf8b9aa85b1f63ab68d00300b74638dd8",class:"kol-accordion"},(0,o.h)("div",{key:"e80bb532a6f148e9608b9d5b4eca382cf8c01e8d",class:{accordion:!0,disabled:!0===this.state._disabled,open:!0===this.state._open}},(0,o.h)(a.b,{key:"e221fc0ccd86504a3e491a8e32c55da5fa76a365",_label:"",_level:this.state._level,class:"accordion-heading"},(0,o.h)(a.c,{key:"f65af86aab71ff029bba8108495477d7be05c2f3",class:"accordion-button",ref:this.catchRef,slot:"expert",_ariaControls:this.nonce,_ariaExpanded:this.state._open,_disabled:this.state._disabled,_icons:this.state._open?"codicon codicon-remove":"codicon codicon-add",_label:this.state._label,_on:{onClick:this.onClick}})),(0,o.h)("div",{key:"5435d015a21707724c7180dbb96e7a0af30f9d42",class:"wrapper"},(0,o.h)("div",{key:"5a9958a91c49d8b807627f7029ad975e52c6e1ea",class:"animation-wrapper"},(0,o.h)("div",{key:"367a024dca25373063df9ec0e679161ad26bffb8","aria-hidden":!1===this.state._open?"true":void 0,class:"content",id:this.nonce},(0,o.h)("slot",{key:"dfbbf47f20297d5f5052d7df8f74bd659ce054fd"}))))))}validateDisabled(e){(0,c.v)(this,e)}validateLabel(e){(0,u.v)(this,e,{required:!0})}validateLevel(e){(0,i.w)(this,e)}validateOn(e){"object"==typeof e&&null!==e&&"function"==typeof e.onClick&&(0,l.s)(this,"_on",e)}validateOpen(e){(0,d.v)(this,e)}componentWillLoad(){this.validateDisabled(this._disabled),this.validateLabel(this._label),this.validateLevel(this._level),this.validateOn(this._on),this.validateOpen(this._open)}get host(){return(0,o.g)(this)}static get watchers(){return{_disabled:["validateDisabled"],_label:["validateLabel"],_level:["validateLevel"],_on:["validateOn"],_open:["validateOpen"]}}};h.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  .hidden {\n    display: none;\n    visibility: hidden;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed;\n    opacity: 0.5;\n    outline: none;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  :host {\n    display: block;\n  }\n}\n@layer kol-component {\n  :host {\n    font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n  }\n  /* For animation technique see https://css-tricks.com/css-grid-can-do-auto-height-transitions/ */\n  .wrapper {\n    display: grid;\n    grid-template-rows: 0fr;\n    overflow: hidden;\n    transition: grid-template-rows 0.3s;\n  }\n  .accordion.open .wrapper {\n    grid-template-rows: 1fr;\n  }\n  .animation-wrapper {\n    min-height: 0;\n    transition: visibility 0.3s;\n    /* This property is important to keep in sync with the visual transition (template-rows). Without it interactive elements within the accordion would stay focusable. */\n    visibility: hidden;\n  }\n  .accordion.open .animation-wrapper {\n    visibility: visible;\n  }\n  @media (prefers-reduced-motion) {\n    .animation-wrapper,\n    .wrapper {\n      transition-duration: 0s;\n    }\n  }\n  /* @see https://github.com/public-ui/kolibri/issues/5952 */\n  @media print {\n    .accordion:not(.open) .animation-wrapper {\n      display: none;\n    }\n  }\n  /*\n  * Inside a button, the caption text is always centered.\n  * So we have to align the text to the left.\n  */\n  .accordion .kol-heading-wc .kol-button-wc button .kol-span-wc {\n    justify-items: start;\n  }\n}"}},72784:(e,n,t)=>{t.d(n,{a:()=>u,b:()=>l,c:()=>s,h:()=>r,v:()=>d});var o=t(29808);const r=[0,1,2,3,4,5,6],i=/[a-zA-Z0-9\xe4\xf6\xfc\xc4\xd6\xdc\xdf]/g,a=/^\d+$/;function l(e,n=1){return function(e){var n;return"string"==typeof e&&(null===(n=e.match(i))||void 0===n?void 0:n.length)||0}(e)>=n}function s(e){return a.test(e)}const c=new Set(["string"]),d=(e,n,t={})=>{(0,o.w)(e,"_label",(e=>"string"==typeof e),c,n,function(e){var n;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(n,t,r,i)=>{var a,c;"function"==typeof(null===(a=e.hooks)||void 0===a?void 0:a.afterPatch)&&(null===(c=e.hooks)||void 0===c||c.afterPatch(n,t,r,i)),"string"==typeof n&&!1===l(n,3)&&!1===s(n)&&(0,o.a)(`The heading or label ("${n}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof n&&n.length>80&&(0,o.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(n=e.hooks)||void 0===n?void 0:n.beforePatch}})}(t))},u=d},6140:(e,n,t)=>{t.d(n,{v:()=>r});var o=t(29808);const r=(e,n,t)=>{(0,o.b)(e,"_open",n,t)}},29808:(e,n,t)=>{t.d(n,{A:()=>de,B:()=>ae,C:()=>ue,D:()=>ee,K:()=>fe,a:()=>a,b:()=>F,c:()=>g,d:()=>N,e:()=>m,f:()=>f,g:()=>Z,h:()=>v,i:()=>V,j:()=>d,k:()=>U,l:()=>u,m:()=>X,n:()=>s,o:()=>K,p:()=>te,q:()=>W,r:()=>q,s:()=>B,t:()=>R,u:()=>p,v:()=>ie,w:()=>J,x:()=>oe,y:()=>re,z:()=>he});var o=t(88172),r=t(74520);const i=new Set,a=(e,n)=>{(!1===i.has(e)||(null==n?void 0:n.force))&&(i.add(e),r.L.debug([e].concat((null==n?void 0:n.details)||[]),{classifier:"\u270b a11y",forceLog:!!(null==n?void 0:n.force),overwriteStyle:"; background-color: #09f"}))},l=new Set,s=(e,n)=>{(!1===l.has(e)||(null==n?void 0:n.force))&&(l.add(e),r.L.warn([e].concat((null==n?void 0:n.details)||[]),{classifier:"\ud83d\udd25 deprecated",forceLog:!!(null==n?void 0:n.force),overwriteStyle:"; background-color: #f00"}))},c=new Set,d=(e,n)=>{(!1===c.has(e)||(null==n?void 0:n.force))&&(c.add(e),r.L.debug([e].concat((null==n?void 0:n.details)||[]),{classifier:"\ud83d\udcbb dev",forceLog:!!(null==n?void 0:n.force),overwriteStyle:"; background-color: #f09"}))},u=(e,n)=>{(!1===c.has(e)||(null==n?void 0:n.force))&&(c.add(e),r.L.warn([e].concat((null==n?void 0:n.details)||[]),{classifier:"\u26a0\ufe0f dev",forceLog:!!(null==n?void 0:n.force),overwriteStyle:"; background-color: #f09"}))},h=new Set,f=(e,n=!1,t)=>{(!1===h.has(e)||(null==t?void 0:t.force))&&(h.add(e),e+=!0===n?" \u2705":"",r.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"\ud83c\udf1f feature",forceLog:!!(null==t?void 0:t.force),overwriteStyle:"; background-color: #309"}))};d("Wir freuen uns \xfcber jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const b=new Set,p=(e,n)=>{(!1===b.has(e)||(null==n?void 0:n.force))&&(b.add(e),r.L.debug([e].concat((null==n?void 0:n.details)||[]),{classifier:"\ud83d\udcd1 ui/ux",forceLog:!!(null==n?void 0:n.force),overwriteStyle:"; background-color: #060;"}))},g=()=>{a('"Disabled" schr\xe4nkt die Zug\xe4nglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},m=e=>{"string"==typeof e&&""!==e||a("Manche Strukturelemente, wie bspw. der nav-Tag, k\xf6nnen mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden k\xf6nnen, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},v=(e,n=8)=>{n>7&&p(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Men\xfcpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)};var y=.2126,w=.7152,k=.0722,S=1/12.92;function x(e){return Math.pow((e+.055)/1.055,2.4)}function L(e){var n=e[0]/255,t=e[1]/255,o=e[2]/255,r=n<=.03928?n*S:x(n),i=t<=.03928?t*S:x(t),a=o<=.03928?o*S:x(o);return r*y+i*w+a*k}function A(e){var n=255;8===(e=e.replace(/^#/,"")).length&&(n=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(n=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var t=parseInt(e,16);return[t>>16,t>>8&255,255&t,n]}function _(e,n){return function(e,n){return(Math.max(e,n)+.05)/(Math.min(e,n)+.05)}(L(e),L(n))}function N(e,n){return _(A(e),A(n))}function O(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}var C={exports:{}};function M(e){var n=z(e);return 3==n.length?n.concat(255):(n[3]=Math.round(n[3]),n)}function z(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var n=e.replace(/^#/,""),t=n.length;if(3==t||4==t){var o=j(n[0]),r=j(n[1]),i=j(n[2]),a=3==t?255:j(n[3]);if(isNaN(o)||isNaN(r)||isNaN(i)||isNaN(a))return;return[o,r,i,a]}}(e)||function(e){var n=e.replace(/^#/,""),t=n.length;if(6==t||8==t){var o=j(n.slice(0,2)),r=j(n.slice(2,4)),i=j(n.slice(4,6)),a=6==t?255:j(n.slice(6,8));if(isNaN(o)||isNaN(r)||isNaN(i)||isNaN(a))return;return[o,r,i,a]}}(e)||function(e){if("rgb("==e.substr(0,4)){var n=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),t=E(n[0],!0),o=E(n[1],!0),r=E(n[2],!0);if(-1!=t&&-1!=o&&-1!=r)return[t,o,r,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var n=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),t=E(n[0],!0),o=E(n[1],!0),r=E(n[2],!0),i=E(255*n[3]);if(-1!=t&&-1!=o&&-1!=r&&-1!=i)return[t,o,r,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var n=E(null!=e.r?e.r:null!=e.red?e.red:0,!0),t=E(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=E(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),r=E(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=n&&-1!=t&&-1!=o&&-1!=r)return[n,t,o,r]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var n=E(e[0],!0),t=E(e[1],!0),o=E(e[2],!0),r=E(null!=e[3]?e[3]:255,!0);if(-1!=n&&-1!=t&&-1!=o&&-1!=r)return[n,t,o,r]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function T(e){var n=e.toString(16);return 1==n.length?"0"+n:n}function j(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function E(e,n){return"number"!=typeof e||!0===n&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}C.exports=M,C.exports.arr=M,C.exports.obj=function(e){var n=z(e);return{r:n[0],g:n[1],b:n[2],a:3==n.length?255:Math.round(n[3])}},C.exports.css=function(e){var n=z(e);return 3==n.length&&n.push(255),255==n[3]?"rgb("+n[0]+", "+n[1]+", "+n[2]+")":0==n[3]?"rgba("+n[0]+", "+n[1]+", "+n[2]+", 0)":"rgba("+n[0]+", "+n[1]+", "+n[2]+", "+String(n[3]/255).substr(1)+")"},C.exports.hex=function(e){3==(n=z(e)).length&&n.push(255);var n,t=255==n[3],o=T(n[0]),r=T(n[1]),i=T(n[2]),a=function(e,n,t,o){var r=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=r.indexOf(e)&&-1!=r.indexOf(n)&&-1!=r.indexOf(t)&&-1!=r.indexOf(o)}(o,r,i,n=T(Math.round(n[3])));return t?a?"#"+o.charAt(0)+r.charAt(0)+i.charAt(0):"#"+o+r+i:a?"#"+o.charAt(0)+r.charAt(0)+i.charAt(0)+n.charAt(0):"#"+o+r+i+n},C.exports.num=function(e){var n=z(e);return 3==n.length?n.push(255):n[3]=Math.round(n[3]),(n[3]<<24>>>0|n[0]<<16|n[1]<<8|n[2])>>>0};const q=C.exports,P=(e,n)=>{n.forEach((n=>{!1===e.has(n)&&e.add(n)}))},D=(e,n=document)=>{if(n instanceof Document||n instanceof HTMLElement||n instanceof ShadowRoot){const t=new Set;P(t,n.querySelectorAll(e));const o=n.querySelectorAll('[class*="hydrated"]');for(let n=0;n<o.length;n++){const r=o[n].shadowRoot;P(t,D(e,"object"==typeof r&&null!==r?r:o[n]))}return Array.from(t)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},H=(e,n=document)=>{if(n instanceof Document||n instanceof HTMLElement||n instanceof ShadowRoot){let t=n.querySelector(e);if(null===t){const o=n.querySelectorAll('[class*="hydrated"]');for(let n=0;n<o.length;n++){const r=o[n].shadowRoot;if(t=H(e,"object"==typeof r&&null!==r?r:o[n]),null!==t)break}}return t}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")},$=/\[object Object\]/,K=(e,n)=>{"string"==typeof e&&$.test(e)||n()},R=(e,n)=>{"string"==typeof e&&""===e||n()},W=(e,n)=>{(0,r.a)()&&(r.L.debug([e,n]),r.L.debug("\u2191 We propagate the (submit) event to this target.")),Object.defineProperty(e,"target",{value:n,writable:!1})},B=(e,n,t,o={})=>{var r,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextHooks.get(n)instanceof Map==0&&e.nextHooks.set(n,new Map),"function"==typeof o.afterPatch&&(null===(r=e.nextHooks.get(n))||void 0===r||r.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(i=e.nextHooks.get(n))||void 0===i||i.set("beforePatch",o.beforePatch)),e.nextState.set(n,t),(e=>{var n,t,o;null===(n=e.nextHooks)||void 0===n||n.forEach(((n,t)=>{var o;const r=n.get("beforePatch");"function"==typeof r&&r(null===(o=e.nextState)||void 0===o?void 0:o.get(t),e.nextState,e,t)})),(null===(t=e.nextState)||void 0===t?void 0:t.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((n,t)=>{const o=n.get("afterPatch");"function"==typeof o&&o(e.state[t],e.state,e,t)}))),delete e.nextHooks})(e)},I=(e,n,t,o)=>{d(`[${e.constructor.name}] Der Property-Wert (${t}) f\xfcr '${n}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)};function J(e,n,t,o,r,i={}){t(r)?B(e,n,r,i.hooks):void 0===r&&!0!==i.required&&t(i.defaultValue)?B(e,n,i.defaultValue,i.hooks):(i.required||o.add(null),I(e,n,r,o))}const F=(e,n,t,o)=>{J(e,n,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),t,o)},V=(e,n,t,o={})=>{const r="number"==typeof o.minLength?null==o?void 0:o.minLength:0;J(e,n,(e=>"string"==typeof e&&e.length>=r&&(void 0===(null==o?void 0:o.maxLength)||e.length<=o.maxLength)),new Set(["String"]),t,o)},U=(e,n,t,o)=>{J(e,n,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),t,o)},Z=(e,n,t,o,i=(e=>e==e),a={})=>{R(o,(()=>{K(o,(()=>{void 0===o&&(o=[]);try{try{o=te(o)}catch(e){}if(Array.isArray(o)){const l=o.find((e=>!t(e)));void 0===l&&i(o)?B(e,n,o,a.hooks):K(l,(()=>{throw r.L.debug(l),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}else K(o,(()=>{throw r.L.debug(o),new Error("\u2191 Das Schema f\xfcr das Property (_options) ist nicht valide. Der Wert wird nicht ge\xe4ndert.")}))}catch(e){r.L.debug(e)}}))}))},Y=/^(true|false)$/,G=/^-?(0|[1-9]\d*)$/,Q=/^-?(0.|[1-9]\d*.)\d*[1-9]$/,X=e=>{const n=typeof e,t=`${e}`;if("string"==typeof e)if(Y.test(e))e="true"===e;else if(G.test(e))e=parseInt(e);else if(Q.test(e))e=parseFloat(e);else if(ne.test(e))try{e=te(e)}catch(e){}return n!==typeof e&&d(`You have used a stringified property value (${t} to ${JSON.stringify(e)}) which type switched from ${n} to ${typeof e}!`),e},ee=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(k){throw r.L.warn(["stringifyJson",e]),r.L.error("\u2191 Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},ne=/^[{[]/,te=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(k){if(ne.test(e))try{return JSON.parse(e.replace(/'/g,'"'))}catch(k){r.L.warn(["parseJson",e]),r.L.error("\u2191 Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anf\xfchrungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},oe=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,re=e=>"string"==typeof e?e:oe(e),ie=(e,n)=>H(e,n||(0,r.g)()),ae=(e,n)=>D(e,n||(0,r.g)());let le=null;const se=()=>(le=le||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,r.g)().body,level:"Fail",score:1},le),ce=/(\d+, ){3}0\)/,de=(e,n=se())=>{const t=getComputedStyle(e),o=ce.test(t.backgroundColor)?n.backgroundColor:q.hex(t.backgroundColor),i=ce.test(t.color)?n.color:q.hex(t.color),a=N(o,i),l={backgroundColor:o,color:i,domNode:e,level:O(a),score:a};return a<4.5&&r.L.error(["Color-Contrast-Error",{backgroundColor:l.backgroundColor,color:l.color,level:l.level,score:l.score},l.domNode]),l},ue=(e,n=se())=>{n.domNode instanceof HTMLElement&&(n=de(n.domNode,n));const t=n.domNode.querySelector(e);if(null===t){const t=n.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<t.length&&(n.domNode=t[o],null===(n=ue(e,n)).domNode);o++);return n}return de(t,n)};class he{static queryHtmlElementColors(e,n,t=!1,o=!0){let i=null;if(!0===t||!1===he.executionLock)if(!1===t&&(he.cache.clear(),he.cache.set(n.domNode,n),he.executionLock=!0,!0===o&&r.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===n.domNode)i=n;else{const t=new Set;if(n.domNode.shadowRoot){const e=n.domNode.shadowRoot.children;for(let n=0;n<e.length;n++)t.add(e[n])}const o=n.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let n=0;n<e.length;n++)e[n]instanceof HTMLElement&&t.add(e[n])}const r=n.domNode.children;for(let e=0;e<r.length;e++)t.add(r[e]);const a=Array.from(t);for(let l=0;l<a.length;l++){let t=he.cache.get(a[l]);void 0===t&&(t=de(a[l],n)),he.cache.set(a[l],t);const o=he.queryHtmlElementColors(e,t,!0,!1);if(null!==o){i=o;break}}}else r.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===t&&(!0===o&&r.L.debug(`[KoliBriUtils] Color contrast analysis finished (${he.cache.size} DOM elements are analysed).`),he.executionLock=!1,he.cache.clear()),i}}he.executionLock=!1,he.cache=new Map;class fe{}fe.patchTheme=o.U,fe.patchThemeTag=o.b,fe.querySelector=ie,fe.querySelectorAll=ae,fe.stringifyJson=ee},79020:(e,n,t)=>{t.d(n,{w:()=>i});var o=t(72784),r=t(29808);const i=(e,n)=>{(0,r.w)(e,"_level",(e=>"number"==typeof e&&o.h.includes(e)),new Set([`Number {${o.h.join(", ")}`]),n,{defaultValue:1,required:!0})}}}]);