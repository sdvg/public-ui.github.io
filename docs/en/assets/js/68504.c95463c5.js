/*! For license information please see 68504.c95463c5.js.LICENSE.txt */ "use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[68504],{7379:(t,e,a)=>{a.d(e,{v:()=>s});var i=a(15752);const s=(t,e)=>{(0,i.i)(t,"_accessKey",e)}},38016:(t,e,a)=>{a.d(e,{v:()=>s});var i=a(15752);const s=(t,e)=>{(0,i.i)(t,"_role",e)}},69676:(t,e,a)=>{a.d(e,{a:()=>n,p:()=>d});var i=a(60848),s=a(15752),l=a(4144);const o=t=>{for((0,l.a)()&&((0,s.j)("\u2193 Search form element start."),console.log(t));t instanceof HTMLElement&&"FORM"!==t.tagName&&t.tagName!==i.m.toUpperCase();){try{t=t.parentElement instanceof HTMLElement?t.parentElement:t.parentNode instanceof ShadowRoot?t.parentNode.host:null}catch(t){}(0,l.a)()&&(console.log(t),(0,s.j)("\u2191 Search form element finished."))}return t},n=(t={})=>{var e,a;const l=o(t.form);if(l instanceof HTMLElement){const t=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===l.tagName)(0,s.q)(t,l),l.dispatchEvent(t);else if(l.tagName===i.m.toUpperCase()){(0,s.q)(t,s.K.querySelector("form",l));const i=l;"function"==typeof(null===(e=i._on)||void 0===e?void 0:e.onReset)&&(null===(a=i._on)||void 0===a||a.onReset(t))}}},d=(t={})=>{const e=o(t.form);if(e instanceof HTMLElement){const t=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:e});if("FORM"===e.tagName)(0,l.a)()&&!1===e.noValidate&&(0,s.j)("If you have not focusable or hidden form fields in your form, you should enable noValidate for your form.",{force:!0}),setTimeout((()=>{"function"==typeof e.requestSubmit?e.requestSubmit():((0,s.q)(t,e),e.dispatchEvent(t))}));else if(e.tagName===i.m.toUpperCase()){(0,s.q)(t,s.K.querySelector("form",e));const a=e;setTimeout((()=>{var e,i;"function"==typeof(null===(e=a._on)||void 0===e?void 0:e.onSubmit)&&(null===(i=a._on)||void 0===i||i.onSubmit(t))}))}}}},32448:(t,e,a)=>{a.d(e,{v:()=>s});var i=a(15752);const s=(t,e)=>{(0,i.i)(t,"_customClass",e,{defaultValue:void 0})}},47836:(t,e,a)=>{a.d(e,{v:()=>s});var i=a(15752);const s=(t,e)=>{(0,i.b)(t,"_disabled",e,{hooks:{afterPatch:t=>{!0===t&&(0,i.c)()}}})}},19684:(t,e,a)=>{a.d(e,{i:()=>n,v:()=>d});var i=a(15752),s=a(63312);const l=(t,e,a)=>{(0,s.c)(a)?t[e]=a:(0,s.i)(a,1)&&(t[e]={icon:a})},o=t=>{var e,a,i;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icons")){const e=null===(a=t.nextState)||void 0===a?void 0:a.get("_icons");null===(i=t.nextState)||void 0===i||i.set("_icons",(t=>{let e={};return(0,s.i)(t,1)?e={left:{icon:t}}:"object"==typeof t&&null!==t&&(l(e,"top",t.top),l(e,"right",t.right),l(e,"bottom",t.bottom),l(e,"left",t.left)),e})(e))}},n=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,s.b)(t.style))&&(void 0===t.label||(0,s.i)(t.label))&&(0,s.i)(t.icon,1),d=(t,e,a={})=>{(0,i.o)(e,(()=>{var l;try{e=(0,i.p)(e)}catch(t){}(0,i.w)(t,"_icons",(t=>{const e="object"==typeof t&&null!==t&&0===Object.keys(t).length;return null===t||e||(0,s.i)(t,1)||"object"==typeof t&&null!==t&&((0,s.i)(t.left,1)||n(t.left)||(0,s.i)(t.right,1)||n(t.right)||(0,s.i)(t.top,1)||n(t.top)||(0,s.i)(t.bottom,1)||n(t.bottom))}),new Set(["KoliBriIcon"]),e,Object.assign(Object.assign({},a),{defaultValue:{},hooks:{afterPatch:null===(l=a.hooks)||void 0===l?void 0:l.afterPatch,beforePatch:(t,e,i,s)=>{var l,n;"function"==typeof(null===(l=a.hooks)||void 0===l?void 0:l.beforePatch)&&(null===(n=a.hooks)||void 0===n||n.beforePatch(t,e,i,s)),o(i)}}}))}))}},68504:(t,e,a)=>{a.r(e),a.d(e,{kol_button_wc:()=>S});var i=a(86104),s=a(22004),l=a(69676),o=a(4636),n=a(60848),d=a(15752),h=a(7379),r=a(19684),c=a(38016),v=a(63312),_=a(32448),u=a(47836),b=a(17584),f=a(25108),y=a(87424),m=a(13716);const p=["button","reset","submit"],g=["primary","secondary","normal","tertiary","danger","ghost","custom"],S=class{render(){const t=(0,v.s)(this.state._label);return(0,i.h)(i.H,{key:"c0d16e55ccda6586451460ed73035afc5094a20c",class:"kol-button-wc"},(0,i.h)("button",Object.assign({key:"6ee3c6aa4c7eb2870b69369ae303b344f9243615",ref:this.catchRef,accessKey:this.state._accessKey||void 0,"aria-controls":this.state._ariaControls,"aria-expanded":(0,d.x)(this.state._ariaExpanded),"aria-label":this.state._hideLabel&&"string"==typeof this.state._label?this.state._label:void 0,"aria-selected":(0,d.y)(this.state._ariaSelected),class:{button:!0,disabled:!0===this.state._disabled,[this.state._variant]:"custom"!==this.state._variant,[this.state._customClass]:"custom"===this.state._variant&&"string"==typeof this.state._customClass&&this.state._customClass.length>0,"hide-label":!0===this.state._hideLabel},disabled:this.state._disabled,id:this.state._id,name:this.state._name},this.state._on,{onClick:this.onClick,role:this.state._role,tabIndex:this.state._tabIndex,type:this.state._type}),(0,i.h)(n.f,{key:"89e898b52482ab8f2b991ee630d3c01eba2c5673",class:"button-inner",_accessKey:this.state._accessKey,_icons:this.state._icons,_hideLabel:this.state._hideLabel,_label:t?"":this.state._label},(0,i.h)("slot",{key:"c7f11890216223942c6adea500e5904409877564",name:"expert",slot:"expert"}))),(0,i.h)(n.a,{key:"31d7ab91f54a8046442ffdb435f55cb4681d1b32","aria-hidden":"true",hidden:t||!this.state._hideLabel,_accessKey:this._accessKey,_align:this.state._tooltipAlign,_label:"string"==typeof this.state._label?this.state._label:""}))}constructor(t){(0,i.r)(this,t),this.catchRef=t=>{this.ref=t,(0,v.a)(this.host,this.ref)},this.onClick=t=>{var e,a;"submit"===this.state._type?(0,l.p)({form:this.host,ref:this.ref}):"reset"===this.state._type?(0,l.a)({form:this.host,ref:this.ref}):((0,s.s)(t),(0,s.t)("click",this.host,this.state._value),this.controller.setFormAssociatedValue(this.state._value),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onClick)&&((0,d.q)(t,this.ref),null===(a=this.state._on)||void 0===a||a.onClick(t,this.state._value)))},this._accessKey=void 0,this._ariaControls=void 0,this._ariaExpanded=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._hideLabel=!1,this._icons=void 0,this._id=void 0,this._label=void 0,this._name=void 0,this._on=void 0,this._role=void 0,this._syncValueBySelector=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._value=void 0,this._variant="normal",this.state={_icons:{},_label:"",_on:{},_type:"button",_variant:"normal"},this.controller=new o.A(this,"button",this.host)}validateAccessKey(t){(0,h.v)(this,t)}validateAriaControls(t){((t,e)=>{(0,d.i)(t,"_ariaControls",e)})(this,t)}validateAriaExpanded(t){((t,e)=>{(0,d.b)(t,"_ariaExpanded",e)})(this,t)}validateAriaSelected(t){((t,e)=>{(0,d.b)(t,"_ariaSelected",e)})(this,t)}validateCustomClass(t){(0,_.v)(this,t)}validateDisabled(t){(0,u.v)(this,t)}validateHideLabel(t){(0,b.v)(this,t)}validateIcons(t){(0,r.v)(this,t)}validateId(t){(0,d.i)(this,"_id",t)}validateLabel(t){(0,f.a)(this,t,{required:!0})}validateName(t){this.controller.validateName(t)}validateOn(t){((t,e)=>{(0,d.w)(t,"_on",(t=>"object"==typeof t&&null!==t),new Set(["ButtonCallbacksPropType {Events.onClick, Events.onMouseDown}"]),e)})(this,t)}validateRole(t){(0,c.v)(this,t)}validateSyncValueBySelector(t){this.controller.validateSyncValueBySelector(t)}validateTabIndex(t){(0,y.v)(this,t)}validateTooltipAlign(t){(0,m.v)(this,t)}validateType(t){((t,e)=>{(0,d.w)(t,"_type",(t=>"string"==typeof t&&p.includes(t)),new Set([`KoliBriButtonType {${p.join(", ")}`]),e)})(this,t)}validateValue(t){(0,d.s)(this,"_value",t),this.controller.setFormAssociatedValue(this.state._value)}validateVariant(t){((t,e)=>{(0,d.w)(t,"_variant",(t=>"string"==typeof t&&g.includes(t)),new Set([`KoliBriButtonVariant {${g.join(", ")}`]),e,{defaultValue:"normal"})})(this,t)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaControls(this._ariaControls),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaSelected(this._ariaSelected),this.validateCustomClass(this._customClass),this.validateDisabled(this._disabled),this.validateHideLabel(this._hideLabel),this.validateIcons(this._icons),this.validateId(this._id),this.validateLabel(this._label),this.validateName(this._name),this.validateOn(this._on),this.validateRole(this._role),this.validateSyncValueBySelector(this._syncValueBySelector),this.validateTabIndex(this._tabIndex),this.validateTooltipAlign(this._tooltipAlign),this.validateType(this._type),this.validateValue(this._value),this.validateVariant(this._variant)}get host(){return(0,i.g)(this)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaExpanded:["validateAriaExpanded"],_ariaSelected:["validateAriaSelected"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_hideLabel:["validateHideLabel"],_icons:["validateIcons"],_id:["validateId"],_label:["validateLabel"],_name:["validateName"],_on:["validateOn"],_role:["validateRole"],_syncValueBySelector:["validateSyncValueBySelector"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"],_value:["validateValue"],_variant:["validateVariant"]}}}}}]);