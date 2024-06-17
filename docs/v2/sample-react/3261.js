/*! For license information please see 3261.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[3261],{7223:(n,e,t)=>{t.d(e,{a:()=>l,v:()=>o});var i=t(121);const o=(n,e,t)=>{(0,i.w)(n,e,(n=>"string"==typeof n&&a.includes(n)),new Set(a),t,{defaultValue:"top"})},a=["left","right","top","bottom"],l=(n,e)=>{o(n,"_align",e)}},2477:(n,e,t)=>{t.d(e,{i:()=>l,n:()=>r,r:()=>s});var i=t(881),o=t(2466);const a=()=>{let n=(0,i.d)().KoliBri;return void 0===n&&(n={},Object.defineProperty((0,i.d)(),"KoliBri",{value:n,writable:!1})),n},l=()=>{(()=>{const n=(0,i.g)().querySelector('meta[name="kolibri"]');if(n&&n.hasAttribute("content")){const e=n.getAttribute("content");"string"==typeof e&&((0,i.s)(e.includes("dev-mode=true")),(0,i.b)(e.includes("experimental-mode=true")),(0,i.c)(e.includes("color-contrast-analysis=true")))}})(),i.L.debug("\n,--. ,--.         ,--. ,--. ,-----.           ,--.\n|  .'   /  ,---.  |  | `--' |  |) /_  ,--.--. `--'\n|  .   '  | .-. | |  | ,--. |  .-.  \\ |  .--' ,--.\n|  |\\   \\ | '-' | |  | |  | |  '--' / |  |    |  |\n`--' `--´  `---´  `--' `--' `------´  `--'    `--'\n🚹 The accessible HTML-Standard | 👉 https://public-ui.github.io | 2.1.2\n\t",{forceLog:!0})},s=()=>{!0!==a().adviceShown&&(Object.defineProperty(a(),"adviceShown",{get:function(){return!0}}),i.L.debug("\nYou are using the KoliBri component library. If you have any suggestions for improvement or find a problem, please contact us:\n\nTicket: https://github.com/public-ui/kolibri/issues/new/choose (for privacy reasons, please use email)\nEmail: kolibri@itzbund.de\n"))};let r=()=>Math.floor(16777215*Math.random()).toString(16);"test"===o.p&&(r=()=>"nonce")},3261:(n,e,t)=>{t.r(e),t.d(e,{kol_abbr:()=>r});var i=t(3685),o=t(2477),a=t(1301),l=t(9921),s=t(9917);const r=class{constructor(n){(0,i.r)(this,n),this.nonce=(0,o.n)(),this._label=void 0,this._tooltipAlign="top",this.state={_label:"",_tooltipAlign:"top"}}render(){return(0,i.h)(i.H,{key:"598d706f074db11649d068894821a214d3373d11",class:"kol-abbr"},(0,i.h)("abbr",{key:"cea033577a07ea9cbc48cf32f2afa798b2f70c1b","aria-labelledby":this.nonce,role:"definition",tabindex:"0",title:this.state._label},(0,i.h)("span",{key:"f28a0dacfb9e1d5807f763e03401e1b71c0414c3",title:""},(0,i.h)("slot",{key:"c72ee140bfc1c43d781a5309c07f9a47689d6f4e"}))),(0,i.h)(a.a,{key:"2743bb91c1b770375bda8e19668e7ad698b10baa",_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._label}))}validateLabel(n){(0,l.v)(this,n,{required:!0})}validateTooltipAlign(n){(0,s.v)(this,n)}componentWillLoad(){this.validateLabel(this._label),this.validateTooltipAlign(this._tooltipAlign)}static get watchers(){return{_label:["validateLabel"],_tooltipAlign:["validateTooltipAlign"]}}};r.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed;\n    opacity: 0.5;\n    outline: none;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  :host {\n    font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n  }\n  :host > abbr {\n    cursor: help;\n  }\n}"}},9921:(n,e,t)=>{t.d(e,{a:()=>h,b:()=>s,c:()=>r,h:()=>o,v:()=>c});var i=t(121);const o=[0,1,2,3,4,5,6],a=/[a-zA-Z0-9äöüÄÖÜß]/g,l=/^\d+$/;function s(n,e=1){return function(n){var e;return"string"==typeof n&&(null===(e=n.match(a))||void 0===e?void 0:e.length)||0}(n)>=e}function r(n){return l.test(n)}const d=new Set(["string"]),c=(n,e,t={})=>{(0,i.w)(n,"_label",(n=>"string"==typeof n),d,e,function(n){var e;return Object.assign(Object.assign({},n),{hooks:{afterPatch:(e,t,o,a)=>{var l,d;"function"==typeof(null===(l=n.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(d=n.hooks)||void 0===d||d.afterPatch(e,t,o,a)),"string"==typeof e&&!1===s(e,3)&&!1===r(e)&&(0,i.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=n.hooks)||void 0===e?void 0:e.beforePatch}})}(t))},h=c},9917:(n,e,t)=>{t.d(e,{v:()=>o});var i=t(7223);const o=(n,e)=>{(0,i.v)(n,"_tooltipAlign",e)}}}]);