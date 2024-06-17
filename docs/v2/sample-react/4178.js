/*! For license information please see 4178.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[4178],{5054:(e,n,t)=>{t.d(n,{v:()=>a});var i=t(121);const a=(e,n)=>{(0,i.b)(e,"_disabled",n,{hooks:{afterPatch:e=>{!0===e&&(0,i.c)()}}})}},4149:(e,n,t)=>{function i(e){e.stopImmediatePropagation(),e.stopPropagation()}function a(e,n,t){n&&function(e,n,t){const i=e.dispatchEvent(function(e,n){return new CustomEvent(`kol-${e}`,{bubbles:!0,cancelable:!0,composed:!0,detail:n})}(n,t))}(n,e,t)}function s(e){e.preventDefault(),i(e)}t.d(n,{p:()=>s,s:()=>i,t:()=>a})},4178:(e,n,t)=>{t.r(n),t.d(n,{kol_details:()=>p});var i=t(3685),a=t(4149),s=t(1301),o=t(2466),l=t(5054),d=t(9921),h=t(121),r=t(5264);class c{constructor(e,n,t){this.detailsElement=e,this.summaryElement=n,this.contentElement=t,this.isClosing=!1,this.isExpanding=!1,this.summaryElement.addEventListener("click",this.handleSummaryClick.bind(this))}handleSummaryClick(e){e.preventDefault(),this.isClosing||!this.detailsElement.open?this.open():(this.isExpanding||this.detailsElement.open)&&this.collapse()}open(){this.detailsElement.open=!0,window.requestAnimationFrame(this.expand.bind(this))}expand(){this.isExpanding=!0,this.animateContentHeight("expand")}collapse(){this.isClosing=!0,this.animateContentHeight("collapse")}animateContentHeight(e){let n="expand"===e?0:this.contentElement.offsetHeight,t="expand"===e?this.contentElement.offsetHeight:0;this.animation&&(n=this.contentElement.offsetHeight,this.animation.cancel(),"expand"===e&&(t=this.contentElement.offsetHeight)),this.animation=this.contentElement.animate({height:[`${n}px`,`${t}px`]},{duration:matchMedia("(prefers-reduced-motion)").matches?0:250,easing:"ease-out"}),this.animation.addEventListener("finish",(()=>{this.onAnimationFinish()}),{once:!0}),this.animation.addEventListener("cancel",(()=>{"expand"===e?this.isExpanding=!1:this.isClosing=!1}),{once:!0})}onAnimationFinish(){this.detailsElement.open=this.isExpanding,this.animation=void 0,this.isClosing=!1,this.isExpanding=!1}}const p=class{constructor(e){(0,i.r)(this,e),this.catchDetails=e=>{this.detailsElement=e},this.catchSummary=e=>{this.summaryElement=e,(0,o.a)(this.host,this.summaryElement)},this.preventToggleIfDisabled=e=>{!0===this.state._disabled&&(0,a.p)(e)},this.handleToggle=e=>{clearTimeout(this.toggleTimeout),this.toggleTimeout=setTimeout((()=>{var n,t,i,s;Boolean(null===(n=this.detailsElement)||void 0===n?void 0:n.open)!==this.state._open&&(this._open=Boolean(null===(t=this.detailsElement)||void 0===t?void 0:t.open),(0,a.t)("toggle",this.host,this._open),"function"==typeof(null===(i=this.state._on)||void 0===i?void 0:i.onToggle)&&(null===(s=this.state._on)||void 0===s||s.onToggle(e,this._open)))}),25)},this._disabled=!1,this._label=void 0,this._on=void 0,this._open=!1,this.state={_label:"",_on:{}}}render(){return(0,i.h)(i.H,{key:"4ad8208280a549ec10c547b20ddb003e04e68f01",class:"kol-details"},(0,i.h)("details",{key:"229ce17a1772bed26309a249a4326152edbe4e6e",ref:this.catchDetails,class:{disabled:!0===this.state._disabled,open:!0===this.state._open},onToggle:this.handleToggle},(0,i.h)("summary",{key:"727bb07a088a3138ff4fc29ee6fe43bcf9543379",ref:this.catchSummary,"aria-disabled":this.state._disabled?"true":void 0,onClick:this.preventToggleIfDisabled,onKeyPress:this.preventToggleIfDisabled,tabIndex:this.state._disabled?-1:void 0},(0,i.h)(s.g,{key:"5ecf957e42408222a4fbd78c2a9974c6c6880bc9",_label:"",_icons:"codicon codicon-chevron-right",class:"icon "+(this.state._open?"is-open":"")}),(0,i.h)("span",{key:"2efa00fd37325648edd0c430db88a1d6f73d270c"},this.state._label)),(0,i.h)("div",{key:"1d527e8caeb3c9458ecde81c4c779c505ed19dc4","aria-hidden":!1===this.state._open?"true":void 0,class:"content",ref:e=>this.contentElement=e},(0,i.h)(s.j,{key:"6f57d85524db46b0a381e535b7e280ca92483ce7"},(0,i.h)("slot",{key:"518dd2d74ae80a0de06efcbd1097aa8e72de5db1"})))))}validateDisabled(e){(0,l.v)(this,e)}validateLabel(e){(0,d.v)(this,e,{required:!0})}validateOn(e){"object"==typeof e&&null!==e&&"function"==typeof e.onToggle&&(0,h.s)(this,"_on",e)}validateOpen(e){(0,r.v)(this,e)}componentWillLoad(){this.validateDisabled(this._disabled),this.validateLabel(this._label),this.validateOn(this._on),this.validateOpen(this._open)}componentDidLoad(){if(this.detailsElement&&this.summaryElement&&this.contentElement){const e=new c(this.detailsElement,this.summaryElement,this.contentElement);this.state._open&&e.open()}}get host(){return(0,i.g)(this)}static get watchers(){return{_disabled:["validateDisabled"],_label:["validateLabel"],_on:["validateOn"],_open:["validateOpen"]}}};p.style={default:"/*\n * This file contains all rules for accessibility.\n */\n@layer kol-global {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     */\n    --a11y-min-size: 44px;\n    /*\n     * No element should be used without a background and font color whose contrast ratio has\n     * not been checked. By initially setting the background color to white and the font color\n     * to black, the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    background-color: white;\n    color: black;\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    font-family: Verdana;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /*\n   * All interactive elements should have a minimum size of 44px.\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  [role=button],\n  button:not([role=link]),\n  .kol-input .input {\n    min-height: var(--a11y-min-size);\n    min-width: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n  }\n}\n/**\n * Sometimes we need the semantic element for accessibility reasons,\n * but we don't want to show it.\n *\n * - https://www.a11yproject.com/posts/how-to-hide-content/\n */\n.visually-hidden {\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: 100%; /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n  .kol-span-wc {\n    display: grid;\n    place-items: center;\n  }\n  /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  .kol-span-wc > span {\n    display: flex;\n    place-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  /* This is the text label. */\n  .hide-label > .kol-span-wc > span > span {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    cursor: not-allowed;\n    opacity: 0.5;\n    outline: none;\n  }\n  [aria-disabled=true]:focus .kol-span-wc,\n  [disabled]:focus .kol-span-wc {\n    outline: none !important;\n  }\n}\n@layer kol-component {\n  :host {\n    display: block;\n  }\n}\n@layer kol-component {\n  :host {\n    font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n  }\n  details {\n    display: grid;\n  }\n  details > summary {\n    cursor: pointer;\n    display: flex;\n    place-items: center;\n  }\n  details > summary > span {\n    border-bottom-color: grey;\n    border-bottom-style: solid;\n  }\n  details > summary:focus > span,\n  details > summary:hover > span,\n  details[open] > summary > span {\n    border-bottom-color: #000;\n  }\n  .content {\n    overflow: hidden;\n  }\n  details > .kol-indented-text {\n    margin: 0.25em 0 0 0.5em;\n  }\n  .icon.is-open::part(icon) {\n    transform: rotate(90deg);\n  }\n}"}},9921:(e,n,t)=>{t.d(n,{a:()=>c,b:()=>l,c:()=>d,h:()=>a,v:()=>r});var i=t(121);const a=[0,1,2,3,4,5,6],s=/[a-zA-Z0-9äöüÄÖÜß]/g,o=/^\d+$/;function l(e,n=1){return function(e){var n;return"string"==typeof e&&(null===(n=e.match(s))||void 0===n?void 0:n.length)||0}(e)>=n}function d(e){return o.test(e)}const h=new Set(["string"]),r=(e,n,t={})=>{(0,i.w)(e,"_label",(e=>"string"==typeof e),h,n,function(e){var n;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(n,t,a,s)=>{var o,h;"function"==typeof(null===(o=e.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(h=e.hooks)||void 0===h||h.afterPatch(n,t,a,s)),"string"==typeof n&&!1===l(n,3)&&!1===d(n)&&(0,i.a)(`The heading or label ("${n}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof n&&n.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(n=e.hooks)||void 0===n?void 0:n.beforePatch}})}(t))},c=r},5264:(e,n,t)=>{t.d(n,{v:()=>a});var i=t(121);const a=(e,n,t)=>{(0,i.b)(e,"_open",n,t)}}}]);