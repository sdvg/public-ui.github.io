/*! For license information please see 7610.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[7610],{87610:(t,e,i)=>{i.r(e),i.d(e,{kol_tree_item_wc:()=>n});var s=i(65063),l=i(60473),a=(t,e,i)=>new Promise(((s,l)=>{var a=t=>{try{h(i.next(t))}catch(t){l(t)}},n=t=>{try{h(i.throw(t))}catch(t){l(t)}},h=t=>t.done?s(t.value):Promise.resolve(t.value).then(a,n);h((i=i.apply(t,e)).next())}));const n=class{constructor(t){(0,s.r)(this,t),this.state={_active:!1,_hasChildren:!1,_href:"",_label:"",_open:!1},this._active=void 0,this._label=void 0,this._open=void 0,this._href=void 0}render(){return(0,s.h)(s.H,{onSlotchange:this.handleSlotchange.bind(this)},(0,s.h)("li",{class:"tree-item"},(0,s.h)("kol-link",{class:{"tree-link":!0,active:Boolean(this.state._active)},_label:"",_href:this.state._href,ref:t=>this.linkElement=t,_tabIndex:this.state._active?0:-1},(0,s.h)("span",{slot:"expert"},this.state._hasChildren&&(this.state._open?(0,s.h)("span",{class:"toggle-button",onClick:t=>{this.handleCollapseClick(t)}},"-"):(0,s.h)("span",{class:"toggle-button",onClick:t=>{this.handleExpandClick(t)}},"+"))," ",this.state._label)),(0,s.h)("ul",{hidden:!this.state._hasChildren||!this.state._open,role:"group"},(0,s.h)("slot",null))))}validateActive(t){(0,l.av)(this,t||!1)}validateLabel(t){(0,l.v)(this,t)}validateOpen(t){(0,l.n)(this,t)}validateHref(t){(0,l.aw)(this,t)}componentWillLoad(){this.validateActive(this._active),this.validateLabel(this._label),this.validateOpen(this._open),this.validateHref(this._href),this.checkForChildren()}handleSlotchange(){this.checkForChildren()}checkForChildren(){var t;this.state=Object.assign(Object.assign({},this.state),{_hasChildren:Boolean(null===(t=this.host.querySelector("slot"))||void 0===t?void 0:t.assignedElements().length)})}focusLink(){return a(this,null,(function*(){this.linkElement.focus()}))}handleExpandClick(t){return a(this,null,(function*(){t.preventDefault(),this.linkElement.focus(),yield this.expand()}))}expand(){return a(this,null,(function*(){this.state._hasChildren&&(this.state=Object.assign(Object.assign({},this.state),{_open:!0}))}))}handleCollapseClick(t){return a(this,null,(function*(){t.preventDefault(),this.linkElement.focus(),yield this.collapse()}))}collapse(){return a(this,null,(function*(){this.state._hasChildren&&(this.state=Object.assign(Object.assign({},this.state),{_open:!1}))}))}isOpen(){return a(this,null,(function*(){var t;return null!==(t=this.state._open)&&void 0!==t&&t}))}get host(){return(0,s.g)(this)}static get watchers(){return{_active:["validateActive"],_label:["validateLabel"],_open:["validateOpen"],_href:["validateHref"]}}}}}]);