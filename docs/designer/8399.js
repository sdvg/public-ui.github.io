/*! For license information please see 8399.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[8399],{80718:(t,e,i)=>{i.d(e,{w:()=>s});var a=i(68424);const s=(t,e,i)=>{(0,a.a)(t,e,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["TooltipAlignment {top, right, buttom, left}"]),i,{defaultValue:"top"})}},48399:(t,e,i)=>{i.r(e),i.d(e,{kol_link_wc:()=>_});var a=i(72947),s=i(80718),l=i(26737),n=i(33810),r=i(68424),o=i(88901),h=i(49750),d=i(45301);const _=class{constructor(t){(0,a.r)(this,t),this.nonce=(0,n.n)(),this.catchRef=t=>{this.ref=t,(0,h.p)(this.host,this.ref)},this.getRenderValues=()=>{let t={};"string"==typeof this.state._selector&&(t={role:"link",tabIndex:0,onClick:()=>{(0,r.h)(this.state._selector)},onKeyPress:()=>{(0,r.h)(this.state._selector)}});const e={href:"string"==typeof this.state._href&&this.state._href.length>0?this.state._href:"javascript:void(0)",target:"string"==typeof this.state._target&&this.state._target.length>0?this.state._target:void 0,rel:"string"==typeof this.state._target&&"_self"!==this.state._target?"noopener":void 0};let i=this.state._fill;!1!==this.state._stealth&&(i=!1);let a=this.state._underline;return"image"===this.state._useCase&&(a=!1),"image"!==this.state._useCase&&!0!==this.state._iconOnly||"string"==typeof this.state._ariaLabel&&0!==this.state._ariaLabel.length||(0,l.d)("[KolLink] Es muss ein Aria-Label gesetzt werden, wenn eine Grafik verlinkt oder der Icon-Only-Modus verwendet wird."),{tagAttrs:e,underline:a,fill:i,goToProps:t}},this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel="",this._ariaSelected=void 0,this._disabled=!1,this._fill=!1,this._href="",this._icon=void 0,this._iconAlign="left",this._iconOnly=!1,this._label=void 0,this._on=void 0,this._part=void 0,this._role=void 0,this._selector=void 0,this._stealth=!1,this._tabIndex=void 0,this._target=void 0,this._targetDescription="Der Link wird in einem neuen Tab geöffnet.",this._tooltipAlign="right",this._underline=!0,this._useCase="text",this.state={_ariaLabel:"",_icon:{},_iconAlign:"left",_label:""}}render(){const{tagAttrs:t,underline:e,fill:i,goToProps:s}=this.getRenderValues();return(0,a.h)(a.H,null,(0,a.h)("a",Object.assign({ref:this.catchRef},t,{"aria-controls":this.state._ariaControls,"aria-current":this.state._ariaCurrent,"aria-expanded":(0,r.g)(this.state._ariaExpanded),"aria-labelledby":"image"===this.state._useCase||!0===this.state._iconOnly?this.nonce:void 0,"aria-selected":(0,r.g)(this.state._ariaSelected),class:{"disabled ":!0===this.state._disabled,"kol-visited":"nav"!==this.state._useCase,"flex flex-wrap items-center":!1===this.state._iconOnly,"grid text-center":!0===this.state._iconOnly,"skip ":!1!==this.state._stealth,"icon-only":!0===this.state._iconOnly},part:`link ${"string"==typeof this.state._part?this.state._part:""}`},this.state._on,s,{role:this.state._role,style:{cursor:"pointer",display:"image"===this.state._useCase?"block":void 0,textDecorationLine:!0===e?"underline":"none",width:!0===i?"100%":void 0},tabIndex:this.state._tabIndex}),(0,a.h)("kol-span-wc",{_icon:this._icon,_iconOnly:this._iconOnly,_label:this.state._ariaLabel||this.state._label},(0,a.h)("slot",{name:"expert",slot:"expert"})),"string"==typeof this.state._target&&"_self"!==this.state._target&&(0,a.h)("kol-icon",{class:"external-link",_ariaLabel:this.state._targetDescription,_icon:"fa-solid fa-arrow-up-right-from-square"})),(!0===this.state._iconOnly||"image"===this.state._useCase)&&(0,a.h)("kol-tooltip",{"aria-hidden":"true",_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._ariaLabel||this.state._label}))}validateAriaControls(t){(0,r.w)(this,"_ariaControls",t)}validateAriaCurrent(t){(0,r.a)(this,"_ariaCurrent",(t=>!0===t||"date"===t||"location"===t||"page"===t||"step"===t||"time"===t),new Set(["boolean","String {data, location, page, step, time}"]),t)}validateAriaExpanded(t){(0,r.b)(this,"_ariaExpanded",t)}validateAriaLabel(t){(0,d.v)(this,t)}validateAriaSelected(t){(0,r.b)(this,"_ariaSelected",t)}validateDisabled(t){(0,r.b)(this,"_disabled",t),!0===t&&(0,l.c)()}validateFill(t){(0,r.b)(this,"_fill",t)}validateHref(t){(0,r.w)(this,"_href",t)}validateIcon(t){(0,o.a)(this,t)}validateIconAlign(t){(0,o.w)(this,t)}validateIconOnly(t){(0,r.b)(this,"_iconOnly",t)}validateLabel(t){(0,d.a)(this,t)}validateOn(t){"object"==typeof t&&null!==t&&Object.prototype.hasOwnProperty.call(t,"onClick")&&"function"==typeof t.onClick&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validatePart(t){(0,r.w)(this,"_part",t,{defaultValue:""})}validateRole(t){(0,r.w)(this,"_role",t)}validateSelector(t){(0,r.w)(this,"_selector",t)}validateStealth(t){(0,r.b)(this,"_stealth",t)}validateTabIndex(t){(0,o.v)(this,t)}validateTarget(t){(0,r.w)(this,"_target",t)}validateTargetDescription(t){(0,r.w)(this,"_targetDescription",t)}validateTooltipAlign(t){(0,s.w)(this,"_tooltipAlign",t)}validateUnderline(t){(0,r.b)(this,"_underline",t)}validateUseCase(t){"string"==typeof t&&(this.state=Object.assign(Object.assign({},this.state),{_useCase:t}))}componentWillLoad(){this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaLabel(this._ariaLabel),this.validateAriaSelected(this._ariaSelected),this.validateDisabled(this._disabled),this.validateFill(this._fill),this.validateHref(this._href),this.validateIcon(this._icon),this.validateIconOnly(this._iconOnly),this.validateLabel(this._label),this.validateOn(this._on),this.validatePart(this._part),this.validateRole(this._role),this.validateSelector(this._selector),this.validateStealth(this._stealth),this.validateTabIndex(this._tabIndex),this.validateTarget(this._target),this.validateTargetDescription(this._targetDescription),this.validateTooltipAlign(this._tooltipAlign),this.validateUnderline(this._underline),this.validateUseCase(this._useCase)}get host(){return(0,a.g)(this)}static get watchers(){return{_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_disabled:["validateDisabled"],_fill:["validateFill"],_href:["validateHref"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_label:["validateLabel"],_on:["validateOn"],_part:["validatePart"],_role:["validateRole"],_selector:["validateSelector"],_stealth:["validateStealth"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_targetDescription:["validateTargetDescription"],_tooltipAlign:["validateTooltipAlign"],_underline:["validateUnderline"],_useCase:["validateUseCase"]}}}},45301:(t,e,i)=>{i.d(e,{a:()=>o,v:()=>r});var a=i(26737),s=i(68424),l=i(67706);const n=(t,e,i,s)=>{const n=e.has("_ariaLabel")?e.get("_ariaLabel"):i.state._ariaLabel;if("string"==typeof n){const t=e.has("_label")?e.get("_label"):i.state._label;!1===(0,l.c)(t,n)&&("_ariaLabel"===s?e.set("_label",n):e.set("_ariaLabel",t),(0,a.e)("Das abweichende Aria-Label am Schalter ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Gründern der Barrierefreiheit für die Sprachsteuerung mit dem Label-Text beginnen."))}},r=(t,e)=>{(0,s.w)(t,"_ariaLabel",e,{hooks:{beforePatch:n}})},o=(t,e)=>{(0,s.w)(t,"_label",e,{hooks:{beforePatch:n},required:!0})}},49750:(t,e,i)=>{i.d(e,{p:()=>s});var a=i(67706);const s=(t,e)=>{(0,a.i)(t)&&t&&(t.focus=t=>null==e?void 0:e.focus(t))}},88901:(t,e,i)=>{i.d(e,{a:()=>h,i:()=>o,v:()=>c,w:()=>d});var a=i(26737),s=i(68424),l=i(67706);const n=(t,e,i)=>{(0,l.i)(i)?t[e]=i:(0,l.a)(i,1)&&(t[e]={icon:i})},r=t=>{var e,i,a,s,r,o,h;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),r=(null===(a=t.nextState)||void 0===a?void 0:a.get("_iconAlign"))||t.state._iconAlign;null===(s=t.nextState)||void 0===s||s.set("_icon",((t,e)=>{let i={};return(0,l.a)(t,1)?i="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(n(i,"top",t.top),n(i,"right",t.right),n(i,"bottom",t.bottom),n(i,"left",t.left)),i})(e,r))}else if(null===(r=t.nextState)||void 0===r?void 0:r.has("_iconAlign")){const e=t.state._iconAlign;null===(o=t.nextState)||void 0===o||o.set("_icon",{[e]:void 0,[null===(h=t.nextState)||void 0===h?void 0:h.get("_iconAlign")]:t.state._icon[e]})}},o=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,l.b)(t.style))&&(0,l.a)(t.icon,1),h=(t,e)=>{(0,s.o)(e,(()=>{try{e=(0,s.p)(e)}catch(t){}(0,s.a)(t,"_icon",(t=>null===t||(0,l.a)(t,1)||"object"==typeof t&&null!==t&&((0,l.a)(t.left,1)||o(t.left)||(0,l.a)(t.right,1)||o(t.right)||(0,l.a)(t.top,1)||o(t.top)||(0,l.a)(t.bottom,1)||o(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,i)=>{null===e&&i.set("_icon",{}),r(t)}},required:!0})}))},d=(t,e)=>{(0,a.b)("Das Property _icon-align bzw. _iconAlign ist veraltet. Die Ausrichtung der Icon's kann jetzt direkt über das _icon-Property vorgenommen werden. (v1.1.10: https://public-ui.github.io/?path=/story/backlog-und-changelog--page)"),(0,s.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{r(t)}}})},_={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,a.e)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},c=(t,e)=>{(0,s.d)(t,"_tabIndex",e,_)}},67706:(t,e,i)=>{i.d(e,{S:()=>r,a:()=>s,b:()=>l,c:()=>n,i:()=>a});const a=t=>"object"==typeof t&&null!==t,s=(t,e=0)=>"string"==typeof t&&t.length>=e,l=t=>{if("object"!=typeof t||null===t)return s(t,1);for(const e in t)if(!1===s(e,1))return!1;return!0},n=(t,e)=>0===e.length||((t,e)=>0===e.length&&new RegExp(`^${t}`).test(e))(t,e),r=new Event("StateChange")}}]);