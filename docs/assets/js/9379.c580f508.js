/*! For license information please see 9379.c580f508.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[9379],{8862:(t,a,i)=>{i.d(a,{a:()=>s,w:()=>l});var e=i(6896);const s=(t,a,i)=>{(0,e.a)(t,a,(t=>"button"===t||"reset"===t||"submit"===t),new Set(["KoliBriButtonType {button, reset, submit}"]),i)},l=(t,a,i)=>{(0,e.a)(t,a,(t=>"primary"===t||"secondary"===t||"normal"===t||"danger"===t||"ghost"===t||"custom"===t),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),i,{defaultValue:"normal"})}},5714:(t,a,i)=>{i.d(a,{a:()=>o,p:()=>h});var e=i(5298),s=i(8764),l=i(6896);const n=t=>{for((0,s.b)()&&((0,e.d)("\u2193 Search form element start."),console.log(t));t instanceof HTMLElement&&"FORM"!==t.tagName&&"KOL-FORM"!==t.tagName;)t=t.parentElement instanceof HTMLElement?t.parentElement:t.parentNode instanceof ShadowRoot?t.parentNode.host:null,(0,s.b)()&&console.log(t);return(0,s.b)()&&(0,e.d)("\u2191 Search form element finished."),t},o=(t={})=>{const a=n(t.form);if(a instanceof HTMLElement){const t=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===a.tagName)(0,l.e)(t,a),a.dispatchEvent(t);else if("KOL-FORM"===a.tagName){(0,l.e)(t,l.K.querySelector("form",a));const i=a;"object"==typeof i._on&&null!==typeof i._on&&"function"==typeof i._on.onReset&&i._on.onReset(t)}}},h=(t={})=>{const a=n(t.form);if(a instanceof HTMLElement){const t=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:a});if("FORM"===a.tagName)(0,l.e)(t,a),a.dispatchEvent(t);else if("KOL-FORM"===a.tagName){(0,l.e)(t,l.K.querySelector("form",a));const i=a;"object"==typeof i._on&&null!==typeof i._on&&"function"==typeof i._on.onSubmit&&i._on.onSubmit(t)}}}},9379:(t,a,i)=>{i.r(a),i.d(a,{kol_button_wc:()=>b,kol_span_wc:()=>p});var e=i(2339),s=i(1471),l=i(5298),n=i(8764),o=i(6896),h=i(2690),c=i(2293),r=i(6197),d=i(367),_=i(5714),v=i(8862);const b=class{constructor(t){(0,e.r)(this,t),this.nonce=(0,n.n)(),this.catchRef=t=>{this.ref=t,(0,h.p)(this.host,this.ref)},this.onClick=t=>{var a,i;"submit"===this.state._type?(0,_.p)({form:this.host,ref:this.ref}):"reset"===this.state._type?(0,_.a)({form:this.host,ref:this.ref}):"function"==typeof(null===(a=this.state._on)||void 0===a?void 0:a.onClick)?((0,o.e)(t,this.ref),null===(i=this.state._on)||void 0===i||i.onClick(t,this.state._value)):(0,l.d)("It was no button click callback configured!")},this._accessKey=void 0,this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel="",this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._icon=void 0,this._iconAlign="left",this._iconOnly=!1,this._id=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_ariaLabel:"",_icon:{},_iconAlign:"left",_label:"",_on:{},_type:"button"}}render(){return(0,e.h)(e.H,null,(0,e.h)("button",Object.assign({ref:this.catchRef,accessKey:this.state._accessKey,"aria-controls":this.state._ariaControls,"aria-current":(0,o.i)(this.state._ariaCurrent),"aria-expanded":(0,o.g)(this.state._ariaExpanded),"aria-label":!1===this.state._iconOnly?this.state._ariaLabel||this.state._label:void 0,"aria-labelledby":!0===this.state._iconOnly?this.nonce:void 0,"aria-selected":(0,o.i)(this.state._ariaSelected),class:{[this.state._variant]:"custom"!==this.state._variant,[this.state._customClass]:"custom"===this.state._variant&&"string"==typeof this.state._customClass&&this.state._customClass.length>0,"icon-only":!0===this.state._iconOnly},disabled:this.state._disabled,id:this.state._id},this.state._on,{onClick:this.onClick,role:this.state._role,tabIndex:this.state._tabIndex,type:this.state._type}),(0,e.h)("kol-span-wc",{_icon:this._icon,_iconOnly:this._iconOnly,_label:this.state._ariaLabel||this.state._label},(0,e.h)("slot",{name:"expert",slot:"expert"}))),!0===this.state._iconOnly&&(0,e.h)("kol-tooltip",{"aria-hidden":"true",_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._ariaLabel||this.state._label}))}validateAccessKey(t){(0,o.w)(this,"_accessKey",t)}validateAriaControls(t){(0,o.w)(this,"_ariaControls",t)}validateAriaCurrent(t){(0,o.a)(this,"_ariaControls",(t=>!0===t||"date"===t||"location"===t||"page"===t||"step"===t||"time"===t),new Set(["boolean","String {data, location, page, step, time}"]),t)}validateAriaExpanded(t){(0,o.b)(this,"_ariaExpanded",t)}validateAriaLabel(t){(0,r.v)(this,t)}validateAriaSelected(t){(0,o.b)(this,"_ariaSelected",t)}validateCustomClass(t){(0,o.w)(this,"_customClass",t,{defaultValue:void 0})}validateDisabled(t){(0,o.b)(this,"_disabled",t),!0===t&&(0,l.c)()}validateIcon(t){(0,c.v)(this,t)}validateIconAlign(t){(0,c.w)(this,t)}validateIconOnly(t){(0,o.b)(this,"_iconOnly",t,{defaultValue:!1})}validateId(t){(0,o.w)(this,"_id",t)}validateLabel(t){(0,r.a)(this,t)}validateOn(t){"object"==typeof t&&null!==t&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validateRole(t){(0,o.w)(this,"_role",t)}validateTabIndex(t){(0,d.v)(this,t)}validateTooltipAlign(t){(0,s.w)(this,"_tooltipAlign",t)}validateType(t){(0,v.a)(this,"_type",t)}validateValue(t){(0,o.s)(this,"_value",t)}validateVariant(t){(0,v.w)(this,"_variant",t)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaLabel(this._ariaLabel),this.validateAriaSelected(this._ariaSelected),this.validateCustomClass(this._customClass),this.validateDisabled(this._disabled),this.validateIcon(this._icon),this.validateIconAlign(this._iconAlign),this.validateIconOnly(this._iconOnly),this.validateId(this._id),this.validateLabel(this._label),this.validateOn(this._on),this.validateRole(this._role),this.validateTabIndex(this._tabIndex),this.validateTooltipAlign(this._tooltipAlign),this.validateType(this._type),this.validateValue(this._value),this.validateVariant(this._variant)}get host(){return(0,e.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_id:["validateId"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}},u=t=>{t instanceof Node&&setTimeout((()=>{var a,i;null===(a=t.parentElement)||void 0===a||a.removeChild(t),null===(i=t.parentNode)||void 0===i||i.removeChild(t)}))},p=class{constructor(t){(0,e.r)(this,t),this._icon=void 0,this._iconOnly=!1,this._label=void 0,this.state={_icon:{},_iconOnly:!1,_label:""}}render(){return(0,e.h)(e.H,{class:{"icon-only":this.state._iconOnly}},this.state._icon.top&&(0,e.h)("kol-icon",{class:{"icon top":!0},style:this.state._icon.top.style,_ariaLabel:"",_icon:this.state._icon.top.icon}),(0,e.h)("span",null,this.state._icon.left&&(0,e.h)("kol-icon",{class:{"icon left":!0},style:this.state._icon.left.style,_ariaLabel:"",_icon:this.state._icon.left.icon}),!0!==this.state._iconOnly&&this.state._label.length>0?(0,e.h)("span",null,this.state._label):"",(0,e.h)("span",{ref:this.state._label.length>0||!0===this.state._iconOnly?u:void 0},(0,e.h)("slot",{name:"expert"})),this.state._icon.right&&(0,e.h)("kol-icon",{class:{"icon right":!0},style:this.state._icon.right.style,_ariaLabel:"",_icon:this.state._icon.right.icon})),this.state._icon.bottom&&(0,e.h)("kol-icon",{class:{"icon bottom":!0},style:this.state._icon.bottom.style,_ariaLabel:"",_icon:this.state._icon.bottom.icon}))}validateIcon(t){(0,c.v)(this,t)}validateIconOnly(t){(0,o.b)(this,"_iconOnly",t)}validateLabel(t){(0,r.a)(this,t)}componentWillLoad(){this.validateIcon(this._icon),this.validateIconOnly(this._iconOnly),this.validateLabel(this._label)}static get watchers(){return{_icon:["validateIcon"],_iconOnly:["validateIconOnly"],_label:["validateLabel"]}}}}}]);