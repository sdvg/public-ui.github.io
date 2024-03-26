/*! For license information please see 252.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[252],{4908:(n,e,t)=>{t.d(e,{i:()=>a,n:()=>l,r:()=>s});var i=t(8886);const o=()=>{let n=(0,i.d)().KoliBri;return void 0===n&&(n={},Object.defineProperty((0,i.d)(),"KoliBri",{value:n,writable:!1})),n},a=()=>{(()=>{const n=(0,i.g)().querySelector('meta[name="kolibri"]');if(n&&n.hasAttribute("content")){const e=n.getAttribute("content");"string"==typeof e&&((0,i.s)(e.includes("dev-mode=true")),(0,i.b)(e.includes("experimental-mode=true")),(0,i.c)(e.includes("color-contrast-analysis=true")))}})(),i.L.debug("\n,--. ,--.         ,--. ,--. ,-----.           ,--.\n|  .'   /  ,---.  |  | `--' |  |) /_  ,--.--. `--'\n|  .   '  | .-. | |  | ,--. |  .-.  \\ |  .--' ,--.\n|  |\\   \\ | '-' | |  | |  | |  '--' / |  |    |  |\n`--' `--´  `---´  `--' `--' `------´  `--'    `--'\n🚹 The accessible HTML-Standard | 👉 https://public-ui.github.io | 2.0.8\n\t",{forceLog:!0})},s=()=>{!0!==o().adviceShown&&(Object.defineProperty(o(),"adviceShown",{get:function(){return!0}}),i.L.debug("\nYou are using the KoliBri component library. If you have any suggestions for improvement or find a problem, please contact us:\n\nTicket: https://github.com/public-ui/kolibri/issues/new/choose (for privacy reasons, please use email)\nEmail: kolibri@itzbund.de\n"))};let l=()=>Math.floor(16777215*Math.random()).toString(16);"test"===i.p&&(l=()=>"nonce")},252:(n,e,t)=>{t.r(e),t.d(e,{kol_accordion:()=>r});var i=t(6148),o=t(8886),a=t(4908),s=t(3692),l=t(57);(0,o.f)("[KolAccordion] Anfrage nach einer KolAccordionGroup bei dem immer nur ein Accordion geöffnet ist.\n\n- onClick auf der KolAccordion anwenden\n- Click-Event prüft den _open-Status der Accordions\n- Logik Öffnet und Schließt entsprechend"),(0,o.f)("[KolAccordion] Tab-Sperre des Inhalts im geschlossenen Zustand.");const r=class{constructor(n){(0,i.r)(this,n),this.nonce=(0,a.n)(),this.catchRef=n=>{(0,o.h)(this.host,n)},this.onClick=n=>{this._open=!this._open,setTimeout((()=>{var e;"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onClick)&&this.state._on.onClick(n,!0===this._open)}))},this._disabled=!1,this._label=void 0,this._level=1,this._on=void 0,this._open=!1,this.state={_label:"",_level:1}}render(){return(0,i.h)(i.H,{key:"375071dab3f67a8a9ea41166c5e5955a905ba04a",class:"kol-accordion"},(0,i.h)("div",{key:"44e8a90eed884c991797ea6e0e727777075d6d00",class:{accordion:!0,disabled:!0===this.state._disabled,open:!0===this.state._open}},(0,i.h)(l.b,{key:"6fdf9427c74afbcc932fa05c1840e8cb6b606b9a",_label:"",_level:this.state._level,class:"accordion-heading"},(0,i.h)(l.c,{key:"4e82eb30cd0ff1fef25262dc0e34a3408b0aaad6",class:"accordion-button",ref:this.catchRef,slot:"expert",_ariaControls:this.nonce,_ariaExpanded:this.state._open,_disabled:this.state._disabled,_icons:this.state._open?"codicon codicon-remove":"codicon codicon-add",_label:this.state._label,_on:{onClick:this.onClick}})),(0,i.h)("div",{key:"0835efe279a9deb62190997682ef0e8fe4a1edf2",class:"wrapper"},(0,i.h)("div",{key:"f7244e8b9807223dd80f0b261ec1e2b730f95e85",class:"animation-wrapper"},(0,i.h)("div",{key:"4ef5849701c39fe7f738cd34661e5c0fc9f29efc","aria-hidden":!1===this.state._open?"true":void 0,class:"content",id:this.nonce},(0,i.h)("slot",{key:"324bf4086448b8c5700c98d6fa7d830846e362af"}))))))}validateDisabled(n){(0,o.i)(this,n)}validateLabel(n){(0,o.v)(this,n,{required:!0})}validateLevel(n){(0,s.w)(this,n)}validateOn(n){"object"==typeof n&&null!==n&&"function"==typeof n.onClick&&(0,o.k)(this,"_on",n)}validateOpen(n){(0,o.l)(this,n)}componentWillLoad(){this.validateDisabled(this._disabled),this.validateLabel(this._label),this.validateLevel(this._level),this.validateOn(this._on),this.validateOpen(this._open)}get host(){return(0,i.g)(this)}static get watchers(){return{_disabled:["validateDisabled"],_label:["validateLabel"],_level:["validateLevel"],_on:["validateOn"],_open:["validateOpen"]}}};r.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  .hidden {\n    display: none;\n    visibility: hidden;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed !important;\n    opacity: 0.5 !important;\n    outline: none !important;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  :host {\n    display: block;\n  }\n}\n@layer kol-component {\n  /* For animation technique see https://css-tricks.com/css-grid-can-do-auto-height-transitions/ */\n  .wrapper {\n    display: grid;\n    grid-template-rows: 0fr;\n    overflow: hidden;\n    transition: grid-template-rows 0.3s;\n  }\n  .accordion.open .wrapper {\n    grid-template-rows: 1fr;\n  }\n  .animation-wrapper {\n    min-height: 0;\n    transition: visibility 0.3s;\n    /* This property is important to keep in sync with the visual transition (template-rows). Without it interactive elements within the accordion would stay focusable. */\n    visibility: hidden;\n  }\n  .accordion.open .animation-wrapper {\n    visibility: visible;\n  }\n  @media (prefers-reduced-motion) {\n    .animation-wrapper,\n    .wrapper {\n      transition-duration: 0s;\n    }\n  }\n  /* @see https://github.com/public-ui/kolibri/issues/5952 */\n  @media print {\n    .accordion:not(.open) .animation-wrapper {\n      display: none;\n    }\n  }\n  /*\n  * Inside a button, the caption text is always centered.\n  * So we have to align the text to the left.\n  */\n  .accordion .kol-heading-wc .kol-button-wc button .kol-span-wc {\n    justify-items: start;\n  }\n}"}},3692:(n,e,t)=>{t.d(e,{w:()=>o});var i=t(8886);const o=(n,e)=>{(0,i.w)(n,"_level",(n=>"number"==typeof n&&i.m.includes(n)),new Set([`Number {${i.m.join(", ")}`]),e,{defaultValue:1,required:!0})}}}]);