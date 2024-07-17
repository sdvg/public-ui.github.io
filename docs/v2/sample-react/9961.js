/*! For license information please see 9961.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[9961],{9961:(e,t,n)=>{n.r(t),n.d(t,{kol_modal:()=>d});var i=n(6981),o=n(3713),l=n(8921),a=n(6385);const s=new class{constructor(){this.lockedElements=new Map,this.modalStack=new Map}lockElement(e){const t=e.getAttribute("tabindex");(e instanceof HTMLAnchorElement||e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement||"string"==typeof t||void 0!==e.dataset.kolModal)&&("string"==typeof t?this.lockedElements.set(e,{tabIndex:t}):this.lockedElements.set(e,{}),e.setAttribute("tabindex","-1"),e.setAttribute("aria-hidden","true"),e.style.userSelect="none")}unlockElement(e,t){"string"==typeof e.tabIndex?t.setAttribute("tabindex",e.tabIndex):t.removeAttribute("tabindex"),t.removeAttribute("aria-hidden"),t.style.userSelect="unset",this.lockedElements.delete(t)}unlockLockedElements(e){e.forEach(this.unlockElement.bind(this))}lockFocus(e,t){try{if(e!==t&&(e instanceof HTMLElement||e instanceof ShadowRoot)){e instanceof HTMLElement&&(this.lockElement(e),this.lockFocus(e.shadowRoot,t));for(let n=0;n<e.children.length;n++)this.lockFocus(e.children[n],t)}}catch(e){}}renderModalIfExists(e){if(e instanceof HTMLElement){this.lockedElements.has(e)&&this.unlockElement(this.lockedElements.get(e),e);const t=setTimeout((()=>{clearTimeout(t),e.focus()}),500)}if(this.unlockLockedElements(this.lockedElements),this.modalStack.size>0){const e=Array.from(this.modalStack.keys()),t=e[e.length-1];this.modalStack.forEach(((e,n)=>{n.style.display=t===n?"inline":"none"})),(0,o.g)().body.style.maxHeight="100vh",(0,o.g)().body.style.overflow="hidden",this.lockFocus((0,o.g)().body,t)}else(0,o.g)().body.style.maxHeight="unset",(0,o.g)().body.style.overflow="unset"}openModal(e,t){e instanceof HTMLElement==0?o.L.warn("[KolModalService] Die DOM-Referenz des Modals ist nicht valide."):(this.modalStack.set(e,{activeElement:t}),this.renderModalIfExists())}closeModal(e){var t;if(e instanceof HTMLElement==0)o.L.warn("[KolModalService] Die DOM-Referenz des Modals ist nicht valide.");else{const n=null===(t=this.modalStack.get(e))||void 0===t?void 0:t.activeElement;this.modalStack.delete(e),this.renderModalIfExists(n)}}},d=class{constructor(e){(0,i.r)(this,e),this.onKeyDown=e=>{e&&"Escape"===e.code&&(this._activeElement=null)},this._activeElement=void 0,this._label=void 0,this._on=void 0,this._width="100%",this.state={_activeElement:null,_label:"",_width:"100%"}}componentDidRender(){this.hostElement&&(this.state._activeElement?s.openModal(this.hostElement,this.state._activeElement):s.closeModal(this.hostElement))}disconnectedCallback(){this.hostElement&&s.closeModal(this.hostElement)}render(){return(0,i.h)(i.H,{key:"cdf90127b1e3a6494acc2cd6f9e70245f0e78327",class:"kol-modal",ref:e=>{this.hostElement=e}},this.state._activeElement&&(0,i.h)("div",{key:"786de2516f2d40b3d31fa8fd89e905bf4d05c35f",class:"overlay"},(0,i.h)("div",{key:"22425204eaa3a2a133c8ea8e272356d0ffcb4aee",class:"modal",style:{width:this.state._width},"aria-label":this.state._label,"aria-modal":"true",role:"dialog",onKeyDown:this.onKeyDown,ref:e=>{e&&(e.setAttribute("tabindex","0"),setTimeout((()=>e.focus()),250))}},(0,i.h)("slot",{key:"9762249853efc9159e664ff78bbb503fe7165d4e"}))))}validateActiveElement(e){(0,l.w)(this,"_activeElement",(e=>"object"==typeof e||null===e),new Set(["HTMLElement","null"]),e,{defaultValue:null,hooks:{afterPatch:()=>{var e;null===this._activeElement&&(null===(e=this.state._on)||void 0===e?void 0:e.onClose)&&this.state._on.onClose()}}})}validateLabel(e){(0,a.v)(this,e,{required:!0})}validateOn(e){if("object"==typeof e&&null!==e){(0,l.f)("[KolTabs] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const t={};"function"!=typeof e.onClose&&!0!==e.onClose||(t.onClose=e.onClose),(0,l.s)(this,"_on",t)}}validateWidth(e){(0,l.i)(this,"_width",e,{defaultValue:"100%"})}componentWillLoad(){this.validateActiveElement(this._activeElement),this.validateLabel(this._label),this.validateOn(this._on),this.validateWidth(this._width)}static get watchers(){return{_activeElement:["validateActiveElement"],_label:["validateLabel"],_on:["validateOn"],_width:["validateWidth"]}}};d.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed;\n    opacity: 0.5;\n    outline: none;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  :host {\n    font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n  }\n  .overlay {\n    background-color: rgba(0, 0, 0, 0.33);\n    display: flex;\n    height: 100%;\n    inset: 0;\n    position: fixed;\n    width: 100%;\n    z-index: 100;\n  }\n  .modal {\n    margin: auto;\n    max-height: 100%;\n    max-width: 100%;\n  }\n}"}},6385:(e,t,n)=>{n.d(t,{a:()=>c,b:()=>s,c:()=>d,h:()=>o,v:()=>h});var i=n(8921);const o=[0,1,2,3,4,5,6],l=/[a-zA-Z0-9äöüÄÖÜß]/g,a=/^\d+$/;function s(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(l))||void 0===t?void 0:t.length)||0}(e)>=t}function d(e){return a.test(e)}const r=new Set(["string"]),h=(e,t,n={})=>{(0,i.w)(e,"_label",(e=>"string"==typeof e),r,t,function(e){var t;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(t,n,o,l)=>{var a,r;"function"==typeof(null===(a=e.hooks)||void 0===a?void 0:a.afterPatch)&&(null===(r=e.hooks)||void 0===r||r.afterPatch(t,n,o,l)),"string"==typeof t&&!1===s(t,3)&&!1===d(t)&&(0,i.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}})}(n))},c=h}}]);