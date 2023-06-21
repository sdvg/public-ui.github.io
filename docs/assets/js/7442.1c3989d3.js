/*! For license information please see 7442.1c3989d3.js.LICENSE.txt */
"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[7442],{75059:(t,e,a)=>{a.d(e,{a:()=>o,p:()=>h});var i=a(24572),s=a(59343),l=a(39813);const n=t=>{for((0,s.b)()&&((0,i.d)("\u2193 Search form element start."),console.log(t));t instanceof HTMLElement&&"FORM"!==t.tagName&&"KOL-FORM"!==t.tagName;)t=t.parentElement instanceof HTMLElement?t.parentElement:t.parentNode instanceof ShadowRoot?t.parentNode.host:null,(0,s.b)()&&console.log(t);return(0,s.b)()&&(0,i.d)("\u2191 Search form element finished."),t},o=(t={})=>{const e=n(t.form);if(e instanceof HTMLElement){const t=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===e.tagName)(0,l.f)(t,e),e.dispatchEvent(t);else if("KOL-FORM"===e.tagName){(0,l.f)(t,l.K.querySelector("form",e));const a=e;"object"==typeof a._on&&null!==typeof a._on&&"function"==typeof a._on.onReset&&a._on.onReset(t)}}},h=(t={})=>{const e=n(t.form);if(e instanceof HTMLElement){const t=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:e});if("FORM"===e.tagName)(0,l.f)(t,e),e.dispatchEvent(t);else if("KOL-FORM"===e.tagName){(0,l.f)(t,l.K.querySelector("form",e));const a=e;"object"==typeof a._on&&null!==typeof a._on&&"function"==typeof a._on.onSubmit&&a._on.onSubmit(t)}}}},26498:(t,e,a)=>{a.d(e,{i:()=>o,v:()=>h,w:()=>d});var i=a(39813),s=a(93789);const l=(t,e,a)=>{(0,s.d)(a)?t[e]=a:(0,s.b)(a,1)&&(t[e]={icon:a})},n=t=>{var e,a,i,n,o,h,d;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(a=t.nextState)||void 0===a?void 0:a.get("_icon"),o=(null===(i=t.nextState)||void 0===i?void 0:i.get("_iconAlign"))||t.state._iconAlign;null===(n=t.nextState)||void 0===n||n.set("_icon",((t,e)=>{let a={};return(0,s.b)(t,1)?a="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(l(a,"top",t.top),l(a,"right",t.right),l(a,"bottom",t.bottom),l(a,"left",t.left)),a})(e,o))}else if(null===(o=t.nextState)||void 0===o?void 0:o.has("_iconAlign")){const e=t.state._iconAlign;null===(h=t.nextState)||void 0===h||h.set("_icon",{[e]:void 0,[null===(d=t.nextState)||void 0===d?void 0:d.get("_iconAlign")]:t.state._icon[e]})}},o=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,s.c)(t.style))&&(0,s.b)(t.icon,1),h=(t,e)=>{(0,i.o)(e,(()=>{try{e=(0,i.p)(e)}catch(t){}(0,i.a)(t,"_icon",(t=>null===t||(0,s.b)(t,1)||"object"==typeof t&&null!==t&&((0,s.b)(t.left,1)||o(t.left)||(0,s.b)(t.right,1)||o(t.right)||(0,s.b)(t.top,1)||o(t.top)||(0,s.b)(t.bottom,1)||o(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,a)=>{null===e&&a.set("_icon",{}),n(t)}},required:!0})}))},d=(t,e)=>{(0,i.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{n(t)}}})}},7442:(t,e,a)=>{a.r(e),a.d(e,{kol_button_wc:()=>f,kol_heading_wc:()=>y});var i=a(81508),s=a(57341),l=a(24572),n=a(59343),o=a(39813),h=a(93789),d=a(26498),r=a(26616),c=a(26483),_=a(75059),v=a(71550),b=a(90557),u=a(87281),p=a(60090);const f=class{constructor(t){(0,i.r)(this,t),this.nonce=(0,n.n)(),this.catchRef=t=>{this.ref=t,(0,h.a)(this.host,this.ref)},this.onClick=t=>{var e,a;"submit"===this.state._type?(0,_.p)({form:this.host,ref:this.ref}):"reset"===this.state._type?(0,_.a)({form:this.host,ref:this.ref}):"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onClick)?(t.stopPropagation(),(0,o.f)(t,this.ref),null===(a=this.state._on)||void 0===a||a.onClick(t,this.state._value)):(0,l.h)("There was no button click callback configured! (_on.onClick)")},this._accessKey=void 0,this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._hideLabel=!1,this._icon=void 0,this._iconAlign=void 0,this._iconOnly=void 0,this._id=void 0,this._label=void 0,this._on=void 0,this._role=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_icon:{},_label:"\u2026",_on:{},_type:"button",_variant:"normal"}}render(){return(0,i.h)(i.H,null,(0,i.h)("button",Object.assign({ref:this.catchRef,accessKey:this.state._accessKey,"aria-controls":this.state._ariaControls,"aria-current":(0,o.j)(this.state._ariaCurrent),"aria-expanded":(0,o.h)(this.state._ariaExpanded),"aria-label":!1===this.state._hideLabel?this.state._ariaLabel:void 0,"aria-labelledby":!0===this.state._hideLabel?this.nonce:void 0,"aria-selected":(0,o.j)(this.state._ariaSelected),class:{[this.state._variant]:"custom"!==this.state._variant,[this.state._customClass]:"custom"===this.state._variant&&"string"==typeof this.state._customClass&&this.state._customClass.length>0,"icon-only":!0===this.state._hideLabel,"hide-label":!0===this.state._hideLabel},disabled:this.state._disabled,id:this.state._id},this.state._on,{onClick:this.onClick,role:this.state._role,tabIndex:this.state._tabIndex,type:this.state._type}),(0,i.h)("kol-span-wc",{_icon:this._icon,_hideLabel:this.state._hideLabel,_label:this.state._label},(0,i.h)("slot",{name:"expert",slot:"expert"}))),!0===this.state._hideLabel&&(0,i.h)("kol-tooltip",{"aria-hidden":"true",_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._ariaLabel||this.state._label}))}validateAccessKey(t){(0,o.w)(this,"_accessKey",t)}validateAriaControls(t){(0,o.w)(this,"_ariaControls",t)}validateAriaCurrent(t){(0,o.a)(this,"_ariaControls",(t=>!0===t||"date"===t||"location"===t||"page"===t||"step"===t||"time"===t),new Set(["boolean","String {data, location, page, step, time}"]),t)}validateAriaExpanded(t){(0,b.v)(this,t)}validateAriaLabel(t){(0,r.a)(this,t)}validateAriaSelected(t){(0,o.b)(this,"_ariaSelected",t)}validateCustomClass(t){(0,o.w)(this,"_customClass",t,{defaultValue:void 0})}validateDisabled(t){(0,b.a)(this,t),!0===t&&(0,l.g)()}validateHideLabel(t){(0,u.v)(this,t)}validateIcon(t){(0,d.v)(this,t)}validateIconAlign(t){(0,d.w)(this,t)}validateIconOnly(t){this.validateHideLabel(t)}validateId(t){(0,o.w)(this,"_id",t)}validateLabel(t){(0,r.b)(this,t)}validateOn(t){"object"==typeof t&&null!==t&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validateRole(t){(0,o.w)(this,"_role",t)}validateTabIndex(t){(0,c.v)(this,t)}validateTooltipAlign(t){(0,s.w)(this,"_tooltipAlign",t)}validateType(t){(0,v.a)(this,"_type",t)}validateValue(t){(0,o.s)(this,"_value",t)}validateVariant(t){(0,v.w)(this,"_variant",t)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaLabel(this._ariaLabel),this.validateAriaSelected(this._ariaSelected),this.validateCustomClass(this._customClass),this.validateDisabled(this._disabled),this.validateHideLabel(this._hideLabel||this._iconOnly),this.validateIcon(this._icon),this.validateIconAlign(this._iconAlign),this.validateId(this._id),this.validateLabel(this._label),this.validateOn(this._on),this.validateRole(this._role),this.validateTabIndex(this._tabIndex),this.validateTooltipAlign(this._tooltipAlign),this.validateType(this._type),this.validateValue(this._value),this.validateVariant(this._variant)}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_hideLabel:["validateHideLabel"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_id:["validateId"],_label:["validateLabel"],_on:["validateOn"],_role:["validateRole"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}},y=class{constructor(t){(0,i.r)(this,t),this.renderHeadline=(t,e)=>{switch(e){case 1:return(0,i.h)("h1",{class:"headline"},t,(0,i.h)("slot",null));case 2:return(0,i.h)("h2",{class:"headline"},t,(0,i.h)("slot",null));case 3:return(0,i.h)("h3",{class:"headline"},t,(0,i.h)("slot",null));case 4:return(0,i.h)("h4",{class:"headline"},t,(0,i.h)("slot",null));case 5:return(0,i.h)("h5",{class:"headline"},t,(0,i.h)("slot",null));case 6:return(0,i.h)("h6",{class:"headline"},t,(0,i.h)("slot",null));default:return(0,i.h)("strong",{class:"headline"},t,(0,i.h)("slot",null))}},this.renderSecondaryHeadline=(t,e)=>{switch(e){case 1:return(0,i.h)("span",{class:"secondary-headline"},t);case 2:return(0,i.h)("h2",{class:"secondary-headline"},t);case 3:return(0,i.h)("h3",{class:"secondary-headline"},t);case 4:return(0,i.h)("h4",{class:"secondary-headline"},t);case 5:return(0,i.h)("h5",{class:"secondary-headline"},t);case 6:return(0,i.h)("h6",{class:"secondary-headline"},t);default:return(0,i.h)("strong",{class:"secondary-headline"},t)}},this._label=void 0,this._level=1,this._secondaryHeadline=void 0,this.state={_label:"\u2026",_level:1}}validateLabel(t){(0,o.w)(this,"_label",t)}validateLevel(t){(0,p.w)(this,t)}validateSecondaryHeadline(t){(0,o.w)(this,"_secondaryHeadline",t)}componentWillLoad(){this.validateLabel(this._label),this.validateLevel(this._level),this.validateSecondaryHeadline(this._secondaryHeadline)}render(){return(0,i.h)(i.H,null,"string"==typeof this.state._secondaryHeadline&&this.state._secondaryHeadline.length>0?(0,i.h)("hgroup",null,this.renderHeadline(this.state._label,this.state._level),this.state._secondaryHeadline&&this.renderSecondaryHeadline(this.state._secondaryHeadline,this.state._level+1)):this.renderHeadline(this.state._label,this.state._level))}static get watchers(){return{_label:["validateLabel"],_level:["validateLevel"],_secondaryHeadline:["validateSecondaryHeadline"]}}}},60090:(t,e,a)=>{a.d(e,{w:()=>s});var i=a(39813);const s=(t,e)=>{(0,i.a)(t,"_level",(t=>"number"==typeof t&&0<=t&&t<=6),new Set(["Number {0, 1, 2, 3, 4, 5, 6}"]),e,{defaultValue:1,required:!0})}}}]);