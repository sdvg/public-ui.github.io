/*! For license information please see 138.9d617845.js.LICENSE.txt */ "use strict";(self.webpackChunk_public_ui_website=self.webpackChunk_public_ui_website||[]).push([[138],{8938:(t,e,i)=>{i.d(e,{w:()=>s});var a=i(2731);const s=(t,e,i)=>{(0,a.a)(t,e,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["Alignment {top, right, buttom, left}"]),i,{defaultValue:"top"})}},1113:(t,e,i)=>{i.r(e),i.d(e,{kol_link_wc:()=>_});var a=i(7492),s=i(1126),l=i(8938),n=i(254),o=i(6220),r=i(2731),h=i(7575),d=i(3427),c=i(9389);const _=class{constructor(t){(0,a.r)(this,t),this.nonce=(0,o.n)(),this.catchRef=t=>{this.ref=t,(0,h.p)(this.host,this.ref)},this.onClick=t=>{var e,i;"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onClick)&&(t.preventDefault(),(0,r.e)(t,this.ref),null===(i=this.state._on)||void 0===i||i.onClick(t,this.state._href))},this.getRenderValues=()=>{let t={};"string"==typeof this.state._selector&&(t={role:"link",tabIndex:0,onClick:()=>{(0,r.h)(this.state._selector)},onKeyPress:()=>{(0,r.h)(this.state._selector)}});const e="string"==typeof this.state._target&&"_self"!==this.state._target,i={href:"string"==typeof this.state._href&&this.state._href.length>0?this.state._href:"javascript:void(0)",target:"string"==typeof this.state._target&&this.state._target.length>0?this.state._target:void 0,rel:e?"noopener":void 0};return"image"!==this.state._useCase&&!0!==this.state._iconOnly||"string"==typeof this.state._ariaLabel&&0!==this.state._ariaLabel.length||(0,n.d)("[KolLink] Es muss ein Aria-Label gesetzt werden, wenn eine Grafik verlinkt oder der Icon-Only-Modus verwendet wird."),{isExternal:e,tagAttrs:i,goToProps:t}},this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel="",this._ariaSelected=void 0,this._disabled=!1,this._href=void 0,this._icon=void 0,this._iconAlign="left",this._iconOnly=!1,this._label=void 0,this._on=void 0,this._role=void 0,this._selector=void 0,this._stealth=!1,this._tabIndex=void 0,this._target=void 0,this._targetDescription=(0,s.a)("kol-open-link-in-tab"),this._tooltipAlign="right",this._useCase="text",this.state={_ariaLabel:"",_href:"javascript:void(0)",_icon:{},_iconAlign:"left",_label:""}}render(){const{isExternal:t,tagAttrs:e,goToProps:i}=this.getRenderValues();return(0,a.h)(a.H,null,(0,a.h)("a",Object.assign({ref:this.catchRef},e,{"aria-controls":this.state._ariaControls,"aria-current":this.state._ariaCurrent,"aria-expanded":(0,r.g)(this.state._ariaExpanded),"aria-labelledby":"image"===this.state._useCase||!0===this.state._iconOnly?this.nonce:void 0,"aria-selected":(0,r.g)(this.state._ariaSelected),class:{disabled:!0===this.state._disabled,"skip ":!1!==this.state._stealth,"icon-only":!0===this.state._iconOnly,"external-link":t}},this.state._on,{onClick:this.onClick,onKeyPress:this.onClick},i,{role:this.state._role,tabIndex:this.state._tabIndex}),(0,a.h)("kol-span-wc",{_icon:this._icon,_iconOnly:this._iconOnly,_label:this.state._ariaLabel||this.state._label},(0,a.h)("slot",{name:"expert",slot:"expert"})),t&&(0,a.h)("kol-icon",{class:"external-link-icon",_ariaLabel:this.state._targetDescription,_icon:"fa-solid fa-arrow-up-right-from-square"})),(!0===this.state._iconOnly||"image"===this.state._useCase)&&(0,a.h)("kol-tooltip",{"aria-hidden":"true",_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._ariaLabel||this.state._label}))}validateAriaControls(t){(0,r.w)(this,"_ariaControls",t)}validateAriaCurrent(t){(0,r.a)(this,"_ariaCurrent",(t=>!0===t||"date"===t||"location"===t||"page"===t||"step"===t||"time"===t),new Set(["boolean","String {data, location, page, step, time}"]),t)}validateAriaExpanded(t){(0,r.b)(this,"_ariaExpanded",t)}validateAriaLabel(t){(0,c.v)(this,t)}validateAriaSelected(t){(0,r.b)(this,"_ariaSelected",t)}validateDisabled(t){(0,r.b)(this,"_disabled",t),!0===t&&(0,n.c)()}validateHref(t){(0,r.w)(this,"_href",t)}validateIcon(t){(0,d.a)(this,t)}validateIconAlign(t){(0,d.w)(this,t)}validateIconOnly(t){(0,r.b)(this,"_iconOnly",t)}validateLabel(t){(0,c.a)(this,t)}validateOn(t){"object"==typeof t&&null!==t&&Object.prototype.hasOwnProperty.call(t,"onClick")&&"function"==typeof t.onClick&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validateRole(t){(0,r.w)(this,"_role",t)}validateSelector(t){(0,r.w)(this,"_selector",t)}validateStealth(t){(0,r.b)(this,"_stealth",t)}validateTabIndex(t){(0,d.v)(this,t)}validateTarget(t){(0,r.w)(this,"_target",t)}validateTargetDescription(t){(0,r.w)(this,"_targetDescription",t)}validateTooltipAlign(t){(0,l.w)(this,"_tooltipAlign",t)}validateUseCase(t){"string"==typeof t&&(this.state=Object.assign(Object.assign({},this.state),{_useCase:t}))}componentWillLoad(){this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaLabel(this._ariaLabel),this.validateAriaSelected(this._ariaSelected),this.validateDisabled(this._disabled),this.validateHref(this._href),this.validateIcon(this._icon),this.validateIconAlign(this._iconAlign),this.validateIconOnly(this._iconOnly),this.validateLabel(this._label),this.validateOn(this._on),this.validateRole(this._role),this.validateSelector(this._selector),this.validateStealth(this._stealth),this.validateTabIndex(this._tabIndex),this.validateTarget(this._target),this.validateTargetDescription(this._targetDescription),this.validateTooltipAlign(this._tooltipAlign),this.validateUseCase(this._useCase)}get host(){return(0,a.g)(this)}static get watchers(){return{_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_disabled:["validateDisabled"],_href:["validateHref"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_selector:["validateSelector"],_stealth:["validateStealth"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_targetDescription:["validateTargetDescription"],_tooltipAlign:["validateTooltipAlign"],_useCase:["validateUseCase"]}}}},9389:(t,e,i)=>{i.d(e,{a:()=>r,v:()=>o});var a=i(254),s=i(2731),l=i(3663);const n=(t,e,i,s)=>{const n=e.has("_ariaLabel")?e.get("_ariaLabel"):i.state._ariaLabel;if("string"==typeof n){const t=e.has("_label")?e.get("_label"):i.state._label;!1===(0,l.c)(t,n)&&("_ariaLabel"===s?e.set("_label",n):e.set("_ariaLabel",t),(0,a.e)("Das abweichende Aria-Label am Schalter ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Gr\xfcndern der Barrierefreiheit f\xfcr die Sprachsteuerung mit dem Label-Text beginnen."))}},o=(t,e)=>{(0,s.w)(t,"_ariaLabel",e,{hooks:{beforePatch:n}})},r=(t,e)=>{(0,s.w)(t,"_label",e,{hooks:{beforePatch:n},required:!0})}},7575:(t,e,i)=>{i.d(e,{p:()=>s,s:()=>l});var a=i(3663);const s=(t,e)=>{(0,a.i)(t)&&t&&(t.focus=t=>null==e?void 0:e.focus(t))},l=(t,e)=>{const i=setTimeout((()=>{clearTimeout(i),t()}),e)}},3427:(t,e,i)=>{i.d(e,{a:()=>h,i:()=>r,v:()=>_,w:()=>d});var a=i(254),s=i(2731),l=i(3663);const n=(t,e,i)=>{(0,l.i)(i)?t[e]=i:(0,l.a)(i,1)&&(t[e]={icon:i})},o=t=>{var e,i,a,s,o,r,h;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),o=(null===(a=t.nextState)||void 0===a?void 0:a.get("_iconAlign"))||t.state._iconAlign;null===(s=t.nextState)||void 0===s||s.set("_icon",((t,e)=>{let i={};return(0,l.a)(t,1)?i="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(n(i,"top",t.top),n(i,"right",t.right),n(i,"bottom",t.bottom),n(i,"left",t.left)),i})(e,o))}else if(null===(o=t.nextState)||void 0===o?void 0:o.has("_iconAlign")){const e=t.state._iconAlign;null===(r=t.nextState)||void 0===r||r.set("_icon",{[e]:void 0,[null===(h=t.nextState)||void 0===h?void 0:h.get("_iconAlign")]:t.state._icon[e]})}},r=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,l.b)(t.style))&&(0,l.a)(t.icon,1),h=(t,e)=>{(0,s.o)(e,(()=>{try{e=(0,s.p)(e)}catch(t){}(0,s.a)(t,"_icon",(t=>null===t||(0,l.a)(t,1)||"object"==typeof t&&null!==t&&((0,l.a)(t.left,1)||r(t.left)||(0,l.a)(t.right,1)||r(t.right)||(0,l.a)(t.top,1)||r(t.top)||(0,l.a)(t.bottom,1)||r(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,i)=>{null===e&&i.set("_icon",{}),o(t)}},required:!0})}))},d=(t,e)=>{(0,a.b)("Das Property _icon-align bzw. _iconAlign ist veraltet. Die Ausrichtung der Icon's kann jetzt direkt \xfcber das _icon-Property vorgenommen werden. (v1.1.10: https://public-ui.github.io/?path=/story/backlog-und-changelog--page)"),(0,s.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{o(t)}}})},c={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,a.e)("Don\u2019t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},_=(t,e)=>{(0,s.d)(t,"_tabIndex",e,c)}},3663:(t,e,i)=>{i.d(e,{S:()=>o,a:()=>s,b:()=>l,c:()=>n,i:()=>a});const a=t=>"object"==typeof t&&null!==t,s=(t,e=0)=>"string"==typeof t&&t.length>=e,l=t=>{if("object"!=typeof t||null===t)return s(t,1);for(const e in t)if(!1===s(e,1))return!1;return!0},n=(t,e)=>0===e.length||((t,e)=>new RegExp(`^${t}`).test(e))(t,e),o=new Event("StateChange")}}]);