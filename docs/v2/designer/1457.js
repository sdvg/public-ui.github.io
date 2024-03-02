/*! For license information please see 1457.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[1457],{21457:(n,e,t)=>{t.r(e),t.d(e,{kol_popover_wc:()=>a});var i=t(20173),o=t(13973),s=t(43803);const a=class{constructor(n){(0,i.r)(this,n),this.hidePopoverByEscape=n=>{"Escape"===n.key&&this.hidePopover()},this.hidePopoverByClickOutside=n=>{this.host&&!this.host.contains(n.target)&&this.hidePopover()},this.catchHostAndTriggerElement=n=>{n&&(this.host=n,this.triggerElement=n.previousElementSibling)},this.catchPopoverElement=n=>{this.popoverElement=n},this.catchArrowElement=n=>{this.arrowElement=n},this._align="top",this._show=!1,this.state={_align:"top",_show:!1,_visible:!1}}showPopover(){return n=this,null,e=function*(){this.addListenersToBody(),this.triggerElement&&this.popoverElement&&(yield(0,s.a)({align:this._align,referenceElement:this.triggerElement,arrowElement:this.arrowElement,floatingElement:this.popoverElement}),this.state=Object.assign(Object.assign({},this.state),{_visible:!0}))},new Promise(((t,i)=>{var o=n=>{try{a(e.next(n))}catch(n){i(n)}},s=n=>{try{a(e.throw(n))}catch(n){i(n)}},a=n=>n.done?t(n.value):Promise.resolve(n.value).then(o,s);a((e=e.apply(n,null)).next())}));var n,e}hidePopover(){var n;this.state=Object.assign(Object.assign({},this.state),{_visible:!1}),this._show=!1,null===(n=this.triggerElement)||void 0===n||n.focus(),this.removeListenersToBody()}addListenersToBody(){var n;const e=(0,o.g)().body;e.addEventListener("keyup",this.hidePopoverByEscape),e.addEventListener("click",this.hidePopoverByClickOutside),null===(n=document.scrollingElement)||void 0===n||n.addEventListener("scroll",(()=>{this.showPopover()}),{passive:!0})}removeListenersToBody(){var n;const e=(0,o.g)().body;e.removeEventListener("keyup",this.hidePopoverByEscape),e.removeEventListener("click",this.hidePopoverByClickOutside),null===(n=document.scrollingElement)||void 0===n||n.removeEventListener("scroll",(()=>{this.showPopover()}))}render(){return(0,i.h)(i.H,{key:"1940f4877550060f2888763cbaedf35506d5191e",ref:this.catchHostAndTriggerElement},(0,i.h)("div",{key:"9efff330b3e098e47ac3f7d7ff469f84cb6b07d8",class:{popover:!0,hidden:!this.state._show,show:this.state._visible},ref:this.catchPopoverElement},(0,i.h)("div",{key:"e43a4098d668034146799bb817ddc1a0f3a085bb",class:`arrow ${this.state._align}`,ref:this.catchArrowElement}),(0,i.h)("slot",{key:"6eacf29d42547567074498c7bb844a2f8f5fff83"})))}validateAlign(n){(0,o.as)(this,n)}validateShow(n){(0,o.ao)(this,n),n&&this.showPopover()}componentWillLoad(){this.validateAlign(this._align),this.validateShow(this._show)}static get watchers(){return{_align:["validateAlign"],_show:["validateShow"]}}};a.style="/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  .hidden {\n    display: none;\n    visibility: hidden;\n  }\n  /* This is the text label. */\n  .hide-label > kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed !important;\n    opacity: 0.5 !important;\n    outline: none !important;\n  }\n  [aria-disabled=true]:focus kol-span-wc,\n  [disabled]:focus kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  kol-popover {\n    height: 0;\n    position: absolute;\n  }\n  kol-popover .popover {\n    background-color: #fff;\n    min-height: max-content;\n    min-width: max-content;\n    opacity: 0;\n    position: absolute;\n  }\n  kol-popover .show {\n    animation: 0.3s ease-in forwards fadeInOpacity;\n  }\n  kol-popover .disappear {\n    animation: 0.3s ease-in backwards fadeInOpacity;\n  }\n  kol-popover .arrow {\n    background-color: inherit;\n    height: var(--font-size);\n    position: absolute;\n    rotate: 0.125turn;\n    width: var(--font-size);\n    z-index: -1;\n  }\n  @keyframes fadeInOpacity {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n}"}}]);