/*! For license information please see 7610.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_sample_react=self.webpackChunk_public_ui_sample_react||[]).push([[7610],{7610:(e,t,i)=>{i.r(t),i.d(t,{kol_tree_item_wc:()=>n});var s=i(173),a=i(3973),l=(e,t,i)=>new Promise(((s,a)=>{var l=e=>{try{h(i.next(e))}catch(e){a(e)}},n=e=>{try{h(i.throw(e))}catch(e){a(e)}},h=e=>e.done?s(e.value):Promise.resolve(e.value).then(l,n);h((i=i.apply(e,t)).next())}));const n=class{constructor(e){(0,s.r)(this,e),this.state={_active:!1,_hasChildren:!1,_href:"",_label:"",_open:!1},this._active=void 0,this._label=void 0,this._open=void 0,this._href=void 0}render(){return(0,s.h)(s.H,{key:"ba7536b4c6f3830d30cf9dfbdce43d0fa4f7c4fc",onSlotchange:this.handleSlotchange.bind(this)},(0,s.h)("li",{key:"768094efd223e5213e9db1bc301b98a25cfc8982",class:"tree-item"},(0,s.h)("kol-link",{key:"d70178ff1fb10c761ff39c147cad8e5025fb82b8",class:{"tree-link":!0,active:Boolean(this.state._active)},_label:"",_href:this.state._href,ref:e=>this.linkElement=e,_tabIndex:this.state._active?0:-1},(0,s.h)("span",{key:"116f34650bbd9ffe172cd508d3782b63379f7b1e",slot:"expert"},this.state._hasChildren&&(this.state._open?(0,s.h)("span",{class:"toggle-button",onClick:e=>{this.handleCollapseClick(e)}},"-"):(0,s.h)("span",{class:"toggle-button",onClick:e=>{this.handleExpandClick(e)}},"+"))," ",this.state._label)),(0,s.h)("ul",{key:"4ae5cd8eaee46ee7ae1a7404d2bee06bb6a89804",hidden:!this.state._hasChildren||!this.state._open,role:"group"},(0,s.h)("slot",{key:"6b99c6ab345710c2467cc3c19aa0c9684ae609f4"}))))}validateActive(e){(0,a.av)(this,e||!1)}validateLabel(e){(0,a.v)(this,e)}validateOpen(e){(0,a.n)(this,e)}validateHref(e){(0,a.aw)(this,e)}componentWillLoad(){this.validateActive(this._active),this.validateLabel(this._label),this.validateOpen(this._open),this.validateHref(this._href),this.checkForChildren()}handleSlotchange(){this.checkForChildren()}checkForChildren(){var e;this.state=Object.assign(Object.assign({},this.state),{_hasChildren:Boolean(null===(e=this.host.querySelector("slot"))||void 0===e?void 0:e.assignedElements().length)})}focusLink(){return l(this,null,(function*(){this.linkElement.focus()}))}handleExpandClick(e){return l(this,null,(function*(){e.preventDefault(),this.linkElement.focus(),yield this.expand()}))}expand(){return l(this,null,(function*(){this.state._hasChildren&&(this.state=Object.assign(Object.assign({},this.state),{_open:!0}))}))}handleCollapseClick(e){return l(this,null,(function*(){e.preventDefault(),this.linkElement.focus(),yield this.collapse()}))}collapse(){return l(this,null,(function*(){this.state._hasChildren&&(this.state=Object.assign(Object.assign({},this.state),{_open:!1}))}))}isOpen(){return l(this,null,(function*(){var e;return null!==(e=this.state._open)&&void 0!==e&&e}))}get host(){return(0,s.g)(this)}static get watchers(){return{_active:["validateActive"],_label:["validateLabel"],_open:["validateOpen"],_href:["validateHref"]}}}}}]);