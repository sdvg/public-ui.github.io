/*! For license information please see 5483.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[5483],{45483:(e,t,i)=>{i.r(t),i.d(t,{kol_tree_item:()=>r});var n=i(21700),l=i(37420),s=(e,t,i)=>new Promise(((n,l)=>{var s=e=>{try{o(i.next(e))}catch(e){l(e)}},r=e=>{try{o(i.throw(e))}catch(e){l(e)}},o=e=>e.done?n(e.value):Promise.resolve(e.value).then(s,r);o((i=i.apply(e,t)).next())}));const r=class{constructor(e){(0,n.r)(this,e),this._active=void 0,this._label=void 0,this._open=void 0,this._href=void 0}focusLink(){return s(this,null,(function*(){this.element&&(yield this.element.focusLink())}))}expand(){return s(this,null,(function*(){this.element&&(yield this.element.expand())}))}collapse(){return s(this,null,(function*(){this.element&&(yield this.element.collapse())}))}isOpen(){return s(this,null,(function*(){var e,t;return null!==(t=yield null===(e=this.element)||void 0===e?void 0:e.isOpen())&&void 0!==t&&t}))}render(){return(0,n.h)(l.v,{key:"fd5558fc8ed9c498766b0db58544dd8d730448ab",class:"kol-tree-item",_active:this._active,_label:this._label,_open:this._open,_href:this._href,ref:e=>this.element=e},(0,n.h)("slot",{key:"7adb4e2c137ce675c2608e58794ab52646153405"}))}};r.style={default:"@layer kol-component {\n  :host {\n    font-size: calc(16rem / var(--kolibri-root-font-size, 16));\n  }\n}"}}}]);