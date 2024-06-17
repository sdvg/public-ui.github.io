/*! For license information please see 9164.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[9164],{29164:(e,n,t)=>{t.r(n),t.d(n,{kol_toolbar:()=>l});var i=t(42020),o=t(37580),a=t(85036),s=t(77420);const l=class{constructor(e){(0,i.r)(this,e),this.indexToElement=new Map,this.renderItem=(e,n)=>{const t=n!==this.currentIndex||(null==e?void 0:e._disabled)?-1:0,a={key:n,class:"kol-toolbar-item",_tabIndex:t},s=e=>{e&&this.indexToElement.set(n,e)};return"_href"in e?(0,i.h)(o.h,Object.assign({},e,a,{ref:s})):(0,i.h)(o.o,Object.assign({},e,a,{ref:s}))},this.state={_label:"",_items:[]},this.currentIndex=0,this._label=void 0,this._items=void 0}render(){return(0,i.h)(i.H,{key:"29b8b51a8b11f85689af5dbfe31df4dca1507ae1",class:"kol-toolbar"},(0,i.h)("div",{key:"2023765a0433e6666e82e79c9c33b59bb741ea2a",class:"toolbar",role:"toolbar","aria-label":this.state._label},this.state._items.map(this.renderItem)))}validateLabel(e){(0,s.v)(this,e)}validateItems(e){((e,n)=>{(0,a.t)(n,(()=>{(0,a.o)(n,(()=>{void 0===n&&(n=[]);try{n=(0,a.p)(n)}catch(e){}Array.isArray(n)&&n.every((e=>"object"==typeof e&&null!==e))&&(0,a.s)(e,"_items",n)}))}))})(this,e)}getCurrentToolbarItem(e){return"number"==typeof e?this.indexToElement.get(e):void 0}setFirstEnabledItemIndex(){var e;this.currentIndex=null===(e=this.state._items)||void 0===e?void 0:e.findIndex((e=>!e._disabled))}handleKeyDown(e){var n,t;if("ArrowRight"!==e.code&&"ArrowLeft"!==e.code)return;e.preventDefault();const i=(null===(n=this._items)||void 0===n?void 0:n.length)-1,o=this.currentIndex;let a=0;switch(e.code){case"ArrowLeft":a=o!==a?o-1:i;break;case"ArrowRight":i!==o&&(a=o+1)}o!==a&&(this.currentIndex=a,null===(t=this.getCurrentToolbarItem(a))||void 0===t||t.focus())}handleBlur(e){e.target===this.host&&this.setFirstEnabledItemIndex()}componentWillLoad(){this.validateLabel(this._label),this.validateItems(this._items),this.setFirstEnabledItemIndex()}get host(){return(0,i.g)(this)}static get watchers(){return{_label:["validateLabel"],_items:["validateItems"]}}};l.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed;\n    opacity: 0.5;\n    outline: none;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  :host {\n    font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n  }\n  .toolbar {\n    display: flex;\n    align-items: center;\n    gap: calc(16rem / var(--kolibri-root-font-size, 16));\n  }\n  .toolbar:focus-within {\n    outline: 1px solid;\n    outline-offset: 2px;\n  }\n}"}},77420:(e,n,t)=>{t.d(n,{a:()=>c,b:()=>l,c:()=>r,h:()=>o,v:()=>h});var i=t(85036);const o=[0,1,2,3,4,5,6],a=/[a-zA-Z0-9äöüÄÖÜß]/g,s=/^\d+$/;function l(e,n=1){return function(e){var n;return"string"==typeof e&&(null===(n=e.match(a))||void 0===n?void 0:n.length)||0}(e)>=n}function r(e){return s.test(e)}const d=new Set(["string"]),h=(e,n,t={})=>{(0,i.w)(e,"_label",(e=>"string"==typeof e),d,n,function(e){var n;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(n,t,o,a)=>{var s,d;"function"==typeof(null===(s=e.hooks)||void 0===s?void 0:s.afterPatch)&&(null===(d=e.hooks)||void 0===d||d.afterPatch(n,t,o,a)),"string"==typeof n&&!1===l(n,3)&&!1===r(n)&&(0,i.a)(`The heading or label ("${n}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof n&&n.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(n=e.hooks)||void 0===n?void 0:n.beforePatch}})}(t))},c=h}}]);