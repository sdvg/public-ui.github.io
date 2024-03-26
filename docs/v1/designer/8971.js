/*! For license information please see 8971.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[8971],{68971:(e,t,i)=>{i.r(t),i.d(t,{kol_modal:()=>h});var n=i(52951),a=i(49415),l=i(47703),o=i(52016),s=i(1012);const d=new class{constructor(){this.lockedElements=new Map,this.modalStack=new Map}lockElement(e){const t=e.getAttribute("tabindex");(e instanceof HTMLAnchorElement||e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement||"string"==typeof t||void 0!==e.dataset.kolModal)&&("string"==typeof t?this.lockedElements.set(e,{tabIndex:t}):this.lockedElements.set(e,{}),e.setAttribute("tabindex","-1"),e.setAttribute("aria-hidden","true"),e.style.userSelect="none")}unlockElement(e,t){"string"==typeof e.tabIndex?t.setAttribute("tabindex",e.tabIndex):t.removeAttribute("tabindex"),t.removeAttribute("aria-hidden"),t.style.userSelect="unset",this.lockedElements.delete(t)}unlockLockedElements(e){e.forEach(this.unlockElement.bind(this))}lockFocus(e,t){if(e!==t&&(e instanceof HTMLElement||e instanceof ShadowRoot)){e instanceof HTMLElement&&(this.lockElement(e),this.lockFocus(e.shadowRoot,t));for(let i=0;i<e.children.length;i++)this.lockFocus(e.children[i],t)}}renderModalIfExists(e){if(e instanceof HTMLElement){this.lockedElements.has(e)&&this.unlockElement(this.lockedElements.get(e),e);const t=setTimeout((()=>{clearTimeout(t),e.focus()}),500)}if(this.unlockLockedElements(this.lockedElements),this.modalStack.size>0){const e=Array.from(this.modalStack.keys()),t=e[e.length-1];this.modalStack.forEach(((e,i)=>{i.style.display=t===i?"inline":"none"})),(0,s.g)().body.style.maxHeight="100vh",(0,s.g)().body.style.overflow="hidden",this.lockFocus((0,s.g)().body,t)}else(0,s.g)().body.style.maxHeight="unset",(0,s.g)().body.style.overflow="unset"}openModal(e,t){e instanceof HTMLElement==0?s.L.warn("[KolModalService] Die DOM-Referenz des Modals ist nicht valide."):(this.modalStack.set(e,{activeElement:t}),this.renderModalIfExists())}closeModal(e){var t;if(e instanceof HTMLElement==0)s.L.warn("[KolModalService] Die DOM-Referenz des Modals ist nicht valide.");else{const i=null===(t=this.modalStack.get(e))||void 0===t?void 0:t.activeElement;this.modalStack.delete(e),this.renderModalIfExists(i)}}},h=class{constructor(e){(0,n.r)(this,e),this.onKeyDown=e=>{e&&"Escape"===e.code&&(this._activeElement=null)},this._activeElement=void 0,this._ariaLabel=void 0,this._label=void 0,this._on=void 0,this._width="100%",this.state={_activeElement:null,_label:"…",_width:"100%"}}componentDidRender(){this.hostElement&&(this.state._activeElement?d.openModal(this.hostElement,this.state._activeElement):d.closeModal(this.hostElement))}disconnectedCallback(){this.hostElement&&d.closeModal(this.hostElement)}render(){return(0,n.h)(n.H,{key:"ee7283c9ac80b66fbb1b31ff3b3cb0eea09a59c5",class:"kol-modal",ref:e=>{this.hostElement=e}},this.state._activeElement&&(0,n.h)("div",{class:"overlay"},(0,n.h)("div",{class:"modal",style:{width:this.state._width},"aria-label":this.state._label,"aria-modal":"true",role:"dialog",onKeyDown:this.onKeyDown,ref:e=>{e&&(e.setAttribute("tabindex","0"),setTimeout((()=>e.focus()),250))}},(0,n.h)("slot",null))))}validateActiveElement(e){(0,o.w)(this,"_activeElement",(e=>"object"==typeof e||null===e),new Set(["HTMLElement","null"]),e,{defaultValue:null,hooks:{afterPatch:()=>{var e;null===this._activeElement&&(null===(e=this.state._on)||void 0===e?void 0:e.onClose)&&this.state._on.onClose()}}})}validateAriaLabel(e){this.validateLabel(e)}validateLabel(e){(0,a.v)(this,e,{required:!0})}validateOn(e){if("object"==typeof e&&null!==e){(0,l.f)("[KolTabs] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const t={};"function"!=typeof e.onClose&&!0!==e.onClose||(t.onClose=e.onClose),(0,o.s)(this,"_on",t)}}validateWidth(e){(0,o.d)(this,"_width",e,{defaultValue:"100%"})}componentWillLoad(){this.validateActiveElement(this._activeElement),this.validateLabel(this._label||this._ariaLabel),this.validateOn(this._on),this.validateWidth(this._width)}static get watchers(){return{_activeElement:["validateActiveElement"],_ariaLabel:["validateAriaLabel"],_label:["validateLabel"],_on:["validateOn"],_width:["validateWidth"]}}};h.style={default:":host{--a11y-min-size:44px;background-color:white;color:black;font-family:Verdana}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role=button],button:not([role=link]),.kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}[hidden]{display:none !important}:host{max-width:100%}*{box-sizing:border-box}.kol-span-wc{display:grid;place-items:center}.kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}.icon-only>.kol-span-wc>span>span{display:none}.hidden{display:none;visibility:hidden}.overlay{background-color:rgba(0, 0, 0, 0.33);display:flex;height:100%;inset:0;position:fixed;width:100%;z-index:100}.modal{margin:auto;max-height:100%;max-width:100%}"}},49415:(e,t,i)=>{i.d(t,{a:()=>r,c:()=>d,h:()=>s,v:()=>c});var n=i(47703),a=i(52016);const l=/[a-zA-Z0-9äöüÄÖÜß]/g,o=/^\d+$/;function s(e,t=1){return function(e){var t;return"string"==typeof e&&(null===(t=e.match(l))||void 0===t?void 0:t.length)||0}(e)>=t}function d(e){return o.test(e)}const h=new Set(["string"]),c=(e,t,i={})=>{(0,a.w)(e,"_label",(e=>"string"==typeof e),h,t,function(e){var t;return Object.assign(Object.assign({},e),{hooks:{afterPatch:(t,i,a,l)=>{var o,h;"function"==typeof(null===(o=e.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(h=e.hooks)||void 0===h||h.afterPatch(t,i,a,l)),"string"==typeof t&&!1===s(t,3)&&!1===d(t)&&(0,n.a)(`The heading or label ("${t}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof t&&t.length>80&&(0,n.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(t=e.hooks)||void 0===t?void 0:t.beforePatch}})}(i))},r=c}}]);